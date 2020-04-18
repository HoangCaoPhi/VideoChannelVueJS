(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/DetailCategories.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/DetailCategories.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/category_service */ "./resources/js/services/category_service.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["id"],
  data: function data() {
    return {
      categories: null
    };
  },
  mounted: function mounted() {
    this.loadCategory();
  },
  methods: {
    loadCategory: function () {
      var _loadCategory = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _services_category_service__WEBPACK_IMPORTED_MODULE_1__["getDetail"](this.id);

              case 3:
                response = _context.sent;
                console.log(response);
                this.categories = response.data;
                console.log(this.categories); // console.log(this.categories);

                _context.next = 12;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](0);
                this.flashMessage.error({
                  title: "Error Message Title",
                  message: "Some Error Occurred, Please Try Again!",
                  time: 5000
                });

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 9]]);
      }));

      function loadCategory() {
        return _loadCategory.apply(this, arguments);
      }

      return loadCategory;
    }()
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/DetailCategories.vue?vue&type=template&id=ea703028&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/DetailCategories.vue?vue&type=template&id=ea703028& ***!
  \**************************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "col-sm-9" }, [
      _c(
        "video",
        { attrs: { width: "800", height: "500", controls: "", autoplay: "" } },
        [
          _c("source", {
            attrs: {
              src:
                _vm.$store.state.serverPath +
                "/storage/" +
                _vm.categories.video,
              type: "video/mp4"
            }
          }),
          _vm._v(" "),
          _c("source", {
            attrs: {
              src:
                _vm.$store.state.serverPath +
                "/storage/" +
                _vm.categories.video,
              type: "video/ogg"
            }
          })
        ]
      ),
      _vm._v(" "),
      _c("h3", { staticClass: "title btn btn-danger btn-block" }, [
        _vm._v(_vm._s(_vm.categories.name))
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/services/category_service.js":
/*!***************************************************!*\
  !*** ./resources/js/services/category_service.js ***!
  \***************************************************/
/*! exports provided: createCategory, loadCategory, loadCategoryProfile, deleteCategory, updateCategory, loadMore, getDetail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCategory", function() { return createCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadCategory", function() { return loadCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadCategoryProfile", function() { return loadCategoryProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteCategory", function() { return deleteCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateCategory", function() { return updateCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadMore", function() { return loadMore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDetail", function() { return getDetail; });
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http_service */ "./resources/js/services/http_service.js");

function createCategory(data) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["httpFile"])().post('/categories', data);
}
function loadCategory() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/categories');
}
function loadCategoryProfile(id) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get("/profile/".concat(id));
}
function deleteCategory(id) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])()["delete"]("/categories/".concat(id));
}
function updateCategory(id, data) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["httpFile"])().post("categories/".concat(id), data);
}
function loadMore(nextPage) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get("categories?page=".concat(nextPage));
}
function getDetail(id) {
  // GET|HEAD  | api/categories/{category}      | categories.show
  console.log(id);
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get("/categories/".concat(id));
}

/***/ }),

/***/ "./resources/js/views/DetailCategories.vue":
/*!*************************************************!*\
  !*** ./resources/js/views/DetailCategories.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DetailCategories_vue_vue_type_template_id_ea703028___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DetailCategories.vue?vue&type=template&id=ea703028& */ "./resources/js/views/DetailCategories.vue?vue&type=template&id=ea703028&");
/* harmony import */ var _DetailCategories_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DetailCategories.vue?vue&type=script&lang=js& */ "./resources/js/views/DetailCategories.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DetailCategories_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DetailCategories_vue_vue_type_template_id_ea703028___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DetailCategories_vue_vue_type_template_id_ea703028___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/DetailCategories.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/DetailCategories.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/views/DetailCategories.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailCategories_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./DetailCategories.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/DetailCategories.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailCategories_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/DetailCategories.vue?vue&type=template&id=ea703028&":
/*!********************************************************************************!*\
  !*** ./resources/js/views/DetailCategories.vue?vue&type=template&id=ea703028& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailCategories_vue_vue_type_template_id_ea703028___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./DetailCategories.vue?vue&type=template&id=ea703028& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/DetailCategories.vue?vue&type=template&id=ea703028&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailCategories_vue_vue_type_template_id_ea703028___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailCategories_vue_vue_type_template_id_ea703028___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);