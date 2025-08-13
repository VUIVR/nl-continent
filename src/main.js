import { createApp } from 'vue'
import { createPinia } from 'pinia'

import './app/styles/main.css'

import Layout from './layouts/index.vue'
import router from './router.js'

const app = createApp(Layout)

app.use(createPinia())
app.use(router)

app.mount('#app')
