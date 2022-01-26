(self["webpackChunkspace_x_app"] = self["webpackChunkspace_x_app"] || []).push([["src_app_pages_launches_launches_module_ts"],{

/***/ 8388:
/*!***********************************************************!*\
  !*** ./src/app/pages/launches/launches-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LaunchesPageRoutingModule": () => (/* binding */ LaunchesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _launches_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./launches.page */ 929);




const routes = [
    {
        path: '',
        component: _launches_page__WEBPACK_IMPORTED_MODULE_0__.LaunchesPage,
    },
    // {
    //   path: '',
    //   loadChildren: () =>
    //     import('./launches-details/launches-details.module').then(
    //       (m) => m.LaunchesDetailsPageModule
    //     ),
    // },
];
let LaunchesPageRoutingModule = class LaunchesPageRoutingModule {
};
LaunchesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LaunchesPageRoutingModule);



/***/ }),

/***/ 4348:
/*!***************************************************!*\
  !*** ./src/app/pages/launches/launches.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LaunchesPageModule": () => (/* binding */ LaunchesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _launches_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./launches.page */ 929);
/* harmony import */ var _launches_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./launches-routing.module */ 8388);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 9895);








let LaunchesPageModule = class LaunchesPageModule {
};
LaunchesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _launches_routing_module__WEBPACK_IMPORTED_MODULE_1__.LaunchesPageRoutingModule],
        declarations: [_launches_page__WEBPACK_IMPORTED_MODULE_0__.LaunchesPage],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule],
    })
], LaunchesPageModule);



/***/ }),

/***/ 929:
/*!*************************************************!*\
  !*** ./src/app/pages/launches/launches.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LaunchesPage": () => (/* binding */ LaunchesPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_launches_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./launches.page.html */ 5639);
/* harmony import */ var _launches_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./launches.page.scss */ 583);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var src_app_services_launches_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/launches.service */ 7382);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var src_app_services_launches_nav_param_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/launches-nav-param.service */ 1167);







let LaunchesPage = class LaunchesPage {
    constructor(launchesService, router, navParamService) {
        this.launchesService = launchesService;
        this.router = router;
        this.navParamService = navParamService;
    }
    ngOnInit() {
        this.launchesService.getAllLaunches().subscribe((launche) => {
            this.allLaunches$ = launche;
        });
    }
    pushLauncheDetails(params) {
        this.navParamService.setNavData(params);
        this.router.navigate(['launches-details']);
    }
};
LaunchesPage.ctorParameters = () => [
    { type: src_app_services_launches_service__WEBPACK_IMPORTED_MODULE_2__.LaunchesService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: src_app_services_launches_nav_param_service__WEBPACK_IMPORTED_MODULE_3__.LaunchesNavParamService }
];
LaunchesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-launches',
        template: _raw_loader_launches_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_launches_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], LaunchesPage);



/***/ }),

/***/ 7382:
/*!**********************************************!*\
  !*** ./src/app/services/launches.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LaunchesService": () => (/* binding */ LaunchesService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 2340);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 1841);




let LaunchesService = class LaunchesService {
    constructor(http) {
        this.http = http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl;
    }
    getAllLaunches() {
        return this.http.get(`${this.baseUrl}/v5/launches`);
    }
};
LaunchesService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
LaunchesService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root',
    })
], LaunchesService);



/***/ }),

/***/ 583:
/*!***************************************************!*\
  !*** ./src/app/pages/launches/launches.page.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsYXVuY2hlcy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 5639:
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/launches/launches.page.html ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n  <ion-list *ngIf=\"allLaunches$ as allLaunches\">\r\n    <ion-item\r\n      *ngFor=\"let launch of allLaunches\"\r\n      (click)=\"pushLauncheDetails(launch)\"\r\n    >\r\n      <ion-thumbnail slot=\"start\">\r\n        <img src=\"{{launch.links.patch.small}}\" />\r\n      </ion-thumbnail>\r\n      <ion-label>{{launch.name}}</ion-label>\r\n      <ion-label>{{launch.date_utc}}</ion-label>\r\n      <ion-label>Réussite: {{launch.success ? \"Oui\" : \"Non\"}}</ion-label>\r\n\r\n      <ion-icon name=\"chevron-forward-outline\"></ion-icon>\r\n    </ion-item>\r\n  </ion-list>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_launches_launches_module_ts.js.map