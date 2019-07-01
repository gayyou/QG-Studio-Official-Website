import Vue from 'vue'
import Router from 'vue-router'
import about from './components/about/about.vue'
import blob from './components/blob/blob.vue'
import column from './components/column/column.vue'
import honors from './components/honors/honors.vue'
import members from './components/members/members.vue'
import projects from './components/projects/projects.vue'
import we from './components/we/we.vue';

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/index',
      name: 'index',
      component: about
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
