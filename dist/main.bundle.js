webpackJsonp(["main"],{

/***/ "./src/$$_gendir lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_gendir lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ".wim-nav {    \r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-pack: distribute;\r\n    justify-content: space-around;\r\n    width: 100%;\r\n    font-family: Roboto,\"Helvetica Neue\",Helvetica,Arial,sans-serif;\r\n    background-color: #10152c;\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    height: 70px;\r\n    z-index: 1000;\r\n}\r\n.wim-nav .usgsbanner {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: justify;\r\n    -ms-flex-pack: justify;\r\n   /* justify-content: space-between;*/\r\n    height: 100%;\r\n    max-width: none;\r\n    width: 100%;\r\n    padding: 0 35px;\r\n}\r\n.wim-nav .usgsbanner .nav-branding {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n    -ms-flex-direction: column;\r\n    flex-direction: column;\r\n    -webkit-box-pack: center;\r\n    -ms-flex-pack: center;\r\n    justify-content: center;\r\n    -webkit-box-sizing: border-box;\r\n            box-sizing: border-box;\r\n    padding: 0;\r\n}\r\n.wim-nav .usgsbanner .nav-branding img {\r\n    display: block;\r\n    height: 38px;\r\n    width: auto;\r\n    margin: 0 auto;\r\n}\r\n.wim-nav .usgsbanner .nav-title {    \r\n    font-size: 23px;\r\n    color: #fff;\r\n    font-weight: lighter;\r\n    height: 70px;\r\n    font-family: 'Lato',Helvetica,sans-serif;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    line-height: 70px;\r\n    -webkit-box-pack: center;\r\n    -ms-flex-pack: center;\r\n    justify-content: center;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n    -ms-flex-direction: column;\r\n    flex-direction: column;\r\n    -webkit-box-sizing: border-box;\r\n            box-sizing: border-box;\r\n    padding: 0 20px;\r\n    width: 260px;\r\n}\r\n.nav-title {\r\n    width: auto !important;\r\n}\r\n.wim-sidebar {\r\n    background-color: #eceef4;\r\n    width: 320px;\r\n    pointer-events: auto;\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    -webkit-transform: translate3d(0px, 0px, 0px);\r\n            transform: translate3d(0px, 0px, 0px);\r\n    z-index: 100;\r\n    margin-top: 70px;\r\n    height: 100%;\r\n    height: calc(100% - 70px);\r\n    overflow: auto;\r\n    -webkit-box-sizing: border-box;\r\n            box-sizing: border-box;    \r\n}\r\n.wim-sidebar-item{\r\n    display: block;\r\n    -webkit-box-sizing: border-box;\r\n            box-sizing: border-box;\r\n    padding: 0 0 15px 0;\r\n}\r\n.wim-sidebar select{\r\n    background-color: white;\r\n}\r\n.wim-sidebar button{\r\n    width: 100%;\r\n}\r\n.wim-sidebar label{\r\n    display: block;\r\n}\r\n.list-group-body {\r\n    position: relative;\r\n    background-color: #fff;\r\n    -webkit-box-shadow: inset 0 0 10px 0 rgba(50,50,50,.25);\r\n    box-shadow: inset 0 0 10px 0 rgba(50,50,50,.25);\r\n    color: #222D39;\r\n    top: 0!important;\r\n    -webkit-box-sizing: border-box;\r\n            box-sizing: border-box;\r\n    padding: 25px 15px 35px;\r\n    border-radius: 0;\r\n}\r\n.list-group-body p{\r\n    letter-spacing: 2px;\r\n}\r\n.list-group-body a {\r\n    display: block;\r\n    color: RGBA(34,45,57,.6);\r\n    font-size: 12pt;\r\n    letter-spacing: 2px;\r\n    padding: 0 0 0 15px;\r\n    font-weight: 400;\r\n    width: auto;\r\n    clear: both;\r\n    float: left;\r\n    height: 25px;\r\n    width: 100%;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    white-space: nowrap;\r\n    text-decoration: none;\r\n}\r\nselect:focus{\r\n\tbackground-image: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"14\" viewBox=\"0 0 29 14\" width=\"29\"><path fill=\"#0F8AFF\" d=\"M9.37727 3.625l5.08154 6.93523L19.54036 3.625\"/></svg>');\r\n}\r\n.scrollable {\r\n    max-height: calc(100% - 70px);\r\n}\r\n.wim-sidebar-content {\r\n    margin-top: 70px;\r\n}\r\n.scrollable {\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n}\r\n.active-link {\r\n    color: black!important;\r\n    font-weight: 500!important;\r\n}\r\n.identification {    \r\n    text-transform: uppercase;\r\n    letter-spacing: 1px;\r\n    font-size: 9pt;\r\n    display: block;\r\n    width: 100%;\r\n    margin: 0;\r\n    padding: 0 0 0 8px;\r\n    opacity: .75;\r\n    text-align: center;\r\n    color: #6E7490;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- NAV -->\r\n<div class=\"wim-nav\">    \r\n    <div class=\"usgsbanner\">\r\n        <a class=\"nav-branding\" href=\"http://www.usgs.gov\"><img src=\"https://wim.usgs.gov/website-assets/usgs-logo.png\"></a>\r\n        <span class=\"nav-title\">{{title}}</span>\r\n    </div>\r\n   \r\n</div>\r\n<br clear=\"all\"/>\r\n\r\n<!-- SIDEBAR -->\r\n<div class=\"wim-sidebar fixed\">\r\n    <div class=\"card-header\"><a [routerLink]=\"['home']\" routerLinkActive=\"active\">Home</a></div>\r\n    <ngb-accordion [closeOthers]=\"true\" #acc=\"ngbAccordion\" (panelChange)=\"beforeAccChange($event)\">\r\n        <ngb-panel *ngFor=\"let resource of configSettings.resources\" id=\"{{getName(resource.name)}}\">\r\n            <ng-template ngbPanelTitle>\r\n                <span>{{resource.name}}</span>\r\n                <i [ngClass]=\"selectedAccordion === getName(resource.name) ? 'fa fa-chevron-right pull-right': 'fa fa-chevron-down pull-right'\"></i>\r\n            </ng-template>\r\n            <ng-template ngbPanelContent>\r\n                <div class=\"list-group-body\">\r\n                        <p>{{resource.methods.type}}</p>\r\n                        <div *ngFor=\"let url of resource.methods.uriList\">\r\n                            <a [routerLink]=\"[getName(resource.name), getLink(url)]\" routerLinkActive=\"active-link\" title=\"{{url.uri}}\">{{url.id}}</a>\r\n                            <br />\r\n                        </div> \r\n                </div>\r\n            </ng-template>\r\n        </ngb-panel>\r\n    </ngb-accordion>\r\n    <br clear=\"all\" />\r\n    <div class=\"identification pull-right\">powered by <a href=\"http://wim.usgs.gov/\" target=\"_blank\">WiM</a></div>\r\n</div>\r\n\r\n<!-- MAINVIEW -->\r\n<div class=\"container\" style=\"margin-top:65px\">   \r\n   <router-outlet></router-outlet>\r\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_service__ = __webpack_require__("./src/app/config.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_path_service__ = __webpack_require__("./src/app/shared/services/path.service.ts");
// ------------------------------------------------------------------------------
// --------- app.component ------------------------------------------------------
// ------------------------------------------------------------------------------
// copyright:   2017 WiM - USGS
// authors:  Tonia Roddick USGS Wisconsin Internet Mapping             
// purpose: app component main shell that holds nav, sidebar, and mainview
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = (function () {
    function AppComponent(_configService, _route, _router, _pathService) {
        this._configService = _configService;
        this._route = _route;
        this._router = _router;
        this._pathService = _pathService;
        this.configSettings = this._configService.getConfiguration().configuration;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.selectedAccordion = "";
        this.title = this.configSettings.homepagetitle + " Documentation";
        this._pathService.getPath().subscribe(function (path) {
            if (path !== "home") {
                if (_this.accordion.activeIds[0] !== path) {
                    _this.accordion.activeIds = [path];
                    _this.selectedAccordion = path;
                }
            }
            else {
                _this.accordion.activeIds = [];
                _this.selectedAccordion = "";
            }
        });
    };
    AppComponent.prototype.getName = function (resName) {
        return resName.replace(/ /g, '');
    };
    AppComponent.prototype.getLink = function (url) {
        return url.id.replace(/ /g, '');
    };
    AppComponent.prototype.beforeAccChange = function (e) {
        // if the panel is newly being opened from another panel
        if (e.panelId !== this.selectedAccordion && e.nextState)
            this.selectedAccordion = e.panelId;
        else
            this.selectedAccordion = "";
    };
    return AppComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('acc'),
    __metadata("design:type", Object)
], AppComponent.prototype, "accordion", void 0);
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("./src/app/app.component.html"),
        styles: [__webpack_require__("./src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__config_service__["a" /* ConfigService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__config_service__["a" /* ConfigService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_path_service__["a" /* PathService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_services_path_service__["a" /* PathService */]) === "function" && _d || Object])
], AppComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ConfigLoader */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__mainview_mainview_component__ = __webpack_require__("./src/app/mainview/mainview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__not_found_not_found_component__ = __webpack_require__("./src/app/not-found/not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__config_service__ = __webpack_require__("./src/app/config.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_routing_module__ = __webpack_require__("./src/app/app.routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__mainview_map_service__ = __webpack_require__("./src/app/mainview/map.service.ts");
// ------------------------------------------------------------------------------
// --------- app.module ---------------------------------------------------------
// ------------------------------------------------------------------------------
// copyright:   2017 WiM - USGS
// authors:  Tonia Roddick USGS Wisconsin Internet Mapping             
// purpose: app module for web services documentation interface
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












function ConfigLoader(configService) {
    //returns externally referenced config file for use in this application	
    return function () { return configService.load(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].configFile); };
}
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_6__mainview_mainview_component__["a" /* MainviewComponent */], __WEBPACK_IMPORTED_MODULE_7__not_found_not_found_component__["a" /* PageNotFoundComponent */]],
        imports: [__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_10__app_routing_module__["a" /* AppRoutingModule */], __WEBPACK_IMPORTED_MODULE_9__shared_shared_module__["a" /* SharedModule */].forRoot()],
        providers: [__WEBPACK_IMPORTED_MODULE_11__mainview_map_service__["a" /* MapService */], __WEBPACK_IMPORTED_MODULE_8__config_service__["a" /* ConfigService */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["d" /* APP_INITIALIZER */], useFactory: ConfigLoader, deps: [__WEBPACK_IMPORTED_MODULE_8__config_service__["a" /* ConfigService */]], multi: true }
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

/*
The first line makes ConfigService class available to Angular2.
The second line uses APP_INITIALIZER to execute ConfigLoader method before application startup.
The 'multi: true' is being used because an application can have more than one line of APP_INITIALIZER.
*/ 
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "./src/app/app.routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mainview_mainview_component__ = __webpack_require__("./src/app/mainview/mainview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__not_found_not_found_component__ = __webpack_require__("./src/app/not-found/not-found.component.ts");
// ------------------------------------------------------------------------------
// -------- app.routing.module --------------------------------------------------
// ------------------------------------------------------------------------------
// copyright:   2017 WiM - USGS
// authors:  Tonia Roddick USGS Wisconsin Internet Mapping
// purpose: routes for the resource clicked



var appRoutes = [
    { path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: __WEBPACK_IMPORTED_MODULE_1__mainview_mainview_component__["a" /* MainviewComponent */]
    },
    {
        path: '**',
        component: __WEBPACK_IMPORTED_MODULE_1__mainview_mainview_component__["a" /* MainviewComponent */]
    },
    {
        path: 'notFound',
        component: __WEBPACK_IMPORTED_MODULE_2__not_found_not_found_component__["a" /* PageNotFoundComponent */],
        pathMatch: 'full'
    }
];
var AppRoutingModule = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(appRoutes);
//# sourceMappingURL=app.routing.module.js.map

/***/ }),

/***/ "./src/app/config.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
// ------------------------------------------------------------------------------
// ----- config.service..ts -----------------------------------------------------
// ------------------------------------------------------------------------------
// copyright:   2017 WiM - USGS
// authors:  Tonia Roddick - USGS Wisconsin Internet Mapping
// purpose: service to get configuration file
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ConfigService = (function () {
    function ConfigService(_http) {
        this._http = _http;
    }
    ConfigService.prototype.load = function (url) {
        var _this = this;
        return new Promise(function (resolve) {
            _this._http.get(url).map(function (res) { return res.json(); }).subscribe(function (config) {
                _this.config = config;
                resolve();
            });
        });
    };
    ConfigService.prototype.getConfiguration = function () {
        return this.config;
    };
    return ConfigService;
}());
ConfigService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], ConfigService);

var _a;
//# sourceMappingURL=config.service.js.map

/***/ }),

