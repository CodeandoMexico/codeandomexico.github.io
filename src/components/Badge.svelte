<script>
	/**
	 * @typedef {Object} Props
	 * @property {string} [text]
	 */

	/** @type {Props} */
	let { text = 'Badge' } = $props();
</script>

<span class="rounded-full px-3 py-1 text-xs bg-cmxblack text-white whitespace-nowrap">
	{text}
</span>
