import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Meta from 'vue-meta'
import Home from '../views/Home.vue'
import firebase from 'firebase'
import 'firebase/auth'


Vue.use(VueRouter)
Vue.use(Meta)
const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path:'/catalog/:id',
    name:'Catalog',
    component: () => import('../views/Catalog.vue')
  },
  {
    path:'/auth',
    name:'Auth',
    component: () => import('../views/Auth.vue'),
    meta:{
      requiresGuest: true
    }
  },
  {
    path:'/dashboard',
    name:'Dashboard',
    component: () => import('../views/Dashboard.vue'),
    meta:{
      requiresAuth: true
    }
  },
  // {
  //   path:'/dashboard/settings',
  //   name:'Settings'
  //   meta:{
  //     requiresAuth: true
  //   }
  // },
  {
    path:'*',
    name:'404',
    component: () => import('../views/NotFound.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

//Navigation Guards 

router.beforeEach((to,from,next)=>{
  //checking for authGaurd
  if( to.matched.some(record => record.meta.requiresAuth)){
    //check if user is not loggined in
    if(!firebase.auth().currentUser){
      //go to login page 
      next({
        path:'/auth',
        query:{
          type:'Login',
          redirect: to.fullPath,
        }
      })
    }else{
      //proceed to route
      next()
    }
  }else if(to.matched.some(record => record.meta.requiresGuest)){
    //check if user is loggined
    if(firebase.auth().currentUser){
      //go to dashboard page 
      next({
        path:'/dashboard'
      })
    }else{
      //proceed to route
      next()
    }
  }else{
    //proceed to route
    next()
  }
})


export default router
