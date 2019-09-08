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

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-nav {\r\n  /* background: red; */\r\n  width: 100%;\r\n  /* height: 40px; */\r\n}\r\n.content-area{\r\n  padding: 0!important;\r\n  margin-bottom: 150px;\r\n  text-justify: auto\r\n  /* position: absolute!important; */\r\n}\r\n.container-fluid{\r\n  padding: 40px;\r\n}\r\n.row{\r\n  margin:0!important;\r\n}\r\n.justify{\r\n  text-align: justify;\r\n}\r\n/* h5{\r\n  font-weight: 200;\r\n  font-size: 35px;\r\n} */\r\n/* h4{\r\n  display: block\r\n} */\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osbUJBQW1CO0NBQ3BCO0FBQ0Q7RUFDRSxxQkFBcUI7RUFDckIscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixtQ0FBbUM7Q0FDcEM7QUFDRDtFQUNFLGNBQWM7Q0FDZjtBQUNEO0VBQ0UsbUJBQW1CO0NBQ3BCO0FBQ0Q7RUFDRSxvQkFBb0I7Q0FDckI7QUFDRDs7O0lBR0k7QUFDSjs7SUFFSSIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyLW5hdiB7XHJcbiAgLyogYmFja2dyb3VuZDogcmVkOyAqL1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIC8qIGhlaWdodDogNDBweDsgKi9cclxufVxyXG4uY29udGVudC1hcmVhe1xyXG4gIHBhZGRpbmc6IDAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbi1ib3R0b206IDE1MHB4O1xyXG4gIHRleHQtanVzdGlmeTogYXV0b1xyXG4gIC8qIHBvc2l0aW9uOiBhYnNvbHV0ZSFpbXBvcnRhbnQ7ICovXHJcbn1cclxuLmNvbnRhaW5lci1mbHVpZHtcclxuICBwYWRkaW5nOiA0MHB4O1xyXG59XHJcbi5yb3d7XHJcbiAgbWFyZ2luOjAhaW1wb3J0YW50O1xyXG59XHJcbi5qdXN0aWZ5e1xyXG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbn1cclxuLyogaDV7XHJcbiAgZm9udC13ZWlnaHQ6IDIwMDtcclxuICBmb250LXNpemU6IDM1cHg7XHJcbn0gKi9cclxuLyogaDR7XHJcbiAgZGlzcGxheTogYmxvY2tcclxufSAqLyJdfQ== */"

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\n  <app-navbar></app-navbar>\n  <div class=\"content-container\">\n    <div class=\"content-area\">\n      <div class=\"row\">\n        <div class=\"header-nav\">\n          <!-- <div class=\"col-12 nav-text\"> -->\n          <nav aria-label=\"breadcrumb\">\n            <ol class=\"breadcrumb\">\n              <li class=\"breadcrumb-item active\" aria-current=\"page\">ABOUT US</li>\n            </ol>\n          </nav>\n          <!-- </div> -->\n        </div>\n\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-8 text-right subnav\">\n          <div class=\"sub-breadcumb\">\n            <nav aria-label=\"breadcrumb\">\n              <ol class=\"breadcrumb\">\n                <li class=\"breadcrumb-item\"><a routerLink=\"/\">HOME</a></li>\n                <li class=\"breadcrumb-item\"><a routerLink=\"/about\">ABOUT US</a></li>\n              </ol>\n            </nav>\n          </div>\n        </div>\n      </div>\n      <div class=\"main-content\">\n        <div class=\"container-fluid\">\n          <div class=\"container justify\">\n\n            <!-- <div class=\"col-md-12 col-sm-12\"> -->\n              <h5 class=\"h5-responsive animated slideInLeft\" data-wow-delay=\"0.10s\">About Kingdom Support\n                Initiatives(KSI)</h5>\n            <!-- </div> -->\n            <p class=\"text-muted animated slideInLeft\" data-wow-delay=\"0.16s\">\n              Kingdom Support Initiatives is a God-ordained commission for <strong><i>raising</i></strong> God-centred\n              generation who will\n              impact the world with the new life that is in Jesus Christ. Through our initiatives, we reaffirm God-\n              consciousness in our everyday life and create platforms for disciples to connect, interact and strengthen\n              one another to grow in God. Like Aaron and Hur who held Moses’ hands, we <strong><i>hold others’ hands by\n                  servicing</i></strong> kingdom projects, ideas and callings through diverse opportunities. <br>\n              <br />\n              KSi started in 2014 with our daily devotional and subsequently Kingdom Life Summit. We are a team of\n              God-loving brethren whom God has called and earnestly pray, ‘Thy kingdom come and Thy will be done\n              on earth as it in heaven’ (Matthew 6:10).\n              <br />\n              <br />\n              At Kingdom Support Initiatives (KSi), we are called to:<br />\n              Service God’s bride to build a generation that truly know God.\n              Support kingdom partners in the execution of their God given ideas to impact the world.\n              <br />\n              <br />\n              <strong>\n                Slogan:\n              </strong> raising a God-conscious this generation\n\n\n            </p>\n            <div>\n                <h4>Our Key Initiatives</h4>\n                <h5 class=\"h5-responsive animated slideInLeft\" data-wow-delay=\"0.20s\">‘In His Footstep’</h5>\n\n                <p class=\"text-muted animated slideInLeft\" data-wow-delay=\"0.24s\">\n                  ‘In His Footstep’ is a daily devotional designed for readers who wants to build a continuous\n                  relationship\n                  with God. Through the word of God and the power of the Holy Spirit, the devotional seeks to help\n                  readers draw closer to God daily and raise a God-conscious generation.\n                  </p>\n\n                </div>\n                <br/>\n              <div class=\"\">\n                  <h5 class=\"h5-responsive animated slideInLeft\" data-wow-delay=\"0.10s\">Inspire Impact</h5>\n                  <!-- <br /> -->\n                  <div class=\"text-muted animated slideInLeft\">\n                    It is a podcast in the making to encourage and inspire God’s children to be bold and pursue whatever\n                    God is directing them to do. We believe as Christians, we are to make impact and make heaven, that’s\n                    what we do!\n                  \n                  </div>\n              </div>\n              <br/>\n              <div class=\"\">\n                  <h5 class=\"h5-responsive animated slideInLeft\" data-wow-delay=\"0.14s\">Kingdom Life Summit</h5>\n                  <!-- <h4 class=\"my-4 font-weight-bold\">Heading</h4> -->\n                  <div class=\"text-muted animated slideInLeft\" data-wow-delay=\"0.18s\">\n                    It is an annual retreat to refresh, re-evaluate and re-strategize in God’s presence. At the retreat,\n                    we\n                    spend time to pray, seek counsel from one another on God’s kingdom projects for the coming year.\n                    Since 2015, Kingdom Life Summit holds at the Redemption Camp in Nigeria.\n    \n                  </div>\n              </div>\n                  \n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!--Footer-->\n  <app-footer></app-footer>\n  <!--/.Footer-->\n</div>"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/all-posts/all-posts.component.html":
/*!****************************************************!*\
  !*** ./src/app/all-posts/all-posts.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\n  <app-navbar></app-navbar>\n  <div class=\"content-container\">\n    <div class=\"content-area\">\n      <div class=\"row\">\n        <div class=\"header-nav\">\n          <!-- <div class=\"col-12 nav-text\"> -->\n              <nav aria-label=\"breadcrumb\">\n                  <ol class=\"breadcrumb\">\n                    <li class=\"breadcrumb-item active\" aria-current=\"page\">BLOG POSTS</li>\n                  </ol>\n                </nav>\n          <!-- </div> -->\n        </div>\n\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-8 text-right subnav\">\n          <div class=\"sub-breadcumb\">\n              <nav aria-label=\"breadcrumb\">\n                  <ol class=\"breadcrumb\">\n                    <li class=\"breadcrumb-item\"><a routerLink=\"/\">HOME</a></li>\n                    <li class=\"breadcrumb-item\"><a routerLink=\"/\">BLOG</a></li>\n                  </ol>\n                </nav>\n              </div>\n        </div>\n      </div>\n      <div class=\"main-content\">\n        <main class=\"container\">\n          <section>\n            <h3 class=\"h3 text-center mb-5\">Read Some of Our Blog Post</h3>\n            <!--Grid row-->\n            <div class=\"row wow fadeIn item-hover\">\n              <!--Grid column-->\n              <div class=\"col-lg-6 col-md-12\">\n                <div class=\"post-thumnail-big\">\n                </div>\n              </div>\n              <div class=\"col-lg-6 col-md-12 px-4\">\n\n                <!--First row-->\n                <div class=\"row\">\n                  <div class=\"col-12\" *ngFor=\"let featured of featuredPost\">\n                    <h4 class=\"feature-title\">The Amazing Grace That Saves</h4>\n                    <p class=\"post-date\">Date: {{featured.createdDate | date}} &nbsp; &nbsp; Author: {{featured.author}}\n                    </p>\n                    <div style=\"height:5px\"></div>\n                    <p class=\"grey-text post-content\">\n                      {{featured.content}}\n                    </p>\n                    <p>\n                      <button class=\"btn btn-sm read-more\" (click)=\"readMore(featured.postid)\">\n                        Read More &nbsp; <mdb-icon fas icon=\"angle-double-right\"></mdb-icon>\n                      </button>\n                    </p>\n                  </div>\n                </div>\n                <!--/First row-->\n\n                <div style=\"height:30px\"></div>\n              </div>\n              <!--/Grid column-->\n            </div>\n            <!--/Grid row-->\n\n          </section>\n          <!-- popular post row -->\n          <section class=\"popular-post-row\">\n            <h4 class=\"h4 text-left mb-2\">Popular Posts</h4>\n\n            <!--Grid row-->\n            <div class=\"row wow fadeIn\">\n              <!--Grid column-->\n              <div class=\"col-lg-4 col-md-4 item-hover\" *ngFor=\"let popularPost of popular\">\n                <a routerLink=\"/single-post/{{popularPost.postid}}\">\n                  <div class=\"post-thumnail-small\">\n                  </div>\n                  <div class=\"popular-post-text\">\n                    <h5 class=\"h5 \">{{popularPost.title}}</h5>\n                    <p class=\"text-gray-dark\">{{popularPost.author}}</p>\n                  </div>\n                </a>\n                <!-- <p class=\"h5 text-center mb-4\">Watch our \"5 min Quick Start\" tutorial</p> -->\n\n              </div>\n              <!--/Grid column-->\n\n            </div>\n            <!--/Grid row-->\n\n          </section>\n          <div style=\"height: 30px\"></div>\n          <section class=\"popular-post-row\">\n            <h5 class=\"h5 text-left mb-2\">Recent Posts</h5>\n\n            <!--Grid row-->\n            <div class=\"row wow fadeIn\">\n              <!--Grid column-->\n\n              <div class=\"col-lg-4 col-md-4 item-hover\" *ngFor=\"let post of allItems\">\n                <hr>\n                <a routerLink=\"/single-post/{{post.postid}}\">\n                  <div class=\"row\">\n\n                    <div class=\"post-thumnail-small-xs col-md-4\">\n                    </div>\n                    <div class=\"recent-post-text col-md-8\">\n                      <h5 class=\"h5 recent-title\">{{post.title}}</h5>\n                      <p class=\"text-gray-dark text-left\">{{post.author}}</p>\n                    </div>\n                  </div>\n                </a>\n              </div>\n              <!--/Grid column-->\n\n            </div>\n            <!--/Grid row-->\n            <div style=\"height: 40px\"></div>\n            <nav aria-label=\"Page navigation example text-center\" *ngIf=\"pager.pages && pager.pages.length\" class=\"pagination\">\n              <ul class=\"pagination pagination-circle pg-blue\">\n                <li class=\"page-item disabled\"><a class=\"page-link\" (click)=\"setPage(1)\"\n                    [ngClass]=\"{disabled:pager.currentPage === 1}\" mdbWavesEffect>First</a></li>\n                <li class=\"page-item disabled\" [ngClass]=\"{disabled:pager.currentPage === 1}\">\n                  <a class=\"page-link\" aria-label=\"Previous\" (click)=\"setPage(pager.currentPage - 1)\" mdbWavesEffect>\n                    <span aria-hidden=\"true\">&laquo;</span>\n                    <span class=\"sr-only\">Previous</span>\n                  </a>\n                <li class=\"page-item\" *ngFor=\"let page of pager.pages\" [ngClass]=\"{active:pager.currentPage === page}\">\n                  <a class=\"page-link\" (click)=\"setPage(page)\" mdbWavesEffect>\n                    {{page}}\n                  </a></li>\n                <li class=\"page-item\" [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\n                  <a class=\"page-link\" aria-label=\"Next\" (click)=\"setPage(pager.currentPage + 1)\" mdbWavesEffect>\n                    <span aria-hidden=\"true\">&raquo;</span>\n                    <span class=\"sr-only\">Next</span>\n                  </a>\n                </li>\n                <li class=\"page-item\" [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\"><a class=\"page-link\"\n                    (click)=\"setPage(pager.totalPages)\" mdbWavesEffect>Last</a></li>\n              </ul>\n            </nav>\n          </section>\n          <div style=\"height: 30px\"></div>\n        </main>\n      </div>\n    </div>\n  </div>\n  <!--Footer-->\n  <app-footer></app-footer>\n  <!--/.Footer-->\n</div>"

/***/ }),

/***/ "./src/app/all-posts/all-posts.component.scss":
/*!****************************************************!*\
  !*** ./src/app/all-posts/all-posts.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-nav {\n  /* background: red; */\n  width: 100%;\n  /* height: 40px; */ }\n\n.content-area {\n  padding: 0 !important; }\n\n.row {\n  margin: 0 !important; }\n\n.post-thumnail-big {\n  background-image: url('cason-asher-1530538-unsplash.jpg');\n  background-size: cover;\n  background-position: center;\n  height: 100%;\n  min-height: 330px;\n  box-shadow: 0px 4px 15px 0px rgba(0, 0, 0, 0.1);\n  transition: all 0.3s ease; }\n\n.item-hover {\n  transition: all 0.3s ease; }\n\n.item-hover:hover {\n  transform: scale(1.03); }\n\n.read-more {\n  color: #17a2b8; }\n\n.post-date {\n  color: #17a2b8; }\n\n.text-gray-dark {\n  color: #777 !important; }\n\n.post-content {\n  text-align: justify; }\n\n.popular-post-row {\n  margin-top: 50px !important;\n  margin-bottom: 50px !important; }\n\n.post-thumnail-small {\n  height: 200px;\n  background: gray;\n  box-shadow: 0px 4px 15px 0px rgba(0, 0, 0, 0.1);\n  transition: all 0.3s ease; }\n\n.post-thumnail-small-xs {\n  height: 80px;\n  background: gray;\n  box-shadow: 0px 4px 15px 0px rgba(0, 0, 0, 0.1); }\n\n.popular-post-text {\n  margin-top: 20px !important;\n  margin-bottom: -100px;\n  text-align: center;\n  color: #17a2b8; }\n\n.recent-title {\n  color: #17a2b8; }\n\n.pagination.pg-blue .page-item.active .page-link:hover, .pagination.pg-blue .page-item.active .page-link {\n  background-color: #17a2b8 !important; }\n\n.popular-post-text p {\n  margin-top: -12px; }\n\n.post-thumnail-big:hover {\n  transform: scale(1.03); }\n\n/* .post-thumnail-small-xs:hover{\r\n    transform: scale(1.03);\r\n  } */\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWxsLXBvc3RzL0M6XFxVc2Vyc1xcT2xpdmlhXFxEZXNrdG9wXFxLaW5nZG9tLXN1cHBvcnQtaW5paWF0aXZlLXJldmFtcC9zcmNcXGFwcFxcYWxsLXBvc3RzXFxhbGwtcG9zdHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQkFBc0I7RUFDdEIsWUFBVztFQUNYLG1CQUFtQixFQUNwQjs7QUFDRDtFQUNFLHNCQUFvQixFQUNyQjs7QUFDRDtFQUNFLHFCQUFrQixFQUNuQjs7QUFDRDtFQUNFLDBEQUEwRTtFQUMxRSx1QkFBc0I7RUFDdEIsNEJBQTJCO0VBQzNCLGFBQVk7RUFDWixrQkFBaUI7RUFDakIsZ0RBQStDO0VBQy9DLDBCQUF5QixFQUMxQjs7QUFDRDtFQUNFLDBCQUF5QixFQUMxQjs7QUFDRDtFQUNFLHVCQUFzQixFQUN2Qjs7QUFDRDtFQUNFLGVBQWEsRUFDZDs7QUFDRDtFQUNFLGVBQWEsRUFDZDs7QUFDRDtFQUNFLHVCQUFvQixFQUNyQjs7QUFDRDtFQUNFLG9CQUFtQixFQUNwQjs7QUFFRDtFQUVFLDRCQUEwQjtFQUMxQiwrQkFBNkIsRUFDOUI7O0FBQ0Q7RUFFQSxjQUFhO0VBQ2IsaUJBQWdCO0VBQ2hCLGdEQUErQztFQUMvQywwQkFBeUIsRUFDeEI7O0FBRUQ7RUFDRSxhQUFZO0VBQ2QsaUJBQWdCO0VBQ2hCLGdEQUErQyxFQUM5Qzs7QUFFRDtFQUVHLDRCQUEwQjtFQUMzQixzQkFBcUI7RUFDckIsbUJBQWtCO0VBQ2xCLGVBQWEsRUFDZDs7QUFDRDtFQUNFLGVBQWEsRUFDZDs7QUFDRDtFQUNFLHFDQUFtQyxFQUNsQzs7QUFDSDtFQUNFLGtCQUFpQixFQUNsQjs7QUFDRDtFQUNFLHVCQUFzQixFQUN2Qjs7QUFFRDs7TUFFSSIsImZpbGUiOiJzcmMvYXBwL2FsbC1wb3N0cy9hbGwtcG9zdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyLW5hdiB7XHJcbiAgICAvKiBiYWNrZ3JvdW5kOiByZWQ7ICovXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIC8qIGhlaWdodDogNDBweDsgKi9cclxuICB9XHJcbiAgLmNvbnRlbnQtYXJlYXtcclxuICAgIHBhZGRpbmc6IDAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAucm93e1xyXG4gICAgbWFyZ2luOjAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAucG9zdC10aHVtbmFpbC1iaWd7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1nL2Nhc29uLWFzaGVyLTE1MzA1MzgtdW5zcGxhc2guanBnXCIpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG1pbi1oZWlnaHQ6IDMzMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDRweCAxNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gIH1cclxuICAuaXRlbS1ob3ZlcntcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgfVxyXG4gIC5pdGVtLWhvdmVyOmhvdmVye1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAzKTtcclxuICB9XHJcbiAgLnJlYWQtbW9yZXtcclxuICAgIGNvbG9yOiMxN2EyYjg7XHJcbiAgfVxyXG4gIC5wb3N0LWRhdGV7XHJcbiAgICBjb2xvcjojMTdhMmI4O1xyXG4gIH1cclxuICAudGV4dC1ncmF5LWRhcmt7XHJcbiAgICBjb2xvcjojNzc3IWltcG9ydGFudDtcclxuICB9XHJcbiAgLnBvc3QtY29udGVudHtcclxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgfVxyXG4gIFxyXG4gIC5wb3B1bGFyLXBvc3Qtcm93XHJcbiAge1xyXG4gICAgbWFyZ2luLXRvcDogNTBweCFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4IWltcG9ydGFudDtcclxuICB9XHJcbiAgLnBvc3QtdGh1bW5haWwtc21hbGxcclxuICB7XHJcbiAgaGVpZ2h0OiAyMDBweDtcclxuICBiYWNrZ3JvdW5kOiBncmF5O1xyXG4gIGJveC1zaGFkb3c6IDBweCA0cHggMTVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgfVxyXG4gIFxyXG4gIC5wb3N0LXRodW1uYWlsLXNtYWxsLXhze1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG4gIGJhY2tncm91bmQ6IGdyYXk7XHJcbiAgYm94LXNoYWRvdzogMHB4IDRweCAxNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgfVxyXG4gIFxyXG4gIC5wb3B1bGFyLXBvc3QtdGV4dFxyXG4gIHtcclxuICAgICBtYXJnaW4tdG9wOiAyMHB4IWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1ib3R0b206IC0xMDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiMxN2EyYjg7XHJcbiAgfVxyXG4gIC5yZWNlbnQtdGl0bGV7XHJcbiAgICBjb2xvcjojMTdhMmI4O1xyXG4gIH1cclxuICAucGFnaW5hdGlvbi5wZy1ibHVlIC5wYWdlLWl0ZW0uYWN0aXZlIC5wYWdlLWxpbms6aG92ZXIsIC5wYWdpbmF0aW9uLnBnLWJsdWUgLnBhZ2UtaXRlbS5hY3RpdmUgLnBhZ2UtbGlua3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxN2EyYjghaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIC5wb3B1bGFyLXBvc3QtdGV4dCBwe1xyXG4gICAgbWFyZ2luLXRvcDogLTEycHg7XHJcbiAgfVxyXG4gIC5wb3N0LXRodW1uYWlsLWJpZzpob3ZlcntcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMyk7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIC5wb3N0LXRodW1uYWlsLXNtYWxsLXhzOmhvdmVye1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAzKTtcclxuICB9ICovIl19 */"

/***/ }),

/***/ "./src/app/all-posts/all-posts.component.ts":
/*!**************************************************!*\
  !*** ./src/app/all-posts/all-posts.component.ts ***!
  \**************************************************/
