(self["webpackChunkspace_x_app"] = self["webpackChunkspace_x_app"] || []).push([["src_app_pages_crew_crew_module_ts"],{

/***/ 6246:
/*!***************************************************!*\
  !*** ./src/app/pages/crew/crew-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CrewPageRoutingModule": () => (/* binding */ CrewPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _crew_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./crew.page */ 7265);




const routes = [
    {
        path: '',
        component: _crew_page__WEBPACK_IMPORTED_MODULE_0__.CrewPage
    }
];
let CrewPageRoutingModule = class CrewPageRoutingModule {
};
CrewPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CrewPageRoutingModule);



/***/ }),

/***/ 2366:
/*!*******************************************!*\
  !*** ./src/app/pages/crew/crew.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CrewPageModule": () => (/* binding */ CrewPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _crew_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./crew-routing.module */ 6246);
/* harmony import */ var _crew_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./crew.page */ 7265);







let CrewPageModule = class CrewPageModule {
};
CrewPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _crew_routing_module__WEBPACK_IMPORTED_MODULE_0__.CrewPageRoutingModule
        ],
        declarations: [_crew_page__WEBPACK_IMPORTED_MODULE_1__.CrewPage]
    })
], CrewPageModule);



/***/ }),

/***/ 7265:
/*!*****************************************!*\
  !*** ./src/app/pages/crew/crew.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CrewPage": () => (/* binding */ CrewPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_crew_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./crew.page.html */ 7540);
/* harmony import */ var _crew_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./crew.page.scss */ 7233);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let CrewPage = class CrewPage {
    constructor() { }
    ngOnInit() {
    }
};
CrewPage.ctorParameters = () => [];
CrewPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-crew',
        template: _raw_loader_crew_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_crew_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CrewPage);



/***/ }),

/***/ 7233:
/*!*******************************************!*\
  !*** ./src/app/pages/crew/crew.page.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcmV3LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 7540:
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/crew/crew.page.html ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>Cette page est encore en construction !</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_crew_crew_module_ts.js.map