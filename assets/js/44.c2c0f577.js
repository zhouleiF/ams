(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{1082:function(e,o,i){"use strict";i.r(o);var t=i(127),a={audioField1:{type:"form",resource:{fields:{audioFieldA:{type:"audio",label:"音频"},audioFieldB:{type:"audio",label:"限制大小",tip:"不超过500kb",successUrlKey:"url",check:{maxSizeInKB:500}},audioFieldC:{type:"audio",label:"音频",successUrlKey:"url",props:{"button-label":"自定义"}}}},ctx:"edit"}},s=i(138),n=i.n(s),l=i(137),c=i.n(l),d={mixins:[t.a],mounted:function(){var e=n()(a[this.blockName]);this.configCode=c()(e,{indent_size:2,space_in_empty_paren:!0}),ams&&ams.blocks&&ams.blocks[this.blockName]?this.init=!0:(ams.block(this.blockName,a[this.blockName]),this.init=!0)}},r=i(1),u=Object(r.a)(d,(function(){var e=this,o=e.$createElement,i=e._self._c||o;return i("el-card",{staticClass:"demo demo-card",attrs:{shadow:"hover"}},[e.init?i("ams-block",{staticClass:"demo-card-preview",attrs:{name:e.blockName}}):e._e(),e._v(" "),i("div",{class:"demo-card-config "+(e.showConfig?"open":"")},[i("highlight-code",{attrs:{lang:"javascript"}},[e._v("\n            "+e._s(e.configCode)+"\n        ")])],1),e._v(" "),i("div",{staticClass:"demo-card-config-btn",on:{click:e.toggleDemoCofig}},[i("i",{class:"el-icon-caret-"+(e.showConfig?"top":"bottom")}),e._v("\n         "+e._s(e.showConfig?"隐藏":"显示")+"配置\n        "),e.onlineDemo?i("el-link",{attrs:{href:e.onlineDemo,target:"_blank",type:"success"}},[e._v("在线运行")]):e._e()],1)],1)}),[],!1,null,null,null);o.default=u.exports},125:function(e,o,i){"use strict";var t=i(0),a=(i(131),i(130)),s=i.n(a),n=i(128),l=i(136),c=i(132),d=i.n(c),r=(i(133),i(134)),u=i.n(r),f=i(135),m=i.n(f);t.default.use(s.a),t.default.use(n.default),console.log("ams init config"),t.default.use(u.a),t.default.use(m.a),"undefined"!=typeof window&&(window.Vue=t.default),t.default.use(l.a,{languages:{javascript:d.a}}),n.default.config({resource:{api:{withCredentials:!1}}})},127:function(e,o,i){"use strict";i(125);o.a={data:function(){return{init:!1,showConfig:!1,configCode:"",codeBlock:{type:"form",data:{code:""},resource:{fields:{code:{type:"ams-code",labelWidth:"0"}}}}}},props:{blockName:String,onlineDemo:String},methods:{toggleDemoCofig:function(e){"el-link--inner"!==e.target.className&&(this.showConfig=!this.showConfig)}}}}}]);