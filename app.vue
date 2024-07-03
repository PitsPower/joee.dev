<template>
  <nav class="header" :class="{ 'home': $route.path === '/' }">
    <div class="title">
      <NuxtLink to="/">joee.dev</NuxtLink>
    </div>
    <div class="links">
      <NuxtLink to="/about">about</NuxtLink>
      <NuxtLink to="/projects">projects</NuxtLink>
      <!-- <NuxtLink to="/contact">contact</NuxtLink> -->
      <a href="mailto:contact@joee.dev" target="_blank">contact</a>
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

::-webkit-scrollbar {
  @apply w-2.5;
}

::-webkit-scrollbar-track {
  @apply rounded-full;
}

::-webkit-scrollbar-thumb {
  @apply bg-black rounded-full
    border-white border-solid border-s-2;
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
  @apply overflow-hidden;
}

h1 {
  @apply text-4xl;
  font-family: 'Zilla Slab';
}

.header {
  $perspective: rotateX(15deg) rotateY(5deg);

  @apply absolute z-50 -top-3.5 left-1/2 -translate-x-1/2;
  perspective: 500px;

  &, * {
    transition: all 0.4s;
  }

  &.home {
    @apply top-1/2 -translate-y-1/2 scale-[60%] md:scale-100;

    .title {
      transform: $perspective;
    }

    .links {
      @apply mt-2 mr-16 md:scale-100;

      a {
        @apply text-3xl md:text-2xl mx-[10px];
      }
    }
  }

  .title {
    @apply text-9xl font-bold bg-black text-white select-none
      pl-1 pr-2 pb-3 scale-50;
    font-family: 'Zilla Slab';
  }

  .links {
    @apply mt-[-35px] text-center;

    a {
      @apply select-none text-lg underline mx-2;
    }
  }
}

.content {
  @apply overflow-auto h-[calc(100vh-8rem)]
    mt-32 px-8
    md:px-40 2xl:px-96;

  h1 {
    margin-bottom: 30px;
  }
}
</style>
