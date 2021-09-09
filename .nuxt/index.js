import Vue from 'vue'
import Meta from 'vue-meta'
import ClientOnly from 'vue-client-only'
import NoSsr from 'vue-no-ssr'
import { createRouter } from './router.js'
import NuxtChild from './components/nuxt-child.js'
import NuxtError from './components/nuxt-error.vue'
import Nuxt from './components/nuxt.js'
import App from './App.js'
import { setContext, getLocation, getRouteData, normalizeError } from './utils'

/* Plugins */

import nuxt_plugin_plugin_91993e24 from 'nuxt_plugin_plugin_91993e24' // Source: ./components/plugin.js (mode: 'all')
import nuxt_plugin_cookieuniversalnuxt_229c18ac from 'nuxt_plugin_cookieuniversalnuxt_229c18ac' // Source: ./cookie-universal-nuxt.js (mode: 'all')
import nuxt_plugin_templatespluginab5b9b76_1321a604 from 'nuxt_plugin_templatespluginab5b9b76_1321a604' // Source: ./templates.plugin.ab5b9b76.js (mode: 'client')
import nuxt_plugin_axios_c9c5fdf8 from 'nuxt_plugin_axios_c9c5fdf8' // Source: ./axios.js (mode: 'all')
import nuxt_plugin_libplugin4ae526b8_3b2b1c9e from 'nuxt_plugin_libplugin4ae526b8_3b2b1c9e' // Source: ./lib.plugin.4ae526b8.js (mode: 'all')
import nuxt_plugin_workbox_6c9d75c0 from 'nuxt_plugin_workbox_6c9d75c0' // Source: ./workbox.js (mode: 'client')
import nuxt_plugin_metaplugin_44836c33 from 'nuxt_plugin_metaplugin_44836c33' // Source: ./pwa/meta.plugin.js (mode: 'all')
import nuxt_plugin_vuemomentlib_7080cf76 from 'nuxt_plugin_vuemomentlib_7080cf76' // Source: ../plugins/vue-moment-lib (mode: 'all')
import nuxt_plugin_vueawesomecountdown_a53cbd6e from 'nuxt_plugin_vueawesomecountdown_a53cbd6e' // Source: ../plugins/vue-awesome-countdown (mode: 'client')
import nuxt_plugin_vueanalytics_d511c5e4 from 'nuxt_plugin_vueanalytics_d511c5e4' // Source: ../plugins/vue-analytics.js (mode: 'all')
import nuxt_plugin_vuescrolllock_303bf52a from 'nuxt_plugin_vuescrolllock_303bf52a' // Source: ../plugins/vue-scroll-lock.js (mode: 'client')

// Component: <ClientOnly>
Vue.component(ClientOnly.name, ClientOnly)

// TODO: Remove in Nuxt 3: <NoSsr>
Vue.component(NoSsr.name, {
  ...NoSsr,
  render (h, ctx) {
    if (process.client && !NoSsr._warned) {
      NoSsr._warned = true

      console.warn('<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead')
    }
    return NoSsr.render(h, ctx)
  }
})

// Component: <NuxtChild>
Vue.component(NuxtChild.name, NuxtChild)
Vue.component('NChild', NuxtChild)

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
Vue.component(Nuxt.name, Nuxt)

Vue.use(Meta, {"keyName":"head","attribute":"data-n-head","ssrAttribute":"data-n-head-ssr","tagIDKeyName":"hid"})

const defaultTransition = {"name":"page","mode":"out-in","appear":false,"appearClass":"appear","appearActiveClass":"appear-active","appearToClass":"appear-to"}

