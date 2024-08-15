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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ myList; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _util_AuthContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/AuthContext */ \"(app-pages-browser)/./app/util/AuthContext.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction myList() {\n    _s();\n    const { user } = (0,_util_AuthContext__WEBPACK_IMPORTED_MODULE_2__.useAuth)();\n    const userId = user && user.body[0].id;\n    const [blogPosts, setBlogPosts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    // 페이징 번호\n    const [page, setPage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false); // 데이터 로딩 상태\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const myBlogPost = async (page)=>{\n            try {\n                setLoading(true); // 데이터 로딩 중\n                const res = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"/api/post/myList\", {\n                    params: {\n                        userId,\n                        page\n                    }\n                });\n                console.log(\"resssss \" + JSON.stringify(res));\n                if (res.status === 200) {\n                    console.log(\"성공!!!\");\n                    // setBlogPosts(res.data.body); // 블로그 포스트 데이터를 상태에 저장\n                    setBlogPosts((prevPosts)=>[\n                            ...prevPosts,\n                            ...res.data.body\n                        ]); // 블로그 포스트 데이터를 상태에 추가\n                }\n            } catch (error) {\n                if (error.response) {\n                    alert(error.response.data.msg);\n                }\n            } finally{\n                setLoading(false); // 데이터 로딩 종료\n            }\n        };\n        if (userId) {\n            myBlogPost(page);\n        }\n    }, [\n        userId,\n        page\n    ]);\n    // 스크롤 페이징\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleScroll = ()=>{\n            const scrollTop = window.scrollY || document.documentElement.scrollTop;\n            const windowHeight = window.innerHeight;\n            const documentHeight = document.documentElement.scrollHeight;\n            const scrollPercentage = scrollTop / (documentHeight - windowHeight) * 100;\n            if (scrollPercentage >= 80 && !loading) {\n                setPage((prevPage)=>prevPage + 1); // 다음 페이지로 이동\n            }\n        };\n        window.addEventListener(\"scroll\", handleScroll);\n        return ()=>{\n            window.removeEventListener(\"scroll\", handleScroll);\n        };\n    }, [\n        loading\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"max-w-4xl mx-auto py-10\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-4xl font-bold mb-10\",\n                children: \"cos's Blog\"\n            }, void 0, false, {\n                fileName: \"C:\\\\workspace\\\\nextJS-blog-test 222\\\\app\\\\(post)\\\\post\\\\myList\\\\page.jsx\",\n                lineNumber: 69,\n                columnNumber: 7\n            }, this),\n            blogPosts.map((post)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-row mb-8 border rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105 hover:cursor-pointer\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex justify-center\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: \"/img/\".concat(post.thumbnail_file),\n                                alt: post.thumbnail_file,\n                                width: 350,\n                                height: 200\n                            }, void 0, false, {\n                                fileName: \"C:\\\\workspace\\\\nextJS-blog-test 222\\\\app\\\\(post)\\\\post\\\\myList\\\\page.jsx\",\n                                lineNumber: 77,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\workspace\\\\nextJS-blog-test 222\\\\app\\\\(post)\\\\post\\\\myList\\\\page.jsx\",\n                            lineNumber: 76,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"p-6\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    className: \"text-2xl font-bold mb-2\",\n                                    children: post.title\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\workspace\\\\nextJS-blog-test 222\\\\app\\\\(post)\\\\post\\\\myList\\\\page.jsx\",\n                                    lineNumber: 86,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-gray-600 mb-4\",\n                                    children: [\n                                        post.date,\n                                        \" (10:08)\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\workspace\\\\nextJS-blog-test 222\\\\app\\\\(post)\\\\post\\\\myList\\\\page.jsx\",\n                                    lineNumber: 87,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-gray-800 mb-4\",\n                                    children: post.content\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\workspace\\\\nextJS-blog-test 222\\\\app\\\\(post)\\\\post\\\\myList\\\\page.jsx\",\n                                    lineNumber: 88,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"bg-green-500 text-white py-2 px-4 rounded\",\n                                    children: \"Read More\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\workspace\\\\nextJS-blog-test 222\\\\app\\\\(post)\\\\post\\\\myList\\\\page.jsx\",\n                                    lineNumber: 89,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\workspace\\\\nextJS-blog-test 222\\\\app\\\\(post)\\\\post\\\\myList\\\\page.jsx\",\n                            lineNumber: 85,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, post.id, true, {\n                    fileName: \"C:\\\\workspace\\\\nextJS-blog-test 222\\\\app\\\\(post)\\\\post\\\\myList\\\\page.jsx\",\n                    lineNumber: 72,\n                    columnNumber: 9\n                }, this)),\n            loading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Loading...\"\n            }, void 0, false, {\n                fileName: \"C:\\\\workspace\\\\nextJS-blog-test 222\\\\app\\\\(post)\\\\post\\\\myList\\\\page.jsx\",\n                lineNumber: 95,\n                columnNumber: 19\n            }, this),\n            \" \"\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\workspace\\\\nextJS-blog-test 222\\\\app\\\\(post)\\\\post\\\\myList\\\\page.jsx\",\n        lineNumber: 68,\n        columnNumber: 5\n    }, this);\n}\n_s(myList, \"ctZsrZNQpcrR04JGyGX2X2W3khs=\", false, function() {\n    return [\n        _util_AuthContext__WEBPACK_IMPORTED_MODULE_2__.useAuth\n    ];\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC8ocG9zdCkvcG9zdC9teUxpc3QvcGFnZS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFFNEM7QUFDUTtBQUMxQjtBQUVYLFNBQVNJOztJQUN0QixNQUFNLEVBQUVDLElBQUksRUFBRSxHQUFHSCwwREFBT0E7SUFDeEIsTUFBTUksU0FBU0QsUUFBUUEsS0FBS0UsSUFBSSxDQUFDLEVBQUUsQ0FBQ0MsRUFBRTtJQUN0QyxNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR1QsK0NBQVFBLENBQUMsRUFBRTtJQUU3QyxTQUFTO0lBQ1QsTUFBTSxDQUFDVSxNQUFNQyxRQUFRLEdBQUdYLCtDQUFRQSxDQUFDO0lBQ2pDLE1BQU0sQ0FBQ1ksU0FBU0MsV0FBVyxHQUFHYiwrQ0FBUUEsQ0FBQyxRQUFRLFlBQVk7SUFFM0RELGdEQUFTQSxDQUFDO1FBQ1IsTUFBTWUsYUFBYSxPQUFPSjtZQUN4QixJQUFJO2dCQUNGRyxXQUFXLE9BQU8sV0FBVztnQkFDN0IsTUFBTUUsTUFBTSxNQUFNYiw2Q0FBS0EsQ0FBQ2MsR0FBRyxDQUFFLG9CQUFtQjtvQkFDOUNDLFFBQVE7d0JBQUVaO3dCQUFRSztvQkFBSztnQkFDekI7Z0JBRUFRLFFBQVFDLEdBQUcsQ0FBQyxhQUFhQyxLQUFLQyxTQUFTLENBQUNOO2dCQUV4QyxJQUFJQSxJQUFJTyxNQUFNLEtBQUssS0FBSztvQkFDdEJKLFFBQVFDLEdBQUcsQ0FBQztvQkFDWixzREFBc0Q7b0JBQ3REVixhQUFhLENBQUNjLFlBQWM7K0JBQUlBOytCQUFjUixJQUFJUyxJQUFJLENBQUNsQixJQUFJO3lCQUFDLEdBQUcsc0JBQXNCO2dCQUN2RjtZQUNGLEVBQUUsT0FBT21CLE9BQU87Z0JBQ2QsSUFBSUEsTUFBTUMsUUFBUSxFQUFFO29CQUNsQkMsTUFBTUYsTUFBTUMsUUFBUSxDQUFDRixJQUFJLENBQUNJLEdBQUc7Z0JBQy9CO1lBQ0YsU0FBVTtnQkFDUmYsV0FBVyxRQUFRLFlBQVk7WUFDakM7UUFDRjtRQUVBLElBQUlSLFFBQVE7WUFDVlMsV0FBV0o7UUFDYjtJQUNGLEdBQUc7UUFBQ0w7UUFBUUs7S0FBSztJQUVqQixVQUFVO0lBQ1ZYLGdEQUFTQSxDQUFDO1FBQ1IsTUFBTThCLGVBQWU7WUFDbkIsTUFBTUMsWUFBWUMsT0FBT0MsT0FBTyxJQUFJQyxTQUFTQyxlQUFlLENBQUNKLFNBQVM7WUFDdEUsTUFBTUssZUFBZUosT0FBT0ssV0FBVztZQUN2QyxNQUFNQyxpQkFBaUJKLFNBQVNDLGVBQWUsQ0FBQ0ksWUFBWTtZQUU1RCxNQUFNQyxtQkFDSixZQUFjRixDQUFBQSxpQkFBaUJGLFlBQVcsSUFBTTtZQUVsRCxJQUFJSSxvQkFBb0IsTUFBTSxDQUFDM0IsU0FBUztnQkFDdENELFFBQVEsQ0FBQzZCLFdBQWFBLFdBQVcsSUFBSSxhQUFhO1lBQ3BEO1FBQ0Y7UUFFQVQsT0FBT1UsZ0JBQWdCLENBQUMsVUFBVVo7UUFFbEMsT0FBTztZQUNMRSxPQUFPVyxtQkFBbUIsQ0FBQyxVQUFVYjtRQUN2QztJQUNGLEdBQUc7UUFBQ2pCO0tBQVE7SUFFWixxQkFDRSw4REFBQytCO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDQztnQkFBR0QsV0FBVTswQkFBMkI7Ozs7OztZQUV4Q3BDLFVBQVVzQyxHQUFHLENBQUMsQ0FBQ0MscUJBQ2QsOERBQUNKO29CQUNDQyxXQUFVOztzQ0FHViw4REFBQ0Q7NEJBQUlDLFdBQVU7c0NBQ2IsNEVBQUNJO2dDQUNDQyxLQUFLLFFBQTRCLE9BQXBCRixLQUFLRyxjQUFjO2dDQUNoQ0MsS0FBS0osS0FBS0csY0FBYztnQ0FDeEJFLE9BQU87Z0NBQ1BDLFFBQVE7Ozs7Ozs7Ozs7O3NDQUlaLDhEQUFDVjs0QkFBSUMsV0FBVTs7OENBQ2IsOERBQUNVO29DQUFHVixXQUFVOzhDQUEyQkcsS0FBS1EsS0FBSzs7Ozs7OzhDQUNuRCw4REFBQ0M7b0NBQUVaLFdBQVU7O3dDQUFzQkcsS0FBS1UsSUFBSTt3Q0FBQzs7Ozs7Ozs4Q0FDN0MsOERBQUNEO29DQUFFWixXQUFVOzhDQUFzQkcsS0FBS1csT0FBTzs7Ozs7OzhDQUMvQyw4REFBQ0M7b0NBQU9mLFdBQVU7OENBQTRDOzs7Ozs7Ozs7Ozs7O21CQWYzREcsS0FBS3hDLEVBQUU7Ozs7O1lBcUJmSyx5QkFBVyw4REFBQzRDOzBCQUFFOzs7Ozs7WUFBZTs7Ozs7OztBQUdwQztHQTNGd0JyRDs7UUFDTEYsc0RBQU9BIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC8ocG9zdCkvcG9zdC9teUxpc3QvcGFnZS5qc3g/YWRkNiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuXHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlQXV0aCB9IGZyb20gXCIuLi8uLi8uLi91dGlsL0F1dGhDb250ZXh0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG15TGlzdCgpIHtcclxuICBjb25zdCB7IHVzZXIgfSA9IHVzZUF1dGgoKTtcclxuICBjb25zdCB1c2VySWQgPSB1c2VyICYmIHVzZXIuYm9keVswXS5pZDtcclxuICBjb25zdCBbYmxvZ1Bvc3RzLCBzZXRCbG9nUG9zdHNdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICAvLyDtjpjsnbTsp5Ug67KI7Zi4XHJcbiAgY29uc3QgW3BhZ2UsIHNldFBhZ2VdID0gdXNlU3RhdGUoMSk7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpOyAvLyDrjbDsnbTthLAg66Gc65SpIOyDge2DnFxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgbXlCbG9nUG9zdCA9IGFzeW5jIChwYWdlKSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgc2V0TG9hZGluZyh0cnVlKTsgLy8g642w7J207YSwIOuhnOuUqSDspJFcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYC9hcGkvcG9zdC9teUxpc3RgLCB7XHJcbiAgICAgICAgICBwYXJhbXM6IHsgdXNlcklkLCBwYWdlIH0sIC8vIOy/vOumrCDtjIzrnbzrr7jthLDroZwgdXNlcklkIOyghOuLrCAo7Y6Y7J207KeVIO2VoOqxsOuLiOq5jCBwYWdl64+EIOyghOuLrC4gL2FwaS9wb3N0L215TGlzdD91c2VySWQ9MT9wYWdlPTEg7J2065+wIO2YleyLnSlcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJyZXNzc3NzIFwiICsgSlNPTi5zdHJpbmdpZnkocmVzKSk7XHJcblxyXG4gICAgICAgIGlmIChyZXMuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwi7ISx6rO1ISEhXCIpO1xyXG4gICAgICAgICAgLy8gc2V0QmxvZ1Bvc3RzKHJlcy5kYXRhLmJvZHkpOyAvLyDruJTroZzqt7gg7Y+s7Iqk7Yq4IOuNsOydtO2EsOulvCDsg4Htg5zsl5Ag7KCA7J6lXHJcbiAgICAgICAgICBzZXRCbG9nUG9zdHMoKHByZXZQb3N0cykgPT4gWy4uLnByZXZQb3N0cywgLi4ucmVzLmRhdGEuYm9keV0pOyAvLyDruJTroZzqt7gg7Y+s7Iqk7Yq4IOuNsOydtO2EsOulvCDsg4Htg5zsl5Ag7LaU6rCAXHJcbiAgICAgICAgfVxyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGlmIChlcnJvci5yZXNwb25zZSkge1xyXG4gICAgICAgICAgYWxlcnQoZXJyb3IucmVzcG9uc2UuZGF0YS5tc2cpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBmaW5hbGx5IHtcclxuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTsgLy8g642w7J207YSwIOuhnOuUqSDsooXro4xcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBpZiAodXNlcklkKSB7XHJcbiAgICAgIG15QmxvZ1Bvc3QocGFnZSk7XHJcbiAgICB9XHJcbiAgfSwgW3VzZXJJZCwgcGFnZV0pO1xyXG5cclxuICAvLyDsiqTtgazroaQg7Y6Y7J207KeVXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGhhbmRsZVNjcm9sbCA9ICgpID0+IHtcclxuICAgICAgY29uc3Qgc2Nyb2xsVG9wID0gd2luZG93LnNjcm9sbFkgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcclxuICAgICAgY29uc3Qgd2luZG93SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xyXG4gICAgICBjb25zdCBkb2N1bWVudEhlaWdodCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxIZWlnaHQ7XHJcblxyXG4gICAgICBjb25zdCBzY3JvbGxQZXJjZW50YWdlID1cclxuICAgICAgICAoc2Nyb2xsVG9wIC8gKGRvY3VtZW50SGVpZ2h0IC0gd2luZG93SGVpZ2h0KSkgKiAxMDA7XHJcblxyXG4gICAgICBpZiAoc2Nyb2xsUGVyY2VudGFnZSA+PSA4MCAmJiAhbG9hZGluZykge1xyXG4gICAgICAgIHNldFBhZ2UoKHByZXZQYWdlKSA9PiBwcmV2UGFnZSArIDEpOyAvLyDri6TsnYwg7Y6Y7J207KeA66GcIOydtOuPmVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGhhbmRsZVNjcm9sbCk7XHJcblxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgaGFuZGxlU2Nyb2xsKTtcclxuICAgIH07XHJcbiAgfSwgW2xvYWRpbmddKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctNHhsIG14LWF1dG8gcHktMTBcIj5cclxuICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNHhsIGZvbnQtYm9sZCBtYi0xMFwiPmNvcydzIEJsb2c8L2gxPlxyXG4gICAgICB7Lyog6rCBIO2PrOyKpO2KuOulvCDrsJjrs7XtlZjsl6wg66CM642U66eBICovfVxyXG4gICAgICB7YmxvZ1Bvc3RzLm1hcCgocG9zdCkgPT4gKFxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgbWItOCBib3JkZXIgcm91bmRlZC1sZyBvdmVyZmxvdy1oaWRkZW4gc2hhZG93LWxnIHRyYW5zZm9ybSB0cmFuc2l0aW9uLXRyYW5zZm9ybSBkdXJhdGlvbi0zMDAgaG92ZXI6c2NhbGUtMTA1IGhvdmVyOmN1cnNvci1wb2ludGVyXCJcclxuICAgICAgICAgIGtleT17cG9zdC5pZH0gLy8g6rOg7Jyg7ZWcIGtleSDsho3shLEg7LaU6rCAXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICBzcmM9e2AvaW1nLyR7cG9zdC50aHVtYm5haWxfZmlsZX1gfVxyXG4gICAgICAgICAgICAgIGFsdD17cG9zdC50aHVtYm5haWxfZmlsZX1cclxuICAgICAgICAgICAgICB3aWR0aD17MzUwfVxyXG4gICAgICAgICAgICAgIGhlaWdodD17MjAwfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTZcIj5cclxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZCBtYi0yXCI+e3Bvc3QudGl0bGV9PC9oMj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTYwMCBtYi00XCI+e3Bvc3QuZGF0ZX0gKDEwOjA4KTwvcD5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTgwMCBtYi00XCI+e3Bvc3QuY29udGVudH08L3A+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYmctZ3JlZW4tNTAwIHRleHQtd2hpdGUgcHktMiBweC00IHJvdW5kZWRcIj5cclxuICAgICAgICAgICAgICBSZWFkIE1vcmVcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKSl9XHJcbiAgICAgIHtsb2FkaW5nICYmIDxwPkxvYWRpbmcuLi48L3A+fSB7Lyog66Gc65SpIOykkeydvCDrlYwg7ZGc7IucICovfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VBdXRoIiwiYXhpb3MiLCJteUxpc3QiLCJ1c2VyIiwidXNlcklkIiwiYm9keSIsImlkIiwiYmxvZ1Bvc3RzIiwic2V0QmxvZ1Bvc3RzIiwicGFnZSIsInNldFBhZ2UiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsIm15QmxvZ1Bvc3QiLCJyZXMiLCJnZXQiLCJwYXJhbXMiLCJjb25zb2xlIiwibG9nIiwiSlNPTiIsInN0cmluZ2lmeSIsInN0YXR1cyIsInByZXZQb3N0cyIsImRhdGEiLCJlcnJvciIsInJlc3BvbnNlIiwiYWxlcnQiLCJtc2ciLCJoYW5kbGVTY3JvbGwiLCJzY3JvbGxUb3AiLCJ3aW5kb3ciLCJzY3JvbGxZIiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJ3aW5kb3dIZWlnaHQiLCJpbm5lckhlaWdodCIsImRvY3VtZW50SGVpZ2h0Iiwic2Nyb2xsSGVpZ2h0Iiwic2Nyb2xsUGVyY2VudGFnZSIsInByZXZQYWdlIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsIm1hcCIsInBvc3QiLCJpbWciLCJzcmMiLCJ0aHVtYm5haWxfZmlsZSIsImFsdCIsIndpZHRoIiwiaGVpZ2h0IiwiaDIiLCJ0aXRsZSIsInAiLCJkYXRlIiwiY29udGVudCIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/(post)/post/myList/page.jsx\n"));

/***/ })

});