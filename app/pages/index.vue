<template>
  <div class="">
    <Header />
    <SectionMain />

  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const { $gsap, $ScrollTrigger } = useNuxtApp()

const quadrado = ref(null)

onMounted(() => {

})

onUnmounted(() => {
  if ($ScrollTrigger) {
    $ScrollTrigger.getAll().forEach(trigger => trigger.kill())
  }
})
</script>

<style scoped></style>