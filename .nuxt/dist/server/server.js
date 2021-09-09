module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("./" + ({"1":"pages/index","2":"pages/lookbook","3":"pages/manifesto"}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/_nuxt/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 32);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ addStylesServer; });

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesServer.js


function addStylesServer (parentId, list, isProduction, context) {
  if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
    context = __VUE_SSR_CONTEXT__
  }
  if (context) {
    if (!context.hasOwnProperty('styles')) {
      Object.defineProperty(context, 'styles', {
        enumerable: true,
        get: function() {
          return renderStyles(context._styles)
        }
      })
      // expose renderStyles for vue-server-renderer (vuejs/#6353)
      context._renderStyles = renderStyles
    }

    var styles = context._styles || (context._styles = {})
    list = listToStyles(parentId, list)
    if (isProduction) {
      addStyleProd(styles, list)
    } else {
      addStyleDev(styles, list)
    }
  }
}

// In production, render as few style tags as possible.
// (mostly because IE9 has a limit on number of style tags)
function addStyleProd (styles, list) {
  for (var i = 0; i < list.length; i++) {
    var parts = list[i].parts
    for (var j = 0; j < parts.length; j++) {
      var part = parts[j]
      // group style tags by media types.
      var id = part.media || 'default'
      var style = styles[id]
      if (style) {
        if (style.ids.indexOf(part.id) < 0) {
          style.ids.push(part.id)
          style.css += '\n' + part.css
        }
      } else {
        styles[id] = {
          ids: [part.id],
          css: part.css,
          media: part.media
        }
      }
    }
  }
}

// In dev we use individual style tag for each module for hot-reload
// and source maps.
function addStyleDev (styles, list) {
  for (var i = 0; i < list.length; i++) {
    var parts = list[i].parts
    for (var j = 0; j < parts.length; j++) {
      var part = parts[j]
      styles[part.id] = {
        ids: [part.id],
        css: part.css,
        media: part.media
      }
    }
  }
}

function renderStyles (styles) {
  var css = ''
  for (var key in styles) {
    var style = styles[key]
    css += '<style data-vue-ssr-id="' + style.ids.join(' ') + '"' +
        (style.media ? ( ' media="' + style.media + '"' ) : '') + '>' +
        style.css + '</style>'
  }
  return css
}


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Navbar.vue?vue&type=template&id=6d67c28e&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<ul id=\"navbar\" data-v-6d67c28e><li class=\"nav-lookbook\" data-v-6d67c28e><a href=\"/lookbook\" class=\"nav-lookbook-link\" data-v-6d67c28e><svg width=\"24px\" height=\"19px\" viewBox=\"0 0 24 19\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" data-v-6d67c28e><g id=\"MSCHFX\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" data-v-6d67c28e><g id=\"Desktop-|-Terms-and-Conditions\" transform=\"translate(-797.000000, -72.000000)\" fill=\"#000000\" data-v-6d67c28e><g id=\"FORGROUND-ELEMENTS\" transform=\"translate(0.000000, 54.000000)\" data-v-6d67c28e><g id=\"navigation\" transform=\"translate(797.000000, 0.000000)\" data-v-6d67c28e><g id=\"lookbook\" transform=\"translate(0.000000, 1.000000)\" data-v-6d67c28e><path id=\"lookbook-icon\" d=\"M10.7208726,33.4685166 L13.5709573,33.4698512 L13.5709573,33.4698512 L16.416,33.471 L16.4163188,36 L7.58368118,36 L7.583,33.471 L9.1498993,33.4696626 C9.67355232,33.4689588 10.1972089,33.4684273 10.7208726,33.4685166 Z M19.2213158,31.1603333 L19.2220718,33.4666652 L16.8513158,33.4663333 L16.8517877,31.160471 L19.2213158,31.1603333 Z M7.30894213,31.1604575 L7.30872884,33.4663333 L4.90174115,33.4666667 L4.90172884,31.1603333 L7.30894213,31.1604575 Z M21.6337288,28.8493333 L21.6343786,31.1554931 L19.2267288,31.1553333 L19.2269776,28.8494936 L21.6337288,28.8493333 Z M4.8966291,28.8494876 L4.89631579,31.1553333 L2.52632964,31.1556968 L2.52631579,28.8493333 L4.8966291,28.8494876 Z M14.2276031,20.8 L14.227,23.312 L14.2223399,23.3121746 L14.222,23.318 L14.2276031,23.3182574 L14.227,23.312 L16.4210526,23.3121746 L16.4210526,28.408452 L14.2343537,28.408452 L14.2343537,30.9333333 L9.77622989,30.9333333 L9.77622989,28.421585 L7.57894737,28.421585 L7.57894737,23.3189133 L9.76907882,23.3189133 L9.76907882,20.8 L14.2276031,20.8 Z M2.521,24.605 L2.521,29.661 L0,29.6612643 L0,24.6054024 L2.521,24.605 Z M24,24.1915932 L24,28.8445202 L21.6387288,28.8443333 L21.6387288,24.1913333 L24,24.1915932 Z M14.222,23.318 L11.9916904,23.3182738 L11.9916904,23.3182738 L11.9916904,25.8323503 L14.2223399,25.8323503 L14.222,23.318 Z M4.89631579,21.8803333 L4.89663064,24.1866213 L2.52631579,24.1863333 L2.52633118,21.8804121 L4.89631579,21.8803333 Z M21.6343709,21.8804181 L21.6337288,24.1863333 L19.2269853,24.1866273 L19.2267288,21.8803333 L21.6343709,21.8804181 Z M19.2218825,19.5333333 L19.2217288,21.8753333 L16.8517831,21.8756484 L16.8517288,19.5333333 L19.2218825,19.5333333 Z M7.30872884,19.5333333 L7.30894521,21.8756484 L4.90172884,21.8753333 L4.90174423,19.5333333 L7.30872884,19.5333333 Z M16.4163188,17 L16.416,19.528 L14.867259,19.5303007 C14.349329,19.5310177 13.8314007,19.5315616 13.313476,19.5314709 L10.446201,19.5301029 L10.446201,19.5301029 L7.583,19.528 L7.58368118,17 L16.4163188,17 Z\" data-v-6d67c28e></path></g></g></g></g></g></svg>\n        LOOK\n      </a></li> <li class=\"nav-manifesto\" data-v-6d67c28e><a href=\"/manifesto\" class=\"nav-manifesto-link\" data-v-6d67c28e><svg width=\"20px\" height=\"24px\" viewBox=\"0 0 20 24\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" data-v-6d67c28e><g id=\"MSCHFX\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" data-v-6d67c28e><g id=\"Desktop-|-Terms-and-Conditions\" transform=\"translate(-969.000000, -70.000000)\" fill=\"#000000\" data-v-6d67c28e><g id=\"FORGROUND-ELEMENTS\" transform=\"translate(0.000000, 54.000000)\" data-v-6d67c28e><g id=\"navigation\" transform=\"translate(797.000000, 0.000000)\" data-v-6d67c28e><g id=\"manifesto\" transform=\"translate(172.000000, 0.000000)\" data-v-6d67c28e><path id=\"manifestoicon\" d=\"M7.15797164,33.4804578 L7.15797164,37.8199028 L9.45216323,37.8199028 L9.45216323,40 L5,40 L5,33.4804578 L7.15797164,33.4804578 Z M10.982,35.291 L10.9827058,37.4873271 L8.763,37.487 L8.76337692,35.2917997 L10.982,35.291 Z M13.1187014,33.179 L13.1188748,35.2791181 L10.9957014,35.279 L10.9960783,33.1796152 L13.1187014,33.179 Z M16.236,31.262 L16.2362672,33.4673145 L13.955,33.467 L13.9553835,31.262743 L16.236,31.262 Z M2.19109355,25.0151497 L2.19109355,27.4466497 L8.75,27.4466497 L8.75,32.4854697 L6.56174889,32.4854697 L6.56174889,29.982423 L0,29.982423 L0,25.0151497 L2.19109355,25.0151497 Z M17.4867014,28.763 L17.4871841,30.9587405 L15.3637014,30.958 L15.3643876,28.7632131 L17.4867014,28.763 Z M15.5998225,21.239749 L15.599,21.265 L15.6141227,21.2651484 L15.6141227,23.7684738 L20,23.7684738 L20,28.7348516 L17.7823042,28.7348516 L17.7823042,26.2995351 L11.25,26.2995351 L11.25,23.7640046 L13.3791572,23.7640046 L13.3791572,21.2651484 L15.516,21.265 L15.4913225,21.239749 L15.5998225,21.239749 Z M3.735,20.014 L3.73512707,24.9850855 L1.264,24.985 L1.26426487,20.0143047 L3.735,20.014 Z M17.5,16.25 L17.5,21.2346188 L15.4962526,21.2346188 L15.4962526,18.8214164 L7.03295801,18.8214164 L7.03295801,21.2350777 L5.01277081,21.2350777 L5.01277081,16.25 L17.5,16.25 Z\" data-v-6d67c28e></path></g></g></g></g></g></svg>READ\n      </a></li> <li class=\"nav-terms\" data-v-6d67c28e><a id=\"terms\" href=\"/terms-and-conditions.pdf\" target=\"_blank\" data-v-6d67c28e><svg width=\"24px\" height=\"25px\" viewBox=\"0 0 24 25\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" data-v-6d67c28e><g id=\"MSCHFX\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" data-v-6d67c28e><g id=\"Desktop-|-Terms-and-Conditions\" transform=\"translate(-1149.000000, -69.000000)\" fill=\"#000000\" data-v-6d67c28e><g id=\"FORGROUND-ELEMENTS\" transform=\"translate(0.000000, 54.000000)\" data-v-6d67c28e><g id=\"navigation\" transform=\"translate(797.000000, 0.000000)\" data-v-6d67c28e><g id=\"terms\" transform=\"translate(352.000000, 2.000000)\" data-v-6d67c28e><path id=\"termicon\" d=\"M7.5,13.75 L7.5,17.5 L9.72437081,17.5 L9.72437081,15.6342422 L14.064681,15.6342422 L14.064681,17.5 L16.25,17.5 L16.25,13.75 L7.5,13.75 Z M16.2150625,18.7135 L16.2150625,18.7865 L16.2849375,18.7135 L16.2150625,18.7135 Z M7.07331272,17.5095302 L7.07331272,19.9730979 L16.6119286,19.9730979 L16.6119286,17.5095302 L23.75,17.5095302 L23.75,37.5 L0,37.5 L0,17.5095302 L7.07331272,17.5095302 Z M21.3128966,20.0196848 L18.9769864,20.0196848 L18.9769864,22.466288 L4.69883943,22.466288 L4.69883943,20.0246628 L2.36372162,20.0246628 L2.36372162,35.0047794 L21.3128966,35.0047794 L21.3128966,20.0196848 Z M18.7374898,29.932699 L18.75,32.5 L5,32.5 L5.01251017,29.932699 L18.7374898,29.932699 Z M18.7374898,25 L18.75,27.567301 L5,27.567301 L5.01251017,25 L18.7374898,25 Z\" data-v-6d67c28e></path></g></g></g></g></g></svg>TERMS + CONDITIONS\n      </a></li></ul>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Navbar.vue?vue&type=template&id=6d67c28e&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Navbar.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Navbarvue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./components/Navbar.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Navbarvue_type_script_lang_js_ = (Navbarvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Navbar.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(61)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Navbarvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "6d67c28e",
  "3cda5d7a"
  
)

/* harmony default export */ var Navbar = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("vue-router");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

