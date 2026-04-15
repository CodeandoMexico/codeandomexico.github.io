<script>
	import Badge from '@/components/Badge.svelte';
	import HumanDate from '../HumanDate.svelte';
	let { slug, title, date, image, tags, authors } = $props();
</script>

<a href="/blog/{slug}">
	<div class="w-full">
		<div class="md:aspect-video aspect-square">
			<img class="object-cover w-full h-full" src={image} alt="Card" />
		</div>
		<div class="space-y-2 mt-5">
			<div class="flex flex-row flex-wrap gap-2">
				{#each tags as tag}
					<Badge text={tag} />
				{/each}
			</div>
			<h2 class="font-extrabold text-xl">{title}</h2>
			{#if authors}
				<p class="text-sm">
					{#each authors as author, i}
						<span
							>{author.authors_id.name || ''}{#if i < authors.length - 1},
							{/if}</span
						>
					{/each}
				</p>
			{/if}
			<p class="text-sm text-gray-400"><HumanDate {date} /></p>
		</div>
	</div>
</a>