/*! exports provided: AllPostsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllPostsComponent", function() { return AllPostsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _providers_main_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../providers/main-service.service */ "./src/app/providers/main-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _providers_pagination_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../providers/pagination.service */ "./src/app/providers/pagination.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AllPostsComponent = /** @class */ (function () {
    function AllPostsComponent(service, router, pagination) {
        this.service = service;
        this.router = router;
        this.pagination = pagination;
        this.RecentPosts = [];
        this.popular = [];
        this.getFeaturedPost();
        this.getRecent();
        this.getPopularPost();
    }
    AllPostsComponent.prototype.ngOnInit = function () {
    };
    AllPostsComponent.prototype.getRecent = function () {
        var _this = this;
        this.service.getRecent().subscribe(function (response) {
            // this.RecentPosts = response['data'];
            console.log(_this.RecentPosts);
            _this.allItems = response['data'];
            console.log(_this.allItems);
            // initialize to page 1
            _this.setPage(1);
        });
    };
    AllPostsComponent.prototype.setPage = function (page) {
        // get pager object from service
        this.pager = this.pagination.getPager(this.allItems.length, page);
        // get current page of items
        this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
        console.log(this.pager);
    };
    AllPostsComponent.prototype.getFeaturedPost = function () {
        var _this = this;
        this.service.getSinglePost().subscribe(function (response) {
            _this.featuredPost = response['data'];
            console.log(_this.featuredPost);
        });
    };
    AllPostsComponent.prototype.getPopularPost = function () {
        var _this = this;
        this.service.getPopularPost().subscribe(function (Response) {
            _this.popular = Response['data'];
            console.log(_this.popular);
        });
    };
    AllPostsComponent.prototype.navigateAllPost = function () {
        this.router.navigate(['/list-of-all-posts']);
    };
    AllPostsComponent.prototype.readMore = function (postid) {
        this.router.navigate(['/single-post/' + postid]);
    };
    AllPostsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-all-posts',
            template: __webpack_require__(/*! ./all-posts.component.html */ "./src/app/all-posts/all-posts.component.html"),
            styles: [__webpack_require__(/*! ./all-posts.component.scss */ "./src/app/all-posts/all-posts.component.scss")]
        }),
        __metadata("design:paramtypes", [_providers_main_service_service__WEBPACK_IMPORTED_MODULE_1__["MainServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _providers_pagination_service__WEBPACK_IMPORTED_MODULE_3__["paginationService"]])
    ], AllPostsComponent);
    return AllPostsComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _all_posts_all_posts_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./all-posts/all-posts.component */ "./src/app/all-posts/all-posts.component.ts");
/* harmony import */ var _single_post_detail_single_post_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./single-post-detail/single-post-detail.component */ "./src/app/single-post-detail/single-post-detail.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _blog_blog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./blog/blog.component */ "./src/app/blog/blog.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: "", redirectTo: '/', pathMatch: 'full' },
    { path: "home", component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: "about", component: _about_about_component__WEBPACK_IMPORTED_MODULE_7__["AboutComponent"] },
    { path: "blog", component: _blog_blog_component__WEBPACK_IMPORTED_MODULE_6__["BlogComponent"] },
    { path: "contact", component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__["ContactComponent"] },
    { path: "*", component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: "", component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: "single-post/:postid", component: _single_post_detail_single_post_detail_component__WEBPACK_IMPORTED_MODULE_4__["SinglePostDetailComponent"] },
    { path: "list-of-all-posts", component: _all_posts_all_posts_component__WEBPACK_IMPORTED_MODULE_3__["AllPostsComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



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

module.exports = "\n<router-outlet></router-outlet>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Kingdom-support-iniiative-revamp';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @nicky-lenaers/ngx-scroll-to */ "./node_modules/@nicky-lenaers/ngx-scroll-to/fesm5/nicky-lenaers-ngx-scroll-to.js");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _all_posts_all_posts_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./all-posts/all-posts.component */ "./src/app/all-posts/all-posts.component.ts");
/* harmony import */ var _single_post_detail_single_post_detail_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./single-post-detail/single-post-detail.component */ "./src/app/single-post-detail/single-post-detail.component.ts");
/* harmony import */ var _blog_blog_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./blog/blog.component */ "./src/app/blog/blog.component.ts");
/* harmony import */ var _providers_pagination_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./providers/pagination.service */ "./src/app/providers/pagination.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_10__["AboutComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_11__["ContactComponent"],
                _all_posts_all_posts_component__WEBPACK_IMPORTED_MODULE_12__["AllPostsComponent"],
                _single_post_detail_single_post_detail_component__WEBPACK_IMPORTED_MODULE_13__["SinglePostDetailComponent"],
                _blog_blog_component__WEBPACK_IMPORTED_MODULE_14__["BlogComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                // BrowserAnimationsModule,
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                // MatIconRegistry,
                // MatIconModule,
                _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_9__["ScrollToModule"].forRoot(),
            ],
            providers: [_angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], _providers_pagination_service__WEBPACK_IMPORTED_MODULE_15__["paginationService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/blog/blog.component.css":
/*!*****************************************!*\
  !*** ./src/app/blog/blog.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-nav {\r\n  /* background: red; */\r\n  width: 100%;\r\n  /* height: 40px; */\r\n}\r\n.content-area{\r\n  padding: 0!important;\r\n}\r\n.row{\r\n  margin:0!important;\r\n}\r\n.post-thumnail-big{\r\n  background: url('cason-asher-1530538-unsplash.jpg');\r\n  background-size: cover;\r\n  background-position: center;\r\n  height: 100%;\r\n  min-height: 330px;\r\n  box-shadow: 0px 4px 15px 0px rgba(0, 0, 0, 0.1);\r\n  transition: all 0.3s ease;\r\n}\r\n.item-hover{\r\n  transition: all 0.3s ease;\r\n}\r\n.item-hover:hover{\r\n  transform: scale(1.03);\r\n}\r\n.read-more{\r\n  color:#17a2b8;\r\n}\r\n.post-date{\r\n  color:#17a2b8;\r\n}\r\n.text-gray-dark{\r\n  color:#777!important;\r\n}\r\n.post-content{\r\n  text-align: justify;\r\n}\r\n.popular-post-row\r\n{\r\n  margin-top: 50px!important;\r\n  margin-bottom: 50px!important;\r\n}\r\n.post-thumnail-small\r\n{\r\nheight: 200px;\r\nbackground: gray;\r\nbox-shadow: 0px 4px 15px 0px rgba(0, 0, 0, 0.1);\r\ntransition: all 0.3s ease;\r\n}\r\n.post-thumnail-small-xs{\r\n  height: 80px;\r\nbackground: gray;\r\nbox-shadow: 0px 4px 15px 0px rgba(0, 0, 0, 0.1);\r\n}\r\n.popular-post-text\r\n{\r\n   margin-top: 20px!important;\r\n  margin-bottom: -100px;\r\n  text-align: center;\r\n  color:#17a2b8;\r\n}\r\n.recent-title{\r\n  color:#17a2b8;\r\n}\r\n.popular-post-text p{\r\n  margin-top: -12px;\r\n}\r\n.post-thumnail-big:hover{\r\n  transform: scale(1.03);\r\n}\r\n/* .post-thumnail-small-xs:hover{\r\n  transform: scale(1.03);\r\n} */\r\n@media screen and (max-width:766px){\r\n  .post-thumnail-small{\r\n    margin-bottom: 20px;\r\n  }\r\n  .post-thumnail-small-xs{\r\n    height: 170px;\r\n  }\r\n  .popular-post{\r\n    margin-bottom: 100px;\r\n  }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmxvZy9ibG9nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLG1CQUFtQjtDQUNwQjtBQUNEO0VBQ0UscUJBQXFCO0NBQ3RCO0FBQ0Q7RUFDRSxtQkFBbUI7Q0FDcEI7QUFDRDtFQUNFLG9EQUFxRTtFQUNyRSx1QkFBdUI7RUFDdkIsNEJBQTRCO0VBQzVCLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsZ0RBQWdEO0VBQ2hELDBCQUEwQjtDQUMzQjtBQUNEO0VBQ0UsMEJBQTBCO0NBQzNCO0FBQ0Q7RUFDRSx1QkFBdUI7Q0FDeEI7QUFDRDtFQUNFLGNBQWM7Q0FDZjtBQUNEO0VBQ0UsY0FBYztDQUNmO0FBQ0Q7RUFDRSxxQkFBcUI7Q0FDdEI7QUFDRDtFQUNFLG9CQUFvQjtDQUNyQjtBQUVEOztFQUVFLDJCQUEyQjtFQUMzQiw4QkFBOEI7Q0FDL0I7QUFDRDs7QUFFQSxjQUFjO0FBQ2QsaUJBQWlCO0FBQ2pCLGdEQUFnRDtBQUNoRCwwQkFBMEI7Q0FDekI7QUFFRDtFQUNFLGFBQWE7QUFDZixpQkFBaUI7QUFDakIsZ0RBQWdEO0NBQy9DO0FBRUQ7O0dBRUcsMkJBQTJCO0VBQzVCLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsY0FBYztDQUNmO0FBQ0Q7RUFDRSxjQUFjO0NBQ2Y7QUFDRDtFQUNFLGtCQUFrQjtDQUNuQjtBQUNEO0VBQ0UsdUJBQXVCO0NBQ3hCO0FBQ0Q7O0lBRUk7QUFFSjtFQUNFO0lBQ0Usb0JBQW9CO0dBQ3JCO0VBQ0Q7SUFDRSxjQUFjO0dBQ2Y7RUFDRDtJQUNFLHFCQUFxQjtHQUN0QjtDQUNGIiwiZmlsZSI6InNyYy9hcHAvYmxvZy9ibG9nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyLW5hdiB7XHJcbiAgLyogYmFja2dyb3VuZDogcmVkOyAqL1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIC8qIGhlaWdodDogNDBweDsgKi9cclxufVxyXG4uY29udGVudC1hcmVhe1xyXG4gIHBhZGRpbmc6IDAhaW1wb3J0YW50O1xyXG59XHJcbi5yb3d7XHJcbiAgbWFyZ2luOjAhaW1wb3J0YW50O1xyXG59XHJcbi5wb3N0LXRodW1uYWlsLWJpZ3tcclxuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1nL2Nhc29uLWFzaGVyLTE1MzA1MzgtdW5zcGxhc2guanBnXCIpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBtaW4taGVpZ2h0OiAzMzBweDtcclxuICBib3gtc2hhZG93OiAwcHggNHB4IDE1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG59XHJcbi5pdGVtLWhvdmVye1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbn1cclxuLml0ZW0taG92ZXI6aG92ZXJ7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjAzKTtcclxufVxyXG4ucmVhZC1tb3Jle1xyXG4gIGNvbG9yOiMxN2EyYjg7XHJcbn1cclxuLnBvc3QtZGF0ZXtcclxuICBjb2xvcjojMTdhMmI4O1xyXG59XHJcbi50ZXh0LWdyYXktZGFya3tcclxuICBjb2xvcjojNzc3IWltcG9ydGFudDtcclxufVxyXG4ucG9zdC1jb250ZW50e1xyXG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbn1cclxuXHJcbi5wb3B1bGFyLXBvc3Qtcm93XHJcbntcclxuICBtYXJnaW4tdG9wOiA1MHB4IWltcG9ydGFudDtcclxuICBtYXJnaW4tYm90dG9tOiA1MHB4IWltcG9ydGFudDtcclxufVxyXG4ucG9zdC10aHVtbmFpbC1zbWFsbFxyXG57XHJcbmhlaWdodDogMjAwcHg7XHJcbmJhY2tncm91bmQ6IGdyYXk7XHJcbmJveC1zaGFkb3c6IDBweCA0cHggMTVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG50cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG59XHJcblxyXG4ucG9zdC10aHVtbmFpbC1zbWFsbC14c3tcclxuICBoZWlnaHQ6IDgwcHg7XHJcbmJhY2tncm91bmQ6IGdyYXk7XHJcbmJveC1zaGFkb3c6IDBweCA0cHggMTVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG59XHJcblxyXG4ucG9wdWxhci1wb3N0LXRleHRcclxue1xyXG4gICBtYXJnaW4tdG9wOiAyMHB4IWltcG9ydGFudDtcclxuICBtYXJnaW4tYm90dG9tOiAtMTAwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiMxN2EyYjg7XHJcbn1cclxuLnJlY2VudC10aXRsZXtcclxuICBjb2xvcjojMTdhMmI4O1xyXG59XHJcbi5wb3B1bGFyLXBvc3QtdGV4dCBwe1xyXG4gIG1hcmdpbi10b3A6IC0xMnB4O1xyXG59XHJcbi5wb3N0LXRodW1uYWlsLWJpZzpob3ZlcntcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDMpO1xyXG59XHJcbi8qIC5wb3N0LXRodW1uYWlsLXNtYWxsLXhzOmhvdmVye1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wMyk7XHJcbn0gKi9cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NzY2cHgpe1xyXG4gIC5wb3N0LXRodW1uYWlsLXNtYWxse1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICB9XHJcbiAgLnBvc3QtdGh1bW5haWwtc21hbGwteHN7XHJcbiAgICBoZWlnaHQ6IDE3MHB4O1xyXG4gIH1cclxuICAucG9wdWxhci1wb3N0e1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XHJcbiAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/blog/blog.component.html":
/*!******************************************!*\
  !*** ./src/app/blog/blog.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\n  <app-navbar></app-navbar>\n  <div class=\"content-container\">\n    <div class=\"content-area\">\n      <div class=\"row\">\n        <div class=\"header-nav\">\n          <!-- <div class=\"col-12 nav-text\"> -->\n              <nav aria-label=\"breadcrumb\">\n                  <ol class=\"breadcrumb\">\n                    <li class=\"breadcrumb-item active\" aria-current=\"page\">BLOG</li>\n                  </ol>\n                </nav>\n          <!-- </div> -->\n        </div>\n\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-8 text-right subnav\">\n          <div class=\"sub-breadcumb\">\n            <nav aria-label=\"breadcrumb\">\n                <ol class=\"breadcrumb\">\n                  <li class=\"breadcrumb-item\"><a routerLink=\"/\">HOME</a></li>\n                  <li class=\"breadcrumb-item\"><a routerLink=\"/blog\">BLOG</a></li>\n                </ol>\n              </nav>\n            </div>\n        </div>\n      </div>\n      <div class=\"main-content\">\n        <main class=\"container\">\n          <section>\n            <h3 class=\"h3 text-center mb-5\">Read Some of Our Blog Post</h3>\n            <!--Grid row-->\n            <div class=\"row wow fadeIn item-hover\">\n              <!--Grid column-->\n              <div class=\"col-lg-6 col-md-12\">\n                <div class=\"post-thumnail-big\">\n                </div>\n              </div>\n              <div class=\"col-lg-6 col-md-12 \">\n\n                <!--First row-->\n                <div class=\"row\">\n                  <div class=\"col-12\" *ngFor=\"let featured of featuredPost\">\n                    <h4 class=\"feature-title\">The Amazing Grace That Saves</h4>\n                    <p class=\"post-date\">Date: {{featured.createdDate | date}} &nbsp; &nbsp; Author: {{featured.author}}\n                    </p>\n                    <div style=\"height:5px\"></div>\n                    <p class=\"grey-text post-content\">\n                      {{featured.content}}\n                    </p>\n                    <p>\n                      <button class=\"btn btn-sm read-more\" (click)=\"readMore(featured.postid)\">\n                        Read More &nbsp; <mdb-icon fas icon=\"angle-double-right\"></mdb-icon>\n                      </button>\n                    </p>\n                  </div>\n                </div>\n                <!--/First row-->\n\n                <div style=\"height:30px\"></div>\n              </div>\n              <!--/Grid column-->\n            </div>\n            <!--/Grid row-->\n\n          </section>\n          <!-- popular post row -->\n          <section class=\"popular-post-row\">\n            <h4 class=\"h4 text-left mb-2\">Popular Posts</h4>\n\n            <!--Grid row-->\n            <div class=\"row wow fadeIn\">\n              <!--Grid column-->\n              <div class=\"col-lg-4 col-md-4 popular-post col-xs-12 item-hover\" *ngFor=\"let popularPost of popular\">\n                <a routerLink=\"/single-post/{{popularPost.postid}}\">\n                  <div class=\"post-thumnail-small\">\n                  </div>\n                  <div class=\"popular-post-text text-center\">\n                    <h5 class=\"h5 \">{{popularPost.title}}</h5>\n                    <p class=\"text-gray-dark\">{{popularPost.author}}</p>\n                  </div>\n                </a>\n                <!-- <p class=\"h5 text-center mb-4\">Watch our \"5 min Quick Start\" tutorial</p> -->\n\n              </div>\n              <!--/Grid column-->\n\n            </div>\n            <!--/Grid row-->\n\n          </section>\n          <div style=\"height: 30px\"></div>\n          <section class=\"popular-post-row\">\n            <h5 class=\"h5 text-left mb-2\">Recent Posts</h5>\n\n            <!--Grid row-->\n            <div class=\"row wow fadeIn\">\n              <!--Grid column-->\n\n              <div class=\"col-lg-4 col-md-4 col-xs-12 item-hover\" *ngFor=\"let post of RecentPosts\">\n                <hr>\n                <a routerLink=\"/single-post/{{post.postid}}\">\n                <div class=\"row\">\n                  \n                  <div class=\"post-thumnail-small-xs col-md-4\">\n                  </div>\n                  <div class=\"recent-post-text text-center col-md-8\">\n                    <h5 class=\"h5 recent-title\">{{post.title}}</h5>\n                    <p class=\"text-gray-dark text-left text-center\">{{post.author}}</p>\n                  </div>\n                </div>\n</a>\n              </div>\n              <!--/Grid column-->\n\n            </div>\n            <!--/Grid row-->\n            <div style=\"height: 18px\"></div>\n            <!--/Grid row-->\n            <div style=\"height: 30px\"></div>\n            <div class=\"row\">\n              <div class=\"col-md-12 text-center\">\n                <button class=\"btn btn-md  btn-primary btn-xs\" (click)=\"navigateAllPost()\">\n                  View More Post &nbsp; <mdb-icon fas icon=\"angle-double-right\"></mdb-icon>\n                </button>\n              </div>\n            </div>\n\n          </section>\n          <div style=\"height: 30px\"></div>\n        </main>\n      </div>\n    </div>\n  </div>\n  <!--Footer-->\n  <app-footer></app-footer>\n  <!--/.Footer-->\n</div>"

/***/ }),

/***/ "./src/app/blog/blog.component.ts":
/*!****************************************!*\
  !*** ./src/app/blog/blog.component.ts ***!
  \****************************************/