// This file is intentionally left empty for noop aliases

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(35);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("6ac3c623", content, true, context)
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(37);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("7e56e4e3", content, true, context)
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(51);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("4e8213bc", content, true, context)
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(53);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("4620769f", content, true, context)
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(57);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("31c17416", content, true, context)
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(60);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("753571b8", content, true, context)
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(62);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("52cb4855", content, true, context)
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(64);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("4de72344", content, true, context)
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(66);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("7a5d6a9a", content, true, context)
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(68);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("7ffd3ea0", content, true, context)
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(70);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("d9c6363e", content, true, context)
};

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("vue-no-ssr");

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/arrow-button-left.7e09964.png";

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/arrow-button-right.982b189.png";

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Ticker.vue?vue&type=template&id=7f864518&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"marquee marquee__top\" data-v-7f864518><div class=\"track track__reverse\" data-v-7f864518><div class=\"track_content\" data-v-7f864518>\n        MSCHF X SUPREME X BAPE X NORTH FACE X OFF-WHITE X ADIDAS X CHINATOWN\n        MARKET X [CENSORED] X STUSSY X PALACE X KITH X\n      </div> <div class=\"track_content\" data-v-7f864518>\n        MSCHF X SUPREME X BAPE X NORTH FACE X OFF-WHITE X ADIDAS X CHINATOWN\n        MARKET X [CENSORED] X STUSSY X PALACE X KITH X\n      </div> <div class=\"track_content\" data-v-7f864518>\n        MSCHF X SUPREME X BAPE X NORTH FACE X OFF-WHITE X ADIDAS X CHINATOWN\n        MARKET X [CENSORED] X STUSSY X PALACE X KITH X\n      </div> <div class=\"track_content\" data-v-7f864518>\n        MSCHF X SUPREME X BAPE X NORTH FACE X OFF-WHITE X ADIDAS X CHINATOWN\n        MARKET X [CENSORED] X STUSSY X PALACE X KITH X\n      </div> <div class=\"track_content\" data-v-7f864518>\n        MSCHF X SUPREME X BAPE X NORTH FACE X OFF-WHITE X ADIDAS X CHINATOWN\n        MARKET X [CENSORED] X STUSSY X PALACE X KITH X\n      </div> <div class=\"track_content\" data-v-7f864518>\n        MSCHF X SUPREME X BAPE X NORTH FACE X OFF-WHITE X ADIDAS X CHINATOWN\n        MARKET X [CENSORED] X STUSSY X PALACE X KITH X\n      </div> <div class=\"track_content\" data-v-7f864518>\n        MSCHF X SUPREME X BAPE X NORTH FACE X OFF-WHITE X ADIDAS X CHINATOWN\n        MARKET X [CENSORED] X STUSSY X PALACE X KITH X\n      </div> <div class=\"track_content\" data-v-7f864518>\n        MSCHF X SUPREME X BAPE X NORTH FACE X OFF-WHITE X ADIDAS X CHINATOWN\n        MARKET X [CENSORED] X STUSSY X PALACE X KITH X\n      </div> <div class=\"track_content\" data-v-7f864518>\n        MSCHF X SUPREME X BAPE X NORTH FACE X OFF-WHITE X ADIDAS X CHINATOWN\n        MARKET X [CENSORED] X STUSSY X PALACE X KITH X\n      </div> <div class=\"track_content\" data-v-7f864518>\n        MSCHF X SUPREME X BAPE X NORTH FACE X OFF-WHITE X ADIDAS X CHINATOWN\n        MARKET X [CENSORED] X STUSSY X PALACE X KITH X\n      </div></div> <div class=\"track track__forward\" data-v-7f864518><div class=\"track_content\" data-v-7f864518>\n        10 BRANDS 1 SHIRT 10 BRANDS 1 IMPOSSIBLE COLLAB 10 BRANDS 1 SHIRT 10\n        BRANDS 1 IMPOSSIBLE COLLAB\n      </div> <div class=\"track_content\" data-v-7f864518>\n        10 BRANDS 1 SHIRT 10 BRANDS 1 IMPOSSIBLE COLLAB 10 BRANDS 1 SHIRT 10\n        BRANDS 1 IMPOSSIBLE COLLAB\n      </div> <div class=\"track_content\" data-v-7f864518>\n        10 BRANDS 1 SHIRT 10 BRANDS 1 IMPOSSIBLE COLLAB 10 BRANDS 1 SHIRT 10\n        BRANDS 1 IMPOSSIBLE COLLAB\n      </div> <div class=\"track_content\" data-v-7f864518>\n        10 BRANDS 1 SHIRT 10 BRANDS 1 IMPOSSIBLE COLLAB 10 BRANDS 1 SHIRT 10\n        BRANDS 1 IMPOSSIBLE COLLAB\n      </div> <div class=\"track_content\" data-v-7f864518>\n        10 BRANDS 1 SHIRT 10 BRANDS 1 IMPOSSIBLE COLLAB 10 BRANDS 1 SHIRT 10\n        BRANDS 1 IMPOSSIBLE COLLAB\n      </div> <div class=\"track_content\" data-v-7f864518>\n        10 BRANDS 1 SHIRT 10 BRANDS 1 IMPOSSIBLE COLLAB 10 BRANDS 1 SHIRT 10\n        BRANDS 1 IMPOSSIBLE COLLAB\n      </div> <div class=\"track_content\" data-v-7f864518>\n        10 BRANDS 1 SHIRT 10 BRANDS 1 IMPOSSIBLE COLLAB 10 BRANDS 1 SHIRT 10\n        BRANDS 1 IMPOSSIBLE COLLAB\n      </div> <div class=\"track_content\" data-v-7f864518>\n        10 BRANDS 1 SHIRT 10 BRANDS 1 IMPOSSIBLE COLLAB 10 BRANDS 1 SHIRT 10\n        BRANDS 1 IMPOSSIBLE COLLAB\n      </div> <div class=\"track_content\" data-v-7f864518>\n        10 BRANDS 1 SHIRT 10 BRANDS 1 IMPOSSIBLE COLLAB 10 BRANDS 1 SHIRT 10\n        BRANDS 1 IMPOSSIBLE COLLAB\n      </div> <div class=\"track_content\" data-v-7f864518>\n        10 BRANDS 1 SHIRT 10 BRANDS 1 IMPOSSIBLE COLLAB 10 BRANDS 1 SHIRT 10\n        BRANDS 1 IMPOSSIBLE COLLAB\n      </div></div></div> <div class=\"marquee marquee__bottom\" data-v-7f864518><div class=\"track track__forward\" data-v-7f864518><div class=\"track_content\" data-v-7f864518>\n        MSCHF X SUPREME X BAPE X NORTH FACE X OFF-WHITE X ADIDAS X CHINATOWN\n        MARKET X [CENSORED] X STUSSY X PALACE X KITH X\n      </div> <div class=\"track_content\" data-v-7f864518>\n        MSCHF X SUPREME X BAPE X NORTH FACE X OFF-WHITE X ADIDAS X CHINATOWN\n        MARKET X [CENSORED] X STUSSY X PALACE X KITH X\n      </div> <div class=\"track_content\" data-v-7f864518>\n        MSCHF X SUPREME X BAPE X NORTH FACE X OFF-WHITE X ADIDAS X CHINATOWN\n        MARKET X [CENSORED] X STUSSY X PALACE X KITH X\n      </div> <div class=\"track_content\" data-v-7f864518>\n        MSCHF X SUPREME X BAPE X NORTH FACE X OFF-WHITE X ADIDAS X CHINATOWN\n        MARKET X [CENSORED] X STUSSY X PALACE X KITH X\n      </div> <div class=\"track_content\" data-v-7f864518>\n        MSCHF X SUPREME X BAPE X NORTH FACE X OFF-WHITE X ADIDAS X CHINATOWN\n        MARKET X [CENSORED] X STUSSY X PALACE X KITH X\n      </div> <div class=\"track_content\" data-v-7f864518>\n        MSCHF X SUPREME X BAPE X NORTH FACE X OFF-WHITE X ADIDAS X CHINATOWN\n        MARKET X [CENSORED] X STUSSY X PALACE X KITH X\n      </div> <div class=\"track_content\" data-v-7f864518>\n        MSCHF X SUPREME X BAPE X NORTH FACE X OFF-WHITE X ADIDAS X CHINATOWN\n        MARKET X [CENSORED] X STUSSY X PALACE X KITH X\n      </div> <div class=\"track_content\" data-v-7f864518>\n        MSCHF X SUPREME X BAPE X NORTH FACE X OFF-WHITE X ADIDAS X CHINATOWN\n        MARKET X [CENSORED] X STUSSY X PALACE X KITH X\n      </div> <div class=\"track_content\" data-v-7f864518>\n        MSCHF X SUPREME X BAPE X NORTH FACE X OFF-WHITE X ADIDAS X CHINATOWN\n        MARKET X [CENSORED] X STUSSY X PALACE X KITH X\n      </div> <div class=\"track_content\" data-v-7f864518>\n        MSCHF X SUPREME X BAPE X NORTH FACE X OFF-WHITE X ADIDAS X CHINATOWN\n        MARKET X [CENSORED] X STUSSY X PALACE X KITH X\n      </div></div> <div class=\"track track__reverse\" data-v-7f864518><div class=\"track_content\" data-v-7f864518>\n        10 BRANDS 1 SHIRT 10 BRANDS 1 IMPOSSIBLE COLLAB 10 BRANDS 1 SHIRT 10\n        BRANDS 1 IMPOSSIBLE COLLAB\n      </div> <div class=\"track_content\" data-v-7f864518>\n        10 BRANDS 1 SHIRT 10 BRANDS 1 IMPOSSIBLE COLLAB 10 BRANDS 1 SHIRT 10\n        BRANDS 1 IMPOSSIBLE COLLAB\n      </div> <div class=\"track_content\" data-v-7f864518>\n        10 BRANDS 1 SHIRT 10 BRANDS 1 IMPOSSIBLE COLLAB 10 BRANDS 1 SHIRT 10\n        BRANDS 1 IMPOSSIBLE COLLAB\n      </div> <div class=\"track_content\" data-v-7f864518>\n        10 BRANDS 1 SHIRT 10 BRANDS 1 IMPOSSIBLE COLLAB 10 BRANDS 1 SHIRT 10\n        BRANDS 1 IMPOSSIBLE COLLAB\n      </div> <div class=\"track_content\" data-v-7f864518>\n        10 BRANDS 1 SHIRT 10 BRANDS 1 IMPOSSIBLE COLLAB 10 BRANDS 1 SHIRT 10\n        BRANDS 1 IMPOSSIBLE COLLAB\n      </div> <div class=\"track_content\" data-v-7f864518>\n        10 BRANDS 1 SHIRT 10 BRANDS 1 IMPOSSIBLE COLLAB 10 BRANDS 1 SHIRT 10\n        BRANDS 1 IMPOSSIBLE COLLAB\n      </div> <div class=\"track_content\" data-v-7f864518>\n        10 BRANDS 1 SHIRT 10 BRANDS 1 IMPOSSIBLE COLLAB 10 BRANDS 1 SHIRT 10\n        BRANDS 1 IMPOSSIBLE COLLAB\n      </div> <div class=\"track_content\" data-v-7f864518>\n        10 BRANDS 1 SHIRT 10 BRANDS 1 IMPOSSIBLE COLLAB 10 BRANDS 1 SHIRT 10\n        BRANDS 1 IMPOSSIBLE COLLAB\n      </div> <div class=\"track_content\" data-v-7f864518>\n        10 BRANDS 1 SHIRT 10 BRANDS 1 IMPOSSIBLE COLLAB 10 BRANDS 1 SHIRT 10\n        BRANDS 1 IMPOSSIBLE COLLAB\n      </div> <div class=\"track_content\" data-v-7f864518>\n        10 BRANDS 1 SHIRT 10 BRANDS 1 IMPOSSIBLE COLLAB 10 BRANDS 1 SHIRT 10\n        BRANDS 1 IMPOSSIBLE COLLAB\n      </div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Ticker.vue?vue&type=template&id=7f864518&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Ticker.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Tickervue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./components/Ticker.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Tickervue_type_script_lang_js_ = (Tickervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Ticker.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(52)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Tickervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "7f864518",
  "6aa4133d"
  
)

/* harmony default export */ var Ticker = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Logo.vue?vue&type=template&id=6a3503b2&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('h1',{attrs:{"id":"logo"},on:{"click":function($event){return _vm.scrollBack()}}},[_vm._ssrNode("<img"+(_vm._ssrAttr("src",__webpack_require__(54)))+" alt class=\"logo-black\" data-v-6a3503b2><img"+(_vm._ssrAttr("src",__webpack_require__(55)))+" alt class=\"logo-overlay\" data-v-6a3503b2>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Logo.vue?vue&type=template&id=6a3503b2&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Logo.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Logovue_type_script_lang_js_ = ({
  methods: {
    scrollBack() {
      document.getElementById("lookbook-icon").classList.remove("nav-blue-active");
      document.querySelector(".nav-lookbook").classList.remove("nav-blue-active");
      document.getElementById("manifestoicon").classList.remove("nav-blue-active");
      document.querySelector(".nav-manifesto").classList.remove("nav-blue-active");
      let container = document.getElementById("container");

      if (this.$route.path === "/") {
        container.scrollTo({
          left: 0,
          behavior: "smooth"
        });
      } else {
        container.scrollTo({
          left: 0
        });
        this.$router.push("/");
      }
    },

    slide() {
      var container = document.getElementById("container");
      this.sideScroll(container, "right", 10, 250, 10);
    },

    slideBack() {
      var container = document.getElementById("container");
      this.sideScroll(container, "left", 10, 250, 10);
    },

    sideScroll(element, direction, speed, distance, step) {
      var scrollAmount = 0;
      var slideTimer = setInterval(function () {
        if (direction == "left") {
          element.scrollLeft -= step;
        } else {
          element.scrollLeft += step;
        }

        scrollAmount += step;

        if (scrollAmount >= distance) {
          window.clearInterval(slideTimer);
        }
      }, speed);
    }

  }
});
// CONCATENATED MODULE: ./components/Logo.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Logovue_type_script_lang_js_ = (Logovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Logo.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(56)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Logovue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "6a3503b2",
  "2496201e"
  
)

/* harmony default export */ var Logo = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("vue-client-only");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("querystring");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("vue-meta");

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("cookie-universal");

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("defu");

