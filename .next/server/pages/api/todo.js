"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/todo";
exports.ids = ["pages/api/todo"];
exports.modules = {

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "(api)/./pages/api/todo/index.js":
/*!*********************************!*\
  !*** ./pages/api/todo/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! util */ \"util\");\n/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst delayTime = 1000; // milliseconds added to all REST calls\nconst readFile = (0,util__WEBPACK_IMPORTED_MODULE_2__.promisify)((fs__WEBPACK_IMPORTED_MODULE_1___default().readFile));\nconst delay = (ms)=>new Promise((resolve)=>setTimeout(resolve, ms));\nasync function handler(req, res) {\n    const jsonFile = path__WEBPACK_IMPORTED_MODULE_0___default().resolve(\"./\", \"db.json\");\n    try {\n        const readFileData = await readFile(jsonFile);\n        await delay(delayTime);\n        const todos = JSON.parse(readFileData).todos;\n        if (!todos) {\n            res.status(404).send(\"Error: Request failed with status code 404\");\n        } else {\n            //res.status(200).json(todo); keeps json minified but harder to read\n            //res.setHeader(\"Content-Type\", \"application/json\");\n            res.status(200).send(JSON.stringify(todos, null, 2));\n            console.log(`GET /api/todo status: 200`);\n        }\n    } catch (e) {\n        console.log(\"/api/todo error:\", e);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdG9kby9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQXdCO0FBQ0o7QUFDYTtBQUVqQyxNQUFNRyxZQUFZLE1BQU0sdUNBQXVDO0FBRS9ELE1BQU1DLFdBQVdGLCtDQUFTQSxDQUFDRCxvREFBVztBQUN0QyxNQUFNSSxRQUFRLENBQUNDLEtBQ2IsSUFBSUMsUUFBUSxDQUFDQyxVQUFZQyxXQUFXRCxTQUFTRjtBQUVoQyxlQUFlSSxRQUFRQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUM5QyxNQUFNQyxXQUFXYixtREFBWSxDQUFDLE1BQU07SUFDcEMsSUFBSTtRQUNGLE1BQU1jLGVBQWUsTUFBTVYsU0FBU1M7UUFDcEMsTUFBTVIsTUFBTUY7UUFDWixNQUFNWSxRQUFRQyxLQUFLQyxLQUFLLENBQUNILGNBQWNDLEtBQUs7UUFDNUMsSUFBSSxDQUFDQSxPQUFPO1lBQ1ZILElBQ0dNLE1BQU0sQ0FBQyxLQUNQQyxJQUFJLENBQUM7UUFDVixPQUFPO1lBQ0wsb0VBQW9FO1lBQ3BFLG9EQUFvRDtZQUNwRFAsSUFBSU0sTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQ0gsS0FBS0ksU0FBUyxDQUFDTCxPQUFPLElBQUksRUFBRTtZQUNqRE0sUUFBUUMsR0FBRyxDQUFDLENBQUMseUJBQXlCLENBQUM7UUFDekMsQ0FBQztJQUNILEVBQUUsT0FBT0MsR0FBRztRQUNWRixRQUFRQyxHQUFHLENBQUMsb0JBQW9CQztJQUNsQztBQUNGLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZXNpZ25pbmctY29tcG9uZW50cy1pbi1yZWFjdC1wbHVyYWxzaWdodC1jb3Vyc2UvLi9wYWdlcy9hcGkvdG9kby9pbmRleC5qcz82NDdlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCI7XG5pbXBvcnQgZnMgZnJvbSBcImZzXCI7XG5pbXBvcnQgeyBwcm9taXNpZnkgfSBmcm9tIFwidXRpbFwiO1xuXG5jb25zdCBkZWxheVRpbWUgPSAxMDAwOyAvLyBtaWxsaXNlY29uZHMgYWRkZWQgdG8gYWxsIFJFU1QgY2FsbHNcblxuY29uc3QgcmVhZEZpbGUgPSBwcm9taXNpZnkoZnMucmVhZEZpbGUpO1xuY29uc3QgZGVsYXkgPSAobXMpID0+XG4gIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIG1zKSk7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgY29uc3QganNvbkZpbGUgPSBwYXRoLnJlc29sdmUoXCIuL1wiLCBcImRiLmpzb25cIik7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVhZEZpbGVEYXRhID0gYXdhaXQgcmVhZEZpbGUoanNvbkZpbGUpO1xuICAgIGF3YWl0IGRlbGF5KGRlbGF5VGltZSk7XG4gICAgY29uc3QgdG9kb3MgPSBKU09OLnBhcnNlKHJlYWRGaWxlRGF0YSkudG9kb3M7XG4gICAgaWYgKCF0b2Rvcykge1xuICAgICAgcmVzXG4gICAgICAgIC5zdGF0dXMoNDA0KVxuICAgICAgICAuc2VuZChcIkVycm9yOiBSZXF1ZXN0IGZhaWxlZCB3aXRoIHN0YXR1cyBjb2RlIDQwNFwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy9yZXMuc3RhdHVzKDIwMCkuanNvbih0b2RvKTsga2VlcHMganNvbiBtaW5pZmllZCBidXQgaGFyZGVyIHRvIHJlYWRcbiAgICAgIC8vcmVzLnNldEhlYWRlcihcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XG4gICAgICByZXMuc3RhdHVzKDIwMCkuc2VuZChKU09OLnN0cmluZ2lmeSh0b2RvcywgbnVsbCwgMikpO1xuICAgICAgY29uc29sZS5sb2coYEdFVCAvYXBpL3RvZG8gc3RhdHVzOiAyMDBgKTtcbiAgICB9XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlLmxvZyhcIi9hcGkvdG9kbyBlcnJvcjpcIiwgZSk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJwYXRoIiwiZnMiLCJwcm9taXNpZnkiLCJkZWxheVRpbWUiLCJyZWFkRmlsZSIsImRlbGF5IiwibXMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInNldFRpbWVvdXQiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwianNvbkZpbGUiLCJyZWFkRmlsZURhdGEiLCJ0b2RvcyIsIkpTT04iLCJwYXJzZSIsInN0YXR1cyIsInNlbmQiLCJzdHJpbmdpZnkiLCJjb25zb2xlIiwibG9nIiwiZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/todo/index.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/todo/index.js"));
module.exports = __webpack_exports__;

})();