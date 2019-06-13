(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'todo-management-system';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _user_user_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user/user.module */ "./src/app/user/user.module.ts");
/* harmony import */ var _user_login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./user/login/login.component */ "./src/app/user/login/login.component.ts");
/* harmony import */ var _globalConfig__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./globalConfig */ "./src/app/globalConfig.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _todo_list_todo_list_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./todo-list/todo-list.module */ "./src/app/todo-list/todo-list.module.ts");













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _user_user_module__WEBPACK_IMPORTED_MODULE_8__["UserModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedModule"],
                _todo_list_todo_list_module__WEBPACK_IMPORTED_MODULE_12__["TodoListModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrModule"].forRoot({
                    timeOut: 3000,
                    closeButton: true
                }),
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot([
                    { path: _globalConfig__WEBPACK_IMPORTED_MODULE_10__["GlobalConfig"].apiVersion + "/users/login", component: _user_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"], pathMatch: 'full' },
                    { path: '', redirectTo: _globalConfig__WEBPACK_IMPORTED_MODULE_10__["GlobalConfig"].apiVersion + "/users/login", pathMatch: 'full' },
                    { path: '*', component: _user_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"], pathMatch: 'full' },
                    { path: '**', component: _user_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"], pathMatch: 'full' }
                ])
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/global.service.ts":
/*!***********************************!*\
  !*** ./src/app/global.service.ts ***!
  \***********************************/
/*! exports provided: GlobalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalService", function() { return GlobalService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var GlobalService = /** @class */ (function () {
    function GlobalService(_toastr, _router) {
        var _this = this;
        this._toastr = _toastr;
        this._router = _router;
        this.checkResStatus = function (apiResponse) {
            var flag = true;
            if (apiResponse.status === 200) {
                flag = true;
            }
            else if (apiResponse.status === 201) {
                flag = false;
                _this._toastr.info("" + apiResponse.message, "Info !");
            }
            else if (apiResponse.status === 202) {
                flag = false;
                _this._toastr.error("" + apiResponse.message, "Error !");
            }
            else {
                flag = false;
            }
            return flag;
        }; //end of check response status
        this.navigateToErrorPage = function (url, param) {
            _this._router.navigate([url], { queryParams: { errorMessage: param } });
        };
    }
    GlobalService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], GlobalService);
    return GlobalService;
}());



/***/ }),

/***/ "./src/app/globalConfig.ts":
/*!*********************************!*\
  !*** ./src/app/globalConfig.ts ***!
  \*********************************/
/*! exports provided: GlobalConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalConfig", function() { return GlobalConfig; });
//to keep track of versions in case if server url is changed
var GlobalConfig = /** @class */ (function () {
    function GlobalConfig() {
    }
    GlobalConfig.serverUrl = "http://api.testtodos.in";
    GlobalConfig.clientUrl = "http://testtodos.in";
    GlobalConfig.apiVersion = "api/v1";
    return GlobalConfig;
}());



/***/ }),

/***/ "./src/app/shared/first-char/first-char.component.css":
/*!************************************************************!*\
  !*** ./src/app/shared/first-char/first-char.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".first-char-class {\r\n    border-radius: 100%;\r\n    line-height: 1em;\r\n    padding: 1em;\r\n    text-align: center;\r\n    margin: 0em;\r\n    width: 3em;\r\n    height: 3em;\r\n    text-transform: uppercase;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2ZpcnN0LWNoYXIvZmlyc3QtY2hhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxVQUFVO0lBQ1YsV0FBVztJQUNYLHlCQUF5QjtFQUMzQiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9maXJzdC1jaGFyL2ZpcnN0LWNoYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5maXJzdC1jaGFyLWNsYXNzIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICBsaW5lLWhlaWdodDogMWVtO1xyXG4gICAgcGFkZGluZzogMWVtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAwZW07XHJcbiAgICB3aWR0aDogM2VtO1xyXG4gICAgaGVpZ2h0OiAzZW07XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/shared/first-char/first-char.component.html":
/*!*************************************************************!*\
  !*** ./src/app/shared/first-char/first-char.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"first-char-class\" [style.color]=\"userColor ? userColor :'white'\" [style.background]=\"userBg ? userBg :'blue'\">\n    {{firstChar}}\n</div>"

/***/ }),

/***/ "./src/app/shared/first-char/first-char.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/first-char/first-char.component.ts ***!
  \***********************************************************/
/*! exports provided: FirstCharComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirstCharComponent", function() { return FirstCharComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FirstCharComponent = /** @class */ (function () {
    function FirstCharComponent() {
    }
    FirstCharComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FirstCharComponent.prototype, "firstChar", void 0);
    FirstCharComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-first-char',
            template: __webpack_require__(/*! ./first-char.component.html */ "./src/app/shared/first-char/first-char.component.html"),
            styles: [__webpack_require__(/*! ./first-char.component.css */ "./src/app/shared/first-char/first-char.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FirstCharComponent);
    return FirstCharComponent;
}());



/***/ }),

/***/ "./src/app/shared/header/header.component.css":
/*!****************************************************!*\
  !*** ./src/app/shared/header/header.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "li:hover {\r\n    background: green;\r\n    cursor: pointer;\r\n}\r\n\r\n.site-header {\r\n    background-color: rgba(0, 0, 0, .85);\r\n    \r\n  }\r\n\r\na:hover{\r\n    background: none;\r\n}\r\n\r\nimg {\r\n    height: 20px;\r\n    width: 20px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksb0NBQW9DOztFQUV0Qzs7QUFFRjtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibGk6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogZ3JlZW47XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5zaXRlLWhlYWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC44NSk7XHJcbiAgICBcclxuICB9XHJcblxyXG5hOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxufVxyXG5cclxuaW1nIHtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/shared/header/header.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/header/header.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<nav class=\"navbar navbar-expand-lg fixed-top navbar-dark bg-dark\">\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExample08\" aria-controls=\"navbarsExample08\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse justify-content-md-center\" id=\"navbarsExample08\">\n    \n    <ul class=\"navbar-nav\">\n        <li class=\"nav-item active\">\n            <a class=\"nav-link font-weight-bold text-primary\" (click) = \"navigateToHome()\"><img src=\"assets/title.png\"> To Do List Management<span class=\"sr-only\">(current)</span></a>\n          </li>\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" (click) = \"navigateToHome()\">Home <i class=\"fas fa-home\"></i><span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" (click) = \"navigateToUserRequests()\">requests <i class=\"fas fa-user-friends\"><span class=\"badge badge-light ml-2\">{{requestCount}}</span></i></a>\n      </li>\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" (click) = \"navigateToUserActivities()\">Activities <i class=\"fas fa-bell\"><span class=\"badge badge-light ml-2\">{{activityCount}}</span></i></a>\n      </li>\n      <li class=\"nav-item active\">\n          <a class=\"nav-link\" (click)=\"navigateToFindFriends()\">find friends <i class=\"fas fa-users\"><span class=\"badge badge-light ml-2\"></span></i></a>\n        </li>\n      <li class=\"nav-item dropdown active\">\n        <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"dropdown08\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"><i class=\"fas fa-user\"></i>  {{userName}}</a>\n        <div class=\"dropdown-menu\" aria-labelledby=\"dropdown08\">\n          <a class=\"dropdown-item\" (click)=\"navigateToUserProfile()\">profile</a>\n          <a class=\"dropdown-item\" (click)=\"navigateToFriends()\">Friends</a>\n          <a class=\"dropdown-item\" (click)=\"logOut()\">Log out</a>\n        </div>\n      </li>\n    </ul>\n  </div>\n</nav>\n\n<!-- Modal -->\n<div class=\"modal fade\" id=\"findFriendsmodal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"findFriendsLabel\"\n  aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"findFriendsLabel\">Find Friends</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <ul class=\"list-group\">\n          <li class=\"list-group-item\" *ngFor=\"let user of usersData;let i = index\" (click)=\"onSelectUser(user)\" data-dismiss=\"modal\"> \n              <app-first-char [firstChar]=\"user.fullName[0]\"></app-first-char>\n              <label>{{user.fullName}} {{user.countryName}}</label>\n          </li>\n        </ul>\n      </div>\n\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/shared/header/header.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_module_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared-module.service */ "./src/app/shared/shared-module.service.ts");
/* harmony import */ var src_app_global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/global.service */ "./src/app/global.service.ts");
/* harmony import */ var src_app_globalConfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/globalConfig */ "./src/app/globalConfig.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var src_app_user_user_socket_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/user/user-socket.service */ "./src/app/user/user-socket.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var src_app_user_user_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/user/user.service */ "./src/app/user/user.service.ts");










var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(_sharedModuleService, _global, _userService, _toastr, _router, _userSocketService, _toastrService) {
        var _this = this;
        this._sharedModuleService = _sharedModuleService;
        this._global = _global;
        this._userService = _userService;
        this._toastr = _toastr;
        this._router = _router;
        this._userSocketService = _userSocketService;
        this._toastrService = _toastrService;
        this.requests = [];
        this.friends = [];
        this.activities = [];
        this.navigateToHome = function () {
            _this._router.navigate(["/" + src_app_globalConfig__WEBPACK_IMPORTED_MODULE_4__["GlobalConfig"].apiVersion + "/lists", ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_6__["Cookie"].get('userId'), 'all']);
        };
        this.navigateToUserProfile = function () {
            _this._router.navigate(["/" + src_app_globalConfig__WEBPACK_IMPORTED_MODULE_4__["GlobalConfig"].apiVersion + "/users", ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_6__["Cookie"].get('userId'), 'profile']);
        };
        this.navigateToUserRequests = function () {
            _this._router.navigate(["/" + src_app_globalConfig__WEBPACK_IMPORTED_MODULE_4__["GlobalConfig"].apiVersion + "/users", ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_6__["Cookie"].get('userId'), 'requests']);
        };
        this.navigateToFindFriends = function () {
            _this._router.navigate(["/" + src_app_globalConfig__WEBPACK_IMPORTED_MODULE_4__["GlobalConfig"].apiVersion + "/users", 'find']);
        };
        this.navigateToFriends = function () {
            _this._router.navigate(["/" + src_app_globalConfig__WEBPACK_IMPORTED_MODULE_4__["GlobalConfig"].apiVersion + "/users", ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_6__["Cookie"].get('userId'), 'friends']);
        };
        this.navigateToUserActivities = function () {
            _this._router.navigate(["/" + src_app_globalConfig__WEBPACK_IMPORTED_MODULE_4__["GlobalConfig"].apiVersion + "/users", ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_6__["Cookie"].get('userId'), 'activities']);
        };
        this.onSendUserRequest = function () {
            _this._userSocketService.onSendUserRequest().subscribe(function (data) {
                console.log(data);
                _this._toastrService.success(data.userName + " sent you a friend request", "Success !");
                _this.requestCount++;
            });
        };
        this.onAcceptUserRequest = function () {
            _this._userSocketService.onAcceptUserRequest().subscribe(function (data) {
                _this._toastr.success(data.receiverName + " has accepted your friend request");
            });
        }; // event to be listen when user cancels the request
        this.onDecrementReqCount = function () {
            _this._userSocketService.onDecrementReqCount().subscribe(function (data) {
                _this.requestCount--;
            });
        };
        this.onIncrementActivityCount = function () {
            _this._userSocketService.onIncrementActitvityCount().subscribe(function (data) {
                _this.activityCount++;
            });
        };
        this.onCancelUserRequest = function () {
            _this._userSocketService.onCancelUserRequest().subscribe(function (userId) {
                _this.requestCount--;
            });
        }; // event to be listen when user cancels the request
        /**
         * @description fetch requests
         * @author Bhaskar Pawar
         */
        this.getRequests = function () {
            _this._sharedModuleService.getRequests(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_6__["Cookie"].get('userId')).subscribe(function (apiResponse) {
                if (_this._global.checkResStatus(apiResponse)) {
                    _this.requests = apiResponse.data;
                    _this.requestCount = apiResponse.data.length;
                }
            }, function (errorMessage) {
                _this._global.navigateToErrorPage("/" + src_app_globalConfig__WEBPACK_IMPORTED_MODULE_4__["GlobalConfig"].apiVersion + "/error", errorMessage);
            });
        }; // end of get requests
        /**
        * @author Bhaskar Pawar
        * @description get activities from the server
        */
        this.getActivities = function () {
            _this._sharedModuleService.getActivities(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_6__["Cookie"].get('userId')).subscribe(function (apiResponse) {
                if (apiResponse.status === 200) {
                    _this.activities = apiResponse.data;
                    _this.activityCount = _this.activities.length;
                }
            }, function (errorMessage) {
                _this._global.navigateToErrorPage("/" + src_app_globalConfig__WEBPACK_IMPORTED_MODULE_4__["GlobalConfig"].apiVersion + "/error", errorMessage);
            });
        }; //end of get activities
        /**
        * @description fetch friends
        * @author Bhaskar Pawar
        */
        this.getFriends = function () {
            _this._sharedModuleService.getFriends(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_6__["Cookie"].get('userId')).subscribe(function (apiResponse) {
                if (_this._global.checkResStatus(apiResponse)) {
                    _this.friends = apiResponse.data;
                    setTimeout(function () {
                        _this._userSocketService.emitFriendsSocket(_this.friends);
                    }, 1000);
                }
            }, function (errorMessage) {
                _this._global.navigateToErrorPage("/" + src_app_globalConfig__WEBPACK_IMPORTED_MODULE_4__["GlobalConfig"].apiVersion + "/error", errorMessage);
            });
        }; // end of get friends
        /**
         * @author Bhaskar Pawar
         * logs out the user from system and delete the cookies and localstorage
         */
        this.logOut = function () {
            var userId = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_6__["Cookie"].get('userId');
            _this._userService.logOut(userId).subscribe(function (apiResponse) {
                if (apiResponse.status === 200) {
                    _this._toastr.success("" + apiResponse.message, 'Success');
                    ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_6__["Cookie"].delete('userId');
                    ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_6__["Cookie"].delete('authToken');
                    ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_6__["Cookie"].delete('userName');
                    localStorage.removeItem('userInfo');
                    setTimeout(function () {
                        _this._router.navigate(['/api/v1/users/login']);
                    }, 1000);
                }
                else {
                    _this._toastr.error("" + apiResponse.message, 'Error');
                }
            });
        }; //end of log out
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.firstChar = this.userName[0];
        this._userSocketService.emitJoinSocket(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_6__["Cookie"].get('userName'));
        this.getRequests();
        this.getFriends();
        this.getActivities();
        this.onSendUserRequest();
        this.onDecrementReqCount();
        this.onIncrementActivityCount();
        this.onAcceptUserRequest();
        this.onCancelUserRequest();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], HeaderComponent.prototype, "userName", void 0);
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/shared/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/shared/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_module_service__WEBPACK_IMPORTED_MODULE_2__["SharedModuleService"], src_app_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"],
            src_app_user_user_service__WEBPACK_IMPORTED_MODULE_9__["UserService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], src_app_user_user_socket_service__WEBPACK_IMPORTED_MODULE_7__["UserSocketService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/shared/http-error-handler/http-error-handler.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/shared/http-error-handler/http-error-handler.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\r\n    width: 200px;\r\n    height: 200px;\r\n}\r\n\r\n.jumbotron {\r\n    height: 650px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2h0dHAtZXJyb3ItaGFuZGxlci9odHRwLWVycm9yLWhhbmRsZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9odHRwLWVycm9yLWhhbmRsZXIvaHR0cC1lcnJvci1oYW5kbGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWcge1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxufVxyXG5cclxuLmp1bWJvdHJvbiB7XHJcbiAgICBoZWlnaHQ6IDY1MHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/shared/http-error-handler/http-error-handler.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/shared/http-error-handler/http-error-handler.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid text-center m-auto\">\n    <img src=\"/assets/error-icon.png\">\n    <p class=\"font-weight-bold\">{{errorMessage}}</p>\n    <button class=\"btn btn-outline-secondary btn-lg\" (click)=\"goBack()\"><i class=\"fas fa-arrow-left\"></i> Back</button>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/http-error-handler/http-error-handler.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/shared/http-error-handler/http-error-handler.component.ts ***!
  \***************************************************************************/
/*! exports provided: HttpErrorHandlerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpErrorHandlerComponent", function() { return HttpErrorHandlerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");




var HttpErrorHandlerComponent = /** @class */ (function () {
    function HttpErrorHandlerComponent(_route, _location) {
        var _this = this;
        this._route = _route;
        this._location = _location;
        this.goBack = function () {
            _this._location.back();
        };
        this.errorMessage = this._route.snapshot.queryParamMap.get('errorMessage');
    }
    HttpErrorHandlerComponent.prototype.ngOnInit = function () {
    };
    HttpErrorHandlerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-http-error-handler',
            template: __webpack_require__(/*! ./http-error-handler.component.html */ "./src/app/shared/http-error-handler/http-error-handler.component.html"),
            styles: [__webpack_require__(/*! ./http-error-handler.component.css */ "./src/app/shared/http-error-handler/http-error-handler.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]])
    ], HttpErrorHandlerComponent);
    return HttpErrorHandlerComponent;
}());



/***/ }),

/***/ "./src/app/shared/notification-dialog/notification-dialog.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/shared/notification-dialog/notification-dialog.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9ub3RpZmljYXRpb24tZGlhbG9nL25vdGlmaWNhdGlvbi1kaWFsb2cuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/shared/notification-dialog/notification-dialog.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/shared/notification-dialog/notification-dialog.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Nofifications <i class=\"fas fa-bell\"></i></h1>\n<div mat-dialog-content>\n <p [innerHTML] = \"message\"></p>\n</div>\n<div mat-dialog-actions>\n  <button mat-button (click)=\"onNoClick()\">Ok</button>\n</div>"

/***/ }),

/***/ "./src/app/shared/notification-dialog/notification-dialog.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/shared/notification-dialog/notification-dialog.component.ts ***!
  \*****************************************************************************/
/*! exports provided: NotificationDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationDialogComponent", function() { return NotificationDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var NotificationDialogComponent = /** @class */ (function () {
    function NotificationDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.message = "";
    }
    NotificationDialogComponent.prototype.ngOnInit = function () {
        this.message = this.data;
    };
    NotificationDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    NotificationDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-notification-dialog',
            template: __webpack_require__(/*! ./notification-dialog.component.html */ "./src/app/shared/notification-dialog/notification-dialog.component.html"),
            styles: [__webpack_require__(/*! ./notification-dialog.component.css */ "./src/app/shared/notification-dialog/notification-dialog.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
    ], NotificationDialogComponent);
    return NotificationDialogComponent;
}());



/***/ }),

/***/ "./src/app/shared/shared-module.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/shared-module.service.ts ***!
  \*************************************************/
/*! exports provided: SharedModuleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModuleService", function() { return SharedModuleService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var rxjs_add_operator_do__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/do */ "./node_modules/rxjs-compat/_esm5/add/operator/do.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm5/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var rxjs_add_observable_throw__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/add/observable/throw */ "./node_modules/rxjs-compat/_esm5/add/observable/throw.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _globalConfig__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../globalConfig */ "./src/app/globalConfig.ts");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_9__);










var SharedModuleService = /** @class */ (function () {
    function SharedModuleService(_http) {
        var _this = this;
        this._http = _http;
        this.baseUrl = _globalConfig__WEBPACK_IMPORTED_MODULE_8__["GlobalConfig"].serverUrl + "/" + _globalConfig__WEBPACK_IMPORTED_MODULE_8__["GlobalConfig"].apiVersion + "/users";
        this.clientBaseUrl = _globalConfig__WEBPACK_IMPORTED_MODULE_8__["GlobalConfig"].clientUrl + "/" + _globalConfig__WEBPACK_IMPORTED_MODULE_8__["GlobalConfig"].apiVersion + "/users";
        /**
         * @description fetches user which are not friends
         * @author Bhaskar Pawar
         */
        this.getUsersWithoutFriends = function () {
            return _this._http.get(_this.baseUrl + "/" + ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_9__["Cookie"].get('userId') + "/notfriends?authToken=" + ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_9__["Cookie"].get('authToken')).catch(_this.handleError);
        }; //end get users without friends
        /**
           * @description fetches selected user
           * @author Bhaskar Pawar
           */
        this.getSingleUser = function (userId) {
            return _this._http.get(_this.baseUrl + "/" + userId + "/profile?authToken=" + ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_9__["Cookie"].get('authToken')).catch(_this.handleError);
        }; //end of get single user
        /**
         * @description get requests
         * @author Bhaskar Pawar
         * @returns {any} response
         */
        this.getRequests = function (userId) {
            return _this._http.get(_this.baseUrl + "/" + userId + "/requests?authToken=" + ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_9__["Cookie"].get('authToken')).catch(_this.handleError);
        }; // get requests
        /**
         * @description get friends
         * @author Bhaskar Pawar
         * @returns {any} response
         */
        this.getFriends = function (userId) {
            return _this._http.get(_this.baseUrl + "/" + userId + "/friends?authToken=" + ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_9__["Cookie"].get('authToken')).catch(_this.handleError);
        }; // get friends
        /**
         * @description request to fetch activities from the DB
         * @author Bhaskar Pawar
         * @param {any} userId
         */
        this.getActivities = function (userId) {
            return _this._http.get(_this.baseUrl + "/" + userId + "/activities?authToken=" + ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_9__["Cookie"].get('authToken')).catch(_this.handleError);
        }; //end of get activities
        /**
         * @description deletes the actitvity from DB
         * @author Bhaskar Pawar
         * @param {any} userId
         * @param {any} activityId
         */
        this.deleteActivity = function (userId, activityId) {
            return _this._http.post(_this.baseUrl + "/" + userId + "/activities/" + activityId + "/delete?authToken=" + ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_9__["Cookie"].get('authToken'), activityId).catch(_this.handleError);
        }; //end of delete activity
        /**
         * @description request to server to save a friend request
         * @author Bhaskar Pawar
         * @param {any} data
         * @returns {any} repsonse
         */
        this.updateSentRequest = function (data, userId) {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
                .set('userId', data.userId)
                .set('userName', data.userName)
                .set('countryName', data.countryName);
            return _this._http.post(_this.baseUrl + "/" + userId + "/sendrequest?authToken=" + ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_9__["Cookie"].get('authToken'), params).catch(_this.handleError);
        };
        /**
         * @description accepts freind requests
         * @author Bhaskar Pawar
         * @param {any} data
         */
        this.acceptFriendRequest = function (data) {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
                .set('senderId', data.senderId)
                .set('senderName', data.senderName)
                .set('receiverId', data.receiverId)
                .set('receiverName', data.receiverName)
                .set('senderCountry', data.senderCountry)
                .set('receiverCountry', data.receiverCountry);
            return _this._http.post(_this.baseUrl + "/requests/accept?authToken=" + ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_9__["Cookie"].get('authToken'), params);
        }; //end of accept friend request
        /**
         * @description delete the request from DB
         * @author Bhaskar Pawar
         * @param {any} data
         */
        this.cancelUserRequest = function (data) {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
                .set('userId', data.userId);
            return _this._http.post(_this.baseUrl + "/" + ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_9__["Cookie"].get('userId') + "/requests/delete?authToken=" + ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_9__["Cookie"].get('authToken'), params).catch(_this.handleError);
        }; //end of cancel user request 
    }
    /**
     * @author Bhaskar Pawar
     * @description this is to handle http error repsonse
     * @param err
     */
    SharedModuleService.prototype.handleError = function (err) {
        var errorMessage = '';
        if (err.error instanceof Error) {
            errorMessage = "An error occurred: " + err.error.message;
        }
        else {
            errorMessage = "Server returned code: " + err.status + ", error message is: " + err.message + ": (" + err.error.message + ")";
        } // end condition *if
        return rxjs__WEBPACK_IMPORTED_MODULE_7__["Observable"].throw(errorMessage);
    }; // END handleError
    SharedModuleService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SharedModuleService);
    return SharedModuleService;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-ng-autocomplete */ "./node_modules/angular-ng-autocomplete/fesm5/angular-ng-autocomplete.js");
