<script>
	import { fontColorContrast } from '$lib/fontColorContrast.js';

	/** @type {{ action_label: string, color?: string }} */
	let { action_label, color = "#00D690" } = $props();

	const labelColor = $derived(fontColorContrast(color));

	/**
	 * @param {string} hex
	 * @param {number} percent
	 */
	function darkenColor(hex, percent) {
		const num = parseInt(hex.slice(1), 16),
			amt = Math.round(2.55 * percent),
			R = (num >> 16) - amt,
			G = (num >> 8 & 0x00FF) - amt,
			B = (num & 0x0000FF) - amt;
		return `#${(
			0x1000000 +
			(R < 255 ? (R < 0 ? 0 : R) : 255) * 0x10000 +
			(G < 255 ? (G < 0 ? 0 : G) : 255) * 0x100 +
			(B < 255 ? (B < 0 ? 0 : B) : 255)
		)
			.toString(16)
			.slice(1)}`;
	}

	/**
	 * @param {string} hex
	 * @param {number} percent
	 */
	function lightenColor(hex, percent) {
		const num = parseInt(hex.slice(1), 16),
			amt = Math.round(2.55 * percent),
			R = (num >> 16) + amt,
			G = (num >> 8 & 0x00FF) + amt,
			B = (num & 0x0000FF) + amt;
		return `#${(
			0x1000000 +
			(R < 255 ? (R < 0 ? 0 : R) : 255) * 0x10000 +
			(G < 255 ? (G < 0 ? 0 : G) : 255) * 0x100 +
			(B < 255 ? (B < 0 ? 0 : B) : 255)
		)
			.toString(16)
			.slice(1)}`;
	}

	const hoverColor = $derived(
		labelColor === '#ffffff' ? lightenColor(color, 22) : darkenColor(color, 12)
	);
</script>

<button
	class="min-w-[137px] h-12 px-6 py-2 rounded-3xl justify-center items-center inline-flex transition ease-in duration-150"
	style={`background-color: ${color};`}
	onmouseover={(e) => {
		e.currentTarget.style.backgroundColor = hoverColor;
	}}
	onmouseout={(e) => {
		e.currentTarget.style.backgroundColor = color;
	}}
	onfocus={(e) => {
		e.currentTarget.style.backgroundColor = hoverColor;
	}}
	onblur={(e) => {
		e.currentTarget.style.backgroundColor = color;
	}}
>
	<span class="text-base uppercase leading-normal font-bold" style={`color: ${labelColor};`}>{action_label}</span>
</button>
