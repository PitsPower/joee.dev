<script lang="ts" setup>
const props = defineProps<{
  value: number,
  padding?: number
}>()

const digits = computed(
  () => props.value
    .toString()
    .padStart(props.padding ?? 0, '0')
    .split('')
)
</script>

<template>
  <span>
    <span v-for="digit, i in digits" class="digit" :class="{ 'mr-2': i === 0 }">{{ digit }}</span>
  </span>
</template>

<style scoped>
.digit {
  @apply bg-black text-white text-6xl font-mono pt-2;
}
</style>