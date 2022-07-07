import { createApp } from 'vue'
import App from './App'
import router from './router'
import stores from './stores'

import './assets/sass/main.scss'

const app = createApp(App)

app.use(router)
app.use(stores)

app.mount('#app')
