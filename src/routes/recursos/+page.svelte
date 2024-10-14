<script>
  import Hero from "@/components/Hero.svelte";
  import RecursosCard from "@/components/Cards/RecursosCard.svelte";

  export let data
  const { conocimientos, recursos } = data
</script>

<Hero accentColor="#FF6D53" image="/recursos.png" title="Recursos" subtitle="Conocimiento que hemos construido a lo largo del tiempo sobre tecnología cívica, datos abiertos y más." />

<!-- <div id="filtros" class="container mx-auto flex justify-start md:justify-center gap-3 my-8 flex-wrap p-3">
  <p class="uppercase font-bold inline">Todo</p>
  <p class="uppercase font-bold inline">Conocimiento</p>
  <p class="uppercase font-bold inline">Herramientas</p>
  <p class="uppercase font-bold inline">Proyectos</p>
  <p class="uppercase font-bold inline">Eventos</p>
  <p class="uppercase font-bold inline">Oportunidades</p>
  <p class="uppercase font-bold inline">Otros</p>
</div> -->
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
{#each recursos as categoria }
<section id="{categoria.categorias}" class="container mx-auto my-6 p-3">
  <h2 class="text-5xl font-bold capitalize"><img src="/recursos-{categoria.categorias}.png" class="inline h-[50px] my-5" alt="{categoria.categorias}">
    {categoria.categorias}</h2>
  <div class="flex flex-wrap my-5">
    {#each categoria.recursos as recurso}
      <RecursosCard title={recurso.name} url={recurso.url}/>
    {/each}
  </div>
</section>
{/each}
