"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./styles/global.css":
/*!***************************!*\
  !*** ./styles/global.css ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"7ea991fb8e76\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3N0eWxlcy9nbG9iYWwuY3NzIiwibWFwcGluZ3MiOiI7QUFBQSwrREFBZSxjQUFjO0FBQzdCLElBQUksSUFBVSxJQUFJLGlCQUFpQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zdHlsZXMvZ2xvYmFsLmNzcz9lOTRmIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IFwiN2VhOTkxZmI4ZTc2XCJcbmlmIChtb2R1bGUuaG90KSB7IG1vZHVsZS5ob3QuYWNjZXB0KCkgfVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./styles/global.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./app/util/AuthContext.js":
/*!*********************************!*\
  !*** ./app/util/AuthContext.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AuthProvider: function() { return /* binding */ AuthProvider; },\n/* harmony export */   useAuth: function() { return /* binding */ useAuth; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ \"(app-pages-browser)/./node_modules/js-cookie/dist/js.cookie.mjs\");\n/* __next_internal_client_entry_do_not_use__ AuthProvider,useAuth auto */ \nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n// 리액트 라이브러리 중 createContext   //전역변수 개념\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nfunction AuthProvider(param) {\n    let { children } = param;\n    _s();\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [isLogin, setIsLogin] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const route = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    // // 컴포넌트가 마운트될 때 로컬 스토리지에서 로그인 정보 복원\n    // useEffect(() => {\n    //   const user = localStorage.getItem(\"user\");\n    //   if (user) {\n    //     setUser(JSON.parse(user));\n    //     setIsLogin(true);\n    //   }\n    // }, []);\n    // 쿠키에서 로그인 정보 복원\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const user = js_cookie__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"user\");\n        if (user) {\n            setUser(JSON.parse(user));\n            setIsLogin(true);\n        }\n    }, []);\n    // res.data 주기 (userData)\n    // 사용자가 로그인할 때 전달되는 데이터. 사용자의 정보(예: 사용자 ID, 이름, 이메일 등)를 포함\n    const login = (userData)=>{\n        // console.log(\"userData \" + JSON.stringify(userData));\n        setUser(userData);\n        setIsLogin(true);\n        // localStorage.setItem(\"user\", JSON.stringify(userData)); // 로그인 정보 저장\n        js_cookie__WEBPACK_IMPORTED_MODULE_3__[\"default\"].set(\"user\", JSON.stringify(userData), {\n            expires: 7\n        }); // 쿠키에 로그인 정보 저장\n    };\n    const logout = ()=>{\n        setIsLogin(false);\n        alert(\"로그아웃 되었습니다!!\");\n        // localStorage.removeItem(\"user\"); // 로그인 정보 삭제\n        js_cookie__WEBPACK_IMPORTED_MODULE_3__[\"default\"].remove(\"user\"); // 쿠키에 로그인 정보 삭제\n        route.push(\"/\");\n    };\n    // console.log(\"로그인 상태 \" + isLogin);\n    // console.log(\"로그인 유저 정보 \" + JSON.stringify(user));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: {\n            isLogin,\n            login,\n            logout,\n            user\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\aico-2\\\\Desktop\\\\workspace\\\\nestJS-blog-final\\\\app\\\\util\\\\AuthContext.js\",\n        lineNumber: 55,\n        columnNumber: 5\n    }, this);\n}\n_s(AuthProvider, \"f7U5h6lgi9aCMK1Yp0qhEcK7qJY=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = AuthProvider;\nfunction useAuth() {\n    _s1();\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AuthContext);\n}\n_s1(useAuth, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\nvar _c;\n$RefreshReg$(_c, \"AuthProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC91dGlsL0F1dGhDb250ZXh0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUV1RTtBQUMzQjtBQUNaO0FBRWhDLHdDQUF3QztBQUN4QyxNQUFNTSw0QkFBY04sb0RBQWFBO0FBRTFCLFNBQVNPLGFBQWEsS0FBWTtRQUFaLEVBQUVDLFFBQVEsRUFBRSxHQUFaOztJQUMzQixNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR1AsK0NBQVFBLENBQUM7SUFDakMsTUFBTSxDQUFDUSxTQUFTQyxXQUFXLEdBQUdULCtDQUFRQSxDQUFDO0lBQ3ZDLE1BQU1VLFFBQVFULDBEQUFTQTtJQUV2QixzQ0FBc0M7SUFDdEMsb0JBQW9CO0lBQ3BCLCtDQUErQztJQUMvQyxnQkFBZ0I7SUFDaEIsaUNBQWlDO0lBQ2pDLHdCQUF3QjtJQUN4QixNQUFNO0lBQ04sVUFBVTtJQUVWLGlCQUFpQjtJQUNqQkYsZ0RBQVNBLENBQUM7UUFDUixNQUFNTyxPQUFPSixpREFBT0EsQ0FBQ1MsR0FBRyxDQUFDO1FBQ3pCLElBQUlMLE1BQU07WUFDUkMsUUFBUUssS0FBS0MsS0FBSyxDQUFDUDtZQUNuQkcsV0FBVztRQUNiO0lBQ0YsR0FBRyxFQUFFO0lBRUwseUJBQXlCO0lBQ3pCLDBEQUEwRDtJQUMxRCxNQUFNSyxRQUFRLENBQUNDO1FBQ2IsdURBQXVEO1FBQ3ZEUixRQUFRUTtRQUNSTixXQUFXO1FBQ1gsdUVBQXVFO1FBQ3ZFUCxpREFBT0EsQ0FBQ2MsR0FBRyxDQUFDLFFBQVFKLEtBQUtLLFNBQVMsQ0FBQ0YsV0FBVztZQUFFRyxTQUFTO1FBQUUsSUFBSSxnQkFBZ0I7SUFDakY7SUFFQSxNQUFNQyxTQUFTO1FBQ2JWLFdBQVc7UUFDWFcsTUFBTTtRQUNOLGdEQUFnRDtRQUNoRGxCLGlEQUFPQSxDQUFDbUIsTUFBTSxDQUFDLFNBQVMsZ0JBQWdCO1FBQ3hDWCxNQUFNWSxJQUFJLENBQUM7SUFDYjtJQUVBLG9DQUFvQztJQUNwQyxvREFBb0Q7SUFFcEQscUJBQ0UsOERBQUNuQixZQUFZb0IsUUFBUTtRQUFDQyxPQUFPO1lBQUVoQjtZQUFTTTtZQUFPSztZQUFRYjtRQUFLO2tCQUN6REQ7Ozs7OztBQUdQO0dBakRnQkQ7O1FBR0FILHNEQUFTQTs7O0tBSFRHO0FBbURULFNBQVNxQjs7SUFDZCxPQUFPM0IsaURBQVVBLENBQUNLO0FBQ3BCO0lBRmdCc0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3V0aWwvQXV0aENvbnRleHQuanM/ZmEyMiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuXHJcbmltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xyXG5pbXBvcnQgQ29va2llcyBmcm9tIFwianMtY29va2llXCI7XHJcblxyXG4vLyDrpqzslaHtirgg65287J2067iM65+s66asIOykkSBjcmVhdGVDb250ZXh0ICAgLy/soITsl63rs4DsiJgg6rCc64WQXHJcbmNvbnN0IEF1dGhDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEF1dGhQcm92aWRlcih7IGNoaWxkcmVuIH0pIHtcclxuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbaXNMb2dpbiwgc2V0SXNMb2dpbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3Qgcm91dGUgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgLy8gLy8g7Lu07Y+s64SM7Yq46rCAIOuniOyatO2KuOuQoCDrlYwg66Gc7LusIOyKpO2GoOumrOyngOyXkOyEnCDroZzqt7jsnbgg7KCV67O0IOuzteybkFxyXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgLy8gICBjb25zdCB1c2VyID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyXCIpO1xyXG4gIC8vICAgaWYgKHVzZXIpIHtcclxuICAvLyAgICAgc2V0VXNlcihKU09OLnBhcnNlKHVzZXIpKTtcclxuICAvLyAgICAgc2V0SXNMb2dpbih0cnVlKTtcclxuICAvLyAgIH1cclxuICAvLyB9LCBbXSk7XHJcblxyXG4gIC8vIOy/oO2CpOyXkOyEnCDroZzqt7jsnbgg7KCV67O0IOuzteybkFxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCB1c2VyID0gQ29va2llcy5nZXQoXCJ1c2VyXCIpO1xyXG4gICAgaWYgKHVzZXIpIHtcclxuICAgICAgc2V0VXNlcihKU09OLnBhcnNlKHVzZXIpKTtcclxuICAgICAgc2V0SXNMb2dpbih0cnVlKTtcclxuICAgIH1cclxuICB9LCBbXSk7XHJcblxyXG4gIC8vIHJlcy5kYXRhIOyjvOq4sCAodXNlckRhdGEpXHJcbiAgLy8g7IKs7Jqp7J6Q6rCAIOuhnOq3uOyduO2VoCDrlYwg7KCE64us65CY64qUIOuNsOydtO2EsC4g7IKs7Jqp7J6Q7J2YIOygleuztCjsmIg6IOyCrOyaqeyekCBJRCwg7J2066aELCDsnbTrqZTsnbwg65OxKeulvCDtj6ztlahcclxuICBjb25zdCBsb2dpbiA9ICh1c2VyRGF0YSkgPT4ge1xyXG4gICAgLy8gY29uc29sZS5sb2coXCJ1c2VyRGF0YSBcIiArIEpTT04uc3RyaW5naWZ5KHVzZXJEYXRhKSk7XHJcbiAgICBzZXRVc2VyKHVzZXJEYXRhKTtcclxuICAgIHNldElzTG9naW4odHJ1ZSk7XHJcbiAgICAvLyBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInVzZXJcIiwgSlNPTi5zdHJpbmdpZnkodXNlckRhdGEpKTsgLy8g66Gc6re47J24IOygleuztCDsoIDsnqVcclxuICAgIENvb2tpZXMuc2V0KFwidXNlclwiLCBKU09OLnN0cmluZ2lmeSh1c2VyRGF0YSksIHsgZXhwaXJlczogNyB9KTsgLy8g7L+g7YKk7JeQIOuhnOq3uOyduCDsoJXrs7Qg7KCA7J6lXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgbG9nb3V0ID0gKCkgPT4ge1xyXG4gICAgc2V0SXNMb2dpbihmYWxzZSk7XHJcbiAgICBhbGVydChcIuuhnOq3uOyVhOybgyDrkJjsl4jsirXri4jri6QhIVwiKTtcclxuICAgIC8vIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwidXNlclwiKTsgLy8g66Gc6re47J24IOygleuztCDsgq3soJxcclxuICAgIENvb2tpZXMucmVtb3ZlKFwidXNlclwiKTsgLy8g7L+g7YKk7JeQIOuhnOq3uOyduCDsoJXrs7Qg7IKt7KCcXHJcbiAgICByb3V0ZS5wdXNoKFwiL1wiKTtcclxuICB9O1xyXG5cclxuICAvLyBjb25zb2xlLmxvZyhcIuuhnOq3uOyduCDsg4Htg5wgXCIgKyBpc0xvZ2luKTtcclxuICAvLyBjb25zb2xlLmxvZyhcIuuhnOq3uOyduCDsnKDsoIAg7KCV67O0IFwiICsgSlNPTi5zdHJpbmdpZnkodXNlcikpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEF1dGhDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IGlzTG9naW4sIGxvZ2luLCBsb2dvdXQsIHVzZXIgfX0+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvQXV0aENvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZUF1dGgoKSB7XHJcbiAgcmV0dXJuIHVzZUNvbnRleHQoQXV0aENvbnRleHQpO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlUm91dGVyIiwiQ29va2llcyIsIkF1dGhDb250ZXh0IiwiQXV0aFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJ1c2VyIiwic2V0VXNlciIsImlzTG9naW4iLCJzZXRJc0xvZ2luIiwicm91dGUiLCJnZXQiLCJKU09OIiwicGFyc2UiLCJsb2dpbiIsInVzZXJEYXRhIiwic2V0Iiwic3RyaW5naWZ5IiwiZXhwaXJlcyIsImxvZ291dCIsImFsZXJ0IiwicmVtb3ZlIiwicHVzaCIsIlByb3ZpZGVyIiwidmFsdWUiLCJ1c2VBdXRoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/util/AuthContext.js\n"));

/***/ })

});