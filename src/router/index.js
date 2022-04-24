import Vue from 'vue'
import Router from 'vue-router'
import Head from 'vue-head'
import Home from '@/views/Home.vue'
import Partners from '@/views/Partners.vue'
import Developers from '@/views/Developers.vue'

Vue.use(Router)

/* If you don't know about VueHead, please refer to https://github.com/ktquez/vue-head */

Vue.use(Head, {
  complement: process.env.VUE_APP_TITLE,
})

/* If you don't know about VueRouter, please refer to https://router.vuejs.org/ */

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/developers',
      name: 'developers',
      component: Developers,
      meta: {
        authNotRequired: true,
      },
    },
    {
      path: '/partners',
      name: 'partners',
      component: Partners,
      meta: {
        authNotRequired: true,
      },
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta: {
        authNotRequired: true,
      },
    },
    { path: '*', redirect: '/home' },
  ],
})

/**
 * Handle user redirections
 */
// eslint-disable-next-line consistent-return
router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0)
  next()
})

export default router
