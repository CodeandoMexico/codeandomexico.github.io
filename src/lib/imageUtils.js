// Resuelve IDs de assets de Directus a rutas locales WebP.
// Si el manifiesto no tiene el asset (ej. en dev sin prebuild), retorna la URL de Directus.

import manifestJson from './generated/imageManifest.json';

/** @type {Record<string, { sm: string, md: string, lg: string }>} */
const manifest = manifestJson;

const DIRECTUS_URL = 'https://content.codeandomexico.org';

/**
 * @param {string | null | undefined} assetId
 * @returns {{ src: string, srcset: string | null }}
 */
export function getAssetSrcset(assetId) {
	if (!assetId) return { src: '', srcset: null };

	const entry = manifest[assetId];
	if (entry) {
		return {
			src: entry.lg,
			srcset: `${entry.sm} 400w, ${entry.md} 800w, ${entry.lg} 1200w`
		};
	}

	// Fallback para desarrollo local sin haber ejecutado el prebuild
	return {
		src: `${DIRECTUS_URL}/assets/${assetId}`,
		srcset: null
	};
}
