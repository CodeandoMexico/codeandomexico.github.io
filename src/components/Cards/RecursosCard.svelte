<script>
  import ExternalLinkIcon from "@/components/Icon/ExternalLink.svelte";
  let { title, headingLevel, url, authors = undefined } = $props();
</script>

<a href={url} target="_blank" rel="noopener noreferrer" 
  class="bg-zinc-100 hover:bg-zinc-200 h-[150px] p-5 flex justify-between focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-cmxred"
>
  <div>
    {#if headingLevel === 'h3'}
      <h3 class="text-xl font-bold">{title}</h3>
    {:else if headingLevel === 'h4'}
      <h4 class="text-xl font-bold">{title}</h4>
    {:else}
      <p>{title}</p>
    {/if}
    {#if authors}
    <p>
      {#each authors as author, i }
        <span>{author.authors_id.name || ''}{#if i < (authors.length-1)}, {/if}</span>
      {/each}
    </p>
    {/if}
  </div>
  <span class="inline h-[20px] w-[20px] self-end text-cmxred">
    <ExternalLinkIcon  />
  </span>
</a>