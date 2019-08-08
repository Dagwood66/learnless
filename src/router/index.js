import Vue from 'vue'
import Router from 'vue-router'
import Variables from '@/components/Variables'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Variables',
      component: Variables
    }
  ]
})
