(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/video/Videos.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/video/Videos.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_video_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/video_service */ "./resources/js/services/video_service.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store */ "./resources/js/store.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  data: function data() {
    return {
      videos: [],
      categories: [],
      Data: {
        name: "",
        image: "",
        video: ""
      },
      checkedNames: [],
      moreExist: false,
      nextPage: 0,
      editVideoData: {
        name: "",
        image: ""
      },
      errors: {}
    };
  },
  mounted: function mounted() {
    this.loadVideoProfile();
    this.loadCategories();
  },
  methods: {
    loadCategories: function () {
      var _loadCategories = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _services_video_service__WEBPACK_IMPORTED_MODULE_1__["loadCategories"]();

              case 3:
                response = _context.sent;
                this.categories = response.data;
                console.log(this.categories);
                _context.next = 10;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](0);

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 8]]);
      }));

      function loadCategories() {
        return _loadCategories.apply(this, arguments);
      }

      return loadCategories;
    }(),
    loadVideoProfile: function () {
      var _loadVideoProfile = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return _services_video_service__WEBPACK_IMPORTED_MODULE_1__["loadVideoProfile"](this.$store.state.profile.id);

              case 3:
                response = _context2.sent;
                // console.log(response);
                this.videos = response.data;
                console.log(this.videos);
                _context2.next = 11;
                break;

              case 8:
                _context2.prev = 8;
                _context2.t0 = _context2["catch"](0);
                this.flashMessage.error({
                  title: "Error Message Title",
                  message: "Some Error Occurred, Please Try Again!",
                  time: 5000
                });

              case 11:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 8]]);
      }));

      function loadVideoProfile() {
        return _loadVideoProfile.apply(this, arguments);
      }

      return loadVideoProfile;
    }(),
    attachImage: function attachImage() {
      // su dung de doc file
      this.Data.image = this.$refs.newVideoImage.files[0];
      this.Data.video = this.$refs.newVideoVideo.files[0];
      var reader = new FileReader();
      reader.addEventListener("load", function () {
        this.$refs.newVideoImageDisplay.src = reader.result;
      }.bind(this), false);
      reader.readAsDataURL(this.Data.image);
    },
    editAttachImage: function editAttachImage() {
      // su dung de doc file
      this.editVideoData.image = this.$refs.editVideoImage.files[0];
      var reader = new FileReader();
      reader.addEventListener("load", function () {
        this.$refs.editVideoImageDisplay.src = reader.result;
      }.bind(this), false);
      reader.readAsDataURL(this.editVideoData.image);
    },
    hideNewVideoModal: function hideNewVideoModal() {
      this.$refs["newVideo"].hide();
    },
    hideEditVideoModal: function hideEditVideoModal() {
      this.$refs["editVideo"].hide();
    },
    editVideoModal: function editVideoModal() {
      this.$refs["editVideo"].show();
    },
    newVideoModal: function newVideoModal() {
      this.$refs["newVideo"].show();
    },
    createVideo: function () {
      var _createVideo = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var formData, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                formData = new FormData();
                formData.append("name", this.Data.name);
                formData.append("image", this.Data.image);
                formData.append("video", this.Data.video);
                formData.append("categories", this.checkedNames);
                formData.append("user_id", this.$store.state.profile.id);
                _context3.prev = 6;
                _context3.next = 9;
                return _services_video_service__WEBPACK_IMPORTED_MODULE_1__["createVideo"](formData);

              case 9:
                response = _context3.sent;
                this.videos.unshift(response.data);
                this.hideNewVideoModal();
                this.flashMessage.success({
                  message: "Create Video Successed !!",
                  time: 5000
                });
                this.Data = {
                  name: "",
                  image: ""
                };
                _context3.next = 25;
                break;

              case 16:
                _context3.prev = 16;
                _context3.t0 = _context3["catch"](6);
                _context3.t1 = _context3.t0.response.status;
                _context3.next = _context3.t1 === 422 ? 21 : 23;
                break;

              case 21:
                this.errors = _context3.t0.response.data.errors;
                return _context3.abrupt("break", 25);

              case 23:
                this.flashMessage.error({
                  title: "Error Message Title",
                  message: "Some Error Occurred, Please Try Again!",
                  time: 5000
                });
                return _context3.abrupt("break", 25);

              case 25:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[6, 16]]);
      }));

      function createVideo() {
        return _createVideo.apply(this, arguments);
      }

      return createVideo;
    }(),
    deleteVideo: function () {
      var _deleteVideo = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(video) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                if (window.confirm("Are you sure you want to delete ".concat(video.name, " ?"))) {
                  _context4.next = 2;
                  break;
                }

                return _context4.abrupt("return");

              case 2:
                _context4.prev = 2;
                _context4.next = 5;
                return _services_video_service__WEBPACK_IMPORTED_MODULE_1__["deleteVideo"](video.id);

              case 5:
                this.videos = this.videos.filter(function (obj) {
                  return obj.id != video.id;
                });
                this.loadVideo();
                this.flashMessage.success({
                  message: "Delete Video Successed !!",
                  time: 5000
                });
                _context4.next = 13;
                break;

              case 10:
                _context4.prev = 10;
                _context4.t0 = _context4["catch"](2);
                this.flashMessage.error({
                  title: "Error Message Title",
                  message: _context4.t0.response.data.message,
                  time: 5000
                });

              case 13:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[2, 10]]);
      }));

      function deleteVideo(_x) {
        return _deleteVideo.apply(this, arguments);
      }

      return deleteVideo;
    }(),
    editVideo: function editVideo(videos) {
      this.editVideoData = _objectSpread({}, videos);
      this.editVideoModal();
    },
    updateVideo: function () {
      var _updateVideo = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
        var formData, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                formData = new FormData();
                formData.append("name", this.editVideoData.name);
                formData.append("image", this.editVideoData.image);
                formData.append("_method", "put");
                _context5.next = 7;
                return _services_video_service__WEBPACK_IMPORTED_MODULE_1__["updateVideo"](this.editVideoData.id, formData);

              case 7:
                response = _context5.sent;
                this.videos.map(function (video) {
                  if (video.id == response.data.id) {
                    // video = response.data;
                    for (var key in response.data) {
                      video[key] = response.data[key];
                    }
                  }
                });
                this.hideEditVideoModal();
                this.flashMessage.success({
                  message: "Update Video Successed !!",
                  time: 5000
                });
                _context5.next = 16;
                break;

              case 13:
                _context5.prev = 13;
                _context5.t0 = _context5["catch"](0);
                this.flashMessage.error({
                  title: "Error Message Title",
                  message: _context5.t0.response.data.message,
                  time: 5000
                });

              case 16:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this, [[0, 13]]);
      }));

      function updateVideo() {
        return _updateVideo.apply(this, arguments);
      }

      return updateVideo;
    }(),
    loadMore: function () {
      var _loadMore = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6() {
        var _this = this;

        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.prev = 0;
                _context6.next = 3;
                return _services_video_service__WEBPACK_IMPORTED_MODULE_1__["loadMore"](this.nextPage);

              case 3:
                response = _context6.sent;

                if (response.current_page < response.data.last_page) {
                  this.moreExist = true;
                  this.nextPage = response.data.current_page + 1;
                } else {
                  this.moreExist = false;
                }

                response.data.data.forEach(function (data) {
                  _this.videos.push(data);
                });
                _context6.next = 11;
                break;

              case 8:
                _context6.prev = 8;
                _context6.t0 = _context6["catch"](0);
                this.flashMessage.error({
                  title: "Error Message Title",
                  message: "Some Error Occurred",
                  time: 5000
                });

              case 11:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this, [[0, 8]]);
      }));

      function loadMore() {
        return _loadMore.apply(this, arguments);
      }

      return loadMore;
    }()
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/video/Videos.vue?vue&type=template&id=29b3420b&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/video/Videos.vue?vue&type=template&id=29b3420b& ***!
  \**********************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    { staticClass: "container" },
    [
      _c("div", { staticClass: "row justify-content-center" }, [
        _c("div", { staticClass: "col-md-8" }, [
          _c("div", { staticClass: "card" }, [
            _c(
              "div",
              { staticClass: "card-header d-flex" },
              [
                _vm._m(0),
                _vm._v(" "),
                _c(
                  "b-button",
                  {
                    staticClass: "btn btn-danger btn-sm ml-auto",
                    on: { click: _vm.newVideoModal }
                  },
                  [
                    _c("span", [_c("i", { staticClass: "fa fa-plus" })]),
                    _vm._v(" Upload Video\n          ")
                  ]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c("div", { staticClass: "card-body" }, [
              _c("table", { staticClass: "table" }, [
                _vm._m(1),
                _vm._v(" "),
                _c(
                  "tbody",
                  _vm._l(_vm.videos, function(video, index) {
                    return _c("tr", { key: index }, [
                      _c("td", [_vm._v(_vm._s(index + 1))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(video.name))]),
                      _vm._v(" "),
                      _c("td", [
                        _c("img", {
                          staticClass: "table-image",
                          attrs: {
                            src:
                              _vm.$store.state.serverPath +
                              "/storage/" +
                              video.image,
                            alt: video.name
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-primary",
                            on: {
                              click: function($event) {
                                return _vm.editVideo(video)
                              }
                            }
                          },
                          [_vm._m(2, true)]
                        ),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-danger",
                            on: {
                              click: function($event) {
                                return _vm.deleteVideo(video)
                              }
                            }
                          },
                          [_vm._m(3, true)]
                        )
                      ])
                    ])
                  }),
                  0
                )
              ]),
              _vm._v(" "),
              _c(
                "div",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.moreExist,
                      expression: "moreExist"
                    }
                  ],
                  staticClass: "text-center"
                },
                [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-primary btn-sm",
                      attrs: { type: "button" },
                      on: { click: _vm.loadMore }
                    },
                    [
                      _c("span", { staticClass: "fa fa-arrow-down" }),
                      _vm._v("Load More\n            ")
                    ]
                  )
                ]
              )
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          ref: "newVideo",
          attrs: { title: "Add New Video", "hide-footer": "" }
        },
        [
          _c(
            "form",
            {
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.createVideo($event)
                }
              }
            },
            [
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "name" } }, [_vm._v("Enter Name")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.Data.name,
                      expression: "Data.name"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { id: "name", placeholder: "Enter Video Name" },
                  domProps: { value: _vm.Data.name },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.Data, "name", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _vm.errors.name
                  ? _c("div", { staticClass: "invalid-feedback" }, [
                      _vm._v(_vm._s(_vm.errors.name[0]))
                    ])
                  : _vm._e()
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "image" } }, [
                  _c("span", [_c("i", { staticClass: "fas fa-images" })]),
                  _vm._v(" Enter Image\n        ")
                ]),
                _vm._v(" "),
                _c("br"),
                _vm._v(" "),
                _vm.Data.image.name
                  ? _c("div", [
                      _c("img", {
                        ref: "newVideoImageDisplay",
                        staticClass: "w-150px",
                        attrs: { src: "" }
                      })
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _c("input", {
                  ref: "newVideoImage",
                  attrs: { type: "file", id: "image" },
                  on: { change: _vm.attachImage }
                }),
                _vm._v(" "),
                _vm.errors.image
                  ? _c("div", { staticClass: "invalid-feedback" }, [
                      _vm._v(_vm._s(_vm.errors.image[0]))
                    ])
                  : _vm._e()
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "video" } }, [
                  _c("span", [_c("i", { staticClass: "fas fa-file-video" })]),
                  _vm._v(" Enter Video\n        ")
                ]),
                _vm._v(" "),
                _c("br"),
                _vm._v(" "),
                _c("input", {
                  ref: "newVideoVideo",
                  attrs: { type: "file", id: "video" },
                  on: { change: _vm.attachImage }
                }),
                _vm._v(" "),
                _vm.errors.video
                  ? _c("div", { staticClass: "invalid-feedback" }, [
                      _vm._v(_vm._s(_vm.errors.video[0]))
                    ])
                  : _vm._e()
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "form-group" },
                [
                  _c("label", { attrs: { for: "sel1" } }, [
                    _vm._v("Select Category:")
                  ]),
                  _vm._v(" "),
                  _vm._l(_vm.categories, function(category, index) {
                    return _c("span", { key: index }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.checkedNames,
                            expression: "checkedNames"
                          }
                        ],
                        attrs: { type: "checkbox" },
                        domProps: {
                          value: category.id,
                          checked: Array.isArray(_vm.checkedNames)
                            ? _vm._i(_vm.checkedNames, category.id) > -1
                            : _vm.checkedNames
                        },
                        on: {
                          change: function($event) {
                            var $$a = _vm.checkedNames,
                              $$el = $event.target,
                              $$c = $$el.checked ? true : false
                            if (Array.isArray($$a)) {
                              var $$v = category.id,
                                $$i = _vm._i($$a, $$v)
                              if ($$el.checked) {
                                $$i < 0 &&
                                  (_vm.checkedNames = $$a.concat([$$v]))
                              } else {
                                $$i > -1 &&
                                  (_vm.checkedNames = $$a
                                    .slice(0, $$i)
                                    .concat($$a.slice($$i + 1)))
                              }
                            } else {
                              _vm.checkedNames = $$c
                            }
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c("label", [_vm._v(_vm._s(category.name) + "  ")])
                    ])
                  })
                ],
                2
              ),
              _vm._v(" "),
              _c("span", [
                _vm._v("Checked names: " + _vm._s(_vm.checkedNames))
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "text-right" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-danger",
                    attrs: { type: "button" },
                    on: { click: _vm.hideNewVideoModal }
                  },
                  [_vm._v("Cancel")]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  { staticClass: "btn btn-success", attrs: { type: "submit" } },
                  [
                    _c("span", { staticClass: "fa fa-check" }),
                    _vm._v("Save\n        ")
                  ]
                )
              ])
            ]
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "b-modal",
        { ref: "editVideo", attrs: { title: "Edit Video", "hide-footer": "" } },
        [
          _c(
            "form",
            {
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.updateVideo($event)
                }
              }
            },
            [
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "name" } }, [_vm._v("Enter Name")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.editVideoData.name,
                      expression: "editVideoData.name"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { id: "name", placeholder: "Enter Video Name" },
                  domProps: { value: _vm.editVideoData.name },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.editVideoData, "name", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _vm.errors.name
                  ? _c("div", { staticClass: "invalid-feedback" }, [
                      _vm._v(_vm._s(_vm.errors.name[0]))
                    ])
                  : _vm._e()
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-group" }, [
                _c("div", [
                  _c("img", {
                    ref: "editVideoImageDisplay",
                    staticClass: "w-150px",
                    attrs: {
                      src:
                        _vm.$store.state.serverPath +
                        "/storage/" +
                        _vm.editVideoData.image
                    }
                  })
                ]),
                _vm._v(" "),
                _c("br"),
                _vm._v(" "),
                _c("input", {
                  ref: "editVideoImage",
                  attrs: { type: "file", id: "image" },
                  on: { change: _vm.editAttachImage }
                }),
                _vm._v(" "),
                _vm.errors.image
                  ? _c("div", { staticClass: "invalid-feedback" }, [
                      _vm._v(_vm._s(_vm.errors.image[0]))
                    ])
                  : _vm._e()
              ]),
              _vm._v(" "),
              _c("hr"),
              _vm._v(" "),
              _c("div", { staticClass: "text-right" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-danger",
                    attrs: { type: "button" },
                    on: { click: _vm.hideEditVideoModal }
                  },
                  [_vm._v("Cancel")]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  { staticClass: "btn btn-success", attrs: { type: "submit" } },
                  [
                    _c("span", { staticClass: "fa fa-check" }),
                    _vm._v("Update\n        ")
                  ]
                )
              ])
            ]
          )
        ]
      )
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", [
      _c("i", { staticClass: "fas fa-chart-area" }),
      _vm._v("\n            Video Management\n          ")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("td", [_vm._v("#")]),
        _vm._v(" "),
        _c("td", [_vm._v("Name")]),
        _vm._v(" "),
        _c("td", [_vm._v("Image")]),
        _vm._v(" "),
        _c("td", [_vm._v("Action")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", [_c("i", { staticClass: "fa fa-edit" })])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", [_c("i", { staticClass: "fa fa-trash" })])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/video/Videos.vue":
/*!*********************************************!*\
  !*** ./resources/js/views/video/Videos.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Videos_vue_vue_type_template_id_29b3420b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Videos.vue?vue&type=template&id=29b3420b& */ "./resources/js/views/video/Videos.vue?vue&type=template&id=29b3420b&");
/* harmony import */ var _Videos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Videos.vue?vue&type=script&lang=js& */ "./resources/js/views/video/Videos.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Videos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Videos_vue_vue_type_template_id_29b3420b___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Videos_vue_vue_type_template_id_29b3420b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/video/Videos.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/video/Videos.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/views/video/Videos.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Videos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Videos.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/video/Videos.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Videos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/video/Videos.vue?vue&type=template&id=29b3420b&":
/*!****************************************************************************!*\
  !*** ./resources/js/views/video/Videos.vue?vue&type=template&id=29b3420b& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Videos_vue_vue_type_template_id_29b3420b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Videos.vue?vue&type=template&id=29b3420b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/video/Videos.vue?vue&type=template&id=29b3420b&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Videos_vue_vue_type_template_id_29b3420b___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Videos_vue_vue_type_template_id_29b3420b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);