/***/ }),
/* 30 */
/***/ (function(module) {

module.exports = JSON.parse("{\"title\":\"MSCHF X CLONE WEBSITE\",\"meta\":[{\"hid\":\"charset\",\"charset\":\"utf-8\"},{\"hid\":\"viewport\",\"name\":\"viewport\",\"content\":\"width=device-width, initial-scale=1\"},{\"hid\":\"mobile-web-app-capable\",\"name\":\"mobile-web-app-capable\",\"content\":\"yes\"},{\"hid\":\"apple-mobile-web-app-title\",\"name\":\"apple-mobile-web-app-title\",\"content\":\"MSCHF X CLONE WEBSITE\"},{\"hid\":\"author\",\"name\":\"author\",\"content\":\"MSCHF\"},{\"hid\":\"description\",\"name\":\"description\",\"content\":\"[PROJECT_NAME_DESCRIPTION]\"},{\"hid\":\"og:type\",\"name\":\"og:type\",\"property\":\"og:type\",\"content\":\"website\"},{\"hid\":\"og:title\",\"name\":\"og:title\",\"property\":\"og:title\",\"content\":\"MSCHF X CLONE WEBSITE\"},{\"hid\":\"og:site_name\",\"name\":\"og:site_name\",\"property\":\"og:site_name\",\"content\":\"MSCHF X CLONE WEBSITE\"},{\"hid\":\"og:description\",\"name\":\"og:description\",\"property\":\"og:description\",\"content\":\"[PROJECT_NAME_DESCRIPTION]\"}],\"link\":[{\"rel\":\"manifest\",\"href\":\"/_nuxt/manifest.bc2f4aeb.json\",\"hid\":\"manifest\"}],\"htmlAttrs\":{\"lang\":\"en\"}}");

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("vue-moment-lib");

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(33);
module.exports = __webpack_require__(71);


/***/ }),
/* 33 */
/***/ (function(module, exports) {

global.installComponents = function (component, components) {
  const options = typeof component.exports === 'function'
    ? component.exports.extendOptions
    : component.options

  if (typeof component.exports === 'function') {
    options.components = component.exports.options.components
  }

  options.components = options.components || {}

  for (var i in components) {
    options.components[i] = options.components[i] || components[i]
  }


  if (options.functional) {
    provideFunctionalComponents(component, options.components)
  }
}

const functionalPatchKey = '_functionalComponents'

function provideFunctionalComponents(component, components) {
  if (component.exports[functionalPatchKey]) {
    return
  }
  component.exports[functionalPatchKey] = true

  const render = component.exports.render
  component.exports.render = function (h, vm) {
    return render(h, Object.assign({}, vm, {
      _c: function (n, a, b) {
        return vm._c(components[n] || n, a, b)
      }
    }))
  }
}


/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".__nuxt-error-page{padding:1rem;background:#f7f8fb;color:#47494e;text-align:center;display:flex;justify-content:center;align-items:center;flex-direction:column;font-family:sans-serif;font-weight:100!important;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-font-smoothing:antialiased;position:absolute;top:0;left:0;right:0;bottom:0}.__nuxt-error-page .error{max-width:450px}.__nuxt-error-page .title{font-size:1.5rem;margin-top:15px;color:#47494e;margin-bottom:8px}.__nuxt-error-page .description{color:#7f828b;line-height:21px;margin-bottom:10px}.__nuxt-error-page a{color:#7f828b!important;text-decoration:none}.__nuxt-error-page .logo{position:fixed;left:12px;bottom:12px}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".nuxt-progress{position:fixed;top:0;left:0;right:0;height:2px;width:0;opacity:1;transition:width .1s,opacity .4s;background-color:#fff;z-index:999999}.nuxt-progress.nuxt-progress-notransition{transition:none}.nuxt-progress-failed{background-color:red}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(39);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(3).default("7bcfc748", content, true)

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(40);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(41);
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(42);
var ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__(43);
var ___CSS_LOADER_URL_IMPORT_3___ = __webpack_require__(44);
var ___CSS_LOADER_URL_IMPORT_4___ = __webpack_require__(45);
var ___CSS_LOADER_URL_IMPORT_5___ = __webpack_require__(46);
var ___CSS_LOADER_URL_IMPORT_6___ = __webpack_require__(47);
var ___CSS_LOADER_URL_IMPORT_7___ = __webpack_require__(48);
var ___CSS_LOADER_URL_IMPORT_8___ = __webpack_require__(49);
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_6___);
var ___CSS_LOADER_URL_REPLACEMENT_7___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_7___);
var ___CSS_LOADER_URL_REPLACEMENT_8___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_8___);
// Module
exports.push([module.i, "@font-face{font-family:VCROSDMONO;src:local(\"VCROSDMONO\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"truetype\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"woff\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"woff2\")}@font-face{font-family:FoundersGrotesk;src:local(\"FoundersGrotesk\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format(\"truetype\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") format(\"woff\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ") format(\"woff2\")}@font-face{font-family:FoundersGroteskSemiBold;src:local(\"FoundersGroteskSemiBold\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ") format(\"truetype\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ") format(\"woff\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_8___ + ") format(\"woff2\")}@font-face{font-family:TitlingGothicFB Extended Medium;src:url(//db.onlinewebfonts.com/t/38a367caf669011075e5d4107ee090a3.eot);src:url(//db.onlinewebfonts.com/t/38a367caf669011075e5d4107ee090a3.eot#iefix) format(\"embedded-opentype\"),url(//db.onlinewebfonts.com/t/38a367caf669011075e5d4107ee090a3.woff2) format(\"woff2\"),url(//db.onlinewebfonts.com/t/38a367caf669011075e5d4107ee090a3.woff) format(\"woff\"),url(//db.onlinewebfonts.com/t/38a367caf669011075e5d4107ee090a3.ttf) format(\"truetype\"),url(//db.onlinewebfonts.com/t/38a367caf669011075e5d4107ee090a3.svg#TitlingGothicFB%20Extended%20Medium) format(\"svg\")}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/VCR_OSD_MONO.76906e3.ttf";

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/VCR_OSD_MONO.eef19ff.woff";

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/VCR_OSD_MONO.572190d.woff2";

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/FoundersGrotesk-Regular.76115e6.ttf";

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/FoundersGrotesk-Regular.f11ce15.woff";

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/FoundersGrotesk-Regular.9a118b7.woff2";

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/FoundersGrotesk-Semibold.6ee30b6.ttf";

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/FoundersGrotesk-Semibold.cf0bfd9.woff";

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/FoundersGrotesk-Semibold.e2d2e7f.woff2";

/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "html{font-family:Source Sans Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;font-size:16px;word-spacing:1px;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;box-sizing:border-box}::-webkit-scrollbar{display:none}*,:after,:before{box-sizing:border-box;margin:0}body{overflow:hidden;background-image:linear-gradient(180deg,#cacaff,#efefff)}#container{overflow-x:auto;overflow-y:hidden;height:calc(100vh - 100px);height:calc(var(--vh, 1vh)*100 - 100px);margin:50px 0}#container,#wrapper{white-space:nowrap;position:relative}#logo{display:inline-block;width:140px;position:absolute;top:8%;left:3%}#logo a{height:100%}#logo a,#logo img{display:block;width:100%}#navbar{position:absolute;top:7.6%;right:.7%;z-index:50}@media screen and (max-width:600px){#container{height:calc(100vh - 50px);height:calc(var(--vh, 1vh)*100 - 50px);margin:25px 0}}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ticker_vue_vue_type_style_index_0_id_7f864518_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ticker_vue_vue_type_style_index_0_id_7f864518_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ticker_vue_vue_type_style_index_0_id_7f864518_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ticker_vue_vue_type_style_index_0_id_7f864518_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ticker_vue_vue_type_style_index_0_id_7f864518_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ticker_vue_vue_type_style_index_0_id_7f864518_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".marquee[data-v-7f864518]{position:absolute;left:0;width:100vw;font-family:VCROSDMONO;font-size:11px;line-height:2.2;z-index:10}.marquee__top[data-v-7f864518]{top:0}.marquee__bottom[data-v-7f864518]{bottom:0}.marquee:hover div[data-v-7f864518]{-webkit-animation-play-state:paused;animation-play-state:paused;color:#fff}.marquee__bottom .track__reverse[data-v-7f864518]{color:#000;border-top:1px solid #190dfe;border-bottom:1px solid #190dfe}.marquee__bottom .track__forward[data-v-7f864518]{color:#190dfe;border-top:1px solid #190dfe}.marquee__bottom:hover .track__reverse[data-v-7f864518]{background-color:#000}.marquee__bottom:hover .track__forward[data-v-7f864518]{background-color:#190dfe}.marquee__top .track__reverse[data-v-7f864518]{color:#190dfe;border-top:1px solid #190dfe;border-bottom:1px solid #190dfe}.marquee__top .track__forward[data-v-7f864518]{color:#000;border-bottom:1px solid #190dfe}.marquee__top:hover .track__reverse[data-v-7f864518]{background-color:#190dfe}.marquee__top:hover .track__forward[data-v-7f864518]{background-color:#000}.track[data-v-7f864518]{overflow:hidden;white-space:nowrap}.track .track_content[data-v-7f864518]{display:inline-block}.track__reverse .track_content[data-v-7f864518]{-webkit-animation:marquee-reverse-data-v-7f864518 25.533s linear infinite;animation:marquee-reverse-data-v-7f864518 25.533s linear infinite}.track__forward .track_content[data-v-7f864518]{-webkit-animation:marquee-forward-data-v-7f864518 25.533s linear infinite;animation:marquee-forward-data-v-7f864518 25.533s linear infinite}@-webkit-keyframes marquee-reverse-data-v-7f864518{0%{transform:translateX(0)}to{transform:translateX(-100%)}}@keyframes marquee-reverse-data-v-7f864518{0%{transform:translateX(0)}to{transform:translateX(-100%)}}@-webkit-keyframes marquee-forward-data-v-7f864518{0%{transform:translateX(-100%)}to{transform:translateX(0)}}@keyframes marquee-forward-data-v-7f864518{0%{transform:translateX(-100%)}to{transform:translateX(0)}}@media screen and (max-width:600px){.marquee__bottom .track__forward[data-v-7f864518],.marquee__top .track__forward[data-v-7f864518]{display:none}.marquee__bottom .track__reverse .track_content[data-v-7f864518]{-webkit-animation:marquee-forward-data-v-7f864518 25.533s linear infinite;animation:marquee-forward-data-v-7f864518 25.533s linear infinite}}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/mschf-x-logo.bb3fdc0.gif";

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/mschf-x-logo-blue.e125a6f.gif";

/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Logo_vue_vue_type_style_index_0_id_6a3503b2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Logo_vue_vue_type_style_index_0_id_6a3503b2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Logo_vue_vue_type_style_index_0_id_6a3503b2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Logo_vue_vue_type_style_index_0_id_6a3503b2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Logo_vue_vue_type_style_index_0_id_6a3503b2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Logo_vue_vue_type_style_index_0_id_6a3503b2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "#logo[data-v-6a3503b2]{z-index:999}#logo .logo-black[data-v-6a3503b2]{display:block}#logo .logo-overlay[data-v-6a3503b2]{position:absolute;top:0;left:0;display:none}#logo[data-v-6a3503b2]:hover{cursor:pointer}#logo:hover .logo-overlay[data-v-6a3503b2]{display:block}#logo:hover .logo-black[data-v-6a3503b2]{display:none}@media screen and (max-width:600px){#logo[data-v-6a3503b2]{display:inline-block;width:95px;position:absolute;top:4%;left:3%}#logo .logo-overlay[data-v-6a3503b2],#logo:hover .logo-overlay[data-v-6a3503b2]{display:none}#logo:hover .logo-black[data-v-6a3503b2]{display:block}}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/pattern.4afa3a6.svg";

/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Buttons_vue_vue_type_style_index_0_id_4bb0c290_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Buttons_vue_vue_type_style_index_0_id_4bb0c290_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Buttons_vue_vue_type_style_index_0_id_4bb0c290_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Buttons_vue_vue_type_style_index_0_id_4bb0c290_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Buttons_vue_vue_type_style_index_0_id_4bb0c290_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Buttons_vue_vue_type_style_index_0_id_4bb0c290_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "button[data-v-4bb0c290]{position:absolute;bottom:10%;border:0;padding:0;margin:0;width:90px;height:90px;background:none;z-index:50}button img[data-v-4bb0c290]{width:100%}button[data-v-4bb0c290] :hover{transform:translate(5px,7px);box-shadow:8px 6px 6px rgba(25,13,254,.55);cursor:pointer}button[data-v-4bb0c290] :not(:hover){box-shadow:13px 13px 13px rgba(25,13,254,.55),1px 2px 5px 1.5px rgba(0,0,0,.3)}button#shop-btn[data-v-4bb0c290]{position:absolute;left:30%;bottom:8%;z-index:200;margin:0 5px 5px 0;background-image:url(/images/labelled-button-left.png),url(/images/labelled-button-right.png),url(/images/labelled-button-middle.png);background-position:0 0,100% 0,50%;background-size:50px 100%,50px 100%,25px 100%;background-repeat:no-repeat,no-repeat,repeat-x;display:flex;flex-direction:column;align-items:center;justify-content:center;color:#fff;text-decoration:none;text-align:center;width:40%;height:111px;overflow:hidden;font-family:VCR OSD Mono,monospace;font-size:1.6vw}button#shop-btn[data-v-4bb0c290]:not(:hover){box-shadow:13px 13px 13px rgba(25,13,254,.55),1px 2px 5px 1.5px rgba(0,0,0,.3)}button#shop-btn[data-v-4bb0c290]:hover{transform:translate(5px,7px);box-shadow:8px 6px 6px rgba(25,13,254,.55);cursor:pointer}button#shop-btn>span[data-v-4bb0c290]{box-shadow:none;transform:none;color:#000;font-size:calc(14px + 16*(100vh - 500px)/250)}#slide[data-v-4bb0c290]{right:58px}#slideBack[data-v-4bb0c290]{left:58px}.disabled[data-v-4bb0c290]{transition:opacity .3s ease;opacity:.5;pointer-events:none}#popup-overlay[data-v-4bb0c290]{position:absolute;top:0;left:0;width:100%;height:100vh;height:calc(var(--vh, 1vh)*100);z-index:999}.popup-content[data-v-4bb0c290]{position:absolute;width:590px;background-color:#fff;border:1px solid #190dfe;box-shadow:10px 10px 10px rgba(25,13,254,.55),1px 2px 5px 1.5px rgba(0,0,0,.3);height:540px;top:50%;left:50%;transform:translate(-50%,-50%);font-family:FoundersGrotesk;text-align:center}.popup-content .inner-top[data-v-4bb0c290]{width:100%;height:60%;border-bottom:1px solid #190dfe;padding-top:6%}.popup-content .inner-top img[data-v-4bb0c290]{margin-top:3%}.popup-content .inner-top div[data-v-4bb0c290]{width:35%;margin:3% auto;height:42px;line-height:40px;font-family:VCR OSD Mono;font-size:1.2rem;border:1px solid #190dfe;box-shadow:10px 10px 10px rgba(25,13,254,.55),1px 2px 5px 1.5px rgba(0,0,0,.3);background-color:#efefff}.popup-content .inner-top div a[data-v-4bb0c290]{display:block;width:100%;height:100%;color:#000;text-decoration:none}.popup-content .inner-top span[data-v-4bb0c290]{position:absolute;top:3%;right:3%;font-size:1.2rem}.popup-content .inner-top span[data-v-4bb0c290]:hover{cursor:pointer}.popup-content .inner-bottom[data-v-4bb0c290]{width:100%;height:40%}.popup-content .inner-bottom span[data-v-4bb0c290]{display:block;margin:6% 0 2%}.popup-content .inner-bottom .text-input[data-v-4bb0c290]{border:1px solid #190dfe;box-shadow:10px 10px 10px rgba(25,13,254,.55),1px 2px 5px 1.5px rgba(0,0,0,.3);width:90%;height:40px;margin:5% auto 0;line-height:40px;font-family:VCR OSD Mono;font-size:1.2rem}.popup-content .inner-bottom .text-input input[data-v-4bb0c290]{display:inline-block;width:50%;border:none;font-family:VCR OSD Mono;font-size:1.2rem;text-align:center;height:98%;padding:0}.popup-content .inner-bottom .text-input input[data-v-4bb0c290]:focus,.popup-content .inner-bottom .text-input textarea[data-v-4bb0c290]:focus{outline:none}.popup-content .inner-bottom .text-input[data-v-4bb0c290] ::-moz-placeholder{color:#f35b25;opacity:.6}.popup-content .inner-bottom .text-input[data-v-4bb0c290] :-ms-input-placeholder{opacity:.6}.popup-content .inner-bottom .text-input[data-v-4bb0c290] ::-ms-input-placeholder{opacity:.6}.popup-content .inner-bottom .text-input[data-v-4bb0c290] ::placeholder{color:#f35b25;opacity:.6}.popup-content .inner-bottom .text-input[data-v-4bb0c290] :-ms-input-placeholder{color:#f35b25}.popup-content .inner-bottom .text-input[data-v-4bb0c290] ::-ms-input-placeholder{color:#f35b25}.popup-content .inner-bottom .text-input a[data-v-4bb0c290]{display:inline-block;width:50%;height:100%;color:#000;text-decoration:none;text-align:center;border-left:1px solid #190dfe;background-color:#efefff}.show[data-v-4bb0c290]{display:block}.hide[data-v-4bb0c290]{display:none}.fadeIn[data-v-4bb0c290]{opacity:1;display:block}.fadeIn[data-v-4bb0c290],.fadeOut[data-v-4bb0c290]{transition:opacity .3s ease}.fadeOut[data-v-4bb0c290]{opacity:0;pointer-events:none;display:none}@media screen and (max-width:780px){button#shop-btn>span[data-v-4bb0c290]{font-size:calc(14px + 16*(100vw - 500px)/250)}}@media screen and (max-width:600px){button[data-v-4bb0c290]{z-index:200}button#slide[data-v-4bb0c290]:hover,button#slideBack[data-v-4bb0c290]:hover,button[data-v-4bb0c290] :hover{transform:translate(0)!important}button#shop-btn[data-v-4bb0c290]{width:80%;height:65px;left:10%;bottom:16%;font-size:calc(14px + 16*(100vw - 450px)/250)}button#shop-btn span[data-v-4bb0c290]{font-size:calc(14px + 16*(100vw - 350px)/250)}#slide[data-v-4bb0c290],#slideBack[data-v-4bb0c290]{top:50%;width:10vw;height:10vw}#slideBack[data-v-4bb0c290]{left:3%}#slideBack img[data-v-4bb0c290]{box-shadow:3px 3px 3px rgba(25,13,254,.55),1px 2px 5px 1.5px rgba(0,0,0,.3)}#slide[data-v-4bb0c290]{right:3%}#slide img[data-v-4bb0c290],button#slide[data-v-4bb0c290]:not(:hover),button#slideBack[data-v-4bb0c290]:not(:hover){box-shadow:3px 3px 3px rgba(25,13,254,.55),1px 2px 5px 1.5px rgba(0,0,0,.3)}button#slide[data-v-4bb0c290]:hover,button#slideBack[data-v-4bb0c290]:hover{transform:translate(0);box-shadow:3px 3px 3px rgba(25,13,254,.55);cursor:pointer}button#shop-btn[data-v-4bb0c290]:not(:hover){box-shadow:6px 6px 6px rgba(25,13,254,.55),1px 2px 5px 1.5px rgba(0,0,0,.3)}button#shop-btn[data-v-4bb0c290]:hover{transform:translate(0);box-shadow:8px 6px 6px rgba(25,13,254,.55);cursor:pointer}.popup-content[data-v-4bb0c290]{width:100%;height:100%;border:none}.popup-content .inner-top[data-v-4bb0c290]{width:100%;height:50%;padding-top:14%}.popup-content .inner-top img[data-v-4bb0c290]{margin-top:8%;width:80%}.popup-content .inner-top div[data-v-4bb0c290]{width:45%;margin:2% auto;height:45px;line-height:43px;font-size:calc(2.5vh - 3.3px)}.popup-content .inner-top .close-btn[data-v-4bb0c290]{right:6%}.popup-content .inner-bottom[data-v-4bb0c290]{padding:10%;height:50%}.popup-content .inner-bottom span[data-v-4bb0c290]{display:block;margin:9% 0 2%}.popup-content .inner-bottom .text-input[data-v-4bb0c290]{height:70px;margin-top:4%}.popup-content .inner-bottom .text-input input[data-v-4bb0c290]{display:block;width:100%;height:48%;font-size:calc(2.5vh - 3.3px)}.popup-content .inner-bottom .text-input a[data-v-4bb0c290]{display:block;width:100%;height:50%;border-top:1px solid #190dfe;font-size:calc(2.5vh - 3.3px)}}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_style_index_0_id_6d67c28e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_style_index_0_id_6d67c28e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_style_index_0_id_6d67c28e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_style_index_0_id_6d67c28e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_style_index_0_id_6d67c28e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_style_index_0_id_6d67c28e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "#navbar a[data-v-6d67c28e]:link{color:#000;text-decoration:none}#navbar a[data-v-6d67c28e]:visited{color:#000}#navbar a[data-v-6d67c28e]:hover{color:#190dfe}#navbar .nav-lookbook a:hover svg path[data-v-6d67c28e],#navbar .nav-manifesto a:hover svg path[data-v-6d67c28e],#navbar .nav-terms a:hover svg path[data-v-6d67c28e]{fill:#190dfe}#navbar li[data-v-6d67c28e]{display:inline-block;font-family:VCROSDMONO;font-size:1.4rem;margin:0 7.5px}.nav-manifesto svg[data-v-6d67c28e],.nav-terms svg[data-v-6d67c28e]{margin-right:11px;padding-top:4px}.nav-blue-active[data-v-6d67c28e]{fill:#00f}@media screen and (max-width:600px){#navbar[data-v-6d67c28e]{top:4.6%;right:2.7%}#terms[data-v-6d67c28e]{display:none}}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_lookbook_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_lookbook_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_lookbook_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_lookbook_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_lookbook_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_lookbook_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "html ButtonsNoShop{font-family:Source Sans Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;font-size:16px;word-spacing:1px;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;box-sizing:border-box}::-webkit-scrollbar{display:none}*,:after,:before{box-sizing:border-box;margin:0}body{overflow:hidden;background-image:linear-gradient(180deg,#cacaff,#efefff)}#wrapper{white-space:nowrap;position:relative}#logo{display:inline-block;width:140px;position:absolute;top:8%;left:3%}#logo a{height:100%}#logo a,#logo img{display:block;width:100%}@media screen and (max-width:600px){#container{height:calc(100vh - 50px);height:calc(var(--vh, 1vh)*100 - 50px);margin:25px 0}}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Buttonsnoshop_vue_vue_type_style_index_0_id_43015184_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Buttonsnoshop_vue_vue_type_style_index_0_id_43015184_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Buttonsnoshop_vue_vue_type_style_index_0_id_43015184_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Buttonsnoshop_vue_vue_type_style_index_0_id_43015184_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Buttonsnoshop_vue_vue_type_style_index_0_id_43015184_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Buttonsnoshop_vue_vue_type_style_index_0_id_43015184_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "button[data-v-43015184]{position:absolute;bottom:10%;border:0;padding:0;margin:0;width:90px;height:90px;background:none}button img[data-v-43015184]{width:100%}button[data-v-43015184] :hover{transform:translate(5px,7px);box-shadow:8px 6px 6px rgba(25,13,254,.55);cursor:pointer}button[data-v-43015184] :not(:hover){box-shadow:13px 13px 13px rgba(25,13,254,.55),1px 2px 5px 1.5px rgba(0,0,0,.3)}button#shop-btn[data-v-43015184]{position:absolute;left:30%;bottom:8%;z-index:200;margin:0 5px 5px 0;background-image:url(/images/labelled-button-left.png),url(/images/labelled-button-right.png),url(/images/labelled-button-middle.png);background-position:0 0,100% 0,50%;background-size:50px 100%,50px 100%,25px 100%;background-repeat:no-repeat,no-repeat,repeat-x;display:flex;flex-direction:column;align-items:center;justify-content:center;color:#fff;text-decoration:none;text-align:center;width:40%;height:111px;overflow:hidden;font-family:VCR OSD Mono,monospace;font-size:1.6vw}button#shop-btn[data-v-43015184]:not(:hover){box-shadow:13px 13px 13px rgba(25,13,254,.55),1px 2px 5px 1.5px rgba(0,0,0,.3)}button#shop-btn[data-v-43015184]:hover{transform:translate(5px,7px);box-shadow:8px 6px 6px rgba(25,13,254,.55);cursor:pointer}button#shop-btn>span[data-v-43015184]{box-shadow:none;transform:none;color:#000;font-size:3rem}#slide[data-v-43015184]{right:58px}#slideBack[data-v-43015184]{left:58px}.disabled[data-v-43015184]{transition:opacity .3s ease;opacity:.5;pointer-events:none}#popup-overlay[data-v-43015184]{position:absolute;top:0;left:0;width:100%;height:100vh;z-index:999}.popup-content[data-v-43015184]{position:absolute;width:590px;background-color:#9acd32;height:540px;top:50%;left:50%;transform:translate(-50%,-50%);font-family:Archivo;font-weight:700}.show[data-v-43015184]{display:block}.hide[data-v-43015184]{display:none}.fadeIn[data-v-43015184]{transition:opacity .3s ease;opacity:1}@media screen and (max-width:600px){button[data-v-43015184]{z-index:200}button#slide[data-v-43015184]:hover,button#slideBack[data-v-43015184]:hover,button[data-v-43015184] :hover{transform:translate(0)!important}button#shop-btn[data-v-43015184]{width:80%;height:65px;left:10%;bottom:16%;font-size:calc(14px + 16*(100vw - 450px)/250)}button#shop-btn span[data-v-43015184]{font-size:calc(14px + 16*(100vw - 350px)/250)}#slide[data-v-43015184],#slideBack[data-v-43015184]{top:50%;width:10vw;height:10vw}#slideBack[data-v-43015184]{left:3%}#slideBack img[data-v-43015184]{box-shadow:3px 3px 3px rgba(25,13,254,.55),1px 2px 5px 1.5px rgba(0,0,0,.3)}#slide[data-v-43015184]{right:3%}#slide img[data-v-43015184],button#slide[data-v-43015184]:not(:hover),button#slideBack[data-v-43015184]:not(:hover){box-shadow:3px 3px 3px rgba(25,13,254,.55),1px 2px 5px 1.5px rgba(0,0,0,.3)}button#slide[data-v-43015184]:hover,button#slideBack[data-v-43015184]:hover{transform:translate(0);box-shadow:3px 3px 3px rgba(25,13,254,.55);cursor:pointer}button#shop-btn[data-v-43015184]:not(:hover){box-shadow:6px 6px 6px rgba(25,13,254,.55),1px 2px 5px 1.5px rgba(0,0,0,.3)}button#shop-btn[data-v-43015184]:hover{transform:translate(0);box-shadow:8px 6px 6px rgba(25,13,254,.55);cursor:pointer}.popup-content[data-v-43015184]{width:100%;height:100%;border:none}.popup-content .inner-top[data-v-43015184]{width:100%;height:50%;padding-top:19%}.popup-content .inner-top img[data-v-43015184]{margin-top:8%;width:80%}.popup-content .inner-top div[data-v-43015184]{width:55%;margin:6% auto;height:45px;line-height:43px}.popup-content .inner-top .close-btn[data-v-43015184]{right:6%}.popup-content .inner-bottom[data-v-43015184]{font-size:1.2rem;padding:15%;height:50%}.popup-content .inner-bottom span[data-v-43015184]{display:block;margin:9% 0 2%}.popup-content .inner-bottom .text-input[data-v-43015184]{height:80px;margin-top:10%}.popup-content .inner-bottom .text-input input[data-v-43015184]{display:block;width:100%;height:48%}.popup-content .inner-bottom .text-input a[data-v-43015184]{display:block;width:100%;height:50%;border-top:1px solid #190dfe}}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_manifesto_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_manifesto_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_manifesto_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_manifesto_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_manifesto_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_manifesto_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "html ButtonsNoShop{font-family:Source Sans Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;font-size:16px;word-spacing:1px;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;box-sizing:border-box}::-webkit-scrollbar{display:none}*,:after,:before{box-sizing:border-box;margin:0}body{overflow:hidden;background-image:linear-gradient(180deg,#cacaff,#efefff)}#wrapper{white-space:nowrap;position:relative}#logo{display:inline-block;width:140px;position:absolute;top:8%;left:3%}#logo a{height:100%}#logo a,#logo img{display:block;width:100%}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ButtonManifesto_vue_vue_type_style_index_0_id_bc33fb02_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ButtonManifesto_vue_vue_type_style_index_0_id_bc33fb02_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ButtonManifesto_vue_vue_type_style_index_0_id_bc33fb02_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ButtonManifesto_vue_vue_type_style_index_0_id_bc33fb02_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ButtonManifesto_vue_vue_type_style_index_0_id_bc33fb02_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ButtonManifesto_vue_vue_type_style_index_0_id_bc33fb02_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "button[data-v-bc33fb02]{position:absolute;bottom:10%;border:0;padding:0;margin:0;width:90px;height:90px;background:none}button img[data-v-bc33fb02]{width:100%}button[data-v-bc33fb02] :hover{transform:translate(5px,7px);box-shadow:8px 6px 6px rgba(25,13,254,.55);cursor:pointer}button[data-v-bc33fb02] :not(:hover){box-shadow:13px 13px 13px rgba(25,13,254,.55),1px 2px 5px 1.5px rgba(0,0,0,.3)}button#shop-btn[data-v-bc33fb02]{position:absolute;left:30%;bottom:8%;z-index:200;margin:0 5px 5px 0;background-image:url(/images/labelled-button-left.png),url(/images/labelled-button-right.png),url(/images/labelled-button-middle.png);background-position:0 0,100% 0,50%;background-size:50px 100%,50px 100%,25px 100%;background-repeat:no-repeat,no-repeat,repeat-x;display:flex;flex-direction:column;align-items:center;justify-content:center;color:#fff;text-decoration:none;text-align:center;width:40%;height:111px;overflow:hidden;font-family:VCR OSD Mono,monospace;font-size:1.6vw}button#slide[data-v-bc33fb02]:not(:hover),button#slideBack[data-v-bc33fb02]:not(:hover){box-shadow:6px 6px 6px rgba(25,13,254,.55),1px 2px 5px 1.5px rgba(0,0,0,.3)}button#slide[data-v-bc33fb02]:hover,button#slideBack[data-v-bc33fb02]:hover{transform:translate(0);box-shadow:6px 6px 6px rgba(25,13,254,.55);cursor:pointer}button#shop-btn[data-v-bc33fb02]:not(:hover){box-shadow:6px 6px 6px rgba(25,13,254,.55),1px 2px 5px 1.5px rgba(0,0,0,.3)}button#shop-btn[data-v-bc33fb02]:hover{transform:translate(0);box-shadow:8px 6px 6px rgba(25,13,254,.55);cursor:pointer}button#shop-btn>span[data-v-bc33fb02]{box-shadow:none;transform:none;color:#000;font-size:3rem}#slide[data-v-bc33fb02]{right:58px}#slideBack[data-v-bc33fb02]{left:58px}.disabled[data-v-bc33fb02]{transition:opacity .3s ease;opacity:.5;pointer-events:none}.show[data-v-bc33fb02]{display:block}.hide[data-v-bc33fb02]{display:none}.fadeIn[data-v-bc33fb02]{transition:opacity .3s ease;opacity:1}@media screen and (max-width:600px){button[data-v-bc33fb02]{z-index:200}button#slide[data-v-bc33fb02]:hover,button#slideBack[data-v-bc33fb02]:hover,button[data-v-bc33fb02] :hover{transform:translate(0)!important}button#shop-btn[data-v-bc33fb02]{width:80%;height:65px;left:10%;bottom:16%;font-size:calc(14px + 16*(100vw - 450px)/250)}button#shop-btn span[data-v-bc33fb02]{font-size:calc(14px + 16*(100vw - 350px)/250)}#slide[data-v-bc33fb02],#slideBack[data-v-bc33fb02]{top:50%;width:10vw;height:10vw}#slideBack[data-v-bc33fb02]{left:3%}#slideBack img[data-v-bc33fb02]{box-shadow:3px 3px 3px rgba(25,13,254,.55),1px 2px 5px 1.5px rgba(0,0,0,.3)}#slide[data-v-bc33fb02]{right:3%}#slide img[data-v-bc33fb02],button#slide[data-v-bc33fb02]:not(:hover),button#slideBack[data-v-bc33fb02]:not(:hover){box-shadow:3px 3px 3px rgba(25,13,254,.55),1px 2px 5px 1.5px rgba(0,0,0,.3)}button#slide[data-v-bc33fb02]:hover,button#slideBack[data-v-bc33fb02]:hover{transform:translate(0);box-shadow:3px 3px 3px rgba(25,13,254,.55);cursor:pointer}button#shop-btn[data-v-bc33fb02]:not(:hover){box-shadow:6px 6px 6px rgba(25,13,254,.55),1px 2px 5px 1.5px rgba(0,0,0,.3)}button#shop-btn[data-v-bc33fb02]:hover{transform:translate(0);box-shadow:8px 6px 6px rgba(25,13,254,.55);cursor:pointer}.popup-content[data-v-bc33fb02]{width:100%;height:100%;border:none}.popup-content .inner-top[data-v-bc33fb02]{width:100%;height:50%;padding-top:19%}.popup-content .inner-top img[data-v-bc33fb02]{margin-top:8%;width:80%}.popup-content .inner-top div[data-v-bc33fb02]{width:55%;margin:6% auto;height:45px;line-height:43px}.popup-content .inner-top .close-btn[data-v-bc33fb02]{right:6%}.popup-content .inner-bottom[data-v-bc33fb02]{font-size:1.2rem;padding:15%;height:50%}.popup-content .inner-bottom span[data-v-bc33fb02]{display:block;margin:9% 0 2%}.popup-content .inner-bottom .text-input[data-v-bc33fb02]{height:80px;margin-top:10%}.popup-content .inner-bottom .text-input input[data-v-bc33fb02]{display:block;width:100%;height:48%}.popup-content .inner-bottom .text-input a[data-v-bc33fb02]{display:block;width:100%;height:50%;border-top:1px solid #190dfe}}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "querystring"
var external_querystring_ = __webpack_require__(25);

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// EXTERNAL MODULE: external "node-fetch"
var external_node_fetch_ = __webpack_require__(26);
var external_node_fetch_default = /*#__PURE__*/__webpack_require__.n(external_node_fetch_);

// CONCATENATED MODULE: ./.nuxt/middleware.js
const middleware = {};
/* harmony default export */ var _nuxt_middleware = (middleware);
// CONCATENATED MODULE: ./.nuxt/utils.js
 // window.{{globals.loadedCallback}} hook
// Useful for jsdom testing or plugins (https://github.com/tmpvar/jsdom#dealing-with-asynchronous-script-loading)

if (false) {}

function empty() {}
function globalHandleError(error) {
  if (external_vue_default.a.config.errorHandler) {
    external_vue_default.a.config.errorHandler(error);
  }
}
function interopDefault(promise) {
  return promise.then(m => m.default || m);
}
function hasFetch(vm) {
  return vm.$options && typeof vm.$options.fetch === 'function' && !vm.$options.fetch.length;
}
function getChildrenComponentInstancesUsingFetch(vm, instances = []) {
  const children = vm.$children || [];

  for (const child of children) {
    if (child.$fetch) {
      instances.push(child);
      continue; // Don't get the children since it will reload the template
    }

    if (child.$children) {
      getChildrenComponentInstancesUsingFetch(child, instances);
    }
  }

  return instances;
}
function applyAsyncData(Component, asyncData) {
  if ( // For SSR, we once all this function without second param to just apply asyncData
  // Prevent doing this for each SSR request
  !asyncData && Component.options.__hasNuxtData) {
    return;
  }

  const ComponentData = Component.options._originDataFn || Component.options.data || function () {
    return {};
  };

  Component.options._originDataFn = ComponentData;

  Component.options.data = function () {
    const data = ComponentData.call(this, this);

    if (this.$ssrContext) {
      asyncData = this.$ssrContext.asyncData[Component.cid];
    }

    return { ...data,
      ...asyncData
    };
  };

  Component.options.__hasNuxtData = true;

  if (Component._Ctor && Component._Ctor.options) {
    Component._Ctor.options.data = Component.options.data;
  }
}
function sanitizeComponent(Component) {
  // If Component already sanitized
  if (Component.options && Component._Ctor === Component) {
    return Component;
  }

  if (!Component.options) {
    Component = external_vue_default.a.extend(Component); // fix issue #6

    Component._Ctor = Component;
  } else {
    Component._Ctor = Component;
    Component.extendOptions = Component.options;
  } // If no component name defined, set file path as name, (also fixes #5703)


  if (!Component.options.name && Component.options.__file) {
    Component.options.name = Component.options.__file;
  }

  return Component;
}
function getMatchedComponents(route, matches = false, prop = 'components') {
  return Array.prototype.concat.apply([], route.matched.map((m, index) => {
    return Object.keys(m[prop]).map(key => {
      matches && matches.push(index);
      return m[prop][key];
    });
  }));
}
function getMatchedComponentsInstances(route, matches = false) {
  return getMatchedComponents(route, matches, 'instances');
}
function flatMapComponents(route, fn) {
  return Array.prototype.concat.apply([], route.matched.map((m, index) => {
    return Object.keys(m.components).reduce((promises, key) => {
      if (m.components[key]) {
        promises.push(fn(m.components[key], m.instances[key], m, key, index));
      } else {
        delete m.components[key];
      }

      return promises;
    }, []);
  }));
}
function resolveRouteComponents(route, fn) {
  return Promise.all(flatMapComponents(route, async (Component, instance, match, key) => {
    // If component is a function, resolve it
    if (typeof Component === 'function' && !Component.options) {
      Component = await Component();
    }

    match.components[key] = Component = sanitizeComponent(Component);
    return typeof fn === 'function' ? fn(Component, instance, match, key) : Component;
  }));
}
async function getRouteData(route) {
  if (!route) {
    return;
  } // Make sure the components are resolved (code-splitting)


  await resolveRouteComponents(route); // Send back a copy of route with meta based on Component definition

  return { ...route,
    meta: getMatchedComponents(route).map((Component, index) => {
      return { ...Component.options.meta,
        ...(route.matched[index] || {}).meta
      };
    })
  };
}
async function setContext(app, context) {
  // If context not defined, create it
  if (!app.context) {
    app.context = {
      isStatic: false,
      isDev: false,
      isHMR: false,
      app,
      payload: context.payload,
      error: context.error,
      base: '/',
      env: {
        "GA_ID": "GA_ID"
      }
    }; // Only set once

    if ( true && context.req) {
      app.context.req = context.req;
    }

    if ( true && context.res) {
      app.context.res = context.res;
    }

    if (context.ssrContext) {
      app.context.ssrContext = context.ssrContext;
    }

    app.context.redirect = (status, path, query) => {
      if (!status) {
        return;
      }

      app.context._redirected = true; // if only 1 or 2 arguments: redirect('/') or redirect('/', { foo: 'bar' })

      let pathType = typeof path;

      if (typeof status !== 'number' && (pathType === 'undefined' || pathType === 'object')) {
        query = path || {};
        path = status;
        pathType = typeof path;
        status = 302;
      }

      if (pathType === 'object') {
        path = app.router.resolve(path).route.fullPath;
      } // "/absolute/route", "./relative/route" or "../relative/route"


      if (/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path)) {
        app.context.next({
          path,
          query,
          status
        });
      } else {
        path = formatUrl(path, query);

        if (true) {
          app.context.next({
            path,
            status
          });
        }

        if (false) {}
      }
    };

    if (true) {
      app.context.beforeNuxtRender = fn => context.beforeRenderFns.push(fn);
    }

    if (false) {}
  } // Dynamic keys


  const [currentRouteData, fromRouteData] = await Promise.all([getRouteData(context.route), getRouteData(context.from)]);

  if (context.route) {
    app.context.route = currentRouteData;
  }

  if (context.from) {
    app.context.from = fromRouteData;
  }

  app.context.next = context.next;
  app.context._redirected = false;
  app.context._errored = false;
  app.context.isHMR = false;
  app.context.params = app.context.route.params || {};
  app.context.query = app.context.route.query || {};
}
function middlewareSeries(promises, appContext) {
  if (!promises.length || appContext._redirected || appContext._errored) {
    return Promise.resolve();
  }

  return promisify(promises[0], appContext).then(() => {
    return middlewareSeries(promises.slice(1), appContext);
  });
}
function promisify(fn, context) {
  let promise;

  if (fn.length === 2) {
    // fn(context, callback)
    promise = new Promise(resolve => {
      fn(context, function (err, data) {
        if (err) {
          context.error(err);
        }

        data = data || {};
        resolve(data);
      });
    });
  } else {
    promise = fn(context);
  }

  if (promise && promise instanceof Promise && typeof promise.then === 'function') {
    return promise;
  }

  return Promise.resolve(promise);
} // Imported from vue-router

function getLocation(base, mode) {
  let path = decodeURI(window.location.pathname);

  if (mode === 'hash') {
    return window.location.hash.replace(/^#\//, '');
  } // To get matched with sanitized router.base add trailing slash


  if (base && (path.endsWith('/') ? path : path + '/').startsWith(base)) {
    path = path.slice(base.length);
  }

  return (path || '/') + window.location.search + window.location.hash;
} // Imported from path-to-regexp

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */

function compile(str, options) {
  return tokensToFunction(parse(str, options), options);
}
function getQueryDiff(toQuery, fromQuery) {
  const diff = {};
  const queries = { ...toQuery,
    ...fromQuery
  };

  for (const k in queries) {
    if (String(toQuery[k]) !== String(fromQuery[k])) {
      diff[k] = true;
    }
  }

  return diff;
}
function normalizeError(err) {
  let message;

  if (!(err.message || typeof err === 'string')) {
    try {
      message = JSON.stringify(err, null, 2);
    } catch (e) {
      message = `[${err.constructor.name}]`;
    }
  } else {
    message = err.message || err;
  }

  return { ...err,
    message,
    statusCode: err.statusCode || err.status || err.response && err.response.status || 500
  };
}
/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */

const PATH_REGEXP = new RegExp([// Match escaped characters that would otherwise appear in future matches.
// This allows the user to escape special characters that won't transform.
'(\\\\.)', // Match Express-style parameters and un-named parameters with a prefix
// and optional suffixes. Matches appear as:
//
// "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
// "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
// "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
'([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'].join('|'), 'g');
/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */

function parse(str, options) {
  const tokens = [];
  let key = 0;
  let index = 0;
  let path = '';
  const defaultDelimiter = options && options.delimiter || '/';
  let res;

  while ((res = PATH_REGEXP.exec(str)) != null) {
    const m = res[0];
    const escaped = res[1];
    const offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length; // Ignore already escaped sequences.

    if (escaped) {
      path += escaped[1];
      continue;
    }

    const next = str[index];
    const prefix = res[2];
    const name = res[3];
    const capture = res[4];
    const group = res[5];
    const modifier = res[6];
    const asterisk = res[7]; // Push the current path onto the tokens.

    if (path) {
      tokens.push(path);
      path = '';
    }

    const partial = prefix != null && next != null && next !== prefix;
    const repeat = modifier === '+' || modifier === '*';
    const optional = modifier === '?' || modifier === '*';
    const delimiter = res[2] || defaultDelimiter;
    const pattern = capture || group;
    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter,
      optional,
      repeat,
      partial,
      asterisk: Boolean(asterisk),
      pattern: pattern ? escapeGroup(pattern) : asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?'
    });
  } // Match any characters still remaining.


  if (index < str.length) {
    path += str.substr(index);
  } // If the path exists, push it onto the end.


  if (path) {
    tokens.push(path);
  }

  return tokens;
}
/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */


function encodeURIComponentPretty(str, slashAllowed) {
  const re = slashAllowed ? /[?#]/g : /[/?#]/g;
  return encodeURI(str).replace(re, c => {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase();
  });
}
/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */


function encodeAsterisk(str) {
  return encodeURIComponentPretty(str, true);
}
/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */


function escapeString(str) {
  return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1');
}
/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */


function escapeGroup(group) {
  return group.replace(/([=!:$/()])/g, '\\$1');
}
/**
 * Expose a method for transforming tokens into the path function.
 */


function tokensToFunction(tokens, options) {
  // Compile all the tokens into regexps.
  const matches = new Array(tokens.length); // Compile all the patterns before compilation.

  for (let i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$', flags(options));
    }
  }

  return function (obj, opts) {
    let path = '';
    const data = obj || {};
    const options = opts || {};
    const encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i];

      if (typeof token === 'string') {
        path += token;
        continue;
      }

      const value = data[token.name || 'pathMatch'];
      let segment;

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }

          continue;
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined');
        }
      }

      if (Array.isArray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`');
        }

        if (value.length === 0) {
          if (token.optional) {
            continue;
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty');
          }
        }

        for (let j = 0; j < value.length; j++) {
          segment = encode(value[j]);

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`');
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }

        continue;
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"');
      }

      path += token.prefix + segment;
    }

    return path;
  };
}
/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */


