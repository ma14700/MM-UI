import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../../src/components/HelloWorld.vue'
// import test from '../../packages/test.md'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/test',
      name: 'test',
      component: r => require.ensure([], () => r(require('../../packages/test.md')))
    }
  ]
})
