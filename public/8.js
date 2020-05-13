(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/Dashboard.vue?vue&type=template&id=af0944b4&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/Dashboard.vue?vue&type=template&id=af0944b4& ***!
  \*******************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container" }, [
    _c("br"),
    _vm._v(" "),
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-xl-6 col-md-6 mb-4" }, [
        _c(
          "div",
          { staticClass: "card border-left-primary shadow h-100 py-2" },
          [
            _c("div", { staticClass: "card-body" }, [
              _c(
                "div",
                { staticClass: "row no-gutters align-items-center" },
                [
                  _vm._m(1),
                  _vm._v(" "),
                  _vm._m(2),
                  _vm._v(" "),
                  _c("router-link", {
                    staticClass: "stretched-link",
                    attrs: { to: "admin/users" }
                  })
                ],
                1
              )
            ])
          ]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-xl-6 col-md-6 mb-4" }, [
        _c(
          "div",
          { staticClass: "card border-left-success shadow h-100 py-2" },
          [
            _c("div", { staticClass: "card-body" }, [
              _c(
                "div",
                { staticClass: "row no-gutters align-items-center" },
                [
                  _vm._m(3),
                  _vm._v(" "),
                  _vm._m(4),
                  _vm._v(" "),
                  _c("router-link", {
                    staticClass: "stretched-link",
                    attrs: { to: "/admin/videos" }
                  })
                ],
                1
              )
            ])
          ]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-xl-6 col-md-6 mb-4" }, [
        _c(
          "div",
          { staticClass: "card border-left-success shadow h-100 py-2" },
          [
            _c("div", { staticClass: "card-body" }, [
              _c(
                "div",
                { staticClass: "row no-gutters align-items-center" },
                [
                  _vm._m(5),
                  _vm._v(" "),
                  _vm._m(6),
                  _vm._v(" "),
                  _c("router-link", {
                    staticClass: "stretched-link",
                    attrs: { to: "/admin/categories" }
                  })
                ],
                1
              )
            ])
          ]
        )
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "jumbotron" }, [
      _c("h1", [_vm._v("Welcome, Admin")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col mr-2" }, [
      _c(
        "div",
        {
          staticClass:
            "text-xs font-weight-bold text-primary text-uppercase mb-1"
        },
        [_vm._v("QUẢN LÝ NGƯỜI DÙNG")]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "h5 mb-0 font-weight-bold text-gray-800" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-auto" }, [
      _c("i", { staticClass: "fas fa-users fa-2x text-gray-300" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col mr-2" }, [
      _c(
        "div",
        {
          staticClass:
            "text-xs font-weight-bold text-success text-uppercase mb-1"
        },
        [_vm._v("QUẢN LÝ VIDEO")]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "h5 mb-0 font-weight-bold text-gray-800" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-auto" }, [
      _c("i", { staticClass: "fas fa-video fa-2x text-gray-300" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col mr-2" }, [
      _c(
        "div",
        {
          staticClass:
            "text-xs font-weight-bold text-danger text-uppercase mb-1"
        },
        [_vm._v("QUẢN LÝ CATEGORY")]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "h5 mb-0 font-weight-bold text-gray-800" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-auto" }, [
      _c("i", { staticClass: "fas fa-video fa-2x text-gray-300" })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/admin/Dashboard.vue":
/*!******************************************!*\
  !*** ./resources/js/admin/Dashboard.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Dashboard_vue_vue_type_template_id_af0944b4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=template&id=af0944b4& */ "./resources/js/admin/Dashboard.vue?vue&type=template&id=af0944b4&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _Dashboard_vue_vue_type_template_id_af0944b4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Dashboard_vue_vue_type_template_id_af0944b4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/Dashboard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/admin/Dashboard.vue?vue&type=template&id=af0944b4&":
/*!*************************************************************************!*\
  !*** ./resources/js/admin/Dashboard.vue?vue&type=template&id=af0944b4& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_af0944b4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=template&id=af0944b4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/Dashboard.vue?vue&type=template&id=af0944b4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_af0944b4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_af0944b4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);