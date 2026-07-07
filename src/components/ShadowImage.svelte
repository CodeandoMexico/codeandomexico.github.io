<script>
	/**
	 * @typedef {Object} Props
	 * @property {string} [image]
	 * @property {string} [overlay]
	 * @property {string} [alt]
	 */

	/** @type {Props} */
	let { image = '/photo_example.png', overlay = '', alt = '' } = $props();
</script>

<div class="shadow-image drop-shadow-2xl">
	<div class="absolute w-full h-full mix-blend-multiply opacity-50" style={`background-color: ${overlay};`}></div>
	<img class="drop-shadow-full mix-blend-multiply" src={image} alt={alt} />
</div>
