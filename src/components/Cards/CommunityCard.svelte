<script>
  import ExternalLinkIcon from "@/components/Icon/ExternalLink.svelte";
  let { text, route } = $props();
</script>

<div class="p-5 w-full md:w-1/3">
  <a href="{route}" target="_blank" class="border border-cmxyellow p-5 h-[150px] flex justify-between flex-col hover:bg-zinc-100 transition-colors duration-200 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-cmxyellow focus:bg-zinc-100">
    <h3 class="text-lg font-bold">{text}</h3>
    <span class="inline h-[20px] w-[20px] self-end text-cmxyellow">
      <ExternalLinkIcon  />
    </span>
  </a>
</div>