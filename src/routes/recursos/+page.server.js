import client from '$lib/apiClient'
import { readItems } from '@directus/sdk'

export async function load() {

  const conocimientos = await client.request(readItems('subseccion', {

    fields: [
      "*",
      {
        recursos: ["*",
          {
            authors:
              ["*",
                {
                  authors_id: ["*"]
                }
              ]
          }
        ]
      }
    ],
    filter: { status: { _eq: 'published' } },
    deep: {
      recursos: {
        _filter: { status: { _eq: 'published' } },
        _sort: ['-date_created'],
      },
    },
  }))

  const recursos = await client.request(readItems('categorias_recursos', {

    fields: [
      "*",
      {
        recursos: ["*"]
      }
    ],
    sort: ['categorias'],
    filter: { status: { _eq: 'published' } },
    deep: {
      recursos: {
        _filter: { status: { _eq: 'published' } },
        _sort: ['-date_created'],
      },
    },
  }))

  return {
    conocimientos, recursos
  }
}

export const prerender = true;
