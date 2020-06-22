import VueRouter from 'vue-router'
import Vue from 'vue'

const Home =()=>import('../views/home/Home')
const Category =()=>import('../views/categories/Category')
const Profile =()=>import('../views/profile/Profile')
const Cart =()=>import('../views/cart/Cart')
const Details=()=>import('../views/details/Details')
Vue.use(VueRouter)

const routes=[
    {
        path:'',
        redirect:'/Home'
    },
    {
        path:'/Category',
        component: Category
    },
    {
        path:'/Cart',
        component: Cart
    },
    {
        path:'/Profile',
        component: Profile
    },
    {
        path:'/Home',
        component: Home
    },
    {
        path:'/Detail/:iid',
        component:Details
    },
   
]

const router= new VueRouter({
    mode:'history',
    routes
})

export default router