async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext)

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {"htmlAttrs":{"lang":"en"},"title":"MSCHF X CLONE WEBSITE","meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=5.0, minimum-scale=1.0"},{"name":"referrer","content":"no-referrer"},{"name":"title","content":"MSCHF X CLONE WEBSITE"},{"hid":"description","name":"description","content":"This is a cloned website of MSCHF X"},{"name":"keywords","content":"MSCHF, MSCHF X, Front-end, Web, Vue"},{"name":"twitter:card","content":"summary_large_image"},{"name":"twitter:site","content":"@mschfxyz"},{"name":"twitter:title","content":"MSCHF X CLONE WEBSITE"},{"name":"twitter:description","content":"This is a cloned website of MSCHF X"},{"name":"twitter:image:src","content":"https:\u002F\u002F[PROJECT_DOMAIN]\u002Fsocial\u002Fsharecard-twitter.png"},{"name":"og:title","property":"og:title","content":"MSCHF X CLONE WEBSITE"},{"name":"og:type","property":"og:type","content":"website"},{"name":"og:url","property":"og:url","content":"https:\u002F\u002F[PROJECT_DOMAIN]"},{"name":"og:image","property":"og:image","content":"https:\u002F\u002F[PROJECT_DOMAIN]\u002Fsocial\u002Fsharecard-facebook.png"},{"name":"og:description","property":"og:description","content":"This is a cloned website of MSCHF X"},{"name":"og:site_name","property":"og:site_name","content":"MSCHF X CLONE WEBSITE"},{"name":"author","content":"MSCHF"},{"meta":"msapplication-TileColor","content":"#ffffff"},{"meta":"msapplication-TileImage","content":"\u002Fms-icon-144x144.png"},{"meta":"theme-color","content":"#ffffff"}],"link":[{"rel":"icon","type":"image\u002Fx-icon","href":"\u002Ffavicon.png"}],"script":[{"src":"https:\u002F\u002Fcdnjs.cloudflare.com\u002Fajax\u002Flibs\u002Fmodernizr\u002F2.8.3\u002Fmodernizr.min.js"},{"src":"https:\u002F\u002Fcdnjs.cloudflare.com\u002Fajax\u002Flibs\u002Fdetectizr\u002F2.2.0\u002Fdetectizr.min.js"},{"src":"https:\u002F\u002Fwww.googletagmanager.com\u002Fgtag\u002Fjs?id=GA_ID"},{"src":"\u002Fjs\u002Fsnap.js"}],"style":[]},

    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions (transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions]
        }
        transitions = transitions.map((transition) => {
          if (!transition) {
            transition = defaultTransition
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, { name: transition })
          } else {
            transition = Object.assign({}, defaultTransition, transition)
          }
          return transition
        })
        this.$options.nuxt.transitions = transitions
        return transitions
      },

      err: null,
      dateErr: null,
      error (err) {
        err = err || null
        app.context._errored = Boolean(err)
        err = err ? normalizeError(err) : null
        let nuxt = app.nuxt // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt
        }
        nuxt.dateErr = Date.now()
        nuxt.err = err
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err
        }
        return err
      }
    },
    ...App
  }

  const next = ssrContext ? ssrContext.next : location => app.router.push(location)
  // Resolve route
  let route
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route
  } else {
    const path = getLocation(router.options.base, router.options.mode)
    route = router.resolve(path).route
  }

  // Set context to app.context
  await setContext(app, {
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  })

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided')
    }
    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`)
    }

    key = '$' + key
    // Add into app
    app[key] = value
    // Add into context
    if (!app.context[key]) {
      app.context[key] = value
    }

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__'
    if (Vue[installKey]) {
      return
    }
    Vue[installKey] = true
    // Call Vue.use() to install the plugin into vm
    Vue.use(() => {
      if (!Object.prototype.hasOwnProperty.call(Vue.prototype, key)) {
        Object.defineProperty(Vue.prototype, key, {
          get () {
            return this.$root.$options[key]
          }
        })
      }
    })
  }

  // Inject runtime config as $config
  inject('config', config)

  // Add enablePreview(previewData = {}) in context for plugins
  if (process.static && process.client) {
    app.context.enablePreview = function (previewData = {}) {
      app.previewData = Object.assign({}, previewData)
      inject('preview', previewData)
    }
  }
  // Plugin execution

  if (typeof nuxt_plugin_plugin_91993e24 === 'function') {
    await nuxt_plugin_plugin_91993e24(app.context, inject)
  }

  if (typeof nuxt_plugin_cookieuniversalnuxt_229c18ac === 'function') {
    await nuxt_plugin_cookieuniversalnuxt_229c18ac(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_templatespluginab5b9b76_1321a604 === 'function') {
    await nuxt_plugin_templatespluginab5b9b76_1321a604(app.context, inject)
  }

  if (typeof nuxt_plugin_axios_c9c5fdf8 === 'function') {
    await nuxt_plugin_axios_c9c5fdf8(app.context, inject)
  }

  if (typeof nuxt_plugin_libplugin4ae526b8_3b2b1c9e === 'function') {
    await nuxt_plugin_libplugin4ae526b8_3b2b1c9e(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_workbox_6c9d75c0 === 'function') {
    await nuxt_plugin_workbox_6c9d75c0(app.context, inject)
  }

  if (typeof nuxt_plugin_metaplugin_44836c33 === 'function') {
    await nuxt_plugin_metaplugin_44836c33(app.context, inject)
  }

  if (typeof nuxt_plugin_vuemomentlib_7080cf76 === 'function') {
    await nuxt_plugin_vuemomentlib_7080cf76(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_vueawesomecountdown_a53cbd6e === 'function') {
    await nuxt_plugin_vueawesomecountdown_a53cbd6e(app.context, inject)
  }

  if (typeof nuxt_plugin_vueanalytics_d511c5e4 === 'function') {
    await nuxt_plugin_vueanalytics_d511c5e4(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_vuescrolllock_303bf52a === 'function') {
    await nuxt_plugin_vuescrolllock_303bf52a(app.context, inject)
  }

  // Lock enablePreview in context
  if (process.static && process.client) {
    app.context.enablePreview = function () {
      console.warn('You cannot call enablePreview() outside a plugin.')
    }
  }

  // If server-side, wait for async component to be resolved first
  if (process.server && ssrContext && ssrContext.url) {
    await new Promise((resolve, reject) => {
      router.push(ssrContext.url, resolve, () => {
        // navigated to a different route in router guard
        const unregister = router.afterEach(async (to, from, next) => {
          ssrContext.url = to.fullPath
          app.context.route = await getRouteData(to)
          app.context.params = to.params || {}
          app.context.query = to.query || {}
          unregister()
          resolve()
        })
      })
    })
  }

  return {
    app,
    router
  }
}

export { createApp, NuxtError }
