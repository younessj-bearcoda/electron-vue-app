import { createApp } from 'vue'
import App from './App'
import { createRouter, createWebHashHistory } from 'vue-router'
import routes from './routes'

import './assets/sass/main.scss'

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

const app = createApp(App)

app.use(router)

app.mount('#app')