function flags(options) {
  return options && options.sensitive ? '' : 'i';
}
/**
 * Format given url, append query to url query string
 *
 * @param  {string} url
 * @param  {string} query
 * @return {string}
 */


function formatUrl(url, query) {
  let protocol;
  const index = url.indexOf('://');

  if (index !== -1) {
    protocol = url.substring(0, index);
    url = url.substring(index + 3);
  } else if (url.startsWith('//')) {
    url = url.substring(2);
  }

  let parts = url.split('/');
  let result = (protocol ? protocol + '://' : '//') + parts.shift();
  let path = parts.join('/');

  if (path === '' && parts.length === 1) {
    result += '/';
  }

  let hash;
  parts = path.split('#');

  if (parts.length === 2) {
    [path, hash] = parts;
  }

  result += path ? '/' + path : '';

  if (query && JSON.stringify(query) !== '{}') {
    result += (url.split('?').length === 2 ? '&' : '?') + formatQuery(query);
  }

  result += hash ? '#' + hash : '';
  return result;
}
/**
 * Transform data object to query string
 *
 * @param  {object} query
 * @return {string}
 */


function formatQuery(query) {
  return Object.keys(query).sort().map(key => {
    const val = query[key];

    if (val == null) {
      return '';
    }

    if (Array.isArray(val)) {
      return val.slice().map(val2 => [key, '=', val2].join('')).join('&');
    }

    return key + '=' + val;
  }).filter(Boolean).join('&');
}

