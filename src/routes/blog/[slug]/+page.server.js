import client from '$lib/apiClient'
import { readItems } from '@directus/sdk'

export async function entries() {
	// get published posts
	const posts = await client.request(readItems('Blog_Posts', {
		filter: {
			status: {
				_eq: "published"
			}
		}
	}))

	return posts.map((post) => ({
		slug: post.slug,
	}));
}



export async function load({ params }) {
	const slug = params.slug
	const data = await client.request(readItems('Blog_Posts', {
		fields: ['*', 'authors.authors_id.*'],
		filter: {
			slug: {
				_eq: slug
			}
		}
	}))

	return {
		post: data[0]
	}
}

export const prerender = true;

