import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './routes'
import './assets/main.css'

const app = createApp(App)
app.use(router)
app.use(createPinia())
app.mount('#app')