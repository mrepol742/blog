<template>
  <div class="custom-blog-layout">
    <aside class="sidebar">
      <TagsList :tags="tags" />
      <AuthorList :authors="authors" />
    </aside>
    <main class="content">
      <slot /> <!-- Blog list or post content -->
    </main>
  </div>
</template>

<script>
import TagsList from '../components/TagsList.vue'
import AuthorList from '../components/AuthorList.vue'

export default {
  components: {
    TagsList,
    AuthorList
  },
  computed: {
    $sitePages() {
      return this.$site.pages
    },
    tags() {
      // Extract tags from frontmatter
      const tagMap = new Set()
      this.$site.pages.forEach(p => {
        if (p.frontmatter.tags) {
          p.frontmatter.tags.forEach(tag => tagMap.add(tag))
        }
      })
      return Array.from(tagMap)
    },
    authors() {
      const authorMap = new Set()
      this.$site.pages.forEach(p => {
        if (p.frontmatter.author) {
          authorMap.add(p.frontmatter.author)
        }
      })
      return Array.from(authorMap)
    }
  }
}
</script>

<style scoped>
.custom-blog-layout {
  display: flex;
  flex-direction: row;
}
.sidebar {
  width: 250px;
  padding: 1rem;
  border-right: 1px solid #ccc;
}
.content {
  flex: 1;
  padding: 1rem;
}
</style>