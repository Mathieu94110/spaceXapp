(self["webpackChunkspace_x_app"] = self["webpackChunkspace_x_app"] || []).push([["src_app_pages_home_home_module_ts"],{

/***/ 1393:
/*!*******************************************************************!*\
  !*** ./src/app/pages/home/company-info/company-info.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompanyInfoComponent": () => (/* binding */ CompanyInfoComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_company_info_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./company-info.component.html */ 9697);
/* harmony import */ var _company_info_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./company-info.component.scss */ 5303);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var src_app_services_home_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/home.service */ 3264);





let CompanyInfoComponent = class CompanyInfoComponent {
    constructor(homeService) {
        this.homeService = homeService;
    }
    ngOnInit() {
        this.homeService.getAllCompanyInfo().subscribe((data) => {
            this.companyInfo = data;
        });
    }
};
CompanyInfoComponent.ctorParameters = () => [
    { type: src_app_services_home_service__WEBPACK_IMPORTED_MODULE_2__.HomeService }
];
CompanyInfoComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-company-info',
        template: _raw_loader_company_info_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_company_info_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CompanyInfoComponent);



/***/ }),

/***/ 6610:
/*!***************************************************!*\
  !*** ./src/app/pages/home/home-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 678);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage,
    },
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], HomePageRoutingModule);



/***/ }),

/***/ 7994:
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 678);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-routing.module */ 6610);
/* harmony import */ var _company_info_company_info_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./company-info/company-info.component */ 1393);








let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _home_routing_module__WEBPACK_IMPORTED_MODULE_1__.HomePageRoutingModule],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage, _company_info_company_info_component__WEBPACK_IMPORTED_MODULE_2__.CompanyInfoComponent],
    })
], HomePageModule);



/***/ }),

/***/ 678:
/*!*****************************************!*\
  !*** ./src/app/pages/home/home.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./home.page.html */ 8102);
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss */ 7603);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _services_home_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/home.service */ 3264);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 476);






