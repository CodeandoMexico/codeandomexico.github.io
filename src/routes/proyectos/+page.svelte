<script>
  import { updateMenuSelector } from '@/lib/menuSelectorUpdater.js';
  import Hero from '@/components/Hero.svelte';
  import IconTextAction from '@/components/IconTextAction.svelte';
  import SubscribeBox from '@/components/SubscribeBox.svelte';
	import ProjectCard from '@/components/Cards/ProjectCard.svelte';
  import MenuTagsProject from '@/components/MenuTagsProject.svelte';
  export let data;
  const { projects, tags } = data;
  let activeTags = [];
  let filteredProjects = [...projects];

  const getFilteredProjects = () => {
    const setToLowerCase = (item = '') => item?.toLowerCase();
    const areTagsIncluded = (item = '') => activeTags?.includes(item);

    filteredProjects = Boolean(activeTags?.length)
      ? projects.filter(project => project.tags?.map(setToLowerCase).some(areTagsIncluded))
      : [...projects];
  }

  const addToFilter = (tag = '') => {
    if (activeTags.includes(tag)) {
      return false;
    }

    tag = tag.toLowerCase();
    activeTags.push(tag);
    getFilteredProjects();
  }

  const removeFromFilter = (tag = '') => {
    tag = tag.toLowerCase();
    activeTags = activeTags.filter(val => val !== tag);
    getFilteredProjects();
  }

  updateMenuSelector({url: '/proyectos'})
</script>

<Hero title="Proyectos" subtitle="Colaboramos desde el diseño hasta la implementación de tecnología cívica." image="/proyectos.png"/>

<section id="lineas-estrategicas" class="w-full container mx-auto mt-20 p-3">
  <h1 class="text-4xl font-bold my-3">Nuestras líneas estratégicas</h1>
  <p class="text-xl my-3">Desarrollamos habilidades, acompañamos equipos y construimos herramientas digitales.</p>
  <div class="flex flex-col md:flex-row gap-12 my-14">
    <IconTextAction icon="/proyectos-1.png" title="Escuela Digital" description="Capacitamos a equipos de gobierno y sociedad civil sobre cómo implementar tecnología y estrategias digitales."/>
    <IconTextAction icon="/proyectos-2.png" title="Mapeos Participativos" description="Capacitación e implementación de mapeos ciudadanos para la recolección de datos. Por ejemplo: rutas de transporte público, infraestructura ciclista, espacios públicos, etc."/>
    <IconTextAction icon="/proyectos-3.png" title="Participación Ciudadana" description="Implementación de soluciones de participación digital y acompañamiento en estrategias participativas."/>
    <IconTextAction icon="/proyectos-4.png" title="Datos Abiertos" description="Implementación de portales de datos abiertos, acompañamiento para la creación de planes de apertura y desarrollo de política pública."/>
  </div>
</section>

<section id="contactanos" class="my-12 p-2 md:p-7">
	<SubscribeBox color="#00D690" text="<span class='text-white'>Para colaborar escríbenos a</span><br> equipo@codeandomexico.org" />
</section>

<section id="nuestros-proyectos" class="container mx-auto my-12 p-3">
  <h1 class="text-4xl font-bold my-3">Conoce nuestros proyectos</h1>
  <div class="flex gap-4 my-6 flex-wrap">
    <MenuTagsProject tags={tags} addToFilter={addToFilter} removeFromFilter={removeFromFilter} />
  </div>
  <div class="grid grid-cols-1 md:grid-cols-3 container my-8 mx-auto gap-20">
    {#each filteredProjects as project}
      <div class="my-5">
        <ProjectCard
        title={project.title}
        description={project.short_description}
        tags={project.tags || []}
        image={`https://content.codeandomexico.org/assets/${project.image}`}
        website={project.website}
        maker={project.maker}
        repository={project.repository}
        />
      </div>
    {/each}
  </div>
</section>