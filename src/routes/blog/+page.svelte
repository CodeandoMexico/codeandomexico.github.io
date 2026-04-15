<script>
	import { updateMenuSelector } from '@/lib/menuSelectorUpdater.js';
	import ArticleCard from '@/components/Cards/ArticleCard.svelte';
	import BlogHero from '@/components/BlogHero.svelte';
	import MenuTagsBlog from '@/components/MenuTagsBlog.svelte';
	let { data } = $props();
	const highlightedPost = $derived(data.highlightedPost);
	const posts = $derived(data.posts);
	const tags = $derived(data.tags);
	let activeTag = $state('todos');

	const filteredPosts = $derived(
		activeTag === 'todos'
			? [...posts]
			: posts.filter((post) =>
					post.tags.map((tagItem = '') => tagItem.toLowerCase()).includes(activeTag)
				)
	);

	const handleTags = (tag = '') => {
		activeTag = tag.toLocaleLowerCase();
	};

	$effect(() => updateMenuSelector({ url: '/blog', color: 'text-cmxgreen' }));
</script>

<div class="container my-20 pt-hero mx-auto">
	<div class="container m-auto px-3">
		<div class="my-7">
			<h1 class="text-5xl text-cmxgreen font-bold">Blog</h1>
		</div>
		<BlogHero
			slug={highlightedPost.slug}
			title={highlightedPost.title}
			tags={highlightedPost.tags}
			date={highlightedPost.date_published || highlightedPost.date_created}
			image={`https://content.codeandomexico.org/assets/${highlightedPost.post_image}`}
			authors={highlightedPost.authors}
			content={highlightedPost.content}
		/>
	</div>
	<div class="container mx-auto px-3 pt-16 pb-12 text-center">
		<MenuTagsBlog {activeTag} {handleTags} {tags} />
	</div>
	<div class="container m-auto p-3">
		<div class="md:grid grid-cols-3 gap-5">
			{#each filteredPosts as post}
				<ArticleCard
					slug={post.slug}
					title={post.title}
					tags={post.tags}
					authors={post.authors}
					date={post.date_published || post.date_created}
					image={`https://content.codeandomexico.org/assets/${post.post_image}`}
				/>
			{/each}
		</div>
	</div>
</div>
