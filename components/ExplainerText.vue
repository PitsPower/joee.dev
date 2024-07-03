<script lang="ts" setup>
const props = defineProps<{ scroll: Ref<number> }>()

const paragraph = ref<HTMLElement>()

const scrollHeight = computed(() => {
  if (paragraph.value === undefined) {
    return 0
  }

  return paragraph.value.offsetTop - props.scroll.value
})

const isSelected = computed(() => {
  const paragraphHeight = paragraph.value?.clientHeight ?? 0;
  return scrollHeight.value >= 250 - paragraphHeight * 2 &&
    scrollHeight.value < 250 + paragraphHeight * 2
})
</script>

<template>
  <p ref="paragraph"
    :style="{ opacity: isSelected ? 1 : 0.3 }"
    @click="paragraph?.scrollIntoView({ block: 'center', behavior: 'smooth' })"
  >
    <slot />
  </p>
</template>
