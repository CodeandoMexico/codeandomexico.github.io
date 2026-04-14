<script>
  let { tags, addToFilter, removeFromFilter } = $props();
  /** @type {number[]} */
  let activeIndices = $state([]);
  const tagsToShow = $derived(tags.map((tag = '', i = 0) => ({ isActive: activeIndices.includes(i), text: tag })));

  const handleAdd = (tag = '', index = 0) => {
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
  <a
    href={null}
    class={`flex rounded-full px-3 py-1 text-xs${tag.isActive ? ' active' : ''}`}
    onclick={() => handleAdd(tag.text, tagInd)}
  >
    {tag.text.charAt(0).toUpperCase() + tag.text.slice(1)}
    {#if (tag.isActive)}
      <button
        aria-label="Eliminar filtro"
        class="flex justify-center items-center w-4 h-4 rounded-full ml-2 text-cmxblack bg-gray-100"
        onclick={(e) => handleDelete(e, tag.text, tagInd)}
      >
        <svg class="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke-width="4" stroke="currentColor" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    {/if}
  </a>
{/each}

<!-- To avoid increase a lot the anchor's classes -->
<style>
  a {
    color: #030304;
    background-color: #f3f3f4;
  }
  a:hover {
    cursor: pointer;
    filter: brightness(0.95);
  }
  a.active {
    color: #f3f3f4;
    background-color: #030304;
  }
</style>
