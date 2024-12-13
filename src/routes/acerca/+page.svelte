<script>
  import { updateMenuSelector } from '@/lib/menuSelectorUpdater';
  import Hero from '@/components/Hero.svelte';
  import IconTextAction from '@/components/IconTextAction.svelte';

  updateMenuSelector({url: '/acerca'})
</script>

<Hero accentColor="#0073F4" title="Acerca de" subtitle="Somos una organización sin fines de lucro, basada en una comunidad abierta." image="/acerca.png"/>

<section id="colaboramos" class="container p-3 mx-auto my-10">
  <div class="md:w-2/3 m-auto">    
    <p class="my-4">Durante los últimos 10 años hemos colaborado con gobiernos, asociaciones civiles, periodistas, empresas y voluntarias para fortalecer el trabajo e impacto de personas, equipos e instituciones que inciden en el espacio público con proyectos de tecnología y datos útiles, accesibles y sustentables.</p>
    <p class="my-4">Construimos en conjunto y de manera abierta. Las personas, no las herramientas, son la parte más importante del proceso. Todos nuestros proyectos tienen un componente de comunidad, apertura de conocimiento y constante iteración.</p>

  </div>
  <div class="flex flex-col md:flex-row my-10 gap-28 md:p-10 justify-center">
    <IconTextAction icon="/acerca-1.png" title="Desarrollamos habilidades"/>
    <IconTextAction icon="/acerca-2.png" title="Acompañamos equipos"/>
    <IconTextAction icon="/acerca-3.png" title="Construimos herramientas"/>
  </div>

  <div class="text-center py-14 my-14">
    <img src="/acerca-comunidad.png" alt="Comunidad de codeando" class="m-auto drop-shadow-full">
  </div>
  <div class="flex flex-col md:flex-row my-10 gap-20 py-16 items-start md:w-2/3 m-auto">
    <img src="/cfall-logo.png" alt="Logo de Code for">
    <div>
      <p>Formamos parte de Code for All, una red internacional de agentes de cambio de tecnología cívica compuesta por 31 organizaciones de todo el mundo. Hemos trabajado de la mano con Code for Australia, Code for Romania, Code for Pakistan, Open Knowledge Brasil y otras organizaciones en proyectos con impacto en toda la región.</p>
      <div class="my-3">
        <a href="https://codeforall.org/" target="_blank" class="uppercase font-semibold hover:underline">Ir al sitio <img src="/flecha.png" alt="flecha" class="inline ml-2"></a>
      </div>
    </div>
  </div>
</section>