import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import Disclosure from '@/components/Disclosure.vue';
import KeyInfo from '@/components/KeyInfo.vue';
import Blog from '@/components/Blog.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/home/',
    component: Home,
    children : [
      {name:'disclosure', path: 'disclosure', component: Disclosure},
      {name:'keyinfo',path: 'home/keyinfo', component: KeyInfo},
      {name:'blog',path: 'home/blog', component: Blog},
      {path: '', redirect: 'disclosure'},
    ]
  },

]

const router = new VueRouter({
  routes,
  mode: 'history',
})

export default router
