<script lang="ts" setup>
defineProps<{
  title: string,
  color: string,
  whiteText: boolean,
  projectUrl?: string,
  imageUrl: string
}>()
</script>

<template>
  <a
    :href="projectUrl"
    target="_blank"
    class="project"
    :class="{ [color]: true, white: whiteText, clicky: projectUrl !== undefined }"
  >
    <img :src="imageUrl" :alt="title" />
    <div class="info">
      <h1>{{ title }}</h1>
      <p><slot /></p>
    </div>
  </a>
</template>

<style lang="scss" scoped>
.project {
  $lift-height: 1.5px;
  $shadow: 6px;

  @apply flex relative top-0 left-0
    bg-gradient-to-t xl:bg-gradient-to-r from-50% to-transparent;

  box-shadow: $shadow $shadow #000;
  transition: all 0.15s;

  &.white {
    @apply text-white;

    .info h1 {
      @apply border-white;
    }
  }

  &.white *::selection {
    @apply bg-white text-black;
  }
  
  &:nth-child(2n) {
    @apply xl:ml-6;
  }
  &:nth-child(2n+1) {
    @apply xl:mr-6;
  }

  &.clicky:hover {
    box-shadow: $shadow + 2 * $lift-height $shadow + 2 * $lift-height #000;
    top: -$lift-height;
    left: -$lift-height;
  }
  
  img {
    @apply select-none object-cover -z-50 absolute
      w-full h-1/2 top-0
      xl:w-1/2 xl:h-full xl:right-0;
  }

  .info {
    @apply p-10 box-border relative
      flex flex-col justify-center items-start
      xl:basis-2/3;

    h1 {
      @apply text-5xl font-bold mb-6
        pl-3 py-1 border-l-[12px] border-black;
    }

    p {
      @apply text-lg;
    }
  }
}
</style>
