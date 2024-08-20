<script>
  export let title;
  export let url;
  export let authors;
</script>

<a href={url} target="_blank" rel="noopener noreferrer" class=" w-full md:w-1/3 md:pr-8 mb-5">
  <div class="bg-gray-100 hover:bg-gray-200 h-[150px] p-5 flex justify-between">
    <div>
      <h4 class="text-xl font-bold">{title}</h4>
      {#if authors }
      <p>
        {#each authors as author, i }
            <span>{author.authors_id.name || ''}{#if i < (authors.length-1)}, {/if}</span>
        {/each}
      </p>
      {/if }
    </div>
    <img src="/flecha-verde.png" alt="Ir al recurso" class="inline h-[20px] w-[20px] self-end">
  </div>
</a>