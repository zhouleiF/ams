(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{1061:function(e,t,i){"use strict";i.r(t);var o=i(127),l={textField1:{type:"form",resource:{fields:{textField:{type:"text",label:"文本",props:{placeholder:"请输入内容"}}}},ctx:"edit"},textField2:{type:"form",resource:{fields:{textField:{type:"text",label:"文本",props:{placeholder:"请输入内容",disabled:!0}}}},ctx:"edit"},textField3:{type:"form",resource:{fields:{textField:{type:"text",label:"文本",props:{placeholder:"请输入内容",clearble:!0}}}},data:{textField:"鼠标经过，左边会出现清空按钮"},ctx:"edit"},textField4:{type:"form",resource:{fields:{textFieldA:{type:"text",label:"文本",props:{placeholder:"请输入内容","prefix-icon":"el-icon-search"}},textFieldB:{type:"text",label:"文本",props:{placeholder:"请输入内容","suffix-icon":"el-icon-service"}}}},ctx:"edit",style:{width:"50%"}},textField5:{type:"form",resource:{fields:{textField:{type:"text",label:"文本",rules:[{required:!0,message:"请输入活动名称",trigger:"blur"},{min:3,max:5,message:"长度在 3 到 5 个字符",trigger:"blur"}],props:{placeholder:"请输入内容"}}}},ctx:"edit",style:{width:"50%"},events:{submit:"@validate @create"},operations:{submit:{type:"button",label:"提交"}}}},s=i(138),a=i.n(s),n=i(137),c=i.n(n),r={mixins:[o.a],mounted:function(){var e=a()(l[this.blockName]);this.configCode=c()(e,{indent_size:2,space_in_empty_paren:!0}),ams&&ams.blocks&&ams.blocks[this.blockName]?this.init=!0:(ams.block(this.blockName,l[this.blockName]),this.init=!0)}},d=i(1),p=Object(d.a)(r,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("el-card",{staticClass:"demo demo-card",attrs:{shadow:"hover"}},[e.init?i("ams-block",{staticClass:"demo-card-preview",attrs:{name:e.blockName}}):e._e(),e._v(" "),i("div",{class:"demo-card-config "+(e.showConfig?"open":"")},[i("highlight-code",{attrs:{lang:"javascript"}},[e._v("\n            "+e._s(e.configCode)+"\n        ")])],1),e._v(" "),i("div",{staticClass:"demo-card-config-btn",on:{click:e.toggleDemoCofig}},[i("i",{class:"el-icon-caret-"+(e.showConfig?"top":"bottom")}),e._v("\n         "+e._s(e.showConfig?"隐藏":"显示")+"配置\n        "),e.onlineDemo?i("el-link",{attrs:{href:e.onlineDemo,target:"_blank",type:"success"}},[e._v("在线运行")]):e._e()],1)],1)}),[],!1,null,null,null);t.default=p.exports},125:function(e,t,i){"use strict";var o=i(0),l=(i(131),i(130)),s=i.n(l),a=i(128),n=i(136),c=i(132),r=i.n(c),d=(i(133),i(134)),p=i.n(d),f=i(135),u=i.n(f);o.default.use(s.a),o.default.use(a.default),console.log("ams init config"),o.default.use(p.a),o.default.use(u.a),"undefined"!=typeof window&&(window.Vue=o.default),o.default.use(n.a,{languages:{javascript:r.a}}),a.default.config({resource:{api:{withCredentials:!1}}})},127:function(e,t,i){"use strict";i(125);t.a={data:function(){return{init:!1,showConfig:!1,configCode:"",codeBlock:{type:"form",data:{code:""},resource:{fields:{code:{type:"ams-code",labelWidth:"0"}}}}}},props:{blockName:String,onlineDemo:String},methods:{toggleDemoCofig:function(e){"el-link--inner"!==e.target.className&&(this.showConfig=!this.showConfig)}}}}}]);