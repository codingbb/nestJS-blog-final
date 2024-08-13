"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(post)/post/[id]/page",{

/***/ "(app-pages-browser)/./app/(post)/post/[id]/page.jsx":
/*!***************************************!*\
  !*** ./app/(post)/post/[id]/page.jsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Detail; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _util_AuthContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/AuthContext */ \"(app-pages-browser)/./app/util/AuthContext.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction Detail(param) {\n    let { params } = param;\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const { user } = (0,_util_AuthContext__WEBPACK_IMPORTED_MODULE_2__.useAuth)();\n    const [post, setPost] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    console.log(\"param = \" + JSON.stringify(params));\n    const { id } = params;\n    // 게시글 상세 조회\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchPost = async ()=>{\n            try {\n                // 애가 request에 담겨야하는데\n                const res = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].post(\"/api/detail/\".concat(id), {\n                    id\n                });\n                console.log(\"resssss \" + JSON.stringify(res));\n                if (res.status === 200) {\n                    // alert(\"성공!!\");\n                    setPost(res.data.body);\n                    console.log(\"sss \" + JSON.stringify(res.data));\n                    console.log(\"sss \" + JSON.stringify(res.data.body[0].id));\n                }\n            } catch (error) {\n                console.log(\"에러 발생:\", error);\n                if (error.response) {\n                    // console.log(\"에러에러\");\n                    alert(error.response.data.msg);\n                }\n            }\n        };\n        fetchPost();\n    }, [\n        id\n    ]);\n    if (!post) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"C:\\\\workspace\\\\nextJS-blog-test 222\\\\app\\\\(post)\\\\post\\\\[id]\\\\page.jsx\",\n            lineNumber: 44,\n            columnNumber: 12\n        }, this);\n    }\n    // 게시글 상세 조회 끝\n    // 게시글 삭제\n    const deletePost = async ()=>{\n        if (!confirm(\"정말 삭제하시겠습니까?\")) {\n            return;\n        }\n        try {\n            // 애가 request에 담겨야하는데\n            const res = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].delete(\"/api/post/delete/\".concat(id));\n            // console.log(\"resssss \" + JSON.stringify(res));\n            if (res.status === 200) {\n                console.log(\"작동???????\");\n                // console.log(\"sss \" + JSON.stringify(res.data));\n                alert(\"삭제되었습니다\");\n                router.push(\"/\");\n                setTimeout(()=>{\n                    window.location.reload(); // 새로고침\n                }, 50); // 100ms 후 새로고침\n            }\n        } catch (error) {\n            if (error.response) {\n                // console.log(\"에러에러\");\n                alert(error.response.data.msg);\n            }\n        }\n    };\n    // 게시글 삭제 끝\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col mx-4 h-screen justify-start gap-y-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row justify-between\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                        className: \"text-4xl py-4\",\n                        children: post.title\n                    }, void 0, false, {\n                        fileName: \"C:\\\\workspace\\\\nextJS-blog-test 222\\\\app\\\\(post)\\\\post\\\\[id]\\\\page.jsx\",\n                        lineNumber: 82,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"mt-auto mr-5\",\n                        children: post.createdAt\n                    }, void 0, false, {\n                        fileName: \"C:\\\\workspace\\\\nextJS-blog-test 222\\\\app\\\\(post)\\\\post\\\\[id]\\\\page.jsx\",\n                        lineNumber: 83,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\workspace\\\\nextJS-blog-test 222\\\\app\\\\(post)\\\\post\\\\[id]\\\\page.jsx\",\n                lineNumber: 81,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                fileName: \"C:\\\\workspace\\\\nextJS-blog-test 222\\\\app\\\\(post)\\\\post\\\\[id]\\\\page.jsx\",\n                lineNumber: 85,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                    className: \"mb-40\",\n                    children: post.content\n                }, void 0, false, {\n                    fileName: \"C:\\\\workspace\\\\nextJS-blog-test 222\\\\app\\\\(post)\\\\post\\\\[id]\\\\page.jsx\",\n                    lineNumber: 87,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\workspace\\\\nextJS-blog-test 222\\\\app\\\\(post)\\\\post\\\\[id]\\\\page.jsx\",\n                lineNumber: 86,\n                columnNumber: 7\n            }, this),\n            user && user.body[0].id === post.userId && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row justify-end\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"border p-2 bg-teal-600 rounded-md text-white hover:bg-teal-800\",\n                        onClick: ()=>router.push(\"/post/updateForm/3\"),\n                        children: \"수정\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\workspace\\\\nextJS-blog-test 222\\\\app\\\\(post)\\\\post\\\\[id]\\\\page.jsx\",\n                        lineNumber: 92,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"border p-2 bg-red-700 rounded-md text-white mr-5 hover:bg-red-800\",\n                        onClick: deletePost,\n                        children: \"삭제\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\workspace\\\\nextJS-blog-test 222\\\\app\\\\(post)\\\\post\\\\[id]\\\\page.jsx\",\n                        lineNumber: 98,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\workspace\\\\nextJS-blog-test 222\\\\app\\\\(post)\\\\post\\\\[id]\\\\page.jsx\",\n                lineNumber: 91,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col p-6 bg-white rounded-lg border\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                        className: \"w-full h-24 p-2 border border-gray-300 rounded-md\",\n                        placeholder: \"댓글을 입력하세요\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\workspace\\\\nextJS-blog-test 222\\\\app\\\\(post)\\\\post\\\\[id]\\\\page.jsx\",\n                        lineNumber: 109,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"mt-2 w-full bg-teal-500 text-white py-2 rounded-md hover:bg-teal-700\",\n                        children: \"등록\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\workspace\\\\nextJS-blog-test 222\\\\app\\\\(post)\\\\post\\\\[id]\\\\page.jsx\",\n                        lineNumber: 113,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-lg font-semibold mt-6 mb-4\",\n                        children: \"댓글 리스트\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\workspace\\\\nextJS-blog-test 222\\\\app\\\\(post)\\\\post\\\\[id]\\\\page.jsx\",\n                        lineNumber: 117,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"space-y-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-start p-4 bg-gray-100 rounded-lg shadow-sm\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex-shrink-0 mr-3\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold\",\n                                            children: \"S\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\workspace\\\\nextJS-blog-test 222\\\\app\\\\(post)\\\\post\\\\[id]\\\\page.jsx\",\n                                            lineNumber: 123,\n                                            columnNumber: 15\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\workspace\\\\nextJS-blog-test 222\\\\app\\\\(post)\\\\post\\\\[id]\\\\page.jsx\",\n                                        lineNumber: 122,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"text-sm font-bold\",\n                                                children: \"ssar\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\workspace\\\\nextJS-blog-test 222\\\\app\\\\(post)\\\\post\\\\[id]\\\\page.jsx\",\n                                                lineNumber: 128,\n                                                columnNumber: 15\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"text-gray-700\",\n                                                children: \"댓글1\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\workspace\\\\nextJS-blog-test 222\\\\app\\\\(post)\\\\post\\\\[id]\\\\page.jsx\",\n                                                lineNumber: 129,\n                                                columnNumber: 15\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\workspace\\\\nextJS-blog-test 222\\\\app\\\\(post)\\\\post\\\\[id]\\\\page.jsx\",\n                                        lineNumber: 127,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\workspace\\\\nextJS-blog-test 222\\\\app\\\\(post)\\\\post\\\\[id]\\\\page.jsx\",\n                                lineNumber: 121,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-start p-4 bg-gray-100 rounded-lg shadow-sm\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex-shrink-0 mr-3\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white font-bold\",\n                                            children: \"C\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\workspace\\\\nextJS-blog-test 222\\\\app\\\\(post)\\\\post\\\\[id]\\\\page.jsx\",\n                                            lineNumber: 136,\n                                            columnNumber: 15\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\workspace\\\\nextJS-blog-test 222\\\\app\\\\(post)\\\\post\\\\[id]\\\\page.jsx\",\n                                        lineNumber: 135,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"text-sm font-bold\",\n                                                children: \"cos\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\workspace\\\\nextJS-blog-test 222\\\\app\\\\(post)\\\\post\\\\[id]\\\\page.jsx\",\n                                                lineNumber: 141,\n                                                columnNumber: 15\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"text-gray-700\",\n                                                children: \"댓글2\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\workspace\\\\nextJS-blog-test 222\\\\app\\\\(post)\\\\post\\\\[id]\\\\page.jsx\",\n                                                lineNumber: 142,\n                                                columnNumber: 15\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\workspace\\\\nextJS-blog-test 222\\\\app\\\\(post)\\\\post\\\\[id]\\\\page.jsx\",\n                                        lineNumber: 140,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\workspace\\\\nextJS-blog-test 222\\\\app\\\\(post)\\\\post\\\\[id]\\\\page.jsx\",\n                                lineNumber: 134,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\workspace\\\\nextJS-blog-test 222\\\\app\\\\(post)\\\\post\\\\[id]\\\\page.jsx\",\n                        lineNumber: 119,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\workspace\\\\nextJS-blog-test 222\\\\app\\\\(post)\\\\post\\\\[id]\\\\page.jsx\",\n                lineNumber: 108,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\workspace\\\\nextJS-blog-test 222\\\\app\\\\(post)\\\\post\\\\[id]\\\\page.jsx\",\n        lineNumber: 80,\n        columnNumber: 5\n    }, this);\n}\n_s(Detail, \"eJYNczxMN9Lso/gtKmcJmk+qIoA=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter,\n        _util_AuthContext__WEBPACK_IMPORTED_MODULE_2__.useAuth\n    ];\n});\n_c = Detail;\nvar _c;\n$RefreshReg$(_c, \"Detail\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC8ocG9zdCkvcG9zdC9baWRdL3BhZ2UuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUU0QztBQUNRO0FBQzFCO0FBQ2tCO0FBRTdCLFNBQVNLLE9BQU8sS0FBVTtRQUFWLEVBQUVDLE1BQU0sRUFBRSxHQUFWOztJQUM3QixNQUFNQyxTQUFTSCwwREFBU0E7SUFDeEIsTUFBTSxFQUFFSSxJQUFJLEVBQUUsR0FBR04sMERBQU9BO0lBQ3hCLE1BQU0sQ0FBQ08sTUFBTUMsUUFBUSxHQUFHVCwrQ0FBUUEsQ0FBQztJQUNqQ1UsUUFBUUMsR0FBRyxDQUFDLGFBQWFDLEtBQUtDLFNBQVMsQ0FBQ1I7SUFDeEMsTUFBTSxFQUFFUyxFQUFFLEVBQUUsR0FBR1Q7SUFFZixZQUFZO0lBQ1pOLGdEQUFTQSxDQUFDO1FBQ1IsTUFBTWdCLFlBQVk7WUFDaEIsSUFBSTtnQkFDRixxQkFBcUI7Z0JBQ3JCLE1BQU1DLE1BQU0sTUFBTWQsNkNBQUtBLENBQUNNLElBQUksQ0FBQyxlQUFrQixPQUFITSxLQUFNO29CQUNoREE7Z0JBQ0Y7Z0JBRUFKLFFBQVFDLEdBQUcsQ0FBQyxhQUFhQyxLQUFLQyxTQUFTLENBQUNHO2dCQUV4QyxJQUFJQSxJQUFJQyxNQUFNLEtBQUssS0FBSztvQkFDdEIsaUJBQWlCO29CQUNqQlIsUUFBUU8sSUFBSUUsSUFBSSxDQUFDQyxJQUFJO29CQUNyQlQsUUFBUUMsR0FBRyxDQUFDLFNBQVNDLEtBQUtDLFNBQVMsQ0FBQ0csSUFBSUUsSUFBSTtvQkFDNUNSLFFBQVFDLEdBQUcsQ0FBQyxTQUFTQyxLQUFLQyxTQUFTLENBQUNHLElBQUlFLElBQUksQ0FBQ0MsSUFBSSxDQUFDLEVBQUUsQ0FBQ0wsRUFBRTtnQkFDekQ7WUFDRixFQUFFLE9BQU9NLE9BQU87Z0JBQ2RWLFFBQVFDLEdBQUcsQ0FBQyxVQUFVUztnQkFDdEIsSUFBSUEsTUFBTUMsUUFBUSxFQUFFO29CQUNsQix1QkFBdUI7b0JBQ3ZCQyxNQUFNRixNQUFNQyxRQUFRLENBQUNILElBQUksQ0FBQ0ssR0FBRztnQkFDL0I7WUFDRjtRQUNGO1FBQ0FSO0lBQ0YsR0FBRztRQUFDRDtLQUFHO0lBRVAsSUFBSSxDQUFDTixNQUFNO1FBQ1QscUJBQU8sOERBQUNnQjtzQkFBSTs7Ozs7O0lBQ2Q7SUFDQSxjQUFjO0lBRWQsU0FBUztJQUVULE1BQU1DLGFBQWE7UUFDakIsSUFBSSxDQUFDQyxRQUFRLGlCQUFpQjtZQUM1QjtRQUNGO1FBRUEsSUFBSTtZQUNGLHFCQUFxQjtZQUNyQixNQUFNVixNQUFNLE1BQU1kLDZDQUFLQSxDQUFDeUIsTUFBTSxDQUFDLG9CQUF1QixPQUFIYjtZQUVuRCxpREFBaUQ7WUFFakQsSUFBSUUsSUFBSUMsTUFBTSxLQUFLLEtBQUs7Z0JBQ3RCUCxRQUFRQyxHQUFHLENBQUM7Z0JBQ1osa0RBQWtEO2dCQUNsRFcsTUFBTTtnQkFDTmhCLE9BQU9zQixJQUFJLENBQUM7Z0JBQ1pDLFdBQVc7b0JBQ1RDLE9BQU9DLFFBQVEsQ0FBQ0MsTUFBTSxJQUFJLE9BQU87Z0JBQ25DLEdBQUcsS0FBSyxlQUFlO1lBQ3pCO1FBQ0YsRUFBRSxPQUFPWixPQUFPO1lBQ2QsSUFBSUEsTUFBTUMsUUFBUSxFQUFFO2dCQUNsQix1QkFBdUI7Z0JBQ3ZCQyxNQUFNRixNQUFNQyxRQUFRLENBQUNILElBQUksQ0FBQ0ssR0FBRztZQUMvQjtRQUNGO0lBQ0Y7SUFDQSxXQUFXO0lBRVgscUJBQ0UsOERBQUNDO1FBQUlTLFdBQVU7OzBCQUNiLDhEQUFDVDtnQkFBSVMsV0FBVTs7a0NBQ2IsOERBQUNDO3dCQUFHRCxXQUFVO2tDQUFpQnpCLEtBQUsyQixLQUFLOzs7Ozs7a0NBQ3pDLDhEQUFDQzt3QkFBRUgsV0FBVTtrQ0FBZ0J6QixLQUFLNkIsU0FBUzs7Ozs7Ozs7Ozs7OzBCQUU3Qyw4REFBQ0M7Ozs7OzBCQUNELDhEQUFDZDswQkFDQyw0RUFBQ1U7b0JBQUdELFdBQVU7OEJBQVN6QixLQUFLK0IsT0FBTzs7Ozs7Ozs7Ozs7WUFHcENoQyxRQUFRQSxLQUFLWSxJQUFJLENBQUMsRUFBRSxDQUFDTCxFQUFFLEtBQUtOLEtBQUtnQyxNQUFNLGtCQUN0Qyw4REFBQ2hCO2dCQUFJUyxXQUFVOztrQ0FDYiw4REFBQ1E7d0JBQ0NSLFdBQVU7d0JBQ1ZTLFNBQVMsSUFBTXBDLE9BQU9zQixJQUFJLENBQUM7a0NBQzVCOzs7Ozs7a0NBR0QsOERBQUNhO3dCQUNDUixXQUFVO3dCQUNWUyxTQUFTakI7a0NBQ1Y7Ozs7Ozs7Ozs7OzswQkFPTCw4REFBQ0Q7Z0JBQUlTLFdBQVU7O2tDQUNiLDhEQUFDVTt3QkFDQ1YsV0FBVTt3QkFDVlcsYUFBWTs7Ozs7O2tDQUVkLDhEQUFDSDt3QkFBT1IsV0FBVTtrQ0FBdUU7Ozs7OztrQ0FJekYsOERBQUNUO3dCQUFJUyxXQUFVO2tDQUFrQzs7Ozs7O2tDQUVqRCw4REFBQ1Q7d0JBQUlTLFdBQVU7OzBDQUViLDhEQUFDVDtnQ0FBSVMsV0FBVTs7a0RBQ2IsOERBQUNUO3dDQUFJUyxXQUFVO2tEQUNiLDRFQUFDVDs0Q0FBSVMsV0FBVTtzREFBMkY7Ozs7Ozs7Ozs7O2tEQUk1Ryw4REFBQ1Q7OzBEQUNDLDhEQUFDQTtnREFBSVMsV0FBVTswREFBb0I7Ozs7OzswREFDbkMsOERBQUNUO2dEQUFJUyxXQUFVOzBEQUFnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBDQUtuQyw4REFBQ1Q7Z0NBQUlTLFdBQVU7O2tEQUNiLDhEQUFDVDt3Q0FBSVMsV0FBVTtrREFDYiw0RUFBQ1Q7NENBQUlTLFdBQVU7c0RBQTRGOzs7Ozs7Ozs7OztrREFJN0csOERBQUNUOzswREFDQyw4REFBQ0E7Z0RBQUlTLFdBQVU7MERBQW9COzs7Ozs7MERBQ25DLDhEQUFDVDtnREFBSVMsV0FBVTswREFBZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVE3QztHQTlJd0I3Qjs7UUFDUEQsc0RBQVNBO1FBQ1BGLHNEQUFPQTs7O0tBRkZHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC8ocG9zdCkvcG9zdC9baWRdL3BhZ2UuanN4P2E1MDQiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcblxyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZUF1dGggfSBmcm9tIFwiLi4vLi4vLi4vdXRpbC9BdXRoQ29udGV4dFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERldGFpbCh7IHBhcmFtcyB9KSB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgeyB1c2VyIH0gPSB1c2VBdXRoKCk7XHJcbiAgY29uc3QgW3Bvc3QsIHNldFBvc3RdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc29sZS5sb2coXCJwYXJhbSA9IFwiICsgSlNPTi5zdHJpbmdpZnkocGFyYW1zKSk7XHJcbiAgY29uc3QgeyBpZCB9ID0gcGFyYW1zO1xyXG5cclxuICAvLyDqsozsi5zquIAg7IOB7IS4IOyhsO2ajFxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBmZXRjaFBvc3QgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgLy8g7JWg6rCAIHJlcXVlc3Tsl5Ag64u06rKo7JW87ZWY64qU642wXHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MucG9zdChgL2FwaS9kZXRhaWwvJHtpZH1gLCB7XHJcbiAgICAgICAgICBpZCxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJyZXNzc3NzIFwiICsgSlNPTi5zdHJpbmdpZnkocmVzKSk7XHJcblxyXG4gICAgICAgIGlmIChyZXMuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICAgIC8vIGFsZXJ0KFwi7ISx6rO1ISFcIik7XHJcbiAgICAgICAgICBzZXRQb3N0KHJlcy5kYXRhLmJvZHkpO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJzc3MgXCIgKyBKU09OLnN0cmluZ2lmeShyZXMuZGF0YSkpO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJzc3MgXCIgKyBKU09OLnN0cmluZ2lmeShyZXMuZGF0YS5ib2R5WzBdLmlkKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwi7JeQ65+sIOuwnOyDnTpcIiwgZXJyb3IpO1xyXG4gICAgICAgIGlmIChlcnJvci5yZXNwb25zZSkge1xyXG4gICAgICAgICAgLy8gY29uc29sZS5sb2coXCLsl5Drn6zsl5Drn6xcIik7XHJcbiAgICAgICAgICBhbGVydChlcnJvci5yZXNwb25zZS5kYXRhLm1zZyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgZmV0Y2hQb3N0KCk7XHJcbiAgfSwgW2lkXSk7XHJcblxyXG4gIGlmICghcG9zdCkge1xyXG4gICAgcmV0dXJuIDxkaXY+TG9hZGluZy4uLjwvZGl2PjtcclxuICB9XHJcbiAgLy8g6rKM7Iuc6riAIOyDgeyEuCDsobDtmowg64GdXHJcblxyXG4gIC8vIOqyjOyLnOq4gCDsgq3soJxcclxuXHJcbiAgY29uc3QgZGVsZXRlUG9zdCA9IGFzeW5jICgpID0+IHtcclxuICAgIGlmICghY29uZmlybShcIuygleunkCDsgq3soJztlZjsi5zqsqDsirXri4jquYw/XCIpKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAvLyDslaDqsIAgcmVxdWVzdOyXkCDri7TqsqjslbztlZjripTrjbBcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZGVsZXRlKGAvYXBpL3Bvc3QvZGVsZXRlLyR7aWR9YCk7XHJcblxyXG4gICAgICAvLyBjb25zb2xlLmxvZyhcInJlc3Nzc3MgXCIgKyBKU09OLnN0cmluZ2lmeShyZXMpKTtcclxuXHJcbiAgICAgIGlmIChyZXMuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIuyekeuPmT8/Pz8/Pz9cIik7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJzc3MgXCIgKyBKU09OLnN0cmluZ2lmeShyZXMuZGF0YSkpO1xyXG4gICAgICAgIGFsZXJ0KFwi7IKt7KCc65CY7JeI7Iq164uI64ukXCIpO1xyXG4gICAgICAgIHJvdXRlci5wdXNoKFwiL1wiKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTsgLy8g7IOI66Gc6rOg7LmoXHJcbiAgICAgICAgfSwgNTApOyAvLyAxMDBtcyDtm4Qg7IOI66Gc6rOg7LmoXHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGlmIChlcnJvci5yZXNwb25zZSkge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwi7JeQ65+s7JeQ65+sXCIpO1xyXG4gICAgICAgIGFsZXJ0KGVycm9yLnJlc3BvbnNlLmRhdGEubXNnKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcbiAgLy8g6rKM7Iuc6riAIOyCreygnCDrgZ1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBteC00IGgtc2NyZWVuIGp1c3RpZnktc3RhcnQgZ2FwLXktNFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cganVzdGlmeS1iZXR3ZWVuXCI+XHJcbiAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRleHQtNHhsIHB5LTRcIj57cG9zdC50aXRsZX08L2g0PlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cIm10LWF1dG8gbXItNVwiPntwb3N0LmNyZWF0ZWRBdH08L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8aHI+PC9ocj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8aDQgY2xhc3NOYW1lPVwibWItNDBcIj57cG9zdC5jb250ZW50fTwvaDQ+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAge3VzZXIgJiYgdXNlci5ib2R5WzBdLmlkID09PSBwb3N0LnVzZXJJZCAmJiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGp1c3RpZnktZW5kXCI+XHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlciBwLTIgYmctdGVhbC02MDAgcm91bmRlZC1tZCB0ZXh0LXdoaXRlIGhvdmVyOmJnLXRlYWwtODAwXCJcclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goXCIvcG9zdC91cGRhdGVGb3JtLzNcIil9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIOyImOyglVxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlciBwLTIgYmctcmVkLTcwMCByb3VuZGVkLW1kIHRleHQtd2hpdGUgbXItNSBob3ZlcjpiZy1yZWQtODAwXCJcclxuICAgICAgICAgICAgb25DbGljaz17ZGVsZXRlUG9zdH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAg7IKt7KCcXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuXHJcbiAgICAgIHsvKiDrjJPquIAg67ewICovfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgcC02IGJnLXdoaXRlIHJvdW5kZWQtbGcgYm9yZGVyXCI+XHJcbiAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgaC0yNCBwLTIgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLW1kXCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwi64yT6riA7J2EIOyeheugpe2VmOyEuOyalFwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm10LTIgdy1mdWxsIGJnLXRlYWwtNTAwIHRleHQtd2hpdGUgcHktMiByb3VuZGVkLW1kIGhvdmVyOmJnLXRlYWwtNzAwXCI+XHJcbiAgICAgICAgICDrk7HroZ1cclxuICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtc2VtaWJvbGQgbXQtNiBtYi00XCI+64yT6riAIOumrOyKpO2KuDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktNFwiPlxyXG4gICAgICAgICAgey8qIOuMk+q4gDEgKi99XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtc3RhcnQgcC00IGJnLWdyYXktMTAwIHJvdW5kZWQtbGcgc2hhZG93LXNtXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1zaHJpbmstMCBtci0zXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEwIGgtMTAgcm91bmRlZC1mdWxsIGJnLWJsdWUtNTAwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHRleHQtd2hpdGUgZm9udC1ib2xkXCI+XHJcbiAgICAgICAgICAgICAgICBTXHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LWJvbGRcIj5zc2FyPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNzAwXCI+64yT6riAMTwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgey8qIOuMk+q4gCAxIOuBnSAqL31cclxuICAgICAgICAgIHsvKiDrjJPquIAgMiAqL31cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1zdGFydCBwLTQgYmctZ3JheS0xMDAgcm91bmRlZC1sZyBzaGFkb3ctc21cIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LXNocmluay0wIG1yLTNcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTAgaC0xMCByb3VuZGVkLWZ1bGwgYmctZ3JlZW4tNTAwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHRleHQtd2hpdGUgZm9udC1ib2xkXCI+XHJcbiAgICAgICAgICAgICAgICBDXHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LWJvbGRcIj5jb3M8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtZ3JheS03MDBcIj7rjJPquIAyPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB7Lyog64yT6riAIDIg64GdICovfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlQXV0aCIsImF4aW9zIiwidXNlUm91dGVyIiwiRGV0YWlsIiwicGFyYW1zIiwicm91dGVyIiwidXNlciIsInBvc3QiLCJzZXRQb3N0IiwiY29uc29sZSIsImxvZyIsIkpTT04iLCJzdHJpbmdpZnkiLCJpZCIsImZldGNoUG9zdCIsInJlcyIsInN0YXR1cyIsImRhdGEiLCJib2R5IiwiZXJyb3IiLCJyZXNwb25zZSIsImFsZXJ0IiwibXNnIiwiZGl2IiwiZGVsZXRlUG9zdCIsImNvbmZpcm0iLCJkZWxldGUiLCJwdXNoIiwic2V0VGltZW91dCIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVsb2FkIiwiY2xhc3NOYW1lIiwiaDQiLCJ0aXRsZSIsInAiLCJjcmVhdGVkQXQiLCJociIsImNvbnRlbnQiLCJ1c2VySWQiLCJidXR0b24iLCJvbkNsaWNrIiwidGV4dGFyZWEiLCJwbGFjZWhvbGRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/(post)/post/[id]/page.jsx\n"));

/***/ })

});