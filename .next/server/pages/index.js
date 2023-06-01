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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/Slider.module.css":
/*!**************************************!*\
  !*** ./components/Slider.module.css ***!
  \**************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"slider\": \"Slider_slider__X9Vwj\",\n\t\"slideWrapper\": \"Slider_slideWrapper__lLXPX\",\n\t\"slideImage\": \"Slider_slideImage___q1E1\",\n\t\"active\": \"Slider_active__Wu7fe\",\n\t\"slideCount\": \"Slider_slideCount__8Thos\",\n\t\"prevButton\": \"Slider_prevButton__2qvUR\",\n\t\"nextButton\": \"Slider_nextButton__tU027\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NsaWRlci5tb2R1bGUuY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcXVvdGUtd2lkZ2V0Ly4vY29tcG9uZW50cy9TbGlkZXIubW9kdWxlLmNzcz9iMjM0Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInNsaWRlclwiOiBcIlNsaWRlcl9zbGlkZXJfX1g5VndqXCIsXG5cdFwic2xpZGVXcmFwcGVyXCI6IFwiU2xpZGVyX3NsaWRlV3JhcHBlcl9fbExYUFhcIixcblx0XCJzbGlkZUltYWdlXCI6IFwiU2xpZGVyX3NsaWRlSW1hZ2VfX19xMUUxXCIsXG5cdFwiYWN0aXZlXCI6IFwiU2xpZGVyX2FjdGl2ZV9fV3U3ZmVcIixcblx0XCJzbGlkZUNvdW50XCI6IFwiU2xpZGVyX3NsaWRlQ291bnRfXzhUaG9zXCIsXG5cdFwicHJldkJ1dHRvblwiOiBcIlNsaWRlcl9wcmV2QnV0dG9uX18ycXZVUlwiLFxuXHRcIm5leHRCdXR0b25cIjogXCJTbGlkZXJfbmV4dEJ1dHRvbl9fdFUwMjdcIlxufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Slider.module.css\n");

/***/ }),

