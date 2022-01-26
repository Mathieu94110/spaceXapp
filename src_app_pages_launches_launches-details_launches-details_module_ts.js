(self["webpackChunkspace_x_app"] = self["webpackChunkspace_x_app"] || []).push([["src_app_pages_launches_launches-details_launches-details_module_ts"],{

/***/ 2404:
/*!************************************************************************************!*\
  !*** ./src/app/pages/launches/launches-details/launches-details-routing.module.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LaunchesDetailsPageRoutingModule": () => (/* binding */ LaunchesDetailsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _launches_details_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./launches-details.page */ 5913);




const routes = [
    {
        path: '',
        component: _launches_details_page__WEBPACK_IMPORTED_MODULE_0__.LaunchesDetailsPage,
    },
    // {
    //   path: '',
    //   loadChildren: () =>
    //     import('./launches-details/launches-details.module').then(
    //       (m) => m.LaunchesDetailsPageModule
    //     ),
    // },
];
let LaunchesDetailsPageRoutingModule = class LaunchesDetailsPageRoutingModule {
};
LaunchesDetailsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LaunchesDetailsPageRoutingModule);



/***/ }),

/***/ 719:
/*!****************************************************************************!*\
  !*** ./src/app/pages/launches/launches-details/launches-details.module.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LaunchesDetailsPageModule": () => (/* binding */ LaunchesDetailsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _launches_details_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./launches-details.page */ 5913);
/* harmony import */ var _launches_details_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./launches-details-routing.module */ 2404);







let LaunchesDetailsPageModule = class LaunchesDetailsPageModule {
};
LaunchesDetailsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _launches_details_routing_module__WEBPACK_IMPORTED_MODULE_1__.LaunchesDetailsPageRoutingModule,
        ],
        declarations: [_launches_details_page__WEBPACK_IMPORTED_MODULE_0__.LaunchesDetailsPage],
    })
], LaunchesDetailsPageModule);



/***/ }),

/***/ 5913:
/*!**************************************************************************!*\
  !*** ./src/app/pages/launches/launches-details/launches-details.page.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LaunchesDetailsPage": () => (/* binding */ LaunchesDetailsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_launches_details_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./launches-details.page.html */ 8257);
/* harmony import */ var _launches_details_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./launches-details.page.scss */ 3837);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var src_app_services_launches_nav_param_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/launches-nav-param.service */ 1167);






let LaunchesDetailsPage = class LaunchesDetailsPage {
    constructor(route, navParamService, router) {
        this.route = route;
        this.navParamService = navParamService;
        this.router = router;
        this.launcheDetails$ = this.navParamService.getNavData();
    }
    goBack() {
        this.router.navigate(['launches']);
    }
};
LaunchesDetailsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute },
    { type: src_app_services_launches_nav_param_service__WEBPACK_IMPORTED_MODULE_2__.LaunchesNavParamService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
LaunchesDetailsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-launches-details',
        template: _raw_loader_launches_details_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_launches_details_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], LaunchesDetailsPage);



/***/ }),

