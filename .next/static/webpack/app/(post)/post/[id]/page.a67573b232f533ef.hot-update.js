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

/***/ "(app-pages-browser)/./app/util/AuthContext.js":
/*!*********************************!*\
  !*** ./app/util/AuthContext.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AuthProvider: function() { return /* binding */ AuthProvider; },\n/* harmony export */   useAuth: function() { return /* binding */ useAuth; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ \"(app-pages-browser)/./node_modules/js-cookie/dist/js.cookie.mjs\");\n/* __next_internal_client_entry_do_not_use__ AuthProvider,useAuth auto */ \nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nfunction AuthProvider(param) {\n    let { children } = param;\n    _s();\n    // 쿠키에서 사용자 정보를 바로 가져와 초기 상태로 설정\n    const cookieUser = js_cookie__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"user\");\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(cookieUser ? JSON.parse(cookieUser) : null);\n    const [isLogin, setIsLogin] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!!cookieUser); // 초기 상태를 설정\n    const route = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    // 로그인 함수\n    const login = (userData)=>{\n        setUser(userData);\n        setIsLogin(true);\n        js_cookie__WEBPACK_IMPORTED_MODULE_3__[\"default\"].set(\"user\", JSON.stringify(userData), {\n            expires: 7\n        }); // 쿠키에 로그인 정보 저장\n    };\n    // 로그아웃 함수\n    const logout = ()=>{\n        setIsLogin(false);\n        alert(\"로그아웃 되었습니다!!\");\n        js_cookie__WEBPACK_IMPORTED_MODULE_3__[\"default\"].remove(\"user\"); // 쿠키에 로그인 정보 삭제\n        setUser(null); // 사용자 정보 초기화\n        route.push(\"/\");\n    };\n    // 상태 변화에 따른 로그 확인 (디버깅 용도)\n    // console.log(\"로그인 상태: \", isLogin);\n    // console.log(\"로그인 유저 정보: \", user);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: {\n            isLogin,\n            login,\n            logout,\n            user\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\aico-2\\\\Desktop\\\\workspace\\\\nestJS-blog-final\\\\app\\\\util\\\\AuthContext.js\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, this);\n}\n_s(AuthProvider, \"icfTNuY9C2fB6WvlS49zNP88ndI=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = AuthProvider;\nfunction useAuth() {\n    _s1();\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AuthContext);\n}\n_s1(useAuth, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\nvar _c;\n$RefreshReg$(_c, \"AuthProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC91dGlsL0F1dGhDb250ZXh0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUV1RTtBQUMzQjtBQUNaO0FBRWhDLE1BQU1NLDRCQUFjTixvREFBYUE7QUFFMUIsU0FBU08sYUFBYSxLQUFZO1FBQVosRUFBRUMsUUFBUSxFQUFFLEdBQVo7O0lBQzNCLGdDQUFnQztJQUNoQyxNQUFNQyxhQUFhSixpREFBT0EsQ0FBQ0ssR0FBRyxDQUFDO0lBQy9CLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHVCwrQ0FBUUEsQ0FBQ00sYUFBYUksS0FBS0MsS0FBSyxDQUFDTCxjQUFjO0lBQ3ZFLE1BQU0sQ0FBQ00sU0FBU0MsV0FBVyxHQUFHYiwrQ0FBUUEsQ0FBQyxDQUFDLENBQUNNLGFBQWEsWUFBWTtJQUNsRSxNQUFNUSxRQUFRYiwwREFBU0E7SUFFdkIsU0FBUztJQUNULE1BQU1jLFFBQVEsQ0FBQ0M7UUFDYlAsUUFBUU87UUFDUkgsV0FBVztRQUNYWCxpREFBT0EsQ0FBQ2UsR0FBRyxDQUFDLFFBQVFQLEtBQUtRLFNBQVMsQ0FBQ0YsV0FBVztZQUFFRyxTQUFTO1FBQUUsSUFBSSxnQkFBZ0I7SUFDakY7SUFFQSxVQUFVO0lBQ1YsTUFBTUMsU0FBUztRQUNiUCxXQUFXO1FBQ1hRLE1BQU07UUFDTm5CLGlEQUFPQSxDQUFDb0IsTUFBTSxDQUFDLFNBQVMsZ0JBQWdCO1FBQ3hDYixRQUFRLE9BQU8sYUFBYTtRQUM1QkssTUFBTVMsSUFBSSxDQUFDO0lBQ2I7SUFFQSwyQkFBMkI7SUFDM0Isb0NBQW9DO0lBQ3BDLG9DQUFvQztJQUVwQyxxQkFDRSw4REFBQ3BCLFlBQVlxQixRQUFRO1FBQUNDLE9BQU87WUFBRWI7WUFBU0c7WUFBT0s7WUFBUVo7UUFBSztrQkFDekRIOzs7Ozs7QUFHUDtHQWhDZ0JEOztRQUtBSCxzREFBU0E7OztLQUxURztBQWtDVCxTQUFTc0I7O0lBQ2QsT0FBTzVCLGlEQUFVQSxDQUFDSztBQUNwQjtJQUZnQnVCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC91dGlsL0F1dGhDb250ZXh0LmpzP2ZhMjIiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcblxyXG5pbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcclxuaW1wb3J0IENvb2tpZXMgZnJvbSBcImpzLWNvb2tpZVwiO1xyXG5cclxuY29uc3QgQXV0aENvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQXV0aFByb3ZpZGVyKHsgY2hpbGRyZW4gfSkge1xyXG4gIC8vIOy/oO2CpOyXkOyEnCDsgqzsmqnsnpAg7KCV67O066W8IOuwlOuhnCDqsIDsoLjsmYAg7LSI6riwIOyDge2DnOuhnCDshKTsoJVcclxuICBjb25zdCBjb29raWVVc2VyID0gQ29va2llcy5nZXQoXCJ1c2VyXCIpO1xyXG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKGNvb2tpZVVzZXIgPyBKU09OLnBhcnNlKGNvb2tpZVVzZXIpIDogbnVsbCk7XHJcbiAgY29uc3QgW2lzTG9naW4sIHNldElzTG9naW5dID0gdXNlU3RhdGUoISFjb29raWVVc2VyKTsgLy8g7LSI6riwIOyDge2DnOulvCDshKTsoJVcclxuICBjb25zdCByb3V0ZSA9IHVzZVJvdXRlcigpO1xyXG5cclxuICAvLyDroZzqt7jsnbgg7ZWo7IiYXHJcbiAgY29uc3QgbG9naW4gPSAodXNlckRhdGEpID0+IHtcclxuICAgIHNldFVzZXIodXNlckRhdGEpO1xyXG4gICAgc2V0SXNMb2dpbih0cnVlKTtcclxuICAgIENvb2tpZXMuc2V0KFwidXNlclwiLCBKU09OLnN0cmluZ2lmeSh1c2VyRGF0YSksIHsgZXhwaXJlczogNyB9KTsgLy8g7L+g7YKk7JeQIOuhnOq3uOyduCDsoJXrs7Qg7KCA7J6lXHJcbiAgfTtcclxuXHJcbiAgLy8g66Gc6re47JWE7JuDIO2VqOyImFxyXG4gIGNvbnN0IGxvZ291dCA9ICgpID0+IHtcclxuICAgIHNldElzTG9naW4oZmFsc2UpO1xyXG4gICAgYWxlcnQoXCLroZzqt7jslYTsm4Mg65CY7JeI7Iq164uI64ukISFcIik7XHJcbiAgICBDb29raWVzLnJlbW92ZShcInVzZXJcIik7IC8vIOy/oO2CpOyXkCDroZzqt7jsnbgg7KCV67O0IOyCreygnFxyXG4gICAgc2V0VXNlcihudWxsKTsgLy8g7IKs7Jqp7J6QIOygleuztCDstIjquLDtmZRcclxuICAgIHJvdXRlLnB1c2goXCIvXCIpO1xyXG4gIH07XHJcblxyXG4gIC8vIOyDge2DnCDrs4DtmZTsl5Ag65Sw66W4IOuhnOq3uCDtmZXsnbggKOuUlOuyhOq5hSDsmqnrj4QpXHJcbiAgLy8gY29uc29sZS5sb2coXCLroZzqt7jsnbgg7IOB7YOcOiBcIiwgaXNMb2dpbik7XHJcbiAgLy8gY29uc29sZS5sb2coXCLroZzqt7jsnbgg7Jyg7KCAIOygleuztDogXCIsIHVzZXIpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEF1dGhDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IGlzTG9naW4sIGxvZ2luLCBsb2dvdXQsIHVzZXIgfX0+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvQXV0aENvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZUF1dGgoKSB7XHJcbiAgcmV0dXJuIHVzZUNvbnRleHQoQXV0aENvbnRleHQpO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlUm91dGVyIiwiQ29va2llcyIsIkF1dGhDb250ZXh0IiwiQXV0aFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJjb29raWVVc2VyIiwiZ2V0IiwidXNlciIsInNldFVzZXIiLCJKU09OIiwicGFyc2UiLCJpc0xvZ2luIiwic2V0SXNMb2dpbiIsInJvdXRlIiwibG9naW4iLCJ1c2VyRGF0YSIsInNldCIsInN0cmluZ2lmeSIsImV4cGlyZXMiLCJsb2dvdXQiLCJhbGVydCIsInJlbW92ZSIsInB1c2giLCJQcm92aWRlciIsInZhbHVlIiwidXNlQXV0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/util/AuthContext.js\n"));

/***/ })

});