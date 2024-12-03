import { createMemoryHistory, createRouter, createWebHistory } from 'vue-router'
import { AbouPage, MainPage, ProductPage, SupportPage } from '../pages'
import { computed, ref } from 'vue'
import { store } from '../store'



const routes = [
    { name: 'products', path: "/products/:id", component: ProductPage },
    { name: 'support', path: '/support', component: SupportPage },
    { name: 'about', path: '/about', component: AbouPage },
    { name: 'main', path: "/", component: MainPage }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router