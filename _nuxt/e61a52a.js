(window.webpackJsonp=window.webpackJsonp||[]).push([[11,9,13,15],{405:function(e,t,r){var content=r(414);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(104).default)("16f53d06",content,!0,{sourceMap:!1})},409:function(e,t,r){"use strict";r.r(t);r(5),r(4),r(6),r(3),r(7);var n=r(0),o=(r(2),r(1),r(105));function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var d={computed:l(l({},Object(o.b)({locale:"lang/locale",locales:"lang/locales",localeIsSet:"lang/localeIsSet"})),{},{availableLocales:function(){var e=this;return this.$i18n.locales.filter((function(i){return i.code!==e.$i18n.locale}))}}),methods:{setLocale:function(e){console.log(e),this.$i18n.locale!==e&&(this.$i18n.setLocale(e),this.$store.dispatch("lang/setLocale",{locale:e}))}},created:function(){var e=this;if(!this.localeIsSet)try{$axios.$get("https://extreme-ip-lookup.com/json/").then((function(t){200===t.status&&("ID"===t.data.countryCode?e.setLocale("id"):e.setLocale("en"))}))}catch(e){}}},v=r(83),component=Object(v.a)(d,(function(){var e=this,t=e._self._c;return t("b-nav-item-dropdown",{attrs:{text:e.locales[e.locale]}},e._l(e.locales,(function(r,n){return t("b-dropdown-item",{key:n,on:{click:function(t){return t.preventDefault(),e.setLocale(n)}}},[e._v("\n    "+e._s(r)+"\n  ")])})),1)}),[],!1,null,null,null);t.default=component.exports},412:function(e,t,r){var content=r(422);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(104).default)("793558ea",content,!0,{sourceMap:!1})},413:function(e,t,r){"use strict";r(405)},414:function(e,t,r){var n=r(103)((function(i){return i[1]}));n.push([e.i,"header[data-v-5f079dd3]{position:relative;width:100%}header.header-sidebar[data-v-5f079dd3]{position:fixed;width:300px}header.header-sidebar .masthead-subheading[data-v-5f079dd3]{font-size:1rem}header[data-v-5f079dd3]{transition:all .3s ease}",""]),n.locals={},e.exports=n},415:function(e,t,r){"use strict";r.r(t);var n={computed:{shrink:function(){return this.$store.state.ui.shrink}}},o=r(83),component=Object(o.a)(n,(function(){var e=this,t=e._self._c;return t("b-navbar",{directives:[{name:"b-scrollspy",rawName:"v-b-scrollspy",value:60,expression:"60"}],staticClass:"navbar navbar-expand-lg bg-secondary text-uppercase fixed-top",class:{"navbar-shrink":e.shrink},attrs:{toggleable:"lg",type:"dark",id:"mainNav"}},[t("b-container",[t("h1",{staticStyle:{"font-size":"1em"}},[t("b-navbar-brand",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#page-top",expression:"'#page-top'"}],attrs:{href:"#"}},[e._v("Firman Taruna Nugraha")])],1),e._v(" "),t("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),e._v(" "),t("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[t("b-navbar-nav",{staticClass:"ml-auto"},[t("b-nav-item",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#portfolio",expression:"'#portfolio'"}],attrs:{href:"#portfolio"}},[e._v(e._s(e.$t("portfolio")))]),e._v(" "),t("b-nav-item",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#about",expression:"'#about'"}],attrs:{href:"#about"}},[e._v(e._s(e.$t("about")))]),e._v(" "),t("b-nav-item",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#contact",expression:"'#contact'"}],attrs:{href:"#contact"}},[e._v(e._s(e.$t("contact")))]),e._v(" "),t("LocaleDropdown")],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{LocaleDropdown:r(409).default})},416:function(e,t,r){"use strict";r.r(t);var n={computed:{sidebar:function(){return this.$store.state.ui.sidebar},shrink:function(){return this.$store.state.ui.shrink}}},o=(r(413),r(83)),component=Object(o.a)(n,(function(){var e=this,t=e._self._c;return t("header",{staticClass:"masthead bg-light text-dark text-center",class:{"header-sidebar":e.sidebar,"masthead-shrink":e.shrink}},[t("div",{staticClass:"container d-flex align-items-center flex-column"},[t("b-img-lazy",{staticClass:"rounded-circle",attrs:{fluid:"",thumbnail:"",width:"300",rounded:"",blank:"","blank-color":"#bbb",src:"https://gravatar.com/avatar/85c9a1594c2d324183364fd303ba0ae4?s=300",alt:"My Avatar"}}),e._v(" "),t("div",{staticClass:"divider-custom divider-dark"},[t("div",{staticClass:"divider-custom-line"}),e._v(" "),t("div",{staticClass:"divider-custom-icon"},[t("font-awesome-icon",{attrs:{icon:["fas","star"]}})],1),e._v(" "),t("div",{staticClass:"divider-custom-line"})]),e._v(" "),t("p",{staticClass:"masthead-subheading font-weight-light mb-0"},[e._v("Backend API Programmer • Full Stack Web Developer")])],1)])}),[],!1,null,"5f079dd3",null);t.default=component.exports},421:function(e,t,r){"use strict";r(412)},422:function(e,t,r){var n=r(103)((function(i){return i[1]}));n.push([e.i,".headpadding{display:none}@media (min-width:992px){.headpadding{display:block;padding-top:104px}}",""]),n.locals={},e.exports=n},430:function(e,t,r){"use strict";r.r(t);r(5),r(4),r(2),r(1),r(6),r(3),r(7);var n=r(0),o=r(105),c=r(425);function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}var d={created:function(){},mounted:function(){var e=this;this.$nextTick((function(){window.addEventListener("scroll",Object(c.debounce)(e.handleScroll,1e3)),window.addEventListener("resize",Object(c.debounce)(e.handleResize,1e3)),e.updateSidebar(e.checkSidebar())}))},destroyed:function(){window.removeEventListener("scroll",Object(c.debounce)(this.handleScroll,1e3)),window.removeEventListener("resize",Object(c.debounce)(this.handleResize,1e3))},methods:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({handleScroll:function(){this.updateShrink(window.scrollY>100)},handleResize:function(){this.updateSidebar(this.checkSidebar())},checkSidebar:function(){return window.innerWidth>=992}},Object(o.c)({updateShrink:"ui/updateShrink",updateSidebar:"ui/updateSidebar"}))},v=d,f=(r(421),r(83)),component=Object(f.a)(v,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"theme",attrs:{id:"page-top"}},[t("navbar"),e._v(" "),t("firman"),e._v(" "),t("div",{staticClass:"headpadding"}),e._v(" "),e._t("default")],2)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Navbar:r(415).default,Firman:r(416).default})}}]);