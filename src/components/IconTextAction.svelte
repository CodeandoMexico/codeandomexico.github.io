<script>
	import Button from '@/components/Button.svelte';
	import ShadowImage from '@/components/ShadowImage.svelte';
	export let icon;
	export let title;
	export let description;
	export let action;
	export let action_label;
</script>

<div class="space-y-5">
	<img src={icon} alt="Icon" class="" />

	<h2 class="text-3xl font-bold">{title}</h2>
	{#if description }
	<p class="max-w-[550px] min-h-[90px] text-xl">
		{description}
	</p>
	{/if }
	{#if action }
	<div class="my-3">

		<a href={action}>
			<Button action_label={action_label} />
		</a>
	</div>
	{/if }
</div>
