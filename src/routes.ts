import Home from './pages/Home'
import About from './pages/About'
import { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: Home,

    }, {
        path: '/about',
        component: About,
    }
]

export default routes