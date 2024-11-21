<script>
  import ArticleCard from "@/components/Cards/ArticleCard.svelte";
  import BlogHero from "@/components/BlogHero.svelte";
  import TagsMenu from "@/components/TagsMenu.svelte";
  export let data
  const { blog, posts, tags } = data
  let filteredPosts = [...posts]
  let activeTag = "todos"

  const handleTags = (tag = "") => {
    tag = tag.toLocaleLowerCase()
    activeTag = tag
    filteredPosts = tag === "todos"
      ? [...posts]
      : posts.filter(post => post.tags.map((tagItem = '') => tagItem.toLowerCase()).includes(tag))
  }
</script>
<div class="container my-20 mx-auto">

  <div class="container m-auto px-3">
    <div class="my-7">
      <h1 class="text-5xl text-cmxgreen font-bold">Blog</h1>
    </div>
    <BlogHero 
    slug={blog.highlight_post.slug}
    title={blog.highlight_post.title}
    tag={blog.highlight_post.tags[0]}
    date={blog.highlight_post.date_published || blog.highlight_post.date_created}
    image={`https://content.codeandomexico.org/assets/${blog.highlight_post.post_image}`}
    authors={blog.highlight_post.authors}
    content={blog.highlight_post.content}
    />
  </div>
  <div class="container mx-auto px-3 pt-16 pb-12 text-center">
    <TagsMenu
      activeTag={activeTag}
      handleTags={handleTags}
      tags={tags}
    />
  </div>
  <div class="container m-auto p-3">
    <div class="md:grid grid-cols-3 gap-5">
    {#each filteredPosts as post}
      <ArticleCard
      slug={post.slug}
      title={post.title}
      tag={post.tags[0]}
      handleTags={handleTags}
      authors={post.authors}
      date={post.date_published || post.date_created}
      image={`https://content.codeandomexico.org/assets/${post.post_image}`}
      />
    {/each}
    </div>
  </div>
</div>