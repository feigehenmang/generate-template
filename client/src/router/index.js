import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue'
import Generate from '../views/Generate.vue'
const routes = [
    {
        path: '',
        component: Home
    },
    {
        path: '/generate',
        component: Generate
    }
]
export default createRouter({
    history: createWebHashHistory() ,
    routes
})