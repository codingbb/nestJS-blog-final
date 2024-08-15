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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ myList; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _util_AuthContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/AuthContext */ \"(app-pages-browser)/./app/util/AuthContext.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction myList() {\n    _s();\n    const { user } = (0,_util_AuthContext__WEBPACK_IMPORTED_MODULE_2__.useAuth)();\n    const userId = user && user.body[0].id;\n    const [blogPosts, setBlogPosts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    // 페이징 번호\n    const [page, setPage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false); // 데이터 로딩 상태\n    const [hasNextPage, setHasNextPage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true); // 다음 페이지 여부 (마지막 페이지 알림)\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const myBlogPost = async (page)=>{\n            try {\n                setLoading(true); // 데이터 로딩 중\n                const res = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"/api/post/myList\", {\n                    params: {\n                        userId,\n                        page\n                    }\n                });\n                console.log(\"resssss \" + JSON.stringify(res));\n                if (res.status === 200) {\n                    console.log(\"성공!!!\");\n                    // setBlogPosts(res.data.body); // 블로그 포스트 데이터를 상태에 저장\n                    setBlogPosts((prevPosts)=>[\n                            ...prevPosts,\n                            ...res.data.body.posts\n                        ]);\n                    setHasNextPage(res.data.body.hasNextPage); // 다음 페이지 여부 업데이트\n                }\n            } catch (error) {\n                if (error.response) {\n                    alert(error.response.data.msg);\n                }\n            } finally{\n                setLoading(false); // 데이터 로딩 종료\n            }\n        };\n        // 다음 페이지가 있을 때만 요청!\n        if (userId && hasNextPage) {\n            myBlogPost(page);\n        }\n    }, [\n        userId,\n        page,\n        hasNextPage\n    ]);\n    // 스크롤 페이징\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleScroll = ()=>{\n            const scrollTop = window.scrollY || document.documentElement.scrollTop;\n            const windowHeight = window.innerHeight;\n            const documentHeight = document.documentElement.scrollHeight;\n            const scrollPercentage = scrollTop / (documentHeight - windowHeight) * 100;\n            if (scrollPercentage >= 80 && !loading && hasNextPage) {\n                setPage((prevPage)=>prevPage + 1); // 다음 페이지로 이동\n            }\n        };\n        window.addEventListener(\"scroll\", handleScroll);\n        return ()=>{\n            window.removeEventListener(\"scroll\", handleScroll);\n        };\n    }, [\n        loading,\n        hasNextPage\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (!hasNextPage && !loading) {\n            alert(\"마지막 페이지입니다!\");\n        }\n    }, [\n        hasNextPage,\n        loading\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"max-w-4xl mx-auto py-10\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-4xl font-bold mb-10\",\n                children: \"cos's Blog\"\n            }, void 0, false, {\n                fileName: \"C:\\\\workspace\\\\nextJS-blog-test 222\\\\app\\\\(post)\\\\post\\\\myList\\\\page.jsx\",\n                lineNumber: 78,\n                columnNumber: 7\n            }, this),\n            blogPosts.map((post, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-row mb-8 border rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105 hover:cursor-pointer\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex justify-center\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: \"/img/\".concat(post.thumbnail_file),\n                                alt: post.thumbnail_file,\n                                width: 350,\n                                height: 200\n                            }, void 0, false, {\n                                fileName: \"C:\\\\workspace\\\\nextJS-blog-test 222\\\\app\\\\(post)\\\\post\\\\myList\\\\page.jsx\",\n                                lineNumber: 86,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\workspace\\\\nextJS-blog-test 222\\\\app\\\\(post)\\\\post\\\\myList\\\\page.jsx\",\n                            lineNumber: 85,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"p-6\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    className: \"text-2xl font-bold mb-2\",\n                                    children: post.title\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\workspace\\\\nextJS-blog-test 222\\\\app\\\\(post)\\\\post\\\\myList\\\\page.jsx\",\n                                    lineNumber: 95,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-gray-600 mb-4\",\n                                    children: [\n                                        post.date,\n                                        \" (10:08)\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\workspace\\\\nextJS-blog-test 222\\\\app\\\\(post)\\\\post\\\\myList\\\\page.jsx\",\n                                    lineNumber: 96,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-gray-800 mb-4\",\n                                    children: post.content\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\workspace\\\\nextJS-blog-test 222\\\\app\\\\(post)\\\\post\\\\myList\\\\page.jsx\",\n                                    lineNumber: 97,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"bg-green-500 text-white py-2 px-4 rounded\",\n                                    children: \"Read More\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\workspace\\\\nextJS-blog-test 222\\\\app\\\\(post)\\\\post\\\\myList\\\\page.jsx\",\n                                    lineNumber: 98,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\workspace\\\\nextJS-blog-test 222\\\\app\\\\(post)\\\\post\\\\myList\\\\page.jsx\",\n                            lineNumber: 94,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, \"\".concat(post.id, \"-\").concat(index), true, {\n                    fileName: \"C:\\\\workspace\\\\nextJS-blog-test 222\\\\app\\\\(post)\\\\post\\\\myList\\\\page.jsx\",\n                    lineNumber: 81,\n                    columnNumber: 9\n                }, this)),\n            loading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Loading...\"\n            }, void 0, false, {\n                fileName: \"C:\\\\workspace\\\\nextJS-blog-test 222\\\\app\\\\(post)\\\\post\\\\myList\\\\page.jsx\",\n                lineNumber: 104,\n                columnNumber: 19\n            }, this),\n            \" \"\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\workspace\\\\nextJS-blog-test 222\\\\app\\\\(post)\\\\post\\\\myList\\\\page.jsx\",\n        lineNumber: 77,\n        columnNumber: 5\n    }, this);\n}\n_s(myList, \"+QzfnFUvhGGCWFlkA7YnZYqrcUI=\", false, function() {\n    return [\n        _util_AuthContext__WEBPACK_IMPORTED_MODULE_2__.useAuth\n    ];\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC8ocG9zdCkvcG9zdC9teUxpc3QvcGFnZS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFFNEM7QUFDUTtBQUMxQjtBQUVYLFNBQVNJOztJQUN0QixNQUFNLEVBQUVDLElBQUksRUFBRSxHQUFHSCwwREFBT0E7SUFDeEIsTUFBTUksU0FBU0QsUUFBUUEsS0FBS0UsSUFBSSxDQUFDLEVBQUUsQ0FBQ0MsRUFBRTtJQUN0QyxNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR1QsK0NBQVFBLENBQUMsRUFBRTtJQUU3QyxTQUFTO0lBQ1QsTUFBTSxDQUFDVSxNQUFNQyxRQUFRLEdBQUdYLCtDQUFRQSxDQUFDO0lBQ2pDLE1BQU0sQ0FBQ1ksU0FBU0MsV0FBVyxHQUFHYiwrQ0FBUUEsQ0FBQyxRQUFRLFlBQVk7SUFDM0QsTUFBTSxDQUFDYyxhQUFhQyxlQUFlLEdBQUdmLCtDQUFRQSxDQUFDLE9BQU8seUJBQXlCO0lBRS9FRCxnREFBU0EsQ0FBQztRQUNSLE1BQU1pQixhQUFhLE9BQU9OO1lBQ3hCLElBQUk7Z0JBQ0ZHLFdBQVcsT0FBTyxXQUFXO2dCQUM3QixNQUFNSSxNQUFNLE1BQU1mLDZDQUFLQSxDQUFDZ0IsR0FBRyxDQUFFLG9CQUFtQjtvQkFDOUNDLFFBQVE7d0JBQUVkO3dCQUFRSztvQkFBSztnQkFDekI7Z0JBRUFVLFFBQVFDLEdBQUcsQ0FBQyxhQUFhQyxLQUFLQyxTQUFTLENBQUNOO2dCQUV4QyxJQUFJQSxJQUFJTyxNQUFNLEtBQUssS0FBSztvQkFDdEJKLFFBQVFDLEdBQUcsQ0FBQztvQkFDWixzREFBc0Q7b0JBQ3REWixhQUFhLENBQUNnQixZQUFjOytCQUFJQTsrQkFBY1IsSUFBSVMsSUFBSSxDQUFDcEIsSUFBSSxDQUFDcUIsS0FBSzt5QkFBQztvQkFDbEVaLGVBQWVFLElBQUlTLElBQUksQ0FBQ3BCLElBQUksQ0FBQ1EsV0FBVyxHQUFHLGlCQUFpQjtnQkFDOUQ7WUFDRixFQUFFLE9BQU9jLE9BQU87Z0JBQ2QsSUFBSUEsTUFBTUMsUUFBUSxFQUFFO29CQUNsQkMsTUFBTUYsTUFBTUMsUUFBUSxDQUFDSCxJQUFJLENBQUNLLEdBQUc7Z0JBQy9CO1lBQ0YsU0FBVTtnQkFDUmxCLFdBQVcsUUFBUSxZQUFZO1lBQ2pDO1FBQ0Y7UUFFQSxvQkFBb0I7UUFDcEIsSUFBSVIsVUFBVVMsYUFBYTtZQUN6QkUsV0FBV047UUFDYjtJQUNGLEdBQUc7UUFBQ0w7UUFBUUs7UUFBTUk7S0FBWTtJQUU5QixVQUFVO0lBQ1ZmLGdEQUFTQSxDQUFDO1FBQ1IsTUFBTWlDLGVBQWU7WUFDbkIsTUFBTUMsWUFBWUMsT0FBT0MsT0FBTyxJQUFJQyxTQUFTQyxlQUFlLENBQUNKLFNBQVM7WUFDdEUsTUFBTUssZUFBZUosT0FBT0ssV0FBVztZQUN2QyxNQUFNQyxpQkFBaUJKLFNBQVNDLGVBQWUsQ0FBQ0ksWUFBWTtZQUU1RCxNQUFNQyxtQkFDSixZQUFjRixDQUFBQSxpQkFBaUJGLFlBQVcsSUFBTTtZQUVsRCxJQUFJSSxvQkFBb0IsTUFBTSxDQUFDOUIsV0FBV0UsYUFBYTtnQkFDckRILFFBQVEsQ0FBQ2dDLFdBQWFBLFdBQVcsSUFBSSxhQUFhO1lBQ3BEO1FBQ0Y7UUFFQVQsT0FBT1UsZ0JBQWdCLENBQUMsVUFBVVo7UUFFbEMsT0FBTztZQUNMRSxPQUFPVyxtQkFBbUIsQ0FBQyxVQUFVYjtRQUN2QztJQUNGLEdBQUc7UUFBQ3BCO1FBQVNFO0tBQVk7SUFFekJmLGdEQUFTQSxDQUFDO1FBQ1IsSUFBSSxDQUFDZSxlQUFlLENBQUNGLFNBQVM7WUFDNUJrQixNQUFNO1FBQ1I7SUFDRixHQUFHO1FBQUNoQjtRQUFhRjtLQUFRO0lBRXpCLHFCQUNFLDhEQUFDa0M7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNDO2dCQUFHRCxXQUFVOzBCQUEyQjs7Ozs7O1lBRXhDdkMsVUFBVXlDLEdBQUcsQ0FBQyxDQUFDQyxNQUFNQyxzQkFDcEIsOERBQUNMO29CQUNDQyxXQUFVOztzQ0FHViw4REFBQ0Q7NEJBQUlDLFdBQVU7c0NBQ2IsNEVBQUNLO2dDQUNDQyxLQUFLLFFBQTRCLE9BQXBCSCxLQUFLSSxjQUFjO2dDQUNoQ0MsS0FBS0wsS0FBS0ksY0FBYztnQ0FDeEJFLE9BQU87Z0NBQ1BDLFFBQVE7Ozs7Ozs7Ozs7O3NDQUlaLDhEQUFDWDs0QkFBSUMsV0FBVTs7OENBQ2IsOERBQUNXO29DQUFHWCxXQUFVOzhDQUEyQkcsS0FBS1MsS0FBSzs7Ozs7OzhDQUNuRCw4REFBQ0M7b0NBQUViLFdBQVU7O3dDQUFzQkcsS0FBS1csSUFBSTt3Q0FBQzs7Ozs7Ozs4Q0FDN0MsOERBQUNEO29DQUFFYixXQUFVOzhDQUFzQkcsS0FBS1ksT0FBTzs7Ozs7OzhDQUMvQyw4REFBQ0M7b0NBQU9oQixXQUFVOzhDQUE0Qzs7Ozs7Ozs7Ozs7OzttQkFmM0QsR0FBY0ksT0FBWEQsS0FBSzNDLEVBQUUsRUFBQyxLQUFTLE9BQU40Qzs7Ozs7WUFxQnRCdkMseUJBQVcsOERBQUNnRDswQkFBRTs7Ozs7O1lBQWU7Ozs7Ozs7QUFHcEM7R0FwR3dCekQ7O1FBQ0xGLHNEQUFPQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvKHBvc3QpL3Bvc3QvbXlMaXN0L3BhZ2UuanN4P2FkZDYiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcblxyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZUF1dGggfSBmcm9tIFwiLi4vLi4vLi4vdXRpbC9BdXRoQ29udGV4dFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBteUxpc3QoKSB7XHJcbiAgY29uc3QgeyB1c2VyIH0gPSB1c2VBdXRoKCk7XHJcbiAgY29uc3QgdXNlcklkID0gdXNlciAmJiB1c2VyLmJvZHlbMF0uaWQ7XHJcbiAgY29uc3QgW2Jsb2dQb3N0cywgc2V0QmxvZ1Bvc3RzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgLy8g7Y6Y7J207KeVIOuyiO2YuFxyXG4gIGNvbnN0IFtwYWdlLCBzZXRQYWdlXSA9IHVzZVN0YXRlKDEpO1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTsgLy8g642w7J207YSwIOuhnOuUqSDsg4Htg5xcclxuICBjb25zdCBbaGFzTmV4dFBhZ2UsIHNldEhhc05leHRQYWdlXSA9IHVzZVN0YXRlKHRydWUpOyAvLyDri6TsnYwg7Y6Y7J207KeAIOyXrOu2gCAo66eI7KeA66eJIO2OmOydtOyngCDslYzrprwpXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBteUJsb2dQb3N0ID0gYXN5bmMgKHBhZ2UpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBzZXRMb2FkaW5nKHRydWUpOyAvLyDrjbDsnbTthLAg66Gc65SpIOykkVxyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgL2FwaS9wb3N0L215TGlzdGAsIHtcclxuICAgICAgICAgIHBhcmFtczogeyB1c2VySWQsIHBhZ2UgfSwgLy8g7L+866asIO2MjOudvOuvuO2EsOuhnCB1c2VySWQg7KCE64usICjtjpjsnbTsp5Ug7ZWg6rGw64uI6rmMIHBhZ2Xrj4Qg7KCE64usLiAvYXBpL3Bvc3QvbXlMaXN0P3VzZXJJZD0xP3BhZ2U9MSDsnbTrn7Ag7ZiV7IudKVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcInJlc3Nzc3MgXCIgKyBKU09OLnN0cmluZ2lmeShyZXMpKTtcclxuXHJcbiAgICAgICAgaWYgKHJlcy5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCLshLHqs7UhISFcIik7XHJcbiAgICAgICAgICAvLyBzZXRCbG9nUG9zdHMocmVzLmRhdGEuYm9keSk7IC8vIOu4lOuhnOq3uCDtj6zsiqTtirgg642w7J207YSw66W8IOyDge2DnOyXkCDsoIDsnqVcclxuICAgICAgICAgIHNldEJsb2dQb3N0cygocHJldlBvc3RzKSA9PiBbLi4ucHJldlBvc3RzLCAuLi5yZXMuZGF0YS5ib2R5LnBvc3RzXSk7XHJcbiAgICAgICAgICBzZXRIYXNOZXh0UGFnZShyZXMuZGF0YS5ib2R5Lmhhc05leHRQYWdlKTsgLy8g64uk7J2MIO2OmOydtOyngCDsl6zrtoAg7JeF642w7J207Yq4XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGlmIChlcnJvci5yZXNwb25zZSkge1xyXG4gICAgICAgICAgYWxlcnQoZXJyb3IucmVzcG9uc2UuZGF0YS5tc2cpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBmaW5hbGx5IHtcclxuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTsgLy8g642w7J207YSwIOuhnOuUqSDsooXro4xcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAvLyDri6TsnYwg7Y6Y7J207KeA6rCAIOyeiOydhCDrlYzrp4wg7JqU7LKtIVxyXG4gICAgaWYgKHVzZXJJZCAmJiBoYXNOZXh0UGFnZSkge1xyXG4gICAgICBteUJsb2dQb3N0KHBhZ2UpO1xyXG4gICAgfVxyXG4gIH0sIFt1c2VySWQsIHBhZ2UsIGhhc05leHRQYWdlXSk7XHJcblxyXG4gIC8vIOyKpO2BrOuhpCDtjpjsnbTsp5VcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgaGFuZGxlU2Nyb2xsID0gKCkgPT4ge1xyXG4gICAgICBjb25zdCBzY3JvbGxUb3AgPSB3aW5kb3cuc2Nyb2xsWSB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xyXG4gICAgICBjb25zdCB3aW5kb3dIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcbiAgICAgIGNvbnN0IGRvY3VtZW50SGVpZ2h0ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbEhlaWdodDtcclxuXHJcbiAgICAgIGNvbnN0IHNjcm9sbFBlcmNlbnRhZ2UgPVxyXG4gICAgICAgIChzY3JvbGxUb3AgLyAoZG9jdW1lbnRIZWlnaHQgLSB3aW5kb3dIZWlnaHQpKSAqIDEwMDtcclxuXHJcbiAgICAgIGlmIChzY3JvbGxQZXJjZW50YWdlID49IDgwICYmICFsb2FkaW5nICYmIGhhc05leHRQYWdlKSB7XHJcbiAgICAgICAgc2V0UGFnZSgocHJldlBhZ2UpID0+IHByZXZQYWdlICsgMSk7IC8vIOuLpOydjCDtjpjsnbTsp4DroZwg7J2064+ZXHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgaGFuZGxlU2Nyb2xsKTtcclxuXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBoYW5kbGVTY3JvbGwpO1xyXG4gICAgfTtcclxuICB9LCBbbG9hZGluZywgaGFzTmV4dFBhZ2VdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICghaGFzTmV4dFBhZ2UgJiYgIWxvYWRpbmcpIHtcclxuICAgICAgYWxlcnQoXCLrp4jsp4Drp4kg7Y6Y7J207KeA7J6F64uI64ukIVwiKTtcclxuICAgIH1cclxuICB9LCBbaGFzTmV4dFBhZ2UsIGxvYWRpbmddKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctNHhsIG14LWF1dG8gcHktMTBcIj5cclxuICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNHhsIGZvbnQtYm9sZCBtYi0xMFwiPmNvcydzIEJsb2c8L2gxPlxyXG4gICAgICB7Lyog6rCBIO2PrOyKpO2KuOulvCDrsJjrs7XtlZjsl6wg66CM642U66eBICovfVxyXG4gICAgICB7YmxvZ1Bvc3RzLm1hcCgocG9zdCwgaW5kZXgpID0+IChcclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IG1iLTggYm9yZGVyIHJvdW5kZWQtbGcgb3ZlcmZsb3ctaGlkZGVuIHNoYWRvdy1sZyB0cmFuc2Zvcm0gdHJhbnNpdGlvbi10cmFuc2Zvcm0gZHVyYXRpb24tMzAwIGhvdmVyOnNjYWxlLTEwNSBob3ZlcjpjdXJzb3ItcG9pbnRlclwiXHJcbiAgICAgICAgICBrZXk9e2Ake3Bvc3QuaWR9LSR7aW5kZXh9YH0gLy8g6rOg7Jyg7ZWcIGtleSDsho3shLEg7LaU6rCAXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICBzcmM9e2AvaW1nLyR7cG9zdC50aHVtYm5haWxfZmlsZX1gfVxyXG4gICAgICAgICAgICAgIGFsdD17cG9zdC50aHVtYm5haWxfZmlsZX1cclxuICAgICAgICAgICAgICB3aWR0aD17MzUwfVxyXG4gICAgICAgICAgICAgIGhlaWdodD17MjAwfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTZcIj5cclxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZCBtYi0yXCI+e3Bvc3QudGl0bGV9PC9oMj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTYwMCBtYi00XCI+e3Bvc3QuZGF0ZX0gKDEwOjA4KTwvcD5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTgwMCBtYi00XCI+e3Bvc3QuY29udGVudH08L3A+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYmctZ3JlZW4tNTAwIHRleHQtd2hpdGUgcHktMiBweC00IHJvdW5kZWRcIj5cclxuICAgICAgICAgICAgICBSZWFkIE1vcmVcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKSl9XHJcbiAgICAgIHtsb2FkaW5nICYmIDxwPkxvYWRpbmcuLi48L3A+fSB7Lyog66Gc65SpIOykkeydvCDrlYwg7ZGc7IucICovfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VBdXRoIiwiYXhpb3MiLCJteUxpc3QiLCJ1c2VyIiwidXNlcklkIiwiYm9keSIsImlkIiwiYmxvZ1Bvc3RzIiwic2V0QmxvZ1Bvc3RzIiwicGFnZSIsInNldFBhZ2UiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImhhc05leHRQYWdlIiwic2V0SGFzTmV4dFBhZ2UiLCJteUJsb2dQb3N0IiwicmVzIiwiZ2V0IiwicGFyYW1zIiwiY29uc29sZSIsImxvZyIsIkpTT04iLCJzdHJpbmdpZnkiLCJzdGF0dXMiLCJwcmV2UG9zdHMiLCJkYXRhIiwicG9zdHMiLCJlcnJvciIsInJlc3BvbnNlIiwiYWxlcnQiLCJtc2ciLCJoYW5kbGVTY3JvbGwiLCJzY3JvbGxUb3AiLCJ3aW5kb3ciLCJzY3JvbGxZIiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJ3aW5kb3dIZWlnaHQiLCJpbm5lckhlaWdodCIsImRvY3VtZW50SGVpZ2h0Iiwic2Nyb2xsSGVpZ2h0Iiwic2Nyb2xsUGVyY2VudGFnZSIsInByZXZQYWdlIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsIm1hcCIsInBvc3QiLCJpbmRleCIsImltZyIsInNyYyIsInRodW1ibmFpbF9maWxlIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJoMiIsInRpdGxlIiwicCIsImRhdGUiLCJjb250ZW50IiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/(post)/post/myList/page.jsx\n"));

/***/ })

});