webpackJsonp([1,4],{

/***/ 165:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 165;


/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(252);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 248:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__covalent_core__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base_viewport_services_viewport_service__ = __webpack_require__(73);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
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
    function AppComponent(media, _iconRegistry, _domSanitizer, vpService) {
        this.media = media;
        this._iconRegistry = _iconRegistry;
        this._domSanitizer = _domSanitizer;
        this.routes = [{
                icon: 'home',
                route: '.',
                title: 'Home',
            }, {
                icon: 'library_books',
                route: '.',
                title: 'Documentation',
            }, {
                icon: 'color_lens',
                route: '.',
                title: 'Style Guide',
            }, {
                icon: 'view_quilt',
                route: '.',
                title: 'Layouts',
            }, {
                icon: 'picture_in_picture',
                route: '.',
                title: 'Components & Addons',
            },
        ];
        this.usermenu = [{
                icon: 'swap_horiz',
                route: '.',
                title: 'Switch account',
            }, {
                icon: 'tune',
                route: '.',
                title: 'Account settings',
            }, {
                icon: 'exit_to_app',
                route: '.',
                title: 'Sign out',
            },
        ];
        this._vpService = vpService;
        this._iconRegistry.addSvgIconInNamespace('assets', 'covalent', this._domSanitizer.bypassSecurityTrustResourceUrl('https://raw.githubusercontent.com/Teradata/covalent-quickstart/develop/src/assets/icons/covalent.svg'));
    }
    AppComponent.prototype.toggleVpSettings = function () {
        this._vpService.toggleEditionMode();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ez-root',
        template: __webpack_require__(317),
        styles: [__webpack_require__(314)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__covalent_core__["d" /* TdMediaService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__covalent_core__["d" /* TdMediaService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["z" /* MdIconRegistry */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["z" /* MdIconRegistry */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* DomSanitizer */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__base_viewport_services_viewport_service__["a" /* ViewportService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__base_viewport_services_viewport_service__["a" /* ViewportService */]) === "function" && _d || Object])
], AppComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 249:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__covalent_core__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__base_base_module__ = __webpack_require__(250);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_8__base_base_module__["a" /* BaseModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* MdMenuModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["b" /* MdButtonModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["c" /* MdListModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["d" /* MdIconModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["e" /* MdToolbarModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["f" /* MdTooltipModule */],
            __WEBPACK_IMPORTED_MODULE_2__covalent_core__["a" /* CovalentMediaModule */],
            __WEBPACK_IMPORTED_MODULE_2__covalent_core__["b" /* CovalentMenuModule */],
            __WEBPACK_IMPORTED_MODULE_2__covalent_core__["c" /* CovalentLayoutModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_router__["a" /* RouterModule */].forRoot([])
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 250:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__viewport_viewport_component__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__covalent_core__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_dragula__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_dragula___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_dragula__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__viewport_services_viewport_service__ = __webpack_require__(73);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var BaseModule = (function () {
    function BaseModule() {
    }
    return BaseModule;
}());
BaseModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_6_ng2_dragula__["DragulaModule"],
            __WEBPACK_IMPORTED_MODULE_4__covalent_core__["a" /* CovalentMediaModule */],
            __WEBPACK_IMPORTED_MODULE_4__covalent_core__["c" /* CovalentLayoutModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["b" /* MdButtonModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["d" /* MdIconModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["m" /* MdCardModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["c" /* MdListModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__viewport_viewport_component__["a" /* ViewportComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_7__viewport_services_viewport_service__["a" /* ViewportService */]],
        exports: [__WEBPACK_IMPORTED_MODULE_2__viewport_viewport_component__["a" /* ViewportComponent */]]
    })
], BaseModule);

//# sourceMappingURL=base.module.js.map

/***/ }),

/***/ 251:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_viewport_service__ = __webpack_require__(73);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewportComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ViewportComponent = (function () {
    function ViewportComponent(viewportService) {
        this.columns = [
            {},
            {}
        ];
        this._vpService = viewportService;
    }
    Object.defineProperty(ViewportComponent.prototype, "edit", {
        get: function () {
            return this._vpService.editionMode;
        },
        enumerable: true,
        configurable: true
    });
    ViewportComponent.prototype.addColumn = function () {
        this.columns.push({});
    };
    ViewportComponent.prototype.removeColumn = function (col) {
        this.columns.splice(this.columns.indexOf(col), 1);
    };
    return ViewportComponent;
}());
ViewportComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ez-viewport',
        template: __webpack_require__(318),
        styles: [__webpack_require__(313)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_viewport_service__["a" /* ViewportService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_viewport_service__["a" /* ViewportService */]) === "function" && _a || Object])
], ViewportComponent);

