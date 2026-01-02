<template>

  <section class="relative w-full h-full  flex flex-col items-center justify-center overflow-hidden">


    <div class="absolute inset-0  pointer-events-none">
    </div>


    <div class="container mx-auto px-4 z-10 relative flex flex-col justify-center h-full mb-10">


      <div class="mb-8 md:mb-12 text-center md:text-left md:pl-12">
        <h2
          class="text-4xl md:text-6xl font-bold  text-center bg-gradient-to-b from-white via-white/80 to-white/40 bg-clip-text text-transparent">
          Meus Projetos
        </h2>
      </div>


      <div class="relative w-full max-w-6xl mx-auto group">


        <button @click="scroll('left')"
          class="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-20 text-gray-500 hover:text-[#39FF14] transition-colors p-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
            class="w-10 h-10">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>


        <ul ref="scrollContainer"
          class="flex w-full overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-hide">
          <li v-for="project in projects" :key="project.id" class="w-full flex-shrink-0 snap-center px-4 md:px-8">

            <div
              class="bg-glass-black/80 backdrop-blur-md  rounded-xl overflow-hidden shadow-2xl flex flex-col md:flex-row h-auto md:h-[500px] w-full transform transition-all ">


              <div class="w-full h-48 md:h-auto md:w-1/2 bg-glass-black relative group/img overflow-hidden ">

                <div class="absolute inset-0 bg-[#39FF14]/10 opacity-0  transition-opacity z-10">
                </div>
                <img :src="project.image" :alt="project.title"
                  class="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-110 opacity-80 ">
              </div>


              <div class="w-full md:w-1/2 p-6 md:p-10 flex flex-col relative">


                <h3 class="text-2xl md:text-4xl font-bold text-white mb-1 tracking-tight text-center md:text-left">
                  {{ project.title }}
                </h3>


                <p class="text-gray-400 text-base md:text-lg leading-relaxed text-center md:text-left mb-6">
                  {{ project.desc }}
                </p>

                <div class="flex flex-row flex-wrap justify-center md:justify-start gap-4 md:gap-7 mb-8">
                  <div class="flex-row flex" v-for="(tech, index) in project.tags" :key="index">
                    <Icon :title="tech" :name="icon(tech)"
                      class="w-10 h-10 md:w-14 md:h-14 p-2 md:p-4 border border-white/5 rounded-lg bg-white/5" />
                  </div>
                </div>

                <div class="mt-auto flex flex-col sm:flex-row gap-3 md:gap-2">
                  <NuxtLink :to="`${project.links.demo}`" target="_blank"
                    class="group cursor-pointer flex items-center bg-green-700 py-3 md:py-4 rounded-xl md:rounded-2xl justify-center gap-3 text-white font-medium w-full md:w-2/3 transition-colors">

                    <Icon class="text-xl md:text-2xl" name="material-symbols:page-footer-outline-rounded" />

                    <span class="text-sm md:text-md">Ver Demonstração</span>
                  </NuxtLink>
                  <NuxtLink :to="`${project.links.code}`" target="_blank"
                    class="group cursor-pointer flex  items-center  bg-black py-3 md:py-4 rounded-xl md:rounded-2xl justify-center gap-3 text-white font-medium w-full md:w-1/3 transition-colors">
                    <Icon class="text-xl md:text-2xl" name="mdi:github" />
                    <span class="text-sm md:text-md">Ver Código</span>
                  </NuxtLink>
                </div>



              </div>
            </div>
          </li>
        </ul>


        <button @click="scroll('right')"
          class="hidden md:flex absolute cursor-pointer right-0 top-1/2 -translate-y-1/2 translate-x-12 z-20 text-gray-500 hover:text-[#39FF14] transition-colors p-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
            class="w-10 h-10">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">


const projects = [
  {
    id: 1,
    title: 'Encurtador de Url - Shrtly',
    desc: 'Encurtador de URL com sistema de autenticação, gestão de links, estatísticas e localização de acesso ao link.',
    tags: ['Vue', 'Nuxt', 'Tailwind', 'Supabase'],
    image: '/projects/url/encurtador.png',
    links: {
      demo: 'https://url-shortner-ten-iota.vercel.app/',
      code: 'https://github.com/erickkempner/url-shortner'
    }
  },
  {
    id: 2,
    title: 'Portifolio',
    desc: 'Portifolio com sistema de envio de email',
    tags: ['Vue', 'Nuxt', 'Tailwind'],
    image: '/projects/portifolio/portifolio.png',
    links: {
      demo: 'https://erickkempner.vercel.app',
      code: 'https://github.com/erickkempner/portifolio'
    }
  },
  {
    id: 3,
    title: 'Wiki Rick and Morty',
    desc: 'Wiki Rick and Morty com sistema de salvar personagens favoritos.',
    tags: ['Vue', 'Nuxt', 'Tailwind', 'Pinia'],
    image: '/projects/rick/rick.png',
    links: {
      demo: 'https://rick-and-morty-two-gray.vercel.app/',
      code: 'https://github.com/erickkempner/search-rick-and-morty'
    }
  }
];

const icon = (icon: string) => {
  switch (icon) {
    case 'Nuxt':
      return 'devicon:nuxt';
    case 'Vue':
      return 'devicon:vuejs';
    case 'Supabase':
      return 'devicon:supabase';
    case 'Tailwind':
      return 'devicon:tailwindcss';
    case 'Pinia':
      return 'logos:pinia';
    case 'GSAP':
      return 'simple-icons:gsap';
    default:
      return 'Unknown';
  }
}

const scrollContainer = ref<HTMLElement | null>(null);

const scroll = (direction: 'left' | 'right') => {
  if (!scrollContainer.value) return;
  const scrollAmount = scrollContainer.value.clientWidth;
  scrollContainer.value.scrollBy({
    left: direction === 'left' ? -scrollAmount : scrollAmount,
    behavior: 'smooth'
  });
};
</script>

<style scoped>
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
</style>