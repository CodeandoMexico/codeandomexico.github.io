import { writable } from "svelte/store";

export const principalMenuStore = writable({
  urlActive: '',
  color: ''
});
