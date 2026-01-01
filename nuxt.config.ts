
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  plugins: ['~/plugins/gsap.client.ts'],
  css: ['./app/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  devtools: { enabled: true },
  modules: ['@nuxt/fonts', '@nuxt/icon', '@nuxt/image', 'nuxt-shiki', 'nuxt-lottie'],
  shiki: {
    bundledLangs: ['html', 'javascript', 'typescript', 'css', 'json', 'vue'],
    bundledThemes: ['github-dark']
  },
  lottie: {
    componentName: 'Lottie', 
    lottieFolder: '/assets/lottie', 
    autoFolderCreation: false, 
    enableLogs: true 
  }
})