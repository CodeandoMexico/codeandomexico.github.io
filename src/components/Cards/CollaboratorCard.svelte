<script>
  let { image, name, url } = $props();
</script>

<a href="{url}">
  <div class="w-[88px] h-[88px] p-2 shadow-md rounded-md hover:bg-zinc-100 transition-colors duration-200 m-6 md:m-7 container">
    <img src="{image}" alt="{name}" class="rounded-md">
  </div>
</a>