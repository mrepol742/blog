<template>
  <div class="tag-list">
    <h3>Tags</h3>
    <ul>
      <li v-for="tag in tags" :key="tag">
        <RouterLink :to="`/tag/${tag}/`">{{ tag }}</RouterLink>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['tags']
}
</script>