/* harmony import */ var _http_error_handler_http_error_handler_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./http-error-handler/http-error-handler.component */ "./src/app/shared/http-error-handler/http-error-handler.component.ts");
/* harmony import */ var _globalConfig__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../globalConfig */ "./src/app/globalConfig.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./header/header.component */ "./src/app/shared/header/header.component.ts");
/* harmony import */ var _first_char_first_char_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./first-char/first-char.component */ "./src/app/shared/first-char/first-char.component.ts");
/* harmony import */ var _notification_dialog_notification_dialog_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./notification-dialog/notification-dialog.component */ "./src/app/shared/notification-dialog/notification-dialog.component.ts");












var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_http_error_handler_http_error_handler_component__WEBPACK_IMPORTED_MODULE_7__["HttpErrorHandlerComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"], _first_char_first_char_component__WEBPACK_IMPORTED_MODULE_10__["FirstCharComponent"], _notification_dialog_notification_dialog_component__WEBPACK_IMPORTED_MODULE_11__["NotificationDialogComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_6__["AutocompleteLibModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                    { path: _globalConfig__WEBPACK_IMPORTED_MODULE_8__["GlobalConfig"].apiVersion + "/error", component: _http_error_handler_http_error_handler_component__WEBPACK_IMPORTED_MODULE_7__["HttpErrorHandlerComponent"] }
                ])
            ],
            exports: [
                _header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"], _first_char_first_char_component__WEBPACK_IMPORTED_MODULE_10__["FirstCharComponent"]
            ],
            entryComponents: [_notification_dialog_notification_dialog_component__WEBPACK_IMPORTED_MODULE_11__["NotificationDialogComponent"]],
            schemas: [
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"],
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["NO_ERRORS_SCHEMA"]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/todo-list/edit-item/edit-item.component.css":
/*!*************************************************************!*\
  !*** ./src/app/todo-list/edit-item/edit-item.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\nbody {\r\n  background: lightslategrey;\r\n  min-height: 75rem;\r\n  padding-top: 4.5rem;\r\n}\r\n\r\n.list-div {\r\n  max-height: 400px;\r\n  overflow-x: hidden;\r\n  overflow-y: auto;\r\n}\r\n\r\n.main-div {\r\n  max-height: 500px;\r\n  overflow-x: hidden;\r\n  overflow-y: auto;\r\n}\r\n\r\n.ng-valid[required], .ng-valid.required  {\r\n    border-left: 5px solid #42A948; /* green */\r\n  }\r\n\r\n.ng-invalid:not(form)  {\r\n    border-left: 5px solid #a94442; /* red */\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9kby1saXN0L2VkaXQtaXRlbS9lZGl0LWl0ZW0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7RUFDRSwwQkFBMEI7RUFDMUIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7SUFDSSw4QkFBOEIsRUFBRSxVQUFVO0VBQzVDOztBQUVGO0lBQ0ksOEJBQThCLEVBQUUsUUFBUTtFQUMxQyIsImZpbGUiOiJzcmMvYXBwL3RvZG8tbGlzdC9lZGl0LWl0ZW0vZWRpdC1pdGVtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuYm9keSB7XHJcbiAgYmFja2dyb3VuZDogbGlnaHRzbGF0ZWdyZXk7XHJcbiAgbWluLWhlaWdodDogNzVyZW07XHJcbiAgcGFkZGluZy10b3A6IDQuNXJlbTtcclxufVxyXG5cclxuLmxpc3QtZGl2IHtcclxuICBtYXgtaGVpZ2h0OiA0MDBweDtcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxufVxyXG5cclxuLm1haW4tZGl2IHtcclxuICBtYXgtaGVpZ2h0OiA1MDBweDtcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxufVxyXG5cclxuLm5nLXZhbGlkW3JlcXVpcmVkXSwgLm5nLXZhbGlkLnJlcXVpcmVkICB7XHJcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkICM0MkE5NDg7IC8qIGdyZWVuICovXHJcbiAgfVxyXG4gIFxyXG4ubmctaW52YWxpZDpub3QoZm9ybSkgIHtcclxuICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgI2E5NDQ0MjsgLyogcmVkICovXHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/todo-list/edit-item/edit-item.component.html":
/*!**************************************************************!*\
  !*** ./src/app/todo-list/edit-item/edit-item.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n\n<head>\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, user-scalable=no\">\n</head>\n\n<body>\n  <header>\n    <app-header [userName]=\"userName\"></app-header>\n  </header>\n  <main role=\"main\">\n    <div class=\"container-fluid\">\n      <!-- start of edit item form -->\n      <div class=\"bg-white\">\n        <div #scrollMainDiv *ngIf=\"currentItem\" class=\"main-div\">\n          <form #editItemForm=\"ngForm\" class=\"shadow-lg p-2\">\n            <div class=\"form-group\">\n              <label for=\"titleInput\">Title*</label>\n              <input type=\"text\" class=\"form-control\" id=\"titleInput\" name=\"title\" [(ngModel)]=\"currentItem.title\"\n                #titleAttr=\"ngModel\" placeholder=\"Enter Title\" required>\n            </div>\n\n            <div class=\"form-group\">\n              <input [min]=\"min\" [owlDateTime]=\"dt2\" [owlDateTimeTrigger]=\"dt2\" placeholder=\"Due Date Time\"\n                class=\"form-control\" name=\"date\" [(ngModel)]=\"currentItem.dueDate\" #dateAttr=\"ngModel\" required>\n              <owl-date-time [pickerMode]=\"dialog\" [showSecondsTimer]=\"true\" #dt2></owl-date-time>\n            </div>\n\n            <div class=\"form-group\">\n              <label for=\"descInput\">Description*</label>\n              <textarea type=\"text\" rows=\"6\" class=\"form-control\" id=\"descInput\" name=\"description\"\n                [(ngModel)]=\"currentItem.description\" #descAttr=\"ngModel\" placeholder=\"Enter Description\"\n                required></textarea>\n            </div>\n\n             <div class=\"form-group\">\n              <input type=\"file\" name=\"fileName\" single ng2FileSelect [uploader] = \"uploader\">\n              <a href=\"{{currentItem.fileLocation}}\" *ngIf=\"currentItem.fileName !== '' \" class=\"ml-5\">{{currentItem.fileName}}</a>\n              <label *ngIf=\"currentItem.fileName === ''\" class=\"ml-5\">no file found</label>\n             </div>\n\n             <div class=\"form-group\" *ngIf=\"uploader.queue.length > 0\">\n               <button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"uploadFile()\">Upload</button>\n               <button type=\"button\" class=\"btn btn-danger btn-sm ml-2\" (click)=\"uploader.queue[0].remove()\">Cancel</button>\n               <div class=\"progress mt-2\">\n                  <div class=\"progress-bar progress-bar-striped bg-success\" role=\"progressbar\" [style.width]=\"(uploader.progress/100) * 100 + '%'\" [attr.aria-valuenow]=\"uploader.progress\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                </div>\n             </div>\n\n            <div class=\"row\">\n              <div class=\"col-sm\">\n                <button type=\"submit\" class=\"btn btn-primary btn-sm\" [disabled]=\"!editItemForm.form.valid || uploader.isUploading\"\n                  (click)=\"editItemInList()\">Submit</button>\n              </div>\n\n            </div>\n          </form>\n          <!-- end of edit item form -->\n          <div #scrollMe class=\"d-flex flex-row flex-wrap list-div\"\n            [scrollTop]=\"(scrollSubItemToTop) ? 0 : scrollMe.scrollHeight\">\n            <div class=\"flex-fill m-2\">\n              <ul class=\"list-group shadow-lg\">\n                <li class=\"list-group-item\" *ngIf=\"currentItem.subitemsList.length === 0\">No Sub Items added</li>\n                <li class=\"list-group-item\" *ngFor=\"let subItem of currentItem.subitemsList;let i = index\">\n                  <div class=\"d-flex flex-row flex-wrap\">\n                    <div class=\"flex-fill\">\n                      <div class=\"form-check\" *ngIf=\"!subItem.isDone\">\n                        <input type=\"checkbox\" class=\"form-check-input\" id=\"subItemCheck\" name=\"isDone\"\n                          [(ngModel)]=\"subItem.isDone\" #isDoneSubItemAtttr=\"ngModel\"\n                          (change)=\"markSubItemDone(subItem)\">\n                        <label class=\"form-check-label\" for=\"subItemCheck\">{{subItem.title}}</label>\n                      </div>\n                      <div *ngIf=\"subItem.isDone\">\n                        <i class=\"fas fa-check text-success\">{{subItem.title}}</i>\n                      </div>\n                    </div>\n                    <div class=\"flex-fill d-flex justify-content-end\" *ngIf=\"!subItem.isDone\">\n                      <button title=\"delete item\" class=\"btn btn-sm\" (click)=\"deleteSubItemFromItemsList(subItem)\"><i\n                          class=\"fas fa-trash-alt\"></i></button>\n                    </div>\n                  </div>\n                </li>\n              </ul>\n            </div>\n          </div>\n\n        </div>\n\n        <div class=\"d-flex flex-row flex-wrap\">\n          <div class=\"flex-fill m-2\">\n            <button class=\"btn btn-primary btn-sm\" data-toggle=\"modal\" data-target=\"#subItemTitleModal\"\n              (click)=\"onAddSubItemBtn()\"><i class=\"fas fa-plus\"></i> Add Sub Item</button>\n          </div>\n          <div class=\"flex-fill m-2 d-flex justify-content-end\">\n            <button class=\"btn btn-secondary btn-sm\" (click)=\"goBack()\"><i class=\"fas fa-arrow-left\"></i> Back</button>\n          </div>\n        </div>\n      </div>\n\n      <!-- start of sub item title modal -->\n      <div class=\"modal fade\" id=\"subItemTitleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"subItemTitleLabel\"\n        aria-hidden=\"true\">\n        <div class=\"modal-dialog\" role=\"document\">\n          <div class=\"modal-content\">\n            <div class=\"modal-header\">\n              <h5 class=\"modal-title\" id=\"subItemTitleLabel\">Sub Item Title</h5>\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                <span aria-hidden=\"true\">&times;</span>\n              </button>\n            </div>\n            <div class=\"modal-body\">\n              <div class=\"form-group\">\n                <label for=\"titleInputSubItem\">Sub Item Title*</label>\n                <input id=\"titleInputSubItem\" class=\"form-control\" type=\"text\" name=\"subItemTitle\"\n                  placeholder=\"Sub Item Title\" [(ngModel)]=\"subItemTitle\" #titleSubItemAttr=\"ngModel\" required>\n              </div>\n            </div>\n            <div class=\"modal-footer\">\n              <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Cancel</button>\n              <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" [disabled]=\"titleSubItemAttr.invalid\"\n                (click)=\"addSubItemToItemsList()\">Accept</button>\n            </div>\n          </div>\n        </div>\n      </div>\n      <!-- end of sub item title modal -->\n    </div>\n  </main>\n</body>\n\n</html>"

/***/ }),

/***/ "./src/app/todo-list/edit-item/edit-item.component.ts":
/*!************************************************************!*\
  !*** ./src/app/todo-list/edit-item/edit-item.component.ts ***!
  \************************************************************/
/*! exports provided: EditItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditItemComponent", function() { return EditItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_globalConfig__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/globalConfig */ "./src/app/globalConfig.ts");
/* harmony import */ var src_app_global_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/global.service */ "./src/app/global.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _todo_list_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../todo-list.service */ "./src/app/todo-list/todo-list.service.ts");
/* harmony import */ var _todo_list_socket_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../todo-list-socket.service */ "./src/app/todo-list/todo-list-socket.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_user_user_socket_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/user/user-socket.service */ "./src/app/user/user-socket.service.ts");
/* harmony import */ var src_app_shared_notification_dialog_notification_dialog_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/notification-dialog/notification-dialog.component */ "./src/app/shared/notification-dialog/notification-dialog.component.ts");
/* harmony import */ var _todolist_validation_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../todolist-validation.service */ "./src/app/todo-list/todolist-validation.service.ts");















var EditItemComponent = /** @class */ (function () {
    function EditItemComponent(_todoListService, _route, _location, _global, _dialog, _userSocketService, _toDoListValidationService, _toastr, _router, _todoSocketService) {
        var _this = this;
        this._todoListService = _todoListService;
        this._route = _route;
        this._location = _location;
        this._global = _global;
        this._dialog = _dialog;
        this._userSocketService = _userSocketService;
        this._toDoListValidationService = _toDoListValidationService;
        this._toastr = _toastr;
        this._router = _router;
        this._todoSocketService = _todoSocketService;
        this.scrollSubItemToTop = true;
        this.isDone = false;
        this.min = new Date();
        this.userName = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_8__["Cookie"].get('userName');
        this.goBack = function () {
            _this._location.back();
        }; //end of go back
        this.onAddSubItemBtn = function () {
            _this.subItemTitle = "";
        };
        this.onUpdateSubItemToItemsList = function () {
            _this._todoSocketService.onUpdateAddedSubItemItemsList().subscribe(function (data) {
                _this.currentItem.subitemsList.push(data);
            });
        }; //end of on update sub item to items list
        this.onDeleteSubItemFromItemsList = function () {
            _this._todoSocketService.onDeleteSubItemFromItemsList().subscribe(function (data) {
                var index = _this.currentItem.subitemsList.findIndex(function (subItem) { return subItem.subItemId === data.subItemId; });
                _this.currentItem.subitemsList.splice(index, 1);
            });
        }; //end of on delete item from list
        this.onMarkDoneSubItem = function () {
            _this._todoSocketService.onMarkDoneSubItem().subscribe(function (data) {
                var subItem = _this.currentItem.subitemsList.find(function (subItem) { return subItem.subItemId === data.subItemId; });
                subItem.isDone = data.isDone;
            });
        }; //end of on delete item from list
        this.onNotifySubItemOperation = function () {
            _this._userSocketService.onNotifySubItemOperation().subscribe(function (actionData) {
                var message = "";
                switch (actionData.actionType) {
                    case 'subitemadded':
                        message = "new sub item <b>" + actionData.data.title + "</b> to Item <b>" + actionData.itemName + "</b> has been added by <b>" + actionData.userName + "</b>";
                        break;
                    case 'subitemdeleted':
                        message = "sub item <b>" + actionData.data.title + "</b> from Item <b>" + actionData.itemName + "</b> has been deleted by <b>" + actionData.userName + "</b>";
                        break;
                    case 'submarkedcomplete':
                        message = "sub item <b>" + actionData.data.title + "</b> has been marked done of <b>" + actionData.itemName + "</b> by <b>" + actionData.userName + "</b>";
                        break;
                    default:
                        break;
                }
                _this._dialog.open(src_app_shared_notification_dialog_notification_dialog_component__WEBPACK_IMPORTED_MODULE_13__["NotificationDialogComponent"], {
                    width: '250px',
                    data: message
                });
            });
        };
        this.onNotifyItemEdited = function () {
            _this._userSocketService.onNotifyItemEdited().subscribe(function (data) {
                _this._dialog.open(src_app_shared_notification_dialog_notification_dialog_component__WEBPACK_IMPORTED_MODULE_13__["NotificationDialogComponent"], {
                    width: '250px',
                    data: "params <b>" + data.message + "</b> of item <b>" + data.itemName + "</b> has been updated by  <b>" + data.userName + "</b>"
                });
            });
        };
        /**
         * @author Bhaskar Pawar
         * @description will fetch current item
         */
        this.getSingleItem = function () {
            var userId = _this._route.snapshot.paramMap.get('userId');
            var listId = _this._route.snapshot.paramMap.get('listId');
            var itemId = _this._route.snapshot.paramMap.get('itemId');
            _this._todoListService.getSingleItem(userId, listId, itemId).subscribe(function (apiResponse) {
                _this.oldvalues = {
                    title: apiResponse.data.title,
                    description: apiResponse.data.description,
                    dueDate: apiResponse.data.dueDate,
                    fileName: apiResponse.data.fileName,
                    fileLocation: apiResponse.data.fileLocation
                };
                _this.currentItem = apiResponse.data;
            }, function (errorMessage) {
                _this._global.navigateToErrorPage("/" + src_app_globalConfig__WEBPACK_IMPORTED_MODULE_5__["GlobalConfig"].apiVersion + "/error", errorMessage);
            });
        }; // end of get single Item
        this.uploadFile = function () {
            if (_this.uploader.queue.length !== 0) {
                _this.newFileName = _this.uploader.queue[0].file.name;
            }
            console.log(_this.oldvalues.fileName);
            console.log(_this.newFileName);
            if (_this.newFileName === _this.oldvalues.fileName) {
                _this._toastr.info('file is already present !', "Info");
                _this.uploader.clearQueue();
            }
            else {
                _this.uploader.queue[0].upload();
            }
        };
        /**
         * @author Bhaskar Pawar
         * @description this will edit the item to the list
         */
        this.editItemInList = function () {
            var itemData = {
                title: _this.currentItem.title,
                description: _this.currentItem.description,
                dueDate: _this.currentItem.dueDate,
                fileName: _this.currentItem.fileName,
                fileLocation: _this.currentItem.fileLocation
            };
            var userId = _this._route.snapshot.paramMap.get('userId');
            var listId = _this._route.snapshot.paramMap.get('listId');
            var itemId = _this._route.snapshot.paramMap.get('itemId');
            var auditString = _this._toDoListValidationService.validateIsNochanges(_this.oldvalues, _this.currentItem, _this.newFileName);
            if (auditString === "") {
                _this._toastr.info('You have no changes to save', "Info");
            }
            else {
                _this._todoListService.editItemInList(userId, itemData, listId, itemId).subscribe(function (apiResponse) {
                    if (_this._global.checkResStatus(apiResponse)) {
                        _this._toastr.success("" + apiResponse.message, "Success !");
                        setTimeout(function () {
                            var data = {
                                id: listId,
                                itemId: itemId,
                                isUndo: false,
                                oldData: _this.oldvalues,
                                itemName: _this.currentItem.title,
                                userId: ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_8__["Cookie"].get('userId'),
                                userName: ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_8__["Cookie"].get('userName'),
                                message: auditString
                            };
                            _this.uploader.clearQueue();
                            _this._todoSocketService.emitEditItemToList(data);
                        }, 500);
                        setTimeout(function () {
                            _this._router.navigate(["/" + src_app_globalConfig__WEBPACK_IMPORTED_MODULE_5__["GlobalConfig"].apiVersion + "/lists", userId, 'all']);
                        }, 1000);
                    }
                }, function (errorMessage) {
                    _this._global.navigateToErrorPage("/" + src_app_globalConfig__WEBPACK_IMPORTED_MODULE_5__["GlobalConfig"].apiVersion + "/error", errorMessage);
                });
            }
        }; //end edit item to list
        /**
         * @description will add new sub item to the itemsList
         * @author Bhaskar Pawar
         */
        this.addSubItemToItemsList = function () {
            var userId = _this._route.snapshot.paramMap.get('userId');
            var listId = _this._route.snapshot.paramMap.get('listId');
            var itemId = _this._route.snapshot.paramMap.get('itemId');
            var data = {
                title: _this.subItemTitle
            };
            _this._todoListService.addSubItemToItemsList(userId, data, listId, itemId).subscribe(function (apiResponse) {
                if (_this._global.checkResStatus(apiResponse)) {
                    _this._toastr.success("" + apiResponse.message, "Success !");
                    setTimeout(function () {
                        var data = {
                            id: listId,
                            itemId: itemId,
                            isUndo: false,
                            actionType: 'subitemadded',
                            userId: ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_8__["Cookie"].get('userId'),
                            userName: ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_8__["Cookie"].get('userName'),
                            itemName: _this.currentItem.title,
                            data: apiResponse.data.subItem
                        };
                        _this._todoSocketService.emitAddSubItemToItemsList(data);
                    }, 1000);
                    _this.scrollSubItemToTop = false;
                }
            }, function (errorMessage) {
                _this._global.navigateToErrorPage("/" + src_app_globalConfig__WEBPACK_IMPORTED_MODULE_5__["GlobalConfig"].apiVersion + "/error", errorMessage);
            });
        }; //end of adds ub item to items list
        /**
        * @description will delete sub item from the items list
        * @author Bhaskar Pawar
        * @param {any} listObj
        * @param {any} itemObj
        */
        this.deleteSubItemFromItemsList = function (subItemObj) {
            var userId = _this._route.snapshot.paramMap.get('userId');
            var listId = _this._route.snapshot.paramMap.get('listId');
            var itemId = _this._route.snapshot.paramMap.get('itemId');
            _this._todoListService.deleteSubItemFromItemsList(userId, listId, itemId, subItemObj).subscribe(function (apiResponse) {
                if (_this._global.checkResStatus(apiResponse)) {
                    _this._toastr.success("" + apiResponse.message, "Success !");
                    setTimeout(function () {
                        var data = {
                            id: listId,
                            itemId: itemId,
                            isUndo: false,
                            actionType: 'subitemdeleted',
                            userId: ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_8__["Cookie"].get('userId'),
                            userName: ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_8__["Cookie"].get('userName'),
                            itemName: _this.currentItem.title,
                            data: subItemObj
                        };
                        _this._todoSocketService.emitdeleteSubItemFromItemsList(data);
                    }, 1000);
                    _this.scrollSubItemToTop = true;
                }
            }, function (errorMessage) {
                _this._global.navigateToErrorPage("/" + src_app_globalConfig__WEBPACK_IMPORTED_MODULE_5__["GlobalConfig"].apiVersion + "/error", errorMessage);
            });
        }; //end of delete sub item from the items list
        /**
         * @description will mark sub item as done
         * @author Bhaskar Pawar
         * @param {any} subItem
         */
        this.markSubItemDone = function (subItem) {
            var data = {
                isDone: subItem.isDone
            };
            var userId = _this._route.snapshot.paramMap.get('userId');
            var listId = _this._route.snapshot.paramMap.get('listId');
            var itemId = _this._route.snapshot.paramMap.get('itemId');
            _this._todoListService.markSubItemDone(userId, data, listId, itemId, subItem.subItemId).subscribe(function (apiResponse) {
                if (_this._global.checkResStatus(apiResponse)) {
                    setTimeout(function () {
                        var data = {
                            id: listId,
                            itemId: itemId,
                            isUndo: false,
                            actionType: 'submarkedcomplete',
                            userId: ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_8__["Cookie"].get('userId'),
                            userName: ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_8__["Cookie"].get('userName'),
                            itemName: _this.currentItem.title,
                            data: apiResponse.data
                        };
                        _this._todoSocketService.emitMarkDoneSubItem(data);
                    }, 1000);
                }
            }, function (errorMessage) {
                _this._global.navigateToErrorPage("/" + src_app_globalConfig__WEBPACK_IMPORTED_MODULE_5__["GlobalConfig"].apiVersion + "/error", errorMessage);
            });
        };
        var listId = this._route.snapshot.paramMap.get('listId');
        var userId = this._route.snapshot.paramMap.get('userId');
        var itemId = this._route.snapshot.paramMap.get('itemId');
        this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_2__["FileUploader"]({ url: src_app_globalConfig__WEBPACK_IMPORTED_MODULE_5__["GlobalConfig"].serverUrl + "/" + src_app_globalConfig__WEBPACK_IMPORTED_MODULE_5__["GlobalConfig"].apiVersion + "/lists/" + userId + "/" + listId + "/" + itemId + "/upload?authToken=" + ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_8__["Cookie"].get('authToken') });
        this.uploader.onCompleteItem = function (item, response, status, headers) {
            var fileData = JSON.parse(response);
            _this.currentItem.fileLocation = fileData.data.fileLocation;
            _this.currentItem.fileName = fileData.data.fileName;
        };
    }
    EditItemComponent.prototype.ngOnInit = function () {
        this.getSingleItem();
        this.onUpdateSubItemToItemsList();
        this.onDeleteSubItemFromItemsList();
        this.onMarkDoneSubItem();
        this.onNotifySubItemOperation();
        this.onNotifyItemEdited();
    };
    EditItemComponent.prototype.ngAfterViewInit = function () {
        this.uploader.onAfterAddingFile = (function (item) {
            item.withCredentials = false;
        });
    };
    EditItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-item',
            template: __webpack_require__(/*! ./edit-item.component.html */ "./src/app/todo-list/edit-item/edit-item.component.html"),
            styles: [__webpack_require__(/*! ./edit-item.component.css */ "./src/app/todo-list/edit-item/edit-item.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_todo_list_service__WEBPACK_IMPORTED_MODULE_9__["TodoListService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"], src_app_global_service__WEBPACK_IMPORTED_MODULE_6__["GlobalService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatDialog"], src_app_user_user_socket_service__WEBPACK_IMPORTED_MODULE_12__["UserSocketService"], _todolist_validation_service__WEBPACK_IMPORTED_MODULE_14__["TodolistValidationService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _todo_list_socket_service__WEBPACK_IMPORTED_MODULE_10__["TodoListSocketService"]])
    ], EditItemComponent);
    return EditItemComponent;
}());