/***/ "./components/Slider.js":
/*!******************************!*\
  !*** ./components/Slider.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/fi */ \"react-icons/fi\");\n/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_fi__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Slider_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Slider.module.css */ \"./components/Slider.module.css\");\n/* harmony import */ var _Slider_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Slider_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst Slider = ({ slides  })=>{\n    const { 0: currentIndex , 1: setCurrentIndex  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const handlePrevSlide = ()=>{\n        setCurrentIndex((prevIndex)=>prevIndex === 0 ? slides.length - 1 : prevIndex - 1\n        );\n    };\n    const handleNextSlide = ()=>{\n        setCurrentIndex((prevIndex)=>prevIndex === slides.length - 1 ? 0 : prevIndex + 1\n        );\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_Slider_module_css__WEBPACK_IMPORTED_MODULE_3___default().slider),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Slider_module_css__WEBPACK_IMPORTED_MODULE_3___default().slideWrapper),\n                children: slides.map((slide, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: `/images/${slide}`,\n                        alt: \"Slide\",\n                        className: `${(_Slider_module_css__WEBPACK_IMPORTED_MODULE_3___default().slideImage)} ${index === currentIndex ? (_Slider_module_css__WEBPACK_IMPORTED_MODULE_3___default().active) : \"\"}`\n                    }, index, false, {\n                        fileName: \"C:\\\\Users\\\\Ryu\\\\WebstormProjects\\\\untitled\\\\first\\\\components\\\\Slider.js\",\n                        lineNumber: 20,\n                        columnNumber: 11\n                    }, undefined)\n                )\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Ryu\\\\WebstormProjects\\\\untitled\\\\first\\\\components\\\\Slider.js\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Slider_module_css__WEBPACK_IMPORTED_MODULE_3___default().slideCount),\n                children: [\n                    currentIndex + 1,\n                    \" / \",\n                    slides.length\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Ryu\\\\WebstormProjects\\\\untitled\\\\first\\\\components\\\\Slider.js\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: (_Slider_module_css__WEBPACK_IMPORTED_MODULE_3___default().prevButton),\n                onClick: handlePrevSlide,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fi__WEBPACK_IMPORTED_MODULE_2__.FiChevronLeft, {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Ryu\\\\WebstormProjects\\\\untitled\\\\first\\\\components\\\\Slider.js\",\n                    lineNumber: 34,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Ryu\\\\WebstormProjects\\\\untitled\\\\first\\\\components\\\\Slider.js\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: (_Slider_module_css__WEBPACK_IMPORTED_MODULE_3___default().nextButton),\n                onClick: handleNextSlide,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fi__WEBPACK_IMPORTED_MODULE_2__.FiChevronRight, {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Ryu\\\\WebstormProjects\\\\untitled\\\\first\\\\components\\\\Slider.js\",\n                    lineNumber: 38,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Ryu\\\\WebstormProjects\\\\untitled\\\\first\\\\components\\\\Slider.js\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Ryu\\\\WebstormProjects\\\\untitled\\\\first\\\\components\\\\Slider.js\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Slider);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NsaWRlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUF3QztBQUN1QjtBQUN0QjtBQUV6QyxNQUFNSyxNQUFNLEdBQUcsQ0FBQyxFQUFFQyxNQUFNLEdBQUUsR0FBSztJQUM3QixNQUFNLEVBTFIsR0FLU0MsWUFBWSxHQUxyQixHQUt1QkMsZUFBZSxNQUFJUCwrQ0FBUSxDQUFDLENBQUMsQ0FBQztJQUVuRCxNQUFNUSxlQUFlLEdBQUcsSUFBTTtRQUM1QkQsZUFBZSxDQUFDLENBQUNFLFNBQVMsR0FBTUEsU0FBUyxLQUFLLENBQUMsR0FBR0osTUFBTSxDQUFDSyxNQUFNLEdBQUcsQ0FBQyxHQUFHRCxTQUFTLEdBQUcsQ0FBQztRQUFDLENBQUMsQ0FBQztLQUN2RjtJQUVELE1BQU1FLGVBQWUsR0FBRyxJQUFNO1FBQzVCSixlQUFlLENBQUMsQ0FBQ0UsU0FBUyxHQUFNQSxTQUFTLEtBQUtKLE1BQU0sQ0FBQ0ssTUFBTSxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUdELFNBQVMsR0FBRyxDQUFDO1FBQUMsQ0FBQyxDQUFDO0tBQ3ZGO0lBRUQscUJBQ0UsOERBQUNHLEtBQUc7UUFBQ0MsU0FBUyxFQUFFVixrRUFBYTs7MEJBQzNCLDhEQUFDUyxLQUFHO2dCQUFDQyxTQUFTLEVBQUVWLHdFQUFtQjswQkFDaENFLE1BQU0sQ0FBQ1csR0FBRyxDQUFDLENBQUNDLEtBQUssRUFBRUMsS0FBSyxpQkFDdkIsOERBQUNDLEtBQUc7d0JBRUZDLEdBQUcsRUFBRSxDQUFDLFFBQVEsRUFBRUgsS0FBSyxDQUFDLENBQUM7d0JBQ3ZCSSxHQUFHLEVBQUMsT0FBTzt3QkFDWFIsU0FBUyxFQUFFLENBQUMsRUFBRVYsc0VBQWlCLENBQUMsQ0FBQyxFQUFFZSxLQUFLLEtBQUtaLFlBQVksR0FBR0gsa0VBQWEsR0FBRyxFQUFFLENBQUMsQ0FBQzt1QkFIM0VlLEtBQUs7Ozs7aUNBSVY7Z0JBQ0gsQ0FBQzs7Ozs7eUJBQ0U7MEJBRU4sOERBQUNOLEtBQUc7Z0JBQUNDLFNBQVMsRUFBRVYsc0VBQWlCOztvQkFDOUJHLFlBQVksR0FBRyxDQUFDO29CQUFDLEtBQUc7b0JBQUNELE1BQU0sQ0FBQ0ssTUFBTTs7Ozs7O3lCQUMvQjswQkFFTiw4REFBQ2UsUUFBTTtnQkFBQ1osU0FBUyxFQUFFVixzRUFBaUI7Z0JBQUV3QixPQUFPLEVBQUVuQixlQUFlOzBCQUM1RCw0RUFBQ1AseURBQWE7Ozs7NkJBQUc7Ozs7O3lCQUNWOzBCQUVULDhEQUFDd0IsUUFBTTtnQkFBQ1osU0FBUyxFQUFFVixzRUFBaUI7Z0JBQUV3QixPQUFPLEVBQUVoQixlQUFlOzBCQUM1RCw0RUFBQ1QsMERBQWM7Ozs7NkJBQUc7Ozs7O3lCQUNYOzs7Ozs7aUJBQ0wsQ0FDTjtDQUNIO0FBRUQsaUVBQWVFLE1BQU0sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3F1b3RlLXdpZGdldC8uL2NvbXBvbmVudHMvU2xpZGVyLmpzPzc0ODkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBGaUNoZXZyb25MZWZ0LCBGaUNoZXZyb25SaWdodCB9IGZyb20gJ3JlYWN0LWljb25zL2ZpJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1NsaWRlci5tb2R1bGUuY3NzJztcclxuXHJcbmNvbnN0IFNsaWRlciA9ICh7IHNsaWRlcyB9KSA9PiB7XHJcbiAgY29uc3QgW2N1cnJlbnRJbmRleCwgc2V0Q3VycmVudEluZGV4XSA9IHVzZVN0YXRlKDApO1xyXG5cclxuICBjb25zdCBoYW5kbGVQcmV2U2xpZGUgPSAoKSA9PiB7XHJcbiAgICBzZXRDdXJyZW50SW5kZXgoKHByZXZJbmRleCkgPT4gKHByZXZJbmRleCA9PT0gMCA/IHNsaWRlcy5sZW5ndGggLSAxIDogcHJldkluZGV4IC0gMSkpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZU5leHRTbGlkZSA9ICgpID0+IHtcclxuICAgIHNldEN1cnJlbnRJbmRleCgocHJldkluZGV4KSA9PiAocHJldkluZGV4ID09PSBzbGlkZXMubGVuZ3RoIC0gMSA/IDAgOiBwcmV2SW5kZXggKyAxKSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2xpZGVyfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zbGlkZVdyYXBwZXJ9PlxyXG4gICAgICAgIHtzbGlkZXMubWFwKChzbGlkZSwgaW5kZXgpID0+IChcclxuICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgc3JjPXtgL2ltYWdlcy8ke3NsaWRlfWB9XHJcbiAgICAgICAgICAgIGFsdD1cIlNsaWRlXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMuc2xpZGVJbWFnZX0gJHtpbmRleCA9PT0gY3VycmVudEluZGV4ID8gc3R5bGVzLmFjdGl2ZSA6ICcnfWB9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2xpZGVDb3VudH0+XHJcbiAgICAgICAge2N1cnJlbnRJbmRleCArIDF9IC8ge3NsaWRlcy5sZW5ndGh9XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5wcmV2QnV0dG9ufSBvbkNsaWNrPXtoYW5kbGVQcmV2U2xpZGV9PlxyXG4gICAgICAgIDxGaUNoZXZyb25MZWZ0IC8+XHJcbiAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5uZXh0QnV0dG9ufSBvbkNsaWNrPXtoYW5kbGVOZXh0U2xpZGV9PlxyXG4gICAgICAgIDxGaUNoZXZyb25SaWdodCAvPlxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTbGlkZXI7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJGaUNoZXZyb25MZWZ0IiwiRmlDaGV2cm9uUmlnaHQiLCJzdHlsZXMiLCJTbGlkZXIiLCJzbGlkZXMiLCJjdXJyZW50SW5kZXgiLCJzZXRDdXJyZW50SW5kZXgiLCJoYW5kbGVQcmV2U2xpZGUiLCJwcmV2SW5kZXgiLCJsZW5ndGgiLCJoYW5kbGVOZXh0U2xpZGUiLCJkaXYiLCJjbGFzc05hbWUiLCJzbGlkZXIiLCJzbGlkZVdyYXBwZXIiLCJtYXAiLCJzbGlkZSIsImluZGV4IiwiaW1nIiwic3JjIiwiYWx0Iiwic2xpZGVJbWFnZSIsImFjdGl2ZSIsInNsaWRlQ291bnQiLCJidXR0b24iLCJwcmV2QnV0dG9uIiwib25DbGljayIsIm5leHRCdXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Slider.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Slider */ \"./components/Slider.js\");\n\n\n\nconst HomePage = ()=>{\n    const slides = [\n        \"2.png\",\n        \"3.png\",\n        \"4.png\",\n        \"5.png\",\n        \"6.png\",\n        \"7.png\",\n        \"8.png\",\n        \"9.png\",\n        \"10.png\", \n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Slider__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            slides: slides\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Ryu\\\\WebstormProjects\\\\untitled\\\\first\\\\pages\\\\index.js\",\n            lineNumber: 19,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Ryu\\\\WebstormProjects\\\\untitled\\\\first\\\\pages\\\\index.js\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomePage);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUEwQjtBQUNnQjtBQUUxQyxNQUFNRSxRQUFRLEdBQUcsSUFBTTtJQUNyQixNQUFNQyxNQUFNLEdBQUc7UUFDYixPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLFFBQVE7S0FDVDtJQUVELHFCQUNFLDhEQUFDQyxLQUFHO2tCQUNGLDRFQUFDSCwwREFBTTtZQUFDRSxNQUFNLEVBQUVBLE1BQU07Ozs7O3FCQUFJOzs7OztpQkFDdEIsQ0FDTjtDQUNIO0FBRUQsaUVBQWVELFFBQVEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3F1b3RlLXdpZGdldC8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFNsaWRlciBmcm9tICcuLi9jb21wb25lbnRzL1NsaWRlcic7XHJcblxyXG5jb25zdCBIb21lUGFnZSA9ICgpID0+IHtcclxuICBjb25zdCBzbGlkZXMgPSBbXHJcbiAgICAnMi5wbmcnLFxyXG4gICAgJzMucG5nJyxcclxuICAgICc0LnBuZycsXHJcbiAgICAnNS5wbmcnLFxyXG4gICAgJzYucG5nJyxcclxuICAgICc3LnBuZycsXHJcbiAgICAnOC5wbmcnLFxyXG4gICAgJzkucG5nJyxcclxuICAgICcxMC5wbmcnLFxyXG4gIF07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8U2xpZGVyIHNsaWRlcz17c2xpZGVzfSAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlOyJdLCJuYW1lcyI6WyJSZWFjdCIsIlNsaWRlciIsIkhvbWVQYWdlIiwic2xpZGVzIiwiZGl2Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-icons/fi":
/*!*********************************!*\
  !*** external "react-icons/fi" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/fi");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();