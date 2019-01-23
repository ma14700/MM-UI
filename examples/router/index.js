import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/guid',
      name: 'guid',
      component: r => require.ensure([], () => r(require('../docs/guid.md')))
    },
    {
      path: '/install',
      name: 'install',
      component: r => require.ensure([], () => r(require('../docs/install.md')))
    },
    {
      path: '/alert',
      name: 'alert',
      component: r => require.ensure([], () => r(require('../docs/alert.md')))
    },
    {
      path: '/test',
      name: 'test',
      component: r => require.ensure([], () => r(require('../../packages/test.vue')))
    },
    {
      path: '/start',
      name: 'start',
      component: r => require.ensure([], () => r(require('../docs/start.md')))
    },
    {
      path: '/logs',
      name: 'logs',
      component: r => require.ensure([], () => r(require('../docs/logs.md')))
    },
    {
      path: '/layout',
      name: 'layout',
      component: r => require.ensure([], () => r(require('../docs/layout.md')))
    }
  ]
})