/*! exports provided: BlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogComponent", function() { return BlogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _providers_main_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../providers/main-service.service */ "./src/app/providers/main-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BlogComponent = /** @class */ (function () {
    function BlogComponent(service, router) {
        this.service = service;
        this.router = router;
        this.RecentPosts = [];
        this.popular = [];
        this.getFeaturedPost();
        this.getRecent();
        this.getPopularPost();
    }
    BlogComponent.prototype.ngOnInit = function () {
    };
    BlogComponent.prototype.getRecent = function () {
        var _this = this;
        this.service.getRecent().subscribe(function (response) {
            _this.RecentPosts = response['data'];
            console.log(_this.RecentPosts);
        });
    };
    BlogComponent.prototype.getFeaturedPost = function () {
        var _this = this;
        this.service.getSinglePost().subscribe(function (response) {
            _this.featuredPost = response['data'];
            console.log(_this.featuredPost);
        });
    };
    BlogComponent.prototype.getPopularPost = function () {
        var _this = this;
        this.service.getPopularPost().subscribe(function (Response) {
            _this.popular = Response['data'];
            console.log(_this.popular);
        });
    };
    BlogComponent.prototype.navigateAllPost = function () {
        this.router.navigate(['/list-of-all-posts']);
    };
    BlogComponent.prototype.readMore = function (postid) {
        this.router.navigate(['/single-post/' + postid]);
    };
    BlogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-blog',
            template: __webpack_require__(/*! ./blog.component.html */ "./src/app/blog/blog.component.html"),
            styles: [__webpack_require__(/*! ./blog.component.css */ "./src/app/blog/blog.component.css")]
        }),
        __metadata("design:paramtypes", [_providers_main_service_service__WEBPACK_IMPORTED_MODULE_1__["MainServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], BlogComponent);
    return BlogComponent;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.css":
/*!***********************************************!*\
  !*** ./src/app/contact/contact.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {padding-top: 5.5rem!important;}\r\n.header-nav {\r\n  /* background: red; */\r\n  width: 100%;\r\n  /* height: 40px; */\r\n}\r\n.content-area{\r\n  padding: 0!important;\r\n}\r\n.nav-text{\r\ntext-align: left;\r\npadding-left: 30px;\r\n/* line-height: -40px; */\r\n}\r\n.nav-text h3{\r\n  margin-top: 11px;\r\n  height: 56px;\r\n  box-sizing: content-box;\r\n\r\n}\r\n.hi-text{\r\n  font-size: 26px;\r\n  font-weight: 300;\r\n}\r\n.contact-us-medium h5{\r\nmargin-bottom: 0!important;\r\nfont-size: 17px;\r\n}\r\n.contact-us-medium{\r\n  margin-bottom: 16px;\r\n}\r\n.content-area{\r\n  display: block!important;\r\n}\r\n.main-content{\r\n  padding:40px;\r\n}\r\n.form-group label\r\n{\r\n  display: block;\r\n}\r\n.required{\r\n  width: 170px;\r\n  float: left!important;\r\n  margin: 15px 0 25px;;\r\n}\r\n.row{\r\n  margin: 0;\r\n}\r\n/* ng styles */\r\n.ng-valid[required], .ng-valid.required  {\r\n  border-left: 5px solid #42A948; /* green */\r\n}\r\n::-webkit-input-placeholder,select,input{\r\n  font-size: 15px;\r\n  color:#9e9e9e !important\r\n}\r\n::-moz-placeholder,select,input{\r\n  font-size: 15px;\r\n  color:#9e9e9e !important\r\n}\r\n::-ms-input-placeholder,select,input{\r\n  font-size: 15px;\r\n  color:#9e9e9e !important\r\n}\r\n::placeholder,select,input{\r\n  font-size: 15px;\r\n  color:#9e9e9e !important\r\n}\r\n.required{\r\n      width: 100%; \r\n    float: none!important;\r\n    margin: 0;\r\n}\r\n/* .success{\r\n  padding: 10px;\r\n  background: #42A948;\r\n  text-align: center;\r\n  color: aliceblue\r\n}\r\n\r\n.danger{\r\n  padding: 10px;\r\n  background:red;\r\n  text-align: center;\r\n  color: aliceblue\r\n} */\r\nlabel{\r\n  color:#6c757d;\r\n\r\n}\r\n.btn.btn-lg {\r\n  padding: 1rem 2.4rem;\r\n  font-size: .94rem;\r\n}\r\n.btn.disabled, .btn:disabled {\r\n  opacity: .65;\r\n}\r\n[type=reset], [type=submit], button, html [type=button] {\r\n  -webkit-appearance: none;\r\n}\r\n.btn-pink {\r\n  /* background-color: #ec407a!important; */\r\n  color: #fff;\r\n}\r\n.btn {\r\n  box-shadow: 0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12);\r\n  padding: .84rem 2.14rem;\r\n  font-size: .81rem;\r\n  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;\r\n  margin: .375rem;\r\n  border: 0;\r\n  border-radius: .125rem;\r\n  cursor: pointer;\r\n  text-transform: uppercase;\r\n  white-space: normal;\r\n  word-wrap: break-word;\r\n  color: inherit;\r\n}\r\n.btn-pink:not([disabled]):not(.disabled).active, .btn-pink:not([disabled]):not(.disabled):active, .show>.btn-pink.dropdown-toggle {\r\n  box-shadow: 0 5px 11px 0 rgba(0,0,0,.18), 0 4px 15px 0 rgba(0,0,0,.15);\r\n  /* background-color: #b41249!important; */\r\n  color: #fff;\r\n}\r\n@media screen and (max-width:500px){\r\n  .hi-text{\r\n    font-size: 20px;\r\n\r\n  }\r\n}\r\n@media screen and (max-width:740px){\r\n  .main-content{\r\n    padding: 0;\r\n  }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSw4QkFBOEIsQ0FBQztBQUNyQztFQUNFLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osbUJBQW1CO0NBQ3BCO0FBQ0Q7RUFDRSxxQkFBcUI7Q0FDdEI7QUFDRDtBQUNBLGlCQUFpQjtBQUNqQixtQkFBbUI7QUFDbkIseUJBQXlCO0NBQ3hCO0FBQ0Q7RUFDRSxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLHdCQUF3Qjs7Q0FFekI7QUFDRDtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7Q0FDbEI7QUFDRDtBQUNBLDJCQUEyQjtBQUMzQixnQkFBZ0I7Q0FDZjtBQUNEO0VBQ0Usb0JBQW9CO0NBQ3JCO0FBQ0Q7RUFDRSx5QkFBeUI7Q0FDMUI7QUFFRDtFQUNFLGFBQWE7Q0FDZDtBQUNEOztFQUVFLGVBQWU7Q0FDaEI7QUFDRDtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsb0JBQW9CO0NBQ3JCO0FBQ0Q7RUFDRSxVQUFVO0NBQ1g7QUFFRCxlQUFlO0FBQ2Y7RUFDRSwrQkFBK0IsQ0FBQyxXQUFXO0NBQzVDO0FBRUQ7RUFDRSxnQkFBZ0I7RUFDaEIsd0JBQXdCO0NBQ3pCO0FBSEQ7RUFDRSxnQkFBZ0I7RUFDaEIsd0JBQXdCO0NBQ3pCO0FBSEQ7RUFDRSxnQkFBZ0I7RUFDaEIsd0JBQXdCO0NBQ3pCO0FBSEQ7RUFDRSxnQkFBZ0I7RUFDaEIsd0JBQXdCO0NBQ3pCO0FBQ0Q7TUFDTSxZQUFZO0lBQ2Qsc0JBQXNCO0lBQ3RCLFVBQVU7Q0FDYjtBQUNEOzs7Ozs7Ozs7Ozs7SUFZSTtBQUVKO0VBQ0UsY0FBYzs7Q0FFZjtBQUNEO0VBQ0UscUJBQXFCO0VBQ3JCLGtCQUFrQjtDQUNuQjtBQUNEO0VBQ0UsYUFBYTtDQUNkO0FBQ0Q7RUFDRSx5QkFBeUI7Q0FDMUI7QUFDRDtFQUNFLDBDQUEwQztFQUMxQyxZQUFZO0NBQ2I7QUFDRDtFQUNFLHNFQUFzRTtFQUN0RSx3QkFBd0I7RUFDeEIsa0JBQWtCO0VBQ2xCLCtIQUErSDtFQUMvSCxnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIsMEJBQTBCO0VBQzFCLG9CQUFvQjtFQUNwQixzQkFBc0I7RUFDdEIsZUFBZTtDQUNoQjtBQUNEO0VBQ0UsdUVBQXVFO0VBQ3ZFLDBDQUEwQztFQUMxQyxZQUFZO0NBQ2I7QUFFRDtFQUNFO0lBQ0UsZ0JBQWdCOztHQUVqQjtDQUNGO0FBRUQ7RUFDRTtJQUNFLFdBQVc7R0FDWjtDQUNGIiwiZmlsZSI6InNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtwYWRkaW5nLXRvcDogNS41cmVtIWltcG9ydGFudDt9XHJcbi5oZWFkZXItbmF2IHtcclxuICAvKiBiYWNrZ3JvdW5kOiByZWQ7ICovXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgLyogaGVpZ2h0OiA0MHB4OyAqL1xyXG59XHJcbi5jb250ZW50LWFyZWF7XHJcbiAgcGFkZGluZzogMCFpbXBvcnRhbnQ7XHJcbn1cclxuLm5hdi10ZXh0e1xyXG50ZXh0LWFsaWduOiBsZWZ0O1xyXG5wYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbi8qIGxpbmUtaGVpZ2h0OiAtNDBweDsgKi9cclxufVxyXG4ubmF2LXRleHQgaDN7XHJcbiAgbWFyZ2luLXRvcDogMTFweDtcclxuICBoZWlnaHQ6IDU2cHg7XHJcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XHJcblxyXG59XHJcbi5oaS10ZXh0e1xyXG4gIGZvbnQtc2l6ZTogMjZweDtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG59XHJcbi5jb250YWN0LXVzLW1lZGl1bSBoNXtcclxubWFyZ2luLWJvdHRvbTogMCFpbXBvcnRhbnQ7XHJcbmZvbnQtc2l6ZTogMTdweDtcclxufVxyXG4uY29udGFjdC11cy1tZWRpdW17XHJcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxufVxyXG4uY29udGVudC1hcmVhe1xyXG4gIGRpc3BsYXk6IGJsb2NrIWltcG9ydGFudDtcclxufVxyXG5cclxuLm1haW4tY29udGVudHtcclxuICBwYWRkaW5nOjQwcHg7XHJcbn1cclxuLmZvcm0tZ3JvdXAgbGFiZWxcclxue1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbi5yZXF1aXJlZHtcclxuICB3aWR0aDogMTcwcHg7XHJcbiAgZmxvYXQ6IGxlZnQhaW1wb3J0YW50O1xyXG4gIG1hcmdpbjogMTVweCAwIDI1cHg7O1xyXG59XHJcbi5yb3d7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4vKiBuZyBzdHlsZXMgKi9cclxuLm5nLXZhbGlkW3JlcXVpcmVkXSwgLm5nLXZhbGlkLnJlcXVpcmVkICB7XHJcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjNDJBOTQ4OyAvKiBncmVlbiAqL1xyXG59XHJcblxyXG46OnBsYWNlaG9sZGVyLHNlbGVjdCxpbnB1dHtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgY29sb3I6IzllOWU5ZSAhaW1wb3J0YW50XHJcbn1cclxuLnJlcXVpcmVke1xyXG4gICAgICB3aWR0aDogMTAwJTsgXHJcbiAgICBmbG9hdDogbm9uZSFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuLyogLnN1Y2Nlc3N7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBiYWNrZ3JvdW5kOiAjNDJBOTQ4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogYWxpY2VibHVlXHJcbn1cclxuXHJcbi5kYW5nZXJ7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBiYWNrZ3JvdW5kOnJlZDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6IGFsaWNlYmx1ZVxyXG59ICovXHJcbiAgXHJcbmxhYmVse1xyXG4gIGNvbG9yOiM2Yzc1N2Q7XHJcblxyXG59XHJcbi5idG4uYnRuLWxnIHtcclxuICBwYWRkaW5nOiAxcmVtIDIuNHJlbTtcclxuICBmb250LXNpemU6IC45NHJlbTtcclxufVxyXG4uYnRuLmRpc2FibGVkLCAuYnRuOmRpc2FibGVkIHtcclxuICBvcGFjaXR5OiAuNjU7XHJcbn1cclxuW3R5cGU9cmVzZXRdLCBbdHlwZT1zdWJtaXRdLCBidXR0b24sIGh0bWwgW3R5cGU9YnV0dG9uXSB7XHJcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG59XHJcbi5idG4tcGluayB7XHJcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogI2VjNDA3YSFpbXBvcnRhbnQ7ICovXHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuLmJ0biB7XHJcbiAgYm94LXNoYWRvdzogMCAycHggNXB4IDAgcmdiYSgwLDAsMCwuMTYpLCAwIDJweCAxMHB4IDAgcmdiYSgwLDAsMCwuMTIpO1xyXG4gIHBhZGRpbmc6IC44NHJlbSAyLjE0cmVtO1xyXG4gIGZvbnQtc2l6ZTogLjgxcmVtO1xyXG4gIHRyYW5zaXRpb246IGNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsYmFja2dyb3VuZC1jb2xvciAuMTVzIGVhc2UtaW4tb3V0LGJvcmRlci1jb2xvciAuMTVzIGVhc2UtaW4tb3V0LGJveC1zaGFkb3cgLjE1cyBlYXNlLWluLW91dDtcclxuICBtYXJnaW46IC4zNzVyZW07XHJcbiAgYm9yZGVyOiAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IC4xMjVyZW07XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcclxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgY29sb3I6IGluaGVyaXQ7XHJcbn1cclxuLmJ0bi1waW5rOm5vdChbZGlzYWJsZWRdKTpub3QoLmRpc2FibGVkKS5hY3RpdmUsIC5idG4tcGluazpub3QoW2Rpc2FibGVkXSk6bm90KC5kaXNhYmxlZCk6YWN0aXZlLCAuc2hvdz4uYnRuLXBpbmsuZHJvcGRvd24tdG9nZ2xlIHtcclxuICBib3gtc2hhZG93OiAwIDVweCAxMXB4IDAgcmdiYSgwLDAsMCwuMTgpLCAwIDRweCAxNXB4IDAgcmdiYSgwLDAsMCwuMTUpO1xyXG4gIC8qIGJhY2tncm91bmQtY29sb3I6ICNiNDEyNDkhaW1wb3J0YW50OyAqL1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjUwMHB4KXtcclxuICAuaGktdGV4dHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuXHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjc0MHB4KXtcclxuICAubWFpbi1jb250ZW50e1xyXG4gICAgcGFkZGluZzogMDtcclxuICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\n  <app-navbar></app-navbar>\n  <div class=\"content-container\">\n    <div class=\"content-area\">\n      <div class=\"row\">\n        <div class=\"header-nav\">\n          <!-- <div class=\"col-12 nav-text\"> -->\n              <nav aria-label=\"breadcrumb sticky-top\">\n                  <ol class=\"breadcrumb\">\n                    <li class=\"breadcrumb-item active\" aria-current=\"page\">CONTACT US</li>\n                  </ol>\n                </nav>\n          <!-- </div> -->\n        </div>\n\n      </div>\n      <div class=\"row\">\n          <div class=\"col-md-8 text-right subnav\">\n            <div class=\"sub-breadcumb\">\n              <nav aria-label=\"breadcrumb\">\n                  <ol class=\"breadcrumb\">\n                    <li class=\"breadcrumb-item\"><a routerLink=\"/\">HOME</a></li>\n                    <li class=\"breadcrumb-item\"><a routerLink=\"/contact\">CONTACT US</a></li>\n                  </ol>\n                </nav>\n                </div>\n            </div>\n      </div>\n      <div class=\"row main-content\">\n        <div class=\"col-md-6\">\n          <div class=\"row\">\n            <div class=\"col-md-12 col-xs-12\">\n              <p class=\"text-center hi-text\">\n                Need a hand? Or a high five? <br>\n                Here’s how to reach us.\n              </p>\n            </div>\n            <div class=\"col-md-12 col-xs-12\">\n              <div class=\"contact-us-medium text-center\">\n                <h5>\n                  <mdb-icon fas icon=\"envelope-square\"></mdb-icon> &nbsp; EMAIL\n                </h5>\n                info@kingdomsupportinitiative.org/com\n              </div>\n            </div>\n            <hr class=\"hr-light\">\n            <div class=\"col-md-12 col-xs-12\">\n              <div class=\"contact-us-medium text-center\">\n                <h5>\n                  <mdb-icon fas icon=\"mobile\"></mdb-icon> &nbsp; MOBILE NUMBER\n                </h5>\n                +2348165089768\n              </div>\n            </div>\n            <!-- <hr class=\"\">\n            <div class=\"col-md-12 col-xs-12\">\n              <div class=\"contact-us-medium\">\n                <h5><span class=\"\">\n                    <mdb-icon fas icon=\"map-marker-alt\"></mdb-icon>&nbsp;\n                  </span> LOCATION</h5>\n                No 18A Mike Fillings Ave, Lagos, Nigeria\n              </div>\n            </div> -->\n          </div>\n        </div>\n        <div class=\"col-md-6\">\n          <form [formGroup]=\"frm\">\n            <div class=\"row\">\n              <div class=\"col-md-12\">\n                <div class=\"alert alert-success\" *ngIf=\"successMessage\">\n                  {{successMessage}}\n                </div>\n                <div class=\"alert alert-danger\" *ngIf=\"errorMessage\" >\n                  {{ errorMessage}}\n                </div>\n              </div>\n              <div class=\"col-md-6\">\n                <div class=\"form-group\">\n                  <label>Full Name*</label>\n                  <input type=\"text\" formControlName=\"name\" placeholder=\"John Doe\"\n                    class=\"form-control required form-control-lg\">\n                </div>\n                <div class=\"input-errors\"\n                  *ngIf=\"(frm.get('name').invalid && frm.get('name').touched) ||showInputErrors\">\n                  <div *ngIf=\"frm.get('name').hasError('required')\">\n                    Name is Required\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-md-6\">\n                <div class=\"form-group\">\n                  <label>Email*</label>\n                  <input type=\"email\" formControlName=\"email\" placeholder=\"Johndoe@domain.com\"\n                    class=\"form-control required form-control-lg\" required>\n                </div>\n                <div class=\"input-errors\"\n                  *ngIf=\"(frm.get('email').invalid && frm.get('email').touched) ||showInputErrors\">\n                  <div *ngIf=\"frm.get('email').hasError('required')\">\n                    Email Address is Required\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-6\">\n                <div class=\"form-group\">\n                  <label>Subject*</label>\n                  <input type=\"text\" formControlName=\"subject\" placeholder=\"Greetings From John Doe\"\n                  class=\"form-control required form-control-lg\" required>\n              </div>\n              <div class=\"input-errors\"\n                *ngIf=\"(frm.get('subject').invalid && frm.get('subject').touched) ||showInputErrors\">\n                <div *ngIf=\"frm.get('subject').hasError('required')\">\n                  Email Address is Required\n                </div>\n              <!-- </div> -->\n                  <!-- <select formControlName=\"subject\" class=\"form-control required form-control-lg\" required>\n                    <optgroup>\n                      <option name=\"null\" [selected]=\"true\">Select Subject</option>\n                      <option name=\"Message\" value=\"message\">Message</option>\n                      <option name=\"assemblies\" value=\"assemblies\">Assemblies</option>\n                    </optgroup>\n                  </select> -->\n                </div>\n                <div class=\"input-errors\"\n                  *ngIf=\"(frm.get('subject').invalid && frm.get('subject').touched) ||showInputErrors\">\n                  <div *ngIf=\"frm.get('subject').hasError('required')\">\n                    Subject is Required\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-md-6\">\n                <div class=\"form-group\">\n                  <label>Website/Organisation</label>\n                  <input type=\"text\" formControlName=\"organisation\" placeholder=\"site.com/Amusing Cakes\"\n                    class=\"form-control form-control-lg\">\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-12\">\n                <div class=\"form-group\">\n                  <label>Message*</label>\n                  <textarea name=\"\" id=\"\" placeholder=\"Hi, Kingdom Support Initiatives!\" formControlName=\"message\"\n                    cols=\"30\" rows=\"6\" class=\" required form-control\" required></textarea>\n                </div>\n                <div class=\"input-errors\"\n                  *ngIf=\"(frm.get('message').invalid && frm.get('message').touched) ||showInputErrors\">\n                  <div *ngIf=\"frm.get('message').hasError('required')\">\n                    Message is Required\n                  </div>\n                </div>\n              </div>\n              <div class=\"required\">\n                <p class=\"danger text-danger animated zoom\">* REQUIRED</p>\n              </div>\n            </div>\n            <button type=\"submit\" (click)=\"contactUs()\" [disabled]=\"frm.pristine || frm.invalid || isbusy\"\n              class=\"btn animated slideInUp btn-lg btn-pink btn-rounded btn-primary btn-dribbble waves-light\" data-wow-delay=\"0.10s\"\n              mdbWavesEffect>\n              <ng-template [ngIf]=\"!isbusy\">Send Message</ng-template>\n              <ng-template [ngIf]=\"isbusy\">Sending Message, Please Wait...</ng-template>\n            </button>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!--Footer-->\n  <app-footer></app-footer>\n  <!--/.Footer-->\n</div>"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _providers_main_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../providers/main-service.service */ "./src/app/providers/main-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ContactComponent = /** @class */ (function () {
    function ContactComponent(formbuilder, router, service) {
        this.formbuilder = formbuilder;
        this.router = router;
        this.service = service;
        this.hasFailed = false;
        this.showInputErrors = false;
        this.isbusy = false;
        this.frm = formbuilder.group({
            name: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email])),
            subject: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            message: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            organisation: [""]
        });
        // this.contactUs();
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent.prototype.contactUs = function () {
        var _this = this;
        // validate form
        if (this.frm.invalid) {
            this.showInputErrors = true;
            return;
        }
        // reset status
        this.isbusy = true;
        this.hasFailed = false;
        var name = this.frm.get("name").value;
        var message = this.frm.get("message").value;
        var subject = this.frm.get("subject").value;
        var email = this.frm.get("email").value;
        var organisation = this.frm.get("organisation").value;
        // const message = this.frm.get("message").value;
        var contact = {
            message: message,
            name: name,
            email: email,
            subject: subject,
            organisation: organisation,
            messageid: Date.now()
        };
        console.log(contact);
        this.service.contactUs(contact).subscribe(function (Response) {
            if (Response['data']) {
                // this.frm.reset(this.frm.value);
                _this.frm.reset();
                _this.isbusy = false;
                _this.successMessage = 'Message was send succssfully and we will contact you ASAP';
                setTimeout(function () {
                    _this.successMessage = '';
                }, 5000);
            }
            else {
                _this.errorMessage = "Ooops! There was a problem sending your message. Pls ttry again!!";
                _this.isbusy = false;
                setTimeout(function () {
                    _this.errorMessage = '';
                }, 5000);
            }
            // console.log(Response);
        });
    };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _providers_main_service_service__WEBPACK_IMPORTED_MODULE_2__["MainServiceService"]])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "footer .container-fluid{\r\n    bottom: 0;\r\n    margin-left: 0;\r\n    margin-right: 0;\r\n    padding-right: 15px;\r\n     padding-left: 15px;\r\n     position: absolute;\r\n}\r\n\r\n.spacer{\r\n    height: 25px;\r\n}\r\n\r\n.section-row{\r\n    height: 46%;\r\n    padding: 5% 10%;\r\n}\r\n\r\n.section-one{\r\n    background: #fff;\r\n}\r\n\r\n.img-section img{\r\n    height: 100%!important;\r\n    width: 100%;\r\n}\r\n\r\n.container-fluid{\r\n    /* padding-right:0;\r\n    padding-bottom: 0; */\r\n}\r\n\r\n.read-more button{\r\n    min-width: 220px;\r\n    font-size: 16px;\r\n    letter-spacing: .5px;\r\n    line-height: .9;\r\n    -webkit-font-smoothing: antialiased;\r\n    text-rendering: optimizeLegibility;\r\n    border: none;\r\n    border-radius: 2px;\r\n    display: inline-block;\r\n    font-family: \"Google Sans\",Roboto,Arial,Helvetica,sans-serif;\r\n    font-size: 14px;\r\n    font-weight: 500;\r\n    height: 46px;\r\n    line-height: 1;\r\n    letter-spacing: .75px;\r\n    margin: 8px 0;\r\n    padding: 15px 24px;\r\n    transition: color .15s linear,background-color .15s linear;\r\n    vertical-align: middle;\r\n    padding: 17px 24px;\r\n}\r\n\r\n.read-more{\r\n    margin: 45px auto;\r\n    width: 70%;\r\n}\r\n\r\n.section-two{\r\n    background:#F5F5F5;\r\n}\r\n\r\n.section-three{\r\n    background: #fff;\r\n}\r\n\r\n.section-footer{\r\n    background: #fff;\r\n}\r\n\r\n.description-section h3{\r\n  text-transform: uppercase;\r\n  font-weight: 400;\r\n  /* color:#6c757d!important */\r\n}\r\n\r\nol, ul {\r\n    margin-left: 20px;\r\n}\r\n\r\ndl, ol, ul {\r\n    list-style-position: outside;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n*, :after, :before {\r\n    box-sizing: border-box;\r\n}\r\n\r\n/* @media screen and (min-width: 800px){ */\r\n\r\n.badges__item {\r\n    margin-bottom: 0;\r\n    margin-right: 8px;\r\n    display: inline-block;\r\n\r\n}\r\n\r\n.badges__badge--play, .badges__badge--app{\r\n    height: 100%;\r\n    width: 100%;\r\n}\r\n\r\n.badges__item {\r\n    display: inline-block;  \r\n    list-style: none;\r\n    margin-bottom: 16px;\r\n    width: 20%;\r\n    margin-right: 3%;\r\n}\r\n\r\nblockquote, dd, div, dl, dt, form, h1, h2, h3, h4, h5, h6, li, ol, p, pre, td, th, ul {\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n.section--experience .badges__item {\r\n    display: inline-block;\r\n    list-style: none;\r\n    margin-bottom: 16px;\r\n}\r\n\r\n/* } */\r\n\r\n@media screen and (min-width: 1024px){\r\n    dd, dt, li {\r\n        line-height: 1.625;\r\n        font-size: 16px;\r\n        letter-spacing: 0;\r\n    }\r\n.h-c-headline.h-c-headline--two {\r\n    font-size: 44px;\r\n}\r\n\r\n.h-c-headline.h-c-headline--two {\r\n    font-size: 34px;\r\n}\r\n.h-c-copy, p {\r\n    line-height: 1.625;\r\n    font-size: 16px;\r\n    letter-spacing: 0;\r\n}\r\n.h-c-headline.h-c-headline--two {\r\n    line-height: 1.18182;\r\n    font-size: 44px;\r\n    letter-spacing: -.5px;\r\n}\r\n}\r\n\r\n@media (max-width: 600px){\r\n    .main-hero-text{\r\n        /* font-size: 25px; */\r\n        line-height:45px!important;\r\n        margin-top: 14px!important;\r\n    }\r\n.h-c-headline.h-c-headline--two {\r\n    line-height: 1.25;\r\n    font-size: 32px;\r\n    letter-spacing: 0;\r\n}\r\ndd, dt, li {\r\n    line-height: 1.71429;\r\n    font-size: 14px;\r\n    letter-spacing: .25px;\r\n}\r\nform .margin-left, .get-involved .margin-right{\r\n    /* margin: 0!important; */\r\n    margin-left:0!important;\r\n    margin-right: 0!important;\r\n    /* background: red; */\r\n}\r\nform .getinvolved-btn{\r\n    margin-top: 10px!important;\r\n    margin-bottom: 30px!important;\r\n}\r\n\r\nform  .margin-right:last-child{\r\n    margin-top:20px!important;\r\n}\r\n.swap-section.description-section{\r\n    transform: translateY(-230px);\r\n}\r\n.swap-section.img-section{\r\n    transform: translateY(317px);\r\n}\r\n.badges__item{\r\n    width: 48%;\r\n    }\r\n}\r\n\r\n/* footer style */\r\n\r\n.footer{\r\n    /* height: 112px; */\r\n    /* background: red; */\r\n    /* padding: 40px 32px 20px; */\r\n}\r\n\r\n.footer ul li{\r\n    display: inline-block;\r\n    text-align: center;\r\n}\r\n\r\n.footer{\r\n    display: block;\r\n}\r\n\r\n.footer .nav-item{\r\n    /* background-color: rgb(255, 255, 255); */\r\n    color: rgb(255, 255, 255);\r\n    text-transform: uppercase;\r\n    font-size: 15px;\r\n    display: inline-block;\r\n    margin-right: 21px;\r\n    float: none;\r\n}\r\n\r\n.footer .wp-nav{\r\n    text-align: center;\r\n    width: 100%;\r\n}\r\n\r\n.text-center{\r\n    text-align: center!important;\r\n}\r\n\r\n.footer .nav {\r\n    display: block;\r\n}\r\n\r\n.footer-icons-section svg{\r\n  height: 20px;\r\n  width: 20px;\r\n  margin-right: 10px;\r\n  fill: #00bcd4;\r\n  \r\n}\r\n\r\n.footer-icons-section {\r\n    line-height: 30px;\r\n    vertical-align: middle!important;\r\n    padding-top:14px;\r\n    text-align: justify-all;\r\n    text-transform: uppercase;\r\n}\r\n\r\n.navbar-brand img{\r\n    height: 100%;\r\n    width: 100%;\r\n  }\r\n\r\n.navbar-brand{\r\n      width: 55px;\r\n      /* height: 100%; */\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtJQUNWLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsb0JBQW9CO0tBQ25CLG1CQUFtQjtLQUNuQixtQkFBbUI7Q0FDdkI7O0FBRUQ7SUFDSSxhQUFhO0NBQ2hCOztBQUdEO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtDQUNuQjs7QUFDRDtJQUNJLGlCQUFpQjtDQUNwQjs7QUFDRDtJQUNJLHVCQUF1QjtJQUN2QixZQUFZO0NBQ2Y7O0FBQ0Q7SUFDSTt5QkFDcUI7Q0FDeEI7O0FBQ0Q7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsb0NBQW9DO0lBQ3BDLG1DQUFtQztJQUNuQyxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0Qiw2REFBNkQ7SUFDN0QsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsZUFBZTtJQUNmLHNCQUFzQjtJQUN0QixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLDJEQUEyRDtJQUMzRCx1QkFBdUI7SUFDdkIsbUJBQW1CO0NBQ3RCOztBQUNEO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7Q0FDZDs7QUFDRDtJQUNJLG1CQUFtQjtDQUN0Qjs7QUFFRDtJQUNJLGlCQUFpQjtDQUNwQjs7QUFDRDtJQUNJLGlCQUFpQjtDQUNwQjs7QUFFRDtFQUNFLDBCQUEwQjtFQUMxQixpQkFBaUI7RUFDakIsNkJBQTZCO0NBQzlCOztBQUlEO0lBQ0ksa0JBQWtCO0NBQ3JCOztBQUNEO0lBQ0ksNkJBQTZCO0lBQzdCLG9CQUFvQjtDQUN2Qjs7QUFDRDtJQUNJLHVCQUF1QjtDQUMxQjs7QUFFRCwyQ0FBMkM7O0FBQzFDO0lBQ0csaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixzQkFBc0I7O0NBRXpCOztBQUNEO0lBQ0ksYUFBYTtJQUNiLFlBQVk7Q0FDZjs7QUFDQTtJQUNHLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLFdBQVc7SUFDWCxpQkFBaUI7Q0FDcEI7O0FBQ0Q7SUFDSSxVQUFVO0lBQ1YsV0FBVztDQUNkOztBQUNEO0lBQ0ksc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixvQkFBb0I7Q0FDdkI7O0FBRUQsT0FBTzs7QUFFUDtJQUNJO1FBQ0ksbUJBQW1CO1FBQ25CLGdCQUFnQjtRQUNoQixrQkFBa0I7S0FDckI7QUFDTDtJQUNJLGdCQUFnQjtDQUNuQjs7QUFFRDtJQUNJLGdCQUFnQjtDQUNuQjtBQUNEO0lBQ0ksbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixrQkFBa0I7Q0FDckI7QUFDRDtJQUNJLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsc0JBQXNCO0NBQ3pCO0NBQ0E7O0FBQ0Q7SUFDSTtRQUNJLHNCQUFzQjtRQUN0QiwyQkFBMkI7UUFDM0IsMkJBQTJCO0tBQzlCO0FBQ0w7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtDQUNyQjtBQUNEO0lBQ0kscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixzQkFBc0I7Q0FDekI7QUFDRDtJQUNJLDBCQUEwQjtJQUMxQix3QkFBd0I7SUFDeEIsMEJBQTBCO0lBQzFCLHNCQUFzQjtDQUN6QjtBQUNEO0lBQ0ksMkJBQTJCO0lBQzNCLDhCQUE4QjtDQUNqQzs7QUFFRDtJQUNJLDBCQUEwQjtDQUM3QjtBQUNEO0lBQ0ksOEJBQThCO0NBQ2pDO0FBQ0Q7SUFDSSw2QkFBNkI7Q0FDaEM7QUFDRDtJQUNJLFdBQVc7S0FDVjtDQUNKOztBQUdELGtCQUFrQjs7QUFDbEI7SUFDSSxvQkFBb0I7SUFDcEIsc0JBQXNCO0lBQ3RCLDhCQUE4QjtDQUNqQzs7QUFFRDtJQUNJLHNCQUFzQjtJQUN0QixtQkFBbUI7Q0FDdEI7O0FBQ0Q7SUFDSSxlQUFlO0NBQ2xCOztBQUVEO0lBQ0ksMkNBQTJDO0lBQzNDLDBCQUEwQjtJQUMxQiwwQkFBMEI7SUFDMUIsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsWUFBWTtDQUNmOztBQUNEO0lBQ0ksbUJBQW1CO0lBQ25CLFlBQVk7Q0FDZjs7QUFDRDtJQUNJLDZCQUE2QjtDQUNoQzs7QUFDRDtJQUNJLGVBQWU7Q0FDbEI7O0FBQ0Q7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixjQUFjOztDQUVmOztBQUVEO0lBQ0ksa0JBQWtCO0lBQ2xCLGlDQUFpQztJQUNqQyxpQkFBaUI7SUFDakIsd0JBQXdCO0lBQ3hCLDBCQUEwQjtDQUM3Qjs7QUFFRDtJQUNJLGFBQWE7SUFDYixZQUFZO0dBQ2I7O0FBQ0Q7TUFDSSxZQUFZO01BQ1osbUJBQW1CO0dBQ3RCIiwiZmlsZSI6InNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9vdGVyIC5jb250YWluZXItZmx1aWR7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbiAgICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG5cclxuLnNwYWNlcntcclxuICAgIGhlaWdodDogMjVweDtcclxufVxyXG5cclxuXHJcbi5zZWN0aW9uLXJvd3tcclxuICAgIGhlaWdodDogNDYlO1xyXG4gICAgcGFkZGluZzogNSUgMTAlO1xyXG59XHJcbi5zZWN0aW9uLW9uZXtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbn1cclxuLmltZy1zZWN0aW9uIGltZ3tcclxuICAgIGhlaWdodDogMTAwJSFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4uY29udGFpbmVyLWZsdWlke1xyXG4gICAgLyogcGFkZGluZy1yaWdodDowO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDA7ICovXHJcbn1cclxuLnJlYWQtbW9yZSBidXR0b257XHJcbiAgICBtaW4td2lkdGg6IDIyMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC41cHg7XHJcbiAgICBsaW5lLWhlaWdodDogLjk7XHJcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxuICAgIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBmb250LWZhbWlseTogXCJHb29nbGUgU2Fuc1wiLFJvYm90byxBcmlhbCxIZWx2ZXRpY2Esc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBoZWlnaHQ6IDQ2cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAuNzVweDtcclxuICAgIG1hcmdpbjogOHB4IDA7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDI0cHg7XHJcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAuMTVzIGxpbmVhcixiYWNrZ3JvdW5kLWNvbG9yIC4xNXMgbGluZWFyO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIHBhZGRpbmc6IDE3cHggMjRweDtcclxufVxyXG4ucmVhZC1tb3Jle1xyXG4gICAgbWFyZ2luOiA0NXB4IGF1dG87XHJcbiAgICB3aWR0aDogNzAlO1xyXG59XHJcbi5zZWN0aW9uLXR3b3tcclxuICAgIGJhY2tncm91bmQ6I0Y1RjVGNTtcclxufVxyXG5cclxuLnNlY3Rpb24tdGhyZWV7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG59XHJcbi5zZWN0aW9uLWZvb3RlcntcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbn1cclxuXHJcbi5kZXNjcmlwdGlvbi1zZWN0aW9uIGgze1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAvKiBjb2xvcjojNmM3NTdkIWltcG9ydGFudCAqL1xyXG59XHJcblxyXG5cclxuIFxyXG5vbCwgdWwge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbn1cclxuZGwsIG9sLCB1bCB7XHJcbiAgICBsaXN0LXN0eWxlLXBvc2l0aW9uOiBvdXRzaWRlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG4qLCA6YWZ0ZXIsIDpiZWZvcmUge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuLyogQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogODAwcHgpeyAqL1xyXG4gLmJhZGdlc19faXRlbSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblxyXG59XHJcbi5iYWRnZXNfX2JhZGdlLS1wbGF5LCAuYmFkZ2VzX19iYWRnZS0tYXBwe1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuIC5iYWRnZXNfX2l0ZW0ge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrOyAgXHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxuICAgIHdpZHRoOiAyMCU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDMlO1xyXG59XHJcbmJsb2NrcXVvdGUsIGRkLCBkaXYsIGRsLCBkdCwgZm9ybSwgaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgbGksIG9sLCBwLCBwcmUsIHRkLCB0aCwgdWwge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG4uc2VjdGlvbi0tZXhwZXJpZW5jZSAuYmFkZ2VzX19pdGVtIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG59XHJcblxyXG4vKiB9ICovXHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpe1xyXG4gICAgZGQsIGR0LCBsaSB7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNjI1O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMDtcclxuICAgIH1cclxuLmgtYy1oZWFkbGluZS5oLWMtaGVhZGxpbmUtLXR3byB7XHJcbiAgICBmb250LXNpemU6IDQ0cHg7XHJcbn1cclxuXHJcbi5oLWMtaGVhZGxpbmUuaC1jLWhlYWRsaW5lLS10d28ge1xyXG4gICAgZm9udC1zaXplOiAzNHB4O1xyXG59XHJcbi5oLWMtY29weSwgcCB7XHJcbiAgICBsaW5lLWhlaWdodDogMS42MjU7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMDtcclxufVxyXG4uaC1jLWhlYWRsaW5lLmgtYy1oZWFkbGluZS0tdHdvIHtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjE4MTgyO1xyXG4gICAgZm9udC1zaXplOiA0NHB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0uNXB4O1xyXG59XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KXtcclxuICAgIC5tYWluLWhlcm8tdGV4dHtcclxuICAgICAgICAvKiBmb250LXNpemU6IDI1cHg7ICovXHJcbiAgICAgICAgbGluZS1oZWlnaHQ6NDVweCFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTRweCFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbi5oLWMtaGVhZGxpbmUuaC1jLWhlYWRsaW5lLS10d28ge1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMjU7XHJcbiAgICBmb250LXNpemU6IDMycHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMDtcclxufVxyXG5kZCwgZHQsIGxpIHtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjcxNDI5O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC4yNXB4O1xyXG59XHJcbmZvcm0gLm1hcmdpbi1sZWZ0LCAuZ2V0LWludm9sdmVkIC5tYXJnaW4tcmlnaHR7XHJcbiAgICAvKiBtYXJnaW46IDAhaW1wb3J0YW50OyAqL1xyXG4gICAgbWFyZ2luLWxlZnQ6MCFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDAhaW1wb3J0YW50O1xyXG4gICAgLyogYmFja2dyb3VuZDogcmVkOyAqL1xyXG59XHJcbmZvcm0gLmdldGludm9sdmVkLWJ0bntcclxuICAgIG1hcmdpbi10b3A6IDEwcHghaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweCFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmZvcm0gIC5tYXJnaW4tcmlnaHQ6bGFzdC1jaGlsZHtcclxuICAgIG1hcmdpbi10b3A6MjBweCFpbXBvcnRhbnQ7XHJcbn1cclxuLnN3YXAtc2VjdGlvbi5kZXNjcmlwdGlvbi1zZWN0aW9ue1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMzBweCk7XHJcbn1cclxuLnN3YXAtc2VjdGlvbi5pbWctc2VjdGlvbntcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgzMTdweCk7XHJcbn1cclxuLmJhZGdlc19faXRlbXtcclxuICAgIHdpZHRoOiA0OCU7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4vKiBmb290ZXIgc3R5bGUgKi9cclxuLmZvb3RlcntcclxuICAgIC8qIGhlaWdodDogMTEycHg7ICovXHJcbiAgICAvKiBiYWNrZ3JvdW5kOiByZWQ7ICovXHJcbiAgICAvKiBwYWRkaW5nOiA0MHB4IDMycHggMjBweDsgKi9cclxufVxyXG5cclxuLmZvb3RlciB1bCBsaXtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uZm9vdGVye1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5mb290ZXIgLm5hdi1pdGVte1xyXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpOyAqL1xyXG4gICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIxcHg7XHJcbiAgICBmbG9hdDogbm9uZTtcclxufVxyXG4uZm9vdGVyIC53cC1uYXZ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4udGV4dC1jZW50ZXJ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXIhaW1wb3J0YW50O1xyXG59XHJcbi5mb290ZXIgLm5hdiB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4uZm9vdGVyLWljb25zLXNlY3Rpb24gc3Zne1xyXG4gIGhlaWdodDogMjBweDtcclxuICB3aWR0aDogMjBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgZmlsbDogIzAwYmNkNDtcclxuICBcclxufVxyXG5cclxuLmZvb3Rlci1pY29ucy1zZWN0aW9uIHtcclxuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZSFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLXRvcDoxNHB4O1xyXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeS1hbGw7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcblxyXG4ubmF2YmFyLWJyYW5kIGltZ3tcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAubmF2YmFyLWJyYW5ke1xyXG4gICAgICB3aWR0aDogNTVweDtcclxuICAgICAgLyogaGVpZ2h0OiAxMDAlOyAqL1xyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "   <!-- footer section -->\n    <section class=\"container-fluid section-two footer\" id=\"footer\">\n        <div class=\"row\">\n          <!-- footer navigations -->\n          <div class=\"col-md-9 col-xs-9 description-section\">\n            <nav class=\"navbar navbar-expand-lg navbar-light\">\n                <a class=\"navbar-brand\" routerLink=\"/\" routerLinkActive=\"router-link-active\">\n                  <img src=\"../../assets/img/logo.png\" alt=\"Kingdom Support Initiatives logo\">      \n                  </a>\n              <div class=\"wp-nav text-center\">\n                <ul class=\"navbar-nav nav mx-auto ml-auto pull-md-right\">\n                  <li class=\"nav-item\">\n                    <a class=\"nav-link\" routerLink=\"/\">Home <span class=\"sr-only\">(current)</span></a>\n                  </li>\n                  <li class=\"nav-item\">\n                    <a class=\"nav-link\" routerLink=\"/blog\">Blog</a>\n                  </li>\n                  <li class=\"nav-item\">\n                    <a class=\"nav-link\" routerLink=\"/about\">About</a>\n                  </li>\n                  <li class=\"nav-item\">\n                    <a class=\"nav-link\" routerLink=\"/contact\">Contact us</a>\n                  </li>\n                </ul>\n              </div>\n            </nav>\n          </div>\n          <!-- footer navigations end -->\n          <!-- social icons -->\n          <div class=\"col-md-3 col-xs-3 footer-icons-section\">\n            <span>Go Social</span> &nbsp; &nbsp;\n            <!-- facebook -->\n            <svg viewBox=\"0 0 24 24\">\n              <path d=\"M17,2V2H17V6H15C14.31,6 14,6.81 14,7.5V10H14L17,10V14H14V22H10V14H7V10H10V6A4,4 0 0,1 14,2H17Z\" />\n            </svg>\n            <!-- twitter -->\n            <svg viewBox=\"0 0 24 24\">\n              <path\n                d=\"M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z\" />\n            </svg>\n            <!-- instagram -->\n            <svg viewBox=\"0 0 24 24\">\n              <path\n                d=\"M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z\" />\n            </svg>\n            <!-- youtube -->\n            <svg viewBox=\"0 0 24 24\">\n              <path\n                d=\"M2.5,4.5H21.5C22.34,4.5 23,5.15 23,6V17.5C23,18.35 22.34,19 21.5,19H2.5C1.65,19 1,18.35 1,17.5V6C1,5.15 1.65,4.5 2.5,4.5M9.71,8.5V15L15.42,11.7L9.71,8.5M17.25,21H6.65C6.35,21 6.15,20.8 6.15,20.5C6.15,20.2 6.35,20 6.65,20H17.35C17.65,20 17.85,20.2 17.85,20.5C17.85,20.8 17.55,21 17.25,21Z\" />\n            </svg>\n          </div>\n          <!-- end of social icons -->\n        </div>\n        <!-- right reservations -->\n        <div class=\"col-md-12\">\n          <p style=\"font-size: 10px;text-align:center;\" class=\"text-muted text-center\">\n            <!-- heart -->\n            <svg viewBox=\"0 0 24 24\" height=\"10\" width=\"10\">\n              <path\n                d=\"M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z\" />\n            </svg>\n            All Rights Reserve Kingdom Support Initiatives &copy; 2019\n          </p>\n        </div>\n        <!-- end of right reservations -->\n        <!-- end of footer navigations -->\n      </section>\n      <!-- end of footer section -->"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "footer .container-fluid{\r\n    bottom: 0;\r\n    margin-left: 0;\r\n    margin-right: 0;\r\n    padding-right: 15px;\r\n     padding-left: 15px;\r\n     position: absolute;\r\n}\r\n\r\n#clouds{\r\n    height: 100%;\r\n    bottom: 0;\r\n    width: 100%;\r\n}\r\n\r\n.subscription{\r\n    margin:0 auto;\r\n}\r\n\r\n.main-hero{\r\n    background-image:linear-gradient(to bottom, rgba(245, 246, 252, 0.22), rgba(117, 19, 93, 0.43)), url('woman-with-seedling.jpg');\r\n    height: 550px;\r\n    /* width: 100%; */\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    padding-top: 90px;\r\n    background-size:cover;\r\n    bottom: 0;\r\n    top: 0;\r\n    margin-top: 80px!important;\r\n    -o-object-fit: cover;\r\n       object-fit: cover;\r\n    image-orientation: from-image;\r\n    margin-top: -8px;\r\n    margin-left: 0;\r\n    margin-right: 0;\r\n    padding-right: 15px;\r\n    color: aliceblue;\r\n     padding-left: 15px;\r\n}\r\n\r\n.spacer{\r\n    height: 25px;\r\n}\r\n\r\n.caption-text{\r\n    margin-top: 60px;\r\n}\r\n\r\n.scroll-down{\r\n    margin-top: 70px;\r\n    text-align: center;\r\n}\r\n\r\n.scroll-down svg {\r\n    -webkit-animation-name: downscroll;\r\n            animation-name: downscroll;\r\n    animation-duration: 2s;\r\n  -webkit-animation-iteration-count: infinite;\r\n          animation-iteration-count: infinite;\r\n  -webkit-animation-direction: normal;\r\n          animation-direction: normal;\r\n  -webkit-animation-duration: 2s;\r\n  animation-duration: 2s;\r\n  transition-delay: .2s;\r\n  transition: ease;\r\n\r\n}\r\n\r\n.caption-text .btn{\r\n    border-radius: 10px;\r\n}\r\n\r\n.main-hero h1{\r\n    line-height: 24px;\r\n    text-align: center;\r\n    font-size: 50px;\r\n    text-transform: uppercase;\r\n    margin-top: 95px;\r\n}\r\n\r\n.icon-wp{\r\n    width:40px;\r\n    height: 40px;\r\n    margin: 0 auto;\r\n    background: rgba(0, 0, 0, 0.42);\r\n    border-radius: 50%;\r\n    text-align: center;\r\n    vertical-align: middle;\r\n    line-height: 40px;\r\n}\r\n\r\n.section-row{\r\n    height: 46%;\r\n    padding: 5% 10%;\r\n}\r\n\r\n.section-one{\r\n    background: #fff;\r\n}\r\n\r\n.img-section img{\r\n    height: 100%!important;\r\n    width: 100%;\r\n}\r\n\r\n.container-fluid{\r\n    /* padding-right:0;\r\n    padding-bottom: 0; */\r\n}\r\n\r\n.read-more button{\r\n    min-width: 220px;\r\n    font-size: 16px;\r\n    letter-spacing: .5px;\r\n    line-height: .9;\r\n    -webkit-font-smoothing: antialiased;\r\n    text-rendering: optimizeLegibility;\r\n    border: none;\r\n    border-radius: 2px;\r\n    display: inline-block;\r\n    font-family: \"Google Sans\",Roboto,Arial,Helvetica,sans-serif;\r\n    font-size: 14px;\r\n    font-weight: 500;\r\n    height: 46px;\r\n    line-height: 1;\r\n    letter-spacing: .75px;\r\n    margin: 8px 0;\r\n    padding: 15px 24px;\r\n    transition: color .15s linear,background-color .15s linear;\r\n    vertical-align: middle;\r\n    padding: 17px 24px;\r\n}\r\n\r\n.read-more{\r\n    margin: 45px auto;\r\n    width: 70%;\r\n}\r\n\r\n.section-two{\r\n    background:#F5F5F5;\r\n}\r\n\r\n.section-three{\r\n    background: #fff;\r\n}\r\n\r\n.section-footer{\r\n    background: #fff;\r\n}\r\n\r\n.description-section h3{\r\n  text-transform: uppercase;\r\n  font-weight: 400;\r\n  /* color:#6c757d!important */\r\n}\r\n\r\n.copy-content {\r\n    text-align: center;\r\n}\r\n\r\n.h-c-headline {\r\n    font-weight: 500;\r\n    -webkit-hyphens: none;\r\n    -ms-hyphens: none;\r\n    hyphens: none;\r\n}\r\n\r\n.h-c-headline {\r\n    -moz-osx-font-smoothing: grayscale;\r\n    -webkit-font-smoothing: antialiased;\r\n    text-rendering: optimizeLegibility;\r\n    color: #202124;\r\n    font-family: \"Google Sans\",Roboto,Arial,Helvetica,sans-serif;\r\n    font-weight: 400;\r\n    -webkit-hyphens: auto;\r\n    -ms-hyphens: auto;\r\n    hyphens: auto;\r\n    overflow-wrap: initial;\r\n    word-wrap: initial;\r\n}\r\n\r\n.h-c-headline.h-c-headline--two {\r\n    line-height: 1.33333;\r\n    font-size: 24px;\r\n    letter-spacing: 0;\r\n}\r\n\r\n.content__text {\r\n    margin: 18px 0 36px;\r\n}\r\n\r\n.h-c-copy {\r\n    font-family: \"Google Sans\",Roboto,Arial,Helvetica,sans-serif;\r\n}\r\n\r\n.badges__list {\r\n    margin: 0 0 64px;\r\n    text-align: center;\r\n    /* display: inline-block; */\r\n}\r\n\r\nblockquote, dd, div, dl, dt, form, h1, h2, h3, h4, h5, h6, li, ol, p, pre, td, th, ul {\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\nol, ul {\r\n    margin-left: 20px;\r\n}\r\n\r\ndl, ol, ul {\r\n    list-style-position: outside;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n*, :after, :before {\r\n    box-sizing: border-box;\r\n}\r\n\r\n/* @media screen and (min-width: 800px){ */\r\n\r\n.badges__item {\r\n    margin-bottom: 0;\r\n    margin-right: 8px;\r\n    display: inline-block;\r\n\r\n}\r\n\r\n.badges__badge--play, .badges__badge--app{\r\n    height: 100%;\r\n    width: 100%;\r\n}\r\n\r\n.badges__item {\r\n    display: inline-block;  \r\n    list-style: none;\r\n    margin-bottom: 16px;\r\n    width: 20%;\r\n    margin-right: 3%;\r\n}\r\n\r\nblockquote, dd, div, dl, dt, form, h1, h2, h3, h4, h5, h6, li, ol, p, pre, td, th, ul {\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n.section--experience .badges__item {\r\n    display: inline-block;\r\n    list-style: none;\r\n    margin-bottom: 16px;\r\n}\r\n\r\n/* } */\r\n\r\n@media screen and (min-width: 1024px){\r\n    dd, dt, li {\r\n        line-height: 1.625;\r\n        font-size: 16px;\r\n        letter-spacing: 0;\r\n    }\r\n.h-c-headline.h-c-headline--two {\r\n    font-size: 44px;\r\n}\r\n\r\n.h-c-headline.h-c-headline--two {\r\n    font-size: 34px;\r\n}\r\n.h-c-copy, p {\r\n    line-height: 1.625;\r\n    font-size: 16px;\r\n    letter-spacing: 0;\r\n}\r\n.h-c-headline.h-c-headline--two {\r\n    line-height: 1.18182;\r\n    font-size: 44px;\r\n    letter-spacing: -.5px;\r\n}\r\n}\r\n\r\n@media (max-width: 600px){\r\n    .main-hero-text{\r\n        /* font-size: 25px; */\r\n        line-height:45px!important;\r\n        margin-top: 14px!important;\r\n    }\r\n.h-c-headline.h-c-headline--two {\r\n    line-height: 1.25;\r\n    font-size: 32px;\r\n    letter-spacing: 0;\r\n}\r\ndd, dt, li {\r\n    line-height: 1.71429;\r\n    font-size: 14px;\r\n    letter-spacing: .25px;\r\n}\r\nform .margin-left, .get-involved .margin-right{\r\n    /* margin: 0!important; */\r\n    margin-left:0!important;\r\n    margin-right: 0!important;\r\n    /* background: red; */\r\n}\r\nform .getinvolved-btn{\r\n    margin-top: 10px!important;\r\n    margin-bottom: 30px!important;\r\n}\r\n\r\nform  .margin-right:last-child{\r\n    margin-top:20px!important;\r\n}\r\n.swap-section.description-section{\r\n    transform: translateY(-230px);\r\n}\r\n.swap-section.img-section{\r\n    transform: translateY(317px);\r\n}\r\n.badges__item{\r\n    width: 48%;\r\n    }\r\n}\r\n\r\n/* footer style */\r\n\r\n.footer{\r\n    /* height: 112px; */\r\n    /* background: red; */\r\n    padding: 40px 32px 20px;\r\n}\r\n\r\n.footer ul li{\r\n    display: inline-block;\r\n    text-align: center;\r\n}\r\n\r\n.footer{\r\n    display: block;\r\n}\r\n\r\n.footer .nav-item{\r\n    /* background-color: rgb(255, 255, 255); */\r\n    color: rgb(255, 255, 255);\r\n    text-transform: uppercase;\r\n    font-size: 15px;\r\n    display: inline-block;\r\n    margin-right: 21px;\r\n    float: none;\r\n}\r\n\r\n.footer .wp-nav{\r\n    text-align: center;\r\n    width: 100%;\r\n}\r\n\r\n.text-center{\r\n    text-align: center!important;\r\n}\r\n\r\n.footer .nav {\r\n    display: block;\r\n}\r\n\r\n.footer-icons-section svg{\r\n  height: 20px;\r\n  width: 20px;\r\n  margin-right: 10px;\r\n}\r\n\r\n.footer-icons-section {\r\n    line-height: 30px;\r\n    vertical-align: middle!important;\r\n    padding-top:14px;\r\n    text-align: justify-all;\r\n    text-transform: uppercase;\r\n}\r\n\r\n/* subscription */\r\n\r\n.section-subscription{\r\n    background:linear-gradient(to bottom, rgba(245, 246, 252, 0.42), rgba(61, 155, 223, 0.43)), url('email-subscription.jpg');\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size:cover;\r\n    bottom: 0;\r\n    top: 0;\r\n    margin-top: -8px;\r\n    margin-left: 0;\r\n    margin-right: 0;\r\n    padding-right: 15px;\r\n    color:#6c757d!important;\r\n     padding-left: 15px;\r\n     padding-top: 120px;\r\n\r\n}\r\n\r\n.subscribe{\r\n    min-width: 220px;\r\n    font-size: 16px;\r\n    letter-spacing: .5px;\r\n    line-height: .9;\r\n    -webkit-font-smoothing: antialiased;\r\n    text-rendering: optimizeLegibility;\r\n    border: none;\r\n    border-radius: 2px;\r\n    display: inline-block;\r\n    font-family: \"Google Sans\",Roboto,Arial,Helvetica,sans-serif;\r\n    font-size: 14px;\r\n    font-weight: 500;\r\n    height: 46px;\r\n    line-height: 1;\r\n    letter-spacing: .75px;\r\n    margin: 8px 0;\r\n    padding: 15px 24px;\r\n    transition: color .15s linear,background-color .15s linear;\r\n    vertical-align: middle;\r\n    text-transform: uppercase;\r\n    padding: 17px 24px;\r\n}\r\n\r\n::-webkit-input-placeholder{\r\n    color:#6c757d!important;\r\n    opacity: 0.6;\r\n}\r\n\r\n::-moz-placeholder{\r\n    color:#6c757d!important;\r\n    opacity: 0.6;\r\n}\r\n\r\n::-ms-input-placeholder{\r\n    color:#6c757d!important;\r\n    opacity: 0.6;\r\n}\r\n\r\n::placeholder{\r\n    color:#6c757d!important;\r\n    opacity: 0.6;\r\n}\r\n\r\n#email{\r\n    /* opacity: .85;\r\n     */\r\n     background: #eee;\r\n}\r\n\r\n#email:focus, .get-involved input:focus, input:focus{\r\n    /* opacity: .95; */\r\n    background: #fff;\r\n    outline: none;\r\n    box-shadow:none;\r\n    border: none;\r\n}\r\n\r\n.form-subscription{\r\n    margin: 0 auto;\r\n}\r\n\r\n.mat-input-element{\r\n    caret-color:#17a2b8;\r\n}\r\n\r\n.mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick\r\n{\r\n    color:#17a2b8;\r\n}\r\n\r\n.mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick{\r\nopacity:0;\r\n}\r\n\r\n@-webkit-keyframes downscroll{\r\n    0% {\r\n        top: -9px;\r\n        margin-top: -5px;\r\n    }\r\n    100%{\r\n        margin-top: 9px;\r\n    }\r\n}\r\n\r\n@keyframes downscroll{\r\n    0% {\r\n        top: -9px;\r\n        margin-top: -5px;\r\n    }\r\n    100%{\r\n        margin-top: 9px;\r\n    }\r\n}\r\n\r\n/* get involved */\r\n\r\n.margin-left{\r\n    margin-left: 20px;\r\n}\r\n\r\n.margin-right{\r\n    margin-right: 10px;\r\n}\r\n\r\n.get-involved input{\r\n    margin-right: 10px;\r\n    height: 30px;float: left;\r\n    /* width: calc(100vw)/5 */\r\n\r\n}\r\n\r\n.get-involved label{\r\n    color:#6c757d;\r\n}\r\n\r\n.input-errors{\r\n    color: pink;\r\n}\r\n\r\n.response{\r\n    color:#17a2b8;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0lBQ1YsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixvQkFBb0I7S0FDbkIsbUJBQW1CO0tBQ25CLG1CQUFtQjtDQUN2Qjs7QUFFRDtJQUNJLGFBQWE7SUFDYixVQUFVO0lBQ1YsWUFBWTtDQUNmOztBQUNEO0lBQ0ksY0FBYztDQUNqQjs7QUFFRDtJQUNJLGdJQUFpSjtJQUNqSixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLDRCQUE0QjtJQUM1Qiw2QkFBNkI7SUFDN0Isa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixVQUFVO0lBQ1YsT0FBTztJQUNQLDJCQUEyQjtJQUMzQixxQkFBa0I7T0FBbEIsa0JBQWtCO0lBQ2xCLDhCQUE4QjtJQUM5QixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsaUJBQWlCO0tBQ2hCLG1CQUFtQjtDQUN2Qjs7QUFDRDtJQUNJLGFBQWE7Q0FDaEI7O0FBQ0Q7SUFDSSxpQkFBaUI7Q0FDcEI7O0FBRUQ7SUFDSSxpQkFBaUI7SUFDakIsbUJBQW1CO0NBQ3RCOztBQUNEO0lBQ0ksbUNBQTJCO1lBQTNCLDJCQUEyQjtJQUMzQix1QkFBdUI7RUFDekIsNENBQW9DO1VBQXBDLG9DQUFvQztFQUNwQyxvQ0FBNEI7VUFBNUIsNEJBQTRCO0VBQzVCLCtCQUErQjtFQUMvQix1QkFBdUI7RUFDdkIsc0JBQXNCO0VBQ3RCLGlCQUFpQjs7Q0FFbEI7O0FBQ0Q7SUFDSSxvQkFBb0I7Q0FDdkI7O0FBQ0Q7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQiwwQkFBMEI7SUFDMUIsaUJBQWlCO0NBQ3BCOztBQUVEO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixlQUFlO0lBQ2YsZ0NBQWdDO0lBQ2hDLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtDQUNyQjs7QUFHRDtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7Q0FDbkI7O0FBQ0Q7SUFDSSxpQkFBaUI7Q0FDcEI7O0FBQ0Q7SUFDSSx1QkFBdUI7SUFDdkIsWUFBWTtDQUNmOztBQUNEO0lBQ0k7eUJBQ3FCO0NBQ3hCOztBQUNEO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLG9DQUFvQztJQUNwQyxtQ0FBbUM7SUFDbkMsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsNkRBQTZEO0lBQzdELGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLGVBQWU7SUFDZixzQkFBc0I7SUFDdEIsY0FBYztJQUNkLG1CQUFtQjtJQUNuQiwyREFBMkQ7SUFDM0QsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtDQUN0Qjs7QUFDRDtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0NBQ2Q7O0FBQ0Q7SUFDSSxtQkFBbUI7Q0FDdEI7O0FBRUQ7SUFDSSxpQkFBaUI7Q0FDcEI7O0FBQ0Q7SUFDSSxpQkFBaUI7Q0FDcEI7O0FBRUQ7RUFDRSwwQkFBMEI7RUFDMUIsaUJBQWlCO0VBQ2pCLDZCQUE2QjtDQUM5Qjs7QUFFRDtJQUNJLG1CQUFtQjtDQUN0Qjs7QUFFRDtJQUNJLGlCQUFpQjtJQUNqQixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGNBQWM7Q0FDakI7O0FBRUQ7SUFDSSxtQ0FBbUM7SUFDbkMsb0NBQW9DO0lBQ3BDLG1DQUFtQztJQUNuQyxlQUFlO0lBQ2YsNkRBQTZEO0lBQzdELGlCQUFpQjtJQUNqQixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCx1QkFBdUI7SUFDdkIsbUJBQW1CO0NBQ3RCOztBQUNEO0lBQ0kscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixrQkFBa0I7Q0FDckI7O0FBQ0E7SUFDRyxvQkFBb0I7Q0FDdkI7O0FBRUQ7SUFDSSw2REFBNkQ7Q0FDaEU7O0FBRUE7SUFDRyxpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLDRCQUE0QjtDQUMvQjs7QUFDRDtJQUNJLFVBQVU7SUFDVixXQUFXO0NBQ2Q7O0FBQ0Q7SUFDSSxrQkFBa0I7Q0FDckI7O0FBQ0Q7SUFDSSw2QkFBNkI7SUFDN0Isb0JBQW9CO0NBQ3ZCOztBQUNEO0lBQ0ksdUJBQXVCO0NBQzFCOztBQUVELDJDQUEyQzs7QUFDMUM7SUFDRyxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLHNCQUFzQjs7Q0FFekI7O0FBQ0Q7SUFDSSxhQUFhO0lBQ2IsWUFBWTtDQUNmOztBQUNBO0lBQ0csc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsV0FBVztJQUNYLGlCQUFpQjtDQUNwQjs7QUFDRDtJQUNJLFVBQVU7SUFDVixXQUFXO0NBQ2Q7O0FBQ0Q7SUFDSSxzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLG9CQUFvQjtDQUN2Qjs7QUFFRCxPQUFPOztBQUVQO0lBQ0k7UUFDSSxtQkFBbUI7UUFDbkIsZ0JBQWdCO1FBQ2hCLGtCQUFrQjtLQUNyQjtBQUNMO0lBQ0ksZ0JBQWdCO0NBQ25COztBQUVEO0lBQ0ksZ0JBQWdCO0NBQ25CO0FBQ0Q7SUFDSSxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtDQUNyQjtBQUNEO0lBQ0kscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixzQkFBc0I7Q0FDekI7Q0FDQTs7QUFDRDtJQUNJO1FBQ0ksc0JBQXNCO1FBQ3RCLDJCQUEyQjtRQUMzQiwyQkFBMkI7S0FDOUI7QUFDTDtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0NBQ3JCO0FBQ0Q7SUFDSSxxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtDQUN6QjtBQUNEO0lBQ0ksMEJBQTBCO0lBQzFCLHdCQUF3QjtJQUN4QiwwQkFBMEI7SUFDMUIsc0JBQXNCO0NBQ3pCO0FBQ0Q7SUFDSSwyQkFBMkI7SUFDM0IsOEJBQThCO0NBQ2pDOztBQUVEO0lBQ0ksMEJBQTBCO0NBQzdCO0FBQ0Q7SUFDSSw4QkFBOEI7Q0FDakM7QUFDRDtJQUNJLDZCQUE2QjtDQUNoQztBQUNEO0lBQ0ksV0FBVztLQUNWO0NBQ0o7O0FBR0Qsa0JBQWtCOztBQUNsQjtJQUNJLG9CQUFvQjtJQUNwQixzQkFBc0I7SUFDdEIsd0JBQXdCO0NBQzNCOztBQUVEO0lBQ0ksc0JBQXNCO0lBQ3RCLG1CQUFtQjtDQUN0Qjs7QUFDRDtJQUNJLGVBQWU7Q0FDbEI7O0FBRUQ7SUFDSSwyQ0FBMkM7SUFDM0MsMEJBQTBCO0lBQzFCLDBCQUEwQjtJQUMxQixnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixZQUFZO0NBQ2Y7O0FBQ0Q7SUFDSSxtQkFBbUI7SUFDbkIsWUFBWTtDQUNmOztBQUNEO0lBQ0ksNkJBQTZCO0NBQ2hDOztBQUNEO0lBQ0ksZUFBZTtDQUNsQjs7QUFDRDtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osbUJBQW1CO0NBQ3BCOztBQUNEO0lBQ0ksa0JBQWtCO0lBQ2xCLGlDQUFpQztJQUNqQyxpQkFBaUI7SUFDakIsd0JBQXdCO0lBQ3hCLDBCQUEwQjtDQUM3Qjs7QUFFRCxrQkFBa0I7O0FBRWxCO0lBQ0ksMEhBQTJJO0lBQzNJLDRCQUE0QjtJQUM1Qiw2QkFBNkI7SUFDN0Isc0JBQXNCO0lBQ3RCLFVBQVU7SUFDVixPQUFPO0lBQ1AsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLHdCQUF3QjtLQUN2QixtQkFBbUI7S0FDbkIsbUJBQW1COztDQUV2Qjs7QUFDRDtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixvQ0FBb0M7SUFDcEMsbUNBQW1DO0lBQ25DLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLDZEQUE2RDtJQUM3RCxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsMkRBQTJEO0lBQzNELHVCQUF1QjtJQUN2QiwwQkFBMEI7SUFDMUIsbUJBQW1CO0NBQ3RCOztBQUNEO0lBQ0ksd0JBQXdCO0lBQ3hCLGFBQWE7Q0FDaEI7O0FBSEQ7SUFDSSx3QkFBd0I7SUFDeEIsYUFBYTtDQUNoQjs7QUFIRDtJQUNJLHdCQUF3QjtJQUN4QixhQUFhO0NBQ2hCOztBQUhEO0lBQ0ksd0JBQXdCO0lBQ3hCLGFBQWE7Q0FDaEI7O0FBQ0Q7SUFDSTtPQUNHO0tBQ0YsaUJBQWlCO0NBQ3JCOztBQUVEO0lBQ0ksbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGFBQWE7Q0FDaEI7O0FBRUQ7SUFDSSxlQUFlO0NBQ2xCOztBQUNEO0lBQ0ksb0JBQW9CO0NBQ3ZCOztBQUNEOztJQUVJLGNBQWM7Q0FDakI7O0FBQ0Q7QUFDQSxVQUFVO0NBQ1Q7O0FBRUQ7SUFDSTtRQUNJLFVBQVU7UUFDVixpQkFBaUI7S0FDcEI7SUFDRDtRQUNJLGdCQUFnQjtLQUNuQjtDQUNKOztBQVJEO0lBQ0k7UUFDSSxVQUFVO1FBQ1YsaUJBQWlCO0tBQ3BCO0lBQ0Q7UUFDSSxnQkFBZ0I7S0FDbkI7Q0FDSjs7QUFFRCxrQkFBa0I7O0FBRWxCO0lBQ0ksa0JBQWtCO0NBQ3JCOztBQUVEO0lBQ0ksbUJBQW1CO0NBQ3RCOztBQUVEO0lBQ0ksbUJBQW1CO0lBQ25CLGFBQWEsWUFBWTtJQUN6QiwwQkFBMEI7O0NBRTdCOztBQUVEO0lBQ0ksY0FBYztDQUNqQjs7QUFDRDtJQUNJLFlBQVk7Q0FDZjs7QUFFRDtJQUNJLGNBQWM7Q0FDakIiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImZvb3RlciAuY29udGFpbmVyLWZsdWlke1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG4gICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuXHJcbiNjbG91ZHN7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4uc3Vic2NyaXB0aW9ue1xyXG4gICAgbWFyZ2luOjAgYXV0bztcclxufVxyXG5cclxuLm1haW4taGVyb3tcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6bGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSgyNDUsIDI0NiwgMjUyLCAwLjIyKSwgcmdiYSgxMTcsIDE5LCA5MywgMC40MykpLCB1cmwoJy4uLy4uL2Fzc2V0cy9pbWcvd29tYW4td2l0aC1zZWVkbGluZy5qcGcnKTtcclxuICAgIGhlaWdodDogNTUwcHg7XHJcbiAgICAvKiB3aWR0aDogMTAwJTsgKi9cclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBwYWRkaW5nLXRvcDogOTBweDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTpjb3ZlcjtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHRvcDogMDtcclxuICAgIG1hcmdpbi10b3A6IDgwcHghaW1wb3J0YW50O1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICBpbWFnZS1vcmllbnRhdGlvbjogZnJvbS1pbWFnZTtcclxuICAgIG1hcmdpbi10b3A6IC04cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbiAgICBjb2xvcjogYWxpY2VibHVlO1xyXG4gICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxufVxyXG4uc3BhY2Vye1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG59XHJcbi5jYXB0aW9uLXRleHR7XHJcbiAgICBtYXJnaW4tdG9wOiA2MHB4O1xyXG59XHJcblxyXG4uc2Nyb2xsLWRvd257XHJcbiAgICBtYXJnaW4tdG9wOiA3MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5zY3JvbGwtZG93biBzdmcge1xyXG4gICAgYW5pbWF0aW9uLW5hbWU6IGRvd25zY3JvbGw7XHJcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDJzO1xyXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xyXG4gIGFuaW1hdGlvbi1kaXJlY3Rpb246IG5vcm1hbDtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMnM7XHJcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAycztcclxuICB0cmFuc2l0aW9uLWRlbGF5OiAuMnM7XHJcbiAgdHJhbnNpdGlvbjogZWFzZTtcclxuXHJcbn1cclxuLmNhcHRpb24tdGV4dCAuYnRue1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG4ubWFpbi1oZXJvIGgxe1xyXG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDUwcHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgbWFyZ2luLXRvcDogOTVweDtcclxufVxyXG5cclxuLmljb24td3B7XHJcbiAgICB3aWR0aDo0MHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNDIpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG59XHJcblxyXG5cclxuLnNlY3Rpb24tcm93e1xyXG4gICAgaGVpZ2h0OiA0NiU7XHJcbiAgICBwYWRkaW5nOiA1JSAxMCU7XHJcbn1cclxuLnNlY3Rpb24tb25le1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxufVxyXG4uaW1nLXNlY3Rpb24gaW1ne1xyXG4gICAgaGVpZ2h0OiAxMDAlIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5jb250YWluZXItZmx1aWR7XHJcbiAgICAvKiBwYWRkaW5nLXJpZ2h0OjA7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMDsgKi9cclxufVxyXG4ucmVhZC1tb3JlIGJ1dHRvbntcclxuICAgIG1pbi13aWR0aDogMjIwcHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLjVweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAuOTtcclxuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xyXG4gICAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZvbnQtZmFtaWx5OiBcIkdvb2dsZSBTYW5zXCIsUm9ib3RvLEFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGhlaWdodDogNDZweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC43NXB4O1xyXG4gICAgbWFyZ2luOiA4cHggMDtcclxuICAgIHBhZGRpbmc6IDE1cHggMjRweDtcclxuICAgIHRyYW5zaXRpb246IGNvbG9yIC4xNXMgbGluZWFyLGJhY2tncm91bmQtY29sb3IgLjE1cyBsaW5lYXI7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgcGFkZGluZzogMTdweCAyNHB4O1xyXG59XHJcbi5yZWFkLW1vcmV7XHJcbiAgICBtYXJnaW46IDQ1cHggYXV0bztcclxuICAgIHdpZHRoOiA3MCU7XHJcbn1cclxuLnNlY3Rpb24tdHdve1xyXG4gICAgYmFja2dyb3VuZDojRjVGNUY1O1xyXG59XHJcblxyXG4uc2VjdGlvbi10aHJlZXtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbn1cclxuLnNlY3Rpb24tZm9vdGVye1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxufVxyXG5cclxuLmRlc2NyaXB0aW9uLXNlY3Rpb24gaDN7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIC8qIGNvbG9yOiM2Yzc1N2QhaW1wb3J0YW50ICovXHJcbn1cclxuXHJcbi5jb3B5LWNvbnRlbnQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uaC1jLWhlYWRsaW5lIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAtd2Via2l0LWh5cGhlbnM6IG5vbmU7XHJcbiAgICAtbXMtaHlwaGVuczogbm9uZTtcclxuICAgIGh5cGhlbnM6IG5vbmU7XHJcbn1cclxuXHJcbi5oLWMtaGVhZGxpbmUge1xyXG4gICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcclxuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xyXG4gICAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcclxuICAgIGNvbG9yOiAjMjAyMTI0O1xyXG4gICAgZm9udC1mYW1pbHk6IFwiR29vZ2xlIFNhbnNcIixSb2JvdG8sQXJpYWwsSGVsdmV0aWNhLHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgLXdlYmtpdC1oeXBoZW5zOiBhdXRvO1xyXG4gICAgLW1zLWh5cGhlbnM6IGF1dG87XHJcbiAgICBoeXBoZW5zOiBhdXRvO1xyXG4gICAgb3ZlcmZsb3ctd3JhcDogaW5pdGlhbDtcclxuICAgIHdvcmQtd3JhcDogaW5pdGlhbDtcclxufVxyXG4uaC1jLWhlYWRsaW5lLmgtYy1oZWFkbGluZS0tdHdvIHtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjMzMzMzO1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDA7XHJcbn1cclxuIC5jb250ZW50X190ZXh0IHtcclxuICAgIG1hcmdpbjogMThweCAwIDM2cHg7XHJcbn1cclxuXHJcbi5oLWMtY29weSB7XHJcbiAgICBmb250LWZhbWlseTogXCJHb29nbGUgU2Fuc1wiLFJvYm90byxBcmlhbCxIZWx2ZXRpY2Esc2Fucy1zZXJpZjtcclxufVxyXG5cclxuIC5iYWRnZXNfX2xpc3Qge1xyXG4gICAgbWFyZ2luOiAwIDAgNjRweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIC8qIGRpc3BsYXk6IGlubGluZS1ibG9jazsgKi9cclxufVxyXG5ibG9ja3F1b3RlLCBkZCwgZGl2LCBkbCwgZHQsIGZvcm0sIGgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIGxpLCBvbCwgcCwgcHJlLCB0ZCwgdGgsIHVsIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxub2wsIHVsIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG59XHJcbmRsLCBvbCwgdWwge1xyXG4gICAgbGlzdC1zdHlsZS1wb3NpdGlvbjogb3V0c2lkZTtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuKiwgOmFmdGVyLCA6YmVmb3JlIHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbi8qIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDgwMHB4KXsgKi9cclxuIC5iYWRnZXNfX2l0ZW0ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cclxufVxyXG4uYmFkZ2VzX19iYWRnZS0tcGxheSwgLmJhZGdlc19fYmFkZ2UtLWFwcHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbiAuYmFkZ2VzX19pdGVtIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgIFxyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgICB3aWR0aDogMjAlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAzJTtcclxufVxyXG5ibG9ja3F1b3RlLCBkZCwgZGl2LCBkbCwgZHQsIGZvcm0sIGgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIGxpLCBvbCwgcCwgcHJlLCB0ZCwgdGgsIHVsIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuLnNlY3Rpb24tLWV4cGVyaWVuY2UgLmJhZGdlc19faXRlbSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxufVxyXG5cclxuLyogfSAqL1xyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KXtcclxuICAgIGRkLCBkdCwgbGkge1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjYyNTtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDA7XHJcbiAgICB9XHJcbi5oLWMtaGVhZGxpbmUuaC1jLWhlYWRsaW5lLS10d28ge1xyXG4gICAgZm9udC1zaXplOiA0NHB4O1xyXG59XHJcblxyXG4uaC1jLWhlYWRsaW5lLmgtYy1oZWFkbGluZS0tdHdvIHtcclxuICAgIGZvbnQtc2l6ZTogMzRweDtcclxufVxyXG4uaC1jLWNvcHksIHAge1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNjI1O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDA7XHJcbn1cclxuLmgtYy1oZWFkbGluZS5oLWMtaGVhZGxpbmUtLXR3byB7XHJcbiAgICBsaW5lLWhlaWdodDogMS4xODE4MjtcclxuICAgIGZvbnQtc2l6ZTogNDRweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAtLjVweDtcclxufVxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCl7XHJcbiAgICAubWFpbi1oZXJvLXRleHR7XHJcbiAgICAgICAgLyogZm9udC1zaXplOiAyNXB4OyAqL1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OjQ1cHghaW1wb3J0YW50O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDE0cHghaW1wb3J0YW50O1xyXG4gICAgfVxyXG4uaC1jLWhlYWRsaW5lLmgtYy1oZWFkbGluZS0tdHdvIHtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjI1O1xyXG4gICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDA7XHJcbn1cclxuZGQsIGR0LCBsaSB7XHJcbiAgICBsaW5lLWhlaWdodDogMS43MTQyOTtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAuMjVweDtcclxufVxyXG5mb3JtIC5tYXJnaW4tbGVmdCwgLmdldC1pbnZvbHZlZCAubWFyZ2luLXJpZ2h0e1xyXG4gICAgLyogbWFyZ2luOiAwIWltcG9ydGFudDsgKi9cclxuICAgIG1hcmdpbi1sZWZ0OjAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwIWltcG9ydGFudDtcclxuICAgIC8qIGJhY2tncm91bmQ6IHJlZDsgKi9cclxufVxyXG5mb3JtIC5nZXRpbnZvbHZlZC1idG57XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4IWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHghaW1wb3J0YW50O1xyXG59XHJcblxyXG5mb3JtICAubWFyZ2luLXJpZ2h0Omxhc3QtY2hpbGR7XHJcbiAgICBtYXJnaW4tdG9wOjIwcHghaW1wb3J0YW50O1xyXG59XHJcbi5zd2FwLXNlY3Rpb24uZGVzY3JpcHRpb24tc2VjdGlvbntcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjMwcHgpO1xyXG59XHJcbi5zd2FwLXNlY3Rpb24uaW1nLXNlY3Rpb257XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMzE3cHgpO1xyXG59XHJcbi5iYWRnZXNfX2l0ZW17XHJcbiAgICB3aWR0aDogNDglO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLyogZm9vdGVyIHN0eWxlICovXHJcbi5mb290ZXJ7XHJcbiAgICAvKiBoZWlnaHQ6IDExMnB4OyAqL1xyXG4gICAgLyogYmFja2dyb3VuZDogcmVkOyAqL1xyXG4gICAgcGFkZGluZzogNDBweCAzMnB4IDIwcHg7XHJcbn1cclxuXHJcbi5mb290ZXIgdWwgbGl7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmZvb3RlcntcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4uZm9vdGVyIC5uYXYtaXRlbXtcclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTsgKi9cclxuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMXB4O1xyXG4gICAgZmxvYXQ6IG5vbmU7XHJcbn1cclxuLmZvb3RlciAud3AtbmF2e1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLnRleHQtY2VudGVye1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyIWltcG9ydGFudDtcclxufVxyXG4uZm9vdGVyIC5uYXYge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLmZvb3Rlci1pY29ucy1zZWN0aW9uIHN2Z3tcclxuICBoZWlnaHQ6IDIwcHg7XHJcbiAgd2lkdGg6IDIwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcbi5mb290ZXItaWNvbnMtc2VjdGlvbiB7XHJcbiAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGUhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy10b3A6MTRweDtcclxuICAgIHRleHQtYWxpZ246IGp1c3RpZnktYWxsO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxuLyogc3Vic2NyaXB0aW9uICovXHJcblxyXG4uc2VjdGlvbi1zdWJzY3JpcHRpb257XHJcbiAgICBiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMjQ1LCAyNDYsIDI1MiwgMC40MiksIHJnYmEoNjEsIDE1NSwgMjIzLCAwLjQzKSksIHVybCgnLi4vLi4vYXNzZXRzL2ltZy9lbWFpbC1zdWJzY3JpcHRpb24uanBnJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOmNvdmVyO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbWFyZ2luLXRvcDogLThweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICAgIGNvbG9yOiM2Yzc1N2QhaW1wb3J0YW50O1xyXG4gICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuICAgICBwYWRkaW5nLXRvcDogMTIwcHg7XHJcblxyXG59XHJcbi5zdWJzY3JpYmV7XHJcbiAgICBtaW4td2lkdGg6IDIyMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC41cHg7XHJcbiAgICBsaW5lLWhlaWdodDogLjk7XHJcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxuICAgIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBmb250LWZhbWlseTogXCJHb29nbGUgU2Fuc1wiLFJvYm90byxBcmlhbCxIZWx2ZXRpY2Esc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBoZWlnaHQ6IDQ2cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAuNzVweDtcclxuICAgIG1hcmdpbjogOHB4IDA7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDI0cHg7XHJcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAuMTVzIGxpbmVhcixiYWNrZ3JvdW5kLWNvbG9yIC4xNXMgbGluZWFyO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBwYWRkaW5nOiAxN3B4IDI0cHg7XHJcbn1cclxuOjpwbGFjZWhvbGRlcntcclxuICAgIGNvbG9yOiM2Yzc1N2QhaW1wb3J0YW50O1xyXG4gICAgb3BhY2l0eTogMC42O1xyXG59XHJcbiNlbWFpbHtcclxuICAgIC8qIG9wYWNpdHk6IC44NTtcclxuICAgICAqL1xyXG4gICAgIGJhY2tncm91bmQ6ICNlZWU7XHJcbn1cclxuXHJcbiNlbWFpbDpmb2N1cywgLmdldC1pbnZvbHZlZCBpbnB1dDpmb2N1cywgaW5wdXQ6Zm9jdXN7XHJcbiAgICAvKiBvcGFjaXR5OiAuOTU7ICovXHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJveC1zaGFkb3c6bm9uZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuLmZvcm0tc3Vic2NyaXB0aW9ue1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuLm1hdC1pbnB1dC1lbGVtZW50e1xyXG4gICAgY2FyZXQtY29sb3I6IzE3YTJiODtcclxufVxyXG4ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLXRoaWNrXHJcbntcclxuICAgIGNvbG9yOiMxN2EyYjg7XHJcbn1cclxuLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtb3V0bGluZS10aGlja3tcclxub3BhY2l0eTowO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGRvd25zY3JvbGx7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgdG9wOiAtOXB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IC01cHg7XHJcbiAgICB9XHJcbiAgICAxMDAle1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDlweDtcclxuICAgIH1cclxufVxyXG5cclxuLyogZ2V0IGludm9sdmVkICovXHJcblxyXG4ubWFyZ2luLWxlZnR7XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxufVxyXG5cclxuLm1hcmdpbi1yaWdodHtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG5cclxuLmdldC1pbnZvbHZlZCBpbnB1dHtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIGhlaWdodDogMzBweDtmbG9hdDogbGVmdDtcclxuICAgIC8qIHdpZHRoOiBjYWxjKDEwMHZ3KS81ICovXHJcblxyXG59XHJcblxyXG4uZ2V0LWludm9sdmVkIGxhYmVse1xyXG4gICAgY29sb3I6IzZjNzU3ZDtcclxufVxyXG4uaW5wdXQtZXJyb3Jze1xyXG4gICAgY29sb3I6IHBpbms7XHJcbn1cclxuXHJcbi5yZXNwb25zZXtcclxuICAgIGNvbG9yOiMxN2EyYjg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\n<!-- * * * * * * * * * * * The content below * * * * * * * * * * * -->\n<!-- * * * * * * * * * * is only a placeholder * * * * * * * * * * -->\n<!-- * * * * * * * * * * and can be replaced. * * * * * * * * * * * -->\n<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\n<!-- * * * * * * * * * Delete the template below * * * * * * * * * * -->\n<!-- * * * * * * * to get started with your project! * * * * * * * * -->\n<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\n\n<!-- <style>\n  :host {\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    font-size: 14px;\n    color: #333;\n    box-sizing: border-box;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    margin: 8px 0;\n  }\n\n  p {\n    margin: 0;\n  }\n\n  .spacer {\n    flex: 1;\n  }\n\n  .toolbar {\n    height: 60px;\n    margin: -8px;\n    display: flex;\n    align-items: center;\n    background-color: #1976d2;\n    color: white;\n    font-weight: 600;\n  }\n\n  .toolbar img {\n    margin: 0 16px;\n  }\n\n  .toolbar #twitter-logo {\n    height: 40px;\n    margin: 0 16px;\n  }\n\n  .toolbar #twitter-logo:hover {\n    opacity: 0.8;\n  }\n\n  .content {\n    display: flex;\n    margin: 32px auto;\n    padding: 0 16px;\n    max-width: 960px;\n    flex-direction: column;\n    align-items: center;\n  }\n\n  svg.material-icons {\n    height: 24px;\n    width: auto;\n  }\n\n  svg.material-icons:not(:last-child) {\n    margin-right: 8px;\n  }\n\n  .card svg.material-icons path {\n    fill: #888;\n  }\n\n  .card-container {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    margin-top: 16px;\n  }\n\n  .card {\n    border-radius: 4px;\n    border: 1px solid #eee;\n    background-color: #fafafa;\n    height: 40px;\n    width: 200px;\n    margin: 0 8px 16px;\n    padding: 16px;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    transition: all 0.2s ease-in-out;\n    line-height: 24px;\n  }\n\n  .card-container .card:not(:last-child) {\n    margin-right: 0;\n  }\n\n  .card.card-small {\n    height: 16px;\n    width: 168px;\n  }\n\n  .card-container .card:not(.highlight-card) {\n    cursor: pointer;\n  }\n\n  .card-container .card:not(.highlight-card):hover {\n    transform: translateY(-3px);\n    box-shadow: 0 4px 17px rgba(black, 0.35);\n  }\n\n  .card-container .card:not(.highlight-card):hover .material-icons path {\n    fill: rgb(105, 103, 103);\n  }\n\n  .card.highlight-card {\n    background-color: #1976d2;\n    color: white;\n    font-weight: 600;\n    border: none;\n    width: auto;\n    min-width: 30%;\n    position: relative;\n  }\n\n  .card.card.highlight-card span {\n    margin-left: 60px;\n  }\n\n  svg#rocket {\n    width: 80px;\n    position: absolute;\n    left: -10px;\n    top: -24px;\n  }\n\n  svg#rocket-smoke {\n    height: 100vh;\n    position: absolute;\n    top: 10px;\n    right: 180px;\n    z-index: -10;\n  }\n\n  a,\n  a:visited,\n  a:hover {\n    color: #1976d2;\n    text-decoration: none;\n  }\n\n  a:hover {\n    color: #125699;\n  }\n\n  .terminal {\n    position: relative;\n    width: 80%;\n    max-width: 600px;\n    border-radius: 6px;\n    padding-top: 45px;\n    margin-top: 8px;\n    overflow: hidden;\n    background-color: rgb(15, 15, 16);\n  }\n\n  .terminal::before {\n    content: \"\\2022 \\2022 \\2022\";\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 4px;\n    background: rgb(58, 58, 58);\n    color: #c2c3c4;\n    width: 100%;\n    font-size: 2rem;\n    line-height: 0;\n    padding: 14px 0;\n    text-indent: 4px;\n  }\n\n  .terminal pre {\n    font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace;\n    color: white;\n    padding: 0 1rem 1rem;\n    margin: 0;\n  }\n\n  .circle-link {\n    height: 40px;\n    width: 40px;\n    border-radius: 40px;\n    margin: 8px;\n    background-color: white;\n    border: 1px solid #eeeeee;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    cursor: pointer;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n    transition: 1s ease-out;\n  }\n\n  .circle-link:hover {\n    transform: translateY(-0.25rem);\n    box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);\n  }\n\n  footer {\n    margin-top: 8px;\n    display: flex;\n    align-items: center;\n    line-height: 20px;\n  }\n\n  footer a {\n    display: flex;\n    align-items: center;\n  }\n\n  .github-star-badge {\n    color: #24292e;\n    display: flex;\n    align-items: center;\n    font-size: 12px;\n    padding: 3px 10px;\n    border: 1px solid rgba(27, 31, 35, .2);\n    border-radius: 3px;\n    background-image: linear-gradient(-180deg, #fafbfc, #eff3f6 90%);\n    margin-left: 4px;\n    font-weight: 600;\n    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;\n  }\n\n  .github-star-badge:hover {\n    background-image: linear-gradient(-180deg, #f0f3f6, #e6ebf1 90%);\n    border-color: rgba(27, 31, 35, .35);\n    background-position: -.5em;\n  }\n\n  .github-star-badge .material-icons {\n    height: 16px;\n    width: 16px;\n    margin-right: 4px;\n  }\n\n  svg#clouds {\n    position: fixed;\n    bottom: -160px;\n    left: -230px;\n    z-index: -10;\n    width: 1920px;\n  }\n\n\n  /* Responsive Styles */\n  @media screen and (max-width: 767px) {\n\n    .card-container>*:not(.circle-link),\n    .terminal {\n      width: 100%;\n    }\n\n    .card:not(.highlight-card) {\n      height: 16px;\n      margin: 8px 0;\n    }\n\n    .card.highlight-card span {\n      margin-left: 72px;\n    }\n\n    svg#rocket-smoke {\n      right: 120px;\n      transform: rotate(-5deg);\n    }\n  }\n\n  @media screen and (max-width: 575px) {\n    svg#rocket-smoke {\n      display: none;\n      visibility: hidden;\n    }\n  }\n</style> -->\n\n<!-- Toolbar -->\n<div class=\"\" role=\"\">\n\n    <!-- app navigation bar -->\n    <app-navbar></app-navbar>\n</div>\n\n<div class=\"\" role=\"main\">\n\n    <main class=\"\">\n        <!-- main hero begining -->\n        <div role=\"main\" class=\"container-hero main-hero  text-center\">\n            <h1 class=\"main-hero-text\">Kingdom Support Initiatives</h1>\n            <p class=\"spacer\"></p>\n            <p class=\"mission-text\">\n                ...servicing and supporting God’s bride for a generation that genuinely know God\n            </p>\n            <p class=\"caption-text\">\n                <button class=\"btn btn-primary btn-sm \" routerLink=\"/about\">Read More...</button>\n            </p>\n\n\n            <div class=\"scroll-down\">\n                <p class=\"icon-wp\" [ngx-scroll-to]=\"'footer'\">\n                    <svg viewBox=\"0 0 24 24\" height=\"25\" fill=\"#fff\">\n                        <path d=\"M11,4H13V16L18.5,10.5L19.92,11.92L12,19.84L4.08,11.92L5.5,10.5L11,16V4Z\" />\n                    </svg>\n                </p>\n            </div>\n        </div>\n        <!-- main here end -->\n\n        <!-- section one beginging -->\n        <section class=\"container-fluid section-two section-row\">\n            <div class=\"container\">\n                <div class=\"row\">\n                    <div class=\"col-md-6 col-xs-12 description-section\">\n                        <h3>In His Foot Step</h3>\n                        <div class=\"spacer\"></div>\n                        <p class=\"text-muted\">\n                            We at KSI is a mandate to see that through 'In His Footstep’ people will experience a daily\n                            & continuous\n                            relationship with God. Through the word of God\n                            and the power of the Holy Spirit.\n                        </p>\n                        <div class=\"read-more\">\n                            <button class=\"btn btn-primary btn-lg\">Read More</button>\n                        </div>\n                    </div>\n\n                    <div class=\"col-md-6 col-xs-12 img-section\"> <img src=\"../assets/img/gmail.com\"\n                            class=\"img-responsive img\">\n                    </div>\n                </div>\n            </div>\n        </section>\n        <!-- section one end -->\n\n        <!-- section one beginging -->\n        <section class=\"container-fluid section-one section-row\">\n            <div class=\"container\">\n                <div class=\"row\">\n\n                    <div class=\"col-md-6 col-xs-12 swap-section img-section\"> <img src=\"../assets/img/gmail.com\"\n                            class=\"img-responsive img\">\n                    </div>\n\n                    <div class=\"col-md-6 col-xs-12 swap-section  description-section\">\n                        <h3>Inspire Impact</h3>\n                        <div class=\"spacer\"></div>\n                        <p class=\"text-muted\">\n                            We have an amazing set of a podcast to encourage and inspire God’s children to be bold and\n                            pursue whatever\n                            God is laying upon their hearts\n                        </p>\n                        <div class=\"read-more\">\n                            <button class=\"btn btn-primary btn-lg\">Read More</button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </section>\n        <!-- section one end -->\n\n        <!-- section one beginging -->\n        <section class=\"container-fluid section-two section-row\">\n            <div class=\"container\">\n                <div class=\"row\">\n                    <div class=\"col-md-6 col-xs-12 description-section\">\n                        <h3>Kingdom Life Summit</h3>\n                        <div class=\"spacer\"></div>\n                        <p class=\"text-muted\">\n                            <!-- Well, without prayers we are powerless in the face of our enemy. We believe that we pray to unstop until we've results -->\n                            Wondering how to refill your oil? well, we have an annual retreat for you to refresh,\n                            re-evaluate and\n                            re-strategize in God’s presence.\n                        </p>\n                        <div class=\"read-more\">\n                            <button class=\"btn btn-primary btn-lg\">Read More</button>\n                        </div>\n                    </div>\n\n                    <div class=\"col-md-6 col-xs-12 img-section\"> <img src=\"../assets/img/gmail.com\"\n                            class=\"img-responsive img\">\n                    </div>\n                </div>\n            </div>\n        </section>\n        <!-- section one end -->\n\n        <!-- section one beginging -->\n        <section class=\"container-fluid section-one section-row\">\n            <div class=\"container\">\n                <div class=\"row\">\n\n                    <div class=\"col-md-6 col-xs-12 description-section\">\n                        <h3>Get Involved</h3>\n                        <div class=\"spacer\"></div>\n                        <p class=\"text-muted\">\n                            Well, if you are looking for a place that you can affect lives, KSI is one of them. if this\n                            sounds cool to\n                            you go ahead and fill the form and we will reach out to you ASAP.\n                        </p>\n                        <div class=\"read-more\">\n                            <button class=\"btn btn-primary btn-lg\">Read More</button>\n                        </div>\n                    </div>\n\n                    <div class=\"col-md-6 col-xs-12\">\n                        <form class=\"get-involved\" [formGroup]=\"frm\">\n                            <div class=\"\">\n                                <h5 class=\"text-center\">Fill the below if you want to be part of us</h5>\n                                <div class=\"spacer\"></div>\n                                <div class=\"row\">\n\n                                    <div class=\"col-sm margin-left col-xs-12\">\n                                        <div class=\"response text-center\">{{errorResult || successResult}}</div>\n                                        <!-- <div class=\"col-sm\"> -->\n                                        <div class=\"form-group\">\n                                            <label for=\"fullname\">Full Name</label>\n                                            <input type=\"text\" autocomplete=\"name\" formControlName=\"fullName\"\n                                                class=\"form-control\" id=\"fullname\" aria-describedby=\"nameHelp\"\n                                                placeholder=\"Nazeh Abel\">\n                                        </div>\n                                        <div class=\"input-errors\" *ngIf=\"\n                      (frm.get('fullName').invalid &&\n                        frm.get('fullName').touched) ||\n                      showInputErrors\n                    \">\n                                            <div *ngIf=\"frm.get('fullName').hasError('required')\">\n                                                Please enter your full Name!\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"spacer\"></div>\n                                <div class=\"row\">\n                                    <!-- email field -->\n                                    <div class=\"col-sm col-xs-12 margin-left margin-right\">\n                                        <div class=\"form-group\">\n                                            <label for=\"email--getinv\">Email Address</label>\n                                            <input type=\"email\" autocomplete=\"email\" formControlName=\"email\"\n                                                class=\"form-control\" id=\"email--getinv\" aria-describedby=\"emailHelp\"\n                                                placeholder=\"Nazehabel@domain.com\">\n                                        </div>\n                                        <!-- throw this error if not valid -->\n                                        <div class=\"input-errors\" *ngIf=\"\n                        (frm.get('email').invalid &&\n                          frm.get('email').touched) ||\n                        showInputErrors\n                      \">\n                                            <div *ngIf=\"frm.get('email').hasError('required')\">\n                                                Please enter your email address!\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <!-- mobile field -->\n                                    <div class=\"col-sm margin-right col-xs-12\">\n                                        <div class=\"form-group\">\n                                            <label for=\"mobile\">Phone/Mobile Number</label>\n                                            <input type=\"mobile\" autocomplete=\"mobile\" formControlName=\"mobile\"\n                                                class=\"form-control\" id=\"mobile\" aria-describedby=\"mobileHelp\"\n                                                placeholder=\"+234812345678\">\n                                        </div>\n                                           <!-- throw this error if not valid or empty -->\n                                    <div class=\"input-errors\" *ngIf=\"\n                                    (frm.get('mobile').invalid &&\n                                      frm.get('mobile').touched) ||\n                                    showInputErrors\n                                  \">\n                                       <div *ngIf=\"frm.get('mobile').hasError('required')\">\n                                           Please enter your mobile number!\n                                       </div>\n                                   </div>\n                                    </div>\n                                 \n                                </div>\n                                <!-- </div> -->\n                                <div class=\"spacer\"></div>\n                            </div>\n                            <div class=\"spacer\"></div>\n                            <div class=\"row\">\n                                <div class=\"col-sm margin-left getinvolved-btn margin-right\">\n                                    <div class=\"form-group\">\n                                        <button type=\"submit\" (click)=\"getInvolved()\" class=\"btn btn-block btn-primary\"\n                                            [disabled]=\"isbusy\">\n                                            <ng-template [ngIf]=\"!isbusy\">Submit</ng-template>\n                                            <ng-template [ngIf]=\"isbusy\">Processing Request, please wait...</ng-template>\n                                        </button>\n                                    </div>\n                                </div>\n                            </div>\n                        </form>\n                    </div>\n                </div>\n            </div>\n        </section>\n        <!-- section one end -->\n\n\n        <!-- section two beginging -->\n        <section class=\"container-fluid section-subscription section-row\">\n            <div class=\"container subscription\">\n                <div class=\"row\">\n\n                    <div class=\"col-md-12 text-center col-xs-12 description-section\">\n\n                        <h3>Grow Your Relationship &amp; Walk With God With Our Daily Devotion</h3>\n\n                        <div class=\"spacer\"></div>\n\n                        <p>Subscribe to our Daily Devotional, 'In His Footstep'</p>\n\n                        <div class=\"spacer\"></div>\n                        <form class=\"form-subscription col-md-6 col-xs-12\" [formGroup]=\"subForm\">\n                                <div class=\"response text-center\">{{successResult || errorResult}}</div>\n                            <div class=\"form-group mx-sm-3 mb-2\">\n                                <div class=\"form-group\">\n                                        <input type=\"email\" autocomplete=\"email\" class=\"form-control form-control-lg\" formControlName=\"emailsub\"\n                                        placeholder=\"Nazehabel@domain.com\">\n                                </div>           \n                                 <!-- throw this error if not valid or empty -->\n                                 <div class=\"input-errors\" *ngIf=\"\n                                 (subForm.get('emailsub').invalid &&\n                                   subForm.get('emailsub').touched) ||\n                                 showInputError\n                               \">\n                                    <div style=\"color:#ffae42\" *ngIf=\"subForm.get('emailsub').hasError('required')\">\n                                        Please enter your email address to subscribe!\n                                    </div>\n                                </div>                    \n                            </div>\n                            <div class=\"spacer\"></div>\n                                    <div class=\"form-group\">\n                                            <button type=\"submit\" (click)=\"devotionSubscription()\" class=\"btn subscribe btn-primary btn-lg mb-2\"\n                                                [disabled]=\"isbusySub\">\n                                                <ng-template [ngIf]=\"!isbusySub\">SUBSCRIBE</ng-template>\n                                                <ng-template [ngIf]=\"isbusySub\">Processing Request, please wait...</ng-template>\n                                            </button>\n                                        </div>\n                                \n                        </form>\n                    </div>\n\n                    <!-- <div class=\"col-md-6 col-xs-12 img-section\">Section two half</div> -->\n                </div>\n            </div>\n        </section>\n        <!-- section two end -->\n\n\n        <!-- section footer beginging -->\n        <section class=\"container-fluid section-footer section-row\">\n            <div class=\"row\">\n\n                <div class=\"col-md-12 col-xs-12 description-section\">\n                    <div class=\"h-c-grid__col h-c-grid__col--12 h-c-grid__col--align-middle\">\n                        <div class=\"copy-content\">\n                            <h2 class=\"h-c-headline h-c-headline--two\">Experience our daily devotion on any device</h2>\n\n                            <div class=\"content__text\">\n                                <p class=\"h-c-copy\">The ease &amp; simplicity of KSI, wherever you are.</p>\n                            </div>\n\n                        </div>\n\n                        <ul class=\"badges__list\">\n                            <li class=\"badges__item\">\n                                <a href=\"#\" target=\"_blank\" rel=\"noopener\" ga-on=\"click\"\n                                    ga-event-category=\"ab experiment\" ga-event-action=\"mobile app\"\n                                    ga-event-label=\"play store\">\n\n                                    <img class=\"badges__badge badges__badge--play\"\n                                        src=\"https://lh3.googleusercontent.com/6kdr7g-ziKhTh0iWIXncqJh6Zd8Z-dkntyVV10lni6ZyBC8Q7uzQeY4Xv7EIAH6b0EQkUD6cUrHC8-GCLma-ZJrdNp16cciXoP_N\"\n                                        alt=\"Google Play\" aria-label=\"Google Play\">\n\n                                </a>\n                            </li>\n                            <li class=\"badges__item\">\n                                <a href=\"\" target=\"_blank\" rel=\"noopener\" ga-on=\"click\"\n                                    ga-event-category=\"ab experiment\" ga-event-action=\"mobile app\"\n                                    ga-event-label=\"app store\">\n\n                                    <img class=\"badges__badge badges__badge--app\"\n                                        src=\"https://lh3.googleusercontent.com/OBvpNtOKZRZjGFYGsmUrME8yMIjkk1BNQX89gt_lMN2afWCZDvE4SdZhPGXI72vDo-wWqML-8NDy2vU2zY2c6oOktAXZbcwU9ByMBw\"\n                                        alt=\"App Store\" aria-label=\"App Store\">\n\n                                </a>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </div>\n        </section>\n        <!-- section footer end -->\n        <app-footer></app-footer>\n    </main>\n\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _providers_main_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../providers/main-service.service */ "./src/app/providers/main-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeComponent = /** @class */ (function () {
    function HomeComponent(formbuilder, router, userService) {
        this.formbuilder = formbuilder;
        this.router = router;
        this.userService = userService;
        // this.isbusySub = false;
        this.frm = formbuilder.group({
            fullName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            mobile: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.subForm = formbuilder.group({ emailsub: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required] });
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.getInvolved = function () {
        var _this = this;
        // validate form
        if (this.frm.invalid) {
            this.showInputErrors = true;
            return;
        }
        // reset status
        this.isbusy = true;
        this.hasFailed = false;
        var fullName = this.frm.get("fullName").value;
        var email = this.frm.get("email").value;
        var mobile = this.frm.get("mobile").value;
        // console.log(username, password);
        this.message = {
            fullName: fullName,
            email: email,
            mobile: mobile
        };
        this.userService.getInvolved(this.message).subscribe(function (response) {
            var data = response.data;
            if (data == null || data == undefined) {
                _this.isbusy = false;
                _this.errorResult = "Oops something went wrong";
                _this.setHideOut(5000);
            }
            else {
                _this.isbusy = false;
                _this.frm.reset({});
                _this.successResult = "Thank You, We will get back to you ASAP!!!";
                _this.setHideOut(5000);
            }
        });
    };
    HomeComponent.prototype.devotionSubscription = function () {
        var _this = this;
        if (this.subForm.invalid) {
            this.showInputError = true;
            return;
        }
        // reset status
        this.isbusySub = true;
        this.hasFailed = false;
        var email = this.subForm.get('emailsub').value;
        this.subscribe = {
            email: email
        };
        this.userService.devotionSubcription(this.subscribe).subscribe(function (response) {
            // this.userAuth.doSignIn(response.token,response.name)
            var data = response.data;
            console.log('ddhdh', data);
            if (data == null || data == undefined) {
                _this.isbusySub = false;
                _this.errorResult = "Oops! something went wrong!";
                _this.setHideOut(5000);
            }
            else {
                _this.isbusySub = false;
                _this.successResult = "Thank you for subscribing to our daily devotion";
                _this.subForm.reset({});
                _this.setHideOut(5000);
            }
            _this.subscribe = response;
        });
    };
    HomeComponent.prototype.setHideOut = function (time) {
        var _this = this;
        console.log(time);
        setTimeout(function () {
            _this.successResult = " ";
            _this.errorResult = "";
        }, time);
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _providers_main_service_service__WEBPACK_IMPORTED_MODULE_3__["MainServiceService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nav{\r\n    height: 80px;\r\n    padding: 10px 105px;\r\n    min-height:56px;\r\n    background:#FFFFFF;\r\n    /* box-shadow: 0 6px 20px rgba(0, 0, 0, 0.18), 0 6px 6px rgba(0, 0, 0, 0.15); */\r\n}\r\n\r\n.nav-item{\r\n    background-color: rgb(255, 255, 255);\r\n    color: rgb(255, 255, 255);\r\n    text-transform: uppercase;\r\n    font-size: 15px;\r\n    margin-right: 21px;\r\n}\r\n\r\n.navbar-light .navbar-toggler{\r\n    border-color:#fff;\r\n}\r\n\r\nbutton.navbar-toggler:active{\r\n    /* background-color:red; */\r\n    outline: none!important;\r\n    }\r\n\r\nbutton.navbar-toggler:focus{\r\n/* background-color:red; */\r\noutline: none!important;\r\n}\r\n\r\n#navbarNavDropdown li{\r\n    padding-left: 15px;\r\n}\r\n\r\n.active{\r\n    color:#17a2b8;\r\n    font-weight: 500;\r\n}\r\n\r\n.navbar-brand img{\r\n  height: 100%;\r\n  width: 100%;\r\n}\r\n\r\n.navbar-brand{\r\n    width: 68px;\r\n    /* height: 100%; */\r\n}\r\n\r\n@media screen and (max-width:760px){\r\n    nav{\r\n        padding: 10px 20px; \r\n    }\r\n    #navbarNavDropdown{\r\n        margin-top: 26px;\r\n        margin-left: 0!important;\r\n        left:0;\r\n        right:0;\r\n        z-index: 10000;\r\n    }\r\n    .navbar-brand{\r\n        width: 55px;\r\n    }\r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGdGQUFnRjtDQUNuRjs7QUFFRDtJQUNJLHFDQUFxQztJQUNyQywwQkFBMEI7SUFDMUIsMEJBQTBCO0lBQzFCLGdCQUFnQjtJQUNoQixtQkFBbUI7Q0FDdEI7O0FBQ0Q7SUFDSSxrQkFBa0I7Q0FDckI7O0FBQ0Q7SUFDSSwyQkFBMkI7SUFDM0Isd0JBQXdCO0tBQ3ZCOztBQUVMO0FBQ0EsMkJBQTJCO0FBQzNCLHdCQUF3QjtDQUN2Qjs7QUFFRDtJQUNJLG1CQUFtQjtDQUN0Qjs7QUFDRDtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7Q0FDcEI7O0FBQ0Q7RUFDRSxhQUFhO0VBQ2IsWUFBWTtDQUNiOztBQUNEO0lBQ0ksWUFBWTtJQUNaLG1CQUFtQjtDQUN0Qjs7QUFFRDtJQUNJO1FBQ0ksbUJBQW1CO0tBQ3RCO0lBQ0Q7UUFDSSxpQkFBaUI7UUFDakIseUJBQXlCO1FBQ3pCLE9BQU87UUFDUCxRQUFRO1FBQ1IsZUFBZTtLQUNsQjtJQUNEO1FBQ0ksWUFBWTtLQUNmOztDQUVKIiwiZmlsZSI6InNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibmF2e1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgcGFkZGluZzogMTBweCAxMDVweDtcclxuICAgIG1pbi1oZWlnaHQ6NTZweDtcclxuICAgIGJhY2tncm91bmQ6I0ZGRkZGRjtcclxuICAgIC8qIGJveC1zaGFkb3c6IDAgNnB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjE4KSwgMCA2cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7ICovXHJcbn1cclxuXHJcbi5uYXYtaXRlbXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMXB4O1xyXG59XHJcbi5uYXZiYXItbGlnaHQgLm5hdmJhci10b2dnbGVye1xyXG4gICAgYm9yZGVyLWNvbG9yOiNmZmY7XHJcbn1cclxuYnV0dG9uLm5hdmJhci10b2dnbGVyOmFjdGl2ZXtcclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6cmVkOyAqL1xyXG4gICAgb3V0bGluZTogbm9uZSFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG5idXR0b24ubmF2YmFyLXRvZ2dsZXI6Zm9jdXN7XHJcbi8qIGJhY2tncm91bmQtY29sb3I6cmVkOyAqL1xyXG5vdXRsaW5lOiBub25lIWltcG9ydGFudDtcclxufVxyXG5cclxuI25hdmJhck5hdkRyb3Bkb3duIGxpe1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG59XHJcbi5hY3RpdmV7XHJcbiAgICBjb2xvcjojMTdhMmI4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG4ubmF2YmFyLWJyYW5kIGltZ3tcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLm5hdmJhci1icmFuZHtcclxuICAgIHdpZHRoOiA2OHB4O1xyXG4gICAgLyogaGVpZ2h0OiAxMDAlOyAqL1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjc2MHB4KXtcclxuICAgIG5hdntcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7IFxyXG4gICAgfVxyXG4gICAgI25hdmJhck5hdkRyb3Bkb3due1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDI2cHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDAhaW1wb3J0YW50O1xyXG4gICAgICAgIGxlZnQ6MDtcclxuICAgICAgICByaWdodDowO1xyXG4gICAgICAgIHotaW5kZXg6IDEwMDAwO1xyXG4gICAgfVxyXG4gICAgLm5hdmJhci1icmFuZHtcclxuICAgICAgICB3aWR0aDogNTVweDtcclxuICAgIH1cclxuXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-expand-lg navbar-light bg-white fixed-top\">\n    <!-- brand logo -->\n    <a class=\"navbar-brand\" routerLink=\"/\" routerLinkActive=\"router-link-active\">\n        <img src=\"../assets/img/logo.png\" alt=\"Kingdom Support Initiatives logo\">\n    </a>\n    <!-- end of brand logo -->\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavDropdown\"\n        aria-controls=\"navbarNavDropdown\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <!-- navigation beginin -->\n    <div class=\"collapse navbar-collapse\" id=\"navbarNavDropdown\">\n        <ul class=\"navbar-nav ml-auto nav\">\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"/home\">Home</a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"/about\">About</a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"/blog\">Blog</a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"/contact\">Contact us</a>\n            </li>\n        </ul>\n    </div>\n</nav>"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/providers/main-service.service.ts":
/*!***************************************************!*\
  !*** ./src/app/providers/main-service.service.ts ***!
  \***************************************************/
/*! exports provided: MainServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainServiceService", function() { return MainServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MainServiceService = /** @class */ (function () {
    function MainServiceService(http, router) {
        this.http = http;
        this.router = router;
        this.baseUrl = "http://sixslatekays.com/dashboardksi/api";
    }
    MainServiceService.prototype.contactUs = function (Message) {
        return this.http.post(this.baseUrl + "/contactUs", { data: Message }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            return response;
        }));
    };
    MainServiceService.prototype.Comment = function (comment) {
        console.log(comment);
        return this.http.post(this.baseUrl + "/storeComments", { data: comment }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            console.log(response);
            return response;
        }));
    };
    MainServiceService.prototype.getSinglePost = function () {
        return this.http.get(this.baseUrl + "/getFeaturedPost").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            return response;
        }));
    };
    MainServiceService.prototype.getAllBlogPosts = function () {
        return this.http.get(this.baseUrl + "/getAllBlogPosts").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            return response;
        }));
    };
    MainServiceService.prototype.getPopularPost = function () {
        return this.http.get(this.baseUrl + "/getPopularPost").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            return response;
        }));
    };
    MainServiceService.prototype.getRecent = function () {
        return this.http.get(this.baseUrl + "/getRecentPosts").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            return response;
        }));
    };
    MainServiceService.prototype.fetchPostComments = function (postid) {
        console.log(postid);
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('postid', postid.toString());
        return this.http.get(this.baseUrl + "/fetchPostComments", { params: params }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            console.log(response);
            return response['data'];
        }));
    };
    MainServiceService.prototype.getInvolved = function (Message) {
        console.log(Message);
        return this.http.post(this.baseUrl + "/getInvolved", { data: Message }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((function (response) {
            console.log(response);
            return response;
        })));
        // return
    };
    MainServiceService.prototype.devotionSubcription = function (email) {
        return this.http.post(this.baseUrl + "/devotionSubscription", { data: email }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((function (response) {
            console.log(response);
            return response;
        })));
    };
    MainServiceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], MainServiceService);
    return MainServiceService;
}());



