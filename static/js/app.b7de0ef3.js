(function(e){function t(t){for(var n,u,l=t[0],s=t[1],c=t[2],v=0,p=[];v<l.length;v++)u=l[v],Object.prototype.hasOwnProperty.call(a,u)&&a[u]&&p.push(a[u][0]),a[u]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);i&&i(t);while(p.length)p.shift()();return o.push.apply(o,c||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,l=1;l<r.length;l++){var s=r[l];0!==a[s]&&(n=!1)}n&&(o.splice(t--,1),e=u(u.s=r[0]))}return e}var n={},a={app:0},o=[];function u(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,u),r.l=!0,r.exports}u.m=e,u.c=n,u.d=function(e,t,r){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(u.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)u.d(r,n,function(t){return e[t]}.bind(null,n));return r},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var i=s;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"0172":function(e,t,r){"use strict";r("c1f1")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("div",{attrs:{id:"nav"}},[r("router-link",{attrs:{to:{name:"Home"}}},[e._v("Home")]),r("router-link",{attrs:{to:{name:"About"}}},[e._v("About")]),r("router-link",{attrs:{to:{name:"Tracks"}}},[e._v("Tracks")])],1),r("router-view")],1)},o=[],u=(r("5c0b"),r("2877")),l={},s=Object(u["a"])(l,a,o,!1,null,null,null),c=s.exports,i=r("1da1"),v=(r("96cf"),r("b0c0"),r("99af"),r("8c4f")),p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("img",{attrs:{alt:"Vue logo",src:r("cf05")}}),n("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},f=[],h=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"hello"},[r("h1",[e._v(e._s(e.msg))]),e._m(0),r("h3",[e._v("Installed CLI Plugins")]),e._m(1),r("h3",[e._v("Essential Links")]),e._m(2),r("h3",[e._v("Ecosystem")]),e._m(3)])},_=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v(" For a guide and recipes on how to configure / customize this project,"),r("br"),e._v(" check out the "),r("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-cli documentation")]),e._v(". ")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[e._v("babel")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa",target:"_blank",rel:"noopener"}},[e._v("pwa")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router",target:"_blank",rel:"noopener"}},[e._v("router")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex",target:"_blank",rel:"noopener"}},[e._v("vuex")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint",target:"_blank",rel:"noopener"}},[e._v("eslint")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Core Docs")])]),r("li",[r("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Forum")])]),r("li",[r("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Community Chat")])]),r("li",[r("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[e._v("Twitter")])]),r("li",[r("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("News")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-router")])]),r("li",[r("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vuex")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[e._v("vue-devtools")])]),r("li",[r("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-loader")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[e._v("awesome-vue")])])])}],m={name:"HelloWorld",props:{msg:String}},g=m,b=(r("0172"),Object(u["a"])(g,h,_,!1,null,"4231eb0e",null)),d=b.exports,k={name:"Home",components:{HelloWorld:d}},j=k,w=Object(u["a"])(j,p,f,!1,null,null,null),y=w.exports,x=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},O=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",[e._v("This is an about page")])])}],E={name:"About",components:void 0},T=E,$=Object(u["a"])(T,x,O,!1,null,null,null),P=$.exports,C=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",[e._v("Tracks")]),null===e.tracks?r("p",[e._v("There are no tracks.")]):e._e(),r("ul",e._l(e.tracks,(function(t){return r("li",{key:t.name},[e._v(" "+e._s(t.name)+" ")])})),0)])},H=[],S=r("bc3a"),A=r.n(S),M={name:"Tracks",components:void 0,data:function(){return{tracks:null}},mounted:function(){this.getTracks()},methods:{getTracks:function(){var e=this;A.a.get("//127.0.0.1:8000/api/track/?format=json").then((function(t){return e.tracks=t.data}))}}},W=M,F=Object(u["a"])(W,C,H,!1,null,null,null),L=F.exports,R=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},I=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",[e._v("404")]),r("p",[r("b",[e._v("Page not found!")])]),r("p",[e._v("Check URL")])])}],J={name:"Error404",components:void 0},V=J,z=Object(u["a"])(V,R,I,!1,null,null,null),D=z.exports;n["a"].use(v["a"]);var N=[{path:"/",name:"Home",component:y},{path:"/about",name:"About",component:P},{path:"/tracks",name:"Tracks",component:L},{path:"/page-not-found",alias:"*",component:D}],U=new v["a"]({mode:"history",base:"/",routes:N});U.beforeEach(function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t,r,n){var a,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:a=t.name,o="Foamy",document.title="".concat(a?a+" | ":"").concat(o),n();case 4:case"end":return e.stop()}}),e)})));return function(t,r,n){return e.apply(this,arguments)}}());var Y=U,q=r("2f62");n["a"].use(q["a"]);var B=new q["a"].Store({state:{},mutations:{},actions:{},modules:{}});n["a"].config.productionTip=!1,new n["a"]({router:Y,store:B,render:function(e){return e(c)}}).$mount("#app")},"5c0b":function(e,t,r){"use strict";r("9c0c")},"9c0c":function(e,t,r){},c1f1:function(e,t,r){},cf05:function(e,t,r){e.exports=r.p+"static/img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.b7de0ef3.js.map