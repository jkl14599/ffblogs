import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Classification from '../views/Classification.vue'
import File from '../views/File.vue'
import Label from '../views/Label.vue'
import FriendChain from '../views/FriendChain.vue'
import Search from '../views/Search.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/classification',
    name: 'Classification',
    component: Classification
  },
  {
    path: '/file',
    name: 'File',
    component: File
  },
  {
    path: '/label',
    name: 'Label',
    component: Label
  },
  {
    path: '/friendChain',
    name: 'FriendChain',
    component: FriendChain
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/search',
    name: 'Search',
    component: Search
  },
]

const router = new VueRouter({
  mode:'history',
  routes,
})

export default router