let HomePage = class HomePage {
    constructor(homeService, menu) {
        this.homeService = homeService;
        this.menu = menu;
        this.slideOpts = {
            slidesPerView: 1.3,
            spaceBetween: 50,
            centeredSlides: true,
            coverflowEffect: {
                rotate: 0,
                stretch: 0,
                depth: 200,
                modifier: 1,
                slideShadows: true,
            },
            on: {
                beforeInit() {
                    const swiper = this;
                    swiper.classNames.push(`${swiper.params.containerModifierClass}coverflow`);
                    swiper.classNames.push(`${swiper.params.containerModifierClass}3d`);
                    swiper.params.watchSlidesProgress = true;
                    swiper.originalParams.watchSlidesProgress = true;
                },
                setTranslate() {
                    const swiper = this;
                    const { width: swiperWidth, height: swiperHeight, slides, $wrapperEl, slidesSizesGrid, $, } = swiper;
                    const params = swiper.params.coverflowEffect;
                    const isHorizontal = swiper.isHorizontal();
                    const transform$$1 = swiper.translate;
                    const center = isHorizontal
                        ? -transform$$1 + swiperWidth / 2
                        : -transform$$1 + swiperHeight / 2;
                    const rotate = isHorizontal ? params.rotate : -params.rotate;
                    const translate = params.depth;
                    // Each slide offset from center
                    for (let i = 0, length = slides.length; i < length; i += 1) {
                        const $slideEl = slides.eq(i);
                        const slideSize = slidesSizesGrid[i];
                        const slideOffset = $slideEl[0].swiperSlideOffset;
                        const offsetMultiplier = ((center - slideOffset - slideSize / 2) / slideSize) *
                            params.modifier;
                        let rotateY = isHorizontal ? rotate * offsetMultiplier : 0;
                        let rotateX = isHorizontal ? 0 : rotate * offsetMultiplier;
                        // var rotateZ = 0
                        let translateZ = -translate * Math.abs(offsetMultiplier);
                        let translateY = isHorizontal ? 0 : params.stretch * offsetMultiplier;
                        let translateX = isHorizontal ? params.stretch * offsetMultiplier : 0;
                        // Fix for ultra small values
                        if (Math.abs(translateX) < 0.001)
                            translateX = 0;
                        if (Math.abs(translateY) < 0.001)
                            translateY = 0;
                        if (Math.abs(translateZ) < 0.001)
                            translateZ = 0;
                        if (Math.abs(rotateY) < 0.001)
                            rotateY = 0;
                        if (Math.abs(rotateX) < 0.001)
                            rotateX = 0;
                        const slideTransform = `translate3d(${translateX}px,${translateY}px,${translateZ}px)  rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
                        $slideEl.transform(slideTransform);
                        $slideEl[0].style.zIndex =
                            -Math.abs(Math.round(offsetMultiplier)) + 1;
                        if (params.slideShadows) {
                            // Set shadows
                            let $shadowBeforeEl = isHorizontal
                                ? $slideEl.find('.swiper-slide-shadow-left')
                                : $slideEl.find('.swiper-slide-shadow-top');
                            let $shadowAfterEl = isHorizontal
                                ? $slideEl.find('.swiper-slide-shadow-right')
                                : $slideEl.find('.swiper-slide-shadow-bottom');
                            if ($shadowBeforeEl.length === 0) {
                                $shadowBeforeEl = swiper.$(`<div class="swiper-slide-shadow-${isHorizontal ? 'left' : 'top'}"></div>`);
                                $slideEl.append($shadowBeforeEl);
                            }
                            if ($shadowAfterEl.length === 0) {
                                $shadowAfterEl = swiper.$(`<div class="swiper-slide-shadow-${isHorizontal ? 'right' : 'bottom'}"></div>`);
                                $slideEl.append($shadowAfterEl);
                            }
                            if ($shadowBeforeEl.length)
                                $shadowBeforeEl[0].style.opacity =
                                    offsetMultiplier > 0 ? offsetMultiplier : 0;
                            if ($shadowAfterEl.length)
                                $shadowAfterEl[0].style.opacity =
                                    -offsetMultiplier > 0 ? -offsetMultiplier : 0;
                        }
                    }
                    // Set correct perspective for IE10
                    if (swiper.support.pointerEvents ||
                        swiper.support.prefixedPointerEvents) {
                        const ws = $wrapperEl[0].style;
                        ws.perspectiveOrigin = `${center}px 50%`;
                    }
                },
                setTransition(duration) {
                    const swiper = this;
                    swiper.slides
                        .transition(duration)
                        .find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left')
                        .transition(duration);
                },
            },
        };
    }
    ngOnInit() {
        this.homeService.getLatestLaunches().subscribe((data) => {
            this.latestLaunches$ = data;
            console.log(this.latestLaunches$);
        });
        this.homeService.getAllHistoryEvents().subscribe((data) => {
            this.historyEvents$ = data;
        });
    }
    openFirst() {
        this.menu.enable(true, 'first');
        this.menu.open('first');
    }
    openEnd() {
        this.menu.open('end');
    }
    openCustom() {
        this.menu.enable(true, 'custom');
        this.menu.open('custom');
    }
};
HomePage.ctorParameters = () => [
    { type: _services_home_service__WEBPACK_IMPORTED_MODULE_2__.HomeService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.MenuController }
];
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewEncapsulation.None,
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], HomePage);



/***/ }),

/***/ 3264:
/*!******************************************!*\
  !*** ./src/app/services/home.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeService": () => (/* binding */ HomeService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 2340);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 1841);




let HomeService = class HomeService {
    constructor(http) {
        this.http = http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl;
    }
    getLatestLaunches() {
        return this.http.get(`${this.baseUrl}/v5/launches/latest`);
    }
    getAllHistoryEvents() {
        return this.http.get(`${this.baseUrl}/v4/history`);
    }
    getAllCompanyInfo() {
        return this.http.get(`${this.baseUrl}/v4/company`);
    }
};
HomeService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
HomeService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root',
    })
], HomeService);



/***/ }),

/***/ 5303:
/*!*********************************************************************!*\
  !*** ./src/app/pages/home/company-info/company-info.component.scss ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("h3 {\n  font-weight: 600;\n}\n\n.horizontal-margin {\n  margin: auto;\n}\n\n.elon-musk-img {\n  width: 50px;\n  height: 50px;\n}\n\nion-content {\n  --offset-bottom: auto!important;\n  --overflow: hidden;\n}\n\nion-content::-webkit-scrollbar {\n  display: none;\n}\n\n@media (max-width: 540px) {\n  h3 {\n    font-size: 14px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBhbnktaW5mby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0FBQ0o7O0FBQ0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQUVKOztBQUFBO0VBRUUsK0JBQUE7RUFDQSxrQkFBQTtBQUVGOztBQURFO0VBQ0UsYUFBQTtBQUdKOztBQUVBO0VBRUE7SUFDSSxlQUFBO0VBQUY7QUFDRiIsImZpbGUiOiJjb21wYW55LWluZm8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoM3tcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi5ob3Jpem9udGFsLW1hcmdpbntcclxuICAgIG1hcmdpbjogYXV0bztcclxufVxyXG4uZWxvbi1tdXNrLWltZ3tcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG59XHJcbmlvbi1jb250ZW50IHtcclxuICAvLyBvdmVyd3JpdGUgaW5saW5lIHN0eWxlc1xyXG4gIC0tb2Zmc2V0LWJvdHRvbTogYXV0byFpbXBvcnRhbnQ7XHJcbiAgLS1vdmVyZmxvdzogaGlkZGVuO1xyXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDU0MHB4KSB7XHJcbiAgICBcclxuaDN7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxufVxyXG4iXX0= */");

/***/ }),

/***/ 7603:
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.page.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\n.header-md::after {\n  width: 0;\n}\n\n.swipper-slide-active {\n  transform: scale(1.05, 1.05);\n}\n\n.swipper-slide {\n  transition: 400ms all ease-in-out;\n}\n\n.latest-launch-container {\n  width: 100%;\n  height: 400px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.latest-launch-container .cards {\n  height: 300px;\n  width: 300px;\n  background-color: rgba(26, 22, 22, 0.8);\n  box-shadow: none;\n  color: #fff;\n  margin: auto;\n}\n\n.latest-launch-container .cards ion-card-header {\n  padding: 4px 16px;\n}\n\n.latest-launch-container .cards .ion-cards-img {\n  width: 150px !important;\n  height: 150px !important;\n}\n\n.latest-launch-container .cards .cards-text-container {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n}\n\n.latest-launch-container .cards .cards-content {\n  height: 200px;\n  font-weight: 600;\n}\n\nion-content {\n  --ion-background-color: rgb(0, 4, 240);\n  color: #000;\n}\n\n.history-events-cards {\n  width: 300px;\n  height: 300px;\n}\n\n.history-events-cards .historyEventsImg {\n  width: 100px;\n  height: auto;\n}\n\n.history-events-cards .history-title {\n  height: 40px;\n  line-height: 40px;\n}\n\n.history-events-cards .history-title {\n  height: 60px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.history-events-cards .history-content {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\nion-slides {\n  margin-top: 20px;\n  padding: 20px;\n}\n\nion-slides ion-slide {\n  border-radius: 10px;\n}\n\n.swipper-slide-active {\n  box-shadow: 0px 5px 6px 1px rgba(46, 46, 46, 0.42);\n}\n\n:root {\n  --ion-safe-area-top: 20px;\n  --ion-safe-area-bottom: 22px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FBQ0E7O0FBRUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFDQTs7QUFFQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0FBQ0E7O0FBRUE7RUFDQSxxQkFBQTtBQUNBOztBQUVBO0VBQ0MsUUFBQTtBQUNEOztBQUVBO0VBQ0EsNEJBQUE7QUFDQTs7QUFDQTtFQUNBLGlDQUFBO0FBRUE7O0FBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0FBR0E7O0FBREE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHVDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUdBOztBQURBO0VBQ0EsaUJBQUE7QUFHQTs7QUFBQTtFQUNBLHVCQUFBO0VBQ0Esd0JBQUE7QUFFQTs7QUFFQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7QUFBQTs7QUFHQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQURBOztBQU9BO0VBQ0Esc0NBQUE7RUFDQSxXQUFBO0FBSkE7O0FBT0E7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQUpBOztBQUtBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7QUFIRjs7QUFLQTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtBQUhGOztBQUtBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0FBSEY7O0FBS0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQUhGOztBQU9BO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FBSkE7O0FBS0E7RUFDRSxtQkFBQTtBQUhGOztBQVFBO0VBQ0Esa0RBQUE7QUFMQTs7QUFRQTtFQUNBLHlCQUFBO0VBQ0EsNEJBQUE7QUFMQSIsImZpbGUiOiJob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjb250YWluZXIge1xyXG50ZXh0LWFsaWduOiBjZW50ZXI7XHJcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcclxubGVmdDogMDtcclxucmlnaHQ6IDA7XHJcbnRvcDogNTAlO1xyXG50cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbn1cclxuXHJcbiNjb250YWluZXIgc3Ryb25nIHtcclxuZm9udC1zaXplOiAyMHB4O1xyXG5saW5lLWhlaWdodDogMjZweDtcclxufVxyXG5cclxuI2NvbnRhaW5lciBwIHtcclxuZm9udC1zaXplOiAxNnB4O1xyXG5saW5lLWhlaWdodDogMjJweDtcclxuY29sb3I6ICM4YzhjOGM7XHJcbm1hcmdpbjogMDtcclxufVxyXG5cclxuI2NvbnRhaW5lciBhIHtcclxudGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4uaGVhZGVyLW1kOjphZnRlciB7XHJcbiB3aWR0aDogMDtcclxufVxyXG5cclxuLnN3aXBwZXItc2xpZGUtYWN0aXZle1xyXG50cmFuc2Zvcm06IHNjYWxlKDEuMDUsMS4wNSlcclxufVxyXG4uc3dpcHBlci1zbGlkZXtcclxudHJhbnNpdGlvbjogNDAwbXMgYWxsIGVhc2UtaW4tb3V0O1xyXG59XHJcbi5sYXRlc3QtbGF1bmNoLWNvbnRhaW5lcntcclxud2lkdGg6IDEwMCU7XHJcbmhlaWdodDogNDAwcHg7XHJcbmRpc3BsYXk6IGZsZXg7XHJcbmZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbmp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuLmNhcmRze1xyXG5oZWlnaHQ6IDMwMHB4O1xyXG53aWR0aDogMzAwcHg7XHJcbmJhY2tncm91bmQtY29sb3I6IHJnYmEoMjYsIDIyLCAyMiwgMC44KTtcclxuYm94LXNoYWRvdzogbm9uZTtcclxuY29sb3I6ICNmZmY7XHJcbm1hcmdpbjogYXV0bztcclxuXHJcbmlvbi1jYXJkLWhlYWRlcntcclxucGFkZGluZzogNHB4IDE2cHg7XHJcbn1cclxuXHJcbi5pb24tY2FyZHMtaW1ne1xyXG53aWR0aDogMTUwcHggIWltcG9ydGFudDtcclxuaGVpZ2h0OjE1MHB4ICFpbXBvcnRhbnQgO1xyXG5cclxufVxyXG5cclxuLmNhcmRzLXRleHQtY29udGFpbmVye1xyXG53aWR0aDogMTAwJTtcclxuZGlzcGxheTogZmxleDtcclxuanVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4uY2FyZHMtY29udGVudHtcclxuaGVpZ2h0OiAyMDBweDtcclxuZm9udC13ZWlnaHQ6IDYwMDtcclxuXHJcbn1cclxufVxyXG59XHJcblxyXG5pb24tY29udGVudCB7XHJcbi0taW9uLWJhY2tncm91bmQtY29sb3I6IHJnYigwLCA0LCAyNDApO1xyXG5jb2xvcjogIzAwMDtcclxufVxyXG5cclxuLmhpc3RvcnktZXZlbnRzLWNhcmRze1xyXG53aWR0aDozMDBweDtcclxuaGVpZ2h0OiAzMDBweDtcclxuLmhpc3RvcnlFdmVudHNJbWd7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIGhlaWdodDogYXV0bztcclxufVxyXG4uaGlzdG9yeS10aXRsZXtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbn1cclxuLmhpc3RvcnktdGl0bGV7XHJcbiAgaGVpZ2h0OjYwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbi5oaXN0b3J5LWNvbnRlbnR7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbn1cclxuXHJcbmlvbi1zbGlkZXN7XHJcbm1hcmdpbi10b3A6IDIwcHg7XHJcbnBhZGRpbmc6MjBweDtcclxuaW9uLXNsaWRle1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgXHJcbn1cclxufVxyXG5cclxuLnN3aXBwZXItc2xpZGUtYWN0aXZle1xyXG5ib3gtc2hhZG93OiAwcHggNXB4IDZweCAxcHggcmdiYSg0Niw0Niw0NiwwLjQyKTtcclxufVxyXG5cclxuOnJvb3Qge1xyXG4tLWlvbi1zYWZlLWFyZWEtdG9wOiAyMHB4O1xyXG4tLWlvbi1zYWZlLWFyZWEtYm90dG9tOiAyMnB4O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ 9697:
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/company-info/company-info.component.html ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ng-container *ngIf=\"companyInfo\">\r\n  <ion-content>\r\n    <ion-title class=\"ion-text-center\">\r\n      <ion-text color=\"light\"\r\n        ><h2>Informations sur la société</h2></ion-text\r\n      ></ion-title\r\n    >\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col class=\"ion-text-center\">\r\n          <div class=\"ion-text-center\">\r\n            <ion-text color=\"secondary\">\r\n              <h3>Nom de la société</h3>\r\n            </ion-text>\r\n\r\n            <p>\r\n              <ion-text color=\"light\">{{ companyInfo.name }}</ion-text>\r\n            </p>\r\n          </div>\r\n        </ion-col></ion-row\r\n      >\r\n      <ion-row>\r\n        <ion-col class=\"ion-text-center\">\r\n          <div class=\"ion-text-center\">\r\n            <ion-text color=\"secondary\">\r\n              <h3>Pdg</h3>\r\n            </ion-text>\r\n            <p>\r\n              <ion-text color=\"light\">{{ companyInfo.ceo }}</ion-text>\r\n            </p>\r\n          </div>\r\n          <ion-col class=\"ion-text-center\">\r\n            <div class=\"ion-text-center\">\r\n              <ion-text color=\"secondary\">\r\n                <h3>Fondateur</h3>\r\n              </ion-text>\r\n\r\n              <p>\r\n                <ion-text color=\"light\">{{ companyInfo.founder }}</ion-text>\r\n              </p>\r\n            </div>\r\n          </ion-col>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row>\r\n        <ion-col class=\"ion-text-center\">\r\n          <div class=\"ion-text-center\">\r\n            <ion-text color=\"secondary\">\r\n              <h3>Directeur des opérations</h3>\r\n            </ion-text>\r\n\r\n            <p>\r\n              <ion-text color=\"light\">{{ companyInfo.coo }}</ion-text>\r\n            </p>\r\n          </div>\r\n        </ion-col>\r\n        <ion-col class=\"ion-text-center\">\r\n          <div class=\"ion-text-center\">\r\n            <ion-text color=\"secondary\">\r\n              <h3>Directeur technique</h3>\r\n            </ion-text>\r\n\r\n            <p>\r\n              <ion-text color=\"light\">{{ companyInfo.cto }}</ion-text>\r\n            </p>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col class=\"ion-text-center\">\r\n          <div class=\"ion-text-wrap\">\r\n            <ion-text color=\"secondary\">\r\n              <h3>Directeur technique de la propulsion</h3>\r\n            </ion-text>\r\n\r\n            <p>\r\n              <ion-text color=\"light\">{{\r\n                companyInfo.cto_propulsion\r\n              }}</ion-text>\r\n            </p>\r\n          </div>\r\n        </ion-col>\r\n        <ion-col class=\"ion-text-center\">\r\n          <div class=\"ion-text-nowrap\">\r\n            <ion-text color=\"secondary\">\r\n              <h3>Effectifs</h3>\r\n            </ion-text>\r\n\r\n            <p>\r\n              <ion-text color=\"light\">{{ companyInfo.employees }}</ion-text>\r\n            </p>\r\n          </div>\r\n        </ion-col></ion-row\r\n      >\r\n      <ion-row>\r\n        <ion-col class=\"ion-text-center\">\r\n          <div class=\"ion-text-nowrap\">\r\n            <ion-text color=\"secondary\">\r\n              <h3>Date de fondation</h3>\r\n            </ion-text>\r\n            <p>\r\n              <ion-text color=\"light\">{{ companyInfo.founded }}</ion-text>\r\n            </p>\r\n          </div>\r\n        </ion-col>\r\n\r\n        <ion-col class=\"ion-text-center\">\r\n          <div class=\"ion-text-nowrap\">\r\n            <ion-text color=\"secondary\">\r\n              <h3>Valorisation</h3>\r\n            </ion-text>\r\n\r\n            <p>\r\n              <ion-text color=\"light\">{{ companyInfo.valuation }} $</ion-text>\r\n            </p>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row>\r\n        <ion-col class=\"ion-text-center\">\r\n          <ion-text color=\"secondary\">\r\n            <h3>Résumé</h3>\r\n          </ion-text>\r\n\r\n          <p>\r\n            <ion-text color=\"light\">{{ companyInfo.summary }}</ion-text>\r\n          </p>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row>\r\n        <ion-col class=\"ion-text-center\">\r\n          <div class=\"ion-text-nowrap\">\r\n            <ion-text color=\"secondary\"> <h3>Adresse</h3></ion-text>\r\n\r\n            <p>\r\n              <ion-text color=\"light\">{{\r\n                companyInfo.headquarters.address\r\n              }}</ion-text>\r\n            </p>\r\n          </div>\r\n        </ion-col>\r\n\r\n        <ion-col class=\"ion-text-center\">\r\n          <div class=\"ion-text-nowrap\">\r\n            <ion-text color=\"secondary\"> <h3>Ville</h3></ion-text>\r\n            <p color=\"light\"></p>\r\n            <p>\r\n              <ion-text color=\"light\">{{\r\n                companyInfo.headquarters.city\r\n              }}</ion-text>\r\n            </p>\r\n          </div>\r\n        </ion-col>\r\n\r\n        <ion-col class=\"ion-text-center\">\r\n          <div class=\"ion-text-nowrap\">\r\n            <ion-text color=\"secondary\"> <h3>État</h3></ion-text>\r\n            <p>\r\n              <ion-text color=\"light\">{{\r\n                companyInfo.headquarters.state\r\n              }}</ion-text>\r\n            </p>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-avatar\r\n            class=\"horizontal-margin\"\r\n            href=\"{{companyInfo.links.elon_twitter}\"\r\n          >\r\n            <img\r\n              src=\"assets/icon/elon_musk_twitter.png\"\r\n              class=\"elon-musk-img\"\r\n            />\r\n          </ion-avatar>\r\n        </ion-col>\r\n\r\n        <ion-col class=\"ion-text-center\">\r\n          <ion-button\r\n            size=\"medium\"\r\n            href=\"{{ companyInfo.links.twitter }}\"\r\n            target=\"_blank\"\r\n          >\r\n            <ion-icon name=\"logo-flickr\"></ion-icon>\r\n          </ion-button>\r\n        </ion-col>\r\n        <ion-col class=\"ion-text-center ion-justify-center\">\r\n          <ion-button\r\n            size=\"medium\"\r\n            href=\"{{ companyInfo.links.flickr }}\"\r\n            target=\"_blank\"\r\n          >\r\n            <ion-icon name=\"logo-twitter\"></ion-icon>\r\n          </ion-button>\r\n        </ion-col>\r\n        <ion-col class=\"ion-text-center ion-justify-center\">\r\n          <ion-button\r\n            size=\"medium\"\r\n            href=\"{{ companyInfo.links.website }}\"\r\n            target=\"_blank\"\r\n          >\r\n            <ion-icon name=\"globe-outline\"></ion-icon>\r\n          </ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-content>\r\n</ng-container>\r\n");

/***/ }),

/***/ 8102:
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n  <div>\r\n    <ion-header [translucent]=\"true\" lines=\"none\">\r\n      <ion-title class=\"ion-text-center ion-padding\" color=\"light\">\r\n        <h2>Historique</h2>\r\n      </ion-title>\r\n    </ion-header>\r\n    <ng-container *ngIf=\"historyEvents$ as historyEvents\">\r\n      <ion-slides [options]=\"slideOpts\" class=\"ion-margin-top\">\r\n        <ion-slide *ngFor=\"let event of historyEvents\">\r\n          <ion-card class=\"history-events-cards\" color=\"light\">\r\n            <img src=\"assets/icon/space-x-logo.png\" class=\"historyEventsImg\" />\r\n            <ion-card-header>\r\n              <ion-card-subtitle class=\"history-subtitle\"\r\n                ><span class=\"items-key\">Le</span>\r\n                <span> {{event.event_date_utc}}</span></ion-card-subtitle\r\n              >\r\n              <ion-card-title class=\"history-title\">\r\n                <span> {{event.title}}</span></ion-card-title\r\n              >\r\n            </ion-card-header>\r\n\r\n            <ion-card-content class=\"history-content\">\r\n              <span\r\n                >{{event.details.length > 100 ? event.details.slice( 0, 55) :\r\n                event.details }}</span\r\n              >\r\n            </ion-card-content>\r\n          </ion-card>\r\n        </ion-slide>\r\n      </ion-slides>\r\n    </ng-container>\r\n\r\n    <ion-header [translucent]=\"true\" lines=\"none\">\r\n      <ion-title class=\"ion-text-center ion-padding\" color=\"light\">\r\n        <h2>Dernier lancement</h2>\r\n      </ion-title>\r\n    </ion-header>\r\n    <ng-container\r\n      *ngIf=\"latestLaunches$ as latestLaunches\"\r\n      class=\"latest-launch-container\"\r\n    >\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col\r\n            size-xs=\"12\"\r\n            size-sm=\"8\"\r\n            size-l=\"6\"\r\n            offset-sm=\"2\"\r\n            offset-l=\"3\"\r\n          >\r\n            <ion-card class=\"cards\" color=\"light\">\r\n              <div class=\"ion-text-center ion-padding\">\r\n                <img\r\n                  [src]=\"latestLaunches.links.patch.small\"\r\n                  class=\"ion-cards-img\"\r\n                />\r\n              </div>\r\n              <ion-card-header>\r\n                <ion-card-subtitle\r\n                  ><span class=\"items-key\">N°: </span>\r\n                  <span\r\n                    >{{latestLaunches.flight_number}}</span\r\n                  ></ion-card-subtitle\r\n                >\r\n                <ion-card-title>\r\n                  <span>{{latestLaunches.name}}</span></ion-card-title\r\n                >\r\n              </ion-card-header>\r\n\r\n              <ion-card-content>\r\n                <p>\r\n                  {{latestLaunches.details ? \"DÉtails\" : \"Date de lancement\" }}:\r\n                </p>\r\n                <p>\r\n                  {{latestLaunches.details ? latestLaunches.details :\r\n                  latestLaunches.date_utc }}\r\n                </p>\r\n              </ion-card-content>\r\n            </ion-card>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ng-container>\r\n\r\n    <app-company-info></app-company-info>\r\n  </div>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_home_home_module_ts.js.map