function addLifecycleHook(vm, hook, fn) {
  if (!vm.$options[hook]) {
    vm.$options[hook] = [];
  }

  if (!vm.$options[hook].includes(fn)) {
    vm.$options[hook].push(fn);
  }
}
const urlJoin = function urlJoin() {
  return [].slice.call(arguments).join('/').replace(/\/+/g, '/').replace(':/', '://');
};
// CONCATENATED MODULE: ./.nuxt/mixins/fetch.server.js



async function serverPrefetch() {
  if (!this._fetchOnServer) {
    return;
  } // Call and await on $fetch


  try {
    await this.$options.fetch.call(this);
  } catch (err) {
    if (false) {}

    this.$fetchState.error = normalizeError(err);
  }

  this.$fetchState.pending = false; // Define an ssrKey for hydration

  this._fetchKey = this.$ssrContext.nuxt.fetch.length; // Add data-fetch-key on parent element of Component

  const attrs = this.$vnode.data.attrs = this.$vnode.data.attrs || {};
  attrs['data-fetch-key'] = this._fetchKey; // Add to ssrContext for window.__NUXT__.fetch

  this.$ssrContext.nuxt.fetch.push(this.$fetchState.error ? {
    _error: this.$fetchState.error
  } : this._data);
}

/* harmony default export */ var fetch_server = ({
  created() {
    if (!hasFetch(this)) {
      return;
    }

    if (typeof this.$options.fetchOnServer === 'function') {
      this._fetchOnServer = this.$options.fetchOnServer.call(this) !== false;
    } else {
      this._fetchOnServer = this.$options.fetchOnServer !== false;
    }

    external_vue_default.a.util.defineReactive(this, '$fetchState', {
      pending: true,
      error: null,
      timestamp: Date.now()
    });
    addLifecycleHook(this, 'serverPrefetch', serverPrefetch);
  }

});
// EXTERNAL MODULE: external "vue-meta"
var external_vue_meta_ = __webpack_require__(27);
var external_vue_meta_default = /*#__PURE__*/__webpack_require__.n(external_vue_meta_);

// EXTERNAL MODULE: external "vue-client-only"
var external_vue_client_only_ = __webpack_require__(24);
var external_vue_client_only_default = /*#__PURE__*/__webpack_require__.n(external_vue_client_only_);

// EXTERNAL MODULE: external "vue-no-ssr"
var external_vue_no_ssr_ = __webpack_require__(19);
var external_vue_no_ssr_default = /*#__PURE__*/__webpack_require__.n(external_vue_no_ssr_);

// EXTERNAL MODULE: external "vue-router"
var external_vue_router_ = __webpack_require__(5);
var external_vue_router_default = /*#__PURE__*/__webpack_require__.n(external_vue_router_);

// CONCATENATED MODULE: ./.nuxt/router.scrollBehavior.js


if (false) {}

/* harmony default export */ var router_scrollBehavior = (function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false; // if no children detected and scrollToTop is not explicitly disabled

  const Pages = getMatchedComponents(to);

  if (Pages.length < 2 && Pages.every(Page => Page.options.scrollToTop !== false)) {
    // scroll to the top of the page
    position = {
      x: 0,
      y: 0
    };
  } else if (Pages.some(Page => Page.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = {
      x: 0,
      y: 0
    };
  } // savedPosition is only available for popstate navigations (back button)


  if (savedPosition) {
    position = savedPosition;
  }

  const nuxt = window.$nuxt; // triggerScroll is only fired when a new component is loaded

  if (to.path === from.path && to.hash !== from.hash) {
    nuxt.$nextTick(() => nuxt.$emit('triggerScroll'));
  }

  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash; // CSS.escape() is not supported with IE and Edge.

        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1));
        }

        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = {
              selector: hash
            };
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).');
        }
      }

      resolve(position);
    });
  });
});
// CONCATENATED MODULE: ./.nuxt/router.js





const _d293d4a0 = () => interopDefault(__webpack_require__.e(/* import() | pages/lookbook */ 2).then(__webpack_require__.bind(null, 136)));

const _6e0ecfa8 = () => interopDefault(__webpack_require__.e(/* import() | pages/manifesto */ 3).then(__webpack_require__.bind(null, 137)));

const _7abca14c = () => interopDefault(__webpack_require__.e(/* import() | pages/index */ 1).then(__webpack_require__.bind(null, 138))); // TODO: remove in Nuxt 3


const emptyFn = () => {};

const originalPush = external_vue_router_default.a.prototype.push;

external_vue_router_default.a.prototype.push = function push(location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort);
};

external_vue_default.a.use(external_vue_router_default.a);
const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior: router_scrollBehavior,
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
};
function createRouter() {
  return new external_vue_router_default.a(routerOptions);
}
// CONCATENATED MODULE: ./.nuxt/components/nuxt-child.js
/* harmony default export */ var nuxt_child = ({
  name: 'NuxtChild',
  functional: true,
  props: {
    nuxtChildKey: {
      type: String,
      default: ''
    },
    keepAlive: Boolean,
    keepAliveProps: {
      type: Object,
      default: undefined
    }
  },

  render(_, {
    parent,
    data,
    props
  }) {
    const h = parent.$createElement;
    data.nuxtChild = true;
    const _parent = parent;
    const transitions = parent.$nuxt.nuxt.transitions;
    const defaultTransition = parent.$nuxt.nuxt.defaultTransition;
    let depth = 0;

    while (parent) {
      if (parent.$vnode && parent.$vnode.data.nuxtChild) {
        depth++;
      }

      parent = parent.$parent;
    }

    data.nuxtChildDepth = depth;
    const transition = transitions[depth] || defaultTransition;
    const transitionProps = {};
    transitionsKeys.forEach(key => {
      if (typeof transition[key] !== 'undefined') {
        transitionProps[key] = transition[key];
      }
    });
    const listeners = {};
    listenersKeys.forEach(key => {
      if (typeof transition[key] === 'function') {
        listeners[key] = transition[key].bind(_parent);
      }
    });

    if (false) {} // make sure that leave is called asynchronous (fix #5703)


    if (transition.css === false) {
      const leave = listeners.leave; // only add leave listener when user didnt provide one
      // or when it misses the done argument

      if (!leave || leave.length < 2) {
        listeners.leave = (el, done) => {
          if (leave) {
            leave.call(_parent, el);
          }

          _parent.$nextTick(done);
        };
      }
    }

    let routerView = h('routerView', data);

    if (props.keepAlive) {
      routerView = h('keep-alive', {
        props: props.keepAliveProps
      }, [routerView]);
    }

    return h('transition', {
      props: transitionProps,
      on: listeners
    }, [routerView]);
  }

});
const transitionsKeys = ['name', 'mode', 'appear', 'css', 'type', 'duration', 'enterClass', 'leaveClass', 'appearClass', 'enterActiveClass', 'enterActiveClass', 'leaveActiveClass', 'appearActiveClass', 'enterToClass', 'leaveToClass', 'appearToClass'];
const listenersKeys = ['beforeEnter', 'enter', 'afterEnter', 'enterCancelled', 'beforeLeave', 'leave', 'afterLeave', 'leaveCancelled', 'beforeAppear', 'appear', 'afterAppear', 'appearCancelled'];
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-error.vue?vue&type=template&id=39174add&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"__nuxt-error-page"},[_vm._ssrNode("<div class=\"error\">","</div>",[_vm._ssrNode("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"90\" height=\"90\" fill=\"#DBE1EC\" viewBox=\"0 0 48 48\"><path d=\"M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z\"></path></svg> <div class=\"title\">"+_vm._ssrEscape(_vm._s(_vm.message))+"</div> "),(_vm.statusCode === 404)?_vm._ssrNode("<p class=\"description\">","</p>",[_c('NuxtLink',{staticClass:"error-link",attrs:{"to":"/"}},[_vm._v("Back to the home page")])],1):_vm._e(),_vm._ssrNode(" <div class=\"logo\"><a href=\"https://nuxtjs.org\" target=\"_blank\" rel=\"noopener\">Nuxt.js</a></div>")],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./.nuxt/components/nuxt-error.vue?vue&type=template&id=39174add&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-error.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var nuxt_errorvue_type_script_lang_js_ = ({
  name: 'NuxtError',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  computed: {
    statusCode() {
      return this.error && this.error.statusCode || 500;
    },

    message() {
      return this.error.message || 'Error';
    }

  },

  head() {
    return {
      title: this.message,
      meta: [{
        name: 'viewport',
        content: 'width=device-width,initial-scale=1.0,minimum-scale=1.0'
      }]
    };
  }

});
// CONCATENATED MODULE: ./.nuxt/components/nuxt-error.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_nuxt_errorvue_type_script_lang_js_ = (nuxt_errorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./.nuxt/components/nuxt-error.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(34)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var nuxt_error_component = Object(componentNormalizer["a" /* default */])(
  components_nuxt_errorvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "4e140173"
  
)

/* harmony default export */ var nuxt_error = (nuxt_error_component.exports);
// CONCATENATED MODULE: ./.nuxt/components/nuxt.js




/* harmony default export */ var components_nuxt = ({
  name: 'Nuxt',
  components: {
    NuxtChild: nuxt_child,
    NuxtError: nuxt_error
  },
  props: {
    nuxtChildKey: {
      type: String,
      default: undefined
    },
    keepAlive: Boolean,
    keepAliveProps: {
      type: Object,
      default: undefined
    },
    name: {
      type: String,
      default: 'default'
    }
  },

  errorCaptured(error) {
    // if we receive and error while showing the NuxtError component
    // capture the error and force an immediate update so we re-render
    // without the NuxtError component
    if (this.displayingNuxtError) {
      this.errorFromNuxtError = error;
      this.$forceUpdate();
    }
  },

  computed: {
    routerViewKey() {
      // If nuxtChildKey prop is given or current route has children
      if (typeof this.nuxtChildKey !== 'undefined' || this.$route.matched.length > 1) {
        return this.nuxtChildKey || compile(this.$route.matched[0].path)(this.$route.params);
      }

      const [matchedRoute] = this.$route.matched;

      if (!matchedRoute) {
        return this.$route.path;
      }

      const Component = matchedRoute.components.default;

      if (Component && Component.options) {
        const {
          options
        } = Component;

        if (options.key) {
          return typeof options.key === 'function' ? options.key(this.$route) : options.key;
        }
      }

      const strict = /\/$/.test(matchedRoute.path);
      return strict ? this.$route.path : this.$route.path.replace(/\/$/, '');
    }

  },

  beforeCreate() {
    external_vue_default.a.util.defineReactive(this, 'nuxt', this.$root.$options.nuxt);
  },

  render(h) {
    // if there is no error
    if (!this.nuxt.err) {
      // Directly return nuxt child
      return h('NuxtChild', {
        key: this.routerViewKey,
        props: this.$props
      });
    } // if an error occurred within NuxtError show a simple
    // error message instead to prevent looping


    if (this.errorFromNuxtError) {
      this.$nextTick(() => this.errorFromNuxtError = false);
      return h('div', {}, [h('h2', 'An error occurred while showing the error page'), h('p', 'Unfortunately an error occurred and while showing the error page another error occurred'), h('p', `Error details: ${this.errorFromNuxtError.toString()}`), h('nuxt-link', {
        props: {
          to: '/'
        }
      }, 'Go back to home')]);
    } // track if we are showing the NuxtError component


    this.displayingNuxtError = true;
    this.$nextTick(() => this.displayingNuxtError = false);
    return h(nuxt_error, {
      props: {
        error: this.nuxt.err
      }
    });
  }

});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-loading.vue?vue&type=script&lang=js&
/* harmony default export */ var nuxt_loadingvue_type_script_lang_js_ = ({
  name: 'NuxtLoading',

  data() {
    return {
      percent: 0,
      show: false,
      canSucceed: true,
      reversed: false,
      skipTimerCount: 0,
      rtl: false,
      throttle: 200,
      duration: 5000,
      continuous: false
    };
  },

  computed: {
    left() {
      if (!this.continuous && !this.rtl) {
        return false;
      }

      return this.rtl ? this.reversed ? '0px' : 'auto' : !this.reversed ? '0px' : 'auto';
    }

  },

  beforeDestroy() {
    this.clear();
  },

  methods: {
    clear() {
      clearInterval(this._timer);
      clearTimeout(this._throttle);
      this._timer = null;
    },

    start() {
      this.clear();
      this.percent = 0;
      this.reversed = false;
      this.skipTimerCount = 0;
      this.canSucceed = true;

      if (this.throttle) {
        this._throttle = setTimeout(() => this.startTimer(), this.throttle);
      } else {
        this.startTimer();
      }

      return this;
    },

    set(num) {
      this.show = true;
      this.canSucceed = true;
      this.percent = Math.min(100, Math.max(0, Math.floor(num)));
      return this;
    },

    get() {
      return this.percent;
    },

    increase(num) {
      this.percent = Math.min(100, Math.floor(this.percent + num));
      return this;
    },

    decrease(num) {
      this.percent = Math.max(0, Math.floor(this.percent - num));
      return this;
    },

    pause() {
      clearInterval(this._timer);
      return this;
    },

    resume() {
      this.startTimer();
      return this;
    },

    finish() {
      this.percent = this.reversed ? 0 : 100;
      this.hide();
      return this;
    },

    hide() {
      this.clear();
      setTimeout(() => {
        this.show = false;
        this.$nextTick(() => {
          this.percent = 0;
          this.reversed = false;
        });
      }, 500);
      return this;
    },

    fail(error) {
      this.canSucceed = false;
      return this;
    },

    startTimer() {
      if (!this.show) {
        this.show = true;
      }

      if (typeof this._cut === 'undefined') {
        this._cut = 10000 / Math.floor(this.duration);
      }

      this._timer = setInterval(() => {
        /**
         * When reversing direction skip one timers
         * so 0, 100 are displayed for two iterations
         * also disable css width transitioning
         * which otherwise interferes and shows
         * a jojo effect
         */
        if (this.skipTimerCount > 0) {
          this.skipTimerCount--;
          return;
        }

        if (this.reversed) {
          this.decrease(this._cut);
        } else {
          this.increase(this._cut);
        }

        if (this.continuous) {
          if (this.percent >= 100) {
            this.skipTimerCount = 1;
            this.reversed = !this.reversed;
          } else if (this.percent <= 0) {
            this.skipTimerCount = 1;
            this.reversed = !this.reversed;
          }
        }
      }, 100);
    }

  },

  render(h) {
    let el = h(false);

    if (this.show) {
      el = h('div', {
        staticClass: 'nuxt-progress',
        class: {
          'nuxt-progress-notransition': this.skipTimerCount > 0,
          'nuxt-progress-failed': !this.canSucceed
        },
        style: {
          width: this.percent + '%',
          left: this.left
        }
      });
    }

    return el;
  }

});
// CONCATENATED MODULE: ./.nuxt/components/nuxt-loading.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_nuxt_loadingvue_type_script_lang_js_ = (nuxt_loadingvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./.nuxt/components/nuxt-loading.vue
var nuxt_loading_render, nuxt_loading_staticRenderFns


function nuxt_loading_injectStyles (context) {
  
  var style0 = __webpack_require__(36)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var nuxt_loading_component = Object(componentNormalizer["a" /* default */])(
  components_nuxt_loadingvue_type_script_lang_js_,
  nuxt_loading_render,
  nuxt_loading_staticRenderFns,
  false,
  nuxt_loading_injectStyles,
  null,
  "e11f2432"
  
)

/* harmony default export */ var nuxt_loading = (nuxt_loading_component.exports);
// EXTERNAL MODULE: ./assets/css/theme.css
var theme = __webpack_require__(38);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/default.vue?vue&type=template&id=4708080f&
var defaultvue_type_template_id_4708080f_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div id=\"container\">","</div>",[_c('nuxt')],1),_vm._ssrNode(" "),_c('Ticker'),_vm._ssrNode(" "),_c('Logo'),_vm._ssrNode(" "),_c('Buttons'),_vm._ssrNode(" "),_c('Navbar')],2)}
var defaultvue_type_template_id_4708080f_staticRenderFns = []