/***/ }),

/***/ "./src/app/providers/pagination.service.ts":
/*!*************************************************!*\
  !*** ./src/app/providers/pagination.service.ts ***!
  \*************************************************/
/*! exports provided: paginationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "paginationService", function() { return paginationService; });
var paginationService = /** @class */ (function () {
    function paginationService() {
    }
    paginationService.prototype.getPager = function (totalItems, currentPage, pageSize) {
        if (currentPage === void 0) { currentPage = 1; }
        if (pageSize === void 0) { pageSize = 10; }
        // calculate total pages
        var totalPages = Math.ceil(totalItems / pageSize);
        // ensure current page isn't out of range
        if (currentPage < 1) {
            currentPage = 1;
        }
        else if (currentPage > totalPages) {
            currentPage = totalPages;
        }
        var startPage, endPage;
        if (totalPages <= 10) {
            // less than 10 total pages so show all
            startPage = 1;
            endPage = totalPages;
        }
        else {
            // more than 10 total pages so calculate start and end pages
            if (currentPage <= 6) {
                startPage = 1;
                endPage = 10;
            }
            else if (currentPage + 4 >= totalPages) {
                startPage = totalPages - 9;
                endPage = totalPages;
            }
            else {
                startPage = currentPage - 5;
                endPage = currentPage + 4;
            }
        }
        // calculate start and end item indexes
        var startIndex = (currentPage - 1) * pageSize;
        var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
        // create an array of pages to ng-repeat in the pager control
        var pages = Array.from(Array((endPage + 1) - startPage).keys()).map(function (i) { return startPage + i; });
        // return object with all pager properties required by the view
        return {
            totalItems: totalItems,
            currentPage: currentPage,
            pageSize: pageSize,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages
        };
    };
    return paginationService;
}());



