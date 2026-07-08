<script>
  let { tags, addToFilter, removeFromFilter } = $props();
  /** @type {number[]} */
  let activeIndices = $state([]);
  const tagsToShow = $derived(tags.map((tag = '', i = 0) => ({ isActive: activeIndices.includes(i), text: tag })));

  const handleAdd = (/** @type {MouseEvent | undefined} */ e = undefined, tag = '', index = 0) => {
    e?.stopPropagation();
    activeIndices = [...activeIndices, index];
    addToFilter(tag);
  }

  const handleDelete = (/** @type {MouseEvent | undefined} */ e = undefined, tag = '', index = 0) => {
    e?.stopPropagation();
    activeIndices = activeIndices.filter(i => i !== index);
    removeFromFilter(tag);
  }
</script>

{#each tagsToShow as tag, tagInd}
  {#if (tag.isActive)}
    <button
      class="flex pl-3 pr-1 py-1 text-xs justify-center items-center whitespace-nowrap rounded-full bg-cmxblack text-gray-100 px-2 hover:bg-gray-600 hover:text-white focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-cmxgreen focus:bg-gray-600 focus:text-white transition ease-in duration-150"
      onclick={(e) => handleDelete(e, tag.text, tagInd)}
      title="Quitar filtro"
    >
      {tag.text.charAt(0).toUpperCase() + tag.text.slice(1)}
      <svg class="mx-1 h-3 w-3" fill="none" viewBox="0 0 24 24" stroke-width="4" stroke="currentColor" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
  {:else}
    <button
      class="flex px-3 py-1 text-xs justify-center items-center whitespace-nowrap rounded-full text-cmxblack bg-gray-100 px-2 hover:bg-gray-300 hover:text-black focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-cmxgreen focus:bg-gray-300 focus:text-black transition ease-in duration-150"
      onclick={(e) => handleAdd(e, tag.text, tagInd)}
      title="Agregar filtro"
    >
      {tag.text.charAt(0).toUpperCase() + tag.text.slice(1)} 
    </button>
  {/if}
{/each}