/***/ }),

/***/ "./src/app/todo-list/edit-list/edit-list.component.css":
/*!*************************************************************!*\
  !*** ./src/app/todo-list/edit-list/edit-list.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n:root {\r\n    font-size: 1rem;\r\n}\r\n\r\nbody {\r\n    background: lightslategrey;\r\n    height: 650px;\r\n    min-height: 75rem;\r\n    padding-top: 4.5rem;\r\n}\r\n\r\n.list-div {\r\n    max-height: 400px;\r\n    overflow-x: hidden;\r\n    overflow-y: auto;\r\n}\r\n\r\nul li:hover {\r\n    background: lightgreen;\r\n}\r\n\r\n.ng-valid[required], .ng-valid.required  {\r\n    border-left: 5px solid #42A948; /* green */\r\n  }\r\n\r\n.ng-invalid:not(form)  {\r\n    border-left: 5px solid #a94442; /* red */\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9kby1saXN0L2VkaXQtbGlzdC9lZGl0LWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksMEJBQTBCO0lBQzFCLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSw4QkFBOEIsRUFBRSxVQUFVO0VBQzVDOztBQUVGO0lBQ0ksOEJBQThCLEVBQUUsUUFBUTtFQUMxQyIsImZpbGUiOiJzcmMvYXBwL3RvZG8tbGlzdC9lZGl0LWxpc3QvZWRpdC1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuOnJvb3Qge1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICAgIGJhY2tncm91bmQ6IGxpZ2h0c2xhdGVncmV5O1xyXG4gICAgaGVpZ2h0OiA2NTBweDtcclxuICAgIG1pbi1oZWlnaHQ6IDc1cmVtO1xyXG4gICAgcGFkZGluZy10b3A6IDQuNXJlbTtcclxufVxyXG5cclxuLmxpc3QtZGl2IHtcclxuICAgIG1heC1oZWlnaHQ6IDQwMHB4O1xyXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxufVxyXG5cclxudWwgbGk6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogbGlnaHRncmVlbjtcclxufVxyXG5cclxuLm5nLXZhbGlkW3JlcXVpcmVkXSwgLm5nLXZhbGlkLnJlcXVpcmVkICB7XHJcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkICM0MkE5NDg7IC8qIGdyZWVuICovXHJcbiAgfVxyXG4gIFxyXG4ubmctaW52YWxpZDpub3QoZm9ybSkgIHtcclxuICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgI2E5NDQ0MjsgLyogcmVkICovXHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/todo-list/edit-list/edit-list.component.html":
/*!**************************************************************!*\
  !*** ./src/app/todo-list/edit-list/edit-list.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n\n<head>\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, user-scalable=no\">\n</head>\n\n<body>\n  <header>\n    <app-header [userName] = \"userName\"></app-header>\n  </header>\n  <main role=\"main\">\n    <div class=\"container-fluid\">\n      <div class=\"shadow-lg bg-white\" *ngIf=\"currentList\">\n        <div class=\"d-flex flex-row flex-wrap\">\n          <div class=\"col-sm font-weight-bold m-2\">\n            <i class=\"fas fa-list-ul\"></i>\n            {{currentList.title | uppercase}}\n          </div>\n        </div>\n        <div #scrollMe class=\"d-flex flex-row flex-wrap list-div\"\n          [scrollTop]=\"(scrollItemToTop) ? 0 : scrollMe.scrollHeight\">\n          <div class=\"flex-fill m-2\">\n            <ul class=\"list-group shadow-lg\">\n              <li class=\"list-group-item\" *ngIf=\"currentList.itemsList.length === 0\">No Items added</li>\n              <li class=\"list-group-item\" *ngFor=\"let item of currentList.itemsList;let i = index\">\n                <div class=\"d-flex flex-row flex-wrap\">\n                  <div class=\"flex-fill\" *ngIf=\"!item.isDone\">\n                    <button class=\"btn btn-link\">{{item.title}}</button>\n                  </div>\n                  <div *ngIf=\"item.isDone\">\n                    <i class=\"fas fa-check text-success\">{{item.title}}</i>\n                  </div>\n                  <div class=\"flex-fill d-flex justify-content-end\">\n                    <div class=\"dropdown\" *ngIf=\"!item.isDone\">\n                      <button class=\"btn btn-primary dropdown-toggle btn-sm\" type=\"button\" id=\"dropdownMenuButton\"\n                        data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                        Mark\n                      </button>\n                      <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n                        <button class=\"dropdown-item btn-sm\" *ngIf=\"!item.isOpen\"\n                          (click)=\"markItemOpen(item)\">Open</button>\n                        <button class=\"dropdown-item btn-sm\" (click)=\"markItemDone(item)\">Done</button>\n                      </div>\n                    </div>\n                    <button title=\"edit item\" class=\"btn btn-sm\" *ngIf=\"item.isOpen && !item.isDone\"\n                      (click)=\"navigateToEditItem(currentList.id, item.itemId)\"><i\n                        class=\"fas fa-pencil-alt\"></i></button>\n\n                    <button title=\"delete item\" *ngIf=\"!item.isDone\" class=\"btn btn-sm\"\n                      (click)=\"deleteItemFromList(item)\"><i class=\"fas fa-trash-alt\"></i></button>\n                  </div>\n                </div>\n              </li>\n            </ul>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-sm m-2\">\n            <button class=\"btn btn-primary btn-sm\" data-toggle=\"modal\" data-target=\"#itemTitleModal\"\n              (click)=\"onAddItemBtn(currentList)\"><i class=\"fas fa-plus\"></i> Add Item</button>\n          </div>\n          <div class=\"col-sm m-2 d-flex justify-content-end\">\n            <button class=\"btn btn-secondary btn-sm\" (click)=\"goBack()\"><i class=\"fas fa-arrow-left\"></i> Back</button>\n          </div>\n        </div>\n      </div>\n      <!--Start of modal dialog item-->\n\n      <div class=\"modal fade\" id=\"itemTitleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"itemTitleLabel\"\n        aria-hidden=\"true\">\n        <div class=\"modal-dialog\" role=\"document\">\n          <div class=\"modal-content\">\n            <div class=\"modal-header\">\n              <h5 class=\"modal-title\" id=\"itemTitleLabel\">Item Title</h5>\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                <span aria-hidden=\"true\">&times;</span>\n              </button>\n            </div>\n            <div class=\"modal-body\">\n              <div class=\"form-group\">\n                <label for=\"titleInputItem\">Item Title*</label>\n                <input id=\"titleInputItem\" class=\"form-control\" type=\"text\" name=\"itemTitle\" placeholder=\"Item Title\"\n                  [(ngModel)]=\"itemTitle\" #titleItemAttr=\"ngModel\" maxlength=\"20\" required>\n              </div>\n            </div>\n            <div class=\"modal-footer\">\n              <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Cancel</button>\n              <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" [disabled]=\"titleItemAttr.invalid\"\n                (click)=\"addItemToList()\">Accept</button>\n            </div>\n          </div>\n        </div>\n      </div>\n      <!--end of modal dialog item-->\n\n    </div>\n  </main>\n</body>\n\n</html>"

/***/ }),

/***/ "./src/app/todo-list/edit-list/edit-list.component.ts":
/*!************************************************************!*\
  !*** ./src/app/todo-list/edit-list/edit-list.component.ts ***!
  \************************************************************/
/*! exports provided: EditListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditListComponent", function() { return EditListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _todo_list_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../todo-list.service */ "./src/app/todo-list/todo-list.service.ts");
/* harmony import */ var src_app_global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/global.service */ "./src/app/global.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _todo_list_socket_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../todo-list-socket.service */ "./src/app/todo-list/todo-list-socket.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_globalConfig__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/globalConfig */ "./src/app/globalConfig.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _todolist_validation_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../todolist-validation.service */ "./src/app/todo-list/todolist-validation.service.ts");
/* harmony import */ var src_app_shared_notification_dialog_notification_dialog_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/notification-dialog/notification-dialog.component */ "./src/app/shared/notification-dialog/notification-dialog.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_user_user_socket_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/user/user-socket.service */ "./src/app/user/user-socket.service.ts");














var EditListComponent = /** @class */ (function () {
    function EditListComponent(_todoListService, _global, _dialog, _userSocketService, _toastr, _todoSocketService, _route, _router, _location, _todoListValidationService) {
        var _this = this;
        this._todoListService = _todoListService;
        this._global = _global;
        this._dialog = _dialog;
        this._userSocketService = _userSocketService;
        this._toastr = _toastr;
        this._todoSocketService = _todoSocketService;
        this._route = _route;
        this._router = _router;
        this._location = _location;
        this._todoListValidationService = _todoListValidationService;
        this.scrollItemToTop = true;
        this.userName = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_9__["Cookie"].get('userName');
        this.goBack = function () {
            _this._location.back();
        };
        this.onAddItemBtn = function (list) {
            _this.currentList = list;
            _this.itemTitle = "";
        }; //end of on add item btn
        this.navigateToEditItem = function (listId, itemId) {
            _this._router.navigate(["/" + src_app_globalConfig__WEBPACK_IMPORTED_MODULE_7__["GlobalConfig"].apiVersion + "/lists", ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_9__["Cookie"].get('userId'), listId, itemId, 'edit']);
        }; // end of navigate to edit item
        this.onUpdateAddedItemList = function () {
            _this._todoSocketService.onUpdateAddedItemList().subscribe(function (item) {
                _this.currentList.itemsList.push(item);
            });
        }; //end of on update added list
        this.onDeleteItemFromList = function () {
            _this._todoSocketService.onDeleteItemFromList().subscribe(function (data) {
                var index = _this.currentList.itemsList.findIndex(function (item) { return item.itemId === data.itemId; });
                _this.currentList.itemsList.splice(index, 1);
            });
        }; //end of on delete item from list
        this.onMarkItemOpen = function () {
            _this._todoSocketService.onMarkOpenItem().subscribe(function (data) {
                var item = _this.currentList.itemsList.find(function (item) { return item.itemId === data.itemId; });
                item.isOpen = data.isOpen;
            });
        }; //end of on mark open item from list
        this.onMarkItemDone = function () {
            _this._todoSocketService.onMarkDoneItem().subscribe(function (data) {
                var item = _this.currentList.itemsList.find(function (item) { return item.itemId === data.itemId; });
                item.isDone = data.isDone;
            });
        }; //end of on mark done item from list
        this.onNotifyItemOperation = function () {
            _this._userSocketService.onNotifyItemOperation().subscribe(function (actionData) {
                var message = "";
                switch (actionData.actionType) {
                    case 'itemadded':
                        message = "new item <b>" + actionData.data.title + "</b> to list <b>" + actionData.listName + "</b> has been added by <b>" + actionData.userName + "</b>";
                        break;
                    case 'itemdeleted':
                        message = "item <b>" + actionData.data.title + "</b> has been deleted from <b>" + actionData.listName + "</b> by <b>" + actionData.userName + "</b>";
                        break;
                    case 'markedopen':
                        message = "item <b>" + actionData.data.title + "</b> has been marked open of <b>" + actionData.listName + "</b> by <b>" + actionData.userName + "</b>";
                        break;
                    case 'markedcomplete':
                        message = "item <b>" + actionData.data.title + "</b> has been marked done of <b>" + actionData.listName + "</b> by <b>" + actionData.userName + "</b>";
                        break;
                    default:
                        break;
                }
                _this._dialog.open(src_app_shared_notification_dialog_notification_dialog_component__WEBPACK_IMPORTED_MODULE_11__["NotificationDialogComponent"], {
                    width: '250px',
                    data: message
                });
            });
        };
        /**
         * @description will fetch single list
         * @author Bhaskaar Pawar
         */
        this.getSingleList = function () {
            var userId = _this._route.snapshot.paramMap.get('userId');
            var listId = _this._route.snapshot.paramMap.get('listId');
            _this._todoListService.getSingleList(userId, listId).subscribe(function (apiResponse) {
                if (_this._global.checkResStatus(apiResponse)) {
                    _this.currentList = apiResponse.data;
                }
            }, function (errorMessage) {
                _this._global.navigateToErrorPage("/" + src_app_globalConfig__WEBPACK_IMPORTED_MODULE_7__["GlobalConfig"].apiVersion + "/error", errorMessage);
            });
        }; //end of get Single List
        /**
         * @description this will add the new item to list
         * @author Bhaskar Pawar
         */
        this.addItemToList = function () {
            var userId = _this._route.snapshot.paramMap.get('userId');
            var listId = _this._route.snapshot.paramMap.get('listId');
            var data = {
                title: _this.itemTitle
            };
            _this._todoListService.addItemToList(userId, data, listId).subscribe(function (apiResponse) {
                if (_this._global.checkResStatus(apiResponse)) {
                    _this._toastr.success("" + apiResponse.message, "Success !");
                    _this.scrollItemToTop = false;
                    setTimeout(function () {
                        var data = {
                            id: _this.currentList.id,
                            isUndo: false,
                            listName: _this.currentList.title,
                            userId: ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_9__["Cookie"].get('userId'),
                            userName: ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_9__["Cookie"].get('userName'),
                            actionType: 'itemadded',
                            data: apiResponse.data.item
                        };
                        _this._todoSocketService.emitAddItemToList(data);
                    }, 1000);
                }
            }, function (errorMessage) {
                _this._global.navigateToErrorPage("/" + src_app_globalConfig__WEBPACK_IMPORTED_MODULE_7__["GlobalConfig"].apiVersion + "/error", errorMessage);
            });
        }; // end of add item list
        /**
        * @description will delete item from the list
        * @author Bhaskar Pawar
        * @param {any} itemObj
        */
        this.deleteItemFromList = function (itemObj) {
            var userId = _this._route.snapshot.paramMap.get('userId');
            var listId = _this._route.snapshot.paramMap.get('listId');
            _this._todoListService.deleteItemFromList(userId, listId, itemObj).subscribe(function (apiResponse) {
                if (_this._global.checkResStatus(apiResponse)) {
                    _this._toastr.success("" + apiResponse.message, "Success !");
                    setTimeout(function () {
                        var data = {
                            id: _this.currentList.id,
                            isUndo: false,
                            listName: _this.currentList.title,
                            userId: ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_9__["Cookie"].get('userId'),
                            userName: ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_9__["Cookie"].get('userName'),
                            actionType: 'itemdeleted',
                            data: itemObj
                        };
                        _this._todoSocketService.emitdeleteItemFromList(data);
                    }, 1000);
                    _this.scrollItemToTop = true;
                }
            }, function (errorMessage) {
                _this._global.navigateToErrorPage("/" + src_app_globalConfig__WEBPACK_IMPORTED_MODULE_7__["GlobalConfig"].apiVersion + "/error", errorMessage);
            });
        }; //end of delete item from the list 
        /**
       * @description will mark item open
       * @author Bhaskar Pawar
       * @param {any} itemObj
       */
        this.markItemOpen = function (itemObj) {
            var userId = _this._route.snapshot.paramMap.get('userId');
            var listId = _this._route.snapshot.paramMap.get('listId');
            _this._todoListService.markItemIsOpen(userId, itemObj, listId, itemObj.itemId).subscribe(function (apiResponse) {
                if (_this._global.checkResStatus(apiResponse)) {
                    setTimeout(function () {
                        var data = {
                            id: _this.currentList.id,
                            isUndo: false,
                            listName: _this.currentList.title,
                            userId: ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_9__["Cookie"].get('userId'),
                            userName: ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_9__["Cookie"].get('userName'),
                            actionType: 'markedopen',
                            data: apiResponse.data
                        };
                        _this._todoSocketService.emitMarkOpenItem(data);
                    }, 1000);
                }
            }, function (errorMessage) {
                _this._global.navigateToErrorPage("/" + src_app_globalConfig__WEBPACK_IMPORTED_MODULE_7__["GlobalConfig"].apiVersion + "/error", errorMessage);
            });
        }; //end of mark item open
        /**
       * @description will mark item done
       * @author Bhaskar Pawar
       * @param {any} itemObj
       */
        this.markItemDone = function (itemObj) {
            if (_this._todoListValidationService.validateMarkDoneItem(itemObj)) {
                _this._toastr.error('You have pending sub items !', "Error !");
            }
            else {
                var userId = _this._route.snapshot.paramMap.get('userId');
                var listId = _this._route.snapshot.paramMap.get('listId');
                _this._todoListService.markItemIsDone(userId, itemObj, listId, itemObj.itemId).subscribe(function (apiResponse) {
                    if (_this._global.checkResStatus(apiResponse)) {
                        setTimeout(function () {
                            var data = {
                                id: _this.currentList.id,
                                isUndo: false,
                                listName: _this.currentList.title,
                                userId: ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_9__["Cookie"].get('userId'),
                                userName: ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_9__["Cookie"].get('userName'),
                                actionType: 'markedcomplete',
                                data: apiResponse.data
                            };
                            _this._todoSocketService.emitMarkDoneItem(data);
                        }, 1000);
                    }
                }, function (errorMessage) {
                    _this._global.navigateToErrorPage("/" + src_app_globalConfig__WEBPACK_IMPORTED_MODULE_7__["GlobalConfig"].apiVersion + "/error", errorMessage);
                });
            }
        }; //end of mark item done
    }
    EditListComponent.prototype.ngOnInit = function () {
        this.getSingleList();
        this.onUpdateAddedItemList();
        this.onDeleteItemFromList();
        this.onMarkItemOpen();
        this.onMarkItemDone();
        this.onNotifyItemOperation();
    };
    EditListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-list',
            template: __webpack_require__(/*! ./edit-list.component.html */ "./src/app/todo-list/edit-list/edit-list.component.html"),
            styles: [__webpack_require__(/*! ./edit-list.component.css */ "./src/app/todo-list/edit-list/edit-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_todo_list_service__WEBPACK_IMPORTED_MODULE_2__["TodoListService"], src_app_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"], _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatDialog"],
            src_app_user_user_socket_service__WEBPACK_IMPORTED_MODULE_13__["UserSocketService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"], _todo_list_socket_service__WEBPACK_IMPORTED_MODULE_5__["TodoListSocketService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"], _todolist_validation_service__WEBPACK_IMPORTED_MODULE_10__["TodolistValidationService"]])
    ], EditListComponent);
    return EditListComponent;
}());



/***/ }),

