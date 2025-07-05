<template>
  <div class="author-list">
    <h3>Authors</h3>
    <ul>
      <li v-for="author in authors" :key="author">
        <RouterLink :to="`/author/${author}/`">{{ author }}</RouterLink>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['authors']
}
</script>