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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"90b5dc822ee3\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3N0eWxlcy9nbG9iYWwuY3NzIiwibWFwcGluZ3MiOiI7QUFBQSwrREFBZSxjQUFjO0FBQzdCLElBQUksSUFBVSxJQUFJLGlCQUFpQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zdHlsZXMvZ2xvYmFsLmNzcz9lOTRmIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IFwiOTBiNWRjODIyZWUzXCJcbmlmIChtb2R1bGUuaG90KSB7IG1vZHVsZS5ob3QuYWNjZXB0KCkgfVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./styles/global.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./app/util/AuthContext.js":
/*!*********************************!*\
  !*** ./app/util/AuthContext.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AuthProvider: function() { return /* binding */ AuthProvider; },\n/* harmony export */   useAuth: function() { return /* binding */ useAuth; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ \"(app-pages-browser)/./node_modules/js-cookie/dist/js.cookie.mjs\");\n/* __next_internal_client_entry_do_not_use__ AuthProvider,useAuth auto */ \nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n// 리액트 라이브러리 중 createContext   //전역변수 개념\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nfunction AuthProvider(param) {\n    let { children } = param;\n    _s();\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [isLogin, setIsLogin] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const route = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    // // 컴포넌트가 마운트될 때 로컬 스토리지에서 로그인 정보 복원\n    // useEffect(() => {\n    //   const user = localStorage.getItem(\"user\");\n    //   if (user) {\n    //     setUser(JSON.parse(user));\n    //     setIsLogin(true);\n    //   }\n    // }, []);\n    // 쿠키에서 로그인 정보 복원\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const user = js_cookie__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"user\");\n        if (user) {\n            setUser(JSON.parse(user));\n            setIsLogin(true);\n        }\n    }, []);\n    // res.data 주기 (userData)\n    // 사용자가 로그인할 때 전달되는 데이터. 사용자의 정보(예: 사용자 ID, 이름, 이메일 등)를 포함\n    const login = (userData)=>{\n        // console.log(\"userData \" + JSON.stringify(userData));\n        setUser(userData);\n        setIsLogin(true);\n        // localStorage.setItem(\"user\", JSON.stringify(userData)); // 로그인 정보 저장\n        js_cookie__WEBPACK_IMPORTED_MODULE_3__[\"default\"].set(\"user\", JSON.stringify(userData), {\n            expires: 7\n        }); // 쿠키에 로그인 정보 저장\n    };\n    const logout = ()=>{\n        setIsLogin(false);\n        alert(\"로그아웃 되었습니다!!\");\n        // localStorage.removeItem(\"user\"); // 로그인 정보 삭제\n        js_cookie__WEBPACK_IMPORTED_MODULE_3__[\"default\"].remove(\"user\"); // 쿠키에 로그인 정보 삭제\n        route.push(\"/\");\n    };\n    // console.log(\"로그인 상태 \" + isLogin);\n    // console.log(\"로그인 유저 정보 \" + JSON.stringify(user));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: {\n            isLogin,\n            login,\n            logout,\n            user\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\aico-2\\\\Desktop\\\\workspace\\\\nestJS-blog-final\\\\app\\\\util\\\\AuthContext.js\",\n        lineNumber: 56,\n        columnNumber: 5\n    }, this);\n}\n_s(AuthProvider, \"I7IssiQ6lBnjSSW4WA7N/3EE8/0=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = AuthProvider;\nfunction useAuth() {\n    _s1();\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AuthContext);\n}\n_s1(useAuth, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\nvar _c;\n$RefreshReg$(_c, \"AuthProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC91dGlsL0F1dGhDb250ZXh0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUV1RTtBQUMzQjtBQUNaO0FBRWhDLHdDQUF3QztBQUN4QyxNQUFNTSw0QkFBY04sb0RBQWFBO0FBRTFCLFNBQVNPLGFBQWEsS0FBWTtRQUFaLEVBQUVDLFFBQVEsRUFBRSxHQUFaOztJQUMzQixNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR1AsK0NBQVFBLENBQUM7SUFDakMsTUFBTSxDQUFDUSxTQUFTQyxXQUFXLEdBQUdULCtDQUFRQSxDQUFDO0lBQ3ZDLE1BQU0sQ0FBQ1UsU0FBU0MsV0FBVyxHQUFHWCwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNWSxRQUFRWCwwREFBU0E7SUFFdkIsc0NBQXNDO0lBQ3RDLG9CQUFvQjtJQUNwQiwrQ0FBK0M7SUFDL0MsZ0JBQWdCO0lBQ2hCLGlDQUFpQztJQUNqQyx3QkFBd0I7SUFDeEIsTUFBTTtJQUNOLFVBQVU7SUFFVixpQkFBaUI7SUFDakJGLGdEQUFTQSxDQUFDO1FBQ1IsTUFBTU8sT0FBT0osaURBQU9BLENBQUNXLEdBQUcsQ0FBQztRQUN6QixJQUFJUCxNQUFNO1lBQ1JDLFFBQVFPLEtBQUtDLEtBQUssQ0FBQ1Q7WUFDbkJHLFdBQVc7UUFDYjtJQUNGLEdBQUcsRUFBRTtJQUVMLHlCQUF5QjtJQUN6QiwwREFBMEQ7SUFDMUQsTUFBTU8sUUFBUSxDQUFDQztRQUNiLHVEQUF1RDtRQUN2RFYsUUFBUVU7UUFDUlIsV0FBVztRQUNYLHVFQUF1RTtRQUN2RVAsaURBQU9BLENBQUNnQixHQUFHLENBQUMsUUFBUUosS0FBS0ssU0FBUyxDQUFDRixXQUFXO1lBQUVHLFNBQVM7UUFBRSxJQUFJLGdCQUFnQjtJQUNqRjtJQUVBLE1BQU1DLFNBQVM7UUFDYlosV0FBVztRQUNYYSxNQUFNO1FBQ04sZ0RBQWdEO1FBQ2hEcEIsaURBQU9BLENBQUNxQixNQUFNLENBQUMsU0FBUyxnQkFBZ0I7UUFDeENYLE1BQU1ZLElBQUksQ0FBQztJQUNiO0lBRUEsb0NBQW9DO0lBQ3BDLG9EQUFvRDtJQUVwRCxxQkFDRSw4REFBQ3JCLFlBQVlzQixRQUFRO1FBQUNDLE9BQU87WUFBRWxCO1lBQVNRO1lBQU9LO1lBQVFmO1FBQUs7a0JBQ3pERDs7Ozs7O0FBR1A7R0FsRGdCRDs7UUFJQUgsc0RBQVNBOzs7S0FKVEc7QUFvRFQsU0FBU3VCOztJQUNkLE9BQU83QixpREFBVUEsQ0FBQ0s7QUFDcEI7SUFGZ0J3QiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvdXRpbC9BdXRoQ29udGV4dC5qcz9mYTIyIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5cclxuaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XHJcbmltcG9ydCBDb29raWVzIGZyb20gXCJqcy1jb29raWVcIjtcclxuXHJcbi8vIOumrOyVoe2KuCDrnbzsnbTruIzrn6zrpqwg7KSRIGNyZWF0ZUNvbnRleHQgICAvL+yghOyXreuzgOyImCDqsJzrhZBcclxuY29uc3QgQXV0aENvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQXV0aFByb3ZpZGVyKHsgY2hpbGRyZW4gfSkge1xyXG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtpc0xvZ2luLCBzZXRJc0xvZ2luXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCByb3V0ZSA9IHVzZVJvdXRlcigpO1xyXG5cclxuICAvLyAvLyDsu7Ttj6zrhIztirjqsIAg66eI7Jq07Yq465CgIOuVjCDroZzsu6wg7Iqk7Yag66as7KeA7JeQ7IScIOuhnOq3uOyduCDsoJXrs7Qg67O17JuQXHJcbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcclxuICAvLyAgIGNvbnN0IHVzZXIgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJcIik7XHJcbiAgLy8gICBpZiAodXNlcikge1xyXG4gIC8vICAgICBzZXRVc2VyKEpTT04ucGFyc2UodXNlcikpO1xyXG4gIC8vICAgICBzZXRJc0xvZ2luKHRydWUpO1xyXG4gIC8vICAgfVxyXG4gIC8vIH0sIFtdKTtcclxuXHJcbiAgLy8g7L+g7YKk7JeQ7IScIOuhnOq3uOyduCDsoJXrs7Qg67O17JuQXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHVzZXIgPSBDb29raWVzLmdldChcInVzZXJcIik7XHJcbiAgICBpZiAodXNlcikge1xyXG4gICAgICBzZXRVc2VyKEpTT04ucGFyc2UodXNlcikpO1xyXG4gICAgICBzZXRJc0xvZ2luKHRydWUpO1xyXG4gICAgfVxyXG4gIH0sIFtdKTtcclxuXHJcbiAgLy8gcmVzLmRhdGEg7KO86riwICh1c2VyRGF0YSlcclxuICAvLyDsgqzsmqnsnpDqsIAg66Gc6re47J247ZWgIOuVjCDsoITri6zrkJjripQg642w7J207YSwLiDsgqzsmqnsnpDsnZgg7KCV67O0KOyYiDog7IKs7Jqp7J6QIElELCDsnbTrpoQsIOydtOuplOydvCDrk7Ep66W8IO2PrO2VqFxyXG4gIGNvbnN0IGxvZ2luID0gKHVzZXJEYXRhKSA9PiB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhcInVzZXJEYXRhIFwiICsgSlNPTi5zdHJpbmdpZnkodXNlckRhdGEpKTtcclxuICAgIHNldFVzZXIodXNlckRhdGEpO1xyXG4gICAgc2V0SXNMb2dpbih0cnVlKTtcclxuICAgIC8vIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidXNlclwiLCBKU09OLnN0cmluZ2lmeSh1c2VyRGF0YSkpOyAvLyDroZzqt7jsnbgg7KCV67O0IOyggOyepVxyXG4gICAgQ29va2llcy5zZXQoXCJ1c2VyXCIsIEpTT04uc3RyaW5naWZ5KHVzZXJEYXRhKSwgeyBleHBpcmVzOiA3IH0pOyAvLyDsv6DtgqTsl5Ag66Gc6re47J24IOygleuztCDsoIDsnqVcclxuICB9O1xyXG5cclxuICBjb25zdCBsb2dvdXQgPSAoKSA9PiB7XHJcbiAgICBzZXRJc0xvZ2luKGZhbHNlKTtcclxuICAgIGFsZXJ0KFwi66Gc6re47JWE7JuDIOuQmOyXiOyKteuLiOuLpCEhXCIpO1xyXG4gICAgLy8gbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJ1c2VyXCIpOyAvLyDroZzqt7jsnbgg7KCV67O0IOyCreygnFxyXG4gICAgQ29va2llcy5yZW1vdmUoXCJ1c2VyXCIpOyAvLyDsv6DtgqTsl5Ag66Gc6re47J24IOygleuztCDsgq3soJxcclxuICAgIHJvdXRlLnB1c2goXCIvXCIpO1xyXG4gIH07XHJcblxyXG4gIC8vIGNvbnNvbGUubG9nKFwi66Gc6re47J24IOyDge2DnCBcIiArIGlzTG9naW4pO1xyXG4gIC8vIGNvbnNvbGUubG9nKFwi66Gc6re47J24IOycoOyggCDsoJXrs7QgXCIgKyBKU09OLnN0cmluZ2lmeSh1c2VyKSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8QXV0aENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgaXNMb2dpbiwgbG9naW4sIGxvZ291dCwgdXNlciB9fT5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9BdXRoQ29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXNlQXV0aCgpIHtcclxuICByZXR1cm4gdXNlQ29udGV4dChBdXRoQ29udGV4dCk7XHJcbn1cclxuIl0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VSb3V0ZXIiLCJDb29raWVzIiwiQXV0aENvbnRleHQiLCJBdXRoUHJvdmlkZXIiLCJjaGlsZHJlbiIsInVzZXIiLCJzZXRVc2VyIiwiaXNMb2dpbiIsInNldElzTG9naW4iLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInJvdXRlIiwiZ2V0IiwiSlNPTiIsInBhcnNlIiwibG9naW4iLCJ1c2VyRGF0YSIsInNldCIsInN0cmluZ2lmeSIsImV4cGlyZXMiLCJsb2dvdXQiLCJhbGVydCIsInJlbW92ZSIsInB1c2giLCJQcm92aWRlciIsInZhbHVlIiwidXNlQXV0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/util/AuthContext.js\n"));

/***/ })

});