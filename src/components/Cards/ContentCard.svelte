<script>
	import CmsImage from '@/components/CmsImage.svelte';
	let { title, description, assetId, link } = $props();
</script>

<div class="Card w-full min-h-[519px] bg-zinc-100 flex-col justify-start items-start inline-flex">
	<CmsImage {assetId} alt="" class="Image4 self-stretch h-[238px] object-cover" />
	<div
		class="Frame5 self-stretch min-h-[281px] p-8 flex-col justify-between items-start gap-4 flex"
	>
		<div class="Heading self-stretch min-h-[41px] flex-col justify-end items-start gap-8 flex">
			<div class="Heading self-stretch text-black text-[31.25px] font-bold leading-10">
				{title}
			</div>
		</div>
		<div class="Descripion self-stretch justify-start items-start inline-flex">
			<div class="Description grow shrink basis-0 text-black text-lg font-normal leading-[27px]">
				{description}
			</div>
		</div>
		<div class="Button justify-start items-center gap-2 inline-flex">
			<a
				href={link}
				target="_blank"
				rel="noopener noreferrer"
				class="text-black text-base font-bold uppercase leading-normal hover:underline focus:outline focus:outline-cmxgreen focus:outline-2 focus:outline-offset-2"
			>
				<span aria-hidden="true">Conoce más</span>
				<span class="sr-only">Visita el sitio de {title}.</span>
				<img class="w-5 h-5 inline align-sub ml-1" src="/Vector.svg" alt="" title="Se abre en nueva pestaña"/>
			</a>
		</div>
	</div>
</div>
