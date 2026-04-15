import client from '$lib/apiClient'
import { readItems } from '@directus/sdk'
import { getFlatArrayUnrepeated } from '$lib/utilities';
import { error } from '@sveltejs/kit';

export async function entries() {
  const posts = await client.request(readItems('Blog_Posts', {
    fields: ['tags'],
    filter: { status: { _eq: 'published' } },
  }));
  const allTags = getFlatArrayUnrepeated(posts);
  return allTags.map((tag) => ({ tag }));
}

export async function load({ params }) {
  const tag = params.tag.toLowerCase();

  const allPosts = await client.request(readItems('Blog_Posts', {
    fields: ['*', { authors: [{ authors_id: ['*'] }] }],
    filter: { status: { _eq: 'published' } },
    sort: ['-date_published'],
  }));

  const allTags = getFlatArrayUnrepeated(allPosts);

  if (!allTags.includes(tag)) {
    throw error(404, `No hay entradas con el tag "${tag}"`);
  }

  const filteredPosts = allPosts.filter((post) =>
    post.tags?.map((t) => t.toLowerCase()).includes(tag)
  );

  return { posts: filteredPosts, tag, allTags };
}

export const prerender = true;
