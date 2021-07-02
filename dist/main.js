/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/dom_node_collection.js":
/*!************************************!*\
  !*** ./src/dom_node_collection.js ***!
  \************************************/
/***/ ((module) => {

eval("class DOMNodeCollection {\n  constructor(array) {\n    this.elements = array;\n  }\n\n  html(string = null) {\n    if(string != null) {\n      this.elements.forEach(element => {\n        element.innerHTML = string;\n      });\n    } else {\n      return this.elements[0].innerHTML;\n    }\n  }\n\n  empty() {\n    this.html(\"\");\n  }\n\n  append(target) {\n    if(typeof target == 'string') {\n      this.elements.forEach(element => {\n        element.innerHTML += target;\n      })\n    } else if (target instanceof DOMNodeCollection) {\n      target.elements.forEach(element => {\n        let outer = element.outerHTML;\n        this.elements.forEach(element => {\n          element.innerHTML += outer;\n        })\n      })\n    } else {\n      let outer = target.outerHTML;\n      this.elements.forEach(element => {\n        element.innerHTML += outer;\n      })\n    }\n  }\n\n  attr(name, value) {\n    if(name instanceof Object){\n      let valuePairs = Object.entries(name);\n      valuePairs.forEach(pair => {\n        this.attr(pair[0], pair[1]);\n      })\n    } else if (name && value) {\n      this.elements.forEach(element => {\n        element.setAttribute(name, value);\n      })\n    } else {\n      return this.elements[0].attributes[name].value;\n    }\n  }\n\n  addClass(classNames) {\n    if (classNames instanceof Array) {\n      classNames.forEach(name => {\n        this.elements.forEach(element => {\n          element.classList.add(name);\n        })\n      })\n    } else if (typeof classNames == 'string') {\n      this.elements.forEach(element => {\n        element.classList.add(classNames);\n      })\n    }\n  }\n\n  removeClass(classNames) {\n    if (classNames instanceof Array) {\n      classNames.forEach(name => {\n        this.elements.forEach(element => {\n          element.classList.remove(name);\n        })\n      })\n    } else if (typeof classNames == 'string') {\n      this.elements.forEach(element => {\n        element.classList.remove(classNames);\n      })\n    }\n  }\n}\n\nmodule.exports = DOMNodeCollection;\n\n//# sourceURL=webpack:///./src/dom_node_collection.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("let DOMNodeCollection = __webpack_require__(/*! ./dom_node_collection */ \"./src/dom_node_collection.js\");\n\nlet $1 = (argument) => {\n  if(argument instanceof HTMLElement) {\n    let element = new DOMNodeCollection([argument]);\n    return element;\n  } else {\n    let nodelist = document.querySelectorAll(argument);\n    let nodeArray = Array.from(nodelist);\n    return new DOMNodeCollection(nodeArray);\n  }\n}\n\nwindow.$1 = $1;\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;