<template>
  <div>
    <h2>Random Posts</h2>
    <ul>
      <li v-for="post in randomPosts" :key="post.key">
        <router-link :to="post.path">{{ post.title }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    randomPosts() {
      const posts = this.$site.pages.filter(p => p.path.startsWith('/') && p.frontmatter && p.frontmatter.date);
      return posts.sort(() => 0.5 - Math.random()).slice(0, 50);
    }
  }
}
</script>