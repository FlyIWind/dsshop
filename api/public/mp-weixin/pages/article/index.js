(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/article/index"],{"1c78":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=o(e("da3f"));function o(t){return t&&t.__esModule?t:{default:t}}var i=function(){e.e("components/uni-load-more/uni-load-more").then(function(){return resolve(e("7e40"))}.bind(null,e)).catch(e.oe)},u={components:{uniLoadMore:i},data:function(){return{data:[],id:0,page:1,loadingType:"more"}},onLoad:function(n){n.id&&(this.id=n.id,t.setNavigationBarTitle({title:n.name}),this.loadData())},methods:{loadData:function(n){var e=this;a.default.getList(e.id,{limit:8,page:this.page},(function(a){e.data=e.data.concat(a.data),a.last_page>e.page?(e.page++,e.loadingType="more"):e.loadingType="noMore","pull"===n&&setTimeout((function(){t.stopPullDownRefresh()}),1e3)}))},goNavigator:function(n){t.navigateTo({url:"./details?list=0&id="+n.id})},onPullDownRefresh:function(){this.data=[],this.page=1,this.loadData("pull")},onReachBottom:function(){"noMore"!==this.loadingType&&this.loadData()}}};n.default=u}).call(this,e("543d")["default"])},"2bae":function(t,n,e){"use strict";e.d(n,"b",(function(){return o})),e.d(n,"c",(function(){return i})),e.d(n,"a",(function(){return a}));var a={uniLoadMore:function(){return e.e("components/uni-load-more/uni-load-more").then(e.bind(null,"7e40"))}},o=function(){var t=this,n=t.$createElement;t._self._c},i=[]},3458:function(t,n,e){"use strict";e.r(n);var a=e("2bae"),o=e("7319");for(var i in o)"default"!==i&&function(t){e.d(n,t,(function(){return o[t]}))}(i);e("ff04");var u,r=e("f0c5"),l=Object(r["a"])(o["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],u);n["default"]=l.exports},7319:function(t,n,e){"use strict";e.r(n);var a=e("1c78"),o=e.n(a);for(var i in a)"default"!==i&&function(t){e.d(n,t,(function(){return a[t]}))}(i);n["default"]=o.a},bb98:function(t,n,e){},e39d:function(t,n,e){"use strict";(function(t){e("ebeb");a(e("66fd"));var n=a(e("3458"));function a(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])},ff04:function(t,n,e){"use strict";var a=e("bb98"),o=e.n(a);o.a}},[["e39d","common/runtime","common/vendor"]]]);