/***/ "./src/app/mainview/mainview.component.css":
/***/ (function(module, exports) {

module.exports = " .page-header {\r\n    padding: 25px!important;\r\n    margin-top: 10px;\r\n    padding-bottom: 9px;\r\n    margin: 40px 0 20px;\r\n    border-bottom: 1px solid #eee;\r\n}\r\n.well {\r\n    background-color: rgba(0,0,0,.015);\r\n    border-radius: 0;\r\n    -webkit-box-shadow: none;\r\n            box-shadow: none;\r\n    border: 1px solid #ECEEF4;\r\n    font-weight: 400;\r\n    letter-spacing: 1px;\r\n    font-size: 11pt;\r\n    line-height: 1.6em;\r\n    min-height: 20px;\r\n    padding: 19px;\r\n    margin-bottom: 20px;\r\n}\r\n.page-header+.well {\r\n    margin-left: 25px;\r\n    margin-right: 25px;\r\n}\r\n.scrollable {    \r\n    padding: 0 0 35px;\r\n\r\n}\r\n.ngIf+div:nth-child(3) {\r\n    background-color: #3a7bd5;\r\n    -webkit-box-sizing: border-box;\r\n            box-sizing: border-box;\r\n    padding: 20px;\r\n    -webkit-box-shadow: 0 3px 6px rgba(0,0,0,.16), 0 3px 6px rgba(0,0,0,.23);\r\n            box-shadow: 0 3px 6px rgba(0,0,0,.16), 0 3px 6px rgba(0,0,0,.23);\r\n    margin-bottom: 35px;\r\n    color: #fff;\r\n    border: none;\r\n}\r\n.ngIf+div:nth-child(3) h4 {\r\n    text-transform: uppercase;\r\n    letter-spacing: 3px;\r\n    font-weight: 500;\r\n    font-size: 12pt;\r\n    margin-bottom: 3px;\r\n}\r\nh4:nth-child(1) {\r\n    padding-top: 0;\r\n}\r\n.ngIf+div:nth-child(3) .well {\r\n    border: none;\r\n    padding: 0;\r\n    background-color: transparent;\r\n    font-weight: lighter;\r\n    margin-bottom: 0;\r\n    font-size: 10pt;\r\n}\r\n.red {\r\n    color: red;\r\n}\r\n.green {\r\n    color: green;\r\n}\r\n.mapView {\r\n    height:500px;\r\n    width:inherit;\r\n}\r\n#resourceDescription{\r\n    background-color: #3a7bd5;\r\n    -webkit-box-sizing: border-box;\r\n            box-sizing: border-box;\r\n    padding: 20px;\r\n    -webkit-box-shadow: 0 3px 6px rgba(0,0,0,.16), 0 3px 6px rgba(0,0,0,.23);\r\n            box-shadow: 0 3px 6px rgba(0,0,0,.16), 0 3px 6px rgba(0,0,0,.23);\r\n    margin-bottom: 35px;\r\n    color: #fff;\r\n    border: none;\r\n}\r\n#resourceDescription h4 {\r\n    text-transform: uppercase;\r\n    letter-spacing: 3px;\r\n    font-weight: 500;\r\n    font-size: 12pt;\r\n    margin-bottom: 3px;\r\n}\r\n#resourceDescription .well {    \r\n    border: none;\r\n    padding: 0;\r\n    background-color: transparent;\r\n    font-weight: lighter;\r\n    margin-bottom: 0;\r\n    font-size: 10pt;\r\n}"

/***/ }),

