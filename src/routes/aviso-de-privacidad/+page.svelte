<script>
  export let data
  const { aviso } = data
  const date_updated = processDate(aviso.date_updated)
  function processDate(dateObject, locale) {
    locale ??= 'es-mx'
    console.log(locale)
    let formattedDate = new Date(dateObject)
    let finalDate = formattedDate.toLocaleString(locale, { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })
    return finalDate
  } 
</script>

<div id="aviso" class="container mx-auto py-20">
  <div class="w-10/12 p-5 mx-auto w-1/2 mx-auto bg-[url('/grid-bg.png')] bg-slate-200 prose" style={`box-shadow: 7px 7px 1px black;`}>
    {@html aviso.content}
    <p>Ultima actualización: {date_updated}</p>
  </div>
</div>

