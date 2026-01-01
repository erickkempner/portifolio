// https://nuxt.com/docs/api/configuration/nuxt-config
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
    componentName: 'Lottie', // Optional: Customize the component name
    lottieFolder: '/assets/lottie', // Optional: Customize the Lottie folder path
    autoFolderCreation: false, // Optional: Auto create lottie folder (default: true)
    enableLogs: true // Optional: Enable console logs from module (default: true)
  }
})