import { createWebHistory, createRouter } from "vue-router"
import Index from '@/views/index.vue'

const routes = [
    {
        path: '/',
        component: Index,
        name: 'index',
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router