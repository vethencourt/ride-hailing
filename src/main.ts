import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { Quasar, Notify } from 'quasar'

import '@/shared/styles/globals.scss'

import App from './App.vue'
import router from './shared/router/routes'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Quasar, {
  plugins: { Notify },
  config: { dark: true }
})

app.mount('#app')
