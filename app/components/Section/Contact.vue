<script lang="ts" setup>
const form = ref({
  name: '',
  email: '',
  whatsapp: '',
  message: ''
})

const loading = ref(false)
const success = ref(false)
const error = ref(false)

const FORMSPREE_URL = 'https://formspree.io/f/mrebpzdn'

const sendMessage = async () => {
  loading.value = true
  error.value = false
  success.value = false

  try {
    const response = await fetch(FORMSPREE_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form.value)
    })

    if (response.ok) {
      success.value = true
      form.value = { name: '', email: '', message: '' }
    } else {
      error.value = true
    }
  } catch (err) {
    error.value = true
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <section id="contact"
    class="container mx-auto px-6 py-20 md:py-0 min-h-[calc(100vh-100px)] flex items-center justify-center">

    <div class="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 w-full max-w-6xl items-center">

      <div class="flex flex-col gap-6 text-center md:text-left">
        <div>
          <h2 class="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
            <span class="bg-gradient-to-b from-white via-white/80 to-white/40 bg-clip-text text-transparent">
              Vamos conversar?
            </span>
          </h2>
          <p class="text-gray-300 text-base md:text-lg leading-relaxed">
            Tem um projeto em mente ou quer apenas trocar uma ideia?
            Sinta-se à vontade para me chamar nas redes sociais ou preencher o formulário ao lado.
          </p>
        </div>

        <div class="flex flex-col sm:flex-row justify-center md:justify-start gap-4 mt-4">
          <a href="https://w.app/38fpor" target="_blank"
            class="flex items-center justify-center gap-2 p-4 rounded-xl border border-white/10 bg-glass-black/80 backdrop-blur-md hover:bg-green-600/20 hover:border-green-500 transition-all duration-300 group">
            <Icon class="text-xl group-hover:text-green-400 transition-colors" name="mdi:whatsapp" />
            <span>WhatsApp</span>
          </a>

          <a href="https://www.instagram.com/erick.kempner/" target="_blank"
            class="flex items-center justify-center gap-2 p-4 rounded-xl border border-white/10 bg-glass-black/80 backdrop-blur-md hover:bg-purple-600/20 hover:border-purple-500 transition-all duration-300 group">
            <Icon class="text-xl group-hover:text-purple-400 transition-colors" name="mdi:instagram" />
            <span>Instagram</span>
          </a>
        </div>
      </div>

      <div
        class="w-full bg-glass-black/80 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/10 shadow-2xl relative overflow-hidden">

        <div v-if="success"
          class="absolute inset-0 flex flex-col items-center justify-center bg-black/95 z-20 p-6 text-center animate-fade-in">
          <Icon name="mdi:check-circle" class="text-green-500 text-6xl mb-4" />
          <h3 class="text-2xl font-bold text-white mb-2">Mensagem enviada!</h3>
          <p class="text-gray-400">Obrigado pelo contato. Responderei em breve.</p>
          <button @click="success = false" class="mt-6 text-sm text-gray-500 hover:text-white underline">
            Enviar outra mensagem
          </button>
        </div>

        <h3 class="text-2xl font-bold mb-6 text-center md:hidden">Envie uma mensagem</h3>

        <form @submit.prevent="sendMessage" class="flex flex-col gap-6">
          <div class="flex flex-col gap-4">

            <div class="flex flex-col gap-2 text-left">
              <label for="name" class="text-sm text-gray-400 ml-1">Nome</label>
              <input v-model="form.name" required type="text" id="name" placeholder="Seu nome"
                class="w-full p-3 rounded-xl border border-white/10 bg-black/20 focus:bg-black/40 outline-none focus:border-white/30 transition-all text-white placeholder-gray-500">
            </div>

            <div class="flex flex-col gap-2 text-left">
              <label for="email" class="text-sm text-gray-400 ml-1">Email</label>
              <input v-model="form.email" required type="email" id="email" placeholder="seu@email.com"
                class="w-full p-3 rounded-xl border border-white/10 bg-black/20 focus:bg-black/40 outline-none focus:border-white/30 transition-all text-white placeholder-gray-500">
            </div>

            <div class="flex flex-col gap-2 text-left">
              <label for="whatsapp" class="text-sm text-gray-400 ml-1">Whatsapp</label>
              <input v-model="form.whatsapp" required type="number" id="whatsapp" placeholder="54999999999"
                class="w-full p-3 rounded-xl border border-white/10 bg-black/20 focus:bg-black/40 outline-none focus:border-white/30 transition-all text-white placeholder-gray-500">
            </div>

            <div class="flex flex-col gap-2 text-left">
              <label for="message" class="text-sm text-gray-400 ml-1">Mensagem</label>
              <textarea v-model="form.message" required id="message" placeholder="Como posso ajudar?"
                class="w-full p-3 h-32 rounded-xl border border-white/10 bg-black/20 focus:bg-black/40 outline-none focus:border-white/30 transition-all text-white placeholder-gray-500 resize-none"></textarea>
            </div>
          </div>

          <p v-if="error" class="text-red-400 text-sm text-center">
            Erro ao enviar. Verifique sua conexão.
          </p>

          <button type="submit" :disabled="loading"
            class="w-full p-4 cursor-pointer rounded-xl bg-white text-black font-bold hover:bg-gray-200 transition-colors mt-2 disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center">
            <span v-if="loading">Enviando...</span>
            <span v-else>Enviar Mensagem</span>
          </button>
        </form>
      </div>

    </div>
  </section>
</template>

<style scoped>
.animate-fade-in {
  animation: fadeIn 0.3s ease-out forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(0.95);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
}
</style>