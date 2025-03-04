<script>
  import { principalMenuStore } from "@/store";

  function closeHambMenu() {
    document.getElementById('hamburger-menu').classList.toggle('hidden');
  }
  function openHambMenu() {
    document.getElementById('hamburger-menu').classList.toggle('hidden');
  }

  let menuItems = [
    {name: "Acerca de", url: '/acerca'},
    {name: "Proyectos", url: "/proyectos"},
    {name: "Comunidad", url: "/comunidad"},
    {name: "Recursos", url: "/recursos"},
    {name: "Blog", url: "/blog"},
  ];
</script>
<nav class="absolute w-full py-5 max-lg:bg-white">
  <div class="flex container m-auto items-center  px-5">
    <a href="/">
      <span class="sr-only">Codeando México</span>
      <img src="/img/logo-cmx.svg" style="height: 44px;" alt="Codeando México" />
    </a>
  <div class="flex-grow"></div>


    <ul class="gap-5 hidden lg:flex">
      {#each menuItems as item }
        <li>
          <a
            class={`hover:underline hover:gray-800 uppercase font-bold ${$principalMenuStore.urlActive.includes(item.url) ? $principalMenuStore.color : ''}`.trim()}
            href="{item.url}"
          >
            {item.name}
          </a>
        </li>
      {/each}
    </ul>


      <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 lg:hidden" on:click={openHambMenu}>
        <span class="sr-only">Open main menu</span>
        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path>
        </svg>
      </button>

  </div>

</nav>
<div id="hamburger-menu" class="lg:hidden hidden" role="dialog" aria-modal="true">
  <!-- Background backdrop, show/hide based on slide-over state. -->
  <div class="fixed inset-0 z-10"></div>
  <div class="fixed inset-y-0 right-0 z-40 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
    <div class="flex items-center justify-between">
      <a href="/" class="-m-1.5 p-1.5">
        <span class="sr-only">Codeando México</span>
        <img class="h-8 w-auto" src="/logo_cmx.png" alt="Logo" />
      </a>
      <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" on:click={closeHambMenu}>
        <span class="sr-only">Close menu</span>
        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
    <div class="mt-6 flow-root">
      <div class="-my-6">
        <div class="space-y-2 py-6">
          {#each menuItems as item}
          <div class="mx-3 block px-3 py-2 divide-y divide-gray-500 hover:bg-gray-50">

            <a href="{item.url}" class={`-text-base font-semibold leading-7 uppercase ${$principalMenuStore.urlActive.includes(item.url) ? 'text-cmxgreen' : 'text-gray-900'}`}>{item.name}</a>
          </div>
          {/each}
        </div>
      </div>
    </div>
  </div>
</div>
