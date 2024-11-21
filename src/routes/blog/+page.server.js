import client from '$lib/apiClient'
import { readSingleton, readItems } from '@directus/sdk'

export async function load() {
  const blog = await client.request(readSingleton('blog', {
    fields: ['*', "highlight_post.*", "highlight_post.authors.authors_id.*"],
  }))

  // get and sort posts
  const posts = await client.request(readItems('Blog_Posts', {
    fields: ['*', "user_created.*", {
        authors: [{authors_id: ['*']}]
      }
    ],
    filter: {
			status: {
        _eq: "published"
      }
		},
    sort: ['-date_published'],
  }))

  let tags = ['todos'];
  posts.forEach(item => {
    tags = [...new Set([...tags, ...item.tags.map((tag = '') => tag.toLowerCase()).flat()])]
  })

	return {
		blog,
    posts,
    tags,
	}
}

export const prerender = true;

