<script setup lang="ts">


const projects = [
  {
    id: 1,
    title: 'ECOMMERCE_NUXT',
    subtitle: 'Fullstack Platform',
    desc: 'Loja virtual de alta performance. Integração completa com Stripe e sistema de gestão de estoque em tempo real.',
    tags: ['Nuxt', 'Tailwind', 'Supabase'],
    image: 'https://placehold.co/800x500/050f08/39FF14?text=PROJECT_01',
    links: {
      demo: 'https://ecommerce-nuxt.vercel.app',
      code: 'https://github.com/erickgarcia12/ecommerce-nuxt'
    }
  },
  {
    id: 2,
    title: 'SAAS_DASHBOARD',
    subtitle: 'Analytics Engine',
    desc: 'Painel administrativo para visualização de dados complexos com gráficos interativos e exportação de relatórios.',
    tags: ['Vue'],
    image: 'https://placehold.co/800x500/050f08/39FF14?text=PROJECT_02',
    links: {
      demo: 'https://ecommerce-nuxt.vercel.app',
      code: 'https://github.com/erickgarcia12/ecommerce-nuxt'
    }
  },
  {
    id: 3,
    title: 'CRYPTO_WALLET',
    subtitle: 'DeFi Application',
    desc: 'Aplicação descentralizada para gestão de ativos digitais com segurança reforçada e UI futurista.',
    tags: [],
    image: 'https://placehold.co/800x500/050f08/39FF14?text=PROJECT_03',
    links: {
      demo: 'https://ecommerce-nuxt.vercel.app',
      code: 'https://github.com/erickgarcia12/ecommerce-nuxt'
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

<template>

  <section class="relative w-full h-full  flex flex-col items-center justify-center overflow-hidden">


    <div class="absolute inset-0  pointer-events-none">
    </div>


    <div class="container mx-auto px-4 z-10 relative flex flex-col justify-center h-full mb-10">


      <div class="mb-8 md:mb-12 text-center md:text-left md:pl-12">
        <h2 class="text-3xl md:text-6xl font-bold text-white text-center tracking-tight">
          Meus Projetos
        </h2>
      </div>


      <div class="relative w-full max-w-6xl mx-auto group">


        <button @click="scroll('left')"
          class="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-12 z-20 text-gray-500 hover:text-[#39FF14] transition-colors p-2">
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


              <div class="w-full md:w-1/2 bg-glass-black relative group/img overflow-hidden ">

                <div class="absolute inset-0 bg-[#39FF14]/10 opacity-0  transition-opacity z-10">
                </div>
                <img :src="project.image" :alt="project.title"
                  class="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-110 opacity-80 ">
              </div>


              <div class="w-full md:w-1/2 p-6 md:p-10 flex flex-col relative">





                <h3 class="text-3xl md:text-4xl font-bold text-white mb-1 tracking-tight">
                  {{ project.title }}
                </h3>


                <p class="text-gray-400 text-lg leading-relaxed ">
                  {{ project.desc }}
                </p>

                <div class="flex flex-row gap-7">
                  <div class="flex-row flex" v-for="(tech, index) in project.tags" :key="index">
                    <Icon :title="tech" :name="icon(tech)" class="w-14 p-6 h-14 mt-2" />
                  </div>
                </div>

                <div class="mt-auto flex flex-row gap-2">
                  <NuxtLink :to="`${project.links.demo}`"
                    class="group cursor-pointer flex items-center bg-green-700 py-4 rounded-2xl justify-center gap-3 text-white font-medium w-2/3 transition-colors">

                    <Icon class="text-2xl" name="material-symbols:page-footer-outline-rounded" />

                    <span class="text-md">Ver Demonstração</span>
                  </NuxtLink>
                  <NuxtLink :to="`${project.links.code}`"
                    class="group cursor-pointer flex  items-center  bg-black py-4 rounded-2xl justify-center gap-3 text-white font-medium w-1/3 transition-colors">
                    <Icon class="text-2xl" name="mdi:github" />
                    <span class="text-md">Ver Código</span>
                  </NuxtLink>
                </div>



              </div>
            </div>
          </li>
        </ul>


        <button @click="scroll('right')"
          class="absolute cursor-pointer right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-12 z-20 text-gray-500 hover:text-[#39FF14] transition-colors p-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
            class="w-10 h-10">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>

      </div>
    </div>
  </section>
</template>

<style scoped>
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
</style>