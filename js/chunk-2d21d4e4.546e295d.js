(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21d4e4"],{d178:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-navbar",{directives:[{name:"b-scrollspy",rawName:"v-b-scrollspy",value:60,expression:"60"}],staticClass:"navbar navbar-expand-lg bg-secondary text-uppercase fixed-top",class:{"navbar-shrink":e.shrink},attrs:{toggleable:"lg",type:"dark",id:"mainNav"}},[a("b-container",[a("b-navbar-brand",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#page-top",expression:"'#page-top'"}],attrs:{href:"#"}},[e._v("Firman Taruna Nugraha")]),a("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),a("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[a("b-navbar-nav",{staticClass:"ml-auto"},[a("b-nav-item",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#portfolio",expression:"'#portfolio'"}],attrs:{href:"#portfolio"}},[e._v(e._s(e.$t("portfolio")))]),a("b-nav-item",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#about",expression:"'#about'"}],attrs:{href:"#about"}},[e._v(e._s(e.$t("about")))]),a("b-nav-item",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#contact",expression:"'#contact'"}],attrs:{href:"#contact"}},[e._v(e._s(e.$t("contact")))]),a("LocaleDropdown")],1)],1)],1)],1)},o=[],n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-nav-item-dropdown",{attrs:{text:e.locales[e.locale]}},e._l(e.locales,(function(t,r){return a("b-dropdown-item",{key:r,on:{click:function(t){return t.preventDefault(),e.setLocale(r)}}},[e._v(" "+e._s(t)+" ")])})),1)},l=[],c=a("2f62"),s=a("d3a4"),i=a("bc3a"),u=a.n(i);function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){v(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function v(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var f={computed:b({},Object(c["b"])({locale:"lang/locale",locales:"lang/locales",localeIsSet:"lang/localeIsSet"})),methods:{setLocale:function(e){this.$i18n.locale!==e&&(Object(s["b"])(e),this.$store.dispatch("lang/setLocale",{locale:e}))}},created:function(){var e=this;if(!this.localeIsSet)try{u.a.get("https://extreme-ip-lookup.com/json/").then((function(t){200===t.status&&("ID"===t.data.countryCode?e.setLocale("id"):e.setLocale("en"))}))}catch(t){}}},d=f,m=a("2877"),h=Object(m["a"])(d,n,l,!1,null,null,null),g=h.exports,w={components:{LocaleDropdown:g},computed:{shrink:function(){return this.$store.state.ui.shrink}}},O=w,y=Object(m["a"])(O,r,o,!1,null,null,null);t["default"]=y.exports}}]);
//# sourceMappingURL=chunk-2d21d4e4.546e295d.js.map