/***/ }),

/***/ "./src/app/single-post-detail/single-post-detail.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/single-post-detail/single-post-detail.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\n  <app-navbar></app-navbar>\n  <div class=\"content-container\">\n    <div class=\"content-area\">\n      <div class=\"row\">\n        <div class=\"header-nav\">\n          <!-- <div class=\"col-12 nav-text\"> -->         \n          <nav aria-label=\"breadcrumb\">\n              <ol class=\"breadcrumb\">\n                <li class=\"breadcrumb-item active\" aria-current=\"page\"><h3 class=\"feature-title\">\n                    {{post.title}}\n                   </h3></li>\n              </ol>\n            </nav>\n          <!-- </div> -->\n        </div>\n      </div>\n      <div class=\"row\">\n          <div class=\"col-md-8 text-right subnav\">\n              <div class=\"sub-breadcumb\">\n                  <nav aria-label=\"breadcrumb\">\n                      <ol class=\"breadcrumb\">\n                        <li class=\"breadcrumb-item\"><a routerLink=\"/\">HOME</a></li>\n                        <li class=\"breadcrumb-item\"><a routerLink=\"/blog\">BLOG</a></li>\n                      </ol>\n                    </nav>\n                    </div>\n            </div>\n      </div>\n      <div class=\"main-content\">\n        <main class=\"container-fluid\">\n          <section>\n            <!--Grid row-->\n            <div class=\"row wow fadeIn item-hover\">\n              <!--Grid column-->\n              <div class=\"col-lg-12 post-thumnail col-md-12 item-hover\">\n                <div class=\"post-thumnail-big mask rgba-white-slight img-fluid\"></div>\n              </div>\n              <div class=\"col-lg-12 col-md-12 px-4\">\n                <!--First row-->\n                <div class=\"row\">\n                  <div class=\"col-12\">\n                    <div style=\"height: 14px;\"></div>\n                    <p class=\"post-date wow animated slideInRight\">\n                      Date: {{post.createdDate | date}} &nbsp; &nbsp; Author: {{post.author}}\n                    </p>\n                    <!-- <div style=\"height:5px\"></div> -->\n                    <p class=\"grey-text post-content text-justify animated fadeInRight\" data-wow-delay=\"0.14s\">\n                      {{post.content}}\n                    </p>\n                    <p>\n                    </p>\n                  </div>\n                </div>\n                <!--/First row-->\n                <div style=\"height:30px\"></div>\n              </div>\n              <!--/Grid column-->\n            </div>\n            <!--/Grid row-->\n          </section>\n          <!-- post comments -->\n          <section class=\"container\">\n            <div class=\"row\">\n              <div class=\"col-md-12 col-sm-12\">\n                <!-- <p> -->\n                <h4 class=\"h4-responsive text-muted wow animated slideInLeft\">\n                  <mdb-icon far icon=\"comment-alt\"></mdb-icon> &nbsp;Leave A Comment\n                </h4>\n                <!-- </p> -->\n\n                <form [formGroup]=\"frm\">\n                  <div class=\"row comment-row\">\n                      <div class=\"col-md-12\">\n                          <div class=\"alert alert-success\" *ngIf=\"successMessage\">\n                            {{successMessage}}\n                          </div>\n                          <div class=\"alert alert-danger\" *ngIf=\"errorMessage\" >\n                            {{ errorMessage}}\n                          </div>\n                        </div>\n                    <div class=\"col-md-10 col-sm-12\">\n                      <div class=\"form-group slideInUp animated wow\" data-wow-delay=\"0.8s\">\n                        <!-- <label>Message*</label> -->\n                        <textarea formControlName=\"comment\" class=\"required\" name=\"\" id=\"\" name=\"comment\" cols=\"96\" rows=\"6\" placeholder=\"Comment\"></textarea>\n                       <div class=\"input-errors\" *ngIf=\"(frm.get('comment').invalid && frm.get('comment').touched) ||showInputErrors\">\n                        <p *ngIf=\"(frm.get('comment').hasError('required'))\">\n                            Comment is required\n                        </p>\n                       </div>\n                      </div>\n                    </div>\n                  </div>\n                  <div style=\"height: 15px\"></div>\n                  <div class=\"row comment-row\">\n                    <div class=\"col-md-3 col-sm-12\">\n                      <div class=\"form-group slideInLeft animated wow\" data-wow-delay=\"0.10s\">\n                        <!-- <label>Full Name*</label> -->\n                        <input type=\"text\" placeholder=\"Full Name*\" formControlName=\"name\"  name=\"name\" class=\"form-control required form-control-lg\">\n                      </div>\n                      <div class=\"input-errors\" *ngIf=\"(frm.get('name').invalid && frm.get('name').touched) ||showInputErrors\">\n                        <p *ngIf=\"(frm.get('name').hasError('required'))\">\n                            Name is required\n                        </p>\n                       </div>\n                    </div>\n                    <div class=\"col-md-3 col-sm-12\">\n                      <div class=\"form-group slideInUp animated wow\" data-wow-delay=\"0.16s\">\n                        <!-- <label>Full Name*</label> -->\n                        <input type=\"text\" placeholder=\"Johndoe@domain.com*\" formControlName=\"email\"  name=\"email\" class=\"form-control required form-control-lg\">\n                      </div>\n                      <div class=\"input-errors\" *ngIf=\"(frm.get('email').invalid && frm.get('email').touched) ||showInputErrors\">\n                        <p *ngIf=\"(frm.get('email').hasError('required')) || (frm.get('email').dirty)\">\n                            Email Address is required\n                        </p>\n                       </div>\n                    </div>\n                    <div class=\"col-md-3 col-sm-12\">\n                      <div class=\"form-group slideInRight animated wow\" data-wow-delay=\"0.20s\">\n                        <!-- <label>Full Name*</label> -->\n                        <input type=\"text\" placeholder=\"Domain.com/Organisation\" formControlName=\"organisation\"  name=\"organisation\" class=\"form-control form-control-lg\">\n                      </div>\n                    </div>\n                  </div>\n                  <div style=\"height: 15px\"></div>\n                  <div class=\"col-md-12\">\n                    <div class=\"\">\n                      <button (click)=\"shareComments()\" [disabled]=\"frm.pristine || frm.invalid || isbusy\" class=\"btn btn-primary animated slideInUp btn-lg btn-pink btn-rounded btn-dribbble waves-light\" data-wow-delay=\"0.24s\">\n                          <ng-template [ngIf]=\"!isbusy\">Submit Comment</ng-template>\n                          <ng-template [ngIf]=\"isbusy\">Submitting Comment, Please Wait...</ng-template></button>\n                    </div>\n                  </div>\n                </form>\n                <div style=\"height: 15px\"></div>\n              </div>\n            </div>\n          </section>\n          <!-- post comment -->\n          <!-- comments section -->\n          <section class=\"container\">\n            <div class=\"row\">\n              <h4 class=\"h4-responsive animated slideInLeft row\" data-wow-delay=\"0.24s\">Comments</h4>\n              <div class=\"row\" *ngFor=\"let comment of allComments\">\n                <div class=\"col-md-1 col-sm-1 avatar white commentor-avatar animated slideInLeft wow\" data-wow-delay=\"0.28s\">\n                  <img src=\"https://cdn2.iconfinder.com/data/icons/web-apps-2/512/10-512.png\" class=\"rounded-circle img-fluid img-responsive\" alt=\"commentor avatar\">\n                </div>\n                <div class=\"col-md-10 col-sm-10 comment-name\">\n                  <div class=\"slideInRight animated wow\">\n                    <h6 class=\"h6-responsive text-capitalize\" data-wow-delay=\"0.30s\">\n                     {{comment.name}}\n                    </h6>\n                    <p class=\"grey-text animated slideInUp\" data-wow-delay=\"0.18s\">{{comment.commentDate | date}}</p>\n\n                  </div>\n                </div>\n                <div class=\"row\">\n\n                  <p class=\"animated slideInUp wow\" data-wow-delay=\"0.33s\">{{comment.comment}}</p>\n                </div>\n              </div>             \n            </div>\n            <div class=\"row text-left text-capitalize animated wow slideInUp\" *ngIf=\"commentCounter == 0\">\n                <div class=\"col-md-12 col-sm-12\">\n                    be the first to comment\n                </div>\n            </div>\n          </section>\n          <!-- comments section -->\n          <div style=\"height: 30px\"></div>\n        </main>\n      </div>\n    </div>\n  </div>\n  <!--Footer-->\n  <app-footer></app-footer>\n  <!--/.Footer-->\n</div>"

