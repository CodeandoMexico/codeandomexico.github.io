import client from '$lib/apiClient'
import { getFlatArrayUnrepeated } from '$lib/utilities';
import { readSingleton, readItems } from '@directus/sdk'

export async function load() {
  let highlightedPost = await client.request(readSingleton('blog', {
    fields: ['*', "highlight_post.*", "highlight_post.authors.authors_id.*"],
  })).then(res => res ? res.highlight_post : null);

  // get and sort posts
  let posts = await client.request(readItems('Blog_Posts', {
    fields: ['*', "user_created.*", {
      authors: [{ authors_id: ['*'] }]
    }
    ],
    filter: {
      status: {
        _eq: "published"
      }
    },
    sort: ['-date_published'],
  }))

  const tags = getFlatArrayUnrepeated(posts);
  tags.unshift('todos');

  if (!highlightedPost) {
    highlightedPost = posts[0];
    posts = posts.filter(post => post.slug !== highlightedPost.slug);
  }

  return {
    highlightedPost: highlightedPost,
    posts,
    tags,
  }
}

export const prerender = true;