/***/ "./src/app/todo-list/list-dashboard/list-dashboard.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/todo-list/list-dashboard/list-dashboard.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".accordion {\r\n  max-height: 500px;\r\n  overflow-y: auto;\r\n  overflow-x: hidden;\r\n}\r\n\r\nul li:hover {\r\n  cursor: pointer;\r\n}\r\n\r\n.container-fluid {\r\n  background: none;\r\n}\r\n\r\nbody {\r\n  background: lightslategray;\r\n  min-height: 75rem;\r\n  padding-top: 4.5rem;\r\n}\r\n\r\n.ng-valid[required], .ng-valid.required  {\r\n  border-left: 5px solid #42A948; /* green */\r\n}\r\n\r\n.ng-invalid:not(form)  {\r\n  border-left: 5px solid #a94442; /* red */\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9kby1saXN0L2xpc3QtZGFzaGJvYXJkL2xpc3QtZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLDhCQUE4QixFQUFFLFVBQVU7QUFDNUM7O0FBRUE7RUFDRSw4QkFBOEIsRUFBRSxRQUFRO0FBQzFDIiwiZmlsZSI6InNyYy9hcHAvdG9kby1saXN0L2xpc3QtZGFzaGJvYXJkL2xpc3QtZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWNjb3JkaW9uIHtcclxuICBtYXgtaGVpZ2h0OiA1MDBweDtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcclxufVxyXG5cclxudWwgbGk6aG92ZXIge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmNvbnRhaW5lci1mbHVpZCB7XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgYmFja2dyb3VuZDogbGlnaHRzbGF0ZWdyYXk7XHJcbiAgbWluLWhlaWdodDogNzVyZW07XHJcbiAgcGFkZGluZy10b3A6IDQuNXJlbTtcclxufVxyXG5cclxuLm5nLXZhbGlkW3JlcXVpcmVkXSwgLm5nLXZhbGlkLnJlcXVpcmVkICB7XHJcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjNDJBOTQ4OyAvKiBncmVlbiAqL1xyXG59XHJcblxyXG4ubmctaW52YWxpZDpub3QoZm9ybSkgIHtcclxuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICNhOTQ0NDI7IC8qIHJlZCAqL1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/todo-list/list-dashboard/list-dashboard.component.html":
/*!************************************************************************!*\
  !*** ./src/app/todo-list/list-dashboard/list-dashboard.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n\n<head>\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, user-scalable=no\">\n</head>\n\n<body>\n  <header>\n    <app-header [userName]=\"userName\"></app-header>\n  </header>\n  <main role=\"main\">\n    <div class=\"container-fluid\">\n      <div class=\"shadow-lg bg-white\">\n        <div class=\"row\">\n          <div class=\"col-sm m-2 font-weight-bold\">\n            <i class=\"fas fa-inbox\"></i> List Inbox\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-sm\">\n            <div #scrollMe class=\"accordion\" id=\"listAccordionPanel\"\n              [scrollTop]=\"(scrollToListTop) ? 0 : scrollMe.scrollHeight\">\n              <div class=\"card\" *ngFor=\"let listObj of toDolists; let i = index\">\n                <div class=\"card-header\" id=\"headingOne\">\n                  <h2 class=\"mb-0\">\n                    <div class=\"d-flex flex-row flex-wrap\">\n                      <div class=\"flex-fill\">\n                        <button class=\"btn btn-link btn-sm\" type=\"button\" data-toggle=\"collapse\"\n                          [attr.data-target]=\"'#collapse'+i\" aria-expanded=\"true\" aria-controls=\"collapseOne\">\n                          <i class=\"fas fa-list-ul\"></i>\n                          {{listObj.title | uppercase}}\n                        </button>\n                      </div>\n                      <div class=\"flex-fill d-flex justify-content-end\">\n                        <button title=\"edit List\" class=\"btn btn-sm\"\n                          (click)=\"navigateToEditList(listObj.id)\"><i\n                            class=\"fas fa-pencil-alt\"></i></button>\n                        <button title=\"delete list\" class=\"btn btn-sm\" data-toggle=\"modal\"\n                          data-target=\"#confirmDeleteList\" (click)=\"selectedList(listObj)\"><i\n                            class=\"fas fa-trash-alt\"></i></button>\n                      </div>\n                    </div>\n                  </h2>\n                </div>\n\n                <div [attr.id]=\"'collapse'+i\" class=\"collapse in\" aria-labelledby=\"headingOne\"\n                  data-parent=\"#listAccordionPanel\">\n                  <div class=\"card-body\">\n                    <ul class=\"list-group shadow-lg\">\n                      <li class=\"list-group-item\" *ngIf=\"listObj.itemsList.length === 0\">No Items added</li>\n                      <li class=\"list-group-item\" *ngFor=\"let item of listObj.itemsList;let j = index\">\n                        <div class=\"d-flex flex-row flex-wrap\">\n                          <div class=\"flex-fill\" *ngIf=\"!item.isDone\">\n                            <button class=\"btn btn-link\">{{item.title}}</button>\n                          </div>\n                          <div *ngIf=\"item.isDone\">\n                              <i class=\"fas fa-check text-success\">{{item.title}}</i>\n                            </div>\n                          <div class=\"flex-fill d-flex justify-content-end\">\n                            <button title=\"view item\" class=\"btn btn-sm\"\n                              (click)=\"navigateToViewItem(listObj.id, item.itemId)\"><i\n                                class=\"fas fa-eye\"></i></button>\n                          </div>\n                        </div>\n                        <ul class=\"list-group\">\n                          <li class=\"list-group-item\" *ngIf=\"item.subitemsList.length === 0\">No Sub Items added</li>\n                          <li class=\"list-group-item\" *ngFor=\"let subItem of item.subitemsList;let k = index\">\n                            <div class=\"d-flex flex-row flex-wrap\">\n                              <div class=\"flex-fill\" *ngIf=\"!subItem.isDone\">\n                                <button class=\"btn btn-link\">{{subItem.title}}</button>\n                              </div>\n                              <div *ngIf=\"subItem.isDone\">\n                                  <i class=\"fas fa-check text-success\">{{subItem.title}}</i>\n                                </div>\n                            </div>\n\n                          </li>\n                        </ul>\n                      </li>\n                    </ul>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-sm\">\n            <button class=\"btn btn-primary m-2 btn-sm\" [hidden]=\"createListBtnFlg\" data-toggle=\"modal\" data-target=\"#listTitleModal\"\n              (click)=\"onCreateNewList()\">Create New\n              List</button>\n          </div>\n        </div>\n      </div>\n      <div class=\"modal fade\" id=\"listTitleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"listTitleLabel\"\n        aria-hidden=\"true\">\n        <div class=\"modal-dialog\" role=\"document\">\n          <div class=\"modal-content\">\n            <div class=\"modal-header\">\n              <h5 class=\"modal-title\" id=\"listTitleLabel\">List Title</h5>\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                <span aria-hidden=\"true\">&times;</span>\n              </button>\n            </div>\n            <div class=\"modal-body\">\n              <div class=\"form-group\">\n                <label for=\"titleInput\">Title*</label>\n                <input id=\"titleInput\" class=\"form-control\" type=\"text\" name=\"title\" placeholder=\"List Title\"\n                  [(ngModel)]=\"title\" #titleAttr=\"ngModel\" maxlength=\"20\" required>\n              </div>\n            </div>\n            <div class=\"modal-footer\">\n              <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Cancel</button>\n              <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" [disabled]=\"titleAttr.invalid\"\n                (click)=\"createNewList()\">Accept</button>\n            </div>\n          </div>\n        </div>\n      </div>\n      <!--end of modal dialog list-->\n\n      <!-- start of confirmation modal -->\n\n      <div class=\"modal fade\" id=\"confirmDeleteList\" tabindex=\"-1\" role=\"dialog\"\n        aria-labelledby=\"confirmDeleteListLabel\" aria-hidden=\"true\">\n        <div class=\"modal-dialog\" role=\"document\">\n          <div class=\"modal-content\">\n            <div class=\"modal-header\">\n              <h5 class=\"modal-title\" id=\"confirmDeleteListLabel\">Confirmation</h5>\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                <span aria-hidden=\"true\">&times;</span>\n              </button>\n            </div>\n            <div class=\"modal-body\">\n              <p>Are you sure, want to delete the list?</p>\n            </div>\n            <div class=\"modal-footer\">\n              <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Cancel</button>\n              <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"deleteList()\">Confirm</button>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <!-- end of confirmation modal -->\n    </div>\n  </main>\n</body>\n\n</html>"

/***/ }),

/***/ "./src/app/todo-list/list-dashboard/list-dashboard.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/todo-list/list-dashboard/list-dashboard.component.ts ***!
  \**********************************************************************/
/*! exports provided: ListDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListDashboardComponent", function() { return ListDashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _todo_list_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../todo-list.service */ "./src/app/todo-list/todo-list.service.ts");
/* harmony import */ var src_app_global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/global.service */ "./src/app/global.service.ts");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_app_globalConfig__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/globalConfig */ "./src/app/globalConfig.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _todo_list_socket_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../todo-list-socket.service */ "./src/app/todo-list/todo-list-socket.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_shared_shared_module_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/shared-module.service */ "./src/app/shared/shared-module.service.ts");
/* harmony import */ var src_app_user_user_socket_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/user/user-socket.service */ "./src/app/user/user-socket.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_shared_notification_dialog_notification_dialog_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/notification-dialog/notification-dialog.component */ "./src/app/shared/notification-dialog/notification-dialog.component.ts");













var ListDashboardComponent = /** @class */ (function () {
    function ListDashboardComponent(_todoListService, _global, _route, _toastr, _todoSocketService, _router, _sharedModuleService, _userSocketService, _dialog) {
        var _this = this;
        this._todoListService = _todoListService;
        this._global = _global;
        this._route = _route;
        this._toastr = _toastr;
        this._todoSocketService = _todoSocketService;
        this._router = _router;
        this._sharedModuleService = _sharedModuleService;
        this._userSocketService = _userSocketService;
        this._dialog = _dialog;
        this.toDolists = [];
        this.scrollToListTop = true;
        this.createListBtnFlg = false;
        this.userName = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('userName');
        this.friends = [];
        this.onCreateNewList = function () {
            _this.title = "";
        };
        this.selectedList = function (listObj) {
            _this.selectedListObj = listObj;
        };
        this.navigateToEditList = function (listId) {
            _this._router.navigate(["/" + src_app_globalConfig__WEBPACK_IMPORTED_MODULE_5__["GlobalConfig"].apiVersion + "/lists", ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('userId'), listId, 'edit']);
        };
        this.navigateToViewItem = function (listId, itemId) {
            _this._router.navigate(["/" + src_app_globalConfig__WEBPACK_IMPORTED_MODULE_5__["GlobalConfig"].apiVersion + "/lists", ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('userId'), listId, itemId, 'view']);
        };
        /**
         * @description this is to fetch all the  lists from the database
         * @author Bhaskar Pawar
         */
        this.getAllLists = function () {
            var userId = _this._route.snapshot.paramMap.get('userId');
            if (ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('userId') === userId) {
                _this.createListBtnFlg = false;
            }
            else {
                _this.createListBtnFlg = true;
            }
            _this._todoListService.getAllLists(userId).subscribe(function (apiResponse) {
                if (_this._global.checkResStatus(apiResponse)) {
                    _this.toDolists = apiResponse.data;
                }
            }, function (errorMessage) {
                _this._global.navigateToErrorPage("/" + src_app_globalConfig__WEBPACK_IMPORTED_MODULE_5__["GlobalConfig"].apiVersion + "/error", errorMessage);
            });
        };
        this.verifyUserConfirmation = function () {
            _this._todoSocketService.verifyUser()
                .subscribe(function (data) {
                var userDetails = {
                    authToken: ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('authToken'),
                    room: ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('userId') + 'request'
                };
                _this._todoSocketService.setUser(userDetails);
            });
        }; //end of verify user confirmation
        this.updateList = function () {
            _this._todoSocketService.updateList().subscribe(function (data) {
                _this.toDolists.push(data);
            });
        }; // rnd of update list
        this.onNotifyListOperations = function () {
            var userId = _this._route.snapshot.paramMap.get('userId');
            _this._userSocketService.onNotifyListOperation().subscribe(function (actionData) {
                var message = "";
                switch (actionData.actionType) {
                    case 'listcreated':
                        message = "new list <b>" + actionData.data.title + "</b> has been created by <b>" + actionData.userName + "</b>";
                        break;
                    case 'listdeleted':
                        message = "list <b>" + actionData.data.title + "</b> has been deleted by <b>" + actionData.userName + "</b>";
                        break;
                    default:
                        break;
                }
                _this._dialog.open(src_app_shared_notification_dialog_notification_dialog_component__WEBPACK_IMPORTED_MODULE_12__["NotificationDialogComponent"], {
                    width: '250px',
                    data: message
                });
            });
        };
        this.onDeleteList = function () {
            _this._todoSocketService.onDeleteList().subscribe(function (data) {
                var removeIndex = _this.toDolists.findIndex(function (list) { return list.id === data.id; });
                _this.toDolists.splice(removeIndex, 1);
            });
        }; //end of on delete list
        /**
         * @description will add list to DB
         * @author Bhaskar Pawar
         */
        this.createNewList = function () {
            var newListData = {
                title: _this.title,
                owner: ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('userId')
            };
            _this._todoListService.createNewList(newListData).subscribe(function (apiResponse) {
                if (_this._global.checkResStatus(apiResponse)) {
                    _this._toastr.success(apiResponse.message, "Success !");
                    setTimeout(function () {
                        var data = {
                            isUndo: false,
                            userId: ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('userId'),
                            userName: ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('userName'),
                            actionType: 'listcreated',
                            data: apiResponse.data
                        };
                        _this._todoSocketService.emitCreateNewList(data);
                    }, 1000);
                    _this.scrollToListTop = false;
                }
            }, function (errorMessage) {
                _this._global.navigateToErrorPage("/" + src_app_globalConfig__WEBPACK_IMPORTED_MODULE_5__["GlobalConfig"].apiVersion + "/error", errorMessage);
            });
        }; //end of createNewList
        /**
         * @description will delete the users list from DB
         * @author Bhaskar Pawar
         * @param {object} listObj
         * @returns {object} deleted list object
         */
        this.deleteList = function () {
            var userId = _this._route.snapshot.paramMap.get('userId');
            _this._todoListService.deleteList(userId, _this.selectedListObj).subscribe(function (apiResponse) {
                if (_this._global.checkResStatus(apiResponse)) {
                    _this._toastr.success("" + apiResponse.message, "Success !");
                    setTimeout(function () {
                        var data = {
                            isUndo: false,
                            userId: ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('userId'),
                            userName: ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('userName'),
                            actionType: 'listdeleted',
                            data: _this.selectedListObj
                        };
                        _this._todoSocketService.emitDeleteList(data);
                    }, 1000);
                    _this.scrollToListTop = true;
                }
            }, function (errorMessage) {
                _this._global.navigateToErrorPage("/" + src_app_globalConfig__WEBPACK_IMPORTED_MODULE_5__["GlobalConfig"].apiVersion + "/error", errorMessage);
            });
        }; //end of delete list
    }
    ListDashboardComponent.prototype.ngOnInit = function () {
        this.getAllLists();
        this.verifyUserConfirmation();
        this.updateList();
        this.onDeleteList();
        this.onNotifyListOperations();
    };
    ListDashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list-dashboard',
            template: __webpack_require__(/*! ./list-dashboard.component.html */ "./src/app/todo-list/list-dashboard/list-dashboard.component.html"),
            styles: [__webpack_require__(/*! ./list-dashboard.component.css */ "./src/app/todo-list/list-dashboard/list-dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_todo_list_service__WEBPACK_IMPORTED_MODULE_2__["TodoListService"], src_app_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"], _todo_list_socket_service__WEBPACK_IMPORTED_MODULE_7__["TodoListSocketService"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"], src_app_shared_shared_module_service__WEBPACK_IMPORTED_MODULE_9__["SharedModuleService"],
            src_app_user_user_socket_service__WEBPACK_IMPORTED_MODULE_10__["UserSocketService"], _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatDialog"]])
    ], ListDashboardComponent);
    return ListDashboardComponent;
}());



/***/ }),

/***/ "./src/app/todo-list/todo-list-route-guard.service.ts":
/*!************************************************************!*\
  !*** ./src/app/todo-list/todo-list-route-guard.service.ts ***!
  \************************************************************/
/*! exports provided: TodoListRouteGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoListRouteGuardService", function() { return TodoListRouteGuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__);




var TodoListRouteGuardService = /** @class */ (function () {
    function TodoListRouteGuardService(router) {
        this.router = router;
    }
    TodoListRouteGuardService.prototype.canActivate = function (route) {
        if (ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('authToken') === undefined || ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('authToken') === '' || ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('authToken') === null) {
            this.router.navigate(['/']);
            return false;
        }
        else {
            return true;
        }
    };
    TodoListRouteGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], TodoListRouteGuardService);
    return TodoListRouteGuardService;
}());



/***/ }),

/***/ "./src/app/todo-list/todo-list-socket.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/todo-list/todo-list-socket.service.ts ***!
  \*******************************************************/
/*! exports provided: TodoListSocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoListSocketService", function() { return TodoListSocketService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _globalConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../globalConfig */ "./src/app/globalConfig.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





var TodoListSocketService = /** @class */ (function () {
    function TodoListSocketService() {
        var _this = this;
        this.url = "" + _globalConfig__WEBPACK_IMPORTED_MODULE_3__["GlobalConfig"].serverUrl;
        // events to be listened 
        this.verifyUser = function () {
            return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].create(function (observer) {
                _this.socket.on('verify-user', function (data) {
                    observer.next(data);
                }); // end Socket
            }); // end Observable
        }; // end verifyUser
        this.updateList = function () {
            return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].create(function (observer) {
                _this.socket.on('update-list', function (data) {
                    observer.next(data);
                });
            });
        }; // end of update list
        this.onUpdateAddedItemList = function () {
            return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].create(function (observer) {
                _this.socket.on('update-added-item-to-list', function (item) {
                    observer.next(item);
                });
            });
        }; // end of on add item to list
        this.onUpdateAddedSubItemItemsList = function () {
            return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].create(function (observer) {
                _this.socket.on('update-added-sub-item-to-items-list', function (item) {
                    observer.next(item);
                });
            });
        }; // end of on add sub item to items list
        this.onDeleteList = function () {
            return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].create(function (observer) {
                _this.socket.on('update-list-deleted', function (data) {
                    observer.next(data);
                });
            });
        };
        this.onDeleteItemFromList = function () {
            return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].create(function (observer) {
                _this.socket.on('update-deleted-item-list', function (data) {
                    observer.next(data);
                });
            });
        }; //end of on delete item from the list
        this.onDeleteSubItemFromItemsList = function () {
            return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].create(function (observer) {
                _this.socket.on('update-deleted-sub-item-items-list', function (data) {
                    observer.next(data);
                });
            });
        }; //end of on delete item from the list
        this.onMarkDoneSubItem = function () {
            return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].create(function (observer) {
                _this.socket.on('mark-subitem-done-completed', function (data) {
                    observer.next(data);
                });
            });
        }; //end of on mark done sub item listen event
        this.onMarkCloseSubItem = function () {
            return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].create(function (observer) {
                _this.socket.on('mark-subitem-close-completed', function (data) {
                    observer.next(data);
                });
            });
        }; //end of on mark close sub item listen event
        this.onMarkOpenItem = function () {
            return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].create(function (observer) {
                _this.socket.on('mark-item-open-completed', function (data) {
                    observer.next(data);
                });
            });
        }; //end of on mark open item listen event
        this.onMarkCloseItem = function () {
            return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].create(function (observer) {
                _this.socket.on('mark-item-close-completed', function (data) {
                    observer.next(data);
                });
            });
        }; //end of on mark open item listen event
        this.onMarkDoneItem = function () {
            return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].create(function (observer) {
                _this.socket.on('mark-item-done-completed', function (data) {
                    observer.next(data);
                });
            });
        }; //end of on mark done item listen event
        // events to be emitted
        this.setUser = function (authToken) {
            _this.socket.emit("set-user", authToken);
        }; // end setUser
        this.emitCreateNewList = function (data) {
            _this.socket.emit('create-new-list', data);
        };
        /**
         * @description emit event to delete the list
         * @author Bhaskar pawar
         * @param {any} data
         */
        this.emitDeleteList = function (data) {
            _this.socket.emit('delete-list', data);
        }; //end of emit event delete list
        /**
         * @author Bhaskar pawar
         * @description emits the add item to list event
         */
        this.emitAddItemToList = function (data) {
            _this.socket.emit('add-item-to-list', data);
        }; // end of emit add item to list
        /**
         * @author Bhaskar pawar
         * @description emits the edit item to list event
         */
        this.emitEditItemToList = function (data) {
            _this.socket.emit('edit-list-item', data);
        }; // end of emit edit item to list
        /**
         * @author Bhaskar pawar
         * @description emits the add sub item to items list event
         */
        this.emitAddSubItemToItemsList = function (data) {
            _this.socket.emit('add-sub-item-to-items-list', data);
        }; // end of emit add sub item to items list
        /**
         * @author Bhaskar pawar
         * @description emits the delete item from list event
         */
        this.emitdeleteItemFromList = function (data) {
            _this.socket.emit('delete-list-item', data);
        }; // end of emit delet item from list
        /**
        * @author Bhaskar pawar
        * @description emits the delete sub item from items list event
        */
        this.emitdeleteSubItemFromItemsList = function (data) {
            _this.socket.emit('delete-sub-item-from-items-list', data);
        }; //end of delete sub item from items list emit
        /**
          * @author Bhaskar pawar
          * @description emits the item mark done event
          */
        this.emitMarkOpenItem = function (data) {
            _this.socket.emit('mark-item-open', data);
        }; //end of emit mark done Item
        /**
          * @author Bhaskar pawar
          * @description emits the item mark close event
          */
        this.emitMarkCloseItem = function (data) {
            _this.socket.emit('mark-item-close', data);
        }; //end of emit mark close Item
        /**
        * @author Bhaskar pawar
        * @description emits the item mark done event
        */
        this.emitMarkDoneItem = function (data) {
            _this.socket.emit('mark-item-done', data);
        }; //end of emit mark done Item
        /**
        * @author Bhaskar pawar
        * @description emits the sub item mark done event
        */
        this.emitMarkDoneSubItem = function (data) {
            _this.socket.emit('mark-subitem-done', data);
        }; //end of emit mark done subItem
        /**
        * @author Bhaskar pawar
        * @description emits the sub item mark done event
        */
        this.emitMarkCloseSubItem = function (data) {
            _this.socket.emit('mark-subitem-close', data);
        }; //end of emit mark done subItem
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_2__(this.url);
    }
    TodoListSocketService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TodoListSocketService);
    return TodoListSocketService;
}());



/***/ }),

/***/ "./src/app/todo-list/todo-list.module.ts":
/*!***********************************************!*\
  !*** ./src/app/todo-list/todo-list.module.ts ***!
  \***********************************************/
/*! exports provided: TodoListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoListModule", function() { return TodoListModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng_pick_datetime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-pick-datetime */ "./node_modules/ng-pick-datetime/picker.js");
/* harmony import */ var _list_dashboard_list_dashboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./list-dashboard/list-dashboard.component */ "./src/app/todo-list/list-dashboard/list-dashboard.component.ts");
/* harmony import */ var _globalConfig__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../globalConfig */ "./src/app/globalConfig.ts");
/* harmony import */ var _todo_list_route_guard_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./todo-list-route-guard.service */ "./src/app/todo-list/todo-list-route-guard.service.ts");
/* harmony import */ var _edit_item_edit_item_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./edit-item/edit-item.component */ "./src/app/todo-list/edit-item/edit-item.component.ts");
/* harmony import */ var _edit_list_edit_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./edit-list/edit-list.component */ "./src/app/todo-list/edit-list/edit-list.component.ts");
/* harmony import */ var _view_item_view_item_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./view-item/view-item.component */ "./src/app/todo-list/view-item/view-item.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");















var TodoListModule = /** @class */ (function () {
    function TodoListModule() {
    }
    TodoListModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_list_dashboard_list_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["ListDashboardComponent"], _edit_item_edit_item_component__WEBPACK_IMPORTED_MODULE_11__["EditItemComponent"], _edit_list_edit_list_component__WEBPACK_IMPORTED_MODULE_12__["EditListComponent"], _view_item_view_item_component__WEBPACK_IMPORTED_MODULE_13__["ViewItemComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_14__["SharedModule"],
                ng_pick_datetime__WEBPACK_IMPORTED_MODULE_7__["OwlDateTimeModule"],
                ng2_file_upload__WEBPACK_IMPORTED_MODULE_2__["FileUploadModule"],
                ng_pick_datetime__WEBPACK_IMPORTED_MODULE_7__["OwlNativeDateTimeModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild([
                    { path: _globalConfig__WEBPACK_IMPORTED_MODULE_9__["GlobalConfig"].apiVersion + "/lists/:userId/all", component: _list_dashboard_list_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["ListDashboardComponent"], canActivate: [_todo_list_route_guard_service__WEBPACK_IMPORTED_MODULE_10__["TodoListRouteGuardService"]] },
                    { path: _globalConfig__WEBPACK_IMPORTED_MODULE_9__["GlobalConfig"].apiVersion + "/lists/:userId/:listId/edit", component: _edit_list_edit_list_component__WEBPACK_IMPORTED_MODULE_12__["EditListComponent"], canActivate: [_todo_list_route_guard_service__WEBPACK_IMPORTED_MODULE_10__["TodoListRouteGuardService"]] },
                    { path: _globalConfig__WEBPACK_IMPORTED_MODULE_9__["GlobalConfig"].apiVersion + "/lists/:userId/:listId/:itemId/edit", component: _edit_item_edit_item_component__WEBPACK_IMPORTED_MODULE_11__["EditItemComponent"], canActivate: [_todo_list_route_guard_service__WEBPACK_IMPORTED_MODULE_10__["TodoListRouteGuardService"]] },
                    { path: _globalConfig__WEBPACK_IMPORTED_MODULE_9__["GlobalConfig"].apiVersion + "/lists/:userId/:listId/:itemId/view", component: _view_item_view_item_component__WEBPACK_IMPORTED_MODULE_13__["ViewItemComponent"], canActivate: [_todo_list_route_guard_service__WEBPACK_IMPORTED_MODULE_10__["TodoListRouteGuardService"]] }
                ])
            ]
        })
    ], TodoListModule);
    return TodoListModule;
}());



