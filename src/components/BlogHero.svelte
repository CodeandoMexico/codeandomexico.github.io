<script>
	import Badge from './Badge.svelte';
	import ReadingTime from './ReadingTime.svelte';
	import HumanDate from './HumanDate.svelte';
	import CmsImage from '@/components/CmsImage.svelte';
	/**
	 * @typedef {Object} Props
	 * @property {Array<string>} [tags]
	 * @property {string} [title]
	 * @property {string} [slug]
	 * @property {string} [date]
	 * @property {string} [assetId]
	 * @property {Array<{authors_id: {name: string}}>} [authors]
	 * @property {string} [content]
	 */

	/** @type {Props} */
	let {
		tags = [],
		title = 'Blog',
		slug = '',
		date = '',
		assetId = '',
		authors = [],
		content = ''
	} = $props();
</script>

<div class="hero flex gap-2 md:gap-4 flex-col md:flex-row">
	<div class="hero_left aspect-16/9 border border-cmxblack border-2">
		<CmsImage {assetId} alt="" class="" />
	</div>
	<div class="hero_right flex flex-col gap-4">
		<div></div>
		<h1 class="text-2xl md:text-4xl font-black text-cmxblack leading-1 hover:underline">
			<a href="/blog/{slug}">{title}</a>
		</h1>
		<div class="">
			<p class="text-md font-semibold">
				{#each authors as author, i}
					<span
						>{author.authors_id.name || ''}{#if i < authors.length - 1},
						{/if}</span
					>
				{/each}
			</p>
			<p class="text-sm">
				<HumanDate {date} />
				<span class="mx-2">•</span>
				<ReadingTime text={content} />
			</p>
		</div>
		<div class="flex flex-row gap-1">
			{#each tags as tag}
				<Badge text={tag} />
			{/each}
		</div>
	</div>
</div>
