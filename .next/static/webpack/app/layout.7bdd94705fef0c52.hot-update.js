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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"8e761eea8c34\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3N0eWxlcy9nbG9iYWwuY3NzIiwibWFwcGluZ3MiOiI7QUFBQSwrREFBZSxjQUFjO0FBQzdCLElBQUksSUFBVSxJQUFJLGlCQUFpQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zdHlsZXMvZ2xvYmFsLmNzcz9lOTRmIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IFwiOGU3NjFlZWE4YzM0XCJcbmlmIChtb2R1bGUuaG90KSB7IG1vZHVsZS5ob3QuYWNjZXB0KCkgfVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./styles/global.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./app/util/AuthContext.js":
/*!*********************************!*\
  !*** ./app/util/AuthContext.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AuthProvider: function() { return /* binding */ AuthProvider; },\n/* harmony export */   useAuth: function() { return /* binding */ useAuth; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ \"(app-pages-browser)/./node_modules/js-cookie/dist/js.cookie.mjs\");\n/* __next_internal_client_entry_do_not_use__ AuthProvider,useAuth auto */ \nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n// 리액트 라이브러리 중 createContext   //전역변수 개념\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nfunction AuthProvider(param) {\n    let { children } = param;\n    _s();\n    const sessionUser = ()=>{\n        const user = js_cookie__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"user\");\n        return user ? JSON.parse(user) : null;\n    };\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(sessionUser);\n    const [isLogin, setIsLogin] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const route = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    // res.data 주기 (userData)\n    // 사용자가 로그인할 때 전달되는 데이터. 사용자의 정보(예: 사용자 ID, 이름, 이메일 등)를 포함\n    const login = (userData)=>{\n        // console.log(\"userData \" + JSON.stringify(userData));\n        setUser(userData);\n        setIsLogin(true);\n        // localStorage.setItem(\"user\", JSON.stringify(userData)); // 로그인 정보 저장\n        js_cookie__WEBPACK_IMPORTED_MODULE_3__[\"default\"].set(\"user\", JSON.stringify(userData), {\n            expires: 7\n        }); // 쿠키에 로그인 정보 저장\n    };\n    const logout = ()=>{\n        setIsLogin(false);\n        alert(\"로그아웃 되었습니다!!\");\n        // localStorage.removeItem(\"user\"); // 로그인 정보 삭제\n        js_cookie__WEBPACK_IMPORTED_MODULE_3__[\"default\"].remove(\"user\"); // 쿠키에 로그인 정보 삭제\n        route.push(\"/\");\n    };\n    // console.log(\"로그인 상태 \" + isLogin);\n    // console.log(\"로그인 유저 정보 \" + JSON.stringify(user));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: {\n            isLogin,\n            login,\n            logout,\n            user\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\aico-2\\\\Desktop\\\\workspace\\\\nestJS-blog-final\\\\app\\\\util\\\\AuthContext.js\",\n        lineNumber: 42,\n        columnNumber: 5\n    }, this);\n}\n_s(AuthProvider, \"VQVHHWtfa4zIEenO0rEyZd0v6J0=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = AuthProvider;\nfunction useAuth() {\n    _s1();\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AuthContext);\n}\n_s1(useAuth, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\nvar _c;\n$RefreshReg$(_c, \"AuthProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC91dGlsL0F1dGhDb250ZXh0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUV1RTtBQUMzQjtBQUNaO0FBRWhDLHdDQUF3QztBQUN4QyxNQUFNTSw0QkFBY04sb0RBQWFBO0FBRTFCLFNBQVNPLGFBQWEsS0FBWTtRQUFaLEVBQUVDLFFBQVEsRUFBRSxHQUFaOztJQUMzQixNQUFNQyxjQUFjO1FBQ2xCLE1BQU1DLE9BQU9MLGlEQUFPQSxDQUFDTSxHQUFHLENBQUM7UUFDekIsT0FBT0QsT0FBT0UsS0FBS0MsS0FBSyxDQUFDSCxRQUFRO0lBQ25DO0lBRUEsTUFBTSxDQUFDQSxNQUFNSSxRQUFRLEdBQUdYLCtDQUFRQSxDQUFDTTtJQUNqQyxNQUFNLENBQUNNLFNBQVNDLFdBQVcsR0FBR2IsK0NBQVFBLENBQUM7SUFDdkMsTUFBTWMsUUFBUWIsMERBQVNBO0lBRXZCLHlCQUF5QjtJQUN6QiwwREFBMEQ7SUFDMUQsTUFBTWMsUUFBUSxDQUFDQztRQUNiLHVEQUF1RDtRQUN2REwsUUFBUUs7UUFDUkgsV0FBVztRQUNYLHVFQUF1RTtRQUN2RVgsaURBQU9BLENBQUNlLEdBQUcsQ0FBQyxRQUFRUixLQUFLUyxTQUFTLENBQUNGLFdBQVc7WUFBRUcsU0FBUztRQUFFLElBQUksZ0JBQWdCO0lBQ2pGO0lBRUEsTUFBTUMsU0FBUztRQUNiUCxXQUFXO1FBQ1hRLE1BQU07UUFDTixnREFBZ0Q7UUFDaERuQixpREFBT0EsQ0FBQ29CLE1BQU0sQ0FBQyxTQUFTLGdCQUFnQjtRQUN4Q1IsTUFBTVMsSUFBSSxDQUFDO0lBQ2I7SUFFQSxvQ0FBb0M7SUFDcEMsb0RBQW9EO0lBRXBELHFCQUNFLDhEQUFDcEIsWUFBWXFCLFFBQVE7UUFBQ0MsT0FBTztZQUFFYjtZQUFTRztZQUFPSztZQUFRYjtRQUFLO2tCQUN6REY7Ozs7OztBQUdQO0dBcENnQkQ7O1FBUUFILHNEQUFTQTs7O0tBUlRHO0FBc0NULFNBQVNzQjs7SUFDZCxPQUFPNUIsaURBQVVBLENBQUNLO0FBQ3BCO0lBRmdCdUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3V0aWwvQXV0aENvbnRleHQuanM/ZmEyMiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuXHJcbmltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xyXG5pbXBvcnQgQ29va2llcyBmcm9tIFwianMtY29va2llXCI7XHJcblxyXG4vLyDrpqzslaHtirgg65287J2067iM65+s66asIOykkSBjcmVhdGVDb250ZXh0ICAgLy/soITsl63rs4DsiJgg6rCc64WQXHJcbmNvbnN0IEF1dGhDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEF1dGhQcm92aWRlcih7IGNoaWxkcmVuIH0pIHtcclxuICBjb25zdCBzZXNzaW9uVXNlciA9ICgpID0+IHtcclxuICAgIGNvbnN0IHVzZXIgPSBDb29raWVzLmdldChcInVzZXJcIik7XHJcbiAgICByZXR1cm4gdXNlciA/IEpTT04ucGFyc2UodXNlcikgOiBudWxsO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKHNlc3Npb25Vc2VyKTtcclxuICBjb25zdCBbaXNMb2dpbiwgc2V0SXNMb2dpbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3Qgcm91dGUgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgLy8gcmVzLmRhdGEg7KO86riwICh1c2VyRGF0YSlcclxuICAvLyDsgqzsmqnsnpDqsIAg66Gc6re47J247ZWgIOuVjCDsoITri6zrkJjripQg642w7J207YSwLiDsgqzsmqnsnpDsnZgg7KCV67O0KOyYiDog7IKs7Jqp7J6QIElELCDsnbTrpoQsIOydtOuplOydvCDrk7Ep66W8IO2PrO2VqFxyXG4gIGNvbnN0IGxvZ2luID0gKHVzZXJEYXRhKSA9PiB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhcInVzZXJEYXRhIFwiICsgSlNPTi5zdHJpbmdpZnkodXNlckRhdGEpKTtcclxuICAgIHNldFVzZXIodXNlckRhdGEpO1xyXG4gICAgc2V0SXNMb2dpbih0cnVlKTtcclxuICAgIC8vIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidXNlclwiLCBKU09OLnN0cmluZ2lmeSh1c2VyRGF0YSkpOyAvLyDroZzqt7jsnbgg7KCV67O0IOyggOyepVxyXG4gICAgQ29va2llcy5zZXQoXCJ1c2VyXCIsIEpTT04uc3RyaW5naWZ5KHVzZXJEYXRhKSwgeyBleHBpcmVzOiA3IH0pOyAvLyDsv6DtgqTsl5Ag66Gc6re47J24IOygleuztCDsoIDsnqVcclxuICB9O1xyXG5cclxuICBjb25zdCBsb2dvdXQgPSAoKSA9PiB7XHJcbiAgICBzZXRJc0xvZ2luKGZhbHNlKTtcclxuICAgIGFsZXJ0KFwi66Gc6re47JWE7JuDIOuQmOyXiOyKteuLiOuLpCEhXCIpO1xyXG4gICAgLy8gbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJ1c2VyXCIpOyAvLyDroZzqt7jsnbgg7KCV67O0IOyCreygnFxyXG4gICAgQ29va2llcy5yZW1vdmUoXCJ1c2VyXCIpOyAvLyDsv6DtgqTsl5Ag66Gc6re47J24IOygleuztCDsgq3soJxcclxuICAgIHJvdXRlLnB1c2goXCIvXCIpO1xyXG4gIH07XHJcblxyXG4gIC8vIGNvbnNvbGUubG9nKFwi66Gc6re47J24IOyDge2DnCBcIiArIGlzTG9naW4pO1xyXG4gIC8vIGNvbnNvbGUubG9nKFwi66Gc6re47J24IOycoOyggCDsoJXrs7QgXCIgKyBKU09OLnN0cmluZ2lmeSh1c2VyKSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8QXV0aENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgaXNMb2dpbiwgbG9naW4sIGxvZ291dCwgdXNlciB9fT5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9BdXRoQ29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXNlQXV0aCgpIHtcclxuICByZXR1cm4gdXNlQ29udGV4dChBdXRoQ29udGV4dCk7XHJcbn1cclxuIl0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VSb3V0ZXIiLCJDb29raWVzIiwiQXV0aENvbnRleHQiLCJBdXRoUHJvdmlkZXIiLCJjaGlsZHJlbiIsInNlc3Npb25Vc2VyIiwidXNlciIsImdldCIsIkpTT04iLCJwYXJzZSIsInNldFVzZXIiLCJpc0xvZ2luIiwic2V0SXNMb2dpbiIsInJvdXRlIiwibG9naW4iLCJ1c2VyRGF0YSIsInNldCIsInN0cmluZ2lmeSIsImV4cGlyZXMiLCJsb2dvdXQiLCJhbGVydCIsInJlbW92ZSIsInB1c2giLCJQcm92aWRlciIsInZhbHVlIiwidXNlQXV0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/util/AuthContext.js\n"));

/***/ })

});