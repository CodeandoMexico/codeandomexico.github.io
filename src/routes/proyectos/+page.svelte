<script>
  import Hero from '@/components/Hero.svelte';
  import IconTextAction from '@/components/IconTextAction.svelte';
  import SubscribeBox from '@/components/SubscribeBox.svelte';
  import Badge from '@/components/Badge.svelte';
	import ProjectCard from '@/components/Cards/ProjectCard.svelte';
  export let data
  const { projects } = data
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
  <!-- TODO: Habilitar Badges -->
  <!-- <div class="flex gap-4 my-6 flex-wrap">
    <Badge text="Movilidad" color="#F3F3F4"/>
    <Badge text="Educación" color="#F2D301"/>
    <Badge text="Legislativo" color="#F3F3F4"/>
    <Badge text="Datos abiertos" color="#F3F3F4"/>
    <Badge text="Código abierto" color="#F3F3F4"/>
  </div> -->
  <!-- <div class="flex flex-col basis-1/3 md:flex-row columns-3 container my-8 mx-auto gap-20"> -->
    <div class="grid grid-cols-1 md:grid-cols-3 container my-8 mx-auto gap-20">
    {#each projects as project}
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