/***/ }),

/***/ "./src/app/todo-list/todo-list.service.ts":
/*!************************************************!*\
  !*** ./src/app/todo-list/todo-list.service.ts ***!
  \************************************************/
/*! exports provided: TodoListService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoListService", function() { return TodoListService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var rxjs_add_operator_do__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/do */ "./node_modules/rxjs-compat/_esm5/add/operator/do.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm5/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var rxjs_add_observable_throw__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/add/observable/throw */ "./node_modules/rxjs-compat/_esm5/add/observable/throw.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _globalConfig__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../globalConfig */ "./src/app/globalConfig.ts");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_9__);










var TodoListService = /** @class */ (function () {
    function TodoListService(_http) {
        var _this = this;
        this._http = _http;
        this.baseUrl = _globalConfig__WEBPACK_IMPORTED_MODULE_8__["GlobalConfig"].serverUrl + "/" + _globalConfig__WEBPACK_IMPORTED_MODULE_8__["GlobalConfig"].apiVersion + "/lists";
        this.clientBaseUrl = _globalConfig__WEBPACK_IMPORTED_MODULE_8__["GlobalConfig"].clientUrl + "/" + _globalConfig__WEBPACK_IMPORTED_MODULE_8__["GlobalConfig"].apiVersion + "/lists";
        /**
         * @description get all the list from backend
         * @author Bhaskar Pawar
         * @param {any} userId
         */
        this.getAllLists = function (userId) {
            return _this._http.get(_this.baseUrl + "/" + userId + "/all?authToken=" + ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_9__["Cookie"].get('authToken')).catch(_this.handleError);
        }; //end of get all the  lists
        /**
         * @description request to fetch single list from db
         * @author Bhaskar Pawar
         * @param {any} userId
         * @param {any} listId
         */
        this.getSingleList = function (userId, listId) {
            return _this._http.get(_this.baseUrl + "/" + userId + "/" + listId + "/edit?authToken=" + ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_9__["Cookie"].get('authToken')).catch(_this.handleError);
        };
        /**
         * @description will request server to create a new list
         * @author Bhaskar Pawar
         * @returns {response} http
         */
        this.createNewList = function (newListData) {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
                .set('title', newListData.title)
                .set('owner', newListData.owner);
            return _this._http.post(_this.baseUrl + "/create?authToken=" + ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_9__["Cookie"].get('authToken'), params).catch(_this.handleError);
        };
        /**
         * @description requests sever to delete the list
         * @author Bhaskar Pawar
         * @param {any} userId
         * @param {any} listData
         * @returns {Response} http error response
         */
        this.deleteList = function (userId, listData) {
            return _this._http.post(_this.baseUrl + "/" + userId + "/" + listData.id + "/delete?authToken=" + ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_9__["Cookie"].get('authToken'), listData).catch(_this.handleError);
        }; //end of delete list
        /**
         * @description sends request to add the item to list
         * @author Bhaskar Pawar
         * @returns {Response}
         * @param {any} userId
         * @param {any} data
         * @param {any} listId
         */
        this.addItemToList = function (userId, data, listId) {
            return _this._http.post(_this.baseUrl + "/" + userId + "/" + listId + "/add?authToken=" + ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_9__["Cookie"].get('authToken'), data).catch(_this.handleError);
        }; //end of addItemToList
        /**
         * @description sends request to add the sub item to item
         * @author Bhaskar Pawar
         * @returns {Response}
         * @param {any} userId
         * @param {any} data
         * @param {any} listId
         * @param {any} itemId
         */
        this.addSubItemToItemsList = function (userId, data, listId, itemId) {
            return _this._http.post(_this.baseUrl + "/" + userId + "/" + listId + "/" + itemId + "/add?authToken=" + ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_9__["Cookie"].get('authToken'), data).catch(_this.handleError);
        }; //end of add sub item to item
        /**
         * @description sends request to delete item from list
         * @author Bhaskar Pawar
         * @returns {Response}
         * @param {any} userId
         * @param {any} listId
         */
        this.deleteItemFromList = function (userId, listId, item) {
            return _this._http.post(_this.baseUrl + "/" + userId + "/" + listId + "/" + item.itemId + "/delete?authToken=" + ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_9__["Cookie"].get('authToken'), item).catch(_this.handleError);
        }; //end of delete item from list
        /**
       * @description sends request to delete sub item from items list
       * @author Bhaskar Pawar
       * @returns {Response}
       * @param {any} userId
       * @param {any} listId
       * @param {any} itemId
       * @param {any} subItemObj
       */
        this.deleteSubItemFromItemsList = function (userId, listId, itemId, subItemObj) {
            return _this._http.post(_this.baseUrl + "/" + userId + "/" + listId + "/" + itemId + "/" + subItemObj.subItemId + "/delete?authToken=" + ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_9__["Cookie"].get('authToken'), subItemObj).catch(_this.handleError);
        }; //end of delete sub item from the items list
        /**
         * @author Bhaskar Pawar
         * @description will fetch the item from list
         * @param {any} userId
         * @param {any} listId
         * @param {any} itemId
         */
        this.getSingleItem = function (userId, listId, itemId) {
            return _this._http.get(_this.baseUrl + "/" + userId + "/" + listId + "/" + itemId + "/edit?authToken=" + ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_9__["Cookie"].get('authToken')).catch(_this.handleError);
        }; //end of get single item
        this.uploadFile = function (userId, listId, itemId, fileData) {
            return _this._http.post(_this.baseUrl + "/" + userId + "/" + listId + "/" + itemId + "/upload?authToken=" + ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_9__["Cookie"].get('authToken'), fileData).catch(_this.handleError);
        };
        /**
         * @author Bhaskar Pawar
         * @description request to edit the iten to the list
         * @param {any} userId
         * @param {any} itemData
         * @param {any} listId
         * @param {any} itemId
         * @returns {Response} response
         */
        this.editItemInList = function (userId, itemData, listId, itemId) {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
                .set('title', itemData.title)
                .set('description', itemData.description)
                .set('dueDate', itemData.dueDate)
                .set('fileName', itemData.fileName)
                .set('fileLocation', itemData.fileLocation);
            return _this._http.put(_this.baseUrl + "/" + userId + "/" + listId + "/" + itemId + "/edit?authToken=" + ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_9__["Cookie"].get('authToken'), params).catch(_this.handleError);
        }; // end of edit item to list
        /**
         * @author Bhaskar Pawar
         * @description request to mark item open
         * @param {any} userId
         * @param {any} data
         * @param {any} listId
         * @param {any} itemId
         * @returns {Response} response
         */
        this.markItemIsOpen = function (userId, data, listId, itemId) {
            return _this._http.post(_this.baseUrl + "/" + userId + "/" + listId + "/" + itemId + "/markopen?authToken=" + ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_9__["Cookie"].get('authToken'), data).catch(_this.handleError);
        }; // end of mark item open
        /**
         * @author Bhaskar Pawar
         * @description request to mark item close
         * @param {any} userId
         * @param {any} data
         * @param {any} listId
         * @param {any} itemId
         * @returns {Response} response
         */
        this.markItemIsClose = function (userId, data, listId, itemId) {
            return _this._http.post(_this.baseUrl + "/" + userId + "/" + listId + "/" + itemId + "/markclose?authToken=" + ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_9__["Cookie"].get('authToken'), data).catch(_this.handleError);
        }; // end of mark item close
        /**
         * @author Bhaskar Pawar
         * @description request to mark the item done
         * @param {any} userId
         * @param {any} data
         * @param {any} listId
         * @param {any} itemId
         * @returns {Response} response
         */
        this.markItemIsDone = function (userId, data, listId, itemId) {
            return _this._http.post(_this.baseUrl + "/" + userId + "/" + listId + "/" + itemId + "/markdone?authToken=" + ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_9__["Cookie"].get('authToken'), data).catch(_this.handleError);
        }; //end of mark item done
        /**
         * @description requests server to mark subitem done
         * @author Bhaskar Pawar
         *  @param {any} userId
         * @param {any} data
         * @param {any} listId
         * @param {any} itemId
         * @param {any} subItemId
         * @returns {Response} response
         */
        this.markSubItemDone = function (userId, data, listId, itemId, subItemId) {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
                .set('isDone', data.isDone);
            return _this._http.post(_this.baseUrl + "/" + userId + "/" + listId + "/" + itemId + "/" + subItemId + "/markdone?authToken=" + ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_9__["Cookie"].get('authToken'), params).catch(_this.handleError);
        }; //end of mark sub item done
        /**
        * @description requests server to mark subitem close
        * @author Bhaskar Pawar
        * @param {any} userId
        * @param {any} data
        * @param {any} listId
        * @param {any} itemId
        * @param {any} subItemId
        * @returns {Response} response
        */
        this.markSubItemClose = function (userId, data, listId, itemId, subItemId) {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
                .set('isDone', data.isDone);
            return _this._http.post(_this.baseUrl + "/" + userId + "/" + listId + "/" + itemId + "/" + subItemId + "/markclose?authToken=" + ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_9__["Cookie"].get('authToken'), params).catch(_this.handleError);
        }; //end of mark sub item close
    }
    /**
     * @author Bhaskar Pawar
     * @description this is to handle http error repsonse
     * @param err
     */
    TodoListService.prototype.handleError = function (err) {
        var errorMessage = '';
        if (err.error instanceof Error) {
            errorMessage = "An error occurred: " + err.error.message;
        }
        else {
            errorMessage = "Server returned code: " + err.status + ", error message is: " + err.message + ": (" + err.error.message + ")";
        } // end condition *if
        return rxjs__WEBPACK_IMPORTED_MODULE_7__["Observable"].throw(errorMessage);
    }; // END handleError
    TodoListService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], TodoListService);
    return TodoListService;
}());



/***/ }),

/***/ "./src/app/todo-list/todolist-validation.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/todo-list/todolist-validation.service.ts ***!
  \**********************************************************/
/*! exports provided: TodolistValidationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodolistValidationService", function() { return TodolistValidationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TodolistValidationService = /** @class */ (function () {
    function TodolistValidationService() {
        this.validateMarkDoneItem = function (itemObj) {
            var flag = false;
            if (itemObj.subitemsList.length > 0) {
                var totalLength = itemObj.subitemsList.length;
                var isDoneLength = itemObj.subitemsList.filter(function (subItem) { return subItem.isDone === true; }).length;
                if (totalLength === isDoneLength) {
                    flag = false;
                }
                else {
                    flag = true;
                }
            }
            return flag;
        };
        this.validateIsNochanges = function (oldValues, newValues, newFileName) {
            var auditString = "";
            if (oldValues.title !== newValues.title) {
                auditString = auditString + "title, ";
            }
            if (oldValues.description !== newValues.description) {
                auditString = auditString + "description, ";
            }
            if (oldValues.dueDate !== newValues.dueDate) {
                auditString = auditString + "dueDate,";
            }
            if (newFileName !== undefined && (oldValues.fileName !== newFileName)) {
                auditString = auditString + "file Name,";
            }
            return auditString;
        };
    }
    TodolistValidationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TodolistValidationService);
    return TodolistValidationService;
}());



/***/ }),

/***/ "./src/app/todo-list/view-item/view-item.component.css":
/*!*************************************************************!*\
  !*** ./src/app/todo-list/view-item/view-item.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n    background: lightslategray;\r\n    min-height: 75rem;\r\n    padding-top: 4.5rem;\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9kby1saXN0L3ZpZXctaXRlbS92aWV3LWl0ZW0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDBCQUEwQjtJQUMxQixpQkFBaUI7SUFDakIsbUJBQW1CO0VBQ3JCIiwiZmlsZSI6InNyYy9hcHAvdG9kby1saXN0L3ZpZXctaXRlbS92aWV3LWl0ZW0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xyXG4gICAgYmFja2dyb3VuZDogbGlnaHRzbGF0ZWdyYXk7XHJcbiAgICBtaW4taGVpZ2h0OiA3NXJlbTtcclxuICAgIHBhZGRpbmctdG9wOiA0LjVyZW07XHJcbiAgfVxyXG4gICJdfQ== */"

/***/ }),

/***/ "./src/app/todo-list/view-item/view-item.component.html":
/*!**************************************************************!*\
  !*** ./src/app/todo-list/view-item/view-item.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n\n<head>\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, user-scalable=no\">\n</head>\n\n<body>\n  <header>\n    <app-header [userName]=\"userName\"></app-header>\n  </header>\n  <main role=\"main\">\n    <div class=\"card\" *ngIf=\"currentItem\">\n      <div class=\"card-body\">\n        <h5 class=\"card-title\">{{currentItem.title}}</h5>\n        <p class=\"card-text\" *ngIf=\"currentItem.description\">{{currentItem.description}}</p>\n        <p class=\"card-text\" *ngIf=\"!currentItem.description\">no description added</p>\n      </div>\n      <ul class=\"list-group list-group-flush\">\n        <li class=\"list-group-item\">\n          <div class=\"row flex-wrap\">\n            <div class=\"col-sm font-weight-bold\">\n              Start Date:\n            </div>\n            <div class=\"col-sm d-flex justify-content-end text-primary\">\n              {{currentItem.startDate | date: 'dd/MM/yyyy HH:mm:ss'}}\n            </div>\n          </div>\n        </li>\n        <li class=\"list-group-item\">\n          <div class=\"row flex-wrap\">\n            <div class=\"col-sm font-weight-bold\">\n              Due Date:\n            </div>\n            <div class=\"col-sm d-flex justify-content-end text-primary\">\n              {{currentItem.dueDate | date: 'dd/MM/yyyy HH:mm:ss'}}\n            </div>\n          </div>\n        </li>\n        <li class=\"list-group-item\">\n          <div class=\"row flex-wrap\">\n            <div class=\"col-sm font-weight-bold\">\n              end Date:\n            </div>\n            <div class=\"col-sm d-flex justify-content-end text-primary\">\n              {{currentItem.endDate | date: 'dd/MM/yyyy HH:mm:ss'}}\n            </div>\n          </div>\n        </li>\n        <li class=\"list-group-item\">\n            <div class=\"row flex-wrap\">\n              <div class=\"col-sm font-weight-bold\">\n                status: \n              </div>\n              <div class=\"col-sm d-flex justify-content-end text-primary\">\n                <label *ngIf=\"currentItem.isDone\" class=\"text-success\">COMPLETED</label>\n                <label *ngIf=\"currentItem.isOpen\" class=\"text-primary\">OPEN</label>\n              </div>\n            </div>\n          </li>\n      </ul>\n      <div class=\"card-body\">\n        <button class=\"btn btn-secondary btn-sm\" (click)=\"goBack()\"><i class=\"fas fa-arrow-left\"></i> Back</button>\n      </div>\n    </div>\n  </main>\n</body>\n\n</html>"

/***/ }),

/***/ "./src/app/todo-list/view-item/view-item.component.ts":
/*!************************************************************!*\
  !*** ./src/app/todo-list/view-item/view-item.component.ts ***!
  \************************************************************/
/*! exports provided: ViewItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewItemComponent", function() { return ViewItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_app_globalConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/globalConfig */ "./src/app/globalConfig.ts");
/* harmony import */ var src_app_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/global.service */ "./src/app/global.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _todo_list_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../todo-list.service */ "./src/app/todo-list/todo-list.service.ts");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_7__);








var ViewItemComponent = /** @class */ (function () {
    function ViewItemComponent(_location, _global, _route, _todoListService) {
        var _this = this;
        this._location = _location;
        this._global = _global;
        this._route = _route;
        this._todoListService = _todoListService;
        this.userName = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_7__["Cookie"].get('userName');
        this.goBack = function () {
            _this._location.back();
        };
        /**
         * @author Bhaskar Pawar
         * @description will fetch current item
         */
        this.getSingleItem = function () {
            var userId = _this._route.snapshot.paramMap.get('userId');
            var listId = _this._route.snapshot.paramMap.get('listId');
            var itemId = _this._route.snapshot.paramMap.get('itemId');
            _this._todoListService.getSingleItem(userId, listId, itemId).subscribe(function (apiResponse) {
                _this.currentItem = apiResponse.data;
            }, function (errorMessage) {
                _this._global.navigateToErrorPage("/" + src_app_globalConfig__WEBPACK_IMPORTED_MODULE_3__["GlobalConfig"].apiVersion + "/error", errorMessage);
            });
        }; // end of get single Item
    }
    ViewItemComponent.prototype.ngOnInit = function () {
        this.getSingleItem();
    };
    ViewItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-view-item',
            template: __webpack_require__(/*! ./view-item.component.html */ "./src/app/todo-list/view-item/view-item.component.html"),
            styles: [__webpack_require__(/*! ./view-item.component.css */ "./src/app/todo-list/view-item/view-item.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"], src_app_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _todo_list_service__WEBPACK_IMPORTED_MODULE_6__["TodoListService"]])
    ], ViewItemComponent);
    return ViewItemComponent;
}());



/***/ }),

/***/ "./src/app/user/activity/activity.component.css":
/*!******************************************************!*\
  !*** ./src/app/user/activity/activity.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n    background: lightslategray;\r\n    min-height: 75rem;\r\n    padding-top: 4.5rem;\r\n  }\r\n\r\n  ul {\r\n    max-height: 600px;\r\n    overflow-x: hidden;\r\n    overflow-y: auto;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9hY3Rpdml0eS9hY3Rpdml0eS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksMEJBQTBCO0lBQzFCLGlCQUFpQjtJQUNqQixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvYWN0aXZpdHkvYWN0aXZpdHkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xyXG4gICAgYmFja2dyb3VuZDogbGlnaHRzbGF0ZWdyYXk7XHJcbiAgICBtaW4taGVpZ2h0OiA3NXJlbTtcclxuICAgIHBhZGRpbmctdG9wOiA0LjVyZW07XHJcbiAgfVxyXG5cclxuICB1bCB7XHJcbiAgICBtYXgtaGVpZ2h0OiA2MDBweDtcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/user/activity/activity.component.html":
/*!*******************************************************!*\
  !*** ./src/app/user/activity/activity.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n\n<head>\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, user-scalable=no\">\n</head>\n\n<body>\n  <header>\n    <app-header [userName]=\"userName\"></app-header>\n  </header>\n  <main role=\"main\">\n    <div class=\"container-fluid\">\n      <div class=\"row shadow-lg\">\n        <div class=\"col-sm\">\n          <ul class=\"list-group\">\n            <li class=\"list-group-item\" *ngIf=\"activities.length === 0\">No activities found</li>\n            <li class=\"list-group-item\" *ngFor=\"let activity of activities;let i = index\">\n              <div class=\"d-flex flex-row flex-wrap\">\n                <div class=\"flex-fill\">\n                  <form class=\"form-inline\">\n                    <app-first-char [firstChar]=\"activity.userName[0]\"></app-first-char>\n                    <label class=\"ml-2\">{{activity.userName}}\n                    </label>\n                  </form>\n                </div>\n                <div class=\"flex-fill\">\n                  <p [innerHtml]=\"activity.message\"></p>\n                </div>\n                <div class=\"flex-fill d-flex justify-content-end\">\n                  <button class=\"btn btn-primary btn-sm\" type=\"button\" (click)=\"undoActivity(activity)\">Undo</button>\n                </div>\n\n              </div>\n\n            </li>\n          </ul>\n        </div>\n      </div>\n      \n    </div>\n   \n  </main>\n</body>\n\n</html>"

/***/ }),

/***/ "./src/app/user/activity/activity.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/user/activity/activity.component.ts ***!
  \*****************************************************/
/*! exports provided: ActivityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityComponent", function() { return ActivityComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_app_shared_shared_module_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/shared-module.service */ "./src/app/shared/shared-module.service.ts");
/* harmony import */ var src_app_global_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/global.service */ "./src/app/global.service.ts");
/* harmony import */ var src_app_globalConfig__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/globalConfig */ "./src/app/globalConfig.ts");
/* harmony import */ var src_app_todo_list_todo_list_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/todo-list/todo-list.service */ "./src/app/todo-list/todo-list.service.ts");
/* harmony import */ var src_app_todo_list_todo_list_socket_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/todo-list/todo-list-socket.service */ "./src/app/todo-list/todo-list-socket.service.ts");
/* harmony import */ var _user_socket_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../user-socket.service */ "./src/app/user/user-socket.service.ts");










