<script>
	import Badge from './Badge.svelte';
	export let tag = '';
	export let title = 'Blog';
  export let slug = '';
	export let date = '';
	export let image =
		'https://images.unsplash.com/photo-1582005450386-52b25f82d9bb?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
  export let authors = '';
</script>

<a href="/blog/{slug}">
<div class="h-[400px] relative ">
	<div
		class="
    group
    absolute
    w-full
    h-full
    top-0
    left-0
    right-0
    bottom-0
   bg-black
   opacity-50
    z-10
    flex
  "
	></div>

	<div
		class="
      absolute
      w-full
      h-full
      top-0
      left-0
      right-0
      bottom-0
      z-20
      flex
      flex-col
      justify-center
      p-10"
	>
		<div class="left">
			{#if tag}
				<Badge text={tag} />
			{/if}
		</div>
		<h1 class="text-2xl md:text-4xl font-bold text-white md:leading-normal group:hover:underline  ">
			{title}
		</h1>
	</div>

	<div
		class="
      absolute
      w-full
      h-full
      top-0
      left-0
      right-0
      bottom-0
      z-30
      flex
      flex-col
      justify-end
      p-10
    "
	>
		<div class=" bottom-0">
			<p class="text-left text-white font-thin">
        {#each authors as author, i}
          <span>{author.authors_id.name || ''}{#if i < (authors.length-1)}, {/if}</span>
        {/each}
      </p>
			<p class="text-left text-gray-300 font-bold">{date}</p>
		</div>
	</div>

	<img class="object-cover w-full h-full" src={image} alt="Hero" />
</div>
</a>