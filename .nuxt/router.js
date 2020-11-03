import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _5f3c3228 = () => interopDefault(import('../pages/code.js' /* webpackChunkName: "pages/code" */))
const _5c837626 = () => interopDefault(import('../pages/dashboard/index.vue' /* webpackChunkName: "pages/dashboard/index" */))
const _75f0902d = () => interopDefault(import('../pages/dashboard/code.js' /* webpackChunkName: "pages/dashboard/code" */))
const _d2ad57b0 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/code",
    component: _5f3c3228,
    name: "code"
  }, {
    path: "/dashboard",
    component: _5c837626,
    name: "dashboard"
  }, {
    path: "/dashboard/code",
    component: _75f0902d,
    name: "dashboard-code"
  }, {
    path: "/",
    component: _d2ad57b0,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
