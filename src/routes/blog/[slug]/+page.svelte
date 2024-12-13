<script>
  import { updateMenuSelector } from '@/lib/menuSelectorUpdater.js';
  import { onDestroy } from 'svelte';
  import ReadingTime from '@/components/ReadingTime.svelte';
  import HumanDate from '@/components/HumanDate.svelte';
  export let data
  const { post } = data

  updateMenuSelector({url: '/blog', color: 'text-cmxgreen'})
  const title = document.title

  onDestroy(() => {
    document.title = title
  })
</script>

<svelte:head>
  <title>{post.title}</title>
  <meta name="description" content={post.meta_description} />
  <meta property="og:title" content={post.title} />
  <meta property="og:description" content={post.meta_description} />
  <meta property="og:image" content={`https://content.codeandomexico.org/assets/${post.post_image}`} />
</svelte:head>

<section class="my-10 pt-hero">
  <div class="container m-auto max-w-prose my-8">
    <h1 class="text-5xl font-black my-8">{post.title}</h1>
    {#if post.authors}
      <p class="text-xl my-3">Por 
        {#each post.authors as author, i }
        <span>{author.authors_id.name || ''}{#if i < (post.authors.length-1)}, {/if}</span>
        {/each}
      </p>
    {/if}
    <p class="text-lg text-gray-500">
      <ReadingTime text={post.content}/><span class="mx-2">·</span><HumanDate date={post.date_published || post.date_created}/>
    </p>
  </div>
  <img src={`https://content.codeandomexico.org/assets/${post.post_image}`} alt="Imagen de blog" class="w-full max-h-[450px] object-cover" />
  <div class="container m-auto p-3 prose prose-blockquote:text-2xl prose-blockquote:border-green-400">
    <p class="prose text-lg">{@html post.content}</p>
  </div>
</section>