/***/ 3837:
/*!****************************************************************************!*\
  !*** ./src/app/pages/launches/launches-details/launches-details.page.scss ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("@media (max-width: 700px) {\n  .launche-card {\n    margin: auto;\n    width: 100%;\n  }\n  .launche-card .large-img {\n    padding: 10px;\n    width: 100px !important;\n    height: auto !important;\n  }\n}\n@media all and (min-width: 701px) and (max-width: 1200px) {\n  .launche-card {\n    margin: 0 80px;\n  }\n  .launche-card .large-img {\n    padding: 20px;\n    width: 150px !important;\n    height: auto !important;\n  }\n}\n@media (min-width: 1201px) {\n  .launche-card {\n    margin: 0 200px;\n  }\n\n  .large-img {\n    padding: 30px;\n    width: 250px !important;\n    height: auto !important;\n  }\n}\nion-item, ion-item-divider, ion-item-group {\n  --background: var(--ion-color-light) ;\n}\nion-tab-button {\n  --color-selected: var(--ion-color-primary);\n  --background-selected: var(--ion-color-danger) ;\n}\n.item-keys {\n  font-weight: 600;\n}\n.toolbar-padding {\n  padding: 20px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxhdW5jaGVzLWRldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFFO0VBQ0U7SUFDSSxZQUFBO0lBQ0EsV0FBQTtFQUNOO0VBQUE7SUFDSyxhQUFBO0lBQ0EsdUJBQUE7SUFDQSx1QkFBQTtFQUVMO0FBQ0Y7QUFLTTtFQUNPO0lBQ2IsY0FBQTtFQUhFO0VBS2dCO0lBQ1osYUFBQTtJQUNELHVCQUFBO0lBQ0UsdUJBQUE7RUFITDtBQUNGO0FBU0c7RUFDQztJQUNILGVBQUE7RUFQQzs7RUFTRDtJQUNJLGFBQUE7SUFDQSx1QkFBQTtJQUNFLHVCQUFBO0VBTkw7QUFDRjtBQVNBO0VBQ0kscUNBQUE7QUFQSjtBQVVJO0VBQ0YsMENBQUE7RUFDQSwrQ0FBQTtBQVBGO0FBVUE7RUFDSSxnQkFBQTtBQVBKO0FBVUE7RUFDRyxlQUFBO0FBUEgiLCJmaWxlIjoibGF1bmNoZXMtZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgIEBtZWRpYSAobWF4LXdpZHRoOiA3MDBweCkge1xyXG4gICAgLmxhdW5jaGUtY2FyZHtcclxuICAgICAgICBtYXJnaW46YXV0bztcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAubGFyZ2UtaW1ne1xyXG4gICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgIHdpZHRoOiAxMDBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XHJcblxyXG4gICB9XHJcbiAgICB9XHJcbiBcclxuICAgICBcclxuICAgfVxyXG5cclxuICAgICAgQG1lZGlhICBhbGwgYW5kIChtaW4td2lkdGg6IDcwMXB4KSBhbmQgKG1heC13aWR0aDogMTIwMHB4KSAge1xyXG4gICAgICAgICAgICAgLmxhdW5jaGUtY2FyZHtcclxubWFyZ2luOiAwIDgwcHg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAubGFyZ2UtaW1ne1xyXG4gICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgIHdpZHRoOiAxNTBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgIH1cclxuICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICB9XHJcblxyXG4gICBAbWVkaWEgKG1pbi13aWR0aDogMTIwMXB4KSB7XHJcbiAgICAubGF1bmNoZS1jYXJke1xyXG4gbWFyZ2luOiAwIDIwMHB4O1xyXG4gICAgfVxyXG4gLmxhcmdlLWltZ3tcclxuICAgICBwYWRkaW5nOiAzMHB4O1xyXG4gICAgIHdpZHRoOiAyNTBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiB9XHJcbiAgIH1cclxuXHJcbmlvbi1pdGVtLCBpb24taXRlbS1kaXZpZGVyLCBpb24taXRlbS1ncm91cHtcclxuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KVxyXG59XHJcblxyXG4gICAgaW9uLXRhYi1idXR0b24ge1xyXG4gIC0tY29sb3Itc2VsZWN0ZWQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAtLWJhY2tncm91bmQtc2VsZWN0ZWQ6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpXHJcbn1cclxuXHJcbi5pdGVtLWtleXN7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4udG9vbGJhci1wYWRkaW5ne1xyXG4gICBwYWRkaW5nOiAyMHB4IDBcclxufVxyXG4gICBcclxuIl19 */");

/***/ }),

