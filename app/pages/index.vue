<template>
  <div
    class="h-screen w-full overflow-y-scroll md:snap-y md:snap-mandatory scroll-smooth scroll-pt-20 no-scrollbar relative">


    <Header class="" />



    <SectionMain id="home" class="w-full snap-start min-h-[calc(100vh-5rem)] md:h-[calc(100vh-5rem)] relative z-0"
      ref="main" />


    <SectionProjects id="projects"
      class="w-full min-h-[calc(100vh-5rem)] md:h-[calc(100vh-5rem)] snap-start snap-always relative z-0" />

    <SectionContact id="contact"
      class="w-full min-h-[calc(100vh-5rem)] md:h-[calc(100vh-5rem)] snap-start snap-always relative z-0" />

  </div>
</template>

<script setup>

const { $gsap, $ScrollTrigger } = useNuxtApp()

const main = ref(null)

onMounted(() => {



})

onUnmounted(() => {
  if ($ScrollTrigger) {
    $ScrollTrigger.getAll().forEach(trigger => trigger.kill())
  }
})
</script>

<style scoped>
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.no-scrollbar::-webkit-scrollbar {
  display: none;
}
</style>