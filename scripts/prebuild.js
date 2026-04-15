// Descarga y convierte a WebP todas las imagenes del CMS antes del build.
// Se ejecuta automaticamente al correr el script de build.

import { writeFileSync, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const IMAGES_DIR = join(ROOT, 'static', 'images');
const MANIFEST_DIR = join(ROOT, 'src', 'lib', 'generated');
const MANIFEST_PATH = join(MANIFEST_DIR, 'imageManifest.json');

const DIRECTUS_URL = 'https://content.codeandomexico.org';
const SIZES = [400, 800, 1200];

const token = process.env.DIRECTUS_TOKEN;
if (!token) {
	console.error('Error: DIRECTUS_TOKEN no encontrado en variables de entorno');
	process.exit(1);
}

async function fetchItems(collection, fields) {
	const url = `${DIRECTUS_URL}/items/${collection}?fields=${fields.join(',')}&filter[status][_eq]=published&access_token=${token}`;
	const res = await fetch(url);
	if (!res.ok) throw new Error(`Error al obtener ${collection}: ${res.statusText}`);
	const json = await res.json();
	return json.data;
}

async function downloadImage(assetId, width) {
	const url = `${DIRECTUS_URL}/assets/${assetId}?width=${width}&format=webp&quality=80&access_token=${token}`;
	const res = await fetch(url);
	if (!res.ok) throw new Error(`Error al descargar ${assetId} (${width}w): ${res.statusText}`);
	return Buffer.from(await res.arrayBuffer());
}

async function main() {
	mkdirSync(IMAGES_DIR, { recursive: true });
	mkdirSync(MANIFEST_DIR, { recursive: true });

	const [posts, projects] = await Promise.all([
		fetchItems('Blog_Posts', ['post_image']),
		fetchItems('projects', ['image'])
	]);

	const assetIds = [
		...new Set([
			...posts.map((p) => p.post_image).filter(Boolean),
			...projects.map((p) => p.image).filter(Boolean)
		])
	];

	console.log(`Descargando ${assetIds.length} imagenes en ${SIZES.length} tamaños...`);

	const manifest = {};
	let count = 0;

	for (const assetId of assetIds) {
		manifest[assetId] = {
			sm: `/images/${assetId}-400w.webp`,
			md: `/images/${assetId}-800w.webp`,
			lg: `/images/${assetId}-1200w.webp`
		};

		await Promise.all(
			SIZES.map(async (size) => {
				const buffer = await downloadImage(assetId, size);
				writeFileSync(join(IMAGES_DIR, `${assetId}-${size}w.webp`), buffer);
			})
		);

		count++;
		console.log(`  [${count}/${assetIds.length}] ${assetId}`);
	}

	writeFileSync(MANIFEST_PATH, JSON.stringify(manifest, null, 2));
	console.log(`\nManifiesto guardado: ${MANIFEST_PATH}`);
	console.log(`Imagenes guardadas: ${IMAGES_DIR}`);
}

main().catch((err) => {
	console.error('Error en prebuild:', err);
	process.exit(1);
});
