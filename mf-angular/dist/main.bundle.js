webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Main page for MF -->\n\n<div id=\"body_wrap\">\n  <div id=\"mid_wrap\">\n    <div id=\"nav\">\n      <!-- Navigation Bar -->\n      <ul class=\"navigation\" id=\"nav_menu\">\n        <li>\n          <a title=\"Home\" href=\"\">Home</a>\n        </li>\n        <li>\n          <a title=\"Browse by Date\" href=\"\">Browse by Date</a>\n        </li>\n        <li>\n          <a title=\"Browse by Hand\" href=\"\">Browse by Hand</a>\n        </li>\n        <li>\n          <a title=\"About\" href=\"\">About</a>\n        </li>\n      </ul>\n      <!-- Nav Bar END -->\n    </div>\n    <!-- nav END -->\n    <div id=\"mid\">\n      <div id=\"col_wrap\">\n        <div id=\"col_1\">\n          <div id=\"body_txt\">\n            <!-- Folio Header -->\n            <h2 style=\"margin-top: 1px; padding-top: 0;\">1897: 5r</h2>\n            <!-- Folio Metadata -->\n            <p>\n              <li>Year: YYYY</li>\n              <li>Hand: name</li>\n              <li>Diary Num: num</li>\n              <br>\n              <li>Folio Num: num</li>\n              <li>Location: location</li> \n              <br>\n              <li>Transcription Status: </li>\n              <li>Transcriber: name</li>\n            </p>\n          </div>\n          <div id=\"search_wrap\">\n            <p>Search</p>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div id=\"col_2\">\n      <img src=\"../assets/MF_Diary1.jpg\">\n    </div>\n    <div id=\"col_3\">\n      \n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#body_wrap {\n  text-align: center;\n  margin: 0;\n  padding-top: 10px;\n  padding-bottom: 50px; }\n\n#mid_wrap {\n  padding-top: 125px;\n  background: url(" + __webpack_require__("../../../../../src/assets/MFHeader.png") + ") no-repeat 50% 0;\n  background-size: 500px 100px; }\n\n#nav {\n  text-align: center;\n  max-width: 100%;\n  margin: 0;\n  padding: 3px 0 5px 0; }\n\n#nav_menu {\n  padding-top: 3px;\n  white-space: nowrap; }\n  #nav_menu li {\n    display: inline;\n    font: 17px normal;\n    padding-left: 40px;\n    padding-right: 40px;\n    z-index: 1; }\n  #nav_menu a:link, #nav_menu a:visited {\n    color: #47525e;\n    text-decoration: none; }\n  #nav_menu a:hover {\n    color: #f24c30;\n    text-decoration: underline; }\n\n#mid {\n  position: relative;\n  max-width: 940px;\n  margin: 0 auto 0 auto; }\n\n#col_wrap {\n  max-width: 100%;\n  padding: 0;\n  min-height: 14px;\n  font: 14px;\n  line-height: 14px;\n  overflow: hidden; }\n\n#col_1 {\n  float: none;\n  max-width: 900px;\n  margin: 0;\n  padding: 20px; }\n  #col_1 li {\n    display: inline;\n    text-align: left;\n    margin: 0;\n    padding: 0 75px 0 10px; }\n\n#col_2 {\n  float: left;\n  width: 45%;\n  min-height: 500px;\n  margin-left: 5%;\n  border: 2px solid #343f4b; }\n  #col_2 img {\n    width: 100%;\n    height: auto; }\n\n#col_3 {\n  float: right;\n  width: 45%;\n  min-height: 500px;\n  margin-right: 5%;\n  border: 2px solid #343f4b; }\n\n#body_txt {\n  text-align: left;\n  color: #f24c30;\n  max-width: 515px;\n  line-height: 21px;\n  padding: 10px; }\n\nh2 {\n  text-align: left;\n  color: #47525e;\n  max-width: 515px;\n  line-height: 25px;\n  padding-bottom: 10px; }\n\n#search_wrap {\n  max-width: 100%;\n  font: 12px bold;\n  color: #969faa;\n  background: #343f4b 0 0;\n  text-align: left;\n  margin: 0 0 15px 0;\n  border: 1px solid #8492a6;\n  border-radius: 5px;\n  height: 20px;\n  padding: 2px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["G" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot()
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/assets/MFHeader.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "MFHeader.b13a71b8689edaecfd30.png";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map