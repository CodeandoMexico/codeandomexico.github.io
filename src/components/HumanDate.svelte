<script>
  /**
   * @typedef {Object} Props
   * @property {string} [date]
   * @property {string} [locale]
   */

  /** @type {Props} */
  let { date = '', locale = undefined } = $props();
  /**
   * @param {string} dateString
   * @param {string} [locale]
   */
  function processDate(dateString, locale) {
    locale ??= 'es-MX'
    let formattedDate = new Date(dateString)
    let finalDate = formattedDate.toLocaleString(locale, { day: 'numeric', month: 'short', year: 'numeric' })
    return finalDate
  }
  let finalDate = $derived(processDate(date, locale))
</script>

{finalDate}