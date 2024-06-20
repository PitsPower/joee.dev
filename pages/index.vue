<template>
  <div class="wrapper">
    <div class="title">joee.dev</div>
    <div class="links">
      <NuxtLink to="/about">about</NuxtLink>
      <NuxtLink to="/projects">projects</NuxtLink>
      <NuxtLink to="/contact">contact</NuxtLink>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  @apply absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2;
  perspective: 500px;
}

.title {
  @apply text-9xl font-bold bg-black text-white select-none
    pl-1 pr-2 pb-3;
  font-family: 'Zilla Slab';
  transform: rotateX(15deg) rotateY(5deg);
}

.links {
  @apply mt-1 ml-[-10px];
}

.links a {
  @apply underline mr-3;
}
</style>