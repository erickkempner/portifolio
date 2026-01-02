<template>
  <section
    class="flex py-10 pb-40 md:pb-10 flex-col md:flex-row justify-between gap-y-10 md:gap-x-4 min-h-[calc(100vh-100px)] md:h-[calc(100vh-100px)] relative container mx-auto px-6 md:px-0">
    <div class="flex flex-col md:mb-20 w-full md:w-1/2 justify-center text-center md:text-left">
      <p class="text-4xl md:text-6xl font-bold text-wrap ">
        Olá, eu sou o Erick. Um
        desenvolvedor
        <span class="text-neon-lime">Fullstack</span>
      </p>
    </div>
    <div class="flex flex-col w-full md:w-1/2 justify-center">

      <div ref="quadrado"
        class="flex border border-white/10
         shadow-2xl flex-col w-full md:max-w-[720px] h-[300px] md:h-[480px] bg-glass-black/60 rounded-md relative overflow-hidden">

        <div class="flex flex-row gap-x-2 justify-end my-4 mx-6 shrink-0">
          <div class="w-4 h-4 bg-red-500/60 rounded-full"></div>
          <div class="w-4 h-4 bg-yellow-500/60 rounded-full"></div>
          <div class="w-4 h-4 bg-green-500/60 rounded-full"></div>
        </div>

        <div class="px-6 w-full h-full pb-5 flex flex-row gap-x-4 overflow-hidden">
          <div class="border-l-2 border-white/20 h-full shrink-0"></div>
          <div class="flex-1 overflow-hidden font-mono text-xs md:text-sm shiki-container">
            <Shiki v-if="currentSnippet1 && displayedCode1" :lang="currentSnippet1.lang" :code="displayedCode1"
              class="w-full h-full" />
          </div>
        </div>

        <!-- Hidden on mobile -->
        <div ref="quadrado2" class="hidden md:flex flex-col
         w-[560px] h-[320px]
         bg-glass-black/95 rounded-md
         absolute bottom-20 right-70
         translate-x-1/2 translate-y-1/2
         overflow-hidden
         border border-white/10
         shadow-2xl">

          <div class="flex flex-row gap-x-2 justify-end my-4 mx-6 shrink-0">
            <div class="w-3 h-3 bg-red-500/60 rounded-full"></div>
            <div class="w-3 h-3 bg-yellow-500/60 rounded-full"></div>
            <div class="w-3 h-3 bg-green-500/60 rounded-full"></div>
          </div>

          <div class="px-6 w-full h-full pb-5 flex flex-row gap-x-4 overflow-hidden">
            <div class="border-l-2 border-white/20 h-full shrink-0"></div>
            <div class="flex-1 overflow-hidden font-mono text-xs shiki-container">
              <Shiki v-if="currentSnippet2 && displayedCode2" :lang="currentSnippet2.lang" :code="displayedCode2"
                class="w-full h-full" />
            </div>
          </div>
        </div>

      </div>
    </div>

    <div ref="scrollIcon" class="absolute bottom-4 md:bottom-0 left-1/2 -translate-x-1/2 w-12 h-12 scroll-icon-white">
      <Lottie name="ScrollIcon" />
    </div>
  </section>
</template>

<script lang="ts" setup>
import type { Ref } from 'vue'

const { $gsap, $ScrollTrigger } = useNuxtApp()


const scrollIcon = ref<HTMLElement | null>(null)

const snippets1: { lang: any; code: string }[] = [
  {
    lang: 'html',
    code: `<div class="developer-card">
  <h1>Erick: Desenvolvedor Fullstack</h1>
  <p>Desenvolvimento de aplicações web escalaveis e com performance.</p>
  <div class="tech-stack">Vue, Nuxt, Nest.js, TypeScript</div>
</div>`
  },
  {
    lang: 'html',
    code: `<template>
  <section class="premium-design">
    <h1>Escolha o melhor dev do digital?</h1>
    <button @click="celebrate">Erick</button>
    <button @click="celebrate">Com certeza é o Erick</button>
  </section>
</template>
<script setup>
const celebrate = () => console.log('Excelente escolha!');
<\/script>`
  },
  {
    lang: 'js',
    code: `const dev = {
  name: 'Erick',
  skills: ['Vue', 'Nuxt', 'Nest', 'TypeScript'],
  isGoodDeveloper: true,
};

if (dev.isGoodDeveloper) {
  console.log("Top");
}`
  }
]

