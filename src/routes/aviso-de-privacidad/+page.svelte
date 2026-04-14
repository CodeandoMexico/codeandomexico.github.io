<script>
  import HumanDate from '@/components/HumanDate.svelte';
  let { data } = $props();
  const aviso = $derived(data.aviso);
</script>

<div id="aviso" class="container mx-auto my-20 pt-hero">
  <div class="w-10/12 p-5 mx-auto w-1/2 mx-auto bg-[url('/grid-bg.png')] bg-slate-200 prose" style={`box-shadow: 7px 7px 1px black;`}>
    {@html aviso.content}
    <p>Ultima actualización: <HumanDate date={aviso.date_updated}/></p>
  </div>
</div>

