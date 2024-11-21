<script>
  import Badge from "@/components/Badge.svelte";
  import HumanDate from "../HumanDate.svelte";
  export let slug;
  export let title;
  export let date;
  export let image;
  export let tag;
  export let handleTags;
  export let authors;
</script>

<div class="w-full">
  <a href="/blog/{slug}">
    <div class="md:aspect-video aspect-square ">
      <img class="object-cover w-full h-full " src={image} alt="Card" />
    </div>
  </a>
  <div class="mt-5">
    <div class="flex">
      {#if tag}
      <Badge text={tag} handleTags={handleTags} />
      {/if}
    </div>
    <a class="space-y-2" href="/blog/{slug}">
      <h2 class="mt-2 font-extrabold text-xl">{title}</h2>
      {#if authors }
        <p class="text-sm">
          {#each authors as author, i }
            <span>{author.authors_id.name || ''}{#if i < (authors.length-1)}, {/if}</span>
          {/each}
        </p>
      {/if}
      <p class="text-sm text-gray-400"><HumanDate date={date}/></p>
    </a>
  </div>
</div>