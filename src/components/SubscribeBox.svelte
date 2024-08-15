<script>
	export let color;
	export let text;
	export let subscribeForm;

	let breveo_url = "https://e84a0152.sibforms.com/serve/MUIFABjdnMHTbxQ2khl6ph4PImtHS0y057KeTtnZ8ST-53106GteNUOJUzjhpVFibL3A_kN8NSvM-dHnI4U0Eu2CLfsvr_sm9db1VdgsqQvtFJFiM9KySFp7o3hZxzON2vLkcj-ioBELpTPFkCBfA2M2lg0fRjsXNlo99Mynwc6T2rYL4mDx6KHLxCXgwauF_DuSGhxf_l71MVh9"
	// todo: Este regex testeado no deja pasar un dominio sin TLD (ej. a@a) pero implementado aquí, sí lo permite. hay que modificarlo
	let regex = "(?:[a-z0-9!#$%&*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&*+/=?^_`{|}~-]+)*|(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*)@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])"
</script>

<div class="bg-[url('/grid-bg.png')] min-h-[350px] p-2 md:p-10 h-auto w-full container m-auto flex items-center drop-shadow-full" style="background-color: {color};">
	<div class="Frame52 w-full flex-col justify-center items-center md:p-5">
		<div class="text-center text-black text-2xl md:text-5xl font-bold font-['Albert Sans'] md:leading-[63.44px] md:p-5 text-wrap">
			<p>
				{@html text}
			</p>
		</div>
		{#if subscribeForm }
			<div class="flex justify-center mx-auto my-3">
				<form class="w-full max-w-sm validate" action={breveo_url} method="post" id="newsletter-form" target="_blank" >
					<div class="flex items-center">
						<input class="appearance-none border-none w-full text-gray-700 px-4 py-3 rounded-tl-3xl rounded-bl-3xl border-zinc-300 leading-tight focus:outline-none" placeholder="correo@ejemplo.org" aria-label="Full name" type="email" name="EMAIL" required="true" value="" pattern={regex}>
						<div style="position: absolute; left: -5000px;" aria-hidden="true">
							/* real people should not fill this in and expect good things - do not remove this or risk form bot signups */
							<input type="text" name="b_6a37b9b668c1da15bcc718fa4_203574be23" tabindex="-1" value="">
						</div>
						<button class="flex-shrink-0 px-5 py-2 bg-black rounded-tr-3xl h-11 rounded-br-3xl text-sm border border-black text-white rounded text-base font-bold font-['Albert Sans'] uppercase leading-normal" type="button">
							<input type="submit" name="subscribe" class="button uppercase" value="Suscribirme">
						</button>
					</div>
				</form>
			</div>
		{/if }
	</div>
</div>