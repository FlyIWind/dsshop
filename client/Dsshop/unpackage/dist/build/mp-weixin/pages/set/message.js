(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/set/message"],{"0252":function(t,e,n){},"4d2f":function(t,e,n){"use strict";var r=n("0252"),i=n.n(r);i.a},6630:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=u(n("5858")),i=n("2f62");function u(t){return t&&t.__esModule?t:{default:t}}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var f={data:function(){return{user:{}}},onShow:function(){this.loginCheck(),this.getUser()},methods:c(c({},(0,i.mapMutations)(["loginCheck"])),{},{getUser:function(){var t=this;r.default.detail((function(e){t.user=e}))},setNotification:function(e){var n=e.currentTarget.dataset.type;if("email"===n){if(!this.user.email)return this.$api.msg("请先绑定邮箱"),setTimeout((function(){t.navigateTo({url:"/pages/userinfo/email"})}),800),!1}else if("wechat"===n&&!this.user.wechat)return this.$api.msg("请先关注微信公众号"),setTimeout((function(){t.navigateTo({url:"/pages/public/subscribe"})}),800),!1;this.user.notification[n]=e.detail.value,r.default.notification(this.user,(function(t){}))}})};e.default=f}).call(this,n("543d")["default"])},"7cf8":function(t,e,n){"use strict";n.r(e);var r=n("a0b5"),i=n("a3b7");for(var u in i)"default"!==u&&function(t){n.d(e,t,(function(){return i[t]}))}(u);n("4d2f");var a,c=n("f0c5"),o=Object(c["a"])(i["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],a);e["default"]=o.exports},a0b5:function(t,e,n){"use strict";var r;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return u})),n.d(e,"a",(function(){return r}));var i=function(){var t=this,e=t.$createElement;t._self._c},u=[]},a3b7:function(t,e,n){"use strict";n.r(e);var r=n("6630"),i=n.n(r);for(var u in r)"default"!==u&&function(t){n.d(e,t,(function(){return r[t]}))}(u);e["default"]=i.a},cd1b:function(t,e,n){"use strict";(function(t){n("3ea3");r(n("66fd"));var e=r(n("7cf8"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])}},[["cd1b","common/runtime","common/vendor"]]]);