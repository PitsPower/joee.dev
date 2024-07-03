<script lang="ts" setup>
const scroll = ref<HTMLElement>()
const scrollInfo = useScroll(scroll)
</script>

<template>
  <div class="scroll" ref="scroll">
    <div class="padding"></div>
    <ExplainerText v-for="i in Array(50)" :scroll="scrollInfo.y">
      Let's suppose the year is 1999, you're a game developer,
      and you want to normalise a vector.
    </ExplainerText>
  </div>
</template>

<style lang="scss" scoped>
.scroll {
  @apply absolute;
  overflow: auto;
  height: 500px;
  scroll-snap-type: y mandatory;

  .padding {
    margin-top: 50%;
  }

  p {
    @apply text-2xl my-12;
    max-width: 700px;
    scroll-snap-align: center;
  }
}
</style>