var ActivityComponent = /** @class */ (function () {
    function ActivityComponent(_route, _sharedModuleService, _global, _todoListService, _router, _todoListSocketService, _userSocketService) {
        var _this = this;
        this._route = _route;
        this._sharedModuleService = _sharedModuleService;
        this._global = _global;
        this._todoListService = _todoListService;
        this._router = _router;
        this._todoListSocketService = _todoListSocketService;
        this._userSocketService = _userSocketService;
        this.activities = [];
        this.userName = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('userName');
        this.onDeleteActivity = function () {
            _this._userSocketService.onDeleteActivity().subscribe(function (activityId) {
                var index = _this.activities.findIndex(function (activity) { return activity.activityId === activityId; });
                _this.activities.splice(index, 1);
            });
        }; //end of on delete activity
        /**
         * @author Bhaskar Pawar
         * @description get activities from the server
         */
        this.getActivities = function () {
            var userId = _this._route.snapshot.paramMap.get('userId');
            _this._sharedModuleService.getActivities(userId).subscribe(function (apiResponse) {
                if (_this._global.checkResStatus(apiResponse)) {
                    _this.activities = apiResponse.data;
                    _this.activities.forEach(function (activity) { return console.log(activity); });
                }
            }, function (errorMessage) {
                _this._global.navigateToErrorPage("/" + src_app_globalConfig__WEBPACK_IMPORTED_MODULE_6__["GlobalConfig"].apiVersion + "/error", errorMessage);
            });
        }; //end of get activities
        this.undoActivity = function (activity) {
            _this.undoActions(activity);
        };
        this.undoOnPressControlZ = function (event) {
            if (event.ctrlKey && (event.key === 'z' || event.key === 'Z')) {
                var activity = _this.activities[_this.activities.length - 1];
                _this.undoActions(activity);
            }
        };
        this.undoActions = function (activity) {
            switch (activity.undoActivity) {
                case 'deletelist':
                    _this._todoListService.deleteList(activity.userId, activity.listData).subscribe(function (apiResponse) {
                        if (_this._global.checkResStatus(apiResponse)) {
                            var data = {
                                isUndo: true,
                                data: activity.listData
                            };
                            _this._todoListSocketService.emitDeleteList(data);
                        }
                    });
                    break;
                case 'createlist':
                    _this._todoListService.createNewList(activity.listData).subscribe(function (apiResponse) {
                        if (_this._global.checkResStatus(apiResponse)) {
                            var data = {
                                isUndo: true,
                                data: apiResponse.data
                            };
                            _this._todoListSocketService.emitCreateNewList(data);
                        }
                    });
                    break;
                case 'deleteItemFromList':
                    console.log(activity.listData);
                    _this._todoListService.deleteItemFromList(activity.userId, activity.listData, activity.itemData).subscribe(function (apiResponse) {
                        if (_this._global.checkResStatus(apiResponse)) {
                            var data = {
                                isUndo: true,
                                data: activity.itemData
                            };
                            _this._todoListSocketService.emitdeleteItemFromList(data);
                        }
                    });
                    break;
                case 'addItemToList':
                    _this._todoListService.addItemToList(activity.userId, activity.itemData, activity.listData).subscribe(function (apiResponse) {
                        if (_this._global.checkResStatus(apiResponse)) {
                            var data = {
                                isUndo: true,
                                data: apiResponse.data.item
                            };
                            _this._todoListSocketService.emitAddItemToList(data);
                        }
                    });
                    break;
                case 'markedItemOpen':
                    _this._todoListService.markItemIsOpen(activity.userId, activity.itemData, activity.listData, activity.itemData.itemId).subscribe(function (apiResponse) {
                        if (_this._global.checkResStatus(apiResponse)) {
                            var data = {
                                isUndo: true,
                                data: apiResponse.data
                            };
                            _this._todoListSocketService.emitMarkOpenItem(data);
                        }
                    });
                    break;
                case 'markedItemDone':
                    _this._todoListService.markItemIsDone(activity.userId, activity.itemData, activity.listData, activity.itemData.itemId).subscribe(function (apiResponse) {
                        if (_this._global.checkResStatus(apiResponse)) {
                            var data = {
                                isUndo: true,
                                data: apiResponse.data
                            };
                            _this._todoListSocketService.emitMarkDoneItem(data);
                        }
                    });
                    break;
                case 'markedItemClose':
                    _this._todoListService.markItemIsClose(activity.userId, activity.itemData, activity.listData, activity.itemData.itemId).subscribe(function (apiResponse) {
                    });
                    break;
                case 'addSubItem':
                    _this._todoListService.addSubItemToItemsList(activity.userId, activity.subItemData, activity.listData, activity.itemData).subscribe(function (apiResponse) {
                        if (_this._global.checkResStatus(apiResponse)) {
                            var data = {
                                isUndo: true,
                                data: apiResponse.data.subItem
                            };
                            _this._todoListSocketService.emitAddSubItemToItemsList(data);
                        }
                    });
                    break;
                case 'deleteSubItem':
                    _this._todoListService.deleteSubItemFromItemsList(activity.userId, activity.listData, activity.itemData, activity.subItemData).subscribe(function (apiResponse) {
                        if (_this._global.checkResStatus(apiResponse)) {
                            var data = {
                                isUndo: true,
                                data: activity.subItemData
                            };
                            _this._todoListSocketService.emitdeleteItemFromList(data);
                        }
                    });
                    break;
                case 'markedSubItemDone':
                    _this._todoListService.markSubItemDone(activity.userId, activity.subItemData, activity.listData, activity.itemData, activity.subItemData.subItemId).subscribe(function (apiResponse) {
                        if (_this._global.checkResStatus(apiResponse)) {
                            var data = {
                                isUndo: true,
                                data: apiResponse.data
                            };
                            _this._todoListSocketService.emitMarkDoneSubItem(data);
                        }
                    });
                    break;
                case 'markedSubItemClose':
                    _this._todoListService.markSubItemClose(activity.userId, activity.subItemData, activity.listData, activity.itemData, activity.subItemData.subItemId).subscribe(function (apiResponse) {
                    });
                    break;
                case 'undoEditItem':
                    _this._todoListService.editItemInList(activity.userId, activity.itemData.oldData, activity.listData, activity.itemData.itemId).subscribe(function (apiResponse) {
                    });
                    break;
            }
            _this._sharedModuleService.deleteActivity(activity.userId, activity.activityId).subscribe(function (apiResponse) {
                _this._userSocketService.emitDeleteActivity(activity.activityId);
            });
        };
    }
    ActivityComponent.prototype.ngOnInit = function () {
        this.getActivities();
        this.onDeleteActivity();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:keydown', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ActivityComponent.prototype, "undoOnPressControlZ", void 0);
    ActivityComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-activity',
            template: __webpack_require__(/*! ./activity.component.html */ "./src/app/user/activity/activity.component.html"),
            styles: [__webpack_require__(/*! ./activity.component.css */ "./src/app/user/activity/activity.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], src_app_shared_shared_module_service__WEBPACK_IMPORTED_MODULE_4__["SharedModuleService"],
            src_app_global_service__WEBPACK_IMPORTED_MODULE_5__["GlobalService"], src_app_todo_list_todo_list_service__WEBPACK_IMPORTED_MODULE_7__["TodoListService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            src_app_todo_list_todo_list_socket_service__WEBPACK_IMPORTED_MODULE_8__["TodoListSocketService"], _user_socket_service__WEBPACK_IMPORTED_MODULE_9__["UserSocketService"]])
    ], ActivityComponent);
    return ActivityComponent;
}());



/***/ }),

/***/ "./src/app/user/find-friends/find-friends.component.css":
/*!**************************************************************!*\
  !*** ./src/app/user/find-friends/find-friends.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n    background: lightslategray;\r\n    min-height: 75rem;\r\n    padding-top: 4.5rem;\r\n  }\r\n  \r\n  ul {\r\n    max-height: 600px;\r\n    overflow-x: hidden;\r\n    overflow-y: auto;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9maW5kLWZyaWVuZHMvZmluZC1mcmllbmRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwwQkFBMEI7SUFDMUIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvdXNlci9maW5kLWZyaWVuZHMvZmluZC1mcmllbmRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcclxuICAgIGJhY2tncm91bmQ6IGxpZ2h0c2xhdGVncmF5O1xyXG4gICAgbWluLWhlaWdodDogNzVyZW07XHJcbiAgICBwYWRkaW5nLXRvcDogNC41cmVtO1xyXG4gIH1cclxuICBcclxuICB1bCB7XHJcbiAgICBtYXgtaGVpZ2h0OiA2MDBweDtcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/user/find-friends/find-friends.component.html":
/*!***************************************************************!*\
  !*** ./src/app/user/find-friends/find-friends.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n\n<head>\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, user-scalable=no\">\n</head>\n\n<body>\n  <header>\n    <app-header [userName]=\"userName\"></app-header>\n  </header>\n  <main role=\"main\">\n    <div class=\"container-fluid\">\n      <div class=\"row shadow-lg\">\n        <div class=\"col-sm\">\n          <ul class=\"list-group\">\n            <li class=\"list-item-group\" *ngIf=\"usersData.length === 0\">No users in the system</li>\n            <li class=\"list-group-item\" *ngFor=\"let user of usersData;let i = index\" (click) = \"onSelectUser(user)\">\n              <div class=\"d-flex flex-row flex-wrap\">\n                <div class=\"flex-fill\">\n                  <form class=\"form-inline\">\n                    <app-first-char [firstChar]=\"user.fullName[0]\"></app-first-char>\n                    <label class=\"ml-2\">{{user.fullName}} <br> <span class=\"text-muted\">{{user.countryName}}</span></label>\n                  </form>\n                </div>\n              </div>\n\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </main>\n</body>\n\n</html>"

/***/ }),

/***/ "./src/app/user/find-friends/find-friends.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/user/find-friends/find-friends.component.ts ***!
  \*************************************************************/
/*! exports provided: FindFriendsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FindFriendsComponent", function() { return FindFriendsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_globalConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/globalConfig */ "./src/app/globalConfig.ts");
/* harmony import */ var src_app_shared_shared_module_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/shared-module.service */ "./src/app/shared/shared-module.service.ts");
/* harmony import */ var src_app_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/global.service */ "./src/app/global.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_6__);







var FindFriendsComponent = /** @class */ (function () {
    function FindFriendsComponent(_sharedModuleService, _global, _router) {
        var _this = this;
        this._sharedModuleService = _sharedModuleService;
        this._global = _global;
        this._router = _router;
        this.userName = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_6__["Cookie"].get('userName');
        this.usersData = [];
        /**
        * @description This will fetch the userslist to send the request
        * @author Bhaskar Pawar
        */
        this.getUsers = function () {
            _this._sharedModuleService.getUsersWithoutFriends().subscribe(function (apiResponse) {
                if (_this._global.checkResStatus(apiResponse)) {
                    _this.usersData = apiResponse.data;
                }
            }, function (errorMessage) {
                _this._global.navigateToErrorPage("/" + src_app_globalConfig__WEBPACK_IMPORTED_MODULE_2__["GlobalConfig"].apiVersion + "/error", errorMessage);
            });
        }; //end of on click find friends
        this.onSelectUser = function (user) {
            _this._router.navigate(["/" + src_app_globalConfig__WEBPACK_IMPORTED_MODULE_2__["GlobalConfig"].apiVersion + "/users", user.userId, 'profile']);
        }; //end of on select users
    }
    FindFriendsComponent.prototype.ngOnInit = function () {
        this.getUsers();
    };
    FindFriendsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-find-friends',
            template: __webpack_require__(/*! ./find-friends.component.html */ "./src/app/user/find-friends/find-friends.component.html"),
            styles: [__webpack_require__(/*! ./find-friends.component.css */ "./src/app/user/find-friends/find-friends.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_shared_module_service__WEBPACK_IMPORTED_MODULE_3__["SharedModuleService"], src_app_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], FindFriendsComponent);
    return FindFriendsComponent;
}());



/***/ }),

/***/ "./src/app/user/friends/friends.component.css":
/*!****************************************************!*\
  !*** ./src/app/user/friends/friends.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n    background: lightslategray;\r\n    min-height: 75rem;\r\n    padding-top: 4.5rem;\r\n  }\r\n\r\ni:hover {\r\n    cursor: pointer;\r\n}\r\n\r\nul {\r\n  max-height: 600px;\r\n  overflow-x: hidden;\r\n  overflow-y: auto;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9mcmllbmRzL2ZyaWVuZHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDBCQUEwQjtJQUMxQixpQkFBaUI7SUFDakIsbUJBQW1CO0VBQ3JCOztBQUVGO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvdXNlci9mcmllbmRzL2ZyaWVuZHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xyXG4gICAgYmFja2dyb3VuZDogbGlnaHRzbGF0ZWdyYXk7XHJcbiAgICBtaW4taGVpZ2h0OiA3NXJlbTtcclxuICAgIHBhZGRpbmctdG9wOiA0LjVyZW07XHJcbiAgfVxyXG5cclxuaTpob3ZlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbnVsIHtcclxuICBtYXgtaGVpZ2h0OiA2MDBweDtcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/user/friends/friends.component.html":
/*!*****************************************************!*\
  !*** ./src/app/user/friends/friends.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n\n<head>\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, user-scalable=no\">\n</head>\n\n<body>\n  <header>\n    <app-header [userName]=\"userName\"></app-header>\n  </header>\n  <main role=\"main\">\n    <div class=\"container-fluid\">\n      <div class=\"row shadow-lg\">\n        <div class=\"col-sm\">\n          <ul class=\"list-group\">\n            <li class=\"list-group-item\" *ngIf=\"friends.length === 0\">no friends found</li>\n            <li class=\"list-group-item\" *ngFor=\"let friend of friends;let i = index\">\n              <div class=\"d-flex flex-row flex-wrap\">\n                <div class=\"flex-fill\">\n                  <form class=\"form-inline\">\n                    <app-first-char [firstChar]=\"friend.userName[0]\"></app-first-char>\n                    <label class=\"ml-2\">{{friend.userName}} <br> <span\n                        class=\"text-muted\">{{friend.countryName}}</span></label>\n                  </form>\n                </div>\n                <div class=\"flex-fill d-flex justify-content-end\">\n                  <i class=\"fas fa-list-ul\" title=\"go to list\" (click)=\"navigateToFriendList(friend.userId)\"></i>\n                  <i class=\"fas fa-user-alt ml-2\" title=\"go to profile\" (click)=\"navigateToFriendRofile(friend.userId)\"></i>\n                  <i class=\"fas fa-bell ml-2\" title=\"go to activities\" (click)=\"navigateToUserActivities(friend.userId)\"></i>\n                </div>\n\n              </div>\n\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </main>\n</body>\n\n</html>"

/***/ }),

/***/ "./src/app/user/friends/friends.component.ts":
/*!***************************************************!*\
  !*** ./src/app/user/friends/friends.component.ts ***!
  \***************************************************/
/*! exports provided: FriendsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FriendsComponent", function() { return FriendsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_shared_shared_module_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/shared-module.service */ "./src/app/shared/shared-module.service.ts");
/* harmony import */ var src_app_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/global.service */ "./src/app/global.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_socket_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../user-socket.service */ "./src/app/user/user-socket.service.ts");
/* harmony import */ var src_app_globalConfig__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/globalConfig */ "./src/app/globalConfig.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");










var FriendsComponent = /** @class */ (function () {
    function FriendsComponent(_sharedModuleService, _global, _location, toastr, _route, _router, _userSocketService) {
        var _this = this;
        this._sharedModuleService = _sharedModuleService;
        this._global = _global;
        this._location = _location;
        this.toastr = toastr;
        this._route = _route;
        this._router = _router;
        this._userSocketService = _userSocketService;
        this.userName = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].get('userName');
        this.friends = [];
        this.navigateToFriendList = function (userId) {
            _this._router.navigate(["/" + src_app_globalConfig__WEBPACK_IMPORTED_MODULE_8__["GlobalConfig"].apiVersion + "/lists", userId, 'all']);
        };
        this.navigateToFriendRofile = function (userId) {
            _this._router.navigate(["/" + src_app_globalConfig__WEBPACK_IMPORTED_MODULE_8__["GlobalConfig"].apiVersion + "/users", userId, 'profile']);
        };
        this.navigateToUserActivities = function (userId) {
            _this._router.navigate(["/" + src_app_globalConfig__WEBPACK_IMPORTED_MODULE_8__["GlobalConfig"].apiVersion + "/users", userId, 'activities']);
        };
        /**
        * @description fetch friends
        * @author Bhaskar Pawar
        */
        this.getFriends = function () {
            var userId = _this._route.snapshot.paramMap.get('userId');
            _this._sharedModuleService.getFriends(userId).subscribe(function (apiResponse) {
                if (_this._global.checkResStatus(apiResponse)) {
                    _this.friends = apiResponse.data;
                }
            }, function (errorMessage) {
                _this._global.navigateToErrorPage("/" + src_app_globalConfig__WEBPACK_IMPORTED_MODULE_8__["GlobalConfig"].apiVersion + "/error", errorMessage);
            });
        }; // end of get friends
    }
    FriendsComponent.prototype.ngOnInit = function () {
        this.getFriends();
    };
    FriendsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-friends',
            template: __webpack_require__(/*! ./friends.component.html */ "./src/app/user/friends/friends.component.html"),
            styles: [__webpack_require__(/*! ./friends.component.css */ "./src/app/user/friends/friends.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_shared_module_service__WEBPACK_IMPORTED_MODULE_3__["SharedModuleService"], src_app_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["Location"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _user_socket_service__WEBPACK_IMPORTED_MODULE_7__["UserSocketService"]])
    ], FriendsComponent);
    return FriendsComponent;
}());



/***/ }),

/***/ "./src/app/user/login/login.component.css":
/*!************************************************!*\
  !*** ./src/app/user/login/login.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n  display: flex;\r\n  align-items: center;\r\n  padding-top: 40px;\r\n  padding-bottom: 40px;\r\n}\r\n\r\n.form-signin {\r\n  width: 100%;\r\n  max-width: 330px;\r\n  padding: 15px;\r\n  margin: auto;\r\n}\r\n\r\n.form-signin .checkbox {\r\n  font-weight: 400;\r\n}\r\n\r\n.form-signin .form-control {\r\n  position: relative;\r\n  box-sizing: border-box;\r\n  height: auto;\r\n  padding: 10px;\r\n  font-size: 16px;\r\n}\r\n\r\n.form-signin .form-control:focus {\r\n  z-index: 2;\r\n}\r\n\r\n.form-signin input[type=\"email\"] {\r\n  margin-bottom: -1px;\r\n  border-bottom-right-radius: 0;\r\n  border-bottom-left-radius: 0;\r\n}\r\n\r\n.form-signin input[type=\"password\"] {\r\n  margin-bottom: 10px;\r\n  border-top-left-radius: 0;\r\n  border-top-right-radius: 0;\r\n}\r\n\r\n.ng-valid[required], .ng-valid.required  {\r\n    border-left: 5px solid #42A948; /* green */\r\n  }\r\n\r\n.ng-invalid:not(form)  {\r\n    border-left: 5px solid #a94442; /* red */\r\n  }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUUsYUFBYTtFQUViLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsWUFBWTtBQUNkOztBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osYUFBYTtFQUNiLGVBQWU7QUFDakI7O0FBQ0E7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsNkJBQTZCO0VBQzdCLDRCQUE0QjtBQUM5Qjs7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsMEJBQTBCO0FBQzVCOztBQUVBO0lBQ0ksOEJBQThCLEVBQUUsVUFBVTtFQUM1Qzs7QUFFRjtJQUNJLDhCQUE4QixFQUFFLFFBQVE7RUFDMUMiLCJmaWxlIjoic3JjL2FwcC91c2VyL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcclxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nLXRvcDogNDBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogNDBweDtcclxufVxyXG5cclxuLmZvcm0tc2lnbmluIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXgtd2lkdGg6IDMzMHB4O1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcbi5mb3JtLXNpZ25pbiAuY2hlY2tib3gge1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuLmZvcm0tc2lnbmluIC5mb3JtLWNvbnRyb2wge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGhlaWdodDogYXV0bztcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG4uZm9ybS1zaWduaW4gLmZvcm0tY29udHJvbDpmb2N1cyB7XHJcbiAgei1pbmRleDogMjtcclxufVxyXG5cclxuLmZvcm0tc2lnbmluIGlucHV0W3R5cGU9XCJlbWFpbFwiXSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogLTFweDtcclxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xyXG59XHJcbi5mb3JtLXNpZ25pbiBpbnB1dFt0eXBlPVwicGFzc3dvcmRcIl0ge1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcclxufVxyXG5cclxuLm5nLXZhbGlkW3JlcXVpcmVkXSwgLm5nLXZhbGlkLnJlcXVpcmVkICB7XHJcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkICM0MkE5NDg7IC8qIGdyZWVuICovXHJcbiAgfVxyXG4gIFxyXG4ubmctaW52YWxpZDpub3QoZm9ybSkgIHtcclxuICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgI2E5NDQ0MjsgLyogcmVkICovXHJcbiAgfVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/user/login/login.component.html":
/*!*************************************************!*\
  !*** ./src/app/user/login/login.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n\n<head>\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, user-scalable=no\">\n</head>\n\n<body>\n  <form #loginForm=\"ngForm\" class=\"form-signin shadow-lg bg-white rounded\">\n    <h1 class=\"h3 mb-3 font-weight-normal\">Sign in</h1>\n    <label for=\"inputEmail\" class=\"sr-only\">Email address</label>\n    <input type=\"email\" id=\"inputEmail\" class=\"form-control\" name=\"email\" placeholder=\"Email address\"\n      [(ngModel)]=\"email\" #emailAttr=\"ngModel\" required autofocus>\n    <label for=\"inputPassword\" class=\"sr-only\">Password</label>\n    <input type=\"password\" id=\"inputPassword\" class=\"form-control\" name=\"password\" placeholder=\"Password\"\n      [(ngModel)]=\"password\" #passwordAttr=\"ngModel\" required>\n    <div class=\"checkbox\">\n      <label>\n        <input type=\"checkbox\" name=\"terms\" [(ngModel)]=\"isChecked\" #rememberAttr=\"ngModel\" required> terms and conditions\n      </label>\n    </div>\n    <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\" [disabled]=\"!loginForm.form.valid\"\n    (click)=\"logIn()\">Sign in</button>\n    <button type=\"button\" class=\"btn btn-link\" data-toggle=\"modal\" data-target=\"#forgotPassword\">forgot password\n      ?</button>\n    <div class=\"row\">\n      <div class=\"col-sm-8\">\n       <label>Not an existing user?</label>\n      </div>\n      <div class=\"col-sm-4\">\n        <button type=\"button\" class=\"btn btn-outline-primary btn-sm\" (click)=\"onSignupBtnClick()\">Sign Up</button>\n      </div>\n    </div>\n\n  </form>\n  <!-- Modal -->\n  <div class=\"modal fade\" #forgotPassModal id=\"forgotPassword\" #send tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"forgotPasswordLabel\"\n  aria-hidden=\"true\">\n  <div class=\"modal-dialog\" id=\"forgotPassword1\" role=\"dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"forgotPasswordLabel\">Forgot Password</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <label for=\"inputModalEmail\">Enter your email</label>\n        <input type=\"email\" id=\"inputModalEmail\" class=\"form-control\" name=\"emailModal\" placeholder=\"Email address\"\n          [(ngModel)]=\"emailModal\" #emailModalAttr=\"ngModel\" required autofocus>\n         \n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n        <button type=\"button\" id=\"send\" class=\"btn btn-primary\" [disabled]=\"emailModalAttr.invalid\" (click)=\"validateUser()\">Send</button>\n      </div>\n    </div>\n  </div>\n</div>\n</body>\n\n</html>"

/***/ }),

/***/ "./src/app/user/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/user/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user.service */ "./src/app/user/user.service.ts");
/* harmony import */ var src_app_global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/global.service */ "./src/app/global.service.ts");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _user_validation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../user-validation.service */ "./src/app/user/user-validation.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_globalConfig__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/globalConfig */ "./src/app/globalConfig.ts");
/* harmony import */ var _user_socket_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../user-socket.service */ "./src/app/user/user-socket.service.ts");










