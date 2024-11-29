<script>
  import Hero from "@/components/Hero.svelte";
  import RecursosCard from "@/components/Cards/RecursosCard.svelte";

  export let data
  const { conocimientos, recursos } = data
  const categories = ['todos', 'conocimiento', ...recursos.map(recurso => recurso.categorias)]
  let categorySelected = 'todos'
  let resources = [...recursos]

  const handleCategorySelected = (category = '') => {
    categorySelected = category
    resources = categorySelected === 'todos'
      ? [...recursos]
      : recursos.filter(recurso => recurso.categorias === categorySelected)
  }
</script>

<Hero accentColor="#FF6D53" image="/recursos.png" title="Recursos" subtitle="Conocimiento que hemos construido a lo largo del tiempo sobre tecnología cívica, datos abiertos y más." />

<div id="filtros" class="container mx-auto flex justify-start justify-center gap-3 my-8 flex-wrap p-3">
  {#each categories as category}
    <a
      href={null}
      class={`uppercase font-bold inline cursor-pointer hover:underline${categorySelected === category ? ' text-cmxred' : ''}`}
      on:click={() => handleCategorySelected(category)}
    >{category}</a>
  {/each}
</div>
{#if (categorySelected === 'todos' || categorySelected === 'conocimiento')}
  <section id="conocimiento" class="container mx-auto my-6 p-3">
    <h2 class="text-5xl font-bold"><img src="/recursos-conocimiento.png" class="inline h-[50px] my-5" alt="Conocimiento">
      Conocimiento</h2>
    {#each conocimientos as subseccion }
      <div class="my-5">
        <h3 class="text-3xl font-bold my-5">{subseccion.name}</h3>
        <div class="flex flex-wrap">
          {#each subseccion.recursos as item }
            <RecursosCard title={item.title} url={item.url} authors={item.authors}/>
          {/each}
        </div>
      </div>
    {/each}
  </section>
{/if}
{#each resources as resource}
  <section id="{resource.categorias}" class="container mx-auto my-6 p-3">
    <h2 class="text-5xl font-bold capitalize"><img src="/recursos-{resource.categorias}.png" class="inline h-[50px] my-5" alt="{resource.categorias}">
      {resource.categorias}</h2>
    <div class="flex flex-wrap my-5">
      {#each resource.recursos as recurso}
        <RecursosCard title={recurso.name} url={recurso.url}/>
      {/each}
    </div>
  </section>
{/each}
