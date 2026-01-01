<template>
  <header class="sticky top-0 z-50 w-full bg-glass-black/80 backdrop-blur-md border-b border-white/10">
    <nav class="container mx-auto flex flex-row justify-between items-center py-5.5 px-6 md:px-0">
      <div>
        <Logo />
      </div>
      <div class="gap-8 flex flex-row text-lg font-extralight ">
        <NuxtLink class="hover:text-neon-lime transition-colors" to="#home">Inicio</NuxtLink>
        <NuxtLink class="hover:text-neon-lime transition-colors" to="#projects">Projetos</NuxtLink>
        <NuxtLink class="hover:text-neon-lime transition-colors" to="#contact">Contato</NuxtLink>
      </div>
    </nav>
  </header>
</template>

<script lang="ts" setup>

</script>

<style></style>