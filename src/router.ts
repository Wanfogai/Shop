import { createMemoryHistory, createRouter } from 'vue-router'
import { AbouPage, MainPage } from './app/pages' 



const routes = [
    { path: '/about', component: AbouPage },
    { path: "/", component: MainPage }
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

export default router