/***/ "./src/app/mainview/mainview.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"thisRoute == 'home'\">\r\n    <div class=\"home-view\">\r\n        <div class=\"scrollable\">\r\n            <div class=\"scrollable-content\">\r\n                <div class=\"page-header\">\r\n                    <h2>{{configSettings.homepagetitle}}</h2>\r\n                </div>\r\n                <div class=\"well\">\r\n                    <h3>Introduction</h3>\r\n                    <p>\r\n                        The USGS Short-Term Network (STN) System includes data serices that power the <a href=\"{{configSettings.application}}\" target=\"_blank\">web data entry applicaton</a>,\r\n                        public and internal mapping application and numerous other applications. The services can be directly accessed using the STN Service API documented here, or consumed by \r\n                        a custom client application using HTTP protocols. If you have any questions about the services or need additional services, please contact Marie Peppler (mpeppler@usgs.gov).\r\n                    </p>\r\n                    <p>\r\n                        The STN Web Services API performs multiple high level procedures which include; database queries, geospatial queries and service requests in order to compile and create simple \r\n                        objects that can be consumed by custom client applications. As documented by this page, which can also serve as an URL builder, the STN Service API is built following \r\n                        <a href=\"http://en.wikipedia.org/wiki/Representational_state_transfer\" target=\"_blank\">RESTful</a> principles to ensure scalability and predictable URLs.\r\n                    </p>\r\n\r\n                    <h3>Getting Started</h3>\r\n                    <p>The URL of each resource can be obtained by accessing one of the resources located to the left.</p>\r\n\r\n                    <p>Every resource is exposed as a URL and follows the outlined pattern described below:</p>\r\n                    <ul>\r\n                        <li>The description of the resource.</li>\r\n                        <li>The service URL.</li>\r\n                        <li>Optional response formats, such as xml, json, or geojson</li>\r\n                        <li>URL parameters (if any).\r\n                            <ul>\r\n                                <li>Parameter Name.</li>\r\n                                <li>Value Type, (string, number, boolean, etc.).</li>\r\n                                <li>A description of what the parameter represents.</li>\r\n                                <li>Whether the parameter is required or optional.</li>\r\n                                <li>And an example input parameter.</li>\r\n                            </ul>\r\n                        </li>\r\n                        <li>A REST Query URL test tool that builds an example url, based on the given input parameter values.</li>\r\n                        <li>And an example response from the REST Query</li>\r\n                    </ul>\r\n                </div>\r\n                <!-- end well -->\r\n            </div>\r\n            <!-- end *ngIf=\"thisRoute == 'home'\" -->\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<!-- start of the resource section chosen -->\r\n<div id=\"resourceDescription\" *ngIf=\"isSelected\">\r\n    <h4>{{selectedResource.name}}</h4>\r\n    <div class=\"well\">{{ selectedResource.description }}</div>\r\n</div>\r\n<div class=\"panel\" *ngIf=\"selectedUri\">\r\n    <h4>Service Description</h4>\r\n    <div class=\"well\">{{ selectedUri.description }}</div>\r\n\r\n    <h4>Service URL</h4>\r\n    <div class=\"well\">\r\n        <code>{{configSettings.services}}{{ selectedUri.uri }}</code>\r\n    </div>\r\n\r\n    <div *ngIf=\"selectedUri.selectedMedia\">\r\n        <h4>Response formats</h4>\r\n        <div class=\"well\">\r\n            <select [(ngModel)]=\"selectedUri.selectedMedia\" name=\"selectedMedia\" (ngModelChange)=\"updateNewUri()\" style=\"width:7em\">\r\n                <option [ngValue]=\"i\" *ngFor=\"let i of selectedUri.availableMedia\">{{i}}</option>\r\n            </select>\r\n        </div>\r\n    </div>\r\n    <h4>Parameters</h4>\r\n    <div class=\"well parameters-wrapper\">\r\n        <table class=\"table table-condensed\" style=\"font-size:12px;margin-bottom:0px;\">\r\n            <thead>\r\n                <tr>\r\n                    <th>Name</th>\r\n                    <th>Type</th>\r\n                    <th>Optional</th>\r\n                    <th>Description</th>\r\n                    <th>Input Parameter</th>\r\n                    <th>Additional Info</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let item of selectedUri.parameters\">\r\n                    <td><strong>{{item.name}}</strong></td>\r\n                    <td>{{item.type}}</td>\r\n                    <td>{{item.optional}}</td>\r\n                    <td>{{item.description}}</td>\r\n                    <td>\r\n                        <i [ngClass]=\"item.value || item.optional ? 'fa fa-check green': 'fa fa-warning red'\"></i>\r\n                        <input style=\"width:inherit\" [(ngModel)]=\"item.value\" [required]=\"!item.optional\" (change)=\"updateNewUri()\" novalidate>\r\n                    </td>\r\n                    <td><span *ngIf=\"item.link\"><a [attr.href]=\"item.link\" target=\"_blank\">{{item.linkName}}</a></span></td>\r\n                </tr>\r\n                <tr *ngIf=\"selectedUri.parameters.length == 0\">\r\n                    <td colspan=\"2\">No parameters are required.</td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n    <h4>REST Query URL</h4>\r\n    <div class=\"well\">\r\n        <p><i>Updated based on parameters above</i></p>\r\n        <p><a href=\"{{configSettings.services}}{{selectedUri.newURL}}\" target=\"_blank\">{{configSettings.services}}{{selectedUri.newURL}}</a></p>\r\n        <p>\r\n            <span *ngIf=\"!downloadable\" class=\"btn-toolbar\">\r\n                <button (click)=\"loadResponse()\" type=\"button\" class=\"btn btn-primary btn-sm\">\r\n                    <i class=\"fa fa-refresh\" [ngClass]=\"{'fa-spin': waitCursor}\"></i>&nbsp;&nbsp;Load response in {{selectedUri.selectedMedia}} format\r\n                </button>\r\n                <button (click)=\"showResponseOnMap()\" type=\"button\" class=\"btn btn-primary btn-sm\"\r\n                *ngIf=\"selectedUri.showMap && selectedUri.selectedMedia == '.geojson'\" [disabled]=\"!gotResponse\">\r\n                    <i class=\"fa fa-map\"></i>&nbsp;&nbsp;Show response on map\r\n                </button>\r\n                <br/>\r\n                <span *ngIf=\"selectedUri.showMap && selectedUri.selectedMedia != '.geojson'\" style=\"font-size:12px; padding-left:0px; display:block;width:100%;\">Use Response Format '.geojson' to see results on map below.</span>\r\n            </span>\r\n        </p>\r\n\r\n        <div *ngIf=\"!downloadable\" class=\"panel panel-default\" style=\"padding:25px;background:white\">\r\n            <div class=\"panel-body\">\r\n                <json-formatter *ngIf=\"requestResults\" [open]=\"false\" [json]=\"requestResults\"></json-formatter>\r\n            </div>\r\n        </div>\r\n    </div> <!-- end 'well' -->\r\n    <div class=\"well\" [hidden]=\"!selectedUri.showMap\">\r\n        <div [ngClass]=\"getMapClass()\" #map></div>\r\n    </div>\r\n</div>\r\n<!-- end if selectedUri -->\r\n<div *ngIf=\"!selectedUri && !thisRoute\">\r\n    <h3>Resource Not Found</h3>\r\n</div>\r\n<!-- end if NO selectedUri -->\r\n"