var LoginComponent = /** @class */ (function () {
    function LoginComponent(_userService, _global, _toastr, _validation, _router, _userSocketService) {
        var _this = this;
        this._userService = _userService;
        this._global = _global;
        this._toastr = _toastr;
        this._validation = _validation;
        this._router = _router;
        this._userSocketService = _userSocketService;
        /**
         * @author Bhaskar Pawar
         * @description will logs in the user to the System
         */
        this.logIn = function () {
            var logInData = {
                email: _this.email,
                password: _this.password
            };
            _this._userService.logIn(logInData).subscribe(function (apiResponse) {
                if (_this._global.checkResStatus(apiResponse)) {
                    ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].set("authToken", apiResponse.data.authToken);
                    ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].set("userId", apiResponse.data.userDetails.userId);
                    ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].set("userName", apiResponse.data.userDetails.firstName + " " + apiResponse.data.userDetails.lastName);
                    _this._userService.setToLocalStorage(apiResponse.data.userDetails);
                    _this._toastr.success("" + apiResponse.message, 'Success !');
                    setTimeout(function () {
                        _this._userSocketService.emitJoinSocket(apiResponse.data.userDetails.userId);
                    });
                    setTimeout(function () {
                        _this._router.navigate(["/" + src_app_globalConfig__WEBPACK_IMPORTED_MODULE_8__["GlobalConfig"].apiVersion + "/lists", ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('userId'), 'all']);
                    }, 500);
                }
            }, function (errorMessage) {
                _this._global.navigateToErrorPage("/" + src_app_globalConfig__WEBPACK_IMPORTED_MODULE_8__["GlobalConfig"].apiVersion + "/error", errorMessage);
            });
        }; //end of log in
        /**
         * @description validates user email
         * @author Bhaskar Pawar
         */
        this.validateUser = function () {
            if (_this._validation.validateEmail(_this.emailModal)) {
                _this._toastr.error("Not a valid email", "Email !");
            }
            else {
                _this._userService.checkUserExist(_this.emailModal).subscribe(function (apiResponse) {
                    if (apiResponse.status === 201) {
                        _this._toastr.info("" + apiResponse.message, "Email !");
                    }
                    if (apiResponse.status === 200) {
                        _this.forgotPassModal.nativeElement.click();
                        _this.sendEmail();
                    }
                }, function (errorMessage) {
                    _this._global.navigateToErrorPage("/" + src_app_globalConfig__WEBPACK_IMPORTED_MODULE_8__["GlobalConfig"].apiVersion + "/error", errorMessage);
                });
            }
        }; //end of validate user
        /**
         * @description will send request to send an email
         * @author Bhaskar Pawar
         */
        this.sendEmail = function () {
            _this._userService.sendEmail(_this.emailModal).subscribe(function (apiResponse) {
                if (_this._global.checkResStatus(apiResponse)) {
                    _this._router.navigate(["/" + src_app_globalConfig__WEBPACK_IMPORTED_MODULE_8__["GlobalConfig"].apiVersion + "/users/resetlink", _this.emailModal]);
                    _this.emailModal = "";
                }
            }, function (errorMessage) {
                _this._global.navigateToErrorPage("/" + src_app_globalConfig__WEBPACK_IMPORTED_MODULE_8__["GlobalConfig"].apiVersion + "/error", errorMessage);
            });
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onSignupBtnClick = function () {
        this._router.navigate(["/" + src_app_globalConfig__WEBPACK_IMPORTED_MODULE_8__["GlobalConfig"].apiVersion + "/users/signup"]);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('forgotPassModal'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], LoginComponent.prototype, "forgotPassModal", void 0);
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/user/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/user/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], src_app_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _user_validation_service__WEBPACK_IMPORTED_MODULE_6__["UserValidationService"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _user_socket_service__WEBPACK_IMPORTED_MODULE_9__["UserSocketService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/user/reset-password-link/reset-password-link.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/user/reset-password-link/reset-password-link.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\r\n    width: 200px;\r\n    height: 200px;\r\n}\r\n\r\n.jumbotron {\r\n    height: 650px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9yZXNldC1wYXNzd29yZC1saW5rL3Jlc2V0LXBhc3N3b3JkLWxpbmsuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvcmVzZXQtcGFzc3dvcmQtbGluay9yZXNldC1wYXNzd29yZC1saW5rLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWcge1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxufVxyXG5cclxuLmp1bWJvdHJvbiB7XHJcbiAgICBoZWlnaHQ6IDY1MHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/user/reset-password-link/reset-password-link.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/user/reset-password-link/reset-password-link.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid text-center m-auto\">\n    <p class=\"lead\">reset password link has been successfully sent to \n      <span class=\"font-weight-bold text-primary\">{{email}}</span><br>\n    Kindly check your inbox after few seconds</p>\n    <button class=\"btn btn-outline-primary btn-lg\" (click)=\"goBack()\"><i class=\"fas fa-arrow-left\"></i> Back</button>\n</div>\n"

/***/ }),

/***/ "./src/app/user/reset-password-link/reset-password-link.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/user/reset-password-link/reset-password-link.component.ts ***!
  \***************************************************************************/
/*! exports provided: ResetPasswordLinkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordLinkComponent", function() { return ResetPasswordLinkComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");




var ResetPasswordLinkComponent = /** @class */ (function () {
    function ResetPasswordLinkComponent(_route, _location) {
        var _this = this;
        this._route = _route;
        this._location = _location;
        this.goBack = function () {
            _this._location.back();
        };
        this.email = this._route.snapshot.paramMap.get('email');
    }
    ResetPasswordLinkComponent.prototype.ngOnInit = function () {
    };
    ResetPasswordLinkComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-reset-password-link',
            template: __webpack_require__(/*! ./reset-password-link.component.html */ "./src/app/user/reset-password-link/reset-password-link.component.html"),
            styles: [__webpack_require__(/*! ./reset-password-link.component.css */ "./src/app/user/reset-password-link/reset-password-link.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]])
    ], ResetPasswordLinkComponent);
    return ResetPasswordLinkComponent;
}());



/***/ }),

/***/ "./src/app/user/reset-password/reset-password.component.css":
/*!******************************************************************!*\
  !*** ./src/app/user/reset-password/reset-password.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-width {\r\n  width: 100%;\r\n  max-width: 500px;\r\n  padding: 15px;\r\n  margin: auto;\r\n}\r\n\r\n.ng-valid[required], .ng-valid.required  {\r\n    border-left: 5px solid #42A948; /* green */\r\n  }\r\n\r\n.ng-invalid:not(form)  {\r\n    border-left: 5px solid #a94442; /* red */\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9yZXNldC1wYXNzd29yZC9yZXNldC1wYXNzd29yZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsWUFBWTtBQUNkOztBQUVBO0lBQ0ksOEJBQThCLEVBQUUsVUFBVTtFQUM1Qzs7QUFFRjtJQUNJLDhCQUE4QixFQUFFLFFBQVE7RUFDMUMiLCJmaWxlIjoic3JjL2FwcC91c2VyL3Jlc2V0LXBhc3N3b3JkL3Jlc2V0LXBhc3N3b3JkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS13aWR0aCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWF4LXdpZHRoOiA1MDBweDtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuLm5nLXZhbGlkW3JlcXVpcmVkXSwgLm5nLXZhbGlkLnJlcXVpcmVkICB7XHJcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkICM0MkE5NDg7IC8qIGdyZWVuICovXHJcbiAgfVxyXG4gIFxyXG4ubmctaW52YWxpZDpub3QoZm9ybSkgIHtcclxuICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgI2E5NDQ0MjsgLyogcmVkICovXHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/user/reset-password/reset-password.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/user/reset-password/reset-password.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n\n<head>\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, user-scalable=no\">\n</head>\n\n<body>\n  <main role=\"main\">\n    <div class=\"container-fluid\">\n      <form #resetPassForm=\"ngForm\" class=\"form-width shadow-lg p-3 mt-5\">\n          <label class=\"mb-3 font-weight-bold\">Reset Password</label>\n          <div class=\"form-group\">\n            <label for=\"inputPass\">New Password*</label>\n            <input type=\"password\" class=\"form-control\" id=\"inputPass\" placeholder=\"New Password\" name=\"password\" [(ngModel)]=\"password\" #passwordAttr=\"ngModel\" required>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"inputConfirmPass\">Confirm New Password*</label>\n            <input type=\"password\" class=\"form-control\" id=\"inputConfirmPass\" placeholder=\"Confirm New Password\" name=\"confirmPass\" [(ngModel)]=\"confirmPassword\" #confirmPassAttr=\"ngModel\" required>\n          </div>\n        <button type=\"button\" class=\"btn btn-primary\" [disabled]=\"!resetPassForm.form.valid\" (click)=\"resetPassword()\">Submit</button>\n      </form>\n    </div>\n  </main>\n</body>\n</html>"

/***/ }),

/***/ "./src/app/user/reset-password/reset-password.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/user/reset-password/reset-password.component.ts ***!
  \*****************************************************************/
/*! exports provided: ResetPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordComponent", function() { return ResetPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user.service */ "./src/app/user/user.service.ts");
/* harmony import */ var src_app_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/global.service */ "./src/app/global.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var src_app_globalConfig__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/globalConfig */ "./src/app/globalConfig.ts");
/* harmony import */ var _user_validation_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../user-validation.service */ "./src/app/user/user-validation.service.ts");








var ResetPasswordComponent = /** @class */ (function () {
    function ResetPasswordComponent(_router, _route, _userService, _global, _toastr, _userValidation) {
        var _this = this;
        this._router = _router;
        this._route = _route;
        this._userService = _userService;
        this._global = _global;
        this._toastr = _toastr;
        this._userValidation = _userValidation;
        /**
         * @description request the server to set new password
         * @author Bhaskar Pawar
         */
        this.resetPassword = function () {
            var email = _this._route.snapshot.queryParamMap.get('email');
            var data = {
                email: email,
                password: _this.password,
            };
            if (_this.password !== _this.confirmPassword) {
                _this._toastr.info("Passwords not matching", 'Password !');
            }
            else if (_this._userValidation.validatePassword(_this.password)) {
                _this._toastr.info("Minimum 8 characters which contain only characters,numeric digits, underscore and first character must be a letter", "Password !");
            }
            else {
                _this._userService.resetPassword(data).subscribe(function (apiResponse) {
                    if (_this._global.checkResStatus(apiResponse)) {
                        _this._toastr.success(apiResponse.message, "Success !");
                        setTimeout(function () {
                            _this._router.navigate(["/" + src_app_globalConfig__WEBPACK_IMPORTED_MODULE_6__["GlobalConfig"].apiVersion + "/users/login"]);
                        }, 1000);
                    }
                }, function (errorMessage) {
                    _this._global.navigateToErrorPage("/" + src_app_globalConfig__WEBPACK_IMPORTED_MODULE_6__["GlobalConfig"].apiVersion + "/error", errorMessage);
                });
            }
        }; //end of rest password
    }
    ResetPasswordComponent.prototype.ngOnInit = function () {
    };
    ResetPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-reset-password',
            template: __webpack_require__(/*! ./reset-password.component.html */ "./src/app/user/reset-password/reset-password.component.html"),
            styles: [__webpack_require__(/*! ./reset-password.component.css */ "./src/app/user/reset-password/reset-password.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], src_app_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _user_validation_service__WEBPACK_IMPORTED_MODULE_7__["UserValidationService"]])
    ], ResetPasswordComponent);
    return ResetPasswordComponent;
}());



/***/ }),

/***/ "./src/app/user/signup/User.ts":
/*!*************************************!*\
  !*** ./src/app/user/signup/User.ts ***!
  \*************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User(firstName, lastName, email, password, countryName, mobileNumber, countryCode, countryPhoneCode) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.countryName = countryName;
        this.mobileNumber = mobileNumber;
        this.countryCode = countryCode;
        this.countryPhoneCode = countryPhoneCode;
    }
    return User;
}());



/***/ }),

/***/ "./src/app/user/signup/signup.component.css":
/*!**************************************************!*\
  !*** ./src/app/user/signup/signup.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.form-width {\r\n  width: 100%;\r\n  max-width: 500px;\r\n  padding: 15px;\r\n  margin: auto;\r\n}\r\n\r\n.ng-valid[required], .ng-valid.required  {\r\n    border-left: 5px solid #42A948; /* green */\r\n  }\r\n\r\n.ng-invalid:not(form)  {\r\n    border-left: 5px solid #a94442; /* red */\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsWUFBWTtBQUNkOztBQUVBO0lBQ0ksOEJBQThCLEVBQUUsVUFBVTtFQUM1Qzs7QUFFRjtJQUNJLDhCQUE4QixFQUFFLFFBQVE7RUFDMUMiLCJmaWxlIjoic3JjL2FwcC91c2VyL3NpZ251cC9zaWdudXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uZm9ybS13aWR0aCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWF4LXdpZHRoOiA1MDBweDtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuLm5nLXZhbGlkW3JlcXVpcmVkXSwgLm5nLXZhbGlkLnJlcXVpcmVkICB7XHJcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkICM0MkE5NDg7IC8qIGdyZWVuICovXHJcbiAgfVxyXG4gIFxyXG4ubmctaW52YWxpZDpub3QoZm9ybSkgIHtcclxuICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgI2E5NDQ0MjsgLyogcmVkICovXHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/user/signup/signup.component.html":
/*!***************************************************!*\
  !*** ./src/app/user/signup/signup.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n\n<head>\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, user-scalable=no\">\n</head>\n\n<body>\n  <main role=\"main\">\n    <div class=\"container-fluid\">\n      <form #signupForm=\"ngForm\" class=\"form-width shadow-lg p-3 mt-5 bg-white rounded border border-info\">\n        <div class=\"row\">\n          <div class=\"col-sm font-weight-bold\">\n              <label class=\"mb-3\">Sign Up</label>\n          </div>\n          <div class=\"col-sm d-flex justify-content-end\">\n              <button type=\"button\" class=\"btn btn-outline-secondary btn-sm mb-2\" (click)=\"goBack()\"><i class=\"fas fa-arrow-left\"></i> Back</button>\n          </div>   \n        </div>\n        \n        <div class=\"form-row\">\n          <div class=\"form-group col-sm-6\">\n            <label for=\"inputFirstName\">First Name*</label>\n            <input type=\"text\" class=\"form-control\" id=\"inputFirstName\" placeholder=\"Fisrt Name\" name=\"firstName\" [(ngModel)]=\"firstName\" #firstNameAttr=\"ngModel\" required>\n          </div>\n          <div class=\"form-group col-sm-6\">\n            <label for=\"inputLastName\">Last Name*</label>\n            <input type=\"text\" class=\"form-control\" id=\"inputLastName\" placeholder=\"Last Name\" name=\"lastName\" [(ngModel)]=\"lastName\" #lastNameAttr=\"ngModel\" required>\n          </div>\n        </div>\n        \n          <div class=\"form-group\">\n            <label for=\"inputEmail4\">Email*</label>\n            <input type=\"email\" class=\"form-control\" id=\"inputEmail4\" placeholder=\"Email\" name=\"email\" [(ngModel)]=\"email\" #emailAttr=\"ngModel\" required>\n          </div>\n        \n        <div class=\"form-group\">\n            <label for=\"inputPassword4\">Password*</label>\n            <input type=\"password\" class=\"form-control\" id=\"inputPassword4\" placeholder=\"Password\" name=\"password\" [(ngModel)]=\"password\" #passwordAttr=\"ngModel\" required>\n            <small id=\"passwordhelp\" class=\"form-text text-muted\">Note: Minimum 8 characters which contain only characters,numeric digits, underscore and first character must be a letter.</small>\n          </div>\n        <div class=\"form-group\">\n          <label for=\"inputCountry\">Country*</label>\n          <select id=\"inputCountry\" class=\"form-control\" name=\"country\" [(ngModel)]=\"countryCode\" #countryAttr=\"ngModel\" required (change)=\"onCountryChange(countryCode)\">\n           <option *ngFor=\"let currentCountry of countryNamesObj\" [value]=\"currentCountry.countryCode\">{{currentCountry.countryName}}</option>\n          </select>\n        </div>\n        <div class=\"input-group mb-2\">\n          <label class=\"sr-only\" for=\"inputMobileNumber\">Mobile Number*</label>\n          <div class=\"input-group-prepend\">\n            <div class=\"input-group-text\">{{countryPhoneCode}}</div>\n          </div>\n          <input type=\"number\" class=\"form-control\" id=\"inputMobileNumber\" placeholder=\"Mobile Number\" name=\"mobileNumber\" [(ngModel)]=\"mobileNumber\" #mobileNumberAttr=\"ngModel\" onkeydown=\"if(this.value.length == 10 && event.keyCode!=8) return false;\" min=\"1000000000\" max=\"9999999999\" required>\n        </div>\n        <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!signupForm.form.valid\" (click)=\"signUp()\">Sign Up</button>\n      </form>\n    </div>\n  </main>\n</body>\n\n</html>"

/***/ }),

/***/ "./src/app/user/signup/signup.component.ts":
/*!*************************************************!*\
  !*** ./src/app/user/signup/signup.component.ts ***!
  \*************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./User */ "./src/app/user/signup/User.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user.service */ "./src/app/user/user.service.ts");
/* harmony import */ var src_app_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/global.service */ "./src/app/global.service.ts");
/* harmony import */ var _user_validation_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../user-validation.service */ "./src/app/user/user-validation.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_app_globalConfig__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/globalConfig */ "./src/app/globalConfig.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");










var SignupComponent = /** @class */ (function () {
    function SignupComponent(_userService, _global, userValidation, _toastr, _location, _router) {
        var _this = this;
        this._userService = _userService;
        this._global = _global;
        this.userValidation = userValidation;
        this._toastr = _toastr;
        this._location = _location;
        this._router = _router;
        this.countryNamesObj = [];
        this.goBack = function () {
            _this._location.back();
        };
        /**
         * @author Bhaskar Pawar
         * @description on change of country get countryCode and countryName
         * @param {String} countryCode
         */
        this.onCountryChange = function (countryCode) {
            _this.countryPhoneCode = _this.countryPhoneCodes[countryCode];
            _this.countryName = _this.countryNamesObj.find(function (obj) { return obj.countryCode === countryCode; }).countryName;
        }; // end of on country change
        /**
        * @author Bhaskar Pawar
        * @description this fetches the object from json for country names
        */
        this.getcountryNamesObj = function () {
            _this._userService.getCountryNamesObj().subscribe(function (data) {
                for (var _i = 0, _a = Object.entries(data); _i < _a.length; _i++) {
                    var obj = _a[_i];
                    var newObj = {
                        countryCode: obj[0],
                        countryName: obj[1]
                    };
                    _this.countryNamesObj.push(newObj);
                }
            }, function (errorMessage) {
                _this._global.navigateToErrorPage("/" + src_app_globalConfig__WEBPACK_IMPORTED_MODULE_8__["GlobalConfig"].apiVersion + "/error", errorMessage);
            });
        }; //end of get country names
        /**
        * @author Bhaskar Pawar
        * @description this fetches the object from json for country phone codes
        */
        this.getCountryPhoneCodes = function () {
            _this._userService.getCountryPhonesobj().subscribe(function (data) {
                _this.countryPhoneCodes = data;
            });
        }; //end of get country phone codes
        /**
         * @author Bhaskar Pawar
         * @description This saves the user data on successful transcation and signs up
         */
        this.signUp = function () {
            if (_this.userValidation.validateEmail(_this.email)) {
                _this._toastr.info("email does not meet the criteria", "Info !");
            }
            else if (_this.userValidation.validatePassword(_this.password)) {
                _this._toastr.info("password does not meet the criteria", "Info !");
            }
            else {
                var user = new _User__WEBPACK_IMPORTED_MODULE_2__["User"](_this.firstName, _this.lastName, _this.email, _this.password, _this.countryName, _this.mobileNumber, _this.countryCode, _this.countryPhoneCode);
                _this._userService.signUp(user).subscribe(function (apiResponse) {
                    if (_this._global.checkResStatus(apiResponse)) {
                        _this._toastr.success("" + apiResponse.message, 'Success !');
                        setTimeout(function () {
                            _this._router.navigate(["/" + src_app_globalConfig__WEBPACK_IMPORTED_MODULE_8__["GlobalConfig"].apiVersion + "/users/login"]);
                        }, 1000);
                    }
                }, function (errorMessage) {
                    _this._global.navigateToErrorPage("/" + src_app_globalConfig__WEBPACK_IMPORTED_MODULE_8__["GlobalConfig"].apiVersion + "/error", errorMessage);
                });
            }
        }; // end of sign up function
    }
    SignupComponent.prototype.ngOnInit = function () {
        this.getcountryNamesObj();
        this.getCountryPhoneCodes();
    };
    SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/user/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/user/signup/signup.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], src_app_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"], _user_validation_service__WEBPACK_IMPORTED_MODULE_5__["UserValidationService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/user/user-profile/user-profile.component.css":
/*!**************************************************************!*\
  !*** ./src/app/user/user-profile/user-profile.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n    background: lightslategray;\r\n    min-height: 75rem;\r\n    padding-top: 4.5rem;\r\n  }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci91c2VyLXByb2ZpbGUvdXNlci1wcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwwQkFBMEI7SUFDMUIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtFQUNyQiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdXNlci1wcm9maWxlL3VzZXItcHJvZmlsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaWdodHNsYXRlZ3JheTtcclxuICAgIG1pbi1oZWlnaHQ6IDc1cmVtO1xyXG4gICAgcGFkZGluZy10b3A6IDQuNXJlbTtcclxuICB9XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/user/user-profile/user-profile.component.html":
/*!***************************************************************!*\
  !*** ./src/app/user/user-profile/user-profile.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n\n<head>\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, user-scalable=no\">\n</head>\n\n<body>\n  <header>\n    <app-header [userName]=\"userName\"></app-header>\n  </header>\n  <main role=\"main\">\n    <div class=\"card m-auto p-4 mr-auto\" *ngIf=\"currentUser\">\n      \n      \n      <div class=\"card-body\">\n          <app-first-char [firstChar]=\"currentUser.fullName[0]\"></app-first-char>\n          <h5 class=\"card-title font-weight-bold\">{{currentUser.fullName}}</h5>\n        \n      </div>\n      <ul class=\"list-group list-group-flush\">\n        <li class=\"list-group-item\">Country: {{currentUser.countryName}}</li>\n        <li class=\"list-group-item\">Email: {{currentUser.email}}</li>\n        <li class=\"list-group-item\">Mobile: ({{currentUser.countryPhoneCode}})  {{currentUser.mobileNumber}}</li>\n      </ul>\n      <div class=\"card-body\" *ngIf = \"isCurrentUserProfile\">\n        <button class=\"btn btn-primary btn-sm\" *ngIf=\"!isRequestSent && !this.isAlreadyFriend && !isRequestReceived\" (click) = \"updateSentRequest()\">Send Request</button>\n        <button class=\"btn btn-primary btn-sm\" *ngIf=\"isRequestSent\"  disabled>Request Sent</button>\n        <button class=\"btn btn-primary btn-sm\" *ngIf=\"isRequestReceived\"  disabled>Request Received</button>\n        <button class=\"btn btn-primary btn-sm\" *ngIf=\"isAlreadyFriend\"  disabled>friend</button>\n        <button class=\"btn btn-secondary btn-sm ml-2\" (click) = \"goBack()\">Back</button>\n      </div>\n    </div>\n  </main>\n</body>\n\n</html>"

/***/ }),

/***/ "./src/app/user/user-profile/user-profile.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/user/user-profile/user-profile.component.ts ***!
  \*************************************************************/
/*! exports provided: UserProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function() { return UserProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_shared_shared_module_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/shared-module.service */ "./src/app/shared/shared-module.service.ts");
/* harmony import */ var src_app_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/global.service */ "./src/app/global.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_globalConfig__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/globalConfig */ "./src/app/globalConfig.ts");
/* harmony import */ var _user_socket_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../user-socket.service */ "./src/app/user/user-socket.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../user.service */ "./src/app/user/user.service.ts");











