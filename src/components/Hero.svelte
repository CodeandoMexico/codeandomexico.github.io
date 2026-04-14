<script>
	import { onMount } from 'svelte';
	/**
	 * @typedef {Object} Props
	 * @property {string} [accentColor]
	 * @property {string} [title]
	 * @property {string} [subtitle]
	 * @property {string} [image]
	 */

	/** @type {Props} */
	let {
		accentColor = '#00D690',
		title = 'Tecnología cívica y datos para mejorar lo público',
		subtitle = '',
		image = "/example.png"
	} = $props();
	
	let contrastedColor = $state('');

	onMount(async () => {
		const fontColorContrast = (await import('font-color-contrast')).default;
		contrastedColor = fontColorContrast(accentColor);
	});
</script>

<div class="hero pt-hero" style="background: {accentColor}">
	<div class="container px-5 py-28">
		<div class="flex-col-reverse md:flex-row flex items-center gap-10 columns-2">
			<div class="md:w-1/2 md:p-5">
				<h1 class="text-6xl font-bold text-white leading-tight">{title}</h1>
				<p class="md:py-6 text-2xl leading-normal" 
				style={`color: ${contrastedColor}`}
				>
					{subtitle}
				</p>
			</div>
			<div class="flex justify-start md:w-1/2 p-5">
				<img src="{image}" alt="Hero" class="md:w-10/12" />
			</div>
		</div>
	</div>
</div>
