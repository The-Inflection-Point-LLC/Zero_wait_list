/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/load-script";
exports.ids = ["vendor-chunks/load-script"];
exports.modules = {

/***/ "(ssr)/./node_modules/load-script/index.js":
/*!*******************************************!*\
  !*** ./node_modules/load-script/index.js ***!
  \*******************************************/
/***/ ((module) => {

eval("module.exports = function load(src, opts, cb) {\n    var head = document.head || document.getElementsByTagName(\"head\")[0];\n    var script = document.createElement(\"script\");\n    if (typeof opts === \"function\") {\n        cb = opts;\n        opts = {};\n    }\n    opts = opts || {};\n    cb = cb || function() {};\n    script.type = opts.type || \"text/javascript\";\n    script.charset = opts.charset || \"utf8\";\n    script.async = \"async\" in opts ? !!opts.async : true;\n    script.src = src;\n    if (opts.attrs) {\n        setAttributes(script, opts.attrs);\n    }\n    if (opts.text) {\n        script.text = \"\" + opts.text;\n    }\n    var onend = \"onload\" in script ? stdOnEnd : ieOnEnd;\n    onend(script, cb);\n    // some good legacy browsers (firefox) fail the 'in' detection above\n    // so as a fallback we always set onload\n    // old IE will ignore this and new IE will set onload\n    if (!script.onload) {\n        stdOnEnd(script, cb);\n    }\n    head.appendChild(script);\n};\nfunction setAttributes(script, attrs) {\n    for(var attr in attrs){\n        script.setAttribute(attr, attrs[attr]);\n    }\n}\nfunction stdOnEnd(script, cb) {\n    script.onload = function() {\n        this.onerror = this.onload = null;\n        cb(null, script);\n    };\n    script.onerror = function() {\n        // this.onload = null here is necessary\n        // because even IE9 works not like others\n        this.onerror = this.onload = null;\n        cb(new Error(\"Failed to load \" + this.src), script);\n    };\n}\nfunction ieOnEnd(script, cb) {\n    script.onreadystatechange = function() {\n        if (this.readyState != \"complete\" && this.readyState != \"loaded\") return;\n        this.onreadystatechange = null;\n        cb(null, script) // there is no way to catch loading errors in IE8\n        ;\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udC1kb29yLy4vbm9kZV9tb2R1bGVzL2xvYWQtc2NyaXB0L2luZGV4LmpzPzM4ZTUiXSwic291cmNlc0NvbnRlbnQiOlsiXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGxvYWQgKHNyYywgb3B0cywgY2IpIHtcbiAgdmFyIGhlYWQgPSBkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF1cbiAgdmFyIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpXG5cbiAgaWYgKHR5cGVvZiBvcHRzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgY2IgPSBvcHRzXG4gICAgb3B0cyA9IHt9XG4gIH1cblxuICBvcHRzID0gb3B0cyB8fCB7fVxuICBjYiA9IGNiIHx8IGZ1bmN0aW9uKCkge31cblxuICBzY3JpcHQudHlwZSA9IG9wdHMudHlwZSB8fCAndGV4dC9qYXZhc2NyaXB0J1xuICBzY3JpcHQuY2hhcnNldCA9IG9wdHMuY2hhcnNldCB8fCAndXRmOCc7XG4gIHNjcmlwdC5hc3luYyA9ICdhc3luYycgaW4gb3B0cyA/ICEhb3B0cy5hc3luYyA6IHRydWVcbiAgc2NyaXB0LnNyYyA9IHNyY1xuXG4gIGlmIChvcHRzLmF0dHJzKSB7XG4gICAgc2V0QXR0cmlidXRlcyhzY3JpcHQsIG9wdHMuYXR0cnMpXG4gIH1cblxuICBpZiAob3B0cy50ZXh0KSB7XG4gICAgc2NyaXB0LnRleHQgPSAnJyArIG9wdHMudGV4dFxuICB9XG5cbiAgdmFyIG9uZW5kID0gJ29ubG9hZCcgaW4gc2NyaXB0ID8gc3RkT25FbmQgOiBpZU9uRW5kXG4gIG9uZW5kKHNjcmlwdCwgY2IpXG5cbiAgLy8gc29tZSBnb29kIGxlZ2FjeSBicm93c2VycyAoZmlyZWZveCkgZmFpbCB0aGUgJ2luJyBkZXRlY3Rpb24gYWJvdmVcbiAgLy8gc28gYXMgYSBmYWxsYmFjayB3ZSBhbHdheXMgc2V0IG9ubG9hZFxuICAvLyBvbGQgSUUgd2lsbCBpZ25vcmUgdGhpcyBhbmQgbmV3IElFIHdpbGwgc2V0IG9ubG9hZFxuICBpZiAoIXNjcmlwdC5vbmxvYWQpIHtcbiAgICBzdGRPbkVuZChzY3JpcHQsIGNiKTtcbiAgfVxuXG4gIGhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KVxufVxuXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzKHNjcmlwdCwgYXR0cnMpIHtcbiAgZm9yICh2YXIgYXR0ciBpbiBhdHRycykge1xuICAgIHNjcmlwdC5zZXRBdHRyaWJ1dGUoYXR0ciwgYXR0cnNbYXR0cl0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIHN0ZE9uRW5kIChzY3JpcHQsIGNiKSB7XG4gIHNjcmlwdC5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5vbmVycm9yID0gdGhpcy5vbmxvYWQgPSBudWxsXG4gICAgY2IobnVsbCwgc2NyaXB0KVxuICB9XG4gIHNjcmlwdC5vbmVycm9yID0gZnVuY3Rpb24gKCkge1xuICAgIC8vIHRoaXMub25sb2FkID0gbnVsbCBoZXJlIGlzIG5lY2Vzc2FyeVxuICAgIC8vIGJlY2F1c2UgZXZlbiBJRTkgd29ya3Mgbm90IGxpa2Ugb3RoZXJzXG4gICAgdGhpcy5vbmVycm9yID0gdGhpcy5vbmxvYWQgPSBudWxsXG4gICAgY2IobmV3IEVycm9yKCdGYWlsZWQgdG8gbG9hZCAnICsgdGhpcy5zcmMpLCBzY3JpcHQpXG4gIH1cbn1cblxuZnVuY3Rpb24gaWVPbkVuZCAoc2NyaXB0LCBjYikge1xuICBzY3JpcHQub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLnJlYWR5U3RhdGUgIT0gJ2NvbXBsZXRlJyAmJiB0aGlzLnJlYWR5U3RhdGUgIT0gJ2xvYWRlZCcpIHJldHVyblxuICAgIHRoaXMub25yZWFkeXN0YXRlY2hhbmdlID0gbnVsbFxuICAgIGNiKG51bGwsIHNjcmlwdCkgLy8gdGhlcmUgaXMgbm8gd2F5IHRvIGNhdGNoIGxvYWRpbmcgZXJyb3JzIGluIElFOFxuICB9XG59XG4iXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsImxvYWQiLCJzcmMiLCJvcHRzIiwiY2IiLCJoZWFkIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsInNjcmlwdCIsImNyZWF0ZUVsZW1lbnQiLCJ0eXBlIiwiY2hhcnNldCIsImFzeW5jIiwiYXR0cnMiLCJzZXRBdHRyaWJ1dGVzIiwidGV4dCIsIm9uZW5kIiwic3RkT25FbmQiLCJpZU9uRW5kIiwib25sb2FkIiwiYXBwZW5kQ2hpbGQiLCJhdHRyIiwic2V0QXR0cmlidXRlIiwib25lcnJvciIsIkVycm9yIiwib25yZWFkeXN0YXRlY2hhbmdlIiwicmVhZHlTdGF0ZSJdLCJtYXBwaW5ncyI6IkFBQ0FBLE9BQU9DLE9BQU8sR0FBRyxTQUFTQyxLQUFNQyxHQUFHLEVBQUVDLElBQUksRUFBRUMsRUFBRTtJQUMzQyxJQUFJQyxPQUFPQyxTQUFTRCxJQUFJLElBQUlDLFNBQVNDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxFQUFFO0lBQ3BFLElBQUlDLFNBQVNGLFNBQVNHLGFBQWEsQ0FBQztJQUVwQyxJQUFJLE9BQU9OLFNBQVMsWUFBWTtRQUM5QkMsS0FBS0Q7UUFDTEEsT0FBTyxDQUFDO0lBQ1Y7SUFFQUEsT0FBT0EsUUFBUSxDQUFDO0lBQ2hCQyxLQUFLQSxNQUFNLFlBQVk7SUFFdkJJLE9BQU9FLElBQUksR0FBR1AsS0FBS08sSUFBSSxJQUFJO0lBQzNCRixPQUFPRyxPQUFPLEdBQUdSLEtBQUtRLE9BQU8sSUFBSTtJQUNqQ0gsT0FBT0ksS0FBSyxHQUFHLFdBQVdULE9BQU8sQ0FBQyxDQUFDQSxLQUFLUyxLQUFLLEdBQUc7SUFDaERKLE9BQU9OLEdBQUcsR0FBR0E7SUFFYixJQUFJQyxLQUFLVSxLQUFLLEVBQUU7UUFDZEMsY0FBY04sUUFBUUwsS0FBS1UsS0FBSztJQUNsQztJQUVBLElBQUlWLEtBQUtZLElBQUksRUFBRTtRQUNiUCxPQUFPTyxJQUFJLEdBQUcsS0FBS1osS0FBS1ksSUFBSTtJQUM5QjtJQUVBLElBQUlDLFFBQVEsWUFBWVIsU0FBU1MsV0FBV0M7SUFDNUNGLE1BQU1SLFFBQVFKO0lBRWQsb0VBQW9FO0lBQ3BFLHdDQUF3QztJQUN4QyxxREFBcUQ7SUFDckQsSUFBSSxDQUFDSSxPQUFPVyxNQUFNLEVBQUU7UUFDbEJGLFNBQVNULFFBQVFKO0lBQ25CO0lBRUFDLEtBQUtlLFdBQVcsQ0FBQ1o7QUFDbkI7QUFFQSxTQUFTTSxjQUFjTixNQUFNLEVBQUVLLEtBQUs7SUFDbEMsSUFBSyxJQUFJUSxRQUFRUixNQUFPO1FBQ3RCTCxPQUFPYyxZQUFZLENBQUNELE1BQU1SLEtBQUssQ0FBQ1EsS0FBSztJQUN2QztBQUNGO0FBRUEsU0FBU0osU0FBVVQsTUFBTSxFQUFFSixFQUFFO0lBQzNCSSxPQUFPVyxNQUFNLEdBQUc7UUFDZCxJQUFJLENBQUNJLE9BQU8sR0FBRyxJQUFJLENBQUNKLE1BQU0sR0FBRztRQUM3QmYsR0FBRyxNQUFNSTtJQUNYO0lBQ0FBLE9BQU9lLE9BQU8sR0FBRztRQUNmLHVDQUF1QztRQUN2Qyx5Q0FBeUM7UUFDekMsSUFBSSxDQUFDQSxPQUFPLEdBQUcsSUFBSSxDQUFDSixNQUFNLEdBQUc7UUFDN0JmLEdBQUcsSUFBSW9CLE1BQU0sb0JBQW9CLElBQUksQ0FBQ3RCLEdBQUcsR0FBR007SUFDOUM7QUFDRjtBQUVBLFNBQVNVLFFBQVNWLE1BQU0sRUFBRUosRUFBRTtJQUMxQkksT0FBT2lCLGtCQUFrQixHQUFHO1FBQzFCLElBQUksSUFBSSxDQUFDQyxVQUFVLElBQUksY0FBYyxJQUFJLENBQUNBLFVBQVUsSUFBSSxVQUFVO1FBQ2xFLElBQUksQ0FBQ0Qsa0JBQWtCLEdBQUc7UUFDMUJyQixHQUFHLE1BQU1JLFFBQVEsaURBQWlEOztJQUNwRTtBQUNGIiwiZmlsZSI6Iihzc3IpLy4vbm9kZV9tb2R1bGVzL2xvYWQtc2NyaXB0L2luZGV4LmpzIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/load-script/index.js\n");

/***/ })

};
;