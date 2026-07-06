<script>
	import Badge from '@/components/Badge.svelte';
	import HumanDate from '../HumanDate.svelte';
	import CmsImage from '@/components/CmsImage.svelte';
	let { slug, title, date, assetId, tags, authors } = $props();
</script>

<div class="w-full">
	<a href="/blog/{slug}" class="flex flex-col gap-3 mb-4 text-black hover:underline focus:outline focus:outline-cmxgreen focus:outline-2 focus:outline-offset-2">
		<div class="md:aspect-video aspect-square border border-cmxblack border-1">
			<CmsImage {assetId} alt="" class="object-cover w-full h-full" />
		</div>
		<h3 class="font-bold text-xl">{title}</h3>
		<div>
			{#if authors}
				<p class="text-sm">
					{#each authors as author, i}
						<span>
							{author.authors_id.name || ''}{#if i < authors.length - 1},&nbsp;{/if}
						</span>
					{/each}
				</p>
			{/if}
			<p class="text-sm text-gray-500"><HumanDate {date} /></p>
		</div>
	</a>
	<div class="flex flex-row flex-wrap gap-2 my-3">
		{#each tags as tag}
			<Badge text={tag} />
		{/each}
	</div>
</div>
