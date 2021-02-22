import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Categories from '../views/Categories.vue'
import Detail from '../views/Detail.vue'
import History from '../views/History.vue'
import Login from '../views/Login.vue'
import Planning from '../views/Planning.vue'
import Profile from '../views/Profile.vue'
import Record from '../views/Record.vue'
import Register from '../views/Register.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },{
        path: '/categories',
        name: 'categories',
        meta:{layout:'main'},
        component: Categories
    },
    {
        path: '/detail',
        name: 'detail',
        meta:{layout:'main'},
        component: Detail
    },
    {
        path: '/history',
        name: 'history',
        meta:{layout:'main'},
        component: History
    },
    {
        path: '/planning',
        name: 'planning',
        meta:{layout:'main'},
        component: Planning
    },
    {
        path: '/profile',
        name: 'profile',
        meta:{layout:'main'},
        component: Profile
    },
    {
        path: '/record',
        name: 'record',
        meta:{layout:'main'},
        component: Record
    },
    {
        path: '/register',
        name: 'register',
        meta:{layout:'empty'},
        component: Register
    },
    {
    path: '/login',
    name: 'login',
    meta:{layout:'empty'},
    component: Login
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
