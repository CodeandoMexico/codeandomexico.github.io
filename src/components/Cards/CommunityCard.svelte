<script>
  export let text;
  export let route;
</script>

<div class="p-5 w-full md:w-1/3">
  <a href="{route}">
    <div class="border border-cmxyellow p-5 h-[150px] flex justify-between flex-col hover:bg-zinc-100 transition-colors duration-200">
      <h3 class="text-lg font-bold">{text}</h3>
      <img src="/flecha-amarilla.png" class="inline h-[20px] w-[20px] 
      self-end" alt="flecha amarilla">
    </div>
  </a>
</div>