import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/auth/Login'

import Dashboard from '@/components/Dashboard'

import Planning from '@/components/dashboard/Planning'
import Customers from '@/components/dashboard/Customers'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/',
      redirect: '/planning',
      component: Dashboard,
      children: [
        {
          path: 'planning',
          component: Planning,
          name: 'Planning',
          meta: {description: 'Planning page'}
        },
        {
          path: 'customers',
          component: Customers,
          name: 'Customers',
          meta: {description: 'Overview of all the customers'}
        }
      ]
    }
  ],
  linkActiveClass: 'active',
  linkExactActiveClass: 'active'
})
