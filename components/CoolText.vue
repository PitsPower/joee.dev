<template>
  <div class="cool">
    <h1><slot></slot></h1>
    <h1><slot></slot></h1>
  </div>
</template>

<style scoped>
.cool {
  @apply relative invert;
}

.cool * {
  @apply invert;
  mix-blend-mode: difference;
}

.cool *:first-child {
  @apply absolute top-0 left-0 translate-x-[4px] translate-y-[3px];
}
</style>