const snippets2: { lang: any; code: string }[] = [
  {
    lang: 'js',
    code: `
async function buildFuture() {
  const result = await bestDev('Erick');
  console.log("Success:", result);
}

buildFuture();`
  },
  {
    lang: 'css',
    code: `.dev-spirit {
  display: flex;
  font-weight: 800;
  color: #f8fafc; 
  animation: pulse 2s ease-in-out infinite;
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
}`
  },
  {
    lang: 'ts',
    code: `interface IDeveloper {
  name: string;
  reliability: 'High' | 'Expert';
}

const erick: IDeveloper = {
  name: 'Erick',
  reliability: 'Expert'
};`
  }
]

const currentIndex1 = ref(0)
const currentSnippet1 = computed(() => snippets1[currentIndex1.value])
const displayedCode1 = ref('')
const typingInterval1 = ref<any | null>(null)
let timeoutId1: any = null

const currentIndex2 = ref(0)
const currentSnippet2 = computed(() => snippets2[currentIndex2.value])
const displayedCode2 = ref('')
const typingInterval2 = ref<any | null>(null)
let timeoutId2: any = null

const typeCode = (fullCode: string, displayedCodeRef: Ref<string>, intervalRef: Ref<any | null>) => {
  if (intervalRef.value) {
    clearInterval(intervalRef.value)
    intervalRef.value = null
  }

  displayedCodeRef.value = ''
  let i = 0

  const timer = setInterval(() => {
    if (i < fullCode.length) {
      displayedCodeRef.value += fullCode.charAt(i)
      i++
    } else {
      clearInterval(timer)
      if (intervalRef.value === timer) {
        intervalRef.value = null
      }
    }
  }, 10)

  intervalRef.value = timer as any
}

const changeCode1 = () => {
  currentIndex1.value = (currentIndex1.value + 1) % snippets1.length
  typeCode(snippets1[currentIndex1.value].code, displayedCode1, typingInterval1)

  const nextInterval = Math.floor(Math.random() * (16000 - 8000 + 1)) + 8000;
  timeoutId1 = setTimeout(changeCode1, nextInterval);
}

const changeCode2 = () => {
  currentIndex2.value = (currentIndex2.value + 1) % snippets2.length
  typeCode(snippets2[currentIndex2.value].code, displayedCode2, typingInterval2)

  const nextInterval = Math.floor(Math.random() * (12000 - 8000 + 1)) + 8000;
  timeoutId2 = setTimeout(changeCode2, nextInterval);
}

onMounted(() => {

  typeCode(snippets1[0].code, displayedCode1, typingInterval1)
  timeoutId1 = setTimeout(changeCode1, 10000)


  setTimeout(() => {
    typeCode(snippets2[0].code, displayedCode2, typingInterval2)
    timeoutId2 = setTimeout(changeCode2, 10000)
  }, 3000)


  if (scrollIcon.value) {
    const scroller = (scrollIcon.value as HTMLElement).closest('.overflow-y-scroll')
    if (scroller) {
      scroller.addEventListener('scroll', () => {
        const opacity = Math.max(0, 1 - scroller.scrollTop / 50)
        $gsap.to(scrollIcon.value, { opacity, duration: 0.2, overwrite: 'auto' })
      })
    }
  }
})

onUnmounted(() => {
  if ($ScrollTrigger && typeof $ScrollTrigger.getAll === 'function') {
    $ScrollTrigger.getAll().forEach((trigger: any) => trigger.kill())
  }
  if (timeoutId1) clearTimeout(timeoutId1)
  if (timeoutId2) clearTimeout(timeoutId2)
  if (typingInterval1.value) clearInterval(typingInterval1.value)
  if (typingInterval2.value) clearInterval(typingInterval2.value)
})

</script>

<style scoped>
:deep(.shiki),
:deep(pre),
:deep(code) {
  background-color: transparent !important;
  background: transparent !important;
}

:deep(pre) {
  margin: 0 !important;
  padding: 0 !important;
  overflow: hidden !important;
}

:deep(code) {
  font-family: 'Fira Code', 'Courier New', Courier, monospace;

  color: #e2e8f0 !important;
}


:deep(.shiki span) {
  filter: brightness(1.5);
}

.shiki-container {
  display: flex;
  align-items: center;
}

.scroll-icon-white {
  filter: brightness(0) invert(1);
}
</style>