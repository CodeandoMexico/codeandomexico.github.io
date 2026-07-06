<script>
	import LinkLikeButton from './LinkLikeButton.svelte';
	let {
		icon,
		title,
		description = '',
		action = '',
		action_label = ''
	} = $props();
</script>

<div class="space-y-5">
	<img src={icon} alt="" />
	<h2 class="text-3xl font-bold">{title}</h2>
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
