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

eval("class DOMNodeCollection {\n  constructor(array) {\n    this.elements = array;\n  }\n\n  html(string = null) {\n    if(string != null) {\n      this.elements.forEach(element => {\n        element.innerHTML = string;\n      });\n    } else {\n      return this.elements[0].innerHTML;\n    }\n  }\n\n  empty() {\n    this.html(\"\");\n  }\n\n  append(target) {\n    if(typeof target == 'string') {\n      this.elements.forEach(element => {\n        element.innerHTML += target;\n      })\n    } else if (target instanceof DOMNodeCollection) {\n      target.elements.forEach(element => {\n        let outer = element.outerHTML;\n        this.elements.forEach(element => {\n          element.innerHTML += outer;\n        })\n      })\n    } else {\n      let outer = target.outerHTML;\n      this.elements.forEach(element => {\n        element.innerHTML += outer;\n      })\n    }\n  }\n\n  attr(name, value) {\n    if(name instanceof Object){\n      let valuePairs = Object.entries(name);\n      valuePairs.forEach(pair => {\n        this.attr(pair[0], pair[1]);\n      })\n    } else if (name && value) {\n      this.elements.forEach(element => {\n        element.setAttribute(name, value);\n      })\n    } else {\n      return this.elements[0].attributes[name].value;\n    }\n  }\n\n  addClass(classNames) {\n    if (classNames instanceof Array) {\n      classNames.forEach(name => {\n        this.elements.forEach(element => {\n          element.classList.add(name);\n        })\n      })\n    } else if (typeof classNames == 'string') {\n      this.elements.forEach(element => {\n        element.classList.add(classNames);\n      })\n    }\n  }\n\n  removeClass(classNames) {\n    if (classNames instanceof Array) {\n      classNames.forEach(name => {\n        this.elements.forEach(element => {\n          element.classList.remove(name);\n        })\n      })\n    } else if (typeof classNames == 'string') {\n      this.elements.forEach(element => {\n        element.classList.remove(classNames);\n      })\n    }\n  }\n\n  children() {\n    let childArr = [];\n\n    this.elements.forEach(element => {\n      let eleChildren = Array.from(element.children);\n      eleChildren.forEach(child => {\n        childArr.push(child);\n      })\n    })\n\n    return new DOMNodeCollection(childArr);\n  }\n\n  parent() {\n    let parentArr = [];\n\n    this.elements.forEach(element => {\n      let eleParent = element.parentElement;\n      if(parentArr.includes(eleParent) == false) {\n        parentArr.push(eleParent); \n      }\n    })\n\n    return new DOMNodeCollection(parentArr);\n  }\n\n  find(selector) {\n    let results = [];\n\n    this.elements.forEach(element => {\n      let eleResults = element.querySelectorAll(selector);\n      eleResults.forEach(result => results.push(result));\n    })\n\n    return new DOMNodeCollection(results);\n  }\n\n  remove(selector) {\n    if(selector) {\n      let results = this.find(selector);\n      results.remove();\n    } else {\n      this.elements.forEach(element => {\n        element.remove();\n      })\n    }\n  }\n\n  on(events, handler) {\n    this.elements.forEach(element => {\n      element.addEventListener(events, handler);\n    })\n  }\n\n  off(events, handler) {\n    this.elements.forEach(element => {\n      element.removeEventListener(events, handler);\n    })\n  }\n}\n\nmodule.exports = DOMNodeCollection;\n\n//# sourceURL=webpack:///./src/dom_node_collection.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("let DOMNodeCollection = __webpack_require__(/*! ./dom_node_collection */ \"./src/dom_node_collection.js\");\n\nlet queue = [];\nlet loaded = false;\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  loaded = true;\n  queue.forEach(funct => funct());\n}, false);\n\n$1 = (argument) => {\n  switch (typeof argument) {\n    case \"string\":\n      let nodelist = document.querySelectorAll(argument);\n      let nodeArray = Array.from(nodelist);\n      return new DOMNodeCollection(nodeArray);\n    case \"object\":\n      if (argument instanceof HTMLElement) {\n        return new DOMNodeCollection([argument]);\n      };\n    case \"function\":\n      return handleFunction(argument);\n  }\n}\n\n$1.extend = (base, ...addObjects) => {\n  addObjects.forEach(object => {\n    base = Object.assign(base, object)\n  })\n\n  return base;    \n}\n\n$1.ajax = (options) => {\n  let defaults = ajaxDefaults();\n  options = $1.extend(defaults, options);\n  let params;\n  if(options['data']) {\n    params = generateParamsString(options['data']);\n  }\n\n  console.log(options);\n  \n  let http = new XMLHttpRequest();\n  http.open(options.method, options.url);\n\n  http.onload = function (e) {\n    if(http.status === 200) {\n      options.success(JSON.parse(http.response));\n    } else {\n      options.error(JSON.parse(http.response));\n    }\n  }\n  \n  http.send(params);\n}\n\n// helpers\nlet handleFunction = (funct) => {\n  if(loaded == false) {\n    queue.push(funct);\n  } else {\n    funct();\n  }\n}\n\nlet ajaxDefaults = () => {\n  let defaults = {\n    url: '',\n    method: 'GET',\n    contentType: 'application/x-www-form-urlencoded; charset=UTF-8',\n    success: () => {},\n    error: () => {},\n    data: {}\n  };\n\n  return defaults;\n}\n\nlet generateParamsString = (data) => {\n  let query = Object.keys(data).map(function (k) {\n    return encodeURIComponent(k) + \"=\" + encodeURIComponent(data[k]);\n  }).join('&');\n  return query;\n}\n\nwindow.$1 = $1;\n\n//# sourceURL=webpack:///./src/index.js?");

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