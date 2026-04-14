<script>
	/**
	 * @typedef {Object} Props
	 * @property {string} [image]
	 * @property {string} [title]
	 * @property {string} [description]
	 */

	/** @type {Props} */
	let { image = '/img/photo-default.png', title = '', description = '' } = $props();
</script>

<div style={`box-shadow: 7px 7px 1px black;`}>
	<img alt="Card" src={image} />
	<div class="p-5 bg-[#F3F3F3]">
		<h3 class="text-lg font-bold">{title}</h3>
		<p>{description}</p>
	</div>
</div>
