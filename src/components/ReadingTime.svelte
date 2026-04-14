<script>
  /**
   * @typedef {Object} Props
   * @property {string} [text]
   */

  /** @type {Props} */
  let { text = '' } = $props();
  /** @param {string} text */
  function readingTime(text) {
    const words = text.trim().split(/\s+/).length;
    const wpm = 255 //average adult reading speed (words per minute).
    const time = Math.ceil(words / wpm);
    return time;
  }
  let minutos = $derived(readingTime(text))
</script>

Tiempo de lectura: {minutos} minutos