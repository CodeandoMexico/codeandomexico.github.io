<script>
  export let data
  import HumanDate from '@/components/HumanDate.svelte';
  const { aviso } = data
</script>

<div id="aviso" class="container mx-auto py-20">
  <div class="w-10/12 p-5 mx-auto w-1/2 mx-auto bg-[url('/grid-bg.png')] bg-slate-200 prose" style={`box-shadow: 7px 7px 1px black;`}>
    {@html aviso.content}
    <p>Ultima actualización: <HumanDate date={aviso.date_updated}/></p>
  </div>
</div>

