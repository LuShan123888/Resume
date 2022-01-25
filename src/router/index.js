import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/pages/Home'
import Skills from '@/pages/Skills'
import Projects from '@/pages/Projects'
import Education from '@/pages/Education'
import Others from '@/pages/Others'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/skills',
        name: 'Skills',
        component: Skills
    },
    {
        path: '/projects',
        name: 'Projects',
        component: Projects
    },
    {
        path: '/education',
        name: 'Education',
        component: Education
    },
    {
        path: '/others',
        name: 'Others',
        component: Others
    }
]

const router = new VueRouter({
    routes,
    //切换路由后,滚动条回到顶部
    scrollBehavior(to, from, saveTop) {
        if (saveTop) {
            return saveTop;
        } else {
            return {x: 0, y: 0}
        }
    }
})

export default router
