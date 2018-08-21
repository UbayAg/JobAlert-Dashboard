import Vue from 'vue'
import Router from 'vue-router'
import JobsPage from '@/components/JobsPage'
import SubsPage from '@/components/SubsPage'



Vue.use(Router)

export default new Router({
  routes: 
    [
      {
        path: '/',
        name: 'JobsPage',
      component: JobsPage
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
