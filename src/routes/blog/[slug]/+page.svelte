<script>
	import { browser } from '$app/environment';
	import { updateMenuSelector } from '@/lib/menuSelectorUpdater.js';
	import ReadingTime from '@/components/ReadingTime.svelte';
	import HumanDate from '@/components/HumanDate.svelte';
	import CmsImage from '@/components/CmsImage.svelte';
	let { data } = $props();
	const post = $derived(data.post);
	let title = '';

	$effect(() => {
		const cleanup = updateMenuSelector({ url: '/blog', color: 'text-cmxgreen' });
		if (browser) {
			title = document.title;
		}
		return () => {
			cleanup();
			if (browser) {
				document.title = title;
			}
		};
	});
</script>

<svelte:head>
	<title>{post.title}</title>
	<meta name="description" content={post.meta_description} />
	<meta property="og:title" content={post.title} />
	<meta property="og:description" content={post.meta_description} />
	<meta
		property="og:image"
		content={`https://content.codeandomexico.org/assets/${post.post_image}`}
	/>
</svelte:head>

<section class="my-10 pt-hero">
	<div class="container m-auto max-w-prose mb-8 px-4">
		<h1 class="text-5xl font-black mb-4">{post.title}</h1>
		{#if post.authors}
			<p class="text-xl my-4">
				Por
				{#each post.authors as author, i}
					<span
						>{author.authors_id.name || ''}{#if i < post.authors.length - 1},
						{/if}</span
					>
				{/each}
			</p>
		{/if}
		<p class="text-lg text-gray-500">
			<HumanDate date={post.date_published || post.date_created} />
		</p>
		<p class="text-sm text-gray-500">
			<ReadingTime text={post.content} />
		</p>
	</div>
	<CmsImage
		assetId={post.post_image}
		alt="Imagen de blog"
		class="w-full max-h-[450px] object-cover mb-8"
	/>
	<div
		class="container m-auto px-4 prose prose-blockquote:text-2xl prose-blockquote:border-green-400"
	>
		<p class="prose text-lg">{@html post.content}</p>
	</div>
</section>
