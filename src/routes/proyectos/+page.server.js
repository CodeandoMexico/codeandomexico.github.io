import client from '$lib/apiClient'
import { getFlatArrayUnrepeated } from '$lib/utilities';
import { readItems } from '@directus/sdk'

export async function load() {

  const projects = await client.request(readItems('projects', {
    filter: {
			status: {
        _eq: "published"
      }
		}
  }))

  const tags = getFlatArrayUnrepeated(projects);

	return {
    projects,
    tags
	}
}

export const prerender = true;

