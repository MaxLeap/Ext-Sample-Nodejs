webpackJsonp([1],{140:function(t,e){},141:function(t,e){},142:function(t,e){},143:function(t,e){},144:function(t,e){},145:function(t,e){},146:function(t,e){},147:function(t,e){},148:function(t,e){},158:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",{class:["vux-badge",{"vux-badge-dot":void 0===t.text,"vux-badge-single":void 0!==t.text&&1===t.text.toString().length}],domProps:{textContent:t._s(t.text)}})},staticRenderFns:[]}},159:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"weui-tabbar"},[t._t("default")],2)},staticRenderFns:[]}},160:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",{staticClass:"vux-label-desc"},[t._t("default")],2)},staticRenderFns:[]}},161:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vux-toast"},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowMask&&t.show,expression:"isShowMask && show"}],staticClass:"weui-mask_transparent"}),t._v(" "),n("transition",{attrs:{name:t.currentTransition}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"weui-toast",class:t.toastClass,style:{width:t.width}},[n("i",{directives:[{name:"show",rawName:"v-show",value:"text"!==t.type,expression:"type !== 'text'"}],staticClass:"weui-icon-success-no-circle weui-icon_toast"}),t._v(" "),t.text?n("p",{staticClass:"weui-toast__content",style:t.style,domProps:{innerHTML:t._s(t.text)}}):n("p",{staticClass:"weui-toast__content",style:t.style},[t._t("default")],2)])])],1)},staticRenderFns:[]}},162:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:t.transition}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"weui-loading_toast vux-loading"},[n("div",{staticClass:"weui-mask_transparent"}),t._v(" "),n("div",{staticClass:"weui-toast",style:{position:t.position}},[n("i",{staticClass:"weui-loading weui-icon_toast"}),t._v(" "),n("p",{staticClass:"weui-toast__content"},[t._v(t._s(t.text||"加载中")),t._t("default")],2)])])])},staticRenderFns:[]}},163:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"weui-tabbar__item",class:{"weui-bar__item_on":t.isActive,"vux-tabbar-simple":t.simple},attrs:{href:"javascript:;"},on:{click:function(e){t.onItemClick(!0)}}},[t.simple?t._e():n("div",{staticClass:"weui-tabbar__icon",class:[t.iconClass||t.$parent.iconClass,{"vux-reddot":t.showDot}]},[t.simple||t.hasActiveIcon&&t.isActive?t._e():t._t("icon"),t._v(" "),!t.simple&&t.hasActiveIcon&&t.isActive?t._t("icon-active"):t._e(),t._v(" "),t.badge?n("sup",[n("badge",{attrs:{text:t.badge}})],1):t._e()],2),t._v(" "),n("p",{staticClass:"weui-tabbar__label"},[t._t("label")],2)])},staticRenderFns:[]}},164:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.title?n("div",{staticClass:"weui-cells__title",style:{color:t.titleColor},domProps:{innerHTML:t._s(t.title)}}):t._e(),t._v(" "),t._t("title"),t._v(" "),n("div",{staticClass:"weui-cells",class:{"vux-no-group-title":!t.title},style:{marginTop:"number"==typeof t.gutter?t.gutter+"px":t.gutter}},[t._t("after-title"),t._v(" "),t._t("default")],2)],2)},staticRenderFns:[]}},165:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"weui-cell",class:{"vux-tap-active":t.isLink||!!t.link,"weui-cell_access":t.isLink||!!t.link,"vux-cell-no-border-intent":!t.borderIntent,"vux-cell-disabled":t.disabled},style:t.style,on:{click:t.onClick}},[n("div",{staticClass:"weui-cell__hd"},[t._t("icon")],2),t._v(" "),n("div",{staticClass:"vux-cell-bd",class:{"vux-cell-primary":"title"===t.primary&&"left"!==t.valueAlign}},[n("p",[t.title||t.hasTitleSlot?n("label",{staticClass:"vux-label",class:t.labelClass,style:t.getLabelStyles()},[t._t("title",[t._v(t._s(t.title))])],2):t._e(),t._v(" "),t._t("after-title")],2),t._v(" "),n("inline-desc",[t._t("inline-desc",[t._v(t._s(t.inlineDesc))])],2)],1),t._v(" "),n("div",{staticClass:"weui-cell__ft",class:t.valueClass},[t._t("value"),t._v(" "),t._t("default",[t._v(t._s(t.value))]),t._v(" "),t.isLoading?n("i",{staticClass:"weui-loading"}):t._e()],2),t._v(" "),t._t("child")],2)},staticRenderFns:[]}},166:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"weui-msg"},[n("div",{staticClass:"weui-msg__icon-area"},[n("i",{staticClass:"weui-icon_msg",class:"weui-icon-"+(t.icon||"success")})]),t._v(" "),n("div",{staticClass:"weui-msg__text-area"},[n("h2",{staticClass:"weui-msg__title",domProps:{innerHTML:t._s(t.title)}}),t._v(" "),n("p",{staticClass:"weui-msg__desc"},[t._t("description")],2),t._v(" "),t.description?n("p",{staticClass:"weui-msg__desc",domProps:{innerHTML:t._s(t.description)}}):t._e()]),t._v(" "),n("div",{staticClass:"weui-msg__opr-area"},[n("p",{staticClass:"weui-btn-area"},[t._t("buttons"),t._v(" "),t._l(t.buttons,function(e){return n("a",{staticClass:"weui-btn",class:"weui-btn_"+e.type,attrs:{href:"javascript:;"},on:{click:function(n){t.onClick(e.onClick,e.link)}}},[t._v(t._s(e.text))])})],2)])])},staticRenderFns:[]}},167:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",[n("loading",{attrs:{show:t.loading,text:"loading..."}}),t._v(" "),t.showError?n("msg",{attrs:{title:t.errorMessage,icon:"warn"}}):t._e(),t._v(" "),n("group",{attrs:{title:"DEBUG"}},[n("cell",{attrs:{title:"用户状态:",value:t.statusText}}),t._v(" "),n("cell",{attrs:{title:"服务器配置 mode:",value:t.serverConfig.mode}})],1)],1),t._v(" "),n("div",[n("div",[n("loading",{attrs:{show:t.loading,text:"loading..."}})],1),t._v(" "),n("group",{attrs:{title:"Books"}},t._l(t.books,function(t){return n("div",[n("cell",{attrs:{title:t.title,value:t.price+"元"}})],1)})),t._v(" "),n("group",{attrs:{title:"自定义协议"}},[n("cell",{attrs:{title:"登录页面",value:"演示不同平台下的链接跳转",link:t.loginLink,"is-link":""}})],1),t._v(" "),t.isNative?t._e():n("tabbar",t._l(t.appConfig.menu.h5Tab,function(e){return n("tabbar-item",{attrs:{selected:"",link:e.h5Url}},[n("img",{attrs:{slot:"icon",src:e.iconUrl},slot:"icon"}),t._v(" "),n("span",{attrs:{slot:"label"},slot:"label"},[t._v(t._s(e.title))])])}))],1)])},staticRenderFns:[]}},169:function(t,e,n){n(140);var s=n(3)(n(85),n(158),null,null);t.exports=s.exports},170:function(t,e,n){n(146);var s=n(3)(n(86),n(165),null,null);t.exports=s.exports},171:function(t,e,n){n(145);var s=n(3)(n(87),n(164),null,null);t.exports=s.exports},172:function(t,e,n){n(142);var s=n(3)(n(88),n(160),null,null);t.exports=s.exports},173:function(t,e,n){n(144);var s=n(3)(n(89),n(162),null,null);t.exports=s.exports},174:function(t,e,n){n(147);var s=n(3)(n(90),n(166),null,null);t.exports=s.exports},175:function(t,e,n){var s=n(3)(n(91),n(163),null,null);t.exports=s.exports},176:function(t,e,n){n(141);var s=n(3)(n(92),n(159),null,null);t.exports=s.exports},177:function(t,e,n){n(143);var s=n(3)(n(93),n(161),null,null);t.exports=s.exports},64:function(t,e,n){n(148);var s=n(3)(n(94),n(167),null,null);t.exports=s.exports},83:function(t,e,n){"use strict";n.d(e,"a",function(){return s}),n.d(e,"b",function(){return i});var s="/ext/leapcloud_ext_demo",i="https://h5serviceuat.leapcloud.cn/fed/v1/open/config"},84:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(63),i=n(62),a=n.n(i),r=n(64),o=n.n(r);a.a.attach(document.body),s.a.config.productionTip=!0,new s.a({el:"#app-box",render:function(t){return t(o.a)}})},85:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"badge",props:{text:[String,Number]}}},86:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(172),i=n.n(s),a=n(23),r=n(95);e.default={name:"cell",components:{InlineDesc:i.a},props:n.i(r.a)(),beforeMount:function(){this.hasTitleSlot=!!this.$slots.title},computed:{valueClass:function(){return{"vux-cell-primary":"content"===this.primary||"left"===this.valueAlign,"vux-cell-align-left":"left"===this.valueAlign,"vux-cell-arrow-transition":!!this.arrowDirection,"vux-cell-arrow-up":"up"===this.arrowDirection,"vux-cell-arrow-down":"down"===this.arrowDirection}},labelClass:function(){return{"vux-cell-justify":"justify"===this.$parent.labelAlign||"justify"===this.$parent.$parent.labelAlign}},style:function(){if(this.alignItems)return{alignItems:this.alignItems}}},methods:{getLabelStyles:function(){return{width:this.$parent.labelWidth||this.$parent.$parent.labelWidth,textAlign:this.$parent.labelAlign||this.$parent.$parent.labelAlign,marginRight:this.$parent.labelMarginRight||this.$parent.$parent.labelMarginRight}},onClick:function(){!this.disabled&&n.i(a.a)(this.link,this.$router)}},data:function(){return{hasTitleSlot:!1}}}},87:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"group",props:{title:String,titleColor:String,labelWidth:String,labelAlign:String,labelMarginRight:String,gutter:[String,Number]}}},88:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"inline-desc"}},89:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"loading",model:{prop:"show",event:"change"},props:{show:Boolean,text:String,position:String,transition:{type:String,default:"vux-mask"}},watch:{show:function(t){this.$emit("update:show",t)}}}},90:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(23);e.default={name:"msg",props:["icon","title","description","buttons"],methods:{onClick:function(t,e){"function"==typeof t&&t(),e&&n.i(s.a)(e,this.$router)}}}},91:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(42),i=n(169),a=n.n(i);e.default={name:"tabbar-item",components:{Badge:a.a},beforeMount:function(){this.$slots.icon||(this.simple=!0),this.$slots["icon-active"]&&(this.hasActiveIcon=!0)},mixins:[s.a],props:{showDot:{type:Boolean,default:!1},badge:String,link:[String,Object],iconClass:String},computed:{isActive:function(){return this.$parent.index===this.currentIndex}},data:function(){return{simple:!1,hasActiveIcon:!1}}}},92:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(42);e.default={name:"tabbar",mixins:[s.b],props:{iconClass:String}}},93:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(96);e.default={name:"toast",mixins:[s.a],props:{value:Boolean,time:{type:Number,default:2e3},type:{type:String,default:"success"},transition:String,width:{type:String,default:"7.6em"},isShowMask:{type:Boolean,default:!1},text:String,position:String},data:function(){return{show:!1}},created:function(){this.value&&(this.show=!0)},computed:{currentTransition:function(){return this.transition?this.transition:"top"===this.position?"vux-slide-from-top":"bottom"===this.position?"vux-slide-from-bottom":"vux-fade"},toastClass:function(){return{"weui-toast_forbidden":"warn"===this.type,"weui-toast_cancel":"cancel"===this.type,"weui-toast_success":"success"===this.type,"weui-toast_text":"text"===this.type,"vux-toast-top":"top"===this.position,"vux-toast-bottom":"bottom"===this.position,"vux-toast-middle":"middle"===this.position}},style:function(){if("text"===this.type&&"auto"===this.width)return{padding:"10px"}}},watch:{show:function(t){var e=this;t&&(this.$emit("input",!0),this.$emit("on-show"),this.fixSafariOverflowScrolling("auto"),clearTimeout(this.timeout),this.timeout=setTimeout(function(){e.show=!1,e.$emit("input",!1),e.$emit("on-hide"),e.fixSafariOverflowScrolling("touch")},this.time))},value:function(t){this.show=t}}}},94:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(97),i=n.n(s),a=n(102),r=n.n(a),o=n(43),l=n.n(o),u=n(100),c=n.n(u),p=n(173),d=n.n(p),f=n(177),v=n.n(f),h=n(174),_=n.n(h),g=n(171),m=n.n(g),w=n(170),x=n.n(w),b=n(176),C=n.n(b),y=n(175),k=n.n(y),S=n(65),M=n.n(S),T=n(150),$=n.n(T),I=n(83),A=n(152);e.default={name:"app",components:{Toast:v.a,Loading:d.a,Msg:_.a,Group:m.a,Cell:x.a,Tabbar:C.a,TabbarItem:k.a},data:function(){return{auth:{appId:"",sessionToken:"",userId:"",platform:""},loading:!0,books:[],showError:!1,errorMessage:"",serverConfig:{},statusText:"loading...",showTabBar:!0,user:{},appConfig:{menu:{h5Tab:[]},h5UrlInfo:{prefix:""}}}},computed:{loginLink:function(){return this.isNative?"https://www.maxwon.cn/member":"/maxh5/login?return_uri="+window.location.href},isSessionTokenValid:function(){return!(!this.auth.sessionToken||""==this.auth.sessionToken)},isNative:function(){var t=this.auth.platform;return!(!t||""==t)&&("ios"==(t=t.toLowerCase())||"android"==t)},leapCloudReqHeaders:function(){var t={"Content-Type":"application/json","X-ML-AppId":this.auth.appId,"X-ML-Session-Token":this.auth.sessionToken};return $.a.has(this.serverConfig,"apiKey")&&""!=this.serverConfig.apiKey&&(t["X-ML-ApiKey"]=this.serverConfig.apiKey),t}},created:function(){var t=this;return c()(r.a.mark(function e(){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.parseQueryString();case 2:return t.setStatusText(),t.setPlatformInfo(),e.next=6,l.a.all([t.fetchServerConfig(),t.fetchAppConfig(),t.fetchBooks()]);case 6:case"end":return e.stop()}},e,t)}))()},methods:{setPlatformInfo:function(){var t=this;return c()(r.a.mark(function e(){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.isNative?t.showTabBar=!1:t.showTabBar=!0;case 1:case"end":return e.stop()}},e,t)}))()},parseQueryString:function(){var t=this;return c()(r.a.mark(function e(){var n,s,i,a,o,l;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=A.parse(location.search),s=n.maxleap_appid,i=n.maxleap_sessiontoken,a=n.maxleap_userid,o=n.platform,s&&""!=s){e.next=8;break}return l="parseQueryString error: url 中 appId 不能为空.",t.loading=!1,t.showErrorMsg(l),e.abrupt("return");case 8:t.auth.appId=s,t.auth.sessionToken=i,t.auth.userId=a,t.auth.platform=o;case 12:case"end":return e.stop()}},e,t)}))()},setStatusText:function(){this.isSessionTokenValid?this.statusText="当前已经登录":this.statusText="当前未登录"},fetchServerConfig:function(){var t=this;return c()(r.a.mark(function e(){var n;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t,n.loading=!0,e.abrupt("return",M.a.get(I.a+"/api/serverConfig").then(function(t){n.loading=!1,n.serverConfig=t.data}).catch(function(t){n.loading=!1;var e=n.getErrorMsg(t);n.showErrorMsg("fetchServerConfig error: "+e)}));case 3:case"end":return e.stop()}},e,t)}))()},fetchAppConfig:function(){var t=this;return c()(r.a.mark(function e(){var n;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t,n.auth.appId){e.next=3;break}return e.abrupt("return",!1);case 3:return n.loading=!0,e.abrupt("return",M.a.get(I.b,{headers:t.leapCloudReqHeaders}).then(function(t){n.loading=!1,n.appConfig=t.data}).catch(function(t){n.loading=!1,n.showErrorMsg("fetchAppConfig error: "+message)}));case 5:case"end":return e.stop()}},e,t)}))()},fetchBooks:function(){var t=this;return c()(r.a.mark(function e(){var n,s;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t,n.loading=!0,s=I.a+"/api/books",e.abrupt("return",M.a.get(s).then(function(t){n.loading=!1,n.books=t.data}).catch(function(t){n.loading=!1;var e=n.getErrorMsg(t);n.showErrorMsg("fetchBooks error: "+e)}));case 4:case"end":return e.stop()}},e,t)}))()},showErrorMsg:function(t){var e=this;e.showError=!0,e.errorMessage=t},getErrorMsg:function(t){var e=t.message;return t.response&&(e=t.response.status+" "+i()(t.response.data)),e}}}}},[84]);
//# sourceMappingURL=app.c99747496270bebc19a6.js.map