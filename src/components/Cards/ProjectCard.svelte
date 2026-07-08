<script>
	import Badge from "@/components/Badge.svelte";
	import CmsImage from "@/components/CmsImage.svelte";
  import ExternalLinkIcon from "@/components/Icon/ExternalLink.svelte";
  /**
   * @typedef {Object} Props
   * @property {any} title
   * @property {any} description
   * @property {any} assetId
   * @property {any} website
   * @property {any} repository
   * @property {any} [tags]
   * @property {string} [maker]
   */

  /** @type {Props} */
  let {
    title,
    description,
    assetId,
    website,
    repository,
    tags = [],
    maker = ""
  } = $props();
</script>


<div class="Card w-full min-h-[519px] flex-col justify-start items-start inline-flex">
  <CmsImage {assetId} alt={''} class="Image4 object-cover h-[200px] w-full" />
  <div class="Frame5 self-stretch min-h-[269px] h-full flex-col justify-start pt-3 items-start gap-4 flex">
    <div class="Heading self-stretch min-h-[84px] flex-col justify-start items-start gap-8 flex">
      <div class="Heading self-stretch text-black text-[31.25px] font-bold leading-10">
        <h3>{title}</h3>
      </div>
    </div>
    <div class="Descripion self-stretch justify-start items-start inline-flex">
      <div class="Description grow shrink basis-0 text-black text-lg font-normal leading-[27px]">
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
      <a href={website} target="_blank" class="border-2 border-black uppercase font-bold bg-black text-white px-5 py-2 hover:bg-gray-700 transition duration-300 ease-in-out focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-cmxgreen focus:border-cmxgreen">
        Sitio web
        <span class="sr-only"> de {title}.</span>
        <ExternalLinkIcon />
      </a>
      {/if}
      {#if repository}
      <a href={repository} target="_blank" class="border-2 border-black uppercase font-bold bg-white text-black px-5 py-2 hover:bg-gray-200 transition duration-300 ease-in-out focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-cmxgreen focus:border-cmxgreen">
        Repositorio
        <span class="sr-only">de {title}.</span>
				<ExternalLinkIcon />
      </a>
      {/if}
    </div>
  </div>
</div>
