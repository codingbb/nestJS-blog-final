"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(sub)/sub/page",{

/***/ "(app-pages-browser)/./app/util/AuthContext.js":
/*!*********************************!*\
  !*** ./app/util/AuthContext.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AuthProvider: function() { return /* binding */ AuthProvider; },\n/* harmony export */   useAuth: function() { return /* binding */ useAuth; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ \"(app-pages-browser)/./node_modules/js-cookie/dist/js.cookie.mjs\");\n/* __next_internal_client_entry_do_not_use__ AuthProvider,useAuth auto */ \nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n// 리액트 라이브러리 중 createContext   //전역변수 개념\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nfunction AuthProvider(param) {\n    let { children } = param;\n    _s();\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [isLogin, setIsLogin] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const route = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    // 쿠키에서 로그인 정보 복원\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const user = js_cookie__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"user\");\n        if (user) {\n            setUser(JSON.parse(user));\n            setIsLogin(true);\n        }\n    }, [\n        isLogin\n    ]);\n    // res.data 주기 (userData)\n    // 사용자가 로그인할 때 전달되는 데이터. 사용자의 정보(예: 사용자 ID, 이름, 이메일 등)를 포함\n    const login = (userData)=>{\n        // console.log(\"userData \" + JSON.stringify(userData));\n        setUser(userData);\n        setIsLogin(true);\n        js_cookie__WEBPACK_IMPORTED_MODULE_3__[\"default\"].set(\"user\", JSON.stringify(userData), {\n            expires: 7\n        }); // 쿠키에 로그인 정보 저장\n    };\n    const logout = ()=>{\n        setIsLogin(false);\n        alert(\"로그아웃 되었습니다!!\");\n        js_cookie__WEBPACK_IMPORTED_MODULE_3__[\"default\"].remove(\"user\"); // 쿠키에 로그인 정보 삭제\n        route.push(\"/\");\n    };\n    // console.log(\"로그인 상태 \" + isLogin);\n    // console.log(\"로그인 유저 정보 \" + JSON.stringify(user));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: {\n            isLogin,\n            login,\n            logout,\n            user\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\aico-2\\\\Desktop\\\\workspace\\\\nestJS-blog-final\\\\app\\\\util\\\\AuthContext.js\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, this);\n}\n_s(AuthProvider, \"f7U5h6lgi9aCMK1Yp0qhEcK7qJY=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = AuthProvider;\nfunction useAuth() {\n    _s1();\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AuthContext);\n}\n_s1(useAuth, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\nvar _c;\n$RefreshReg$(_c, \"AuthProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC91dGlsL0F1dGhDb250ZXh0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUV1RTtBQUMzQjtBQUNaO0FBRWhDLHdDQUF3QztBQUN4QyxNQUFNTSw0QkFBY04sb0RBQWFBO0FBRTFCLFNBQVNPLGFBQWEsS0FBWTtRQUFaLEVBQUVDLFFBQVEsRUFBRSxHQUFaOztJQUMzQixNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR1AsK0NBQVFBLENBQUM7SUFDakMsTUFBTSxDQUFDUSxTQUFTQyxXQUFXLEdBQUdULCtDQUFRQSxDQUFDO0lBRXZDLE1BQU1VLFFBQVFULDBEQUFTQTtJQUV2QixpQkFBaUI7SUFDakJGLGdEQUFTQSxDQUFDO1FBQ1IsTUFBTU8sT0FBT0osaURBQU9BLENBQUNTLEdBQUcsQ0FBQztRQUN6QixJQUFJTCxNQUFNO1lBQ1JDLFFBQVFLLEtBQUtDLEtBQUssQ0FBQ1A7WUFDbkJHLFdBQVc7UUFDYjtJQUNGLEdBQUc7UUFBQ0Q7S0FBUTtJQUVaLHlCQUF5QjtJQUN6QiwwREFBMEQ7SUFDMUQsTUFBTU0sUUFBUSxDQUFDQztRQUNiLHVEQUF1RDtRQUN2RFIsUUFBUVE7UUFDUk4sV0FBVztRQUNYUCxpREFBT0EsQ0FBQ2MsR0FBRyxDQUFDLFFBQVFKLEtBQUtLLFNBQVMsQ0FBQ0YsV0FBVztZQUFFRyxTQUFTO1FBQUUsSUFBSSxnQkFBZ0I7SUFDakY7SUFFQSxNQUFNQyxTQUFTO1FBQ2JWLFdBQVc7UUFDWFcsTUFBTTtRQUNObEIsaURBQU9BLENBQUNtQixNQUFNLENBQUMsU0FBUyxnQkFBZ0I7UUFDeENYLE1BQU1ZLElBQUksQ0FBQztJQUNiO0lBRUEsb0NBQW9DO0lBQ3BDLG9EQUFvRDtJQUVwRCxxQkFDRSw4REFBQ25CLFlBQVlvQixRQUFRO1FBQUNDLE9BQU87WUFBRWhCO1lBQVNNO1lBQU9LO1lBQVFiO1FBQUs7a0JBQ3pERDs7Ozs7O0FBR1A7R0F2Q2dCRDs7UUFJQUgsc0RBQVNBOzs7S0FKVEc7QUF5Q1QsU0FBU3FCOztJQUNkLE9BQU8zQixpREFBVUEsQ0FBQ0s7QUFDcEI7SUFGZ0JzQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvdXRpbC9BdXRoQ29udGV4dC5qcz9mYTIyIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5cclxuaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XHJcbmltcG9ydCBDb29raWVzIGZyb20gXCJqcy1jb29raWVcIjtcclxuXHJcbi8vIOumrOyVoe2KuCDrnbzsnbTruIzrn6zrpqwg7KSRIGNyZWF0ZUNvbnRleHQgICAvL+yghOyXreuzgOyImCDqsJzrhZBcclxuY29uc3QgQXV0aENvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQXV0aFByb3ZpZGVyKHsgY2hpbGRyZW4gfSkge1xyXG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtpc0xvZ2luLCBzZXRJc0xvZ2luXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3Qgcm91dGUgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgLy8g7L+g7YKk7JeQ7IScIOuhnOq3uOyduCDsoJXrs7Qg67O17JuQXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHVzZXIgPSBDb29raWVzLmdldChcInVzZXJcIik7XHJcbiAgICBpZiAodXNlcikge1xyXG4gICAgICBzZXRVc2VyKEpTT04ucGFyc2UodXNlcikpO1xyXG4gICAgICBzZXRJc0xvZ2luKHRydWUpO1xyXG4gICAgfVxyXG4gIH0sIFtpc0xvZ2luXSk7XHJcblxyXG4gIC8vIHJlcy5kYXRhIOyjvOq4sCAodXNlckRhdGEpXHJcbiAgLy8g7IKs7Jqp7J6Q6rCAIOuhnOq3uOyduO2VoCDrlYwg7KCE64us65CY64qUIOuNsOydtO2EsC4g7IKs7Jqp7J6Q7J2YIOygleuztCjsmIg6IOyCrOyaqeyekCBJRCwg7J2066aELCDsnbTrqZTsnbwg65OxKeulvCDtj6ztlahcclxuICBjb25zdCBsb2dpbiA9ICh1c2VyRGF0YSkgPT4ge1xyXG4gICAgLy8gY29uc29sZS5sb2coXCJ1c2VyRGF0YSBcIiArIEpTT04uc3RyaW5naWZ5KHVzZXJEYXRhKSk7XHJcbiAgICBzZXRVc2VyKHVzZXJEYXRhKTtcclxuICAgIHNldElzTG9naW4odHJ1ZSk7XHJcbiAgICBDb29raWVzLnNldChcInVzZXJcIiwgSlNPTi5zdHJpbmdpZnkodXNlckRhdGEpLCB7IGV4cGlyZXM6IDcgfSk7IC8vIOy/oO2CpOyXkCDroZzqt7jsnbgg7KCV67O0IOyggOyepVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGxvZ291dCA9ICgpID0+IHtcclxuICAgIHNldElzTG9naW4oZmFsc2UpO1xyXG4gICAgYWxlcnQoXCLroZzqt7jslYTsm4Mg65CY7JeI7Iq164uI64ukISFcIik7XHJcbiAgICBDb29raWVzLnJlbW92ZShcInVzZXJcIik7IC8vIOy/oO2CpOyXkCDroZzqt7jsnbgg7KCV67O0IOyCreygnFxyXG4gICAgcm91dGUucHVzaChcIi9cIik7XHJcbiAgfTtcclxuXHJcbiAgLy8gY29uc29sZS5sb2coXCLroZzqt7jsnbgg7IOB7YOcIFwiICsgaXNMb2dpbik7XHJcbiAgLy8gY29uc29sZS5sb2coXCLroZzqt7jsnbgg7Jyg7KCAIOygleuztCBcIiArIEpTT04uc3RyaW5naWZ5KHVzZXIpKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxBdXRoQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBpc0xvZ2luLCBsb2dpbiwgbG9nb3V0LCB1c2VyIH19PlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L0F1dGhDb250ZXh0LlByb3ZpZGVyPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VBdXRoKCkge1xyXG4gIHJldHVybiB1c2VDb250ZXh0KEF1dGhDb250ZXh0KTtcclxufVxyXG4iXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVJvdXRlciIsIkNvb2tpZXMiLCJBdXRoQ29udGV4dCIsIkF1dGhQcm92aWRlciIsImNoaWxkcmVuIiwidXNlciIsInNldFVzZXIiLCJpc0xvZ2luIiwic2V0SXNMb2dpbiIsInJvdXRlIiwiZ2V0IiwiSlNPTiIsInBhcnNlIiwibG9naW4iLCJ1c2VyRGF0YSIsInNldCIsInN0cmluZ2lmeSIsImV4cGlyZXMiLCJsb2dvdXQiLCJhbGVydCIsInJlbW92ZSIsInB1c2giLCJQcm92aWRlciIsInZhbHVlIiwidXNlQXV0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/util/AuthContext.js\n"));

/***/ })

});