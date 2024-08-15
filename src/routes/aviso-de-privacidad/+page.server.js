import client from '$lib/apiClient'
import { readSingleton } from '@directus/sdk'

export async function load() {
  const aviso = await client.request(readSingleton('aviso_privacidad', {
    fields: ['*']
  }))

  return { aviso }
}
export const prerender = true;