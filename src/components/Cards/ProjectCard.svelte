<script>
	import Badge from "../Badge.svelte";
  export let title;
  export let description;
  export let image;
  export let website;
  export let repository;
  export let tags = [];
  export let maker = "";
</script>


<div class="Card w-full min-h-[519px] flex-col justify-start items-start inline-flex">
  <img class="Image4 object-cover h-[200px] w-full" src={image} />
  <div class="Frame5 self-stretch min-h-[269px] h-full flex-col justify-start pt-3 items-start gap-4 flex">
    <div class="Heading self-stretch min-h-[84px] flex-col justify-start items-start gap-8 flex">
      <div class="Heading self-stretch text-black text-[31.25px] font-bold font-['Albert Sans'] leading-10">
        {title}
      </div>
    </div>
    <div class="Descripion self-stretch justify-start items-start inline-flex">
      <div class="Description grow shrink basis-0 text-black text-lg font-normal font-['Albert Sans'] leading-[27px]">
        {description}
      </div>
    </div>
    <div>
      <p>{maker}</p>
    </div>
    <div class="flex flex-wrap gap-2">

      {#each tags as tag}
        <Badge text={tag}/>
      {/each}
    </div>
    <div class="flex gap-3 my-2">
      {#if website}
      <a href={website} target="_blank" class="border-2 border-black uppercase font-bold bg-black text-white px-5 py-2 hover:bg-gray-700 transition duration-300 ease-in-out">
        Sitio web
      </a>
      {/if}
      {#if repository}
      <a href={repository} target="_blank" class="border-2 border-black uppercase font-bold bg-white text-black px-5 py-2 hover:bg-gray-200 transition duration-300 ease-in-out">
        Repositorio
      </a>
      {/if}
    </div>
  </div>
</div>
