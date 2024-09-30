"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/make-cancellable-promise";
exports.ids = ["vendor-chunks/make-cancellable-promise"];
exports.modules = {

/***/ "(ssr)/./node_modules/make-cancellable-promise/dist/esm/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/make-cancellable-promise/dist/esm/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ makeCancellablePromise)\n/* harmony export */ });\nfunction makeCancellablePromise(promise) {\n    var isCancelled = false;\n    var wrappedPromise = new Promise(function(resolve, reject) {\n        promise.then(function(value) {\n            return !isCancelled && resolve(value);\n        }).catch(function(error) {\n            return !isCancelled && reject(error);\n        });\n    });\n    return {\n        promise: wrappedPromise,\n        cancel: function() {\n            isCancelled = true;\n        }\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvbWFrZS1jYW5jZWxsYWJsZS1wcm9taXNlL2Rpc3QvZXNtL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBZSxTQUFTQSx1QkFBdUJDLE9BQU87SUFDbEQsSUFBSUMsY0FBYztJQUNsQixJQUFJQyxpQkFBaUIsSUFBSUMsUUFBUSxTQUFVQyxPQUFPLEVBQUVDLE1BQU07UUFDdERMLFFBQ0tNLElBQUksQ0FBQyxTQUFVQyxLQUFLO1lBQUksT0FBTyxDQUFDTixlQUFlRyxRQUFRRztRQUFRLEdBQy9EQyxLQUFLLENBQUMsU0FBVUMsS0FBSztZQUFJLE9BQU8sQ0FBQ1IsZUFBZUksT0FBT0k7UUFBUTtJQUN4RTtJQUNBLE9BQU87UUFDSFQsU0FBU0U7UUFDVFEsUUFBUTtZQUNKVCxjQUFjO1FBQ2xCO0lBQ0o7QUFDSiIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250LWRvb3IvLi9ub2RlX21vZHVsZXMvbWFrZS1jYW5jZWxsYWJsZS1wcm9taXNlL2Rpc3QvZXNtL2luZGV4LmpzPzZiNGMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWFrZUNhbmNlbGxhYmxlUHJvbWlzZShwcm9taXNlKSB7XG4gICAgdmFyIGlzQ2FuY2VsbGVkID0gZmFsc2U7XG4gICAgdmFyIHdyYXBwZWRQcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBwcm9taXNlXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAodmFsdWUpIHsgcmV0dXJuICFpc0NhbmNlbGxlZCAmJiByZXNvbHZlKHZhbHVlKTsgfSlcbiAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHsgcmV0dXJuICFpc0NhbmNlbGxlZCAmJiByZWplY3QoZXJyb3IpOyB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4ge1xuICAgICAgICBwcm9taXNlOiB3cmFwcGVkUHJvbWlzZSxcbiAgICAgICAgY2FuY2VsOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpc0NhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgIH0sXG4gICAgfTtcbn1cbiJdLCJuYW1lcyI6WyJtYWtlQ2FuY2VsbGFibGVQcm9taXNlIiwicHJvbWlzZSIsImlzQ2FuY2VsbGVkIiwid3JhcHBlZFByb21pc2UiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInRoZW4iLCJ2YWx1ZSIsImNhdGNoIiwiZXJyb3IiLCJjYW5jZWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/make-cancellable-promise/dist/esm/index.js\n");

/***/ })

};
;