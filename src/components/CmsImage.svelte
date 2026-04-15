<script>
	import { getAssetSrcset } from '$lib/imageUtils.js';

	let { assetId, alt = '', ...rest } = $props();
	const imageData = $derived(getAssetSrcset(assetId));
</script>

<picture class="contents">
	{#if imageData.srcset}
		<source
			srcset={imageData.srcset}
			type="image/webp"
			sizes="(max-width: 640px) 400px, (max-width: 1024px) 800px, 1200px"
		/>
	{/if}
	<img src={imageData.src} {alt} loading="lazy" {...rest} />
</picture>
