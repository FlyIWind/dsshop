(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/public/login"],{"69e9":function(e,t,n){"use strict";n.r(t);var r=n("e861"),a=n("a13f");for(var i in a)"default"!==i&&function(e){n.d(t,e,(function(){return a[e]}))}(i);n("fe31");var o,u=n("f0c5"),c=Object(u["a"])(a["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],o);t["default"]=c.exports},"75e7":function(e,t,n){"use strict";(function(e){n("3ea3");r(n("66fd"));var t=r(n("69e9"));function r(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])},a13f:function(e,t,n){"use strict";n.r(t);var r=n("c4e8"),a=n.n(r);for(var i in r)"default"!==i&&function(e){n.d(t,e,(function(){return r[e]}))}(i);t["default"]=a.a},c4e8:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=u(n("a34a")),a=u(n("914d")),i=n("94ea"),o=n("2f62");function u(e){return e&&e.__esModule?e:{default:e}}function c(e,t,n,r,a,i,o){try{var u=e[i](o),c=u.value}catch(s){return void n(s)}u.done?t(c):Promise.resolve(c).then(r,a)}function s(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var i=e.apply(t,n);function o(e){c(i,r,a,o,u,"next",e)}function u(e){c(i,r,a,o,u,"throw",e)}o(void 0)}))}}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){d(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var f={data:function(){return{tabname:["微信授权","短信验证"],codename:"获取验证码",unit:"",TabCur:0,seconds:"",ruleForm:{cellphone:"",password:""},nodes:[{name:"span",children:[{type:"text",text:"在您注册成为dsshop用户的过程中，您需要完成我们的注册流程并通过点击同意的形式在线签署以下协议，"}]},{name:"span",attrs:{style:"text-decoration: underline;"},children:[{type:"text",text:"请您务必仔细阅读、充分理解协议中的条款内容后再点击同意（尤其是以粗体并下划线标识的条款，因为这些条款可能会明确您应履行的义务或对您的权利有所限制）："}]},{name:"p",children:[{type:"text",text:"《dsshop用户注册协议》"}]},{name:"p",children:[{type:"text",text:"《dsshop隐私政策》"}]},{name:"span",attrs:{style:"text-decoration: underline;"},children:[{type:"text",text:"【请您注意】如果您不同意上述协议或其中任何条款约定，请您停止注册。您停止注册后将仅可以浏览我们的商品信息但无法享受我们的产品或服务。如您按照注册流程提示填写信息、阅读并点击同意上述协议且完成全部注册流程后，即表示您已充分阅读、理解并接受协议的全部内容；并表明您也同意dsshop可以依据以上的隐私政策内容来处理您的个人信息。"}]},{name:"span",children:[{type:"text",text:"如您对以上协议内容有任何疑问，您可随时与dsshop客服联系。"}]}],disabled:!1,modalName:null,logining:!0}},onLoad:function(e){},onShow:function(){(0,i.getLogin)()},methods:p(p({},(0,o.mapMutations)(["login"])),{},{inputChange:function(e){var t=e.currentTarget.dataset.key;this[t]=e.detail.value},toLogin:function(t){var n=this;return s(r.default.mark((function t(){var i,o,u;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(i=n.ruleForm,o=n,i.cellphone){t.next=7;break}return n.$api.msg("请填写手机号码"),t.abrupt("return",!1);case 7:if(11==i.cellphone.length){t.next=10;break}return n.$api.msg("手机号长度有误"),t.abrupt("return",!1);case 10:if(u=/^(((13[0-9]{1})|(15[0-9]{1})|(16[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/,u.test(i.cellphone)){t.next=14;break}return n.$api.msg("手机号有误"),t.abrupt("return",!1);case 14:if(i.password){t.next=17;break}return n.$api.msg("密码必须"),t.abrupt("return",!1);case 17:n.logining=!0,a.default.login(i,(function(t){e.setStorageSync("dsshopApplytoken",t.api_token),o.login(t),o.logining=!1,o.$api.msg("登录成功"),e.navigateBack()}));case 19:case"end":return t.stop()}}),t)})))()},tabSelect:function(e){this.TabCur=e.currentTarget.dataset.id,0==this.TabCur||this.ruleForm.cellphone&&this.ruleForm.code?this.logining=!1:this.logining=!0,this.scrollLeft=60*(e.currentTarget.dataset.id-1)},toRegist:function(){e.redirectTo({url:"/pages/public/register"})},toFind:function(){e.redirectTo({url:"/pages/public/findPassword"})},cellphoneInput:function(e){var t=this.ruleForm;t.cellphone=e.detail.value,this.ruleForm.cellphone&&this.ruleForm.password?this.logining=!1:this.logining=!0},goNavigator:function(t){e.navigateTo({url:"/pages/article/details?list=0&id=".concat(t)})},passwordInput:function(e){var t=this.ruleForm;t.password=e.detail.value,this.ruleForm.cellphone&&this.ruleForm.password?this.logining=!1:this.logining=!0},decryptPhoneNumber:function(t){this.modalName="";var n=this;t.detail.iv?a.default.authorization({iv:t.detail.iv,encryptedData:t.detail.encryptedData,session_key:e.getStorageSync("applyDsshopSession_key"),platform:(0,i.getPlatform)()},(function(t){e.setStorageSync("dsshopApplytoken",t.api_token),n.login(t),n.$api.msg("登录成功"),e.navigateBack()})):n.$api.msg("您选择了拒绝授权，无法完成登录")}})};t.default=f}).call(this,n("543d")["default"])},e588:function(e,t,n){},e861:function(e,t,n){"use strict";var r;n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return r}));var a=function(){var e=this,t=e.$createElement;e._self._c;e._isMounted||(e.e0=function(t){e.modalName="agreement"},e.e1=function(t){e.modalName=""})},i=[]},fe31:function(e,t,n){"use strict";var r=n("e588"),a=n.n(r);a.a}},[["75e7","common/runtime","common/vendor"]]]);