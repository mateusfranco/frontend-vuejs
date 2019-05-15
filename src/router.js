import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/tipsta',
      name: 'tipsta',
      component: () => import(/**/'./views/Tipsta.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import(/** */'./views/Login.vue')
    },{
      path: '/register',
      name: 'register',
      component: () => import(/** */'./views/Register.vue')
    },{
      path: '/registerevent',
      name: 'registerevent',
      component: () => import(/** */'./views/event/RegisterEvent.vue')
    }

  ]
})
