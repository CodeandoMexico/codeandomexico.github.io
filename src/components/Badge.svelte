<script>
	/**
	 * @typedef {Object} Props
	 * @property {string} [text]
	 */

	/** @type {Props} */
	let { text = 'Badge' } = $props();
</script>

<span>
	<a href="/blog/tag/{text}" class="rounded-full px-3 py-2 text-xs bg-cmxblack text-white whitespace-nowrap hover:bg-cmxgreen hover:text-black focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-cmxgreen focus:bg-cmxgreen focus:text-black">
		<span class="sr-only">Buscar etiqueta:</span>
		{text}
	</a>
</span>
