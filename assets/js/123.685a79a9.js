(window.webpackJsonp=window.webpackJsonp||[]).push([[123],{1133:function(t,s,a){"use strict";a.r(s);var n=a(1),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"router-导航路由"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#router-导航路由","aria-hidden":"true"}},[t._v("#")]),t._v(" Router 导航路由")]),t._v(" "),a("h3",{attrs:{id:"基础用法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基础用法","aria-hidden":"true"}},[t._v("#")]),t._v(" 基础用法")]),t._v(" "),a("ClientOnly",[a("block-router-demo",{attrs:{blockName:"defaultRouter",onlineDemo:"https://codepen.io/w3cmark/pen/mdbLaaw"}})],1),t._v(" "),a("h3",{attrs:{id:"slotblocks-配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#slotblocks-配置","aria-hidden":"true"}},[t._v("#")]),t._v(" slotBlocks 配置")]),t._v(" "),a("h4",{attrs:{id:"菜单头部slot-block"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#菜单头部slot-block","aria-hidden":"true"}},[t._v("#")]),t._v(" 菜单头部slot block")]),t._v(" "),a("p",[t._v("配置子block的slot为"),a("code",[t._v("menuTop")]),t._v("，可以插入在菜单头部")]),t._v(" "),a("ClientOnly",[a("block-router-demo",{attrs:{blockName:"menuTopRouter",onlineDemo:"https://codepen.io/w3cmark/pen/rNBvooE"}})],1),t._v(" "),a("h4",{attrs:{id:"菜单底部slot-block"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#菜单底部slot-block","aria-hidden":"true"}},[t._v("#")]),t._v(" 菜单底部slot block")]),t._v(" "),a("p",[t._v("配置子block的slot为"),a("code",[t._v("menuBottom")]),t._v("，可以插入在菜单底部")]),t._v(" "),a("ClientOnly",[a("block-router-demo",{attrs:{blockName:"menuBottomRouter",onlineDemo:"https://codepen.io/w3cmark/pen/mdbLavw"}})],1),t._v(" "),a("h4",{attrs:{id:"导航的位置slot-block"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#导航的位置slot-block","aria-hidden":"true"}},[t._v("#")]),t._v(" 导航的位置slot block")]),t._v(" "),a("p",[t._v("配置子block的slot为"),a("code",[t._v("nav")]),t._v("，可以插入在导航的位置。比如下面例子插入了两个操作按钮“反馈”和“帮助”。")]),t._v(" "),a("ClientOnly",[a("block-router-demo",{attrs:{blockName:"navRouter",onlineDemo:"https://codepen.io/w3cmark/pen/KKPRbJr"}})],1),t._v(" "),a("h3",{attrs:{id:"结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#结构","aria-hidden":"true"}},[t._v("#")]),t._v(" 结构")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Route")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" string"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 路由地址")]),t._v("\n  name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" string"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 路由名")]),t._v("\n  block"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" string"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 渲染block名")]),t._v("\n  redirect"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" string"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 重定向地址")]),t._v("\n  children"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Array"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Route"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 子路由")]),t._v("\n  meta"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    icon"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" string"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 对应的图标：参考http://element-cn.eleme.io/#/zh-CN/component/icon，如 'info' 对应 'el-icon-info'")]),t._v("\n    hasMenu"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" boolean"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 是否显示导航菜单面包屑，默认true")]),t._v("\n    hidden"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" boolean"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 是否在左侧导航菜单显示，默认false")]),t._v("\n    roles"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Array"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("string"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 路由权限角色，data内包含对应的角色才可见改路由")]),t._v("\n    noRedirect"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" boolean"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 对应面包屑是否禁用跳转，默认为false")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RouterBlock")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'router'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    router"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      mode"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hash"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"history"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"abstract"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      base"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 更多选项参考：https://router.vuejs.org/zh/api/#linkexactactiveclass")]),t._v("\n      showMenu"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 默认为true, false时隐藏所有路由菜单  0.8.6+支持")]),t._v("\n      routes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Array"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Route"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      defaultBreadcrumb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 默认为true，会把首个route作为默认首页加到所有面包屑，设置为false禁用此行为， 0.7.5+支持")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    data"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      roles"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Array"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("string"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 当前用户权限角色，用户需要包含路由要求的roles权限才能看到对应菜单")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    on"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这里可以在生成router实例时注册事件，如beforeEach，详见 [ Router 实例方法 ](https://router.vuejs.org/zh/api/#router-%E5%AE%9E%E4%BE%8B%E6%96%B9%E6%B3%95)")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])],1)}),[],!1,null,null,null);s.default=e.exports}}]);