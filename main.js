/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/aboutTab.js":
/*!*************************!*\
  !*** ./src/aboutTab.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadAbout: () => (/* binding */ loadAbout)\n/* harmony export */ });\nfunction loadAbout() {\n    const content = document.querySelector(\"#content\");\n\n    const title = document.createElement(\"h1\");\n\n    title.textContent = \"About\";\n\n    const fromStatement = document.createElement(\"p\");\n    const statement = document.createElement(\"p\");\n\n    fromStatement.textContent = \"A word from the Chef de Cuisine, Elliot R.\";\n    statement.textContent = \"We hope you enjoy. Every dish is crafted with the utmost respect to French and Mediterranean culture and cuisine.\"\n\n    content.appendChild(title);\n    content.appendChild(fromStatement);\n    content.appendChild(statement);\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYWJvdXRUYWIuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFPO0FBQ1A7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2Fib3V0VGFiLmpzPzdiY2YiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGxvYWRBYm91dCgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG5cbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IFwiQWJvdXRcIjtcblxuICAgIGNvbnN0IGZyb21TdGF0ZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBjb25zdCBzdGF0ZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblxuICAgIGZyb21TdGF0ZW1lbnQudGV4dENvbnRlbnQgPSBcIkEgd29yZCBmcm9tIHRoZSBDaGVmIGRlIEN1aXNpbmUsIEVsbGlvdCBSLlwiO1xuICAgIHN0YXRlbWVudC50ZXh0Q29udGVudCA9IFwiV2UgaG9wZSB5b3UgZW5qb3kuIEV2ZXJ5IGRpc2ggaXMgY3JhZnRlZCB3aXRoIHRoZSB1dG1vc3QgcmVzcGVjdCB0byBGcmVuY2ggYW5kIE1lZGl0ZXJyYW5lYW4gY3VsdHVyZSBhbmQgY3Vpc2luZS5cIlxuXG4gICAgY29udGVudC5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChmcm9tU3RhdGVtZW50KTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHN0YXRlbWVudCk7XG59XG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/aboutTab.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pageLoad_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageLoad.js */ \"./src/pageLoad.js\");\n/* harmony import */ var _menuTab_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menuTab.js */ \"./src/menuTab.js\");\n/* harmony import */ var _aboutTab_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./aboutTab.js */ \"./src/aboutTab.js\");\n\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n    (0,_pageLoad_js__WEBPACK_IMPORTED_MODULE_0__.loadPage)();\n})\nconst mainContent = document.querySelector(\"#content\");\nconst navButtons = document.querySelectorAll('nav button');\n\nnavButtons.forEach(button => {\n    button.addEventListener('click', (event) => {\n        mainContent.innerHTML = \"\"\n        const buttonText = event.target.textContent;\n        switch (buttonText) {\n            case \"Home\":\n                (0,_pageLoad_js__WEBPACK_IMPORTED_MODULE_0__.loadPage)();\n                break;\n            case \"Menu\":\n                (0,_menuTab_js__WEBPACK_IMPORTED_MODULE_1__.loadMenu)();\n                break;\n            case \"About\":\n                (0,_aboutTab_js__WEBPACK_IMPORTED_MODULE_2__.loadAbout)();\n                break;\n            default:\n                (0,_pageLoad_js__WEBPACK_IMPORTED_MODULE_0__.loadPage)();\n        }\n    })\n})//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7OztBQUF5QztBQUNEO0FBQ0M7O0FBRXpDO0FBQ0EsSUFBSSxzREFBUTtBQUNaLENBQUM7QUFDRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixzREFBUTtBQUN4QjtBQUNBO0FBQ0EsZ0JBQWdCLHFEQUFRO0FBQ3hCO0FBQ0E7QUFDQSxnQkFBZ0IsdURBQVM7QUFDekI7QUFDQTtBQUNBLGdCQUFnQixzREFBUTtBQUN4QjtBQUNBLEtBQUs7QUFDTCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbG9hZFBhZ2UgfSBmcm9tIFwiLi9wYWdlTG9hZC5qc1wiO1xuaW1wb3J0IHsgbG9hZE1lbnUgfSBmcm9tIFwiLi9tZW51VGFiLmpzXCI7XG5pbXBvcnQgeyBsb2FkQWJvdXQgfSBmcm9tIFwiLi9hYm91dFRhYi5qc1wiXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgICBsb2FkUGFnZSgpO1xufSlcbmNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuY29uc3QgbmF2QnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ25hdiBidXR0b24nKTtcblxubmF2QnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIG1haW5Db250ZW50LmlubmVySFRNTCA9IFwiXCJcbiAgICAgICAgY29uc3QgYnV0dG9uVGV4dCA9IGV2ZW50LnRhcmdldC50ZXh0Q29udGVudDtcbiAgICAgICAgc3dpdGNoIChidXR0b25UZXh0KSB7XG4gICAgICAgICAgICBjYXNlIFwiSG9tZVwiOlxuICAgICAgICAgICAgICAgIGxvYWRQYWdlKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiTWVudVwiOlxuICAgICAgICAgICAgICAgIGxvYWRNZW51KCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiQWJvdXRcIjpcbiAgICAgICAgICAgICAgICBsb2FkQWJvdXQoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgbG9hZFBhZ2UoKTtcbiAgICAgICAgfVxuICAgIH0pXG59KSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/menuTab.js":
/*!************************!*\
  !*** ./src/menuTab.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadMenu: () => (/* binding */ loadMenu)\n/* harmony export */ });\nfunction loadMenu() {\n    const content = document.querySelector(\"#content\");\n\n    const title = document.createElement(\"h1\");\n\n    title.textContent = \"Menu\";\n\n    const firstItem = document.createElement(\"h5\");\n    const firstItemDescription = document.createElement(\"p\");\n\n    firstItem.textContent = \"Bouillabaisse à la Provençale\";\n    firstItemDescription.textContent = \"A Mediterranean seafood stew with a French saffron-infused broth\";\n\n    content.appendChild(title);\n    content.appendChild(firstItem);\n    content.appendChild(firstItemDescription);\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWVudVRhYi5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQU87QUFDUDs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWVudVRhYi5qcz8yZjQwIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBsb2FkTWVudSgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG5cbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IFwiTWVudVwiO1xuXG4gICAgY29uc3QgZmlyc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg1XCIpO1xuICAgIGNvbnN0IGZpcnN0SXRlbURlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5cbiAgICBmaXJzdEl0ZW0udGV4dENvbnRlbnQgPSBcIkJvdWlsbGFiYWlzc2Ugw6AgbGEgUHJvdmVuw6dhbGVcIjtcbiAgICBmaXJzdEl0ZW1EZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IFwiQSBNZWRpdGVycmFuZWFuIHNlYWZvb2Qgc3RldyB3aXRoIGEgRnJlbmNoIHNhZmZyb24taW5mdXNlZCBicm90aFwiO1xuXG4gICAgY29udGVudC5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChmaXJzdEl0ZW0pO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZmlyc3RJdGVtRGVzY3JpcHRpb24pO1xufVxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/menuTab.js\n");

/***/ }),

