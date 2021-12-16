import "@fontsource/fredoka-one"
import { createApp } from 'vue'
import routes from './router'
import App from '@/App.vue'
import '@/index.css'

const app = createApp(App)

app.use(routes)

app.mount('#app')