/***/ 8257:
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/launches/launches-details/launches-details.page.html ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content slot=\"fixed\" class=\"ion-padding\">\r\n  <ion-toolbar class=\"toolbar-padding\">\r\n    <ion-button (click)=\"goBack()\" slot=\"start\"> Précédent </ion-button>\r\n  </ion-toolbar>\r\n\r\n  <ion-card\r\n    color=\"dark\"\r\n    class=\"launche-card\"\r\n    *ngIf=\"launcheDetails$ as launcheDetails\"\r\n  >\r\n    <ion-item>\r\n      <ion-avatar slot=\"start\">\r\n        <img src=\"{{launcheDetails.links.patch.small}}\" />\r\n      </ion-avatar>\r\n      <ion-label class=\"item-keys\">\r\n        <h1>{{launcheDetails.name}}</h1>\r\n        <ion-item\r\n          ><ion-label class=\"item-keys\">Date</ion-label>\r\n          {{launcheDetails.date_utc ? launcheDetails.date_utc : 'Pas de détails'\r\n          }}</ion-item\r\n        >\r\n        <ion-item\r\n          ><ion-label class=\"item-keys\">Vol n°</ion-label\r\n          >{{launcheDetails.flight_number ? launcheDetails.flight_number : 'Pas\r\n          de détails'}}</ion-item\r\n        >\r\n      </ion-label>\r\n    </ion-item>\r\n    <div class=\"ion-text-center\">\r\n      <img\r\n        src=\"{{launcheDetails.links.patch.large}}\"\r\n        alt=\"Image\"\r\n        class=\"large-img\"\r\n      />\r\n    </div>\r\n    <ion-card-header>\r\n      <ion-card-title class=\"item-keys\">{{launcheDetails.name}}</ion-card-title>\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n      <ion-list class=\"ion-no-padding\">\r\n        <ion-item>\r\n          <ion-label class=\"item-keys\">Details</ion-label>\r\n          {{launcheDetails.details ? launcheDetails.details : 'Pas de détails\r\n          concernant ce lancement' }}\r\n        </ion-item>\r\n        <ng-container\r\n          *ngIf=\"launcheDetails.failures[0];then failures else noFailures\"\r\n        ></ng-container>\r\n\r\n        <ng-template #failures>\r\n          <ion-item-divider>\r\n            <ion-label color=\"danger\" class=\"item-keys\"> Échec </ion-label>\r\n          </ion-item-divider>\r\n\r\n          <ion-item\r\n            ><ion-label class=\"item-keys\"> Détails</ion-label\r\n            >{{launcheDetails.failures[0]?.reason ?\r\n            launcheDetails.failures[0].reason : 'Pas de détails' }}</ion-item\r\n          >\r\n          <ion-item\r\n            ><ion-label class=\"item-keys\">Altitude</ion-label\r\n            >{{launcheDetails.failures[0].altitude ?\r\n            launcheDetails.failures[0].altitude : 'Pas de détails'}}</ion-item\r\n          >\r\n          <ion-item\r\n            ><ion-label class=\"item-keys\">Délai</ion-label\r\n            >{{launcheDetails.failures[0].time ? launcheDetails.failures[0].time\r\n            : 'Pas de détails'}}</ion-item\r\n          >\r\n        </ng-template>\r\n        <ng-template #noFailures>\r\n          <ion-item>\r\n            <ion-label color=\"success\"> Aucun échecs précédents</ion-label>\r\n          </ion-item>\r\n        </ng-template>\r\n        <ion-item-group\r\n          color=\"light\"\r\n          style=\"display: flex; width: 100%; justify-content: space-evenly\"\r\n        >\r\n          <ion-button\r\n            button\r\n            expand=\"full\"\r\n            href=\"{{launcheDetails.links.webcast}}\"\r\n            target=\"_blank\"\r\n          >\r\n            <ion-label\r\n              ><ion-icon name=\"videocam-outline\"></ion-icon>\r\n            </ion-label>\r\n          </ion-button>\r\n          <ion-button\r\n            button\r\n            expand=\"full\"\r\n            href=\"{{launcheDetails.links.wikipedia}}\"\r\n            target=\"_blank\"\r\n          >\r\n            <ion-label><ion-icon name=\"book-outline\"></ion-icon></ion-label>\r\n          </ion-button>\r\n\r\n          <ion-button\r\n            button\r\n            expand=\"full\"\r\n            href=\"{{launcheDetails.links.youtube_id}}\"\r\n            target=\"_blank\"\r\n          >\r\n            <ion-label><ion-icon name=\"logo-youtube\"></ion-icon></ion-label>\r\n          </ion-button>\r\n        </ion-item-group>\r\n      </ion-list>\r\n    </ion-card-content>\r\n\r\n    <ion-footer> </ion-footer>\r\n  </ion-card>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_launches_launches-details_launches-details_module_ts.js.map