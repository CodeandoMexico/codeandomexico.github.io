<script>
	import { onMount } from 'svelte';

	export let color;
	export let text;
	export let subscribeForm;

	let breveo_url =
		'https://e84a0152.sibforms.com/serve/MUIFABjdnMHTbxQ2khl6ph4PImtHS0y057KeTtnZ8ST-53106GteNUOJUzjhpVFibL3A_kN8NSvM-dHnI4U0Eu2CLfsvr_sm9db1VdgsqQvtFJFiM9KySFp7o3hZxzON2vLkcj-ioBELpTPFkCBfA2M2lg0fRjsXNlo99Mynwc6T2rYL4mDx6KHLxCXgwauF_DuSGhxf_l71MVh9';
	// todo: Este regex testeado no deja pasar un dominio sin TLD (ej. a@a) pero implementado aquí, sí lo permite. hay que modificarlo
	let regex =
		'(?:[a-z0-9!#$%&*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&*+/=?^_`{|}~-]+)*|(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*)@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])).){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)])';

	// Spam prevention variables
	let formStartTime = Date.now();
	let turnstileResponse = '';
	let turnstileWidgetId = null;
	let isTurnstileLoaded = false;

	onMount(() => {
		if (!window.turnstile) {
			console.log('Cargando script de Turnstile...');
			const script = document.createElement('script');
			script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js';
			script.async = true;
			script.defer = true;
			script.onload = () => {
				console.log('Script de Turnstile cargado exitosamente');
				isTurnstileLoaded = true;
				setTimeout(() => {
					initTurnstile();
				}, 500);
			};
			script.onerror = () => {
				console.error('Error al cargar el script de Turnstile');
			};
			document.head.appendChild(script);
		} else {
			console.log('Turnstile ya está cargado');
			isTurnstileLoaded = true;
			initTurnstile();
		}
	});

	// Widget para el Captcha de Cloudflare Turnstile
	function initTurnstile() {
		console.log('Intentando inicializar Turnstile...');
		console.log('window.turnstile:', window.turnstile);
		console.log('isTurnstileLoaded:', isTurnstileLoaded);

		if (window.turnstile && isTurnstileLoaded) {
			try {
				console.log('Renderizando widget de Turnstile...');
				turnstileWidgetId = window.turnstile.render('#turnstile-container', {
					sitekey: '0x4AAAAAAB6c7nCtT4Pnd6ZP',
					callback: function (token) {
						console.log('Callback de Turnstile recibido:', token);
						turnstileResponse = token;
					},
					'expired-callback': function () {
						console.log('Turnstile caducado');
						turnstileResponse = '';
					},
					'error-callback': function (error) {
						console.error('Error de Turnstile:', error);
						turnstileResponse = '';
					}
				});
				console.log('ID del widget de Turnstile:', turnstileWidgetId);
			} catch (error) {
				console.error('Error al inicializar Turnstile:', error);
			}
		} else {
			console.log('Turnstile aún no está listo');
		}
	}

	function isFormTooFast() {
		const timeElapsed = Date.now() - formStartTime;
		return timeElapsed < 3000; // Menos de 3 segundos es sospechoso
	}

	// Validate form submission
	function validateForm(event) {
		const target = event.target;

		// Check honeypot field
		const honeypot = target.querySelector('input[name="website"]');
		if (honeypot && honeypot.value !== '') {
			event.preventDefault();
			console.log('Bot detectado: campo honeypot llenado');
			alert('Solicitud bloqueada por seguridad.');
			return false;
		}

		if (isFormTooFast()) {
			event.preventDefault();
			console.log('Bot detectado: formulario enviado muy rápido');
			alert('Por favor, espera unos segundos antes de enviar el formulario.');
			return false;
		}

		console.log('Verificando respuesta de Turnstile:', turnstileResponse);
		console.log('ID del widget de Turnstile:', turnstileWidgetId);
		console.log('isTurnstileLoaded:', isTurnstileLoaded);

		if (!turnstileResponse) {
			event.preventDefault();
			alert('Por favor, completa la verificación de seguridad.');
			return false;
		}

		console.log('Validación del formulario pasada, enviando a Brevo');
		return true;
	}

	// Initialize Turnstile when component becomes visible
	function handleFormFocus() {
		if (isTurnstileLoaded && !turnstileWidgetId) {
			setTimeout(initTurnstile, 100);
		}
	}

	// For localhost testing - bypass Turnstile
	function bypassTurnstileForTesting() {
		console.log('Saltando Turnstile para pruebas en localhost');
		turnstileResponse = 'test-token-for-localhost';
	}
</script>

<div
	class="bg-[url('/grid-bg.png')] min-h-[350px] p-2 md:p-10 h-auto w-full container m-auto flex items-center drop-shadow-full"
	style="background-color: {color};"
>
	<div class="Frame52 w-full flex-col justify-center items-center md:p-5">
		<div
			class="text-center text-black text-2xl md:text-5xl font-bold font-['Albert Sans'] md:leading-[63.44px] md:p-5 text-wrap"
		>
			<p>
				{@html text}
			</p>
		</div>
		{#if subscribeForm}
			<div class="flex justify-center mx-auto my-3">
				<form
					class="w-full max-w-sm validate"
					action={breveo_url}
					method="post"
					id="newsletter-form"
					target="_blank"
					on:submit={validateForm}
					on:focus={handleFormFocus}
				>
					<div class="flex flex-col items-center space-y-3">
						<div class="flex items-center w-full">
							<input
								class="appearance-none border-none w-full text-gray-700 px-4 py-3 rounded-tl-3xl rounded-bl-3xl border-zinc-300 leading-tight focus:outline-none"
								placeholder="correo@ejemplo.org"
								aria-label="Email address"
								type="email"
								name="EMAIL"
								required={true}
								value=""
								pattern={regex}
							/>
							<button
								class="flex-shrink-0 px-5 py-2 bg-black rounded-tr-3xl h-11 rounded-br-3xl text-sm border border-black text-white rounded text-base font-bold font-['Albert Sans'] uppercase leading-normal"
								type="submit"
							>
								<input
									type="submit"
									name="subscribe"
									class="button uppercase"
									value="Suscribirme"
								/>
							</button>
						</div>

						<div id="turnstile-container" class="flex justify-center"></div>

						<div style="position: absolute; left: -5000px;" aria-hidden="true">
							<input
								type="text"
								name="b_6a37b9b668c1da15bcc718fa4_203574be23"
								tabindex="-1"
								value=""
							/>
							<input type="text" name="website" tabindex="-1" value="" autocomplete="off" />
							<input type="hidden" name="form_time" value={formStartTime} />
						</div>
					</div>
				</form>
			</div>
		{/if}
	</div>
</div>
