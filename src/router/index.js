import Vue from 'vue'
import Router from 'vue-router'
import JobsPage from '@/components/JobsPage'
import SubsPage from '@/components/SubsPage'
import loginPage from '@/components/loginPage'
import SignUpPage from '@/components/SignUpPage'
import dashboard from '@/components/dashboard'




Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:{
        name: 'loginPage'
      }
    },
    {
      path: '/login',
      name: 'loginPage',
      component: loginPage
    },
    {
      path: '/signup',
      name: 'SignUpPage',
      component: SignUpPage
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: dashboard,
      redirect:{
        name: 'JobsPage'
      },
      children:[
        {
          path: 'Jobs',
          name: 'JobsPage',
          component: JobsPage
        },
        {
          path: 'Subs',
          name: 'SubsPage',
          component: SubsPage
        }
      ]}
      ]
})
