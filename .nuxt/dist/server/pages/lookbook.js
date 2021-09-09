exports.ids = [2];
exports.modules = {

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/lookbook.vue?vue&type=template&id=f8773ce8&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<ul id=\"lookbook\" data-v-f8773ce8></ul>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/lookbook.vue?vue&type=template&id=f8773ce8&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/lookbook.vue?vue&type=script&lang=js&
//
//
//
//
//
//
/* harmony default export */ var lookbookvue_type_script_lang_js_ = ({
  layout: "lookbook",
  mounted: function () {
    this.add_el(); //method1 will execute at pageload
    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit

    let vh = window.innerHeight * 0.01; // Then we set the value in the --vh custom property to the root of the document

    document.getElementById("container").style.setProperty("--vh", `${vh}px`);
    window.addEventListener("resize", () => {
      let vh = window.innerHeight * 0.01;
      document.getElementById("container").style.setProperty("--vh", `${vh}px`);
    });
  },
  methods: {
    add_el() {
      if (window.innerWidth > 600) {
        let container = document.getElementById("lookbook");
        let i = 0;

        do {
          container.appendChild(document.createElement("li"));
          i++;
        } while (i < 60);

        let index = 1;
        [...container.children].forEach(li => {
          li.innerHTML = "<img src='/images/shirts/" + index + ".jpg' alt=' ' />";
          li.style.display = "inline";
          li.style.margin = "10px";
          li.childNodes[0].style.height = "25vh";
          li.childNodes[0].style.border = "1px solid #190dfe";
          li.childNodes[0].style.boxShadow = "10px 10px 10px rgba(25, 13, 254, 0.55), 1px 2px 5px 1.5px rgba(0, 0, 0, 0.3)";
          index++;
        });
        container.appendChild(document.createElement("div"));
        container.lastChild.style.width = "35px";
        container.lastChild.style.height = "100px";
      } else {
        let container = document.getElementById("lookbook");
        let i = 0;

        do {
          container.appendChild(document.createElement("li"));
          i++;
        } while (i < 60);

        let index = 1;
        [...container.children].forEach(li => {
          li.innerHTML = "<img src='/images/shirts/" + index + ".jpg' alt=' ' />";
          li.style.display = "inline";
          li.style.margin = "5px";
          li.childNodes[0].style.height = "22vh";
          li.childNodes[0].style.border = "1px solid #190dfe";
          li.childNodes[0].style.boxShadow = "10px 10px 10px rgba(25, 13, 254, 0.55), 1px 2px 5px 1.5px rgba(0, 0, 0, 0.3)";
          index++;
        });
        container.appendChild(document.createElement("div"));
        container.lastChild.style.width = "35px";
        container.lastChild.style.height = "100px";
      }
    }

  }
});
// CONCATENATED MODULE: ./pages/lookbook.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_lookbookvue_type_script_lang_js_ = (lookbookvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/lookbook.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(86)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_lookbookvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "f8773ce8",
  "764fcb2e"
  
)

/* harmony default export */ var lookbook = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 76:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(87);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("5f3418a9", content, true, context)
};

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_lookbook_vue_vue_type_style_index_0_id_f8773ce8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_lookbook_vue_vue_type_style_index_0_id_f8773ce8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_lookbook_vue_vue_type_style_index_0_id_f8773ce8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_lookbook_vue_vue_type_style_index_0_id_f8773ce8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_lookbook_vue_vue_type_style_index_0_id_f8773ce8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_lookbook_vue_vue_type_style_index_0_id_f8773ce8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 87:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "#lookbook[data-v-f8773ce8]{display:flex;flex-direction:column;flex-wrap:wrap;justify-content:flex-end;align-items:center;font-size:16px;white-space:normal;vertical-align:top;width:33.33333vh;height:89vh;margin-left:9%}@media screen and (max-width:600px){#lookbook[data-v-f8773ce8]{height:calc(100vh - 50px);height:calc(var(--vh, 1vh)*100 - 50px);margin:25px 0}#lookbook li[data-v-f8773ce8]{margin:5px}#lookbook li img[data-v-f8773ce8]{height:22vh}}", ""]);
// Exports
module.exports = exports;


/***/ })

};;
//# sourceMappingURL=lookbook.js.map