<script>
  import { page } from '$app/stores';
</script>

<div class="container mx-auto py-20">
  <div class="w-1/2 p-20 mx-auto w-1/2 mx-auto bg-[url('/grid-bg.png')] bg-cmxyellow text-center" style={`box-shadow: 7px 7px 1px black;`}>
    <h1 class="text-5xl font-bold">Error {$page.status}</h1>
    <p class="text-lg">{$page.error.message}</p>
  </div>
</div>