/***/ }),

/***/ "./src/app/single-post-detail/single-post-detail.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/single-post-detail/single-post-detail.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-nav {\n  /* background: red; */\n  width: 100%;\n  /* height: 40px; */ }\n\n.content-area {\n  padding: 0 !important; }\n\n.row {\n  margin: 0 !important; }\n\n.post-thumnail-big {\n  background-image: url('cason-asher-1530538-unsplash.jpg');\n  background-size: cover;\n  background-position: center;\n  height: 100%;\n  min-height: 490px;\n  width: 100%;\n  box-shadow: 0px 4px 15px 0px rgba(0, 0, 0, 0.1);\n  transition: all 0.3s ease; }\n\n.container-fluid, .post-thumnail {\n  padding: 0; }\n\n.breadcrumb {\n  background-color: #F5F5F5; }\n\n.post-date {\n  color: #17a2b8; }\n\n.commentor-avatar {\n  height: 55px; }\n\n.commentor-avatar img {\n  height: 100%; }\n\n.row {\n  margin: 0 !important; }\n\n.comment-name {\n  color: #17a2b8; }\n\ntextarea {\n  padding: 5px; }\n\n/* ng styles */\n\n.ng-valid[required], .ng-valid.required {\n  border-left: 5px solid #42A948;\n  /* green */ }\n\n::-webkit-input-placeholder, select, input, textarea {\n  font-size: 15px;\n  color: #9e9e9e !important; }\n\n::-moz-placeholder, select, input, textarea {\n  font-size: 15px;\n  color: #9e9e9e !important; }\n\n::-ms-input-placeholder, select, input, textarea {\n  font-size: 15px;\n  color: #9e9e9e !important; }\n\n::placeholder, select, input, textarea {\n  font-size: 15px;\n  color: #9e9e9e !important; }\n\ntextarea {\n  margin-bottom: 13px !important; }\n\n.required {\n  width: 100%;\n  float: none !important;\n  margin: 0; }\n\n@media screen and (max-width: 650px) {\n  textarea {\n    width: 100%; }\n  .commentor-avatar {\n    width: 21%;\n    float: left;\n    display: inline-block; }\n  .comment-name {\n    display: inline-block;\n    width: 70%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2luZ2xlLXBvc3QtZGV0YWlsL0M6XFxVc2Vyc1xcT2xpdmlhXFxEZXNrdG9wXFxLaW5nZG9tLXN1cHBvcnQtaW5paWF0aXZlLXJldmFtcC9zcmNcXGFwcFxcc2luZ2xlLXBvc3QtZGV0YWlsXFxzaW5nbGUtcG9zdC1kZXRhaWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQkFBc0I7RUFDdEIsWUFBVztFQUNYLG1CQUFtQixFQUNwQjs7QUFDRDtFQUNFLHNCQUFvQixFQUNyQjs7QUFDRDtFQUNFLHFCQUFrQixFQUNuQjs7QUFDRDtFQUNFLDBEQUEwRTtFQUMxRSx1QkFBc0I7RUFDdEIsNEJBQTJCO0VBQzNCLGFBQVk7RUFDWixrQkFBaUI7RUFDakIsWUFBVztFQUNYLGdEQUErQztFQUMvQywwQkFBeUIsRUFDMUI7O0FBQ0Q7RUFDSSxXQUFVLEVBQ2I7O0FBQ0Q7RUFDRSwwQkFBeUIsRUFDNUI7O0FBRUM7RUFDRSxlQUFhLEVBQ2Q7O0FBQ0Q7RUFDSSxhQUFZLEVBQ2Y7O0FBRUQ7RUFDRSxhQUFZLEVBQ2Y7O0FBQ0Q7RUFDSSxxQkFBa0IsRUFDckI7O0FBQ0Q7RUFDRSxlQUFhLEVBQ2Q7O0FBSUQ7RUFDRSxhQUFXLEVBQ1o7O0FBRUQsZUFBZTs7QUFDZjtFQUNFLCtCQUE4QjtFQUFFLFdBQVcsRUFDNUM7O0FBRUQ7RUFDRSxnQkFBZTtFQUNmLDBCQUNGLEVBQUM7O0FBSEQ7RUFDRSxnQkFBZTtFQUNmLDBCQUNGLEVBQUM7O0FBSEQ7RUFDRSxnQkFBZTtFQUNmLDBCQUNGLEVBQUM7O0FBSEQ7RUFDRSxnQkFBZTtFQUNmLDBCQUNGLEVBQUM7O0FBQ0Q7RUFDRSwrQkFBNkIsRUFDOUI7O0FBQ0Q7RUFDTSxZQUFXO0VBQ2IsdUJBQXFCO0VBQ3JCLFVBQVMsRUFDWjs7QUFFRDtFQUNFO0lBQ0UsWUFBVyxFQUNaO0VBQ0Q7SUFDRSxXQUFVO0lBQ1YsWUFBVztJQUNYLHNCQUNGLEVBQUM7RUFDRDtJQUVFLHNCQUFxQjtJQUNyQixXQUFVLEVBQ1gsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3NpbmdsZS1wb3N0LWRldGFpbC9zaW5nbGUtcG9zdC1kZXRhaWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyLW5hdiB7XHJcbiAgICAvKiBiYWNrZ3JvdW5kOiByZWQ7ICovXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIC8qIGhlaWdodDogNDBweDsgKi9cclxuICB9XHJcbiAgLmNvbnRlbnQtYXJlYXtcclxuICAgIHBhZGRpbmc6IDAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAucm93e1xyXG4gICAgbWFyZ2luOjAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAucG9zdC10aHVtbmFpbC1iaWd7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1nL2Nhc29uLWFzaGVyLTE1MzA1MzgtdW5zcGxhc2guanBnXCIpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG1pbi1oZWlnaHQ6IDQ5MHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDE1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgfVxyXG4gIC5jb250YWluZXItZmx1aWQsLnBvc3QtdGh1bW5haWx7XHJcbiAgICAgIHBhZGRpbmc6IDA7XHJcbiAgfVxyXG4gIC5icmVhZGNydW1ie1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjVGNTtcclxufVxyXG5cclxuICAucG9zdC1kYXRle1xyXG4gICAgY29sb3I6IzE3YTJiODtcclxuICB9XHJcbiAgLmNvbW1lbnRvci1hdmF0YXJ7XHJcbiAgICAgIGhlaWdodDogNTVweDtcclxuICB9XHJcblxyXG4gIC5jb21tZW50b3ItYXZhdGFyIGltZ3tcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG4ucm93e1xyXG4gICAgbWFyZ2luOjAhaW1wb3J0YW50O1xyXG59XHJcbi5jb21tZW50LW5hbWV7XHJcbiAgY29sb3I6IzE3YTJiODtcclxufVxyXG4vLyAuZm9ybS1jb250cm9sOjpwbGFjZWhvbGRlciwgLmZvcm0tY29udHJvbHtcclxuLy8gIGZvbnQtc2l6ZTogMTNweDtcclxuLy8gfVxyXG50ZXh0YXJlYXtcclxuICBwYWRkaW5nOjVweDtcclxufVxyXG5cclxuLyogbmcgc3R5bGVzICovXHJcbi5uZy12YWxpZFtyZXF1aXJlZF0sIC5uZy12YWxpZC5yZXF1aXJlZCAge1xyXG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgIzQyQTk0ODsgLyogZ3JlZW4gKi9cclxufVxyXG5cclxuOjpwbGFjZWhvbGRlcixzZWxlY3QsaW5wdXQsIHRleHRhcmVhe1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBjb2xvcjojOWU5ZTllICFpbXBvcnRhbnRcclxufVxyXG50ZXh0YXJlYXtcclxuICBtYXJnaW4tYm90dG9tOiAxM3B4IWltcG9ydGFudDtcclxufVxyXG4ucmVxdWlyZWR7XHJcbiAgICAgIHdpZHRoOiAxMDAlOyBcclxuICAgIGZsb2F0OiBub25lIWltcG9ydGFudDtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo2NTBweCl7XHJcbiAgdGV4dGFyZWF7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgLmNvbW1lbnRvci1hdmF0YXJ7XHJcbiAgICB3aWR0aDogMjElO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2tcclxuICB9XHJcbiAgLmNvbW1lbnQtbmFtZXtcclxuICAgIC8vIGZsb2F0OiBsZWZ0O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDcwJTtcclxuICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/single-post-detail/single-post-detail.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/single-post-detail/single-post-detail.component.ts ***!
  \********************************************************************/
