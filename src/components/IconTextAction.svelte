<script>
	import LinkLikeButton from './LinkLikeButton.svelte';
	let {
		icon,
		title = '',
		subtitle = '',
		description = '',
		action = '',
		action_label = ''
	} = $props();
</script>

<div class="space-y-5">
	<img src={icon} alt="" />
	{#if title}
		<h2 class="text-3xl font-bold">{title}</h2>
	{/if }
	{#if subtitle}
		<h3 class="text-3xl font-bold">{subtitle}</h3>
	{/if }
	{#if description}
		<p class="max-w-[550px] min-h-[90px] text-xl">
			{description}
		</p>
	{/if }
	{#if action}
		<div class="my-3">
			<LinkLikeButton go_to={action} action_label={action_label} />
		</div>
	{/if }
</div>
