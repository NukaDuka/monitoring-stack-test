(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{"8Zpg":function(e,n,t){"use strict";t.r(n),function(e){t.d(n,"NewOrgPage",(function(){return v}));var r=t("q1tI"),a=t.n(r),o=t("t8hP"),i=t("ZGyg"),u=t("kDLi"),c=t("ZFWI"),s=t("0cfB"),l=t("/MKj"),p=t("lzJ5");function m(e,n,t,r,a,o,i){try{var u=e[o](i),c=u.value}catch(e){return void t(e)}u.done?n(c):Promise.resolve(c).then(r,a)}function d(e){return function(){var n=this,t=arguments;return new Promise((function(r,a){var o=e.apply(n,t);function i(e){m(o,r,a,i,u,"next",e)}function u(e){m(o,r,a,i,u,"throw",e)}i(void 0)}))}}var g=function(){var e=d(regeneratorRuntime.mark((function e(n){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(o.getBackendSrv)().post("/api/orgs/",n);case 2:return t=e.sent,e.next=5,Object(o.getBackendSrv)().post("/api/user/using/"+t.orgId);case 5:window.location.href=Object(c.c)().appSubUrl+"/org";case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),f=function(){var e=d(regeneratorRuntime.mark((function e(n){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(o.getBackendSrv)().get("api/orgs/name/".concat(encodeURI(n)));case 3:e.next=11;break;case 5:if(e.prev=5,e.t0=e.catch(0),404!==e.t0.status){e.next=10;break}return e.t0.isHandled=!0,e.abrupt("return",!0);case 10:return e.abrupt("return","Something went wrong");case 11:return e.abrupt("return","Organization already exists");case 12:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(n){return e.apply(this,arguments)}}(),v=function(e){var n=e.navModel;return a.a.createElement(i.a,{navModel:n},a.a.createElement(i.a.Contents,null,a.a.createElement("h3",{className:"page-sub-heading"},"New Organization"),a.a.createElement("p",{className:"playlist-description"},"Each organization contains their own dashboards, data sources and configuration, and cannot be shared between orgs. While users may belong to more than one, multiple organization are most frequently used in multi-tenant deployments."," "),a.a.createElement(u.Form,{onSubmit:g},(function(e){var n,t=e.register,r=e.errors;return a.a.createElement(a.a.Fragment,null,a.a.createElement(u.Field,{label:"Organization name",invalid:!!r.name,error:r.name&&r.name.message},a.a.createElement(u.Input,{placeholder:"Org. name",name:"name",ref:t({required:"Organization name is required",validate:(n=d(regeneratorRuntime.mark((function e(n){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f(n);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),function(e){return n.apply(this,arguments)})})})),a.a.createElement(u.Button,{type:"submit"},"Create"))}))))};n.default=Object(s.hot)(e)(Object(l.connect)((function(e){return{navModel:Object(p.a)(e.navIndex,"global-orgs")}}))(v))}.call(this,t("3UD+")(e))}}]);
//# sourceMappingURL=NewOrgPage.4dfc71bc8d372c0fbd33.js.map