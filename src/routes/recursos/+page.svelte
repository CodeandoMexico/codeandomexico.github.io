<script>
  import { updateMenuSelector } from '@/lib/menuSelectorUpdater.js';
  import Hero from "@/components/Hero.svelte";
  import RecursosCard from "@/components/Cards/RecursosCard.svelte";
  let { data } = $props();
  const conocimientos = $derived(data.conocimientos);
  const recursos = $derived(data.recursos);
  const categories = $derived(['todos', 'conocimiento', ...recursos.map(recurso => recurso.categorias)]);
  let categorySelected = $state('todos');
  const resources = $derived(
    (categorySelected === 'todos'
      ? [...recursos]
      : recursos.filter(recurso => recurso.categorias === categorySelected)
    ).filter(recurso => recurso.recursos?.length > 0)
  );

  const handleCategorySelected = (category = '') => {
    categorySelected = category;
  }

  $effect(() => updateMenuSelector({url: '/recursos'}))
</script>

<Hero accentColor="#FF6D53" image="/recursos.png" title="Recursos" subtitle="Conocimiento que hemos construido a lo largo del tiempo sobre tecnología cívica, datos abiertos y más." />

<div id="filtros" class="container mx-auto flex justify-start justify-center gap-3 my-8 flex-wrap p-3">
  {#each categories as category}
    <button 
      class={`uppercase font-bold inline cursor-pointer hover:underline focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-cmxred ${categorySelected === category ? ' text-cmxred' : ''}`}
      onclick={() => handleCategorySelected(category)}
    >
      {category}
    </button>
  {/each}
</div>
{#if (categorySelected === 'todos' || categorySelected === 'conocimiento')}
  <section id="conocimiento" class="container mx-auto my-6 p-3">
    <h2 class="text-5xl font-bold">
      <img src="/recursos-conocimiento.png" class="inline h-[50px] my-5" alt="">
      Conocimiento
    </h2>
    {#each conocimientos as subseccion }
      <div class="my-5">
        <h3 class="text-3xl font-bold my-5">{subseccion.name}</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-7 gap-y-5 mb-10">
          {#each subseccion.recursos as item }
            <RecursosCard subtitle={item.title} url={item.url} authors={item.authors}/>
          {/each}
        </div>
      </div>
    {/each}
  </section>
{/if}
{#each resources as resource}
  <section id="{resource.categorias}" class="container mx-auto my-6 p-3">
    <h2 class="text-5xl font-bold capitalize">
      <img src="/recursos-{resource.categorias}.png" class="inline h-[50px] my-5" alt="">
      {resource.categorias}
    </h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-7 gap-y-5 mb-10">
      {#each resource.recursos as recurso}
        <RecursosCard title={recurso.name} url={recurso.url}/>
      {/each}
    </div>
  </section>
{/each}