/***/ }),

/***/ "./src/app/mainview/mainview.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainviewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_leaflet__ = __webpack_require__("./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_leaflet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_leaflet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_service__ = __webpack_require__("./src/app/config.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_http_service__ = __webpack_require__("./src/app/shared/services/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__map_service__ = __webpack_require__("./src/app/mainview/map.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_services_path_service__ = __webpack_require__("./src/app/shared/services/path.service.ts");
// ------------------------------------------------------------------------------
// ----- mainview.component -----------------------------------------------------
// ------------------------------------------------------------------------------
// copyright:   2017 WiM - USGS
// authors:  Tonia Roddick USGS Wisconsin Internet Mapping
// purpose: main component that shows home page and resource information
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MainviewComponent = (function () {
    function MainviewComponent(_configService, _route, _router, _httpService, _mapService, _pathService, _cdRef) {
        this._configService = _configService;
        this._route = _route;
        this._router = _router;
        this._httpService = _httpService;
        this._mapService = _mapService;
        this._pathService = _pathService;
        this._cdRef = _cdRef;
        this.configSettings = this._configService.getConfiguration().configuration;
    }
    MainviewComponent.prototype.ngAfterViewInit = function () {
        if (this.thisRoute !== 'home') {
            this.map = __WEBPACK_IMPORTED_MODULE_0_leaflet__["map"](this.mapContainer.nativeElement, {
                attributionControl: false,
                center: __WEBPACK_IMPORTED_MODULE_0_leaflet__["latLng"](45, -90),
                zoom: 4,
                //   minZoom: 4,
                //   maxZoom: 19,
                layers: [this._mapService.baseMaps.Topo]
            });
        }
    };
    MainviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.requestResults = null;
        this._route.url.subscribe(function (urlSeg) {
            _this.gotResponse = false;
            if (_this.map) {
                if (_this.map.hasLayer(_this.geoJsonResponseLayer)) {
                    _this.map.removeLayer(_this.geoJsonResponseLayer);
                    _this.map.setView(__WEBPACK_IMPORTED_MODULE_0_leaflet__["latLng"](45, -90), 4);
                }
            }
            _this.showMap = false;
            _this.isSelected = false;
            _this.downloadable = false;
            _this.waitCursor = false;
            if (urlSeg.length > 1) {
                _this.resourceName = urlSeg[0].path; //ex: '/Contacts'
                _this._pathService.setpath(_this.resourceName);
                //get the selected resource
                _this.selectedResource = _this.configSettings.resources.filter(function (res) { return res.name.replace(/ /g, '') == _this.resourceName; })[0];
                if (_this.selectedResource) {
                    _this.isSelected = true;
                    _this.selectedResource.methods.uriList.forEach(function (uri) {
                        if (uri.id.replace(/ /g, '') == urlSeg[1].path) {
                            _this.thisRoute = urlSeg[1].path;
                            _this.selectedUri = uri;
                            _this.updateNewUri(); // updates the REST Query URL
                        }
                    });
                    if (!_this.selectedUri)
                        _this._router.navigate(['notFound']);
                }
                else {
                    // invalid url, send to not-found
                    _this._router.navigate(['notFound']);
                }
            }
            else if (urlSeg[0].path == 'home') {
                //home page
                _this._pathService.setpath(urlSeg[0].path);
                _this.thisRoute = urlSeg[0].path;
            }
            else {
                // invalid url, send to not-found
                _this._router.navigate(['notFound']);
            }
        });
    }; // end ngOnInit()
    // each time they change the selectedMedia or a parameter
    MainviewComponent.prototype.updateNewUri = function () {
        this.requestResults = undefined;
        this.gotResponse = false;
        var inputParams = [this.selectedUri.selectedMedia];
        this.selectedUri.parameters.forEach(function (p) {
            inputParams.push(p.value);
        });
        this.selectedUri.newURL = this.formatString(this.selectedUri.uri, inputParams);
        //for file download endpoints, don't show button to load response in output box
        if (this.selectedUri.availableMedia != undefined) {
            if (this.selectedUri.availableMedia.length == 0)
                this.downloadable = true;
        }
    };
    // go hit endpoint and return response
    MainviewComponent.prototype.loadResponse = function () {
        var _this = this;
        this.waitCursor = true;
        this._httpService.getEntities(this.selectedUri.newURL).subscribe(function (response) {
            _this.gotResponse = true;
            _this.waitCursor = false;
            _this.requestResults = response;
            if (_this.selectedUri.showMap)
                _this.map.invalidateSize();
        }, function (error) {
            _this.requestResults = "(" + error.status + ") " + error.statusText;
            _this.waitCursor = false;
        });
    };
    // format the uri to remove {#} with parameter given
    MainviewComponent.prototype.formatString = function (uri, inputs) {
        var formattedURI = "";
        var args = inputs;
        return uri.replace(/{(\d+)}/g, function (match, number) {
            return typeof args[number] != 'undefined' ? args[number] : match;
        });
    };
    // if geojson, can view response on map
    MainviewComponent.prototype.showResponseOnMap = function () {
        var smallIcon = new __WEBPACK_IMPORTED_MODULE_0_leaflet__["Icon"]({
            iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-icon.png',
            iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-icon-2x.png',
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
            shadowSize: [41, 41]
        });
        //set map
        this.showMap = true;
        this.geoJsonResponseLayer = __WEBPACK_IMPORTED_MODULE_0_leaflet__["geoJSON"](this.requestResults, {
            onEachFeature: function (feature, layer) {
                var popup = __WEBPACK_IMPORTED_MODULE_0_leaflet__["popup"]();
                layer.bindPopup('SITE ID: ' + feature.properties['site_id']); // UPDATE HERE what properties you want to show
            },
            pointToLayer: function (feature, latlng) {
                return __WEBPACK_IMPORTED_MODULE_0_leaflet__["marker"](latlng, {
                    icon: smallIcon
                });
            }
        }).addTo(this.map);
        //    this.map.invalidateSize();
        this.map.fitBounds(this.geoJsonResponseLayer.getBounds(), { padding: [50, 50] });
    };
    // update the #map height when moving between resources (those that need map and those that don't)
    MainviewComponent.prototype.getMapClass = function () {
        if (this.selectedUri.showMap && this.map) {
            this.map.invalidateSize();
            return 'mapView';
        }
        else
            return '';
    };
    // need to detect changes because getMapClass() changes the dom. without this causes changedetection error
    MainviewComponent.prototype.ngAfterViewChecked = function () {
        this._cdRef.detectChanges();
    };
    return MainviewComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_16" /* ViewChild */])('map'),
    __metadata("design:type", Object)
], MainviewComponent.prototype, "mapContainer", void 0);
MainviewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Component */])({
        template: __webpack_require__("./src/app/mainview/mainview.component.html"),
        styles: [__webpack_require__("./src/app/mainview/mainview.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__config_service__["a" /* ConfigService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__config_service__["a" /* ConfigService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__shared_services_http_service__["a" /* HttpServices */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_services_http_service__["a" /* HttpServices */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__map_service__["a" /* MapService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__map_service__["a" /* MapService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__shared_services_path_service__["a" /* PathService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__shared_services_path_service__["a" /* PathService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1__angular_core__["l" /* ChangeDetectorRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_core__["l" /* ChangeDetectorRef */]) === "function" && _g || Object])
], MainviewComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=mainview.component.js.map

/***/ }),

/***/ "./src/app/mainview/map.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_leaflet__ = __webpack_require__("./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_leaflet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_leaflet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MapService = (function () {
    function MapService() {
        //this.baseMaps = {
        this.baseMaps = {
            Topo: __WEBPACK_IMPORTED_MODULE_0_leaflet__["tileLayer"]("https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}", {
                attribution: "Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community"
            }),
            Satellite: __WEBPACK_IMPORTED_MODULE_0_leaflet__["tileLayer"]('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
                attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community' //,
            })
        };
    }
    MapService.prototype.showOnMap = function (layer) {
    };
    return MapService;
}());
MapService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], MapService);

