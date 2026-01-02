<template>
  <header class="sticky top-0 z-50 w-full bg-glass-black/80 backdrop-blur-md border-b border-white/10">
    <nav class="container mx-auto flex flex-row justify-between items-center py-5.5 px-6 md:px-0">
      <div>
        <Logo />
      </div>

      <!-- Desktop Navigation -->
      <div class="hidden md:flex gap-8 flex-row text-lg font-extralight">
        <a class="hover:text-neon-lime transition-colors" href="#home">Inicio</a>
        <a class="hover:text-neon-lime transition-colors" href="#projects">Projetos</a>
        <a class="hover:text-neon-lime transition-colors" href="#contact">Contato</a>
      </div>

      <!-- Mobile Menu Button -->
      <button class="md:hidden text-white focus:outline-none" @click="isMenuOpen = !isMenuOpen">
        <svg v-if="!isMenuOpen" xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24"
          stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24"
          stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </nav>

    <!-- Mobile Navigation -->
    <Transition enter-active-class="transition duration-300 ease-out"
      enter-from-class="transform -translate-y-4 opacity-0" enter-to-class="transform translate-y-0 opacity-100"
      leave-active-class="transition duration-200 ease-in" leave-from-class="transform translate-y-0 opacity-100"
      leave-to-class="transform -translate-y-4 opacity-0">
      <div v-if="isMenuOpen" class="md:hidden bg-glass-black/95 backdrop-blur-lg border-b border-white/10 px-6 py-6">
        <div class="flex flex-col gap-6 text-xl font-light">
          <a class="hover:text-neon-lime transition-colors" href="#home" @click="isMenuOpen = false">Inicio</a>
          <a class="hover:text-neon-lime transition-colors" href="#projects" @click="isMenuOpen = false">Projetos</a>
          <a class="hover:text-neon-lime transition-colors" href="#contact" @click="isMenuOpen = false">Contato</a>
        </div>
      </div>
    </Transition>
  </header>
</template>

<script lang="ts" setup>
const isMenuOpen = ref(false)
</script>

<style></style>