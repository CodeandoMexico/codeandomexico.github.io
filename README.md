# Página Web de Codeando México

Sitio web oficial de [Codeando México](https://codeandomexico.org), una organización sin fines de lucro que durante más de 10 años ha colaborado con gobiernos, asociaciones civiles, periodistas y voluntarias para fortalecer el impacto de personas, equipos e instituciones en el espacio público a través de proyectos de tecnología y datos.

## Stack

- [SvelteKit](https://kit.svelte.dev) + [Svelte 5](https://svelte.dev)
- [Tailwind CSS](https://tailwindcss.com) + [DaisyUI](https://daisyui.com)
- [Directus](https://directus.io) como CMS headless
- Desplegado en GitHub Pages como sitio estático

## Desarrollo local

### Requisitos

- [Node.js](https://nodejs.org) 24+
- [pnpm](https://pnpm.io)

### Instalación

```bash
pnpm install
```

### Variables de entorno

Crea un archivo `.env` en la raíz del proyecto:

```env
DIRECTUS_TOKEN=tu_token_de_directus
```

El token se usa para obtener contenido del CMS (blog, proyectos, recursos). Sin él, el build fallará.

### Comandos

```bash
# Servidor de desarrollo
pnpm dev

# Build de producción (incluye descarga de imágenes del CMS)
pnpm build

# Solo descargar imágenes del CMS
pnpm prebuild-images

# Verificar tipos
pnpm check
```

## Cómo colaborar

¡Las contribuciones son bienvenidas! Puedes ayudar de las siguientes formas:

- **Reportar bugs** — Abre un [issue](https://github.com/codeandomexico/codeandomexico.github.io/issues) describiendo el problema
- **Proponer mejoras** — Abre un issue con tu propuesta antes de empezar a desarrollar
- **Enviar un pull request** — Haz fork del repo, crea una rama con tu cambio y abre un PR hacia `main`

### Guía de estilo

- Componentes Svelte en `PascalCase`
- Módulos TypeScript (utils, servicios, stores) en `camelCase`
- Estilos con Tailwind CSS; evitar CSS repetido
- ódigo en inglés
- Sintaxis de Svelte 5 (no Svelte 4)

## Licencia

GNU Affero General Public License v3.0