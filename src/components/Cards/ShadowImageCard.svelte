<script>
	export let image = '/img/photo-default.png';
	export let title = '';
	export let description = '';
</script>

<div style={`box-shadow: 7px 7px 1px black;`}>
	<img alt="Card" src={image} />
	<div class="p-5 bg-[#F3F3F3]">
		<h3 class="text-lg font-bold">{title}</h3>
		<p>{description}</p>
	</div>
</div>
