<script>
	import Badge from '@/components/Badge.svelte';
	import HumanDate from '../HumanDate.svelte';
	import CmsImage from '@/components/CmsImage.svelte';
	let { slug, title, date, assetId, tags, authors } = $props();
</script>

<div class="w-full">
	<div class="md:aspect-video aspect-square mb-4 border border-cmxblack border-1">
		<a href="/blog/{slug}">
			<CmsImage {assetId} alt="Card" class="object-cover w-full h-full" />
		</a>
	</div>
	<div class="space-y-2 flex flex-col gap-2">
		<a href="/blog/{slug}">
			<h2 class="font-bold text-xl">{title}</h2>
		</a>
		<div class="flex flex-col gap-1">
			{#if authors}
				<p class="text-sm">
					{#each authors as author, i}
						<span>
							{author.authors_id.name || ''}{#if i < authors.length - 1},&nbsp;{/if}
						</span>
					{/each}
				</p>
			{/if}
			<p class="text-sm text-gray-400"><HumanDate {date} /></p>
		</div>
		<div class="flex flex-row flex-wrap gap-2">
			{#each tags as tag}
				<Badge text={tag} />
			{/each}
		</div>
	</div>
</div>
