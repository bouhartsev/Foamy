(function(e){function t(t){for(var i,o,s=t[0],l=t[1],u=t[2],v=0,m=[];v<s.length;v++)o=s[v],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&m.push(n[o][0]),n[o]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i]);c&&c(t);while(m.length)m.shift()();return r.push.apply(r,u||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],i=!0,s=1;s<a.length;s++){var l=a[s];0!==n[l]&&(i=!1)}i&&(r.splice(t--,1),e=o(o.s=a[0]))}return e}var i={},n={app:0},r=[];function o(t){if(i[t])return i[t].exports;var a=i[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=i,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(a,i,function(t){return e[t]}.bind(null,i));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var c=l;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"224a":function(e,t,a){},"34fc":function(e,t,a){"use strict";a("224a")},"4c70":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);var i=a("2b0e"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("v-hover",{scopedSlots:e._u([{key:"default",fn:function(e){var t=e.hover;return[a("NavigationDrawer",{ref:"nav",attrs:{navIsHover:t}})]}}])}),a("AppBar"),a("v-main",[a("v-container",{attrs:{fluid:""}},[a("router-view")],1)],1)],1)},r=[],o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-navigation-drawer",{attrs:{app:"","expand-on-hover":e.navIsOnHover,"mobile-breakpoint":"768",tag:"nav"},model:{value:e.navIsActive,callback:function(t){e.navIsActive=t},expression:"navIsActive"}},[a("v-list",[a("v-list-item",[a("a",{staticStyle:{color:"inherit","text-decoration":"inherit"},attrs:{href:"/"}},[a("v-list-item-content",[a("v-list-item-title",{staticClass:"title"},[a("h1",[e._v("Foamy ")])]),a("v-list-item-subtitle",{staticStyle:{"text-transform":"uppercase"}},[e._v("for you")])],1)],1)])],1),a("v-divider"),a("v-list",{attrs:{nav:"",dense:""}},[a("v-list-item",{attrs:{link:"",to:{name:"Tracks"}}},[a("v-list-item-icon",[a("v-icon",[e._v("fa-music")])],1),a("v-list-item-title",[e._v("Tracks")])],1),a("v-list-item",{attrs:{link:"",to:{name:"Artists"}}},[a("v-list-item-icon",[a("v-icon",[e._v("fa-microphone-alt")])],1),a("v-list-item-title",[e._v("Artists")])],1),a("v-list-item",{attrs:{link:"",to:{name:"Releases"}}},[a("v-list-item-icon",[a("v-icon",[e._v("fa-compact-disc")])],1),a("v-list-item-title",[e._v("Releases")])],1),a("v-list-item",{attrs:{link:"",to:{name:"Genres"}}},[a("v-list-item-icon",[a("v-icon",[e._v("radio")])],1),a("v-list-item-title",[e._v("Genres")])],1),a("v-list-item",{attrs:{link:"",to:{name:"Playlists"}}},[a("v-list-item-icon",[a("v-icon",[e._v("queue_music")])],1),a("v-list-item-title",[e._v("Playlists")])],1)],1),a("v-container",{directives:[{name:"show",rawName:"v-show",value:(!e.navIsOnHover||e.navIsHover)&&e.footerVisible,expression:"(!navIsOnHover || navIsHover)&&footerVisible"}],staticClass:"navFooter",attrs:{slot:"append"},slot:"append"},[a("v-list",{attrs:{dense:""}},[a("v-list-item",{attrs:{link:"",href:"//github.com/bouhartsev/Foamy/",target:"_blank"}},[e._v(" GitHub ")]),a("v-list-item",{attrs:{link:"",to:"/admin/",target:"_blank"}},[e._v(" Admin ")]),a("v-list-item",{attrs:{link:"",to:"/api/",target:"_blank"}},[e._v(" API ")]),a("v-list-item",{attrs:{link:"",href:"mailto:programmer@bouhartsev.top?subject=Foamy Support",target:"_blank"}},[e._v(" Support ")])],1),a("v-container",[a("a",{attrs:{href:"//bouhartsev.top/",target:"_blank"}},[e._v("Matvey Bouhartsev")]),e._v(" © 2021"),a("br"),e._v(" Made for "),a("a",{attrs:{href:"//mospolytech.ru/",target:"_blank"}},[e._v("MosPolytech")])])],1)],1)},s=[],l={name:"NavigationDrawer",data(){return{navIsOnHover:!1,navIsActive:!1,footerVisible:!0}},props:{navIsHover:Boolean},created(){window.innerWidth>768&&(this.navIsActive=!0),window.addEventListener("resize",this.resizeFunc)},destroyed(){window.removeEventListener("resize",this.resizeFunc)},methods:{burger_click:function(e){window.innerWidth>768?(this.navIsOnHover=!this.navIsOnHover,this.navIsActive=!0):(this.navIsOnHover=!1,this.navIsActive=!this.navIsActive)},resizeFunc:function(e){window.innerHeight<400?this.footerVisible=!1:this.footerVisible=!0}}},u=l,c=(a("a6d8"),a("2877")),v=Object(c["a"])(u,o,s,!1,null,"60a62e52",null),m=v.exports,p=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app-bar",{attrs:{app:"",color:"secondary"}},[a("v-app-bar-nav-icon",{on:{click:function(t){return e.$parent.$parent.$refs.nav.burger_click()}}}),a("v-tooltip",{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(t){var i=t.on,n=t.attrs;return[a("v-btn",e._g(e._b({attrs:{icon:"",to:{name:"Home"},exact:""}},"v-btn",n,!1),i),[a("v-icon",[e._v("fa-home")])],1)]}}])},[a("span",[e._v("Home")])]),a("v-tooltip",{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(t){var i=t.on,n=t.attrs;return[a("v-btn",e._g(e._b({attrs:{icon:"",to:{name:"About"},exact:""}},"v-btn",n,!1),i),[a("v-icon",[e._v("help")])],1)]}}])},[a("span",[e._v("About")])]),a("v-spacer"),a("Search",{directives:[{name:"show",rawName:"v-show",value:e.$vuetify.breakpoint.smAndUp,expression:"$vuetify.breakpoint.smAndUp"}],staticStyle:{flex:"0.1 1 auto"},attrs:{search_value:e.search_value},on:{"update:search_value":function(t){e.search_value=t}}}),a("v-btn",{directives:[{name:"show",rawName:"v-show",value:e.$vuetify.breakpoint.xsOnly,expression:"$vuetify.breakpoint.xsOnly"}],attrs:{icon:""},on:{click:function(t){e.openSearch=!0}}},[a("v-icon",[e._v("mdi-magnify")])],1),a("v-dialog",{attrs:{"hide-overlay":"",transition:"slide-y-transition",value:e.$vuetify.breakpoint.xs},model:{value:e.openSearch,callback:function(t){e.openSearch=t},expression:"openSearch"}},[a("v-card",{directives:[{name:"show",rawName:"v-show",value:e.$vuetify.breakpoint.xsOnly,expression:"$vuetify.breakpoint.xsOnly"}]},[a("v-container",[a("Search",{attrs:{autofocus:"",search_value:e.search_value},on:{"update:search_value":function(t){e.search_value=t}}})],1)],1)],1),a("v-btn",{attrs:{icon:""},on:{click:function(t){e.$vuetify.theme.dark=!e.$vuetify.theme.dark}}},[a("v-icon",[e._v("mdi-theme-light-dark")])],1)],1)},d=[],f=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-text-field",{staticClass:"search_field",attrs:{"hide-details":"",label:"Search",autofocus:e.autofocus,value:e.search_value,clearable:""},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.search()},input:function(t){return e.updateValue(t)}}})},h=[],_={name:"Search",props:{autofocus:Boolean,search_value:String},methods:{search:function(){""!=this.search_value&&console.log(this.search_value)},updateValue:function(e){this.$emit("update:search_value",e)}}},b=_,g=(a("9606"),Object(c["a"])(b,f,h,!1,null,"ea897514",null)),k=g.exports,y={name:"AppBar",components:{Search:k},data(){return{openSearch:!1,search_value:""}}},x=y,w=(a("7a18"),Object(c["a"])(x,p,d,!1,null,"7a8401dd",null)),q=w.exports,j={components:{NavigationDrawer:m,AppBar:q},data(){return{openSearch:!1}},methods:{}},$=j,E=Object(c["a"])($,n,r,!1,null,"0a1cd564",null),O=E.exports,A=a("8c4f"),S=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},I=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home"},[a("p",[e._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")]),a("p",[e._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")]),a("p",[e._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")]),a("p",[e._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")]),a("p",[e._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")]),a("p",[e._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")]),a("p",[e._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")]),a("p",[e._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")]),a("p",[e._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")])])}],D=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"hello"},[a("h1",[e._v(e._s(e.msg))]),e._m(0),a("h3",[e._v("Installed CLI Plugins")]),e._m(1),a("h3",[e._v("Essential Links")]),e._m(2),a("h3",[e._v("Ecosystem")]),e._m(3)])},P=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v(" For a guide and recipes on how to configure / customize this project,"),a("br"),e._v(" check out the "),a("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-cli documentation")]),e._v(". ")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[e._v("babel")])]),a("li",[a("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa",target:"_blank",rel:"noopener"}},[e._v("pwa")])]),a("li",[a("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router",target:"_blank",rel:"noopener"}},[e._v("router")])]),a("li",[a("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex",target:"_blank",rel:"noopener"}},[e._v("vuex")])]),a("li",[a("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint",target:"_blank",rel:"noopener"}},[e._v("eslint")])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",[a("li",[a("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Core Docs")])]),a("li",[a("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Forum")])]),a("li",[a("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Community Chat")])]),a("li",[a("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[e._v("Twitter")])]),a("li",[a("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("News")])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",[a("li",[a("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-router")])]),a("li",[a("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vuex")])]),a("li",[a("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[e._v("vue-devtools")])]),a("li",[a("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-loader")])]),a("li",[a("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[e._v("awesome-vue")])])])}],H={name:"HelloWorld",props:{msg:String}},T=H,L=(a("ad1e"),Object(c["a"])(T,D,P,!1,null,"fd23470e",null)),C=L.exports,U={name:"Home",components:{HelloWorld:C}},F=U,N=Object(c["a"])(F,S,I,!1,null,null,null),M=N.exports,V=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},z=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h1",[e._v("This is an about page")])])}],B={name:"About",components:void 0},G=B,R=Object(c["a"])(G,V,z,!1,null,null,null),W=R.exports,J=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h1",[e._v("Tracks")]),null===e.tracks?a("p",[e._v("There are no tracks.")]):e._e(),a("v-container",[a("v-layout",{attrs:{row:"",wrap:""}},e._l(e.tracks,(function(t){return a("v-flex",{key:t.id,attrs:{xsl0:"",sm6:"",md4:""}},[a("v-card",[a("v-card-title",[e._v(e._s(t.name))])],1)],1)})),1)],1)],1)},K=[],Q={name:"Tracks",components:void 0,computed:{tracks(){return this.$store.state.dataAPI}},mounted(){this.$getDataAPI("tracks")}},X=Q,Y=Object(c["a"])(X,J,K,!1,null,null,null),Z=Y.exports,ee=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div")},te=[],ae={name:"Artists"},ie=ae,ne=Object(c["a"])(ie,ee,te,!1,null,null,null),re=ne.exports,oe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div")},se=[],le={name:"Releases"},ue=le,ce=Object(c["a"])(ue,oe,se,!1,null,null,null),ve=ce.exports,me=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div")},pe=[],de={name:"Genres"},fe=de,he=Object(c["a"])(fe,me,pe,!1,null,null,null),_e=he.exports,be=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div")},ge=[],ke={name:"Playlists"},ye=ke,xe=Object(c["a"])(ye,be,ge,!1,null,null,null),we=xe.exports,qe=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},je=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"page404"},[a("h2",[e._v("404")]),a("p",[a("b",[e._v("Page not found!")])]),a("p",[e._v("Check URL")])])}],$e={name:"Error404",components:void 0},Ee=$e,Oe=(a("34fc"),Object(c["a"])(Ee,qe,je,!1,null,"2fe9bed3",null)),Ae=Oe.exports;i["default"].use(A["a"]);const Se=[{path:"/",name:"Home",component:M},{path:"/about",name:"About",component:W},{path:"/tracks",name:"Tracks",component:Z},{path:"/artists",name:"Artists",component:re},{path:"/releases",name:"Releases",component:ve},{path:"/genres",name:"Genres",component:_e},{path:"/playlists",name:"Playlists",component:we},{path:"/page-not-found",alias:"*",component:Ae}],Ie=new A["a"]({mode:"history",base:"/",routes:Se});Ie.beforeEach(async(e,t,a)=>{const i=e.name,n="Foamy";document.title=`${i?i+" | ":""}${n}`,a()});var De=Ie,Pe=a("2f62"),He=a("bc3a"),Te=a.n(He);i["default"].use(Pe["a"]);var Le=new Pe["a"].Store({state:{dataAPI:{}},mutations:{SET_DATA(e,t){e.dataAPI=t}},actions:{getData({commit:e},t){Te.a.get("//127.0.0.1:8000/api/"+t+"/?format=json",{responseType:"json"}).then(t=>{e("SET_DATA",t.data),console.log("Data uploaded")}).catch(t=>{e("SET_DATA",null),console.log("Data load error:",t.response)})}},modules:{}}),Ce=a("ce5b"),Ue=a.n(Ce),Fe=(a("bf40"),a("15f5"),a("d1e7"),a("5363"),a("fcf4"));i["default"].use(Ue.a);const Ne={icons:{iconfont:"mdi"},theme:{dark:!1,themes:{light:{primary:Fe["a"].red,secondary:Fe["a"].blue,accent:Fe["a"].orange,error:Fe["a"].purple,info:Fe["a"].black,success:Fe["a"].white,warning:Fe["a"].yellow},dark:{primary:Fe["a"].red,secondary:Fe["a"].blue,accent:Fe["a"].orange,error:Fe["a"].purple,info:Fe["a"].black,success:Fe["a"].white,warning:Fe["a"].yellow}},options:{customProperties:!0}}};var Me=new Ue.a(Ne);i["default"].config.productionTip=!1,i["default"].prototype.$getDataAPI=function(e){this.$store.dispatch("getData",e)},new i["default"]({router:De,store:Le,vuetify:Me,render:e=>e(O)}).$mount("#app")},"7a18":function(e,t,a){"use strict";a("92d3")},"8f37":function(e,t,a){},"92d3":function(e,t,a){},9352:function(e,t,a){},9606:function(e,t,a){"use strict";a("8f37")},a6d8:function(e,t,a){"use strict";a("9352")},ad1e:function(e,t,a){"use strict";a("4c70")}});
//# sourceMappingURL=app.e61b1898.js.map