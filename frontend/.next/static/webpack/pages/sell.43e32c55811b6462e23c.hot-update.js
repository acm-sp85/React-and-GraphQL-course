/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/sell",{

/***/ "./lib/useForm.js":
/*!************************!*\
  !*** ./lib/useForm.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ useForm; }\n/* harmony export */ });\n/* harmony import */ var _Users_franciscoacontellmonje_Desktop_webdev_wes_boss_project_files_cloned_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _Users_franciscoacontellmonje_Desktop_webdev_wes_boss_project_files_cloned_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_Users_franciscoacontellmonje_Desktop_webdev_wes_boss_project_files_cloned_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\nfunction useForm() {\n  _s();\n\n  var initial = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n\n  // create a state object for our inputs\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(initial),\n      inputs = _useState[0],\n      setInputs = _useState[1];\n\n  function handleChange(e) {\n    var _e$target = e.target,\n        value = _e$target.value,\n        name = _e$target.name,\n        type = _e$target.type;\n\n    if (type === 'number') {\n      value = parseInt(value);\n    }\n\n    if (type === 'file') {\n      value[0] = e.target.files;\n    }\n\n    setInputs(_objectSpread(_objectSpread({}, inputs), {}, (0,_Users_franciscoacontellmonje_Desktop_webdev_wes_boss_project_files_cloned_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)({}, name, value)));\n  }\n\n  function resetForm() {\n    setInputs(initial);\n  }\n\n  function clearForm() {\n    var blankState = Object.fromEntries(Object.entries(inputs).map(function (_ref) {\n      var _ref2 = (0,_Users_franciscoacontellmonje_Desktop_webdev_wes_boss_project_files_cloned_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_ref, 2),\n          key = _ref2[0],\n          value = _ref2[1];\n\n      return [key, ''];\n    }));\n    setInputs(blankState);\n  } //   return the things we want to surface from this custom hook\n\n\n  return {\n    inputs: inputs,\n    handleChange: handleChange,\n    resetForm: resetForm\n  };\n}\n\n_s(useForm, \"0tjT+aoDVbAe0wsQZsq9AKLCE20=\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL3VzZUZvcm0uanM/ZjBlMiJdLCJuYW1lcyI6WyJ1c2VGb3JtIiwiaW5pdGlhbCIsInVzZVN0YXRlIiwiaW5wdXRzIiwic2V0SW5wdXRzIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwibmFtZSIsInR5cGUiLCJwYXJzZUludCIsImZpbGVzIiwicmVzZXRGb3JtIiwiY2xlYXJGb3JtIiwiYmxhbmtTdGF0ZSIsIk9iamVjdCIsImZyb21FbnRyaWVzIiwiZW50cmllcyIsIm1hcCIsImtleSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFZSxTQUFTQSxPQUFULEdBQStCO0FBQUE7O0FBQUEsTUFBZEMsT0FBYyx1RUFBSixFQUFJOztBQUM1QztBQUQ0QyxrQkFHaEJDLCtDQUFRLENBQUNELE9BQUQsQ0FIUTtBQUFBLE1BR3JDRSxNQUhxQztBQUFBLE1BRzdCQyxTQUg2Qjs7QUFLNUMsV0FBU0MsWUFBVCxDQUFzQkMsQ0FBdEIsRUFBeUI7QUFBQSxvQkFDS0EsQ0FBQyxDQUFDQyxNQURQO0FBQUEsUUFDakJDLEtBRGlCLGFBQ2pCQSxLQURpQjtBQUFBLFFBQ1ZDLElBRFUsYUFDVkEsSUFEVTtBQUFBLFFBQ0pDLElBREksYUFDSkEsSUFESTs7QUFFdkIsUUFBSUEsSUFBSSxLQUFLLFFBQWIsRUFBdUI7QUFDckJGLFdBQUssR0FBR0csUUFBUSxDQUFDSCxLQUFELENBQWhCO0FBQ0Q7O0FBQ0QsUUFBSUUsSUFBSSxLQUFLLE1BQWIsRUFBcUI7QUFDbkJGLFdBQUssQ0FBQyxDQUFELENBQUwsR0FBV0YsQ0FBQyxDQUFDQyxNQUFGLENBQVNLLEtBQXBCO0FBQ0Q7O0FBQ0RSLGFBQVMsaUNBRUpELE1BRkkseU9BR05NLElBSE0sRUFHQ0QsS0FIRCxHQUFUO0FBS0Q7O0FBRUQsV0FBU0ssU0FBVCxHQUFxQjtBQUNuQlQsYUFBUyxDQUFDSCxPQUFELENBQVQ7QUFDRDs7QUFDRCxXQUFTYSxTQUFULEdBQXFCO0FBQ25CLFFBQU1DLFVBQVUsR0FBR0MsTUFBTSxDQUFDQyxXQUFQLENBQ2pCRCxNQUFNLENBQUNFLE9BQVAsQ0FBZWYsTUFBZixFQUF1QmdCLEdBQXZCLENBQTJCO0FBQUE7QUFBQSxVQUFFQyxHQUFGO0FBQUEsVUFBT1osS0FBUDs7QUFBQSxhQUFrQixDQUFDWSxHQUFELEVBQU0sRUFBTixDQUFsQjtBQUFBLEtBQTNCLENBRGlCLENBQW5CO0FBR0FoQixhQUFTLENBQUNXLFVBQUQsQ0FBVDtBQUNELEdBNUIyQyxDQThCNUM7OztBQUVBLFNBQU87QUFDTFosVUFBTSxFQUFOQSxNQURLO0FBRUxFLGdCQUFZLEVBQVpBLFlBRks7QUFHTFEsYUFBUyxFQUFUQTtBQUhLLEdBQVA7QUFLRDs7R0FyQ3VCYixPIiwiZmlsZSI6Ii4vbGliL3VzZUZvcm0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlRm9ybShpbml0aWFsID0ge30pIHtcbiAgLy8gY3JlYXRlIGEgc3RhdGUgb2JqZWN0IGZvciBvdXIgaW5wdXRzXG5cbiAgY29uc3QgW2lucHV0cywgc2V0SW5wdXRzXSA9IHVzZVN0YXRlKGluaXRpYWwpO1xuXG4gIGZ1bmN0aW9uIGhhbmRsZUNoYW5nZShlKSB7XG4gICAgbGV0IHsgdmFsdWUsIG5hbWUsIHR5cGUgfSA9IGUudGFyZ2V0O1xuICAgIGlmICh0eXBlID09PSAnbnVtYmVyJykge1xuICAgICAgdmFsdWUgPSBwYXJzZUludCh2YWx1ZSk7XG4gICAgfVxuICAgIGlmICh0eXBlID09PSAnZmlsZScpIHtcbiAgICAgIHZhbHVlWzBdID0gZS50YXJnZXQuZmlsZXM7XG4gICAgfVxuICAgIHNldElucHV0cyh7XG4gICAgICAvLyAgIGNvcHkgdGhlIGV4aXN0aW5nIHN0YXRlXG4gICAgICAuLi5pbnB1dHMsXG4gICAgICBbbmFtZV06IHZhbHVlLFxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRGb3JtKCkge1xuICAgIHNldElucHV0cyhpbml0aWFsKTtcbiAgfVxuICBmdW5jdGlvbiBjbGVhckZvcm0oKSB7XG4gICAgY29uc3QgYmxhbmtTdGF0ZSA9IE9iamVjdC5mcm9tRW50cmllcyhcbiAgICAgIE9iamVjdC5lbnRyaWVzKGlucHV0cykubWFwKChba2V5LCB2YWx1ZV0pID0+IFtrZXksICcnXSlcbiAgICApO1xuICAgIHNldElucHV0cyhibGFua1N0YXRlKTtcbiAgfVxuXG4gIC8vICAgcmV0dXJuIHRoZSB0aGluZ3Mgd2Ugd2FudCB0byBzdXJmYWNlIGZyb20gdGhpcyBjdXN0b20gaG9va1xuXG4gIHJldHVybiB7XG4gICAgaW5wdXRzLFxuICAgIGhhbmRsZUNoYW5nZSxcbiAgICByZXNldEZvcm0sXG4gIH07XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/useForm.js\n");

/***/ })

});