<script>
	import Footer from '@/components/Footer.svelte';
	import Navbar from '@/components/Navbar.svelte';
	import '../app.css';

	let title = "Codeando México"
	let description = "Tecnología cívica y datos para mejorar lo público"
	let meta_description = "Generamos nuevas formas de participación ciudadana, abrimos conocimiento e innovamos en el espacio público a través de la tecnología."
	let image = "/metaimage.png"
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={meta_description} />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={meta_description} />
  <meta property="og:image" content={image} />
</svelte:head>

<Navbar />

<slot />


<Footer />
