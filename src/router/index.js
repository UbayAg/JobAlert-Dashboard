import Vue from 'vue'
import Router from 'vue-router'
import JobsPage from '@/components/JobsPage'
import SubsPage from '@/components/SubsPage'
import index from '@/components/index'




Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/Jobs',
      name: 'JobsPage',
      component: JobsPage
    },
    {
      path: '/Subs',
      name: 'SubsPage',
      component: SubsPage
    }
  ]
})