/***/ "./src/pageLoad.js":
/*!*************************!*\
  !*** ./src/pageLoad.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadPage: () => (/* binding */ loadPage)\n/* harmony export */ });\nfunction loadPage() {\n    const content = document.querySelector(\"#content\");\n\n    const title = document.createElement(\"h1\");\n\n    title.textContent = \"Le Méditerranéen\";\n\n    const shortDescription = document.createElement(\"p\");\n    const longDescription = document.createElement(\"p\");\n\n    shortDescription.textContent = \"A spectacular fusion of French and Mediterranean cuisine!\";\n    longDescription.textContent = \"Welcome to Le Méditerranéen, where the timeless elegance of French culinary artistry meets the vibrant, sun-kissed flavors of the Mediterranean. Our menu offers an unexpected yet harmonious fusion of two rich culinary traditions, designed to take your tastebuds on a unique journey. Indulge in dishes like Bouillabaisse à la Provençale, a Mediterranean seafood stew with a French saffron-infused broth, or try Coq au Vin with Olive Tapenade, where tender chicken is slow-cooked in red wine, then paired with a savory Mediterranean olive tapenade. For a bold twist, enjoy Ratatouille-stuffed Lamb Chops, where the classic French vegetable medley is seamlessly blended into a succulent Mediterranean-style lamb. Each dish is crafted with the freshest local ingredients, offering a delightful exploration of flavors that are both familiar and excitingly new.\";\n\n    content.appendChild(title);\n    content.appendChild(shortDescription);\n    content.appendChild(longDescription);\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZUxvYWQuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFPO0FBQ1A7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VMb2FkLmpzPzc5NDYiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGxvYWRQYWdlKCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG5cbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcblxuICAgIHRpdGxlLnRleHRDb250ZW50ID0gXCJMZSBNw6lkaXRlcnJhbsOpZW5cIjtcblxuICAgIGNvbnN0IHNob3J0RGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBjb25zdCBsb25nRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblxuICAgIHNob3J0RGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBcIkEgc3BlY3RhY3VsYXIgZnVzaW9uIG9mIEZyZW5jaCBhbmQgTWVkaXRlcnJhbmVhbiBjdWlzaW5lIVwiO1xuICAgIGxvbmdEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IFwiV2VsY29tZSB0byBMZSBNw6lkaXRlcnJhbsOpZW4sIHdoZXJlIHRoZSB0aW1lbGVzcyBlbGVnYW5jZSBvZiBGcmVuY2ggY3VsaW5hcnkgYXJ0aXN0cnkgbWVldHMgdGhlIHZpYnJhbnQsIHN1bi1raXNzZWQgZmxhdm9ycyBvZiB0aGUgTWVkaXRlcnJhbmVhbi4gT3VyIG1lbnUgb2ZmZXJzIGFuIHVuZXhwZWN0ZWQgeWV0IGhhcm1vbmlvdXMgZnVzaW9uIG9mIHR3byByaWNoIGN1bGluYXJ5IHRyYWRpdGlvbnMsIGRlc2lnbmVkIHRvIHRha2UgeW91ciB0YXN0ZWJ1ZHMgb24gYSB1bmlxdWUgam91cm5leS4gSW5kdWxnZSBpbiBkaXNoZXMgbGlrZSBCb3VpbGxhYmFpc3NlIMOgIGxhIFByb3ZlbsOnYWxlLCBhIE1lZGl0ZXJyYW5lYW4gc2VhZm9vZCBzdGV3IHdpdGggYSBGcmVuY2ggc2FmZnJvbi1pbmZ1c2VkIGJyb3RoLCBvciB0cnkgQ29xIGF1IFZpbiB3aXRoIE9saXZlIFRhcGVuYWRlLCB3aGVyZSB0ZW5kZXIgY2hpY2tlbiBpcyBzbG93LWNvb2tlZCBpbiByZWQgd2luZSwgdGhlbiBwYWlyZWQgd2l0aCBhIHNhdm9yeSBNZWRpdGVycmFuZWFuIG9saXZlIHRhcGVuYWRlLiBGb3IgYSBib2xkIHR3aXN0LCBlbmpveSBSYXRhdG91aWxsZS1zdHVmZmVkIExhbWIgQ2hvcHMsIHdoZXJlIHRoZSBjbGFzc2ljIEZyZW5jaCB2ZWdldGFibGUgbWVkbGV5IGlzIHNlYW1sZXNzbHkgYmxlbmRlZCBpbnRvIGEgc3VjY3VsZW50IE1lZGl0ZXJyYW5lYW4tc3R5bGUgbGFtYi4gRWFjaCBkaXNoIGlzIGNyYWZ0ZWQgd2l0aCB0aGUgZnJlc2hlc3QgbG9jYWwgaW5ncmVkaWVudHMsIG9mZmVyaW5nIGEgZGVsaWdodGZ1bCBleHBsb3JhdGlvbiBvZiBmbGF2b3JzIHRoYXQgYXJlIGJvdGggZmFtaWxpYXIgYW5kIGV4Y2l0aW5nbHkgbmV3LlwiO1xuXG4gICAgY29udGVudC5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChzaG9ydERlc2NyaXB0aW9uKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGxvbmdEZXNjcmlwdGlvbik7XG59XG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pageLoad.js\n");

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;