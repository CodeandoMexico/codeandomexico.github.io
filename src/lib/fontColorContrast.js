import pkg from 'font-color-contrast';

/**
 * Normalize CJS default export for Vite client + SSR.
 * @returns {(hex: string) => string}
 */
function resolve() {
	if (typeof pkg === 'function') return /** @type {(hex: string) => string} */ (pkg);
	const outer =
		pkg && typeof pkg === 'object' && 'default' in pkg
			? /** @type {{ default: unknown }} */ (pkg).default
			: undefined;
	if (typeof outer === 'function') return /** @type {(hex: string) => string} */ (outer);
	if (outer && typeof outer === 'object' && 'default' in outer) {
		const inner = /** @type {{ default: unknown }} */ (outer).default;
		if (typeof inner === 'function') return /** @type {(hex: string) => string} */ (inner);
	}
	throw new Error('font-color-contrast: could not resolve a callable export');
}

export const fontColorContrast = resolve();
