<script>
	import { onMount } from 'svelte';
	export let action_label;
	export let color = "#00D690";
	let contrastedColor = '';
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
	let darkerColor = darkenColor(color, 7);
	onMount(async () => {
			const fontColorContrast = (await import('font-color-contrast')).default;
			contrastedColor = fontColorContrast(color);
		});
</script>

<button class="Button min-w-[137px] h-12 px-6 py-2 rounded-3xl justify-center items-center inline-flex hover:bg-white/75 transition ease-in duration-150" style={
	`background-color: ${color};
	color: ${contrastedColor}; `
} onMouseOver="this.style.backgroundColor='{darkerColor}'" onMouseOut="this.style.backgroundColor='{color}'">
  <span class="Button text-base font-['Albert Sans'] uppercase leading-normal font-bold">	{action_label}</span>
</button>