//# sourceMappingURL=map.service.js.map

/***/ }),

/***/ "./src/app/not-found/not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
// ------------------------------------------------------------------------------
// ----- not-found.component ----------------------------------------------------
// ------------------------------------------------------------------------------
// copyright:   2017 WiM - USGS
// authors:  Tonia Roddick USGS Wisconsin Internet Mapping             
// purpose: navigation to a url that does not exist will show this page
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PageNotFoundComponent = (function () {
    function PageNotFoundComponent() {
    }
    return PageNotFoundComponent;
}());
PageNotFoundComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        template: "<h2>Resource not found</h2>"
    })
], PageNotFoundComponent);

//# sourceMappingURL=not-found.component.js.map

/***/ }),

/***/ "./src/app/shared/components/json-formatter.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n.json-formatter-dark.json-formatter-row,.json-formatter-row{font-family:monospace}.json-formatter-dark.json-formatter-row .toggler.open:after,.json-formatter-row .toggler.open:after{-webkit-transform:rotate(90deg);transform:rotate(90deg)}.json-formatter-row,.json-formatter-row a,.json-formatter-row a:hover{color:#000;text-decoration:none}.json-formatter-row .json-formatter-row{margin-left:1em}.json-formatter-row .children.empty{opacity:.5;margin-left:1em}.json-formatter-row .children.empty.object:after{content:\"No properties\"}.json-formatter-row .children.empty.array:after{content:\"[]\"}.json-formatter-row .string{color:green;white-space:pre;word-wrap:break-word}.json-formatter-row .number{color:#00f}.json-formatter-row .boolean{color:red}.json-formatter-row .null{color:#855a00}.json-formatter-row .undefined{color:#ca0b69}.json-formatter-row .function{color:#ff20ed}.json-formatter-row .date{background-color:rgba(0,0,0,.05)}.json-formatter-row .url{text-decoration:underline;color:#00f;cursor:pointer}.json-formatter-row .bracket{color:#00f}.json-formatter-row .key{color:#00008b;cursor:pointer}.json-formatter-row .constructor-name{cursor:pointer}.json-formatter-row .toggler{font-size:.8em;line-height:1.2em;vertical-align:middle;opacity:.6;cursor:pointer}.json-formatter-row .toggler:after{display:inline-block;-webkit-transition:-webkit-transform .1s ease-in;transition:-webkit-transform .1s ease-in;transition:transform .1s ease-in;transition:transform .1s ease-in, -webkit-transform .1s ease-in;content:\"►\"}.json-formatter-row>a>.thumbnail-text{opacity:0;-webkit-transition:opacity .15s ease-in;transition:opacity .15s ease-in;font-style:italic}.json-formatter-row:hover>a>.thumbnail-text{opacity:.6}.json-formatter-dark.json-formatter-row,.json-formatter-dark.json-formatter-row a,.json-formatter-dark.json-formatter-row a:hover{color:#fff;text-decoration:none}.json-formatter-dark.json-formatter-row .json-formatter-row{margin-left:1em}.json-formatter-dark.json-formatter-row .children.empty{opacity:.5;margin-left:1em}.json-formatter-dark.json-formatter-row .children.empty.object:after{content:\"No properties\"}.json-formatter-dark.json-formatter-row .children.empty.array:after{content:\"[]\"}.json-formatter-dark.json-formatter-row .string{color:#31f031;white-space:pre;word-wrap:break-word}.json-formatter-dark.json-formatter-row .number{color:#66c2ff}.json-formatter-dark.json-formatter-row .boolean{color:#ec4242}.json-formatter-dark.json-formatter-row .null{color:#eec97d}.json-formatter-dark.json-formatter-row .undefined{color:#ef8fbe}.json-formatter-dark.json-formatter-row .function{color:#fd48cb}.json-formatter-dark.json-formatter-row .date{background-color:rgba(255,255,255,.05)}.json-formatter-dark.json-formatter-row .url{text-decoration:underline;color:#027bff;cursor:pointer}.json-formatter-dark.json-formatter-row .bracket{color:#9494ff}.json-formatter-dark.json-formatter-row .key{color:#23a0db;cursor:pointer}.json-formatter-dark.json-formatter-row .constructor-name{cursor:pointer}.json-formatter-dark.json-formatter-row .toggler{font-size:.8em;line-height:1.2em;vertical-align:middle;opacity:.6;cursor:pointer}.json-formatter-dark.json-formatter-row .toggler:after{display:inline-block;-webkit-transition:-webkit-transform .1s ease-in;transition:-webkit-transform .1s ease-in;transition:transform .1s ease-in;transition:transform .1s ease-in, -webkit-transform .1s ease-in;content:\"►\"}.json-formatter-dark.json-formatter-row>a>.thumbnail-text{opacity:0;-webkit-transition:opacity .15s ease-in;transition:opacity .15s ease-in;font-style:italic}.json-formatter-dark.json-formatter-row:hover>a>.thumbnail-text{opacity:.6}"

