// plugins/gsap.client.js
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TextPlugin } from 'gsap/TextPlugin' // Exemplo de um plugin adicional

gsap.registerPlugin(ScrollTrigger, TextPlugin)

export default defineNuxtPlugin(() => {
  return {
    provide: {
      gsap: gsap,
      ScrollTrigger: ScrollTrigger,
      TextPlugin: TextPlugin,
    },
  }
})