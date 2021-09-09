import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _d293d4a0 = () => interopDefault(import('../pages/lookbook.vue' /* webpackChunkName: "pages/lookbook" */))
const _6e0ecfa8 = () => interopDefault(import('../pages/manifesto.vue' /* webpackChunkName: "pages/manifesto" */))
const _7abca14c = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    path: "/lookbook",
    component: _d293d4a0,
    name: "lookbook"
  }, {
    path: "/manifesto",
    component: _6e0ecfa8,
    name: "manifesto"
  }, {
    path: "/",
    component: _7abca14c,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
