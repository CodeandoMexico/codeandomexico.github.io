<script>
  	import { onMount } from 'svelte';
    export let text = 'Badge';
    export let handleTags;
    export let color = getRandomHexColor();
    function getRandomHexColor() {
      const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }
    let contrastedColor = '';

    onMount(async () => {
        const fontColorContrast = (await import('font-color-contrast')).default;
        contrastedColor = fontColorContrast(color);
      });
</script>


<a
  href={null}
  class="rounded-full px-3 py-1 text-xs "
  style={
    `background-color: ${color};
    color: ${contrastedColor};
    cursor: pointer;`
  }
  on:click={handleTags(text)}
>
  {text}
</a>

<style>
  a:hover {
    filter: brightness(0.9);
  }
</style>
