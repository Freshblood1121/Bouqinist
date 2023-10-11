"use strict";(self.webpackChunkelder_books_fe=self.webpackChunkelder_books_fe||[]).push([[7333],{365:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('// ESM COMPAT FLAG\n__webpack_require__.r(__webpack_exports__);\n\n// EXPORTS\n__webpack_require__.d(__webpack_exports__, {\n  "default": () => (/* binding */ Categories_Categories)\n});\n\n// EXTERNAL MODULE: ./node_modules/react/index.js\nvar react = __webpack_require__(5466);\n// EXTERNAL MODULE: ./node_modules/@mui/material/Grid/Grid.js + 2 modules\nvar Grid = __webpack_require__(2010);\n// EXTERNAL MODULE: ./node_modules/@mui/material/Button/Button.js + 3 modules\nvar Button = __webpack_require__(4520);\n// EXTERNAL MODULE: ./node_modules/@mui/material/styles/styled.js\nvar styled = __webpack_require__(1256);\n// EXTERNAL MODULE: ./node_modules/@emotion/react/dist/emotion-react.browser.esm.js\nvar emotion_react_browser_esm = __webpack_require__(6895);\n// EXTERNAL MODULE: ./src/Utils/Constants.js\nvar Constants = __webpack_require__(576);\n;// CONCATENATED MODULE: ./src/Components/UI/CategoryButton.jsx\nvar _templateObject, _templateObject2;\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\n\n\n\n\nvar enterKeyframe = (0,emotion_react_browser_esm/* keyframes */.F4)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\\n  0% {\\n    transform: scale(0);\\n    opacity: 0.1;\\n  }\\n  100% {\\n    transform: scale(1);\\n    opacity: 0.3;\\n  }\\n"])));\nvar CategoryButton = (0,styled/* default */.ZP)(Button/* default */.Z)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\\n  width: calc(100% - 9px);\\n  height: 80px;\\n  border-radius: 10px;\\n  border: 2px solid ", ";\\n  background: white;\\n  box-shadow: 9px 15px 0px 0px ", ";\\n  text-align: center;\\n  padding: 0;\\n  color: ", ";\\n  font-size: 24px;\\n  line-height: normal;\\n  text-transform: none;\\n  transition: box-shadow 0.25s cubic-bezier(0.4, 0, 0.2, 1) 0ms;\\n\\n  &:hover {\\n    box-shadow: 9px 15px 0px 0px ", ";\\n    background-color: white;\\n  }\\n\\n  && .MuiTouchRipple-child {\\n    background-color: black;\\n  }\\n\\n  && .MuiTouchRipple-rippleVisible {\\n    opacity: 0.3;\\n    animation-name: ", ";\\n    animation-duration: 550ms;\\n    animation-timing-function: ", ";\\n  }\\n"])), Constants/* palette */.DG.basic, Constants/* palette */.DG.categoryBG, Constants/* palette */.DG.basic, Constants/* palette */.DG.hover, enterKeyframe, function (_ref) {\n  var theme = _ref.theme;\n  return theme.transitions.easing.easeInOut;\n});\n/* harmony default export */ const UI_CategoryButton = (CategoryButton);\n// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 21 modules\nvar es = __webpack_require__(4641);\n// EXTERNAL MODULE: ./src/Store/categories/actions.js\nvar actions = __webpack_require__(498);\n// EXTERNAL MODULE: ./node_modules/react-router-dom/dist/index.js\nvar dist = __webpack_require__(72);\n;// CONCATENATED MODULE: ./src/img/folder_no.svg\nconst folder_no_namespaceObject = __webpack_require__.p + "c9ecb170e2fccbb04ec2.svg";\n;// CONCATENATED MODULE: ./src/Components/MainPage/Categories/Categories.jsx\n\n\n\n\n\n\n\n\n\nvar Categories = function Categories() {\n  var categories = (0,es/* useSelector */.v9)(function (store) {\n    return store.categories.categories;\n  });\n  return /*#__PURE__*/react.createElement("div", {\n    className: "ctgs"\n  }, /*#__PURE__*/react.createElement("div", {\n    className: "ctgs__title"\n  }, /*#__PURE__*/react.createElement("img", {\n    // src="./img/folder_no.svg"\n    src: folder_no_namespaceObject,\n    alt: "folder"\n  }), /*#__PURE__*/react.createElement("h3", {\n    className: "ctgs__h3"\n  }, "\\u041A\\u0430\\u0442\\u0435\\u0433\\u043E\\u0440\\u0438\\u0438")), /*#__PURE__*/react.createElement("div", {\n    className: "ctgs__btns"\n  }, /*#__PURE__*/react.createElement(Grid/* default */.ZP, {\n    container: true,\n    columns: 12,\n    columnSpacing: 3,\n    rowSpacing: 5\n  }, categories.map(function (category, index) {\n    return /*#__PURE__*/react.createElement(Grid/* default */.ZP, {\n      key: index,\n      item: true,\n      xs: 12,\n      sm: 6,\n      lg: 4\n    }, /*#__PURE__*/react.createElement(dist/* Link */.rU, {\n      to: "/categories/".concat(category.id)\n    }, /*#__PURE__*/react.createElement(UI_CategoryButton, null, category.title)));\n  }))));\n};\n/* harmony default export */ const Categories_Categories = (Categories);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzY1LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQUE7QUFBQTtBQUFBO0FBRWlCO0FBQ0s7QUFFaEQsSUFBTU0sYUFBYSxHQUFHRiwrQ0FBUyxDQUFBRyxlQUFBLEtBQUFBLGVBQUEsR0FBQUMsc0JBQUEsZ0lBUzlCO0FBRUQsSUFBTUMsY0FBYyxHQUFHTiwwQkFBTSxDQUFDRixxQkFBTSxDQUFDLENBQUFTLGdCQUFBLEtBQUFBLGdCQUFBLEdBQUFGLHNCQUFBLGtxQkFJZkgseUJBQU8sQ0FBQ00sS0FBSyxFQUVGTix5QkFBTyxDQUFDTyxVQUFVLEVBR3hDUCx5QkFBTyxDQUFDTSxLQUFLLEVBT1dOLHlCQUFPLENBQUNRLEtBQUssRUFVMUJQLGFBQWEsRUFFRixVQUFBUSxJQUFBO0VBQUEsSUFBR0MsS0FBSyxHQUFBRCxJQUFBLENBQUxDLEtBQUs7RUFBQSxPQUNuQ0EsS0FBSyxDQUFDQyxXQUFXLENBQUNDLE1BQU0sQ0FBQ0MsU0FBUztBQUFBLEVBRXZDO0FBRUQsd0RBQWVULGNBQWMsRTs7Ozs7Ozs7OztBQ2pEWTtBQUNmO0FBQUE7QUFBQTtBQUUyQjtBQUNFO0FBSVo7QUFDSDtBQUNXO0FBRW5ELElBQU1rQixVQUFVLEdBQUcsU0FBYkEsVUFBVUEsQ0FBQSxFQUFTO0VBQ3ZCLElBQU1DLFVBQVUsR0FBR04sMEJBQVcsQ0FBQyxVQUFDTyxLQUFLO0lBQUEsT0FBS0EsS0FBSyxDQUFDRCxVQUFVLENBQUNBLFVBQVU7RUFBQSxFQUFDO0VBRXRFLG9CQUNFNUIsbUJBQUE7SUFBSytCLFNBQVMsRUFBQztFQUFNLGdCQUNuQi9CLG1CQUFBO0lBQUsrQixTQUFTLEVBQUM7RUFBYSxnQkFDMUIvQixtQkFBQTtJQUNFO0lBQ0FnQyxHQUFHLEVBQUVOLHlCQUFVO0lBQ2ZPLEdBQUcsRUFBQztFQUFRLENBQ2IsQ0FBQyxlQUNGakMsbUJBQUE7SUFBSStCLFNBQVMsRUFBQztFQUFVLEdBQUMsd0RBQWEsQ0FDbkMsQ0FBQyxlQUVOL0IsbUJBQUE7SUFBSytCLFNBQVMsRUFBQztFQUFZLGdCQUN6Qi9CLG1CQUFBLENBQUNvQixvQkFBSTtJQUFDYyxTQUFTO0lBQUNDLE9BQU8sRUFBRSxFQUFHO0lBQUNDLGFBQWEsRUFBRSxDQUFFO0lBQUNDLFVBQVUsRUFBRTtFQUFFLEdBQzFEVCxVQUFVLENBQUNVLEdBQUcsQ0FBQyxVQUFDQyxRQUFRLEVBQUVDLEtBQUssRUFBSztJQUNuQyxvQkFDRXhDLG1CQUFBLENBQUNvQixvQkFBSTtNQUFDcUIsR0FBRyxFQUFFRCxLQUFNO01BQUNFLElBQUk7TUFBQ0MsRUFBRSxFQUFFLEVBQUc7TUFBQ0MsRUFBRSxFQUFFLENBQUU7TUFBQ0MsRUFBRSxFQUFFO0lBQUUsZ0JBQzFDN0MsbUJBQUEsQ0FBQ3lCLGlCQUFJO01BQUNxQixFQUFFLGlCQUFBQyxNQUFBLENBQWlCUixRQUFRLENBQUNTLEVBQUU7SUFBRyxnQkFDckNoRCxtQkFBQSxDQUFDUyxpQkFBYyxRQUFFOEIsUUFBUSxDQUFDVSxLQUFzQixDQUM1QyxDQUNGLENBQUM7RUFFWCxDQUFDLENBQ0csQ0FDSCxDQUNGLENBQUM7QUFFVixDQUFDO0FBRUQsNERBQWV0QixVQUFVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZWxkZXItYm9va3MtZmUvLi9zcmMvQ29tcG9uZW50cy9VSS9DYXRlZ29yeUJ1dHRvbi5qc3g/OTY3NSIsIndlYnBhY2s6Ly9lbGRlci1ib29rcy1mZS8uL3NyYy9Db21wb25lbnRzL01haW5QYWdlL0NhdGVnb3JpZXMvQ2F0ZWdvcmllcy5qc3g/NTFmOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEJ1dHRvbiwgU3ZnSWNvbiwgc3R5bGVkIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IHsga2V5ZnJhbWVzIH0gZnJvbSBcIkBlbW90aW9uL3JlYWN0XCI7XHJcbmltcG9ydCB7IHBhbGV0dGUgfSBmcm9tIFwiLi4vLi4vVXRpbHMvQ29uc3RhbnRzXCI7XHJcblxyXG5jb25zdCBlbnRlcktleWZyYW1lID0ga2V5ZnJhbWVzYFxyXG4gIDAlIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgICBvcGFjaXR5OiAwLjE7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgIG9wYWNpdHk6IDAuMztcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBDYXRlZ29yeUJ1dHRvbiA9IHN0eWxlZChCdXR0b24pYFxyXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSA5cHgpO1xyXG4gIGhlaWdodDogODBweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICR7cGFsZXR0ZS5iYXNpY307XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgYm94LXNoYWRvdzogOXB4IDE1cHggMHB4IDBweCAke3BhbGV0dGUuY2F0ZWdvcnlCR307XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgY29sb3I6ICR7cGFsZXR0ZS5iYXNpY307XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjI1cyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpIDBtcztcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBib3gtc2hhZG93OiA5cHggMTVweCAwcHggMHB4ICR7cGFsZXR0ZS5ob3Zlcn07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICB9XHJcblxyXG4gICYmIC5NdWlUb3VjaFJpcHBsZS1jaGlsZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICB9XHJcblxyXG4gICYmIC5NdWlUb3VjaFJpcHBsZS1yaXBwbGVWaXNpYmxlIHtcclxuICAgIG9wYWNpdHk6IDAuMztcclxuICAgIGFuaW1hdGlvbi1uYW1lOiAke2VudGVyS2V5ZnJhbWV9O1xyXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiA1NTBtcztcclxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246ICR7KHsgdGhlbWUgfSkgPT5cclxuICAgICAgdGhlbWUudHJhbnNpdGlvbnMuZWFzaW5nLmVhc2VJbk91dH07XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2F0ZWdvcnlCdXR0b247XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFwiLi9DYXRlZ29yaWVzLmNzc1wiO1xyXG5pbXBvcnQgeyBCdXR0b24sIEdyaWQgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgQ2F0ZWdvcnlCdXR0b24gZnJvbSBcIi4uLy4uL1VJL0NhdGVnb3J5QnV0dG9uXCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQge1xyXG4gIGdldENhdGVnb3JpZXMsXHJcbiAgc2VsZWN0Q2F0ZWdvcnksXHJcbn0gZnJvbSBcIi4uLy4uLy4uL1N0b3JlL2NhdGVnb3JpZXMvYWN0aW9uc1wiO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IGZvbGRlckltZyBmcm9tIFwiLi4vLi4vLi4vaW1nL2ZvbGRlcl9uby5zdmdcIjtcclxuXHJcbmNvbnN0IENhdGVnb3JpZXMgPSAoKSA9PiB7XHJcbiAgY29uc3QgY2F0ZWdvcmllcyA9IHVzZVNlbGVjdG9yKChzdG9yZSkgPT4gc3RvcmUuY2F0ZWdvcmllcy5jYXRlZ29yaWVzKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY3Rnc1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImN0Z3NfX3RpdGxlXCI+XHJcbiAgICAgICAgPGltZ1xyXG4gICAgICAgICAgLy8gc3JjPVwiLi9pbWcvZm9sZGVyX25vLnN2Z1wiXHJcbiAgICAgICAgICBzcmM9e2ZvbGRlckltZ31cclxuICAgICAgICAgIGFsdD1cImZvbGRlclwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8aDMgY2xhc3NOYW1lPVwiY3Rnc19faDNcIj7QmtCw0YLQtdCz0L7RgNC40Lg8L2gzPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3Rnc19fYnRuc1wiPlxyXG4gICAgICAgIDxHcmlkIGNvbnRhaW5lciBjb2x1bW5zPXsxMn0gY29sdW1uU3BhY2luZz17M30gcm93U3BhY2luZz17NX0+XHJcbiAgICAgICAgICB7Y2F0ZWdvcmllcy5tYXAoKGNhdGVnb3J5LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIDxHcmlkIGtleT17aW5kZXh9IGl0ZW0geHM9ezEyfSBzbT17Nn0gbGc9ezR9PlxyXG4gICAgICAgICAgICAgICAgPExpbmsgdG89e2AvY2F0ZWdvcmllcy8ke2NhdGVnb3J5LmlkfWB9PlxyXG4gICAgICAgICAgICAgICAgICA8Q2F0ZWdvcnlCdXR0b24+e2NhdGVnb3J5LnRpdGxlfTwvQ2F0ZWdvcnlCdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfSl9XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXRlZ29yaWVzO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJCdXR0b24iLCJTdmdJY29uIiwic3R5bGVkIiwia2V5ZnJhbWVzIiwicGFsZXR0ZSIsImVudGVyS2V5ZnJhbWUiLCJfdGVtcGxhdGVPYmplY3QiLCJfdGFnZ2VkVGVtcGxhdGVMaXRlcmFsIiwiQ2F0ZWdvcnlCdXR0b24iLCJfdGVtcGxhdGVPYmplY3QyIiwiYmFzaWMiLCJjYXRlZ29yeUJHIiwiaG92ZXIiLCJfcmVmIiwidGhlbWUiLCJ0cmFuc2l0aW9ucyIsImVhc2luZyIsImVhc2VJbk91dCIsInVzZUVmZmVjdCIsIkdyaWQiLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwiZ2V0Q2F0ZWdvcmllcyIsInNlbGVjdENhdGVnb3J5IiwiTGluayIsImZvbGRlckltZyIsIkNhdGVnb3JpZXMiLCJjYXRlZ29yaWVzIiwic3RvcmUiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwic3JjIiwiYWx0IiwiY29udGFpbmVyIiwiY29sdW1ucyIsImNvbHVtblNwYWNpbmciLCJyb3dTcGFjaW5nIiwibWFwIiwiY2F0ZWdvcnkiLCJpbmRleCIsImtleSIsIml0ZW0iLCJ4cyIsInNtIiwibGciLCJ0byIsImNvbmNhdCIsImlkIiwidGl0bGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///365\n')}}]);