<script lang="ts" setup>
import ConfettiExplosion from 'vue-confetti-explosion'

useSeoMeta({
  title: 'joee.dev - about',
  ogImage: '/img/logo/256.png',
  ogDescription: 'Hey! My name is Joseph Edwards.'
})

const now = useTimestamp()

const startTimestamp = 1455494400000
const timeElapsed = computed(() => now.value - startTimestamp)
const yearsElapsed = computed(() => Math.floor(timeElapsed.value / (1000 * 60 * 60 * 24 * 365)))

const graduationTimestamp = 1721991000000
const timeUntilGraduation = computed(() => 
  Math.max(0, Math.floor((graduationTimestamp - now.value) / 1000))
)
const graduationSeconds = computed(() => timeUntilGraduation.value % 60)
const graduationMinutes = computed(() => Math.floor(timeUntilGraduation.value / 60) % 60)
const graduationHours = computed(() => Math.floor(timeUntilGraduation.value / (60 * 60)) % 24)
const graduationDays = computed(() => Math.floor(timeUntilGraduation.value / (60 * 60 * 24)))

const showConfetti = ref(false)
watch(timeUntilGraduation, (newTime, oldTime) => {
  if (oldTime > 0 && newTime <= 0) {
    showConfetti.value = true
  }
})
</script>

<template>
  <div class="overflow-hidden mt-10">
    <h1 class="text-5xl font-bold">about me</h1>
    <div class="flex flex-col xl:flex-row items-center xl:items-start mt-10">
      <img class="basis-0 w-[400px] h-[400px]"
        src="https://picsum.photos/400/400"
        alt="Me!" width="400" height="400">
      <div class="stuff">
        <p>Hey! My name is Joseph Edwards.</p>
        <p>I like making cool stuff, whether that be through programming, writing, drawing, or whatever else.</p>
        <p>I've been programming since I was a kid, and I've been doing web development for {{ yearsElapsed }} years, in some form or another.</p>
        <hr class="border-black border-2">
        <p>For the past 4 years I've been studying Computer Science at the University of Oxford.</p>
        
        <ConfettiExplosion v-if="showConfetti" class="absolute left-1/2" />

        <template v-if="timeUntilGraduation > 0">
          <p>I haven't graduated yet, but I'm due to graduate in</p>

          <div class="text-center xl:text-start">
            <div class="group sm:mr-14 mb-5 sm:mb-0">
              <CountdownNumber :value="graduationDays" :padding="2" />
              <div>days</div>
            </div>
            <br class="sm:hidden">
            <div class="group mr-3">
              <CountdownNumber :value="graduationHours" :padding="2" />
              <div>hours</div>
            </div>
            <span class="colon">:</span>
            <div class="group mr-3">
              <CountdownNumber :value="graduationMinutes" :padding="2" />
              <div>minutes</div>
            </div>
            <span class="colon">:</span>
            <div class="group">
              <CountdownNumber :value="graduationSeconds" :padding="2" />
              <div>seconds</div>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<style scoped>
.stuff {
  @apply text-xl xl:px-10 py-5 xl:py-0;
}
.stuff p, .stuff hr {
  @apply mb-5;
}

.group {
  @apply inline-block;
}
.group div {
  @apply text-[18px] text-center;
}

.colon {
  @apply text-5xl relative -top-10 -left-[6px];
}
</style>