var UserProfileComponent = /** @class */ (function () {
    function UserProfileComponent(_sharedModuleService, _global, _location, toastr, _route, _router, _userSocketService, _userService) {
        var _this = this;
        this._sharedModuleService = _sharedModuleService;
        this._global = _global;
        this._location = _location;
        this.toastr = toastr;
        this._route = _route;
        this._router = _router;
        this._userSocketService = _userSocketService;
        this._userService = _userService;
        this.userName = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].get('userName');
        this.fullName = "Bhaskar";
        this.requests = [];
        this.friends = [];
        this.isRequestSent = false;
        this.isRequestReceived = false;
        this.isAlreadyFriend = false;
        this.isCurrentUserProfile = true;
        this.goBack = function () {
            _this._location.back();
        };
        /**
         * @description fetch requests
         * @author Bhaskar Pawar
         */
        this.getRequests = function () {
            var userId = _this._route.snapshot.paramMap.get('userId');
            _this._sharedModuleService.getRequests(userId).subscribe(function (apiResponse) {
                if (_this._global.checkResStatus(apiResponse)) {
                    _this.requests = apiResponse.data;
                    _this.isRequestSent = _this.requests.some(function (request) { return request.userId === ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].get('userId'); });
                }
            }, function (errorMessage) {
                _this._global.navigateToErrorPage("/" + src_app_globalConfig__WEBPACK_IMPORTED_MODULE_7__["GlobalConfig"].apiVersion + "/error", errorMessage);
            });
        }; // end of get requests
        /**
         * @description fetch requests
         * @author Bhaskar Pawar
         */
        this.getRequestsReceived = function () {
            var userId = _this._route.snapshot.paramMap.get('userId');
            _this._sharedModuleService.getRequests(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].get('userId')).subscribe(function (apiResponse) {
                if (_this._global.checkResStatus(apiResponse)) {
                    _this.requests = apiResponse.data;
                    _this.isRequestReceived = _this.requests.some(function (request) { return request.userId === userId; });
                }
            }, function (errorMessage) {
                _this._global.navigateToErrorPage("/" + src_app_globalConfig__WEBPACK_IMPORTED_MODULE_7__["GlobalConfig"].apiVersion + "/error", errorMessage);
            });
        }; // end of get requests
        /**
        * @description fetch friends
        * @author Bhaskar Pawar
        */
        this.getFriends = function () {
            var userId = _this._route.snapshot.paramMap.get('userId');
            _this._sharedModuleService.getFriends(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].get('userId')).subscribe(function (apiResponse) {
                if (_this._global.checkResStatus(apiResponse)) {
                    _this.friends = apiResponse.data;
                    _this.isAlreadyFriend = _this.friends.some(function (friend) { return friend.userId === userId; });
                }
            }, function (errorMessage) {
                _this._global.navigateToErrorPage("/" + src_app_globalConfig__WEBPACK_IMPORTED_MODULE_7__["GlobalConfig"].apiVersion + "/error", errorMessage);
            });
        }; // end of get friends
        /**
         *
         */
        this.getSingleUser = function () {
            var userId = _this._route.snapshot.paramMap.get('userId');
            if (userId === ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].get('userId')) {
                _this.isCurrentUserProfile = false;
            }
            _this._sharedModuleService.getSingleUser(userId).subscribe(function (apiResponse) {
                if (_this._global.checkResStatus(apiResponse)) {
                    _this.currentUser = apiResponse.data;
                    console.log(_this.currentUser);
                }
            }, function (errorMessage) {
                _this._global.navigateToErrorPage("/" + src_app_globalConfig__WEBPACK_IMPORTED_MODULE_7__["GlobalConfig"].apiVersion + "/error", errorMessage);
            });
        };
        this.updateSentRequest = function () {
            var data = {
                userId: ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].get('userId'),
                userName: ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].get('userName'),
                countryName: _this.userInfo.countryName,
                receiverId: _this.currentUser.userId,
                receiverName: _this.currentUser.fullName
            };
            _this._sharedModuleService.updateSentRequest(data, _this.currentUser.userId).subscribe(function (apiResponse) {
                if (_this._global.checkResStatus(apiResponse)) {
                    _this.toastr.success("" + apiResponse.message, "Success !");
                    setTimeout(function () {
                        _this._userSocketService.emitSendUserRequest(data);
                        _this._router.navigate(["/" + src_app_globalConfig__WEBPACK_IMPORTED_MODULE_7__["GlobalConfig"].apiVersion + "/lists", ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].get('userId'), 'all']);
                    }, 1000);
                }
            }, function (errorMessage) {
                _this._global.navigateToErrorPage("/" + src_app_globalConfig__WEBPACK_IMPORTED_MODULE_7__["GlobalConfig"].apiVersion + "/error", errorMessage);
            });
        };
    }
    UserProfileComponent.prototype.ngOnInit = function () {
        this.getSingleUser();
        this.getFriends();
        this.getRequests();
        this.getRequestsReceived();
        this.userInfo = this._userService.getFromLocalStorage();
    };
    UserProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-profile',
            template: __webpack_require__(/*! ./user-profile.component.html */ "./src/app/user/user-profile/user-profile.component.html"),
            styles: [__webpack_require__(/*! ./user-profile.component.css */ "./src/app/user/user-profile/user-profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_shared_module_service__WEBPACK_IMPORTED_MODULE_3__["SharedModuleService"], src_app_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["Location"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _user_socket_service__WEBPACK_IMPORTED_MODULE_8__["UserSocketService"],
            _user_service__WEBPACK_IMPORTED_MODULE_10__["UserService"]])
    ], UserProfileComponent);
    return UserProfileComponent;
}());



/***/ }),

/***/ "./src/app/user/user-requests/user-requests.component.css":
/*!****************************************************************!*\
  !*** ./src/app/user/user-requests/user-requests.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n    background: lightslategray;\r\n    min-height: 75rem;\r\n    padding-top: 4.5rem;\r\n  }\r\n  \r\n  ul {\r\n    max-height: 600px;\r\n    overflow-x: hidden;\r\n    overflow-y: auto;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci91c2VyLXJlcXVlc3RzL3VzZXItcmVxdWVzdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDBCQUEwQjtJQUMxQixpQkFBaUI7SUFDakIsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC91c2VyL3VzZXItcmVxdWVzdHMvdXNlci1yZXF1ZXN0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaWdodHNsYXRlZ3JheTtcclxuICAgIG1pbi1oZWlnaHQ6IDc1cmVtO1xyXG4gICAgcGFkZGluZy10b3A6IDQuNXJlbTtcclxuICB9XHJcbiAgXHJcbiAgdWwge1xyXG4gICAgbWF4LWhlaWdodDogNjAwcHg7XHJcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/user/user-requests/user-requests.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/user/user-requests/user-requests.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n\n<head>\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, user-scalable=no\">\n</head>\n\n<body>\n  <header>\n    <app-header [userName]=\"userName\"></app-header>\n  </header>\n  <main role=\"main\">\n    <div class=\"container-fluid\">\n      <div class=\"row shadow-lg\">\n        <div class=\"col-sm\">\n          <ul class=\"list-group\">\n            <li class=\"list-group-item\" *ngIf=\"requests.length === 0\">You have no friend requests</li>\n            <li class=\"list-group-item\" *ngFor=\"let request of requests;let i = index\">\n              <div class=\"d-flex flex-row flex-wrap\">\n                <div class=\"flex-fill\">\n                  <form class=\"form-inline\">\n                    <app-first-char [firstChar]=\"request.userName[0]\"></app-first-char>\n                    <label class=\"ml-2\">{{request.userName}} <br> <span class=\"text-muted\">{{request.countryName}}</span></label>\n                    \n                  </form>\n                </div>\n                <div class=\"flex-fill d-flex justify-content-end\">\n                  <button type=\"button\" class=\"btn btn-primary btn-sm\" (click) = \"acceptFriendRequest(request)\">Accept</button>\n                  <button type=\"button\" class=\"btn btn-danger btn-sm ml-2\" (click) = \"cancelFriendRequest(request)\">Cancel</button>\n                </div>\n              </div>\n\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </main>\n</body>\n\n</html>"

/***/ }),

/***/ "./src/app/user/user-requests/user-requests.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/user/user-requests/user-requests.component.ts ***!
  \***************************************************************/
/*! exports provided: UserRequestsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRequestsComponent", function() { return UserRequestsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_shared_shared_module_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/shared-module.service */ "./src/app/shared/shared-module.service.ts");
/* harmony import */ var src_app_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/global.service */ "./src/app/global.service.ts");
/* harmony import */ var src_app_globalConfig__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/globalConfig */ "./src/app/globalConfig.ts");
/* harmony import */ var _user_socket_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../user-socket.service */ "./src/app/user/user-socket.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../user.service */ "./src/app/user/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");










var UserRequestsComponent = /** @class */ (function () {
    function UserRequestsComponent(_sharedModuleService, _global, _userSocketService, _toastr, _userService, _router) {
        var _this = this;
        this._sharedModuleService = _sharedModuleService;
        this._global = _global;
        this._userSocketService = _userSocketService;
        this._toastr = _toastr;
        this._userService = _userService;
        this._router = _router;
        this.userName = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].get('userName');
        this.requests = [];
        this.onCancelUserRequest = function () {
            _this._userSocketService.onCancelUserRequest().subscribe(function (userId) {
                var index = _this.requests.findIndex(function (request) { return request.userId === userId; });
                _this.requests.splice(index, 1);
            });
        }; // event to be listen when user cancels the request
        this.onSendUserRequest = function () {
            _this._userSocketService.onSendUserRequest().subscribe(function (data) {
                _this.requests.push(data);
            });
        };
        /**
        * @description fetch requests
        * @author Bhaskar Pawar
        */
        this.getRequests = function () {
            _this._sharedModuleService.getRequests(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].get('userId')).subscribe(function (apiResponse) {
                if (_this._global.checkResStatus(apiResponse)) {
                    _this.requests = apiResponse.data;
                }
            }, function (errorMessage) {
                _this._global.navigateToErrorPage("/" + src_app_globalConfig__WEBPACK_IMPORTED_MODULE_5__["GlobalConfig"].apiVersion + "/error", errorMessage);
            });
        }; // end of get requests
        this.acceptFriendRequest = function (request) {
            var data = {
                senderId: request.userId,
                senderName: request.userName,
                senderCountry: request.countryName,
                receiverId: ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].get('userId'),
                receiverName: ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].get('userName'),
                receiverCountry: _this.userInfo.countryName
            };
            _this._sharedModuleService.acceptFriendRequest(data).subscribe(function (apiResponse) {
                if (_this._global.checkResStatus(apiResponse)) {
                    _this._userSocketService.emitAcceptRequest(apiResponse.data);
                    setTimeout(function () {
                        _this._userSocketService.emitAcceptRequest(data);
                    }, 500);
                    setTimeout(function () {
                        _this._router.navigate(["/" + src_app_globalConfig__WEBPACK_IMPORTED_MODULE_5__["GlobalConfig"].apiVersion + "/users", ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].get('userId'), 'friends']);
                    }, 500);
                }
            }, function (errorMessage) {
                _this._global.navigateToErrorPage("/" + src_app_globalConfig__WEBPACK_IMPORTED_MODULE_5__["GlobalConfig"].apiVersion + "/error", errorMessage);
            });
        };
        /**
         * @description deletes the user request
         * @author Bhaskar Pawar
         */
        this.cancelFriendRequest = function (request) {
            var data = {
                userId: request.userId
            };
            _this._sharedModuleService.cancelUserRequest(data).subscribe(function (apiResponse) {
                if (_this._global.checkResStatus(apiResponse)) {
                    setTimeout(function () {
                        _this._userSocketService.emitCancelRequest(request.userId);
                    }, 1000);
                }
            }, function (errorMessage) {
                _this._global.navigateToErrorPage("/" + src_app_globalConfig__WEBPACK_IMPORTED_MODULE_5__["GlobalConfig"].apiVersion + "/error", errorMessage);
            });
        }; //end of cancel friend request
    }
    UserRequestsComponent.prototype.ngOnInit = function () {
        this.userInfo = this._userService.getFromLocalStorage();
        this.getRequests();
        this.onSendUserRequest();
        this.onCancelUserRequest();
    };
    UserRequestsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-requests',
            template: __webpack_require__(/*! ./user-requests.component.html */ "./src/app/user/user-requests/user-requests.component.html"),
            styles: [__webpack_require__(/*! ./user-requests.component.css */ "./src/app/user/user-requests/user-requests.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_shared_module_service__WEBPACK_IMPORTED_MODULE_3__["SharedModuleService"], src_app_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"],
            _user_socket_service__WEBPACK_IMPORTED_MODULE_6__["UserSocketService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"], _user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]])
    ], UserRequestsComponent);
    return UserRequestsComponent;
}());



/***/ }),

/***/ "./src/app/user/user-socket.service.ts":
/*!*********************************************!*\
  !*** ./src/app/user/user-socket.service.ts ***!
  \*********************************************/
/*! exports provided: UserSocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSocketService", function() { return UserSocketService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _globalConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../globalConfig */ "./src/app/globalConfig.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





var UserSocketService = /** @class */ (function () {
    function UserSocketService() {
        var _this = this;
        this.url = "" + _globalConfig__WEBPACK_IMPORTED_MODULE_3__["GlobalConfig"].serverUrl;
        this.onSendUserRequest = function () {
            return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].create(function (observer) {
                _this.socket.on('notify-about-request', function (data) {
                    observer.next(data);
                });
            });
        }; //end of on send user request
        this.onAcceptUserRequest = function () {
            return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].create(function (observer) {
                _this.socket.on('request-accepted', function (data) {
                    observer.next(data);
                });
            });
        }; //end of on accept user request
        this.onCancelUserRequest = function () {
            return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].create(function (observer) {
                _this.socket.on('update-cancel-request', function (userId) {
                    observer.next(userId);
                });
            });
        }; //end of on cancel user request
        this.onNotifyListOperation = function () {
            return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].create(function (observer) {
                _this.socket.on('notify-list-operation', function (data) {
                    observer.next(data);
                });
            });
        };
        this.onNotifyItemOperation = function () {
            return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].create(function (observer) {
                _this.socket.on('notify-item-operation', function (data) {
                    observer.next(data);
                });
            });
        };
        this.onNotifySubItemOperation = function () {
            return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].create(function (observer) {
                _this.socket.on('notify-subItem-operation', function (data) {
                    observer.next(data);
                });
            });
        };
        this.onNotifyItemEdited = function () {
            return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].create(function (observer) {
                _this.socket.on('notify-edit-item', function (data) {
                    observer.next(data);
                });
            });
        };
        this.onDecrementReqCount = function () {
            return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].create(function (observer) {
                _this.socket.on('decrement-request-count', function (data) {
                    observer.next(data);
                });
            });
        };
        this.onIncrementActitvityCount = function () {
            return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].create(function (observer) {
                _this.socket.on('count-activities', function (data) {
                    observer.next(data);
                });
            });
        };
        this.onDeleteActivity = function () {
            return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].create(function (observer) {
                _this.socket.on('deleted-activity', function (data) {
                    observer.next(data);
                });
            });
        }; //end of on delete activity listen event
        //events to be emitted
        this.emitSendUserRequest = function (data) {
            _this.socket.emit('send-friend-request', data);
        };
        this.emitJoinSocket = function (userId) {
            _this.socket.emit('join-socket', userId);
        };
        this.emitFriendsSocket = function (friends) {
            _this.socket.emit('join-friends-room', friends);
        };
        this.emitAcceptRequest = function (data) {
            _this.socket.emit('accept-request', data);
        }; //end of emit cancel request
        this.emitCancelRequest = function (userId) {
            _this.socket.emit('cancel-request', userId);
        }; //end of emit cancel request
        this.emitDeleteActivity = function (data) {
            _this.socket.emit('delete-activity', data);
        };
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_2__(this.url);
    }
    UserSocketService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UserSocketService);
    return UserSocketService;
}());



/***/ }),

/***/ "./src/app/user/user-validation.service.ts":
/*!*************************************************!*\
  !*** ./src/app/user/user-validation.service.ts ***!
  \*************************************************/
/*! exports provided: UserValidationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserValidationService", function() { return UserValidationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UserValidationService = /** @class */ (function () {
    function UserValidationService() {
        /**
       * @description This is to validate email pattern
       * @author Bhaskar Pawar
       * @param {String} email
       * @returns boolean isMatch
       */
        this.validateEmail = function (email) {
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
                return false;
            }
            else {
                return true;
            }
        }; // end of Email
        /**
         * @description Minimum 8 characters which contain only characters,numeric digits, underscore and first character must be a letter
         * @author Bhaskar Pawar
         * @param {String} password
         * @returns boolean is criteria matched or not
         */
        this.validatePassword = function (password) {
            if (/^[A-Za-z0-9]\w{7,}$/.test(password)) {
                return false;
            }
            else {
                return true;
            }
        }; //end of Password
    }
    UserValidationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UserValidationService);
    return UserValidationService;
}());



/***/ }),

/***/ "./src/app/user/user.module.ts":
/*!*************************************!*\
  !*** ./src/app/user/user.module.ts ***!
  \*************************************/
/*! exports provided: UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/user/login/login.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/user/signup/signup.component.ts");
/* harmony import */ var _globalConfig__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../globalConfig */ "./src/app/globalConfig.ts");
/* harmony import */ var _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./reset-password/reset-password.component */ "./src/app/user/reset-password/reset-password.component.ts");
/* harmony import */ var _reset_password_link_reset_password_link_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./reset-password-link/reset-password-link.component */ "./src/app/user/reset-password-link/reset-password-link.component.ts");
/* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./user-profile/user-profile.component */ "./src/app/user/user-profile/user-profile.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _user_requests_user_requests_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./user-requests/user-requests.component */ "./src/app/user/user-requests/user-requests.component.ts");
/* harmony import */ var _find_friends_find_friends_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./find-friends/find-friends.component */ "./src/app/user/find-friends/find-friends.component.ts");
/* harmony import */ var _friends_friends_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./friends/friends.component */ "./src/app/user/friends/friends.component.ts");
/* harmony import */ var _activity_activity_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./activity/activity.component */ "./src/app/user/activity/activity.component.ts");

















var UserModule = /** @class */ (function () {
    function UserModule() {
    }
    UserModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"], _signup_signup_component__WEBPACK_IMPORTED_MODULE_7__["SignupComponent"], _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_9__["ResetPasswordComponent"], _reset_password_link_reset_password_link_component__WEBPACK_IMPORTED_MODULE_10__["ResetPasswordLinkComponent"], _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_11__["UserProfileComponent"], _user_requests_user_requests_component__WEBPACK_IMPORTED_MODULE_13__["UserRequestsComponent"], _find_friends_find_friends_component__WEBPACK_IMPORTED_MODULE_14__["FindFriendsComponent"], _friends_friends_component__WEBPACK_IMPORTED_MODULE_15__["FriendsComponent"], _activity_activity_component__WEBPACK_IMPORTED_MODULE_16__["ActivityComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_12__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                    { path: _globalConfig__WEBPACK_IMPORTED_MODULE_8__["GlobalConfig"].apiVersion + "/users/signup", component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_7__["SignupComponent"] },
                    { path: _globalConfig__WEBPACK_IMPORTED_MODULE_8__["GlobalConfig"].apiVersion + "/users/reset", component: _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_9__["ResetPasswordComponent"] },
                    { path: _globalConfig__WEBPACK_IMPORTED_MODULE_8__["GlobalConfig"].apiVersion + "/users/resetlink/:email", component: _reset_password_link_reset_password_link_component__WEBPACK_IMPORTED_MODULE_10__["ResetPasswordLinkComponent"] },
                    { path: _globalConfig__WEBPACK_IMPORTED_MODULE_8__["GlobalConfig"].apiVersion + "/users/:userId/profile", component: _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_11__["UserProfileComponent"] },
                    { path: _globalConfig__WEBPACK_IMPORTED_MODULE_8__["GlobalConfig"].apiVersion + "/users/:userId/requests", component: _user_requests_user_requests_component__WEBPACK_IMPORTED_MODULE_13__["UserRequestsComponent"] },
                    { path: _globalConfig__WEBPACK_IMPORTED_MODULE_8__["GlobalConfig"].apiVersion + "/users/find", component: _find_friends_find_friends_component__WEBPACK_IMPORTED_MODULE_14__["FindFriendsComponent"] },
                    { path: _globalConfig__WEBPACK_IMPORTED_MODULE_8__["GlobalConfig"].apiVersion + "/users/:userId/friends", component: _friends_friends_component__WEBPACK_IMPORTED_MODULE_15__["FriendsComponent"] },
                    { path: _globalConfig__WEBPACK_IMPORTED_MODULE_8__["GlobalConfig"].apiVersion + "/users/:userId/activities", component: _activity_activity_component__WEBPACK_IMPORTED_MODULE_16__["ActivityComponent"] }
                ])
            ]
        })
    ], UserModule);
    return UserModule;
}());



/***/ }),

/***/ "./src/app/user/user.service.ts":
/*!**************************************!*\
  !*** ./src/app/user/user.service.ts ***!
  \**************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var rxjs_add_operator_do__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/do */ "./node_modules/rxjs-compat/_esm5/add/operator/do.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm5/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var rxjs_add_observable_throw__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/add/observable/throw */ "./node_modules/rxjs-compat/_esm5/add/observable/throw.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _globalConfig__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../globalConfig */ "./src/app/globalConfig.ts");









var UserService = /** @class */ (function () {
    function UserService(_http) {
        var _this = this;
        this._http = _http;
        this.baseUrl = _globalConfig__WEBPACK_IMPORTED_MODULE_8__["GlobalConfig"].serverUrl + "/" + _globalConfig__WEBPACK_IMPORTED_MODULE_8__["GlobalConfig"].apiVersion + "/users";
        this.clientBaseUrl = _globalConfig__WEBPACK_IMPORTED_MODULE_8__["GlobalConfig"].clientUrl + "/" + _globalConfig__WEBPACK_IMPORTED_MODULE_8__["GlobalConfig"].apiVersion + "/users";
        this.getCountryNamesObj = function () {
            return _this._http.get("./assets/names.json").catch(_this.handleError);
        };
        this.getCountryPhonesobj = function () {
            return _this._http.get("./assets/phone.json").catch(_this.handleError);
        };
        /**
         * @author Bhaskar Pawar
         * @description calls the backend function for sign up
         * @param {Object} userData
         * @returns {Object} response
         */
        this.signUp = function (userData) {
            return _this._http.post(_this.baseUrl + "/signup", userData).catch(_this.handleError);
        };
        /**
         * @author Bhaskar Pawar
         * Temporary user information storage
         */
        this.setToLocalStorage = function (data) {
            localStorage.setItem('userInfo', JSON.stringify(data));
        }; // end of setLocalStorage 
        /**
         * @author Bhaskar Pawar
         */
        this.getFromLocalStorage = function () {
            return JSON.parse(localStorage.getItem('userInfo'));
        }; //end of getFromLocalStorage
        /**
        * @author Bhaskar Pawar
        * @description calls the backend function for logging in
        * @param {Object} userData
        * @returns {Object} response
        */
        this.logIn = function (loginData) {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
                .set('email', loginData.email)
                .set('password', loginData.password);
            return _this._http.post(_this.baseUrl + "/login", params).catch(_this.handleError);
        };
        /**
         * @description make a request to server to reset the password
         * @author Bhaskar Pawar
         * @returns {object} apiResponse
         */
        this.resetPassword = function (data) {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
                .set('email', data.email)
                .set('password', data.password);
            return _this._http.post(_this.baseUrl + "/reset", params).catch(_this.handleError);
        }; //end of reset password
        /**
         * @author Bhaskar Pawar
         * @param email
         */
        this.checkUserExist = function (email) {
            return _this._http.get(_this.baseUrl + "/reset?email=" + email).catch(_this.handleError);
        }; // end of check user list
        /**
         * @description requests server to send email
         * @author Bhaskar Pawar
         * @param {any} data
         * @returns {Object} result
         */
        this.sendEmail = function (email) {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
                .set("email", email)
                .set("clientUrl", _this.clientBaseUrl);
            return _this._http.post(_this.baseUrl + "/sendemail", params).catch(_this.handleError);
        };
        /**
        * This will delete the temporary data also remove authToken from server
        * @author Bhaskar Pawar
        * @param userId
       */
        this.logOut = function (userId) {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
                .set('userId', userId);
            return _this._http.post(_this.baseUrl + "/logout", params);
        }; //end of log out
    }
    UserService.prototype.handleError = function (err) {
        var errorMessage = '';
        if (err.error instanceof Error) {
            errorMessage = "An error occurred: " + err.error.message;
        }
        else {
            errorMessage = "Server returned code: " + err.status + ", error message is: " + err.message;
        } // end condition *if
        return rxjs__WEBPACK_IMPORTED_MODULE_7__["Observable"].throw(errorMessage);
    }; // END handleError
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\BHASKAR\Work\Project\todo-management-system\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map