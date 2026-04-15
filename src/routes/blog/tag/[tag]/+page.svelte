<script>
	import { updateMenuSelector } from '@/lib/menuSelectorUpdater.js';
	import ArticleCard from '@/components/Cards/ArticleCard.svelte';

	let { data } = $props();
	const posts = $derived(data.posts);
	const tag = $derived(data.tag);
	const allTags = $derived(data.allTags);

	$effect(() => updateMenuSelector({ url: '/blog', color: 'text-cmxgreen' }));
</script>

<svelte:head>
	<title>Tag: {tag} — Blog · Codeando México</title>
	<meta name="description" content="Entradas del blog con el tag {tag}" />
</svelte:head>

<div class="container my-20 pt-hero mx-auto">
	<div class="container m-auto px-3">
		<div class="my-7">
			<a href="/blog" class="text-sm text-gray-500 hover:underline">← Blog</a>
			<h1 class="text-5xl text-cmxgreen font-bold mt-2">
				Tag: <span class="capitalize">{tag}</span>
			</h1>
		</div>
	</div>

	<div class="container mx-auto px-3 pt-16 pb-12 text-center">
		<a href="/blog" class="tag-link">TODOS</a>
		{#each allTags as t}
			<a href="/blog/tag/{t}" class="tag-link {t === tag ? 'text-cmxgreen' : ''}">
				{t.toUpperCase()}
			</a>
		{/each}
	</div>

	<div class="container m-auto p-3">
		<div class="md:grid grid-cols-3 gap-x-4 gap-y-12">
			{#each posts as post}
				<ArticleCard
					slug={post.slug}
					title={post.title}
					tags={post.tags}
					authors={post.authors}
					date={post.date_published || post.date_created}
					assetId={post.post_image}
				/>
			{/each}
		</div>
	</div>
</div>

<style>
	.tag-link {
		display: inline-block;
		font-weight: 700;
		line-height: 2.5;
		padding-right: 15px;
	}
	.tag-link:hover {
		cursor: pointer;
		text-decoration: underline;
	}
</style>
