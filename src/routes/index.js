import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '../layouts/MainLayout.vue'
import HomePage from '../views/HomePage.vue'

// importa tus componentes aquí
// por ejemplo:
// import Home from '../views/Home.vue'
// import About from '../views/About.vue'

const routes = [
    {
        path: '/',
        component: MainLayout,
        children: [
            { path: '', component: HomePage },
        ]
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router