/***/ }),

/***/ "./src/app/shared/components/json-formatter.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JsonFormatterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__("./src/app/shared/components/utils.ts");
// ------------------------------------------------------------------------------
// ----- json-formatter.component -----------------------------------------------
// ------------------------------------------------------------------------------
// copyright:   2017 WiM - USGS
// authors:  Tonia Roddick USGS Wisconsin Internet Mapping             
// purpose: component to format json response in mainview from https://github.com/mohsen1/json-formatter/issues/62
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var JSONFormatterConfig = {
    hoverPreviewEnabled: false
};
var JsonFormatterComponent = (function () {
    function JsonFormatterComponent() {
    }
    JsonFormatterComponent.prototype.ngOnInit = function () {
        this.isArray = Array.isArray(this.json);
        this.isObject = this.json != null && typeof this.json === 'object';
        this.type = Object(__WEBPACK_IMPORTED_MODULE_1__utils__["b" /* getType */])(this.json);
        this.hasKey = typeof this.key !== 'undefined';
        this.isOpen = this.open && this.open > 0;
        this.constructorName = Object(__WEBPACK_IMPORTED_MODULE_1__utils__["a" /* getObjectName */])(this.json);
        if (this.isObject) {
            this.keys = Object.keys(this.json).map(function (key) { return key === '' ? '""' : key; });
        }
        if (this.type === 'string') {
            if ((new Date(this.json)).toString() !== 'Invalid Date') {
                this.isDate = true;
            }
            if (this.json.indexOf('http') === 0) {
                this.isUrl = true;
            }
        }
    };
    JsonFormatterComponent.prototype.isEmptyObject = function () {
        return this.keys && !this.keys.length && this.isOpen && !this.isArray;
    };
    JsonFormatterComponent.prototype.toggleOpen = function () {
        this.isOpen = !this.isOpen;
    };
    JsonFormatterComponent.prototype.childrenOpen = function () {
        return this.open > 1 ? this.open - 1 : 0;
    };
    JsonFormatterComponent.prototype.openLink = function (isUrl) {
        if (isUrl) {
            window.location.href = this.json;
        }
    };
    JsonFormatterComponent.prototype.parseValue = function (value) {
        return Object(__WEBPACK_IMPORTED_MODULE_1__utils__["c" /* getValuePreview */])(this.json, value);
    };
    JsonFormatterComponent.prototype.showThumbnail = function () {
        return this.isObject && !this.isOpen;
    };
    JsonFormatterComponent.prototype.trackByFn = function (i) {
        return i;
    };
    return JsonFormatterComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], JsonFormatterComponent.prototype, "json", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], JsonFormatterComponent.prototype, "key", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Number)
], JsonFormatterComponent.prototype, "open", void 0);
JsonFormatterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'json-formatter',
        styles: [__webpack_require__("./src/app/shared/components/json-formatter.component.css")],
        template: "\n    <div class=\"json-formatter-row\">\n      <a (click)=\"toggleOpen()\">\n        <span class=\"toggler\" [class.open]=\"isOpen\" *ngIf=\"isObject\"></span>\n        <span class=\"key\" *ngIf=\"hasKey\"><span class=\"key-text\">{{key}}</span><span class=\"colon\">:</span></span>\n        <span class=\"value\">\n        <span *ngIf=\"isObject\">\n          <span class=\"constructor-name\">{{ constructorName }}</span>\n          <span *ngIf=\"isArray\"><span class=\"bracket\">[</span><span class=\"number\">{{json.length}}</span><span\n            class=\"bracket\">]</span></span>\n        </span>\n        <span *ngIf=\"!isObject\" (click)=\"openLink(isUrl)\" class=\"{{type}}\"\n              [ngClass]=\"{date: isDate, url: isUrl}\">{{parseValue(json)}}</span>\n      </span>      \n      </a>\n      <div class=\"children\" *ngIf=\"keys?.length && isOpen\">\n        <json-formatter *ngFor=\"let key of keys; trackBy: trackByFn\" [json]=\"json[key]\" [key]=\"key\"\n                        [open]=\"childrenOpen()\"></json-formatter>\n      </div>\n      <div class=\"children empty object\" *ngIf=\"isEmptyObject()\"></div>\n      <div class=\"children empty array\" *ngIf=\"!keys?.length && isOpen && isArray\"></div>\n    </div>\n  "
    })
], JsonFormatterComponent);

