<script lang="ts" setup>
const posts = [
  {
    slug: 'fast-invsqrt',
    name: 'Fast Inverse Square Root',
    description: 'An explanation for an infamous algorithm.'
  }
]
</script>

<template>
  <div>
    <h1>posts:</h1>
    <ul>
      <li v-for="post in posts">
        <NuxtLink :to="`/blog/${post.slug}`">{{ post.name }}</NuxtLink>
      </li>
    </ul>
    <NuxtPage />
  </div>
</template>
