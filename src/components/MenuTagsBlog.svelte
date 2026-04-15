<script>
	let { activeTag, handleTags, tags } = $props();
</script>

{#each tags as tag}
	<a href={null} class={activeTag === tag ? 'text-cmxgreen' : null} onclick={() => handleTags(tag)}>
		{tag.toUpperCase()}
	</a>
{/each}

<style>
	a {
		display: inline-block;
		text-transform: uppercase;
		font-weight: 700;
		line-height: 2.5;
	}
	a:not(:last-child) {
		padding-right: 15px;
	}
	a:hover {
		cursor: pointer;
		text-decoration: underline;
	}
</style>
