<script>
	let { title, description = '' } = $props();
</script>

<div>
	<h2 class="text-5xl font-bold">{title}</h2>
	{#if description}
	<p class="py-6 text-2xl">
		{description}
	</p>
	{/if }
</div>