var _a;
//# sourceMappingURL=viewport.component.js.map

/***/ }),

/***/ 252:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 313:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(148)();
// imports


// module
exports.push([module.i, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"viewport.component.scss","sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 314:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(148)();
// imports


// module
exports.push([module.i, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"app.component.css","sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 317:
/***/ (function(module, exports) {

module.exports = "<td-layout>\n    <td-navigation-drawer flex sidenavTitle=\"Covalent\" logo=\"assets:teradata\" name=\"Firstname Lastname\" email=\"firstname.lastname@company.com\">\n        <md-nav-list>\n            <a *ngFor=\"let item of routes\" md-list-item>\n                <md-icon>{{item.icon}}</md-icon>\n                {{item.title}}</a>\n        </md-nav-list>\n        <div td-navigation-drawer-menu>\n            <md-nav-list>\n                <a *ngFor=\"let item of usermenu\" md-list-item>\n                    <md-icon>{{item.icon}}</md-icon>\n                    {{item.title}}</a>\n            </md-nav-list>\n        </div>\n    </td-navigation-drawer>\n    <td-layout-nav color=\"accent\">\n        <div td-toolbar-content layout=\"row\" layout-align=\"start center\" flex>\n            <button md-icon-button td-menu-button tdLayoutToggle>\n                <md-icon>menu</md-icon>\n            </button>\n            <span [routerLink]=\"['/']\" class=\"cursor-pointer\">Cenas</span>\n            <span flex></span>\n            <button md-icon-button mdTooltip=\"Edit\" (click)=\"toggleVpSettings()\">\n                <md-icon>more_vert</md-icon>\n            </button>\n        </div>\n        <ez-viewport flex></ez-viewport>\n        <td-layout-footer>\n            <div layout=\"row\" layout-align=\"start center\">\n                <span class=\"md-caption\">Copyright &copy; 2017 Teradata. All rights reserved</span>\n            </div>\n        </td-layout-footer>\n    </td-layout-nav>\n</td-layout>"

/***/ }),

/***/ 318:
/***/ (function(module, exports) {

module.exports = "<div layout-gt-sm=\"row\" tdMediaToggle=\"gt-xs\" [mediaClasses]=\"['push-sm']\">\n    <div flex *ngFor=\"let col of columns\" dragula='widget-bag'>\n        <md-card *ngIf=\"edit\">\n            <md-card-title>Column Options</md-card-title>\n            <md-card-actions>\n                <div layout=\"row\">\n                    <button flex md-raised-button color=\"accent\" (click)=\"removeColumn(col)\">\n                        <md-icon>remove_circle_outline</md-icon>\n                    </button>\n                </div>\n            </md-card-actions>\n        </md-card>\n        <md-card>\n            <md-card-title>\n                Products Sales\n            </md-card-title>\n            <md-card-subtitle>usage stats for our products</md-card-subtitle>\n            <md-divider></md-divider>\n            <md-card-content>\n                card content\n            </md-card-content>\n            <md-divider></md-divider>\n            <md-card-actions>\n                <div layout=\"row\">\n                    <button md-icon-button mdTooltip=\"Edit\">\n                        <md-icon>more_vert</md-icon>\n                    </button>\n                </div>\n            </md-card-actions>\n        </md-card>\n    </div>\n    <div flex *ngIf=\"edit\">\n        <md-card>\n            <md-card-title>Add Column</md-card-title>\n            <md-card-actions>\n                <div layout=\"row\">\n                    <button flex md-raised-button color=\"accent\" (click)=\"addColumn()\">\n                        <md-icon>add_circle_outline</md-icon>\n                    </button>\n                </div>\n            </md-card-actions>\n        </md-card>\n    </div>\n</div>"

/***/ }),

/***/ 362:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(166);


/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewportService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ViewportService = (function () {
    function ViewportService() {
        this._editionMode = false;
    }
    ViewportService.prototype.toggleEditionMode = function () {
        return this._editionMode = !this._editionMode;
    };
    Object.defineProperty(ViewportService.prototype, "editionMode", {
        get: function () {
            return this._editionMode;
        },
        set: function (value) {
            this._editionMode = value;
        },
        enumerable: true,
        configurable: true
    });
    return ViewportService;
}());
ViewportService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], ViewportService);

//# sourceMappingURL=viewport.service.js.map

/***/ })

},[362]);
//# sourceMappingURL=main.bundle.js.map