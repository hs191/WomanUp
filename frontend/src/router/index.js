import Vue from 'vue'
import Home from '../views/Home.vue'
import Meetups from '../views/Meetups.vue'
import MyProfile from '../views/MyProfile.vue'
import Resources from '../views/Resources.vue'
import SupportGroups from '../views/SupportGroups.vue'
import Login from '../views/Login.vue'
import SignUp from '../views/SignUp.vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
    {
        path: '/login',
        name: 'Login',
        component: Login,
    },
    {
        path: '/signup',
        name: 'SignUp',
        component: SignUp,
    },
    {
        path: '/home',
        name: 'Home',
        component: Home,
    },
    {
        path: '/meetups',
        name: 'Meetups',
        component: Meetups
    },
    {
        path: '/myprofile',
        name: 'MyProfile',
        component: MyProfile
    },
    {
        path: '/resources',
        name: 'Resources',
        component: Resources
    },
    {
        path: '/supportgroups',
        name: 'SupportGroups',
        component: SupportGroups
    }
]

const router = new VueRouter({
    base: process.env.BASE_URL,
    routes,
})

export default router