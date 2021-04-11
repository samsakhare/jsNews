module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("IlR1");


/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "Ea3V":
/***/ (function(module, exports) {



/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "IlR1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: ./src/styles/globals.css
var globals = __webpack_require__("Ea3V");

// EXTERNAL MODULE: ./node_modules/tailwindcss/tailwind.css
var tailwind = __webpack_require__("uXJ4");

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// CONCATENATED MODULE: ./src/Components/NavigationBar/ActiveLink.js




const ActiveLink = ({
  children,
  href,
  isMobileMenu = false
}) => {
  const router = Object(router_["useRouter"])();

  const handleClick = e => {
    e.preventDefault();
    router.push(href);
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
    href: "#",
    className: `${router.asPath === href ? `bg-gray-900 text-white` : `text-gray-300 hover:bg-gray-700 hover:text-white`} ${isMobileMenu ? `block text-base` : `text-sm`} px-3 py-2 rounded-md  font-medium`,
    onClick: handleClick,
    children: children
  });
};

/* harmony default export */ var NavigationBar_ActiveLink = (ActiveLink);
// CONCATENATED MODULE: ./src/Components/NavigationBar/NavigationBar.js







const NavigationBar = () => {
  const {
    0: isMenuVisible,
    1: setIsMenuVisible
  } = Object(external_react_["useState"])(false);
  const router = Object(router_["useRouter"])();

  function toogleMenu() {
    setIsMenuVisible(!isMenuVisible);
  }

  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(jsx_runtime_["Fragment"], {
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(jsx_runtime_["Fragment"], {
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("nav", {
        className: "bg-gray-800",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "max-w-7xl mx-auto px-2 sm:px-6 lg:px-8",
          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "relative flex items-center justify-between h-16",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: "absolute inset-y-0 left-0 flex items-center sm:hidden",
              children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("button", {
                type: "button",
                className: "inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white",
                "aria-controls": "mobile-menu",
                "aria-expanded": "false",
                onClick: toogleMenu,
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                  className: "sr-only",
                  children: "Open main menu"
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("svg", {
                  className: `${isMenuVisible ? "hidden" : "block"} block h-6 w-6`,
                  xmlns: "http://www.w3.org/2000/svg",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  stroke: "currentColor",
                  "aria-hidden": "true",
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: "M4 6h16M4 12h16M4 18h16"
                  })
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("svg", {
                  className: `${!isMenuVisible ? "hidden" : "block"} h-6 w-6`,
                  xmlns: "http://www.w3.org/2000/svg",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  stroke: "currentColor",
                  "aria-hidden": "true",
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: "M6 18L18 6M6 6l12 12"
                  })
                })]
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
              className: "flex-1 flex items-center justify-center sm:items-stretch sm:justify-start",
              children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                className: "flex-shrink-0 flex items-center",
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
                  className: "block lg:hidden h-8 w-auto text-lg uppercase font-bold text-white",
                  src: "https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg",
                  alt: "Workflow",
                  children: "jsNews"
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
                  className: "hidden lg:block h-8 w-auto text-lg uppercase font-bold text-white",
                  src: "https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg",
                  alt: "Workflow",
                  children: "jsNews"
                })]
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                className: "hidden sm:block sm:ml-6",
                children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                  className: "flex space-x-4",
                  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(NavigationBar_ActiveLink, {
                    href: "/",
                    children: "Demo"
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(NavigationBar_ActiveLink, {
                    href: "/feature",
                    children: "Feature"
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(NavigationBar_ActiveLink, {
                    href: "/documentation",
                    children: "Documentation"
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(NavigationBar_ActiveLink, {
                    href: "/download",
                    children: "Download"
                  })]
                })
              })]
            })]
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "sm:hidden",
          id: "mobile-menu",
          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: `${isMenuVisible ? "block" : "hidden"} px-2 pt-2 pb-3 space-y-1`,
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(NavigationBar_ActiveLink, {
              href: "/",
              isMobileMenu: true,
              children: "Demo"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(NavigationBar_ActiveLink, {
              href: "/feature",
              isMobileMenu: true,
              children: "Feature"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(NavigationBar_ActiveLink, {
              href: "/documentation",
              isMobileMenu: true,
              children: "Documentation"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(NavigationBar_ActiveLink, {
              href: "/download",
              isMobileMenu: true,
              children: "Download"
            })]
          })
        })]
      })
    })
  });
};

/* harmony default export */ var NavigationBar_NavigationBar = (NavigationBar);
// CONCATENATED MODULE: ./src/Components/Header/Header.js





const Header = () => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(jsx_runtime_["Fragment"], {
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(NavigationBar_NavigationBar, {})
  });
};

/* harmony default export */ var Header_Header = (Header);
// CONCATENATED MODULE: ./src/pages/_app.js




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Header_Header, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "bg-gray-100 p-2",
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Component, _objectSpread({}, pageProps))
    })]
  });
}

/* harmony default export */ var _app = __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "uXJ4":
/***/ (function(module, exports) {



/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });