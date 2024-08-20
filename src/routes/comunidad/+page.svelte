<script>
  import Hero from "@/components/Hero.svelte";
  import GetInvolvedCard from "@/components/Cards/GetInvolvedCard.svelte";
  import CommunityCard from "@/components/Cards/CommunityCard.svelte";
  // import CollaboratorCard from "@/components/Cards/CollaboratorCard.svelte";
  export let data
  const { comunidad } = data
</script>

<Hero accentColor="#F2D301" title="Involúcrate en la comunidad" subtitle="Somos una comunidad abierta que construye tecnología para el bien común." image="/comunidad.png" />

<section class="w-full mx-auto my-10">
  <div class="container mx-auto flex flex-col md:flex-row gap-8">
    <GetInvolvedCard image="/comunidad-slack.svg" image_alt="Slack" text="Únete a la conversación para conectar con otras personas de la comunidad que están pensando, contribuyendo y construyendo tecnología cívica." url="https://codeandomexico.slack.com/" label="Únete" color="#030303"/>
    <GetInvolvedCard image="/comunidad-github.svg" image_alt="Github" text="Contribuye a nuestros proyectos de código abierto y ayuda a mejorar las herramientas que están disponibles para todos y todas." url="https://github.com/CodeandoMexico/" label="Contribuye" color="#030303"/>
    <GetInvolvedCard image="/comunidad-datamx.svg" image_alt="Datamx.io" text="Encuentra o publica un conjunto de datos en la plataforma cívica de datos abiertos de México." url="https://datamx.io/" label="Contribuye" color="#030303"/>
  </div>
</section>

<section class="container mx-auto">
  <div class="mx-auto md:w-1/2 p-3 my-8">
    <h1 class="text-5xl font-bold my-10 text-center">Comienza a participar</h1>
    <p class="text-center md:text-left text-lg">¿Quieres participar pero no sabes por dónde comenzar? Este es un espacio abierto y tenemos un lugar para todas las personas. Empieza por aquí:</p>
  </div>
  <div class="my-10 flex flex-column md:flex-row flex-wrap">
    {#each comunidad as item}
      <CommunityCard text={item.name} route={item.url}/>
    {/each}
  </div>
</section>

<!-- <section id="colaboradores" class="container my-8 mx-auto">
  <h2 class="text-4xl text-center font-bold my-8">Contribuidores y colaboradores</h2>
  <div class="flex flex-wrap justify-start mx-auto">
    <CollaboratorCard image="/collaborator-example.png" url="https://google.com/" name="Juana Pérez"/>
  </div>
</section> -->