"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(user)/user/loginForm/page",{

/***/ "(app-pages-browser)/./app/util/AuthContext.js":
/*!*********************************!*\
  !*** ./app/util/AuthContext.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AuthProvider: function() { return /* binding */ AuthProvider; },\n/* harmony export */   useAuth: function() { return /* binding */ useAuth; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ \"(app-pages-browser)/./node_modules/js-cookie/dist/js.cookie.mjs\");\n/* __next_internal_client_entry_do_not_use__ AuthProvider,useAuth auto */ \nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n// 리액트 라이브러리 중 createContext   //전역변수 개념\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nfunction AuthProvider(param) {\n    let { children } = param;\n    _s();\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [isLogin, setIsLogin] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const route = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const sessionUser = ()=>{\n        const user = js_cookie__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"user\");\n        if (user) {\n            setUser(JSON.parse(user));\n            setIsLogin(true);\n        }\n    };\n    // res.data 주기 (userData)\n    // 사용자가 로그인할 때 전달되는 데이터. 사용자의 정보(예: 사용자 ID, 이름, 이메일 등)를 포함\n    const login = (userData)=>{\n        // console.log(\"userData \" + JSON.stringify(userData));\n        setUser(userData);\n        setIsLogin(true);\n        // localStorage.setItem(\"user\", JSON.stringify(userData)); // 로그인 정보 저장\n        js_cookie__WEBPACK_IMPORTED_MODULE_3__[\"default\"].set(\"user\", JSON.stringify(userData), {\n            expires: 7\n        }); // 쿠키에 로그인 정보 저장\n    };\n    const logout = ()=>{\n        setIsLogin(false);\n        alert(\"로그아웃 되었습니다!!\");\n        // localStorage.removeItem(\"user\"); // 로그인 정보 삭제\n        js_cookie__WEBPACK_IMPORTED_MODULE_3__[\"default\"].remove(\"user\"); // 쿠키에 로그인 정보 삭제\n        route.push(\"/\");\n    };\n    // console.log(\"로그인 상태 \" + isLogin);\n    // console.log(\"로그인 유저 정보 \" + JSON.stringify(user));\n    if (loading) {\n        return null; // 로딩 중인 경우 아무것도 렌더링하지 않음\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: {\n            isLogin,\n            login,\n            logout,\n            user\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\aico-2\\\\Desktop\\\\workspace\\\\nestJS-blog-final\\\\app\\\\util\\\\AuthContext.js\",\n        lineNumber: 50,\n        columnNumber: 5\n    }, this);\n}\n_s(AuthProvider, \"qCoTVMcx56AS8imFKa6ajma82qQ=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = AuthProvider;\nfunction useAuth() {\n    _s1();\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AuthContext);\n}\n_s1(useAuth, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\nvar _c;\n$RefreshReg$(_c, \"AuthProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC91dGlsL0F1dGhDb250ZXh0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUV1RTtBQUMzQjtBQUNaO0FBRWhDLHdDQUF3QztBQUN4QyxNQUFNTSw0QkFBY04sb0RBQWFBO0FBRTFCLFNBQVNPLGFBQWEsS0FBWTtRQUFaLEVBQUVDLFFBQVEsRUFBRSxHQUFaOztJQUMzQixNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR1AsK0NBQVFBLENBQUM7SUFDakMsTUFBTSxDQUFDUSxTQUFTQyxXQUFXLEdBQUdULCtDQUFRQSxDQUFDO0lBQ3ZDLE1BQU0sQ0FBQ1UsU0FBU0MsV0FBVyxHQUFHWCwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNWSxRQUFRWCwwREFBU0E7SUFFdkIsTUFBTVksY0FBYztRQUNsQixNQUFNUCxPQUFPSixpREFBT0EsQ0FBQ1ksR0FBRyxDQUFDO1FBQ3pCLElBQUlSLE1BQU07WUFDUkMsUUFBUVEsS0FBS0MsS0FBSyxDQUFDVjtZQUNuQkcsV0FBVztRQUNiO0lBQ0Y7SUFFQSx5QkFBeUI7SUFDekIsMERBQTBEO0lBQzFELE1BQU1RLFFBQVEsQ0FBQ0M7UUFDYix1REFBdUQ7UUFDdkRYLFFBQVFXO1FBQ1JULFdBQVc7UUFDWCx1RUFBdUU7UUFDdkVQLGlEQUFPQSxDQUFDaUIsR0FBRyxDQUFDLFFBQVFKLEtBQUtLLFNBQVMsQ0FBQ0YsV0FBVztZQUFFRyxTQUFTO1FBQUUsSUFBSSxnQkFBZ0I7SUFDakY7SUFFQSxNQUFNQyxTQUFTO1FBQ2JiLFdBQVc7UUFDWGMsTUFBTTtRQUNOLGdEQUFnRDtRQUNoRHJCLGlEQUFPQSxDQUFDc0IsTUFBTSxDQUFDLFNBQVMsZ0JBQWdCO1FBQ3hDWixNQUFNYSxJQUFJLENBQUM7SUFDYjtJQUVBLG9DQUFvQztJQUNwQyxvREFBb0Q7SUFFcEQsSUFBSWYsU0FBUztRQUNYLE9BQU8sTUFBTSx5QkFBeUI7SUFDeEM7SUFFQSxxQkFDRSw4REFBQ1AsWUFBWXVCLFFBQVE7UUFBQ0MsT0FBTztZQUFFbkI7WUFBU1M7WUFBT0s7WUFBUWhCO1FBQUs7a0JBQ3pERDs7Ozs7O0FBR1A7R0E1Q2dCRDs7UUFJQUgsc0RBQVNBOzs7S0FKVEc7QUE4Q1QsU0FBU3dCOztJQUNkLE9BQU85QixpREFBVUEsQ0FBQ0s7QUFDcEI7SUFGZ0J5QiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvdXRpbC9BdXRoQ29udGV4dC5qcz9mYTIyIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5cclxuaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XHJcbmltcG9ydCBDb29raWVzIGZyb20gXCJqcy1jb29raWVcIjtcclxuXHJcbi8vIOumrOyVoe2KuCDrnbzsnbTruIzrn6zrpqwg7KSRIGNyZWF0ZUNvbnRleHQgICAvL+yghOyXreuzgOyImCDqsJzrhZBcclxuY29uc3QgQXV0aENvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQXV0aFByb3ZpZGVyKHsgY2hpbGRyZW4gfSkge1xyXG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtpc0xvZ2luLCBzZXRJc0xvZ2luXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCByb3V0ZSA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBjb25zdCBzZXNzaW9uVXNlciA9ICgpID0+IHtcclxuICAgIGNvbnN0IHVzZXIgPSBDb29raWVzLmdldChcInVzZXJcIik7XHJcbiAgICBpZiAodXNlcikge1xyXG4gICAgICBzZXRVc2VyKEpTT04ucGFyc2UodXNlcikpO1xyXG4gICAgICBzZXRJc0xvZ2luKHRydWUpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIC8vIHJlcy5kYXRhIOyjvOq4sCAodXNlckRhdGEpXHJcbiAgLy8g7IKs7Jqp7J6Q6rCAIOuhnOq3uOyduO2VoCDrlYwg7KCE64us65CY64qUIOuNsOydtO2EsC4g7IKs7Jqp7J6Q7J2YIOygleuztCjsmIg6IOyCrOyaqeyekCBJRCwg7J2066aELCDsnbTrqZTsnbwg65OxKeulvCDtj6ztlahcclxuICBjb25zdCBsb2dpbiA9ICh1c2VyRGF0YSkgPT4ge1xyXG4gICAgLy8gY29uc29sZS5sb2coXCJ1c2VyRGF0YSBcIiArIEpTT04uc3RyaW5naWZ5KHVzZXJEYXRhKSk7XHJcbiAgICBzZXRVc2VyKHVzZXJEYXRhKTtcclxuICAgIHNldElzTG9naW4odHJ1ZSk7XHJcbiAgICAvLyBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInVzZXJcIiwgSlNPTi5zdHJpbmdpZnkodXNlckRhdGEpKTsgLy8g66Gc6re47J24IOygleuztCDsoIDsnqVcclxuICAgIENvb2tpZXMuc2V0KFwidXNlclwiLCBKU09OLnN0cmluZ2lmeSh1c2VyRGF0YSksIHsgZXhwaXJlczogNyB9KTsgLy8g7L+g7YKk7JeQIOuhnOq3uOyduCDsoJXrs7Qg7KCA7J6lXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgbG9nb3V0ID0gKCkgPT4ge1xyXG4gICAgc2V0SXNMb2dpbihmYWxzZSk7XHJcbiAgICBhbGVydChcIuuhnOq3uOyVhOybgyDrkJjsl4jsirXri4jri6QhIVwiKTtcclxuICAgIC8vIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwidXNlclwiKTsgLy8g66Gc6re47J24IOygleuztCDsgq3soJxcclxuICAgIENvb2tpZXMucmVtb3ZlKFwidXNlclwiKTsgLy8g7L+g7YKk7JeQIOuhnOq3uOyduCDsoJXrs7Qg7IKt7KCcXHJcbiAgICByb3V0ZS5wdXNoKFwiL1wiKTtcclxuICB9O1xyXG5cclxuICAvLyBjb25zb2xlLmxvZyhcIuuhnOq3uOyduCDsg4Htg5wgXCIgKyBpc0xvZ2luKTtcclxuICAvLyBjb25zb2xlLmxvZyhcIuuhnOq3uOyduCDsnKDsoIAg7KCV67O0IFwiICsgSlNPTi5zdHJpbmdpZnkodXNlcikpO1xyXG5cclxuICBpZiAobG9hZGluZykge1xyXG4gICAgcmV0dXJuIG51bGw7IC8vIOuhnOuUqSDspJHsnbgg6rK97JqwIOyVhOustOqyg+uPhCDroIzrjZTrp4HtlZjsp4Ag7JWK7J2MXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEF1dGhDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IGlzTG9naW4sIGxvZ2luLCBsb2dvdXQsIHVzZXIgfX0+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvQXV0aENvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZUF1dGgoKSB7XHJcbiAgcmV0dXJuIHVzZUNvbnRleHQoQXV0aENvbnRleHQpO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlUm91dGVyIiwiQ29va2llcyIsIkF1dGhDb250ZXh0IiwiQXV0aFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJ1c2VyIiwic2V0VXNlciIsImlzTG9naW4iLCJzZXRJc0xvZ2luIiwibG9hZGluZyIsInNldExvYWRpbmciLCJyb3V0ZSIsInNlc3Npb25Vc2VyIiwiZ2V0IiwiSlNPTiIsInBhcnNlIiwibG9naW4iLCJ1c2VyRGF0YSIsInNldCIsInN0cmluZ2lmeSIsImV4cGlyZXMiLCJsb2dvdXQiLCJhbGVydCIsInJlbW92ZSIsInB1c2giLCJQcm92aWRlciIsInZhbHVlIiwidXNlQXV0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/util/AuthContext.js\n"));

/***/ })

});