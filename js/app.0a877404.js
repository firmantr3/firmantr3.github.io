(function(e){function t(t){for(var r,a,i=t[0],u=t[1],s=t[2],l=0,f=[];l<i.length;l++)a=i[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);d&&d(t);while(f.length)f.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,a=1;a<n.length;a++){var i=n[a];0!==o[i]&&(r=!1)}r&&(c.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},a={app:0},o={app:0},c=[];function i(e){return u.p+"js/"+({"lang-en":"lang-en","lang-id":"lang-id"}[e]||e)+"."+{"chunk-2d0b23b5":"50bd11c7","chunk-388fd0a8":"e3b4a016","chunk-a45e12f0":"062f4c6c","lang-en":"d75cff5f","lang-id":"3809f7d8"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-388fd0a8":1,"chunk-a45e12f0":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({"lang-en":"lang-en","lang-id":"lang-id"}[e]||e)+"."+{"chunk-2d0b23b5":"31d6cfe0","chunk-388fd0a8":"01536cd3","chunk-a45e12f0":"d33caa36","lang-en":"31d6cfe0","lang-id":"31d6cfe0"}[e]+".css",o=u.p+r,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var s=c[i],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===o))return t()}var f=document.getElementsByTagName("style");for(i=0;i<f.length;i++){s=f[i],l=s.getAttribute("data-href");if(l===r||l===o)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete a[e],d.parentNode.removeChild(d),n(c)},d.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=c);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=i(e);var f=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,n[1](f)}o[e]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var f=0;f<s.length;f++)t(s[f]);var d=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"12c8":function(e,t,n){},4360:function(e,t,n){"use strict";n("a4d3"),n("4de4"),n("4160"),n("d81d"),n("13d5"),n("e439"),n("dbb4"),n("b64b"),n("d3b7"),n("ac1f"),n("5319"),n("159b"),n("ddb0");var r=n("ade3"),a=n("3835"),o=n("2b0e"),c=n("2f62");function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){Object(r["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}o["default"].use(c["a"]);var s=n("6c17"),l=s.keys().map((function(e){return[e.replace(/(^.\/)|(\.js$)/g,""),s(e)]})).reduce((function(e,t){var n=Object(a["a"])(t,2),o=n[0],c=n[1];return void 0===c.namespaced&&(c.namespaced=!0),u({},e,Object(r["a"])({},o,c))}),{});t["a"]=new c["a"].Store({modules:l})},4733:function(e,t,n){"use strict";var r=n("96d1"),a=n.n(r);a.a},"4f68":function(e,t,n){"use strict";var r=n("6291"),a=n.n(r);a.a},"56d7":function(e,t,n){"use strict";n.r(t);n("a4d3"),n("4de4"),n("4160"),n("e439"),n("dbb4"),n("b64b"),n("159b");var r=n("ade3"),a=(n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("2b0e")),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("loading",{ref:"loading"}),n("transition",{attrs:{name:"page",mode:"out-in"}},[e.layout?n(e.layout,{tag:"component"}):e._e()],1)],1)},c=[],i=(n("d81d"),n("13d5"),n("d3b7"),n("ac1f"),n("5319"),n("ddb0"),n("3835")),u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"progress",style:{width:e.percent+"%",height:e.height,opacity:e.show?1:0,"background-color":e.canSuccess?e.color:e.failedColor}})},s=[],l={data:function(){return{percent:0,show:!1,canSuccess:!0,duration:3e3,height:"2px",color:"#77b6ff",failedColor:"red"}},methods:{start:function(){var e=this;return this.show=!0,this.canSuccess=!0,this._timer&&(clearInterval(this._timer),this.percent=0),this._cut=1e4/Math.floor(this.duration),this._timer=setInterval((function(){e.increase(e._cut*Math.random()),e.percent>95&&e.finish()}),100),this},set:function(e){return this.show=!0,this.canSuccess=!0,this.percent=Math.floor(e),this},get:function(){return Math.floor(this.percent)},increase:function(e){return this.percent=this.percent+Math.floor(e),this},decrease:function(e){return this.percent=this.percent-Math.floor(e),this},finish:function(){return this.percent=100,this.hide(),this},pause:function(){return clearInterval(this._timer),this},hide:function(){var e=this;return clearInterval(this._timer),this._timer=null,setTimeout((function(){e.show=!1,e.$nextTick((function(){setTimeout((function(){e.percent=0}),200)}))}),500),this},fail:function(){return this.canSuccess=!1,this}}},f=l,d=(n("4f68"),n("2877")),p=Object(d["a"])(f,u,s,!1,null,"01e4ecc0",null),h=p.exports,b=n("81be"),g=b.keys().map((function(e){return[e.replace(/(^.\/)|(\.vue$)/g,""),b(e)]})).reduce((function(e,t){var n=Object(i["a"])(t,2),r=n[0],a=n[1];return e[r]=a.default||a,e}),{}),v={el:"#app",components:{Loading:h},data:function(){return{layout:null,defaultLayout:"default"}},metaInfo:function(){return{title:"Firman Taruna Nugraha",titleTemplate:"%s · ".concat("Firman Taruna Nugraha")}},mounted:function(){this.$loading=this.$refs.loading},methods:{setLayout:function(e){e&&g[e]||(e=this.defaultLayout),this.layout=g[e]}}},m=v,O=(n("5c0b"),Object(d["a"])(m,o,c,!1,null,null,null)),y=O.exports,j=n("4360"),w=(n("99af"),n("fb6a"),n("3ca3"),n("96cf"),n("2909")),k=n("1da1"),_=n("58ca"),P=function(){return n.e("chunk-a45e12f0").then(n.bind(null,"0462")).then((function(e){return e.default||e}))},E=function(){return n.e("chunk-2d0b23b5").then(n.bind(null,"22dc")).then((function(e){return e.default||e}))},x=function(){return n.e("chunk-388fd0a8").then(n.bind(null,"3909")).then((function(e){return e.default||e}))},D=[{path:"/",name:"welcome",component:P},{path:"/portfolio",name:"portfolio",component:x},{path:"*",component:E}],S=n("8c4f"),L=n("31bd");function T(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function C(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?T(Object(n),!0).forEach((function(t){Object(r["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):T(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}a["default"].use(_["a"]),a["default"].use(S["a"]);var N=["locale"],M=K(n("9091")),$=I();Object(L["sync"])(j["a"],$);var A=$;function I(){var e=new S["a"]({scrollBehavior:W,routes:D});return e.beforeEach(R),e.afterEach(F),e}function R(e,t,n){return U.apply(this,arguments)}function U(){return U=Object(k["a"])(regeneratorRuntime.mark((function e(t,n,r){var a,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,H($.getMatchedComponents(C({},t)));case 2:if(a=e.sent,0!==a.length){e.next=5;break}return e.abrupt("return",r());case 5:!1!==a[a.length-1].loading&&$.app.$nextTick((function(){return $.app.$loading.start()})),o=J(a),q(o,t,n,(function(){0===arguments.length&&$.app.setLayout(a[0].layout||""),r.apply(void 0,arguments)}));case 8:case"end":return e.stop()}}),e)}))),U.apply(this,arguments)}function F(){return B.apply(this,arguments)}function B(){return B=Object(k["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,$.app.$nextTick();case 2:$.app.$loading.finish();case 3:case"end":return e.stop()}}),e)}))),B.apply(this,arguments)}function q(e,t,n,r){var a=e.reverse(),o=function e(){if(arguments.length>0||0===a.length)return arguments.length>0&&$.app.$loading.finish(),r.apply(void 0,arguments);var o=a.pop();if("function"===typeof o)o(t,n,e);else{if(!M[o])throw Error("Undefined middleware [".concat(o,"]"));M[o](t,n,e)}};o()}function H(e){return Promise.all(e.map((function(e){return"function"===typeof e?e():e})))}function J(e){var t=[].concat(N);return e.filter((function(e){return e.middleware})).forEach((function(e){Array.isArray(e.middleware)?t.push.apply(t,Object(w["a"])(e.middleware)):t.push(e.middleware)})),t}function W(e,t,n){if(n)return n;if(e.hash)return{selector:e.hash};var r=$.getMatchedComponents(C({},e)).slice(-1),a=Object(i["a"])(r,1),o=a[0];return o&&!1===o.scrollToTop?{}:{x:0,y:0}}function K(e){return e.keys().map((function(t){return[t.replace(/(^.\/)|(\.js$)/g,""),e(t)]})).reduce((function(e,t){var n=Object(i["a"])(t,2),a=n[0],o=n[1];return C({},e,Object(r["a"])({},a,o.default))}),{})}var z,G=n("d3a4"),Q=n("9483"),V=function(e){e.postMessage({action:"skipWaiting"})};Object(Q["a"])("".concat("/","service-worker.js"),{registrationOptions:{scope:"/"},ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},cached:function(){console.log("Content has been cached for offline use.")},updated:function(e){console.log("New content is available; please refresh."),V(e.waiting)},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),navigator.serviceWorker.addEventListener("controllerchange",(function(){z||(window.location.reload(),z=!0)}));var X=n("bc3a"),Y=n.n(X),Z=n("3d20"),ee=n.n(Z);Y.a.defaults.params={},Y.a.interceptors.request.use((function(e){e.baseURL="";var t=j["a"].getters["auth/token"];t&&(e.params.token=t);var n=j["a"].getters["lang/locale"];return n&&(e.headers.common["Accept-Language"]=n),e})),Y.a.interceptors.response.use((function(e){return e}),(function(e){var t=e&&"undefined"!==typeof e.response?e.response:{status:null},n=t.status;return n>=500&&ee()({type:"error",title:G["a"].t("error_alert_title"),text:G["a"].t("error_alert_text"),reverseButtons:!0,confirmButtonText:G["a"].t("ok"),cancelButtonText:G["a"].t("cancel")}),Promise.reject(e)}));var te=n("5f5b");a["default"].use(te["a"]);n("b0c0");var ne=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{name:"page",mode:"out-in"}},[e._t("default",[n("router-view")])],2)},re=[],ae={name:"Child"},oe=ae,ce=Object(d["a"])(oe,ne,re,!1,null,null,null),ie=ce.exports,ue=n("e070");function se(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function le(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?se(Object(n),!0).forEach((function(t){Object(r["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):se(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}[ie,ue["HasError"],ue["AlertError"],ue["AlertSuccess"]].forEach((function(e){a["default"].component(e.name,e)})),a["default"].config.productionTip=!1,new a["default"](le({i18n:G["a"],store:j["a"],router:A},y))},5892:function(e,t,n){var r={"./en":["e312","lang-en"],"./en.json":["e312","lang-en"],"./id":["2d3f","lang-id"],"./id.json":["2d3f","lang-id"]};function a(e){if(!n.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],a=t[0];return n.e(t[1]).then((function(){return n.t(a,3)}))}a.keys=function(){return Object.keys(r)},a.id="5892",e.exports=a},"5c0b":function(e,t,n){"use strict";var r=n("9c0c"),a=n.n(r);a.a},6291:function(e,t,n){},"6a5f":function(e,t,n){"use strict";var r=n("12c8"),a=n.n(r);a.a},"6c17":function(e,t,n){var r={"./lang.js":"bbe9"};function a(e){var t=o(e);return n(t)}function o(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=o,e.exports=a,a.id="6c17"},"7b3d":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"main-layout"},[n("navbar"),n("b-container",{staticClass:"mt-4"},[n("child")],1)],1)},a=[],o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("b-navbar",{attrs:{fixed:"top",toggleable:"lg",type:"light",variant:"light"}},[n("b-navbar-brand",{attrs:{id:"navbrand",to:{name:"welcome"}}},[e._v(e._s(e.appName))]),n("b-navbar-toggle",{attrs:{target:"navbarToggler"}}),n("b-collapse",{attrs:{"is-nav":"",id:"navbarToggler"}},[n("b-navbar-nav",{staticClass:"ml-auto"},[n("locale-dropdown"),n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{to:{name:"portfolio"},"active-class":"active"}},[e._v(" "+e._s(e.$t("portfolio"))+" ")])],1)],1)],1)],1)],1)},c=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-nav-item-dropdown",{attrs:{id:"localeDropDown",text:e.locales[e.locale]}},e._l(e.locales,(function(t,r){return n("b-dropdown-item",{key:r,on:{click:function(t){return t.preventDefault(),e.setLocale(r)}}},[e._v(" "+e._s(t)+" ")])})),1)},u=[],s=(n("a4d3"),n("4de4"),n("4160"),n("e439"),n("dbb4"),n("b64b"),n("159b"),n("ade3")),l=n("2f62"),f=n("d3a4"),d=n("bc3a"),p=n.n(d);function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){Object(s["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var g={computed:b({},Object(l["b"])({locale:"lang/locale",locales:"lang/locales",localeIsSet:"lang/localeIsSet"})),methods:{setLocale:function(e){this.$i18n.locale!==e&&(Object(f["b"])(e),this.$store.dispatch("lang/setLocale",{locale:e}))}},created:function(){var e=this;if(!this.localeIsSet)try{p.a.get("https://extreme-ip-lookup.com/json/").then((function(t){200===t.status&&("ID"===t.data.countryCode?e.setLocale("id"):e.setLocale("en"))}))}catch(t){}}},v=g,m=n("2877"),O=Object(m["a"])(v,i,u,!1,null,null,null),y=O.exports,j={components:{LocaleDropdown:y},data:function(){return{appName:"Firman Taruna Nugraha"}}},w=j,k=(n("4733"),Object(m["a"])(w,o,c,!1,null,"458da20e",null)),_=k.exports,P={name:"MainLayout",components:{Navbar:_}},E=P,x=(n("6a5f"),Object(m["a"])(E,r,a,!1,null,"d28e944a",null));t["default"]=x.exports},"81be":function(e,t,n){var r={"./default.vue":"7b3d"};function a(e){var t=o(e);return n(t)}function o(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=o,e.exports=a,a.id="81be"},9091:function(e,t,n){var r={"./locale.js":"e00f"};function a(e){var t=o(e);return n(t)}function o(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=o,e.exports=a,a.id="9091"},"96d1":function(e,t,n){},"9c0c":function(e,t,n){},bbe9:function(e,t,n){"use strict";n.r(t);var r=n("ade3"),a=n("a78e"),o=n.n(a),c="SET_LOCALE",i={id:"ID",en:"EN"};n.d(t,"state",(function(){return u})),n.d(t,"getters",(function(){return s})),n.d(t,"mutations",(function(){return l})),n.d(t,"actions",(function(){return f}));var u={locale:o.a.get("locale")||"id",locales:i,localeIsSet:"undefined"!==typeof o.a.get("locale")},s={locale:function(e){return e.locale},locales:function(e){return e.locales},localeIsSet:function(e){return e.localeIsSet}},l=Object(r["a"])({},c,(function(e,t){var n=t.locale;e.locale=n,e.localeIsSet=!0})),f={setLocale:function(e,t){var n=e.commit,r=t.locale;n(c,{locale:r}),o.a.set("locale",r,{expires:365})}}},d3a4:function(e,t,n){"use strict";n.d(t,"b",(function(){return u}));n("b64b"),n("d3b7"),n("96cf");var r=n("1da1"),a=n("2b0e"),o=n("4360"),c=n("a925");a["default"].use(c["a"]);var i=new c["a"]({locale:"id",messages:{}});function u(e){return s.apply(this,arguments)}function s(){return s=Object(r["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(0!==Object.keys(i.getLocaleMessage(t)).length){e.next=5;break}return e.next=3,n("5892")("./".concat(t));case 3:r=e.sent,i.setLocaleMessage(t,r);case 5:i.locale!==t&&(i.locale=t);case 6:case"end":return e.stop()}}),e)}))),s.apply(this,arguments)}Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,u(o["a"].getters["lang/locale"]);case 2:case"end":return e.stop()}}),e)})))(),t["a"]=i},e00f:function(e,t,n){"use strict";n.r(t);n("96cf");var r=n("1da1"),a=n("4360"),o=n("d3a4");t["default"]=function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t,n,r){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(o["b"])(a["a"].getters["lang/locale"]);case 2:r();case 3:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}()}});
//# sourceMappingURL=app.0a877404.js.map