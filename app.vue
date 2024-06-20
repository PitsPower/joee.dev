<template>
  <nav class="header" :class="{ 'home': $route.path === '/' }">
    <div class="title">
      <NuxtLink to="/">joee.dev</NuxtLink>
    </div>
    <div class="links">
      <NuxtLink to="/about">about</NuxtLink>
      <NuxtLink to="/projects">projects</NuxtLink>
      <NuxtLink to="/contact">contact</NuxtLink>
    </div>
  </nav>

  <div class="content">
    <NuxtPage />
  </div>
</template>

<style lang="scss">
::selection {
  @apply bg-black text-white;
}

.page-enter-active,
.page-leave-active {
  transition: all 0.15s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  transform: translateX(-10px);
}

body {
  @apply text-2xl;
}

.header {
  $perspective: rotateX(15deg) rotateY(5deg);

  &, * {
    transition: all 0.4s;
  }

  &.home {
    @apply top-1/2;

    .title {
      transform: $perspective;
    }

    .links {
      @apply mt-2 mr-36;

      a {
        @apply text-2xl mx-[10px];
      }
    }
  }

  @apply absolute top-[5%] left-1/2 -translate-x-1/2 -translate-y-1/2;
  perspective: 500px;

  .title {
    @apply text-9xl font-bold bg-black text-white select-none
      pl-1 pr-2 pb-3;
    font-family: 'Zilla Slab';
    transform: scale(0.5);
  }

  .links {
    @apply mt-[-30px] text-center;

    a {
      @apply text-lg underline mx-[15px];
    }
  }
}

.content {
  @apply mt-56 px-96;
}
</style>
