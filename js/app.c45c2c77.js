(function(e){function t(t){for(var r,o,i=t[0],u=t[1],s=t[2],l=0,f=[];l<i.length;l++)o=i[l],a[o]&&f.push(a[o][0]),a[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);p&&p(t);while(f.length)f.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,o=1;o<n.length;o++){var i=n[o];0!==a[i]&&(r=!1)}r&&(c.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={app:0},a={app:0},c=[];function i(e){return u.p+"js/"+({"lang-en":"lang-en","lang-id":"lang-id"}[e]||e)+"."+{"chunk-0c739f6e":"02e72ff2","chunk-2d0b23b5":"8cd5eb48","chunk-78bb1ca7":"c1e0ced3","lang-en":"24f38419","lang-id":"42cdb55b"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-0c739f6e":1,"chunk-78bb1ca7":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise(function(t,n){for(var r="css/"+({"lang-en":"lang-en","lang-id":"lang-id"}[e]||e)+"."+{"chunk-0c739f6e":"12d22510","chunk-2d0b23b5":"31d6cfe0","chunk-78bb1ca7":"eecac4c4","lang-en":"31d6cfe0","lang-id":"31d6cfe0"}[e]+".css",a=u.p+r,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var s=c[i],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===a))return t()}var f=document.getElementsByTagName("style");for(i=0;i<f.length;i++){s=f[i],l=s.getAttribute("data-href");if(l===r||l===a)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||a,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete o[e],p.parentNode.removeChild(p),n(c)},p.href=a;var d=document.getElementsByTagName("head")[0];d.appendChild(p)}).then(function(){o[e]=0}));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise(function(t,n){r=a[e]=[t,n]});t.push(r[2]=c);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=i(e),s=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src,c=new Error("Loading chunk "+e+" failed.\n("+r+": "+o+")");c.type=r,c.request=o,n[1](c)}a[e]=void 0}};var f=setTimeout(function(){s({type:"timeout",target:l})},12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/bio/",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var f=0;f<s.length;f++)t(s[f]);var p=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0efe":function(e,t,n){},"305f":function(e,t,n){"use strict";var r=n("e3d9"),o=n.n(r);o.a},4360:function(e,t,n){"use strict";n("8e6e"),n("456d");var r=n("bd86"),o=n("768b"),a=(n("a481"),n("ac6a"),n("2b0e")),c=n("2f62");function i(e,t){var n=Object.keys(e);return Object.getOwnPropertySymbols&&n.push.apply(n,Object.getOwnPropertySymbols(e)),t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(n,!0).forEach(function(t){Object(r["a"])(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}a["default"].use(c["a"]);var s=n("6c17"),l=s.keys().map(function(e){return[e.replace(/(^.\/)|(\.js$)/g,""),s(e)]}).reduce(function(e,t){var n=Object(o["a"])(t,2),a=n[0],c=n[1];return void 0===c.namespaced&&(c.namespaced=!0),u({},e,Object(r["a"])({},a,c))},{});t["a"]=new c["a"].Store({modules:l})},5459:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("8e6e"),n("ac6a"),n("456d");var r=n("bd86"),o=(n("cadf"),n("551c"),n("f751"),n("097d"),n("2b0e")),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("loading",{ref:"loading"}),n("transition",{attrs:{name:"page",mode:"out-in"}},[e.layout?n(e.layout,{tag:"component"}):e._e()],1)],1)},c=[],i=n("768b"),u=(n("a481"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"progress",style:{width:e.percent+"%",height:e.height,opacity:e.show?1:0,"background-color":e.canSuccess?e.color:e.failedColor}})}),s=[],l={data:function(){return{percent:0,show:!1,canSuccess:!0,duration:3e3,height:"2px",color:"#77b6ff",failedColor:"red"}},methods:{start:function(){var e=this;return this.show=!0,this.canSuccess=!0,this._timer&&(clearInterval(this._timer),this.percent=0),this._cut=1e4/Math.floor(this.duration),this._timer=setInterval(function(){e.increase(e._cut*Math.random()),e.percent>95&&e.finish()},100),this},set:function(e){return this.show=!0,this.canSuccess=!0,this.percent=Math.floor(e),this},get:function(){return Math.floor(this.percent)},increase:function(e){return this.percent=this.percent+Math.floor(e),this},decrease:function(e){return this.percent=this.percent-Math.floor(e),this},finish:function(){return this.percent=100,this.hide(),this},pause:function(){return clearInterval(this._timer),this},hide:function(){var e=this;return clearInterval(this._timer),this._timer=null,setTimeout(function(){e.show=!1,e.$nextTick(function(){setTimeout(function(){e.percent=0},200)})},500),this},fail:function(){return this.canSuccess=!1,this}}},f=l,p=(n("d67b"),n("2877")),d=Object(p["a"])(f,u,s,!1,null,"54295590",null),h=d.exports,b=n("81be"),g=b.keys().map(function(e){return[e.replace(/(^.\/)|(\.vue$)/g,""),b(e)]}).reduce(function(e,t){var n=Object(i["a"])(t,2),r=n[0],o=n[1];return e[r]=o.default||o,e},{}),v={el:"#app",components:{Loading:h},data:function(){return{layout:null,defaultLayout:"default"}},metaInfo:function(){return{title:"Firman Taruna Nugraha",titleTemplate:"%s · ".concat("Firman Taruna Nugraha")}},mounted:function(){this.$loading=this.$refs.loading},methods:{setLayout:function(e){e&&g[e]||(e=this.defaultLayout),this.layout=g[e]}}},m=v,y=(n("5c0b"),Object(p["a"])(m,a,c,!1,null,null,null)),O=y.exports,w=n("4360"),j=(n("96cf"),n("75fc")),k=(n("5df3"),n("3b8d")),_=n("0a89"),P=n.n(_),x=function(){return n.e("chunk-0c739f6e").then(n.bind(null,"0462")).then(function(e){return e.default||e})},E=function(){return n.e("chunk-2d0b23b5").then(n.bind(null,"22dc")).then(function(e){return e.default||e})},D=function(){return n.e("chunk-78bb1ca7").then(n.bind(null,"3909")).then(function(e){return e.default||e})},S=[{path:"/",name:"welcome",component:x},{path:"/portfolio",name:"portfolio",component:D},{path:"*",component:E}],L=n("8c4f"),T=n("31bd");function C(e,t){var n=Object.keys(e);return Object.getOwnPropertySymbols&&n.push.apply(n,Object.getOwnPropertySymbols(e)),t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n}function N(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?C(n,!0).forEach(function(t){Object(r["a"])(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}o["default"].use(P.a),o["default"].use(L["a"]);var M=["locale"],$=z(n("9091")),A=R();Object(T["sync"])(w["a"],A);var I=A;function R(){var e=new L["a"]({scrollBehavior:K,routes:S});return e.beforeEach(U),e.afterEach(B),e}function U(e,t,n){return F.apply(this,arguments)}function F(){return F=Object(k["a"])(regeneratorRuntime.mark(function e(t,n,r){var o,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,J(A.getMatchedComponents(N({},t)));case 2:if(o=e.sent,0!==o.length){e.next=5;break}return e.abrupt("return",r());case 5:!1!==o[o.length-1].loading&&A.app.$nextTick(function(){return A.app.$loading.start()}),a=W(o),H(a,t,n,function(){0===arguments.length&&A.app.setLayout(o[0].layout||""),r.apply(void 0,arguments)});case 8:case"end":return e.stop()}},e)})),F.apply(this,arguments)}function B(){return q.apply(this,arguments)}function q(){return q=Object(k["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,A.app.$nextTick();case 2:A.app.$loading.finish();case 3:case"end":return e.stop()}},e)})),q.apply(this,arguments)}function H(e,t,n,r){var o=e.reverse(),a=function e(){if(arguments.length>0||0===o.length)return arguments.length>0&&A.app.$loading.finish(),r.apply(void 0,arguments);var a=o.pop();if("function"===typeof a)a(t,n,e);else{if(!$[a])throw Error("Undefined middleware [".concat(a,"]"));$[a](t,n,e)}};a()}function J(e){return Promise.all(e.map(function(e){return"function"===typeof e?e():e}))}function W(e){var t=[].concat(M);return e.filter(function(e){return e.middleware}).forEach(function(e){Array.isArray(e.middleware)?t.push.apply(t,Object(j["a"])(e.middleware)):t.push(e.middleware)}),t}function K(e,t,n){if(n)return n;if(e.hash)return{selector:e.hash};var r=A.getMatchedComponents(N({},e)).slice(-1),o=Object(i["a"])(r,1),a=o[0];return a&&!1===a.scrollToTop?{}:{x:0,y:0}}function z(e){return e.keys().map(function(t){return[t.replace(/(^.\/)|(\.js$)/g,""),e(t)]}).reduce(function(e,t){var n=Object(i["a"])(t,2),o=n[0],a=n[1];return N({},e,Object(r["a"])({},o,a.default))},{})}var G,Q=n("d3a4"),V=n("9483"),X=function(e){e.postMessage({action:"skipWaiting"})};Object(V["a"])("".concat("/bio/","service-worker.js"),{registrationOptions:{scope:"/bio/"},ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},cached:function(){console.log("Content has been cached for offline use.")},updated:function(e){console.log("New content is available; please refresh."),X(e.waiting)},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),navigator.serviceWorker.addEventListener("controllerchange",function(){G||(window.location.reload(),G=!0)});var Y=n("bc3a"),Z=n.n(Y),ee=n("3d20"),te=n.n(ee);Z.a.defaults.params={},Z.a.interceptors.request.use(function(e){e.baseURL="https://firmantr3.github.io/bio";var t=w["a"].getters["auth/token"];t&&(e.params.token=t);var n=w["a"].getters["lang/locale"];return n&&(e.headers.common["Accept-Language"]=n),e}),Z.a.interceptors.response.use(function(e){return e},function(e){var t=e.response.status;return t>=500&&te()({type:"error",title:Q["a"].t("error_alert_title"),text:Q["a"].t("error_alert_text"),reverseButtons:!0,confirmButtonText:Q["a"].t("ok"),cancelButtonText:Q["a"].t("cancel")}),Promise.reject(e)});var ne=n("5f5b");o["default"].use(ne["a"]);n("7f7f");var re=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{name:"page",mode:"out-in"}},[e._t("default",[n("router-view")])],2)},oe=[],ae={name:"Child"},ce=ae,ie=Object(p["a"])(ce,re,oe,!1,null,null,null),ue=ie.exports,se=n("e070");function le(e,t){var n=Object.keys(e);return Object.getOwnPropertySymbols&&n.push.apply(n,Object.getOwnPropertySymbols(e)),t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n}function fe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?le(n,!0).forEach(function(t){Object(r["a"])(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):le(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}[ue,se["HasError"],se["AlertError"],se["AlertSuccess"]].forEach(function(e){o["default"].component(e.name,e)}),o["default"].config.productionTip=!1,new o["default"](fe({i18n:Q["a"],store:w["a"],router:I},O))},5892:function(e,t,n){var r={"./en":["e312","lang-en"],"./en.json":["e312","lang-en"],"./id":["2d3f","lang-id"],"./id.json":["2d3f","lang-id"]};function o(e){var t=r[e];return t?n.e(t[1]).then(function(){var e=t[0];return n.t(e,3)}):Promise.resolve().then(function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t})}o.keys=function(){return Object.keys(r)},o.id="5892",e.exports=o},"5c0b":function(e,t,n){"use strict";var r=n("5e27"),o=n.n(r);o.a},"5e27":function(e,t,n){},"6c17":function(e,t,n){var r={"./lang.js":"bbe9"};function o(e){var t=a(e);return n(t)}function a(e){var t=r[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}o.keys=function(){return Object.keys(r)},o.resolve=a,e.exports=o,o.id="6c17"},"7b3d":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"main-layout"},[n("navbar"),n("b-container",{staticClass:"mt-4"},[n("child")],1)],1)},o=[],a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("b-navbar",{attrs:{fixed:"top",toggleable:"lg",type:"light",variant:"light"}},[n("b-navbar-brand",{attrs:{id:"navbrand",to:{name:"welcome"}}},[e._v(e._s(e.appName))]),n("b-navbar-toggle",{attrs:{target:"navbarToggler"}}),n("b-collapse",{attrs:{"is-nav":"",id:"navbarToggler"}},[n("b-navbar-nav",{staticClass:"ml-auto"},[n("locale-dropdown"),n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{to:{name:"portfolio"},"active-class":"active"}},[e._v("\n            "+e._s(e.$t("portfolio"))+"\n          ")])],1)],1)],1)],1)],1)},c=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-nav-item-dropdown",{attrs:{id:"localeDropDown",text:e.locales[e.locale]}},e._l(e.locales,function(t,r){return n("b-dropdown-item",{key:r,on:{click:function(t){return t.preventDefault(),e.setLocale(r)}}},[e._v("\n    "+e._s(t)+"\n  ")])}),1)},u=[],s=(n("8e6e"),n("ac6a"),n("456d"),n("bd86")),l=n("2f62"),f=n("d3a4"),p=n("bc3a"),d=n.n(p);function h(e,t){var n=Object.keys(e);return Object.getOwnPropertySymbols&&n.push.apply(n,Object.getOwnPropertySymbols(e)),t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(n,!0).forEach(function(t){Object(s["a"])(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var g={computed:b({},Object(l["b"])({locale:"lang/locale",locales:"lang/locales",localeIsSet:"lang/localeIsSet"})),methods:{setLocale:function(e){this.$i18n.locale!==e&&(Object(f["b"])(e),this.$store.dispatch("lang/setLocale",{locale:e}))}},created:function(){var e=this;this.localeIsSet||d.a.get("https://extreme-ip-lookup.com/json/").then(function(t){200===t.status&&("ID"===t.data.countryCode?e.setLocale("id"):e.setLocale("en"))})}},v=g,m=n("2877"),y=Object(m["a"])(v,i,u,!1,null,null,null),O=y.exports,w={components:{LocaleDropdown:O},data:function(){return{appName:"Firman Taruna Nugraha"}}},j=w,k=(n("942d"),Object(m["a"])(j,a,c,!1,null,"29a3e689",null)),_=k.exports,P={name:"MainLayout",components:{Navbar:_}},x=P,E=(n("305f"),Object(m["a"])(x,r,o,!1,null,"3224bf4a",null));t["default"]=E.exports},"81be":function(e,t,n){var r={"./default.vue":"7b3d"};function o(e){var t=a(e);return n(t)}function a(e){var t=r[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}o.keys=function(){return Object.keys(r)},o.resolve=a,e.exports=o,o.id="81be"},9091:function(e,t,n){var r={"./locale.js":"e00f"};function o(e){var t=a(e);return n(t)}function a(e){var t=r[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}o.keys=function(){return Object.keys(r)},o.resolve=a,e.exports=o,o.id="9091"},"942d":function(e,t,n){"use strict";var r=n("0efe"),o=n.n(r);o.a},bbe9:function(e,t,n){"use strict";n.r(t);var r=n("bd86"),o=n("a78e"),a=n.n(o),c="SET_LOCALE",i={id:"ID",en:"EN"};n.d(t,"state",function(){return u}),n.d(t,"getters",function(){return s}),n.d(t,"mutations",function(){return l}),n.d(t,"actions",function(){return f});var u={locale:a.a.get("locale")||"en",locales:i,localeIsSet:"undefined"!==typeof a.a.get("locale")},s={locale:function(e){return e.locale},locales:function(e){return e.locales},localeIsSet:function(e){return e.localeIsSet}},l=Object(r["a"])({},c,function(e,t){var n=t.locale;e.locale=n,e.localeIsSet=!0}),f={setLocale:function(e,t){var n=e.commit,r=t.locale;n(c,{locale:r}),a.a.set("locale",r,{expires:365})}}},d3a4:function(e,t,n){"use strict";n.d(t,"b",function(){return u});n("ac6a"),n("456d"),n("96cf");var r=n("3b8d"),o=n("2b0e"),a=n("4360"),c=n("a925");o["default"].use(c["a"]);var i=new c["a"]({locale:"en",messages:{}});function u(e){return s.apply(this,arguments)}function s(){return s=Object(r["a"])(regeneratorRuntime.mark(function e(t){var r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(0!==Object.keys(i.getLocaleMessage(t)).length){e.next=5;break}return e.next=3,n("5892")("./".concat(t));case 3:r=e.sent,i.setLocaleMessage(t,r);case 5:i.locale!==t&&(i.locale=t);case 6:case"end":return e.stop()}},e)})),s.apply(this,arguments)}Object(r["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,u(a["a"].getters["lang/locale"]);case 2:case"end":return e.stop()}},e)}))(),t["a"]=i},d67b:function(e,t,n){"use strict";var r=n("5459"),o=n.n(r);o.a},e00f:function(e,t,n){"use strict";n.r(t);n("96cf");var r=n("3b8d"),o=n("4360"),a=n("d3a4");t["default"]=function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(t,n,r){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(a["b"])(o["a"].getters["lang/locale"]);case 2:r();case 3:case"end":return e.stop()}},e)}));return function(t,n,r){return e.apply(this,arguments)}}()},e3d9:function(e,t,n){}});
//# sourceMappingURL=app.c45c2c77.js.map