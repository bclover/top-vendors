import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _461ba1aa = () => interopDefault(import('../pages/code.js' /* webpackChunkName: "pages/code" */))
const _5078816f = () => interopDefault(import('../pages/dashboard/index.vue' /* webpackChunkName: "pages/dashboard/index" */))
const _436aeb2a = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _461ba1aa,
    name: "code"
  }, {
    path: "/dashboard",
    component: _5078816f,
    name: "dashboard"
  }, {
    path: "/",
    component: _436aeb2a,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