//# sourceMappingURL=json-formatter.component.js.map

/***/ }),

/***/ "./src/app/shared/components/utils.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export escapeString */
/* harmony export (immutable) */ __webpack_exports__["a"] = getObjectName;
/* harmony export (immutable) */ __webpack_exports__["b"] = getType;
/* harmony export (immutable) */ __webpack_exports__["c"] = getValuePreview;
/* unused harmony export getPreview */
function escapeString(str) {
    return str.replace('"', '\"');
}
// From http://stackoverflow.com/a/332429
function getObjectName(object) {
    if (object === undefined) {
        return '';
    }
    if (object === null) {
        return 'Object';
    }
    if (typeof object === 'object' && !object.constructor) {
        return 'Object';
    }
    //ES6 default gives name to constructor
    if (object.__proto__ !== undefined && object.__proto__.constructor !== undefined && object.__proto__.constructor.name !== undefined) {
        return object.__proto__.constructor.name;
    }
    var funcNameRegex = /function (.{1,})\(/;
    var results = (funcNameRegex).exec((object).constructor.toString());
    if (results && results.length > 1) {
        return results[1];
    }
    else {
        return '';
    }
}
function getType(object) {
    if (object === null) {
        return 'null';
    }
    return typeof object;
}
function getValuePreview(object, value) {
    var type = getType(object);
    if (type === 'null' || type === 'undefined') {
        return type;
    }
    if (type === 'string') {
        value = '"' + escapeString(value) + '"';
    }
    if (type === 'function') {
        // Remove content of the function
        return object.toString()
            .replace(/[\r\n]/g, '')
            .replace(/\{.*\}/, '') + '{…}';
    }
    return value;
}
function getPreview(object) {
    var value = '';
    if (typeof object === 'object') {
        value = getObjectName(object);
        if (Array.isArray(object)) {
            value += '[' + object.length + ']';
        }
    }
    else {
        value = getValuePreview(object, object);
    }
    return value;
}
//# sourceMappingURL=utils.js.map

/***/ }),

