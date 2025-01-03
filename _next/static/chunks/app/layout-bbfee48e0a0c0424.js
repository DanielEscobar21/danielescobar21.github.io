(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[185],{

/***/ 1387:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 2778, 23));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 2025));


/***/ }),

/***/ 2025:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F: function() { return /* binding */ useTheme; },
/* harmony export */   ThemeProvider: function() { return /* binding */ ThemeProvider; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7437);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2265);
/* __next_internal_client_entry_do_not_use__ ThemeProvider,useTheme auto */ 

const ThemeContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(undefined);
function ThemeProvider(param) {
    let { children } = param;
    const [theme, setTheme] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("dark");
    const [language, setLanguage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("en");
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const savedTheme = localStorage.getItem("theme");
        const savedLanguage = localStorage.getItem("language");
        if (savedTheme) {
            setTheme(savedTheme);
        } else {
            document.documentElement.classList.add("dark");
        }
        if (savedLanguage) {
            setLanguage(savedLanguage);
        }
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
        localStorage.setItem("theme", theme);
    }, [
        theme
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        localStorage.setItem("language", language);
    }, [
        language
    ]);
    const toggleTheme = ()=>{
        setTheme(theme === "light" ? "dark" : "light");
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ThemeContext.Provider, {
        value: {
            theme,
            toggleTheme,
            language,
            setLanguage
        },
        children: children
    });
}
function useTheme() {
    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(ThemeContext);
    if (context === undefined) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
}


/***/ }),

/***/ 2778:
/***/ (function() {

// extracted by mini-css-extract-plugin

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [461,971,117,744], function() { return __webpack_exec__(1387); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);