<script>
	let { title, description = '' } = $props();
</script>

<div class="">
	<h1 class="text-5xl font-bold">{title}</h1>
	{#if description}
	<p class="py-6 text-2xl">
		{description}
	</p>
	{/if }
</div>
