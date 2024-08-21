<script>
  export let date = '';
  export let locale;
  function processDate(dateString, locale) {
    locale ??= 'es-MX'
    let formattedDate = new Date(dateString)
    let finalDate = formattedDate.toLocaleString(locale, { day: 'numeric', month: 'short', year: 'numeric' })
    return finalDate
  }
  let finalDate = processDate(date, locale)
</script>

{finalDate}