// CONCATENATED MODULE: ./layouts/default.vue?vue&type=template&id=4708080f&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/default.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var defaultvue_type_script_lang_js_ = ({
  mounted() {
    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    let vh = window.innerHeight * 0.01; // Then we set the value in the --vh custom property to the root of the document

    document.getElementById("container").style.setProperty("--vh", `${vh}px`);
    window.addEventListener("resize", () => {
      let vh = window.innerHeight * 0.01;
      document.getElementById("container").style.setProperty("--vh", `${vh}px`);
    });
  }

});
// CONCATENATED MODULE: ./layouts/default.vue?vue&type=script&lang=js&
 /* harmony default export */ var layouts_defaultvue_type_script_lang_js_ = (defaultvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./layouts/default.vue



function default_injectStyles (context) {
  
  var style0 = __webpack_require__(50)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var default_component = Object(componentNormalizer["a" /* default */])(
  layouts_defaultvue_type_script_lang_js_,
  defaultvue_type_template_id_4708080f_render,
  defaultvue_type_template_id_4708080f_staticRenderFns,
  false,
  default_injectStyles,
  null,
  "0ed8dc35"
  
)

/* harmony default export */ var layouts_default = (default_component.exports);

/* nuxt-component-imports */
installComponents(default_component, {Ticker: __webpack_require__(22).default,Logo: __webpack_require__(23).default,Buttons: __webpack_require__(72).default,Navbar: __webpack_require__(4).default})

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/lookbook.vue?vue&type=template&id=f51f63ae&
var lookbookvue_type_template_id_f51f63ae_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div id=\"container\">","</div>",[_c('nuxt')],1),_vm._ssrNode(" "),_c('Ticker'),_vm._ssrNode(" "),_c('Logo'),_vm._ssrNode(" "),_c('Buttonsnoshop'),_vm._ssrNode(" "),_c('Navbar')],2)}
var lookbookvue_type_template_id_f51f63ae_staticRenderFns = []


// CONCATENATED MODULE: ./layouts/lookbook.vue?vue&type=template&id=f51f63ae&

// EXTERNAL MODULE: ./components/Navbar.vue + 4 modules
var Navbar = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/lookbook.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var lookbookvue_type_script_lang_js_ = ({
  components: {
    Navbar: Navbar["default"]
  },

  mounted() {
    document.getElementById("lookbook-icon").classList.add("nav-blue-active");
    document.querySelector(".nav-lookbook-link").style.color = "#190dfe"; // First we get the viewport height and we multiple it by 1% to get a value for a vh unit

    let vh = window.innerHeight * 0.01; // Then we set the value in the --vh custom property to the root of the document

    document.getElementById("container").style.setProperty("--vh", `${vh}px`);
    window.addEventListener("resize", () => {
      let vh = window.innerHeight * 0.01;
      document.getElementById("container").style.setProperty("--vh", `${vh}px`);
    });
  }

});
// CONCATENATED MODULE: ./layouts/lookbook.vue?vue&type=script&lang=js&
 /* harmony default export */ var layouts_lookbookvue_type_script_lang_js_ = (lookbookvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./layouts/lookbook.vue



function lookbook_injectStyles (context) {
  
  var style0 = __webpack_require__(63)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var lookbook_component = Object(componentNormalizer["a" /* default */])(
  layouts_lookbookvue_type_script_lang_js_,
  lookbookvue_type_template_id_f51f63ae_render,
  lookbookvue_type_template_id_f51f63ae_staticRenderFns,
  false,
  lookbook_injectStyles,
  null,
  "1faf2844"
  
)

/* harmony default export */ var lookbook = (lookbook_component.exports);

/* nuxt-component-imports */
installComponents(lookbook_component, {Ticker: __webpack_require__(22).default,Logo: __webpack_require__(23).default,Buttonsnoshop: __webpack_require__(73).default,Navbar: __webpack_require__(4).default})

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/manifesto.vue?vue&type=template&id=75cc793d&
var manifestovue_type_template_id_75cc793d_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div id=\"container\">","</div>",[_c('nuxt')],1),_vm._ssrNode(" "),_c('Ticker'),_vm._ssrNode(" "),_c('Logo'),_vm._ssrNode(" "),_c('ButtonManifesto'),_vm._ssrNode(" "),_c('Navbar')],2)}
var manifestovue_type_template_id_75cc793d_staticRenderFns = []


// CONCATENATED MODULE: ./layouts/manifesto.vue?vue&type=template&id=75cc793d&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/manifesto.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var manifestovue_type_script_lang_js_ = ({
  mounted() {
    document.getElementById("manifestoicon").classList.add("nav-blue-active");
    document.querySelector(".nav-manifesto-link").style.color = "#190dfe";
  }

});
// CONCATENATED MODULE: ./layouts/manifesto.vue?vue&type=script&lang=js&
 /* harmony default export */ var layouts_manifestovue_type_script_lang_js_ = (manifestovue_type_script_lang_js_); 
// CONCATENATED MODULE: ./layouts/manifesto.vue



function manifesto_injectStyles (context) {
  
  var style0 = __webpack_require__(67)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var manifesto_component = Object(componentNormalizer["a" /* default */])(
  layouts_manifestovue_type_script_lang_js_,
  manifestovue_type_template_id_75cc793d_render,
  manifestovue_type_template_id_75cc793d_staticRenderFns,
  false,
  manifesto_injectStyles,
  null,
  "04380f94"
  
)

/* harmony default export */ var manifesto = (manifesto_component.exports);

/* nuxt-component-imports */
installComponents(manifesto_component, {Ticker: __webpack_require__(22).default,Logo: __webpack_require__(23).default,ButtonManifesto: __webpack_require__(74).default,Navbar: __webpack_require__(4).default})

// CONCATENATED MODULE: ./.nuxt/App.js







const layouts = {
  "_default": sanitizeComponent(layouts_default),
  "_lookbook": sanitizeComponent(lookbook),
  "_manifesto": sanitizeComponent(manifesto)
};
/* harmony default export */ var App = ({
  render(h, props) {
    const loadingEl = h('NuxtLoading', {
      ref: 'loading'
    });
    const layoutEl = h(this.layout || 'nuxt');
    const templateEl = h('div', {
      domProps: {
        id: '__layout'
      },
      key: this.layoutName
    }, [layoutEl]);
    const transitionEl = h('transition', {
      props: {
        name: 'layout',
        mode: 'out-in'
      },
      on: {
        beforeEnter(el) {
          // Ensure to trigger scroll event after calling scrollBehavior
          window.$nuxt.$nextTick(() => {
            window.$nuxt.$emit('triggerScroll');
          });
        }

      }
    }, [templateEl]);
    return h('div', {
      domProps: {
        id: '__nuxt'
      }
    }, [loadingEl, transitionEl]);
  },

  data: () => ({
    isOnline: true,
    layout: null,
    layoutName: '',
    nbFetching: 0
  }),

  beforeCreate() {
    external_vue_default.a.util.defineReactive(this, 'nuxt', this.$options.nuxt);
  },

  created() {
    // Add this.$nuxt in child instances
    external_vue_default.a.prototype.$nuxt = this;

    if (false) {} // Add $nuxt.error()


    this.error = this.nuxt.error; // Add $nuxt.context

    this.context = this.$options.context;
  },

  async mounted() {
    this.$loading = this.$refs.loading;
  },

  watch: {
    'nuxt.err': 'errorChanged'
  },
  computed: {
    isOffline() {
      return !this.isOnline;
    },

    isFetching() {
      return this.nbFetching > 0;
    }

  },
  methods: {
    refreshOnlineStatus() {
      if (false) {}
    },

    async refresh() {
      const pages = getMatchedComponentsInstances(this.$route);

      if (!pages.length) {
        return;
      }

      this.$loading.start();
      const promises = pages.map(page => {
        const p = []; // Old fetch

        if (page.$options.fetch && page.$options.fetch.length) {
          p.push(promisify(page.$options.fetch, this.context));
        }

        if (page.$fetch) {
          p.push(page.$fetch());
        } else {
          // Get all component instance to call $fetch
          for (const component of getChildrenComponentInstancesUsingFetch(page.$vnode.componentInstance)) {
            p.push(component.$fetch());
          }
        }

        if (page.$options.asyncData) {
          p.push(promisify(page.$options.asyncData, this.context).then(newData => {
            for (const key in newData) {
              external_vue_default.a.set(page.$data, key, newData[key]);
            }
          }));
        }

        return Promise.all(p);
      });

      try {
        await Promise.all(promises);
      } catch (error) {
        this.$loading.fail(error);
        globalHandleError(error);
        this.error(error);
      }

      this.$loading.finish();
    },

    errorChanged() {
      if (this.nuxt.err && this.$loading) {
        if (this.$loading.fail) {
          this.$loading.fail(this.nuxt.err);
        }

        if (this.$loading.finish) {
          this.$loading.finish();
        }
      }
    },

    setLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default';
      }

      this.layoutName = layout;
      this.layout = layouts['_' + layout];
      return this.layout;
    },

    loadLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default';
      }

      return Promise.resolve(layouts['_' + layout]);
    }

  },
  components: {
    NuxtLoading: nuxt_loading
  }
});
// CONCATENATED MODULE: ./.nuxt/components/plugin.js

const globalComponents = {};

for (const name in globalComponents) {
  external_vue_default.a.component(name, globalComponents[name]);
}
// EXTERNAL MODULE: external "cookie-universal"
var external_cookie_universal_ = __webpack_require__(28);
var external_cookie_universal_default = /*#__PURE__*/__webpack_require__.n(external_cookie_universal_);

// CONCATENATED MODULE: ./.nuxt/cookie-universal-nuxt.js

/* harmony default export */ var cookie_universal_nuxt = (({
  req,
  res
}, inject) => {
  const options = {
    "alias": "cookies",
    "parseJSON": true
  };
  inject(options.alias, external_cookie_universal_default()(req, res, options.parseJSON));
});
// EXTERNAL MODULE: ./.nuxt/empty.js
var _nuxt_empty = __webpack_require__(7);

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(6);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: external "defu"
var external_defu_ = __webpack_require__(29);
var external_defu_default = /*#__PURE__*/__webpack_require__.n(external_defu_);

// CONCATENATED MODULE: ./.nuxt/axios.js

 // Axios.prototype cannot be modified

const axiosExtra = {
  setBaseURL(baseURL) {
    this.defaults.baseURL = baseURL;
  },

  setHeader(name, value, scopes = 'common') {
    for (let scope of Array.isArray(scopes) ? scopes : [scopes]) {
      if (!value) {
        delete this.defaults.headers[scope][name];
        return;
      }

      this.defaults.headers[scope][name] = value;
    }
  },

  setToken(token, type, scopes = 'common') {
    const value = !token ? null : (type ? type + ' ' : '') + token;
    this.setHeader('Authorization', value, scopes);
  },

  onRequest(fn) {
    this.interceptors.request.use(config => fn(config) || config);
  },

  onResponse(fn) {
    this.interceptors.response.use(response => fn(response) || response);
  },

  onRequestError(fn) {
    this.interceptors.request.use(undefined, error => fn(error) || Promise.reject(error));
  },

  onResponseError(fn) {
    this.interceptors.response.use(undefined, error => fn(error) || Promise.reject(error));
  },

  onError(fn) {
    this.onRequestError(fn);
    this.onResponseError(fn);
  },

  create(options) {
    return createAxiosInstance(external_defu_default()(options, this.defaults));
  }

}; // Request helpers ($get, $post, ...)

for (let method of ['request', 'delete', 'get', 'head', 'options', 'post', 'put', 'patch']) {
  axiosExtra['$' + method] = function () {
    return this[method].apply(this, arguments).then(res => res && res.data);
  };
}

const extendAxiosInstance = axios => {
  for (let key in axiosExtra) {
    axios[key] = axiosExtra[key].bind(axios);
  }
};

const createAxiosInstance = axiosOptions => {
  // Create new axios instance
  const axios = external_axios_default.a.create(axiosOptions);
  axios.CancelToken = external_axios_default.a.CancelToken;
  axios.isCancel = external_axios_default.a.isCancel; // Extend axios proto

  extendAxiosInstance(axios); // Setup interceptors

  setupProgress(axios);
  return axios;
};

const setupProgress = axios => {
  if (true) {
    return;
  } // A noop loading inteterface for when $nuxt is not yet ready


  const noopLoading = {
    finish: () => {},
    start: () => {},
    fail: () => {},
    set: () => {}
  };

  const $loading = () => {
    const $nuxt = typeof window !== 'undefined' && window['$nuxt'];
    return $nuxt && $nuxt.$loading && $nuxt.$loading.set ? $nuxt.$loading : noopLoading;
  };

  let currentRequests = 0;
  axios.onRequest(config => {
    if (config && config.progress === false) {
      return;
    }

    currentRequests++;
  });
  axios.onResponse(response => {
    if (response && response.config && response.config.progress === false) {
      return;
    }

    currentRequests--;

    if (currentRequests <= 0) {
      currentRequests = 0;
      $loading().finish();
    }
  });
  axios.onError(error => {
    if (error && error.config && error.config.progress === false) {
      return;
    }

    currentRequests--;

    if (external_axios_default.a.isCancel(error)) {
      return;
    }

    $loading().fail();
    $loading().finish();
  });

  const onProgress = e => {
    if (!currentRequests) {
      return;
    }

    const progress = e.loaded * 100 / (e.total * currentRequests);
    $loading().set(Math.min(100, progress));
  };

  axios.defaults.onUploadProgress = onProgress;
  axios.defaults.onDownloadProgress = onProgress;
};

