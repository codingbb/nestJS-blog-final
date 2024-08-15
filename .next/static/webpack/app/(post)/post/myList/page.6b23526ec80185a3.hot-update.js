"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(post)/post/myList/page",{

/***/ "(app-pages-browser)/./app/(post)/post/myList/page.jsx":
/*!*****************************************!*\
  !*** ./app/(post)/post/myList/page.jsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ myList; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _util_AuthContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/AuthContext */ \"(app-pages-browser)/./app/util/AuthContext.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction myList() {\n    _s();\n    const { user } = (0,_util_AuthContext__WEBPACK_IMPORTED_MODULE_2__.useAuth)();\n    const userId = user && user.body[0].id;\n    const [blogPosts, setBlogPosts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [page, setPage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const myBlogPost = async ()=>{\n            try {\n                const res = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"/api/post/myList\", {\n                    params: {\n                        userId\n                    }\n                });\n                console.log(\"resssss \" + JSON.stringify(res));\n                if (res.status === 200) {\n                    console.log(\"성공!!!\");\n                    setBlogPosts(res.data.body); // 블로그 포스트 데이터를 상태에 저장\n                }\n            } catch (error) {\n                if (error.response) {\n                    alert(error.response.data.msg);\n                }\n            }\n        };\n        if (userId) {\n            myBlogPost();\n        }\n    }, [\n        userId\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"max-w-4xl mx-auto py-10\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-4xl font-bold mb-10\",\n                children: \"cos's Blog\"\n            }, void 0, false, {\n                fileName: \"C:\\\\workspace\\\\nextJS-blog-test 222\\\\app\\\\(post)\\\\post\\\\myList\\\\page.jsx\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, this),\n            blogPosts.map((post)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-row mb-8 border rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105 hover:cursor-pointer\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex justify-center\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: \"/img/\".concat(post.thumbnail_file),\n                                alt: post.thumbnail_file,\n                                width: 350,\n                                height: 200\n                            }, void 0, false, {\n                                fileName: \"C:\\\\workspace\\\\nextJS-blog-test 222\\\\app\\\\(post)\\\\post\\\\myList\\\\page.jsx\",\n                                lineNumber: 50,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\workspace\\\\nextJS-blog-test 222\\\\app\\\\(post)\\\\post\\\\myList\\\\page.jsx\",\n                            lineNumber: 49,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"p-6\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    className: \"text-2xl font-bold mb-2\",\n                                    children: post.title\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\workspace\\\\nextJS-blog-test 222\\\\app\\\\(post)\\\\post\\\\myList\\\\page.jsx\",\n                                    lineNumber: 59,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-gray-600 mb-4\",\n                                    children: [\n                                        post.date,\n                                        \" (10:08)\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\workspace\\\\nextJS-blog-test 222\\\\app\\\\(post)\\\\post\\\\myList\\\\page.jsx\",\n                                    lineNumber: 60,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-gray-800 mb-4\",\n                                    children: post.content\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\workspace\\\\nextJS-blog-test 222\\\\app\\\\(post)\\\\post\\\\myList\\\\page.jsx\",\n                                    lineNumber: 61,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"bg-green-500 text-white py-2 px-4 rounded\",\n                                    children: \"Read More\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\workspace\\\\nextJS-blog-test 222\\\\app\\\\(post)\\\\post\\\\myList\\\\page.jsx\",\n                                    lineNumber: 62,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\workspace\\\\nextJS-blog-test 222\\\\app\\\\(post)\\\\post\\\\myList\\\\page.jsx\",\n                            lineNumber: 58,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, post.id, true, {\n                    fileName: \"C:\\\\workspace\\\\nextJS-blog-test 222\\\\app\\\\(post)\\\\post\\\\myList\\\\page.jsx\",\n                    lineNumber: 45,\n                    columnNumber: 9\n                }, this))\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\workspace\\\\nextJS-blog-test 222\\\\app\\\\(post)\\\\post\\\\myList\\\\page.jsx\",\n        lineNumber: 40,\n        columnNumber: 5\n    }, this);\n}\n_s(myList, \"X28zszNsRxXXLM+bXniW4qY9UmQ=\", false, function() {\n    return [\n        _util_AuthContext__WEBPACK_IMPORTED_MODULE_2__.useAuth\n    ];\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC8ocG9zdCkvcG9zdC9teUxpc3QvcGFnZS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFFNEM7QUFDUTtBQUMxQjtBQUVYLFNBQVNJOztJQUN0QixNQUFNLEVBQUVDLElBQUksRUFBRSxHQUFHSCwwREFBT0E7SUFDeEIsTUFBTUksU0FBU0QsUUFBUUEsS0FBS0UsSUFBSSxDQUFDLEVBQUUsQ0FBQ0MsRUFBRTtJQUN0QyxNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR1QsK0NBQVFBLENBQUMsRUFBRTtJQUU3QyxNQUFNLENBQUNVLE1BQU1DLFFBQVEsR0FBR1gsK0NBQVFBLENBQUM7SUFFakNELGdEQUFTQSxDQUFDO1FBQ1IsTUFBTWEsYUFBYTtZQUNqQixJQUFJO2dCQUNGLE1BQU1DLE1BQU0sTUFBTVgsNkNBQUtBLENBQUNZLEdBQUcsQ0FBRSxvQkFBbUI7b0JBQzlDQyxRQUFRO3dCQUFFVjtvQkFBTztnQkFDbkI7Z0JBRUFXLFFBQVFDLEdBQUcsQ0FBQyxhQUFhQyxLQUFLQyxTQUFTLENBQUNOO2dCQUV4QyxJQUFJQSxJQUFJTyxNQUFNLEtBQUssS0FBSztvQkFDdEJKLFFBQVFDLEdBQUcsQ0FBQztvQkFDWlIsYUFBYUksSUFBSVEsSUFBSSxDQUFDZixJQUFJLEdBQUcsc0JBQXNCO2dCQUNyRDtZQUNGLEVBQUUsT0FBT2dCLE9BQU87Z0JBQ2QsSUFBSUEsTUFBTUMsUUFBUSxFQUFFO29CQUNsQkMsTUFBTUYsTUFBTUMsUUFBUSxDQUFDRixJQUFJLENBQUNJLEdBQUc7Z0JBQy9CO1lBQ0Y7UUFDRjtRQUVBLElBQUlwQixRQUFRO1lBQ1ZPO1FBQ0Y7SUFDRixHQUFHO1FBQUNQO0tBQU87SUFFWCxxQkFDRSw4REFBQ3FCO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDQztnQkFBR0QsV0FBVTswQkFBMkI7Ozs7OztZQUd4Q25CLFVBQVVxQixHQUFHLENBQUMsQ0FBQ0MscUJBQ2QsOERBQUNKO29CQUNDQyxXQUFVOztzQ0FHViw4REFBQ0Q7NEJBQUlDLFdBQVU7c0NBQ2IsNEVBQUNJO2dDQUNDQyxLQUFLLFFBQTRCLE9BQXBCRixLQUFLRyxjQUFjO2dDQUNoQ0MsS0FBS0osS0FBS0csY0FBYztnQ0FDeEJFLE9BQU87Z0NBQ1BDLFFBQVE7Ozs7Ozs7Ozs7O3NDQUlaLDhEQUFDVjs0QkFBSUMsV0FBVTs7OENBQ2IsOERBQUNVO29DQUFHVixXQUFVOzhDQUEyQkcsS0FBS1EsS0FBSzs7Ozs7OzhDQUNuRCw4REFBQ0M7b0NBQUVaLFdBQVU7O3dDQUFzQkcsS0FBS1UsSUFBSTt3Q0FBQzs7Ozs7Ozs4Q0FDN0MsOERBQUNEO29DQUFFWixXQUFVOzhDQUFzQkcsS0FBS1csT0FBTzs7Ozs7OzhDQUMvQyw4REFBQ0M7b0NBQU9mLFdBQVU7OENBQTRDOzs7Ozs7Ozs7Ozs7O21CQWYzREcsS0FBS3ZCLEVBQUU7Ozs7Ozs7Ozs7O0FBdUJ0QjtHQS9Ed0JKOztRQUNMRixzREFBT0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwLyhwb3N0KS9wb3N0L215TGlzdC9wYWdlLmpzeD9hZGQ2Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5cclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VBdXRoIH0gZnJvbSBcIi4uLy4uLy4uL3V0aWwvQXV0aENvbnRleHRcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbXlMaXN0KCkge1xyXG4gIGNvbnN0IHsgdXNlciB9ID0gdXNlQXV0aCgpO1xyXG4gIGNvbnN0IHVzZXJJZCA9IHVzZXIgJiYgdXNlci5ib2R5WzBdLmlkO1xyXG4gIGNvbnN0IFtibG9nUG9zdHMsIHNldEJsb2dQb3N0c10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIGNvbnN0IFtwYWdlLCBzZXRQYWdlXSA9IHVzZVN0YXRlKDEpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgbXlCbG9nUG9zdCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYC9hcGkvcG9zdC9teUxpc3RgLCB7XHJcbiAgICAgICAgICBwYXJhbXM6IHsgdXNlcklkIH0sIC8vIOy/vOumrCDtjIzrnbzrr7jthLDroZwgdXNlcklkIOyghOuLrFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcInJlc3Nzc3MgXCIgKyBKU09OLnN0cmluZ2lmeShyZXMpKTtcclxuXHJcbiAgICAgICAgaWYgKHJlcy5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCLshLHqs7UhISFcIik7XHJcbiAgICAgICAgICBzZXRCbG9nUG9zdHMocmVzLmRhdGEuYm9keSk7IC8vIOu4lOuhnOq3uCDtj6zsiqTtirgg642w7J207YSw66W8IOyDge2DnOyXkCDsoIDsnqVcclxuICAgICAgICB9XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgaWYgKGVycm9yLnJlc3BvbnNlKSB7XHJcbiAgICAgICAgICBhbGVydChlcnJvci5yZXNwb25zZS5kYXRhLm1zZyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGlmICh1c2VySWQpIHtcclxuICAgICAgbXlCbG9nUG9zdCgpO1xyXG4gICAgfVxyXG4gIH0sIFt1c2VySWRdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctNHhsIG14LWF1dG8gcHktMTBcIj5cclxuICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNHhsIGZvbnQtYm9sZCBtYi0xMFwiPmNvcydzIEJsb2c8L2gxPlxyXG5cclxuICAgICAgey8qIOqwgSDtj6zsiqTtirjrpbwg67CY67O17ZWY7JesIOugjOuNlOungSAqL31cclxuICAgICAge2Jsb2dQb3N0cy5tYXAoKHBvc3QpID0+IChcclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IG1iLTggYm9yZGVyIHJvdW5kZWQtbGcgb3ZlcmZsb3ctaGlkZGVuIHNoYWRvdy1sZyB0cmFuc2Zvcm0gdHJhbnNpdGlvbi10cmFuc2Zvcm0gZHVyYXRpb24tMzAwIGhvdmVyOnNjYWxlLTEwNSBob3ZlcjpjdXJzb3ItcG9pbnRlclwiXHJcbiAgICAgICAgICBrZXk9e3Bvc3QuaWR9IC8vIOqzoOycoO2VnCBrZXkg7IaN7ISxIOy2lOqwgFxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgc3JjPXtgL2ltZy8ke3Bvc3QudGh1bWJuYWlsX2ZpbGV9YH1cclxuICAgICAgICAgICAgICBhbHQ9e3Bvc3QudGh1bWJuYWlsX2ZpbGV9XHJcbiAgICAgICAgICAgICAgd2lkdGg9ezM1MH1cclxuICAgICAgICAgICAgICBoZWlnaHQ9ezIwMH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC02XCI+XHJcbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGQgbWItMlwiPntwb3N0LnRpdGxlfTwvaDI+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS02MDAgbWItNFwiPntwb3N0LmRhdGV9ICgxMDowOCk8L3A+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS04MDAgbWItNFwiPntwb3N0LmNvbnRlbnR9PC9wPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJnLWdyZWVuLTUwMCB0ZXh0LXdoaXRlIHB5LTIgcHgtNCByb3VuZGVkXCI+XHJcbiAgICAgICAgICAgICAgUmVhZCBNb3JlXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICkpfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VBdXRoIiwiYXhpb3MiLCJteUxpc3QiLCJ1c2VyIiwidXNlcklkIiwiYm9keSIsImlkIiwiYmxvZ1Bvc3RzIiwic2V0QmxvZ1Bvc3RzIiwicGFnZSIsInNldFBhZ2UiLCJteUJsb2dQb3N0IiwicmVzIiwiZ2V0IiwicGFyYW1zIiwiY29uc29sZSIsImxvZyIsIkpTT04iLCJzdHJpbmdpZnkiLCJzdGF0dXMiLCJkYXRhIiwiZXJyb3IiLCJyZXNwb25zZSIsImFsZXJ0IiwibXNnIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJtYXAiLCJwb3N0IiwiaW1nIiwic3JjIiwidGh1bWJuYWlsX2ZpbGUiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsImgyIiwidGl0bGUiLCJwIiwiZGF0ZSIsImNvbnRlbnQiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/(post)/post/myList/page.jsx\n"));

/***/ })

});