<script>
	import Hero from '@/components/Hero.svelte';
	import ShadowImage from '@/components/ShadowImage.svelte';
	import ShadowImageCard from '@/components/Cards/ShadowImageCard.svelte';
	import TitleDescription from '@/components/TitleDescription.svelte';
	import IconTextAction from '@/components/IconTextAction.svelte';
	import ProjectCard from '@/components/Cards/ProjectCard.svelte';
	import SubscribeBox from '@/components/SubscribeBox.svelte';
	import ArticleCard from '@/components/Cards/ArticleCard.svelte';
	import Button from '@/components/Button.svelte';
	export let data
  const { home, posts, projects } = data
</script>

<Hero 
	title={home.hero_title}
	subtitle={home.hero_subtitle}
/>

<div id="quienes-somos" class="container px-5 mx-auto my-8">
	<div class="flex-col md:flex-row flex my-10 gap-20 items-center">
		<ShadowImage />
		<TitleDescription title="Trabajamos de manera abierta y colaborativa" description="con gobiernos, activistas, periodistas, diseñadoras, desarrolladoras y más. Nos enfocamos en la parte tecnológica que acompaña al impacto cívico y social." />
	</div>
</div>

<section id="con-quien-trabajamos" class="bg-[#E6F8EE] py-8 w-full mx-auto my-8">
	<div class="container m-auto">
		<div class="flex flex-col md:flex-row my-10 gap-20 p-10 justify-center">
			<IconTextAction icon="/who_1.png" title="Organizaciones" description="Construimos herramientas digitales, abrimos conocimiento y acompañamos a equipos técnicos y no técnicos." action="/organizaciones" action_label="Hablemos"/>
			<IconTextAction icon="/who_2.png" title="Personas" description="Colaboramos con personas de todos los perfiles, cualquiera que comparta nuestros principios, valores y código de conducta puede ser parte de esta comunidad." action="/comunidad" action_label="Súmate"/>
		</div>
	</div>
</section>
	
<section id="en-que-estamos-trabajando" class="p-8 mx-auto my-8">
	<div class="text-center">
		<TitleDescription title="En qué estamos trabajando" description="Todos nuestros proyectos son open source, esto significa que cualquiera es libre de utilizar el código, datos y otros materiales de acuerdo a la licencia que contenga." />
	</div>
	
	<div id="nuestros-proyectos" class="md:grid grid-cols-3  container m-auto gap-5">
		{#each projects as project}
		<ProjectCard
			title={project.title}
			description={project.short_description}
			tags={project.tags || []}
			image={`https://content.codeandomexico.org/assets/${project.image}`}
			website={project.website}
			maker={project.maker}
			repository={project.repository}
		/>
	{/each}

	</div>
	<div class="text-center my-8">
		<a href="/proyectos" >	
			<Button  action_label="Ver todos los proyectos" />
		</a>
		
	</div>
</section>

<section id="suscribete" class="p-5 md:p-10 mx-auto my-8">
	<SubscribeBox color="#F1B6B8" text="¿Quieres mantenerte al tanto? Suscríbete a nuestro newsletter" subscribeForm="true" />
</section>

<section id="blog" class="p-8 mx-auto my-8 container">
	<div class="text-center my-12">
		<TitleDescription title="Blog" />
	</div>
	<div class="md:grid grid-cols-3 gap-5 mb-5">
		{#each posts as post}
		<ArticleCard
		slug={post.slug}
		title={post.title}
		tag={post.tags[0]}
		author={post.user_created.first_name + ' ' + post.user_created.last_name}
		date={new Date(post.date_created).toLocaleString('es-MX')}
		image={`https://content.codeandomexico.org/assets/${post.post_image}`}
		/>
		{/each}
	</div>
	<div class="text-center m-auto">
		<a href="/blog">
			<Button action_label="Ir al blog" />
		</a>
	</div>
</section>