/* harmony default export */ var _nuxt_axios = ((ctx, inject) => {
  // runtimeConfig
  const runtimeConfig = ctx.$config && ctx.$config.axios || {}; // baseURL

  const baseURL =  false ? undefined : runtimeConfig.baseURL || process.env._AXIOS_BASE_URL_ || 'http://localhost:3000/'; // Create fresh objects for all default header scopes
  // Axios creates only one which is shared across SSR requests!
  // https://github.com/mzabriskie/axios/blob/master/lib/defaults.js

  const headers = {
    "common": {
      "Accept": "application/json, text/plain, */*"
    },
    "delete": {},
    "get": {},
    "head": {},
    "post": {},
    "put": {},
    "patch": {}
  };
  const axiosOptions = {
    baseURL,
    headers
  }; // Proxy SSR request headers headers

  if ( true && ctx.req && ctx.req.headers) {
    const reqHeaders = { ...ctx.req.headers
    };

    for (let h of ["accept", "host", "cf-ray", "cf-connecting-ip", "content-length", "content-md5", "content-type"]) {
      delete reqHeaders[h];
    }

    axiosOptions.headers.common = { ...reqHeaders,
      ...axiosOptions.headers.common
    };
  }

  if (true) {
    // Don't accept brotli encoding because Node can't parse it
    axiosOptions.headers.common['accept-encoding'] = 'gzip, deflate';
  }

  const axios = createAxiosInstance(axiosOptions); // Inject axios to the context as $axios

  ctx.$axios = axios;
  inject('axios', axios);
});
// CONCATENATED MODULE: ./.nuxt/lib.plugin.4ae526b8.js
// these regular expressions are borrowed from below page.
// https://stackoverflow.com/questions/11381673/detecting-a-mobile-browser
// eslint-disable-next-line
const REGEX_MOBILE1 = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i; // eslint-disable-next-line

const REGEX_MOBILE2 = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i;

function isMobile(a) {
  return REGEX_MOBILE1.test(a) || REGEX_MOBILE2.test(a.substr(0, 4));
} // eslint-disable-next-line


const REGEX_MOBILE_OR_TABLET1 = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i; // eslint-disable-next-line

const REGEX_MOBILE_OR_TABLET2 = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i;

function isMobileOrTablet(a) {
  return REGEX_MOBILE_OR_TABLET1.test(a) || REGEX_MOBILE_OR_TABLET2.test(a.substr(0, 4));
}

function isIos(a) {
  return /iPad|iPhone|iPod/.test(a);
}

function isAndroid(a) {
  return /android/i.test(a);
}

function isWindows(a) {
  return /Windows/.test(a);
}

function isMacOS(a) {
  return /Mac OS X/.test(a);
}

const DEFAULT_USER_AGENT = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.39 Safari/537.36';
/* harmony default export */ var lib_plugin_4ae526b8 = (async function (ctx, inject) {
  let userAgent = '';

  if (typeof ctx.req !== 'undefined') {
    userAgent = ctx.req.headers['user-agent'];
  } else if (typeof navigator !== 'undefined') {
    userAgent = navigator.userAgent;
  } else {
    userAgent = DEFAULT_USER_AGENT;
  } // use default user-agent if user-agent header is not sent


  if (!userAgent) {
    userAgent = DEFAULT_USER_AGENT;
  }

  let mobile = null;
  let mobileOrTablet = null;
  let ios = null;
  let android = null;
  let windows = false;
  let macOS = true;

  if (userAgent === 'Amazon CloudFront') {
    if (ctx.req.headers['cloudfront-is-mobile-viewer'] === 'true') {
      mobile = true;
      mobileOrTablet = true;
    }

    if (ctx.req.headers['cloudfront-is-tablet-viewer'] === 'true') {
      mobile = false;
      mobileOrTablet = true;
    }
  } else if (ctx.req && ctx.req.headers['cf-device-type']) {
    // Cloudflare
    switch (ctx.req.headers['cf-device-type']) {
      case 'mobile':
        mobile = true;
        mobileOrTablet = true;
        break;

      case 'tablet':
        mobile = false;
        mobileOrTablet = true;
        break;

      case 'desktop':
        mobile = false;
        mobileOrTablet = false;
        break;
    }
  } else {
    mobile = isMobile(userAgent);
    mobileOrTablet = isMobileOrTablet(userAgent);
    ios = isIos(userAgent);
    android = isAndroid(userAgent);
  }

  windows = isWindows(userAgent);
  macOS = isMacOS(userAgent);
  ctx.isMobile = mobile;
  ctx.isMobileOrTablet = mobileOrTablet;
  ctx.isTablet = !mobile && mobileOrTablet;
  ctx.isDesktop = !mobileOrTablet;
  ctx.isDesktopOrTablet = !mobile;
  ctx.isIos = ios;
  ctx.isAndroid = android;
  ctx.isWindows = windows;
  ctx.isMacOS = macOS;
  inject('device', {
    isMobile: mobile,
    isMobileOrTablet: mobileOrTablet,
    isTablet: !mobile && mobileOrTablet,
    isDesktop: !mobileOrTablet,
    isIos: ios,
    isAndroid: android,
    isWindows: windows,
    isMacOS: macOS,
    isDesktopOrTablet: !mobile
  });
});
// CONCATENATED MODULE: ./.nuxt/pwa/meta.utils.js
function mergeMeta(to, from) {
  if (typeof to === 'function') {
    // eslint-disable-next-line no-console
    console.warn('Cannot merge meta. Avoid using head as a function!');
    return;
  }

  for (const key in from) {
    const value = from[key];

    if (Array.isArray(value)) {
      to[key] = to[key] || [];

      for (const item of value) {
        // Avoid duplicates
        if (item.hid && hasMeta(to[key], 'hid', item.hid) || item.name && hasMeta(to[key], 'name', item.name)) {
          continue;
        } // Add meta


        to[key].push(item);
      }
    } else if (typeof value === 'object') {
      to[key] = to[key] || {};

      for (const attr in value) {
        to[key][attr] = value[attr];
      }
    } else if (to[key] === undefined) {
      to[key] = value;
    }
  }
}

function hasMeta(arr, key, val) {
  return arr.find(obj => val ? obj[key] === val : obj[key]);
}
// EXTERNAL MODULE: ./.nuxt/pwa/meta.json
var meta = __webpack_require__(30);

// CONCATENATED MODULE: ./.nuxt/pwa/meta.plugin.js


/* harmony default export */ var meta_plugin = (function ({
  app
}) {
  mergeMeta(app.head, meta);
});
// EXTERNAL MODULE: external "vue-moment-lib"
var external_vue_moment_lib_ = __webpack_require__(31);
var external_vue_moment_lib_default = /*#__PURE__*/__webpack_require__.n(external_vue_moment_lib_);

// CONCATENATED MODULE: ./plugins/vue-moment-lib.js


external_vue_default.a.use(external_vue_moment_lib_default.a);
// CONCATENATED MODULE: ./plugins/vue-analytics.js
/* harmony default export */ var vue_analytics = (function (context) {
  if (false) {}

  function gtag() {
    window.dataLayer.push(arguments);
  }
});
// CONCATENATED MODULE: ./.nuxt/index.js










/* Plugins */

 // Source: ./components/plugin.js (mode: 'all')

 // Source: ./cookie-universal-nuxt.js (mode: 'all')

 // Source: ./templates.plugin.ab5b9b76.js (mode: 'client')

 // Source: ./axios.js (mode: 'all')

 // Source: ./lib.plugin.4ae526b8.js (mode: 'all')

 // Source: ./workbox.js (mode: 'client')

 // Source: ./pwa/meta.plugin.js (mode: 'all')

 // Source: ../plugins/vue-moment-lib (mode: 'all')

 // Source: ../plugins/vue-awesome-countdown (mode: 'client')

 // Source: ../plugins/vue-analytics.js (mode: 'all')

 // Source: ../plugins/vue-scroll-lock.js (mode: 'client')
// Component: <ClientOnly>

external_vue_default.a.component(external_vue_client_only_default.a.name, external_vue_client_only_default.a); // TODO: Remove in Nuxt 3: <NoSsr>

external_vue_default.a.component(external_vue_no_ssr_default.a.name, { ...external_vue_no_ssr_default.a,

  render(h, ctx) {
    if (false) {}

    return external_vue_no_ssr_default.a.render(h, ctx);
  }

}); // Component: <NuxtChild>

external_vue_default.a.component(nuxt_child.name, nuxt_child);
external_vue_default.a.component('NChild', nuxt_child); // Component NuxtLink is imported in server.js or client.js
// Component: <Nuxt>

external_vue_default.a.component(components_nuxt.name, components_nuxt);
external_vue_default.a.use(external_vue_meta_default.a, {
  "keyName": "head",
  "attribute": "data-n-head",
  "ssrAttribute": "data-n-head-ssr",
  "tagIDKeyName": "hid"
});
const defaultTransition = {
  "name": "page",
  "mode": "out-in",
  "appear": false,
  "appearClass": "appear",
  "appearActiveClass": "appear-active",
  "appearToClass": "appear-to"
};

