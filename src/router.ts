import Vue from 'vue'
import Router from 'vue-router'
import index from './views/index.vue'
import column from './views/column.vue'
import projects from './views/projects.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: index
    },
    {
      path: '/column',
      name: 'column',
      component: column
    },
    {
      path: '/projects',
      name: 'projects',
      component: projects
    }
  ]
})
