import Vue from 'vue'
import VueRouter from 'vue-router'
import Server from '../js/server.js'

import Home from '../components/processes/home.vue'
// import About      from '../components/processes/about.vue'
// import Aboutuser  from '../components/processes/aboutuser.vue'
// import Contacts   from '../components/processes/contacts.vue'
import Logo from '../components/processes/logo.vue'
import Forecast from '../components/processes/forecast.vue'
import NotFound from '../components/processes/notFound.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/home', name: 'home', title: 'home', component: Home },
  // { path: '/about',       title: 'Price',       component: About },
  // { path: '/price',       title: 'About',       component: Price },
  // { path: '/contacts',    title: 'Contacts',    component: Contacts },
  { path: '/logo', title: 'logo', component: Logo }, // meta: { requiresAuth: true}
  { path: '/charts', name: 'forecast', title: 'forecast', component: Forecast },
  { path: '/*', name: 'notFound', component: NotFound }
]
/*, meta: { requiresAuth: true } */

const router = new VueRouter({
  routes,
  mode: 'history',
  saveScrollPosition: true
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!Server.isAuthorizated()) {
      next({
        path: '/'
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
