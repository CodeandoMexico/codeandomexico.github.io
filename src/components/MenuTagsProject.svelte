<script>
  export let tags;
  export let addToFilter;
  export let removeFromFilter;
  let tagsToShow = [...tags.map((tag = '') => ({ isActive: false, text: tag }))];

  const handleAdd = (tag = '', index = 0) => {
    tagsToShow[index] = {...tagsToShow[index], isActive: true};
    addToFilter(tag);
  }

  const handleDelete = (e = event, tag = '', index = 0) => {
    e?.stopPropagation();
    tagsToShow[index] = {...tagsToShow[index], isActive: false};
    removeFromFilter(tag);
  }
</script>

{#each tagsToShow as tag, tagInd}
  <a
    href={null}
    class={`flex rounded-full px-3 py-1 text-xs${tag.isActive ? ' active' : ''}`}
    on:click={() => handleAdd(tag.text, tagInd)}
  >
    {tag.text.charAt(0).toUpperCase() + tag.text.slice(1)}
    {#if (tag.isActive)}
      <button
        class="flex justify-center items-center w-4 h-4 rounded-full ml-2 text-cmxblack bg-gray-100"
        on:click={(e) => handleDelete(e, tag.text, tagInd)}
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
