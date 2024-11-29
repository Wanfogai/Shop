import { createMemoryHistory, createRouter } from 'vue-router'
import { AbouPage, MainPage, SupportPage } from '../pages'



const routes = [
    { path: "/products/:id", component: SupportPage },
    { path: '/support', component: SupportPage },
    { path: '/about', component: AbouPage },
    { path: "/", component: MainPage }
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

export default router