async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext); // Create Root instance
  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.

  const app = {
    head: {
      "htmlAttrs": {
        "lang": "en"
      },
      "title": "MSCHF X CLONE WEBSITE",
      "meta": [{
        "charset": "utf-8"
      }, {
        "name": "viewport",
        "content": "width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=5.0, minimum-scale=1.0"
      }, {
        "name": "referrer",
        "content": "no-referrer"
      }, {
        "name": "title",
        "content": "MSCHF X CLONE WEBSITE"
      }, {
        "hid": "description",
        "name": "description",
        "content": "This is a cloned website of MSCHF X"
      }, {
        "name": "keywords",
        "content": "MSCHF, MSCHF X, Front-end, Web, Vue"
      }, {
        "name": "twitter:card",
        "content": "summary_large_image"
      }, {
        "name": "twitter:site",
        "content": "@mschfxyz"
      }, {
        "name": "twitter:title",
        "content": "MSCHF X CLONE WEBSITE"
      }, {
        "name": "twitter:description",
        "content": "This is a cloned website of MSCHF X"
      }, {
        "name": "twitter:image:src",
        "content": "https:\u002F\u002F[PROJECT_DOMAIN]\u002Fsocial\u002Fsharecard-twitter.png"
      }, {
        "name": "og:title",
        "property": "og:title",
        "content": "MSCHF X CLONE WEBSITE"
      }, {
        "name": "og:type",
        "property": "og:type",
        "content": "website"
      }, {
        "name": "og:url",
        "property": "og:url",
        "content": "https:\u002F\u002F[PROJECT_DOMAIN]"
      }, {
        "name": "og:image",
        "property": "og:image",
        "content": "https:\u002F\u002F[PROJECT_DOMAIN]\u002Fsocial\u002Fsharecard-facebook.png"
      }, {
        "name": "og:description",
        "property": "og:description",
        "content": "This is a cloned website of MSCHF X"
      }, {
        "name": "og:site_name",
        "property": "og:site_name",
        "content": "MSCHF X CLONE WEBSITE"
      }, {
        "name": "author",
        "content": "MSCHF"
      }, {
        "meta": "msapplication-TileColor",
        "content": "#ffffff"
      }, {
        "meta": "msapplication-TileImage",
        "content": "\u002Fms-icon-144x144.png"
      }, {
        "meta": "theme-color",
        "content": "#ffffff"
      }],
      "link": [{
        "rel": "icon",
        "type": "image\u002Fx-icon",
        "href": "\u002Ffavicon.png"
      }],
      "script": [{
        "src": "https:\u002F\u002Fcdnjs.cloudflare.com\u002Fajax\u002Flibs\u002Fmodernizr\u002F2.8.3\u002Fmodernizr.min.js"
      }, {
        "src": "https:\u002F\u002Fcdnjs.cloudflare.com\u002Fajax\u002Flibs\u002Fdetectizr\u002F2.2.0\u002Fdetectizr.min.js"
      }, {
        "src": "https:\u002F\u002Fwww.googletagmanager.com\u002Fgtag\u002Fjs?id=GA_ID"
      }, {
        "src": "\u002Fjs\u002Fsnap.js"
      }],
      "style": []
    },
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],

      setTransitions(transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions];
        }

        transitions = transitions.map(transition => {
          if (!transition) {
            transition = defaultTransition;
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, {
              name: transition
            });
          } else {
            transition = Object.assign({}, defaultTransition, transition);
          }

          return transition;
        });
        this.$options.nuxt.transitions = transitions;
        return transitions;
      },

      err: null,
      dateErr: null,

      error(err) {
        err = err || null;
        app.context._errored = Boolean(err);
        err = err ? normalizeError(err) : null;
        let nuxt = app.nuxt; // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207

        if (this) {
          nuxt = this.nuxt || this.$options.nuxt;
        }

        nuxt.dateErr = Date.now();
        nuxt.err = err; // Used in src/server.js

        if (ssrContext) {
          ssrContext.nuxt.error = err;
        }

        return err;
      }

    },
    ...App
  };
  const next = ssrContext ? ssrContext.next : location => app.router.push(location); // Resolve route

  let route;

  if (ssrContext) {
    route = router.resolve(ssrContext.url).route;
  } else {
    const path = getLocation(router.options.base, router.options.mode);
    route = router.resolve(path).route;
  } // Set context to app.context


  await setContext(app, {
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  });

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided');
    }

    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`);
    }

    key = '$' + key; // Add into app

    app[key] = value; // Add into context

    if (!app.context[key]) {
      app.context[key] = value;
    } // Check if plugin not already installed


    const installKey = '__nuxt_' + key + '_installed__';

    if (external_vue_default.a[installKey]) {
      return;
    }

    external_vue_default.a[installKey] = true; // Call Vue.use() to install the plugin into vm

    external_vue_default.a.use(() => {
      if (!Object.prototype.hasOwnProperty.call(external_vue_default.a.prototype, key)) {
        Object.defineProperty(external_vue_default.a.prototype, key, {
          get() {
            return this.$root.$options[key];
          }

        });
      }
    });
  } // Inject runtime config as $config


  inject('config', config); // Add enablePreview(previewData = {}) in context for plugins

  if (false) {} // Plugin execution


  if (typeof /* Cannot get final name for export "default" in "./.nuxt/components/plugin.js" (known exports: , known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./.nuxt/components/plugin.js" (known exports: , known reexports: ) */ undefined(app.context, inject);
  }

  if (typeof cookie_universal_nuxt === 'function') {
    await cookie_universal_nuxt(app.context, inject);
  }

  if (false) {}

  if (typeof _nuxt_axios === 'function') {
    await _nuxt_axios(app.context, inject);
  }

  if (typeof lib_plugin_4ae526b8 === 'function') {
    await lib_plugin_4ae526b8(app.context, inject);
  }

  if (false) {}

  if (typeof meta_plugin === 'function') {
    await meta_plugin(app.context, inject);
  }

  if (typeof /* Cannot get final name for export "default" in "./plugins/vue-moment-lib.js" (known exports: , known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./plugins/vue-moment-lib.js" (known exports: , known reexports: ) */ undefined(app.context, inject);
  }

  if (false) {}

  if (typeof vue_analytics === 'function') {
    await vue_analytics(app.context, inject);
  }

  if (false) {} // Lock enablePreview in context


  if (false) {} // If server-side, wait for async component to be resolved first


  if ( true && ssrContext && ssrContext.url) {
    await new Promise((resolve, reject) => {
      router.push(ssrContext.url, resolve, () => {
        // navigated to a different route in router guard
        const unregister = router.afterEach(async (to, from, next) => {
          ssrContext.url = to.fullPath;
          app.context.route = await getRouteData(to);
          app.context.params = to.params || {};
          app.context.query = to.query || {};
          unregister();
          resolve();
        });
      });
    });
  }

  return {
    app,
    router
  };
}


// CONCATENATED MODULE: ./.nuxt/components/nuxt-link.server.js

/* harmony default export */ var nuxt_link_server = ({
  name: 'NuxtLink',
  extends: external_vue_default.a.component('RouterLink'),
  props: {
    prefetch: {
      type: Boolean,
      default: true
    },
    noPrefetch: {
      type: Boolean,
      default: false
    }
  }
});
// CONCATENATED MODULE: ./.nuxt/server.js







 // should be included after ./index.js
// Update serverPrefetch strategy

external_vue_default.a.config.optionMergeStrategies.serverPrefetch = external_vue_default.a.config.optionMergeStrategies.created; // Fetch mixin

if (!external_vue_default.a.__nuxt__fetch__mixin__) {
  external_vue_default.a.mixin(fetch_server);
  external_vue_default.a.__nuxt__fetch__mixin__ = true;
} // Component: <NuxtLink>


external_vue_default.a.component(nuxt_link_server.name, nuxt_link_server);
external_vue_default.a.component('NLink', nuxt_link_server);

if (!global.fetch) {
  global.fetch = external_node_fetch_default.a;
}

const noopApp = () => new external_vue_default.a({
  render: h => h('div')
});

function server_urlJoin() {
  return Array.prototype.slice.call(arguments).join('/').replace(/\/+/g, '/');
}

const createNext = ssrContext => opts => {
  // If static target, render on client-side
  ssrContext.redirected = opts;

  if (ssrContext.target === 'static' || !ssrContext.res) {
    ssrContext.nuxt.serverRendered = false;
    return;
  }

  opts.query = Object(external_querystring_["stringify"])(opts.query);
  opts.path = opts.path + (opts.query ? '?' + opts.query : '');
  const routerBase = '/';

  if (!opts.path.startsWith('http') && routerBase !== '/' && !opts.path.startsWith(routerBase)) {
    opts.path = server_urlJoin(routerBase, opts.path);
  } // Avoid loop redirect


  if (opts.path === ssrContext.url) {
    ssrContext.redirected = false;
    return;
  }

  ssrContext.res.writeHead(opts.status, {
    Location: opts.path
  });
  ssrContext.res.end();
}; // This exported function will be called by `bundleRenderer`.
// This is where we perform data-prefetching to determine the
// state of our application before actually rendering it.
// Since data fetching is async, this function is expected to
// return a Promise that resolves to the app instance.


/* harmony default export */ var server = __webpack_exports__["default"] = (async ssrContext => {
  // Create ssrContext.next for simulate next() of beforeEach() when wanted to redirect
  ssrContext.redirected = false;
  ssrContext.next = createNext(ssrContext); // Used for beforeNuxtRender({ Components, nuxtState })

  ssrContext.beforeRenderFns = []; // Nuxt object (window.{{globals.context}}, defaults to window.__NUXT__)

  ssrContext.nuxt = {
    layout: 'default',
    data: [],
    fetch: [],
    error: null,
    serverRendered: true,
    routePath: ''
  }; // Remove query from url is static target

  if (false) {} // Public runtime config


  ssrContext.nuxt.config = ssrContext.runtimeConfig.public; // Create the app definition and the instance (created for each request)

  const {
    app,
    router
  } = await createApp(ssrContext, { ...ssrContext.runtimeConfig.public,
    ...ssrContext.runtimeConfig.private
  });

  const _app = new external_vue_default.a(app); // Add ssr route path to nuxt context so we can account for page navigation between ssr and csr


  ssrContext.nuxt.routePath = app.context.route.path; // Add meta infos (used in renderer.js)

  ssrContext.meta = _app.$meta(); // Keep asyncData for each matched component in ssrContext (used in app/utils.js via this.$ssrContext)

  ssrContext.asyncData = {};

  const beforeRender = async () => {
    // Call beforeNuxtRender() methods
    await Promise.all(ssrContext.beforeRenderFns.map(fn => promisify(fn, {
      Components,
      nuxtState: ssrContext.nuxt
    })));
  };

  const renderErrorPage = async () => {
    // Don't server-render the page in static target
    if (ssrContext.target === 'static') {
      ssrContext.nuxt.serverRendered = false;
    } // Load layout for error page


    const layout = (nuxt_error.options || nuxt_error).layout;
    const errLayout = typeof layout === 'function' ? layout.call(nuxt_error, app.context) : layout;
    ssrContext.nuxt.layout = errLayout || 'default';
    await _app.loadLayout(errLayout);

    _app.setLayout(errLayout);

    await beforeRender();
    return _app;
  };

  const render404Page = () => {
    app.context.error({
      statusCode: 404,
      path: ssrContext.url,
      message: 'This page could not be found'
    });
    return renderErrorPage();
  }; // Components are already resolved by setContext -> getRouteData (app/utils.js)


  const Components = getMatchedComponents(router.match(ssrContext.url));
  /*
  ** Call global middleware (nuxt.config.js)
  */

  let midd = [];
  midd = midd.map(name => {
    if (typeof name === 'function') {
      return name;
    }

    if (typeof _nuxt_middleware[name] !== 'function') {
      app.context.error({
        statusCode: 500,
        message: 'Unknown middleware ' + name
      });
    }

    return _nuxt_middleware[name];
  });
  await middlewareSeries(midd, app.context); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  /*
  ** Set layout
  */


  let layout = Components.length ? Components[0].options.layout : nuxt_error.layout;

  if (typeof layout === 'function') {
    layout = layout(app.context);
  }

  await _app.loadLayout(layout);

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }

  layout = _app.setLayout(layout);
  ssrContext.nuxt.layout = _app.layoutName;
  /*
  ** Call middleware (layout + pages)
  */

  midd = [];
  layout = sanitizeComponent(layout);

  if (layout.options.middleware) {
    midd = midd.concat(layout.options.middleware);
  }

  Components.forEach(Component => {
    if (Component.options.middleware) {
      midd = midd.concat(Component.options.middleware);
    }
  });
  midd = midd.map(name => {
    if (typeof name === 'function') {
      return name;
    }

    if (typeof _nuxt_middleware[name] !== 'function') {
      app.context.error({
        statusCode: 500,
        message: 'Unknown middleware ' + name
      });
    }

    return _nuxt_middleware[name];
  });
  await middlewareSeries(midd, app.context); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  /*
  ** Call .validate()
  */


  let isValid = true;

  try {
    for (const Component of Components) {
      if (typeof Component.options.validate !== 'function') {
        continue;
      }

      isValid = await Component.options.validate(app.context);

      if (!isValid) {
        break;
      }
    }
  } catch (validationError) {
    // ...If .validate() threw an error
    app.context.error({
      statusCode: validationError.statusCode || '500',
      message: validationError.message
    });
    return renderErrorPage();
  } // ...If .validate() returned false


  if (!isValid) {
    // Render a 404 error page
    return render404Page();
  } // If no Components found, returns 404


  if (!Components.length) {
    return render404Page();
  } // Call asyncData & fetch hooks on components matched by the route.


  const asyncDatas = await Promise.all(Components.map(Component => {
    const promises = []; // Call asyncData(context)

    if (Component.options.asyncData && typeof Component.options.asyncData === 'function') {
      const promise = promisify(Component.options.asyncData, app.context);
      promise.then(asyncDataResult => {
        ssrContext.asyncData[Component.cid] = asyncDataResult;
        applyAsyncData(Component);
        return asyncDataResult;
      });
      promises.push(promise);
    } else {
      promises.push(null);
    } // Call fetch(context)


    if (Component.options.fetch && Component.options.fetch.length) {
      promises.push(Component.options.fetch(app.context));
    } else {
      promises.push(null);
    }

    return Promise.all(promises);
  })); // datas are the first row of each

  ssrContext.nuxt.data = asyncDatas.map(r => r[0] || {}); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  } // Call beforeNuxtRender methods & add store state


  await beforeRender();
  return _app;
});

/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Buttons.vue?vue&type=template&id=4bb0c290&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<button id=\"slideBack\" type=\"button\" data-v-4bb0c290><img"+(_vm._ssrAttr("src",__webpack_require__(20)))+" alt data-v-4bb0c290></button> <button id=\"slide\" type=\"button\" data-v-4bb0c290><img"+(_vm._ssrAttr("src",__webpack_require__(21)))+" alt data-v-4bb0c290></button> <button id=\"shop-btn\" type=\"button\" data-v-4bb0c290><span data-v-4bb0c290>DROPPING MONDAY,JUNE 22ND</span>DOWNLOAD OPEN SOURCE PATTERN\n  </button> <div id=\"popup-overlay\" class=\"hide\" data-v-4bb0c290><div class=\"popup-content\" data-v-4bb0c290><div class=\"inner-top\" data-v-4bb0c290><strong data-v-4bb0c290>MSCHF X GARMENT PATTERN</strong><img"+(_vm._ssrAttr("src",__webpack_require__(58)))+" alt data-v-4bb0c290> <div data-v-4bb0c290><a href=\"/MSCHFX_CutPattern_v2.pdf\" target=\"_blank\" data-v-4bb0c290>GET PATTERN</a></div> <span class=\"close-btn\" data-v-4bb0c290><strong data-v-4bb0c290>X</strong></span></div> <div class=\"inner-bottom\" data-v-4bb0c290><span data-v-4bb0c290><strong data-v-4bb0c290>MSCHF X WAS MSCHF DROP #25</strong></span>\n        Every drop is different and we never do the same thing twice. <br data-v-4bb0c290>\n        Download the MSCHF app to hear about drops early.\n        <div class=\"text-input\" data-v-4bb0c290><input type=\"text\" placeholder=\"ENTER PHONE NUMBER\" data-v-4bb0c290><a href=\"#\" data-v-4bb0c290>TEXT ME THE MSCHF APP</a></div></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Buttons.vue?vue&type=template&id=4bb0c290&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Buttons.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Buttonsvue_type_script_lang_js_ = ({
  mounted() {
    window.addEventListener("scroll", this.onScroll, true);
    document.getElementById("slideBack").classList.add("disabled"); // First we get the viewport height and we multiple it by 1% to get a value for a vh unit

    let vh = window.innerHeight * 0.01; // Then we set the value in the --vh custom property to the root of the document

    document.getElementById("popup-overlay").style.setProperty("--vh", `${vh}px`);
    window.addEventListener("resize", () => {
      let vh = window.innerHeight * 0.01;
      document.getElementById("popup-overlay").style.setProperty("--vh", `${vh}px`);
    });
  },

  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll, true);
    document.getElementById("slideBack").classList.add("disabled");
    document.getElementById("slide").classList.remove("disabled");
    document.getElementById("slideBack").classList.remove("show");
    document.getElementById("slide").classList.remove("show");
  },

  methods: {
    onScroll() {
      let container = document.getElementById("container");

      if (container.scrollLeft + container.offsetWidth === container.scrollWidth) {
        document.getElementById("slide").className = "disabled";
      } else if (container.scrollLeft === 0) {
        document.getElementById("slideBack").className = "disabled";
      } else {
        document.getElementById("slideBack").className = "fadeIn";
        document.getElementById("slide").className = "fadeIn";
      }
    },

    slide() {
      var container = document.getElementById("container");
      this.sideScroll(container, "right", 10, 250, 10);
    },

    slideBack() {
      var container = document.getElementById("container");
      this.sideScroll(container, "left", 10, 250, 10);
    },

    sideScroll(element, direction, speed, distance, step) {
      var scrollAmount = 0;
      var slideTimer = setInterval(function () {
        if (direction == "left") {
          element.scrollLeft -= step;
        } else {
          element.scrollLeft += step;
        }

        scrollAmount += step;

        if (scrollAmount >= distance) {
          window.clearInterval(slideTimer);
        }
      }, speed);
    },

    modal() {
      document.getElementById("popup-overlay").className = "show";
    },

    modalClose() {
      document.getElementById("popup-overlay").className = "hide";
    },

    isModal() {
      let container = document.getElementById("container");

      if (container.scrollLeft + container.offsetWidth === container.scrollWidth) {
        document.getElementById("shop-btn").animate([// keyframes
        {
          opacity: "0"
        }], {
          // timing options
          duration: 1000,
          // easing: "cubic-bezier(.17,.67,.9,.34)",
          easing: "ease"
        });
        setTimeout(function () {
          document.getElementById("shop-btn").style.display = "none";
        }, 1000);
      } else if (container.scrollLeft === 0) {
        document.getElementById("shop-btn").animate([// keyframes
        {
          opacity: "0"
        }], {
          // timing options
          duration: 1000,
          // easing: "cubic-bezier(.17,.67,.9,.34)",
          easing: "ease"
        });
        setTimeout(function () {
          document.getElementById("shop-btn").style.display = "none";
        }, 1000);
      } else {
        document.getElementById("shop-btn").style.display = "flex"; //   "opacity 1s ease";

        document.getElementById("shop-btn").animate([// keyframes
        {
          opacity: "1"
        }], {
          // timing options
          duration: 1000,
          // easing: "cubic-bezier(.17,.67,.9,.34)",
          easing: "ease"
        });
      }
    },

    fadeOut(el, speed) {
      var seconds = speed / 1000;
      el.style.transition = "opacity " + seconds + "s ease";
      el.style.opacity = 0;
      setTimeout(function () {
        // el.parentNode.removeChild(el);
        el.style.display = "none";
      }, speed);
    },

    fadeIn(el, speed) {
      var seconds = speed / 1000;
      console.log(el.style.opacity);
      el.style.display = "flex";
      el.style.transition = "opacity " + seconds + "s ease";
      setTimeout(function () {
        el.style.opacity = 1;
      }, speed);
    }

  }
});
// CONCATENATED MODULE: ./components/Buttons.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Buttonsvue_type_script_lang_js_ = (Buttonsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Buttons.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(59)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Buttonsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "4bb0c290",
  "7287925e"
  
)

/* harmony default export */ var Buttons = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Buttonsnoshop.vue?vue&type=template&id=43015184&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<button id=\"slideBack\" type=\"button\" data-v-43015184><img"+(_vm._ssrAttr("src",__webpack_require__(20)))+" alt data-v-43015184></button> <button id=\"slide\" type=\"button\" data-v-43015184><img"+(_vm._ssrAttr("src",__webpack_require__(21)))+" alt data-v-43015184></button>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Buttonsnoshop.vue?vue&type=template&id=43015184&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Buttonsnoshop.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Buttonsnoshopvue_type_script_lang_js_ = ({
  mounted() {
    window.addEventListener("scroll", this.onScroll, true);
    document.getElementById("slideBack").classList.add("disabled");
  },

  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll, true);
    document.getElementById("slideBack").classList.add("disabled");
    document.getElementById("slide").classList.remove("disabled");
  },

  methods: {
    onScroll() {
      let container = document.getElementById("container");

      if (container.scrollLeft + container.offsetWidth === container.scrollWidth) {
        document.getElementById("slide").className = "disabled";
      } else if (container.scrollLeft === 0) {
        document.getElementById("slideBack").className = "disabled";
      } else {
        document.getElementById("slideBack").className = "fadeIn";
        document.getElementById("slide").className = "fadeIn";
      }
    },

    slide() {
      var container = document.getElementById("container");
      this.sideScroll(container, "right", 10, 250, 10);
    },

    slideBack() {
      var container = document.getElementById("container");
      this.sideScroll(container, "left", 10, 250, 10);
    },

    sideScroll(element, direction, speed, distance, step) {
      var scrollAmount = 0;
      var slideTimer = setInterval(function () {
        if (direction == "left") {
          element.scrollLeft -= step;
        } else {
          element.scrollLeft += step;
        }

        scrollAmount += step;

        if (scrollAmount >= distance) {
          window.clearInterval(slideTimer);
        }
      }, speed);
    }

  }
});
// CONCATENATED MODULE: ./components/Buttonsnoshop.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Buttonsnoshopvue_type_script_lang_js_ = (Buttonsnoshopvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Buttonsnoshop.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(65)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Buttonsnoshopvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "43015184",
  "fa975ad6"
  
)

/* harmony default export */ var Buttonsnoshop = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ButtonManifesto.vue?vue&type=template&id=bc33fb02&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<button id=\"slideBack\" type=\"button\" data-v-bc33fb02><img"+(_vm._ssrAttr("src",__webpack_require__(20)))+" alt data-v-bc33fb02></button> <button id=\"slide\" type=\"button\" data-v-bc33fb02><img"+(_vm._ssrAttr("src",__webpack_require__(21)))+" alt data-v-bc33fb02></button>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/ButtonManifesto.vue?vue&type=template&id=bc33fb02&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ButtonManifesto.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var ButtonManifestovue_type_script_lang_js_ = ({
  mounted() {
    window.addEventListener("scroll", this.onScroll, true);
    document.getElementById("slideBack").classList.add("disabled");
  },

  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll, true);
    document.getElementById("slideBack").classList.add("disabled");
    document.getElementById("slide").classList.remove("disabled");
  },

  methods: {
    onScroll() {
      let container = document.getElementById("container");

      if (container.scrollLeft + container.offsetWidth === container.scrollWidth) {
        document.getElementById("slide").className = "disabled";
      } else if (container.scrollLeft === 0) {
        document.getElementById("slideBack").className = "disabled";
      } else {
        document.getElementById("slideBack").className = "fadeIn";
        document.getElementById("slide").className = "fadeIn";
      }
    },

    slide() {
      var dis = document.querySelector(".inner-section-mobile").clientWidth;
      var container = document.getElementById("container");

      if (window.innerWidth < 600) {
        this.sideScroll(container, "right", 10, dis / 8 - 10, 10);
      } else {
        this.sideScroll(container, "right", 10, 250, 10);
      }
    },

    slideBack() {
      var dis = document.querySelector(".inner-section-mobile").clientWidth;
      var container = document.getElementById("container");

      if (window.innerWidth < 600) {
        this.sideScroll(container, "left", 70, dis / 8 - 10, 10);
      } else {
        this.sideScroll(container, "left", 70, 250, 10);
      }
    },

    sideScroll(element, direction, speed, distance, step) {
      var scrollAmount = 0;
      var slideTimer = setInterval(function () {
        if (direction == "left") {
          element.scrollLeft -= step;
        } else {
          element.scrollLeft += step;
        }

        scrollAmount += step;

        if (scrollAmount >= distance) {
          window.clearInterval(slideTimer);
        }
      }, speed);
    }

  }
});
// CONCATENATED MODULE: ./components/ButtonManifesto.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ButtonManifestovue_type_script_lang_js_ = (ButtonManifestovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/ButtonManifesto.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(69)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ButtonManifestovue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "bc33fb02",
  "cc058f2a"
  
)

/* harmony default export */ var ButtonManifesto = __webpack_exports__["default"] = (component.exports);

/***/ })
/******/ ]);
//# sourceMappingURL=server.js.map