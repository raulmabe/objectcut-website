(function(e){function t(t){for(var n,o,i=t[0],c=t[1],l=t[2],d=0,f=[];d<i.length;d++)o=i[d],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);u&&u(t);while(f.length)f.shift()();return s.push.apply(s,l||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],n=!0,i=1;i<r.length;i++){var c=r[i];0!==a[c]&&(n=!1)}n&&(s.splice(t--,1),e=o(o.s=r[0]))}return e}var n={},a={app:0},s=[];function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=n,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var u=c;s.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("cd49")},"0898":function(e,t,r){"use strict";r("b550")},5411:function(e,t,r){"use strict";r("59b4")},"59b4":function(e,t,r){},"6c47":function(e,t,r){},"6d05":function(e,t,r){},"9ff9":function(e,t,r){"use strict";r("6c47")},b550:function(e,t,r){},b66e:function(e,t,r){"use strict";r("6d05")},cd49:function(e,t,r){"use strict";r.r(t);r("96cf");var n=r("1da1"),a=(r("e260"),r("e6cf"),r("cca6"),r("a79d"),r("2b0e")),s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"grid grid-nav-main-footer h-screen w-screen overflow-auto bg-gray-200 text-gray-700"},[r("Hero"),r("MidContent"),r("Footer")],1)},o=[],i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"flex flex-col justify-evenly items-center "},[r("InputURL"),r("div",{staticClass:"flex flex-row flex-wrap flex-grow w-full justify-center items-center "},[r("MyImage",{staticClass:"w-full md:w-auto mx-5",attrs:{valid:e.isBaseValid,url:e.baseURL}}),r("MagicButton",{staticClass:"w-full md:w-auto mx-5"}),r("MyImage",{staticClass:"w-full md:w-auto mx-5",attrs:{valid:e.isGeneratedValid,url:e.generatedURL}})],1)],1)},c=[],l=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"flex flex-col items-center my-5 "},[e.valid?r("span",[r("img",{staticClass:"h-64 w-64 rounded object-contain",attrs:{src:e.url}})]):r("span",{staticClass:"skeleton h-64 w-64 rounded"})])},u=[],d={name:"MyImage",props:{url:String,valid:Boolean}},f=d,m=(r("9ff9"),r("2877")),g=Object(m["a"])(f,l,u,!1,null,"107891dc",null),p=g.exports,v=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"flex flex-col w-11/12 md:w-1/3"},[r("div",{staticClass:"flex flex-row flex-grow"},[r("p",{staticClass:"flex flex-grow ",class:{"text-danger":e.hasErrored}},[e._v(" Insert your RapidAPI Key ")])]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.key,expression:"key"}],staticClass:"form-input text-gray-900 mb-8",domProps:{value:e.key},on:{input:[function(t){t.target.composing||(e.key=t.target.value)},e.changeKey]}}),r("div",{staticClass:"flex flex-row flex-grow"},[r("p",{staticClass:"flex flex-grow ",class:{"text-danger":e.hasErrored}},[e._v(" "+e._s(e.getMessage())+" ")]),r("p",{class:{"text-danger":!e.valid,"text-primaryLight":e.valid}},[e._v(" "+e._s(e.valid?"Valid":"Invalid")+" ")])]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.url,expression:"url"}],staticClass:"form-input text-gray-900 mb-8",domProps:{value:e.url},on:{input:[function(t){t.target.composing||(e.url=t.target.value)},e.changeURL]}}),r("div",{staticClass:"block"},[r("p",[e._v("To remove")]),r("select",{directives:[{name:"model",rawName:"v-model",value:e.toRemove,expression:"toRemove"}],staticClass:"form-select text-gray-900 mb-8",on:{change:[function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.toRemove=t.target.multiple?r:r[0]},e.changeToRemove]}},[r("option",{attrs:{value:"background",selected:""}},[e._v("background")]),r("option",{attrs:{value:"foreground"}},[e._v("foreground")])])])])},h=[],b={name:"RawImg",data:function(){return{url:"",key:"",toRemove:"background"}},computed:{valid:function(){return this.$store.getters.isBaseURLValid},hasErrored:function(){return this.$store.getters.hasErrored},getErrorMessage:function(){return this.$store.getters.getErrorMessage}},methods:{getMessage:function(){return this.hasErrored?this.getErrorMessage:this.$store.getters.isBaseURLValid?"Cool one 👍🏼 !":"Insert a valid image URL"},changeURL:function(e){console.log("This url is ".concat(this.url)),this.$store.commit("setBaseURL",this.url)},changeKey:function(e){this.$store.commit("setKey",this.key)},changeToRemove:function(e){this.$store.commit("setToRemove",this.toRemove)}}},x=b,y=Object(m["a"])(x,v,h,!1,null,null,null),_=y.exports,R=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"flex flex-col items-center my-5 "},[r("span",{staticClass:"btn btn-primary",class:{"is-loading":e.loading,disabled:!e.valid},attrs:{disabled:!e.valid},on:{click:e.submitURL}},[e._v(" Magic ✨ ")]),e._m(0)])},w=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("strong",{staticClass:"gradient-text"},[e._v(" 98%")]),e._v(" success rate ")])}],L={name:"MagicButton",computed:{loading:function(){return this.$store.getters.isLoading},valid:function(){return this.$store.getters.isBaseURLValid}},methods:{submitURL:function(){this.$store.dispatch("magic")}}},C=L,U=(r("b66e"),Object(m["a"])(C,R,w,!1,null,"24c1f676",null)),k=U.exports,j={name:"MidContent",components:{MyImage:p,InputURL:_,MagicButton:k},computed:{baseURL:function(){return this.$store.getters.getBaseURL},generatedURL:function(){return this.$store.getters.getGeneratedURL},isGeneratedValid:function(){return this.$store.getters.isGeneratedURLValid},isBaseValid:function(){return this.$store.getters.isBaseURLValid}}},M=j,$=Object(m["a"])(M,i,c,!1,null,"4a673123",null),O=$.exports,E=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},V=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("footer",{staticClass:" h-32 flex flex-row justify-center items-center mx-10 "},[r("p",[r("strong",[e._v("API")]),e._v(" by "),r("a",{attrs:{href:"https://objectcut.com/"}},[e._v("ObjectCut ✂️")]),e._v(" and "),r("strong",[e._v("website")]),e._v(" by "),r("a",{attrs:{href:"https://raulmabe.dev"}},[e._v("Raul Mabe")]),e._v(". The source code is licensed "),r("a",{attrs:{href:"http://opensource.org/licenses/mit-license.php"}},[e._v("MIT")]),e._v(". The website content is licensed "),r("a",{attrs:{href:"http://creativecommons.org/licenses/by-nc-sa/4.0/"}},[e._v("CC BY NC SA 4.0")]),e._v(". ")])])}],B={name:"Footer"},I=B,P=(r("0898"),Object(m["a"])(I,E,V,!1,null,"6f1b768d",null)),T=P.exports,S=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},A=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"flex flex-col m-10"},[r("h1",{staticClass:"text-3xl md:text-5xl gradient-text"},[e._v(" Extract automagically objects from images! ")]),r("h2",{staticClass:"text-xl md:text-3xl"},[e._v(" Automatic background or foreground removal service. Start using our real-time RESTful API from "),r("a",{staticClass:" gradient-text",attrs:{href:"https://rapidapi.com/objectcut.api/api/background-removal",target:"_blank",rel:"noopener"}},[e._v("RapidAPI")]),e._v(" Marketplace immediately! ")])])}],G={name:"Hero"},K=G,N=Object(m["a"])(K,S,A,!1,null,null,null),q=N.exports,F={name:"App",title:"UI ObjectCut",components:{Hero:q,MidContent:O,Footer:T}},H=F,J=(r("5411"),Object(m["a"])(H,s,o,!1,null,null,null)),Y=J.exports,z=r("2f62"),D=r("2e4b"),Q=r.n(D);function W(e){var t=e.$options.title;if(t)return"function"===typeof t?t.call(e):t}var X={created:function(){var e=W(this);e&&(document.title=e)}},Z=r("d4ec"),ee=r("bee2"),te=r("bc3a"),re=r.n(te),ne=r("4328"),ae=r.n(ne),se=function(){function e(){Object(Z["a"])(this,e)}return Object(ee["a"])(e,[{key:"request",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t,r,n){var a,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,a={method:"POST",url:"https://rapidapi.p.rapidapi.com/remove",headers:{"content-type":"application/x-www-form-urlencoded","x-rapidapi-key":r,"x-rapidapi-host":"background-removal.p.rapidapi.com"},data:ae.a.stringify({image_url:t,to_remove:n})},e.next=4,re.a.request(a);case 4:return s=e.sent,e.abrupt("return",s.data);case 8:return e.prev=8,e.t0=e["catch"](0),e.abrupt("return",{error:!0,message:e.t0.response.data.message});case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));function t(t,r,n){return e.apply(this,arguments)}return t}()}]),e}(),oe=new se;a["a"].config.productionTip=!1,a["a"].mixin(X),a["a"].use(z["a"]);var ie=new z["a"].Store({state:{baseURL:"",baseValid:!1,key:"key",toRemove:"background",loading:!1,generatedURL:"",generatedValid:!1,error:!1,errorMessage:""},mutations:{setBaseURL:function(e,t){e.baseValid=Q()(t),e.baseURL=t,e.error=!1},setKey:function(e,t){e.key=t},setToRemove:function(e,t){e.toRemove=t},setGeneratedURL:function(e,t){e.generatedValid=Q()(t),e.generatedURL=t},setLoading:function(e,t){e.loading=t},setError:function(e,t){e.error=!0,e.errorMessage=t}},actions:{magic:function(e){return Object(n["a"])(regeneratorRuntime.mark((function t(){var r,n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(r=e.commit,n=e.state,n.baseValid){t.next=3;break}return t.abrupt("return");case 3:return console.log("Removing ".concat(n.toRemove)),r("setLoading",!0),t.next=7,oe.request(n.baseURL,n.key,n.toRemove);case 7:a=t.sent,r("setLoading",!1),a.error?r("setError",a.message):r("setGeneratedURL",a.response.image_url);case 10:case"end":return t.stop()}}),t)})))()}},getters:{getGeneratedURL:function(e){return e.generatedURL},getBaseURL:function(e){return e.baseURL},isBaseURLValid:function(e){return e.baseValid},isGeneratedURLValid:function(e){return e.generatedValid},isLoading:function(e){return e.loading},hasErrored:function(e){return e.error},getErrorMessage:function(e){return e.errorMessage}}});new a["a"]({render:function(e){return e(Y)},store:ie}).$mount("#app")}});
//# sourceMappingURL=app.2ba81470.js.map