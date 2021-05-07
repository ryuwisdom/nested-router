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
      {name:'keyInfo',path: 'keyInfo', component: KeyInfo},
      {name:'blog',path: 'blog', component: Blog},
      {path: '', redirect: 'disclosure'},
    ]
  },

]

const router = new VueRouter({
  mode: 'history',
  routes,
})

export default router
