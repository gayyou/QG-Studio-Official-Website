import Vue from 'vue'
import Router from 'vue-router'
import index from './views/index.vue'
import about from './views/about.vue'
import blob from './views/blob.vue'
import column from './views/column.vue'
import honors from './views/honors.vue'
import members from './views/members.vue'
import projects from './views/projects.vue'
import we from './views/we.vue';

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/about',
      name: 'about',
      component: about
    },
    {
      path: '/blob',
      name: 'blob',
      component: blob
    },
    {
      path: '/column',
      name: 'column',
      component: column
    },
    {
      path: '/honors',
      name: 'honors',
      component: honors
    },
    {
      path: '/members',
      name: 'members',
      component: members
    },
    {
      path: '/projects',
      name: 'projects',
      component: projects
    },
    {
      path: '/we',
      name: 'we',
      component: we
    },
  ]
})
