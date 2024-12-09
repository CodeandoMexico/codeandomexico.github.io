import { onDestroy } from "svelte";
import { principalMenuStore } from "@/store";

export function updateMenuSelector({url = '/', color = 'text-white'}) {
  principalMenuStore.update(data => {
    data.urlActive = url
    data.color = color

    return data
  });

  onDestroy(() => {
    principalMenuStore.update(data => {
      data.urlActive = ''
      data.color = ''

      return data
    });
  });
}