/***/ "./src/app/shared/services/http.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpServices; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__config_service__ = __webpack_require__("./src/app/config.service.ts");
// ------------------------------------------------------------------------------
// ----- http.service ----------------------------------------------------
// ------------------------------------------------------------------------------
// copyright:   2017 WiM - USGS
// authors:  Tonia Roddick USGS Wisconsin Internet Mapping             
// purpose: service to retrieve data
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HttpServices = (function () {
    function HttpServices(_configService, _http) {
        this._configService = _configService;
        this._http = _http;
        this.jsonHeader = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ "Accept": "application/json", "Content-Type": "application/json" });
        this.configSettings = this._configService.getConfiguration().configuration;
    }
    // ------------ GETS ---------------------------
    HttpServices.prototype.getEntities = function (url) {
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: this.jsonHeader });
        return this._http.get(this.configSettings.services + url, options)
            .map(function (response) { return response.json(); })
            .catch(this.errorHandler);
    };
    HttpServices.prototype.errorHandler = function (error) {
        /*      return <any>error.json();
              if (error._body !== "")
                  error._body = JSON.parse(error._body);*/
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(error);
    };
    return HttpServices;
}());
HttpServices = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__config_service__["a" /* ConfigService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__config_service__["a" /* ConfigService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _b || Object])
], HttpServices);

var _a, _b;
//# sourceMappingURL=http.service.js.map

/***/ }),

/***/ "./src/app/shared/services/path.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PathService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
// ------------------------------------------------------------------------------
// ----- loading.service..ts -----------------------------------------------
// ------------------------------------------------------------------------------
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// copyright:   2017 WiM - USGS
// authors:  Tonia Roddick - USGS Wisconsin Internet Mapping
// purpose: loading div


var PathService = (function () {
    function PathService() {
        // show/hide loading div
        this._pathSubj = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
    }
    // setter
    PathService.prototype.setpath = function (val) {
        this._pathSubj.next(val);
    };
    //getter
    PathService.prototype.getPath = function () {
        return this._pathSubj.asObservable();
    };
    return PathService;
}());
PathService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], PathService);

//# sourceMappingURL=path.service.js.map

/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_path_service__ = __webpack_require__("./src/app/shared/services/path.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_http_service__ = __webpack_require__("./src/app/shared/services/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_json_formatter_component__ = __webpack_require__("./src/app/shared/components/json-formatter.component.ts");
// ------------------------------------------------------------------------------
// ----- shared.module -----------------------------------------------------
// ------------------------------------------------------------------------------
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// copyright:   2017 WiM - USGS
// authors:  Tonia Roddick - USGS Wisconsin Internet Mapping
// purpose: module for the sharing of global stuff 







var SharedModule = SharedModule_1 = (function () {
    function SharedModule() {
    }
    SharedModule.forRoot = function () {
        return {
            ngModule: SharedModule_1,
            providers: [__WEBPACK_IMPORTED_MODULE_3__services_path_service__["a" /* PathService */], __WEBPACK_IMPORTED_MODULE_5__services_http_service__["a" /* HttpServices */]]
        };
    };
    return SharedModule;
}());
SharedModule = SharedModule_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        declarations: [__WEBPACK_IMPORTED_MODULE_6__components_json_formatter_component__["a" /* JsonFormatterComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */], __WEBPACK_IMPORTED_MODULE_6__components_json_formatter_component__["a" /* JsonFormatterComponent */]],
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */], __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot()]
    })
], SharedModule);

var SharedModule_1;
//# sourceMappingURL=shared.module.js.map

/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    configFile: './assets/config.json'
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map