
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TextPlugin } from 'gsap/TextPlugin' 

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