/*! exports provided: SinglePostDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SinglePostDetailComponent", function() { return SinglePostDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _providers_main_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../providers/main-service.service */ "./src/app/providers/main-service.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SinglePostDetailComponent = /** @class */ (function () {
    function SinglePostDetailComponent(service, form, routes) {
        var _this = this;
        this.service = service;
        this.form = form;
        this.routes = routes;
        this.submitted = false;
        this.hasFailed = false;
        this.showInputErrors = false;
        this.isbusy = false;
        this.allComments = [];
        this.postcomment = {
            postid: null
        };
        this.postid = this.routes.snapshot.paramMap.get('postid');
        this.service.getAllBlogPosts().subscribe(function (response) {
            _this.allPosts = response['data'];
            console.log(_this.allPosts);
            for (var _i = 0, _a = _this.allPosts; _i < _a.length; _i++) {
                var item = _a[_i];
                if (item.postid == _this.postid) {
                    _this.post = item;
                }
            }
            console.log(_this.post);
        });
        this.frm = form.group({
            name: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            comment: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email])),
            organisation: [""]
        });
        // fetching comments
        this.getAllPostComments();
    }
    SinglePostDetailComponent.prototype.ngOnInit = function () {
    };
    SinglePostDetailComponent.prototype.shareComments = function () {
        var _this = this;
        // validate form
        if (this.frm.invalid) {
            this.showInputErrors = true;
            return;
        }
        // reset status
        this.isbusy = true;
        this.hasFailed = false;
        var name = this.frm.get("name").value;
        var usercomment = this.frm.get("comment").value;
        // const email = this.frm.get("email").value;
        var email = this.frm.get("email").value;
        var organisation = this.frm.get("organisation").value;
        // const message = this.frm.get("message").value;
        var comments = {
            name: name,
            email: email,
            comment: usercomment,
            organisation: organisation,
            postid: this.postid,
            commentid: Date.now()
        };
        console.log(comments);
        this.service.Comment(comments).subscribe(function (response) {
            console.log('enter');
            if (response['data']) {
                // this.frm.reset(this.frm.value);
                _this.frm.reset();
                _this.isbusy = false;
                _this.successMessage = 'Message was send succssfully and we will contact you ASAP';
                setTimeout(function () {
                    _this.successMessage = '';
                }, 5000);
            }
            else {
                _this.errorMessage = "Ooops! There was a problem sending your message. Pls ttry again!!";
                _this.isbusy = false;
                setTimeout(function () {
                    _this.errorMessage = '';
                }, 5000);
            }
            console.log(response);
        });
    };
    SinglePostDetailComponent.prototype.getAllPostComments = function () {
        var _this = this;
        this.postcomment.postid = this.postid;
        this.service.fetchPostComments(this.postid).subscribe(function (response) {
            _this.allComments = response;
            _this.commentCounter = _this.allComments.length;
            console.log('comment', _this.allComments);
        });
    };
    SinglePostDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-single-post-detail',
            template: __webpack_require__(/*! ./single-post-detail.component.html */ "./src/app/single-post-detail/single-post-detail.component.html"),
            styles: [__webpack_require__(/*! ./single-post-detail.component.scss */ "./src/app/single-post-detail/single-post-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [_providers_main_service_service__WEBPACK_IMPORTED_MODULE_1__["MainServiceService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], SinglePostDetailComponent);
    return SinglePostDetailComponent;
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

module.exports = __webpack_require__(/*! C:\Users\Olivia\Desktop\Kingdom-support-iniiative-revamp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map