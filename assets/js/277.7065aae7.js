(window.webpackJsonp=window.webpackJsonp||[]).push([[277],{564:function(a,n,s){"use strict";s.r(n);var t=s(29),o=Object(t.a)({},(function(){var a=this,n=a.$createElement,s=a._self._c||n;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"platform"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#platform"}},[a._v("#")]),a._v(" Platform "),s("Badge",{attrs:{text:"Service",type:"service"}})],1),a._v(" "),s("section",{staticClass:"symbol-info"},[s("table",{staticClass:"is-full-width"},[s("tbody",[s("tr",[s("th",[a._v("Module")]),s("td",[s("div",{staticClass:"lang-typescript"},[s("span",{staticClass:"token keyword"},[a._v("import")]),a._v(" { Platform } "),s("span",{staticClass:"token keyword"},[a._v("from")]),a._v(" "),s("span",{staticClass:"token string"},[a._v('"@tsed/common"')])])])]),s("tr",[s("th",[a._v("Source")]),s("td",[s("a",{attrs:{href:"https://github.com/TypedProject/tsed/blob/v5.48.0/packages/common/src/platform/services/Platform.ts#L0-L0"}},[a._v("/packages/common/src/platform/services/Platform.ts")])])])])])]),a._v(" "),s("h2",{attrs:{id:"overview"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[a._v("#")]),a._v(" Overview")]),a._v(" "),s("div",{staticClass:"language-typescript"},[s("pre",{pre:!0,attrs:{class:"language-typescript"}},[s("code",{pre:!0,attrs:{class:"typescript-lang "}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" Platform "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("readonly")]),a._v(" injector"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("a",{pre:!0,attrs:{href:"/api/di/services/InjectorService.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[a._v("InjectorService")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("readonly")]),a._v(" platformApplication"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("a",{pre:!0,attrs:{href:"/api/common/platform/services/PlatformApplication.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[a._v("PlatformApplication")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("readonly")]),a._v(" platformHandler"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("a",{pre:!0,attrs:{href:"/api/common/platform/services/PlatformHandler.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[a._v("PlatformHandler")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("div",{pre:!0,attrs:{class:"language- extra-class"}},[s("pre",[s("code",[a._v('<span class="token keyword">constructor</span><span class="token punctuation">(</span>injector<span class="token punctuation">:</span> <a href="/api/di/services/InjectorService.html"><span class="token">InjectorService</span></a><span class="token punctuation">,</span> platformApplication<span class="token punctuation">:</span> <a href="/api/common/platform/services/PlatformApplication.html"><span class="token">PlatformApplication</span></a><span class="token punctuation">,</span> platformHandler<span class="token punctuation">:</span> <a href="/api/common/platform/services/PlatformHandler.html"><span class="token">PlatformHandler</span></a><span class="token punctuation">)</span><span class="token punctuation">;</span>\nget <span class="token function">app</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <a href="/api/common/platform/services/PlatformApplication.html"><span class="token">PlatformApplication</span></a><span class="token punctuation">;</span>\nget <span class="token function">routes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <a href="/api/common/platform/interfaces/IRouteController.html"><span class="token">IRouteController</span></a><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n/**\n * Create a native metadata base on the metadata or to the given Class.\n * @param handler\n */\n<span class="token function">createHandler</span><span class="token punctuation">(</span>handler<span class="token punctuation">:</span> <a href="/api/common/mvc/models/HandlerMetadata.html"><span class="token">HandlerMetadata</span></a> | <span class="token keyword">any</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">any</span><span class="token punctuation">;</span>\n/**\n * Create routers <span class="token keyword">from</span> the collected controllers\n */\n<span class="token function">createRoutersFromControllers</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token keyword">import</span><span class="token punctuation">(</span>".."<span class="token punctuation">)</span>.<a href="/api/common/platform/interfaces/IPlatformDriver.html"><span class="token">IPlatformDriver</span></a>&lt;<span class="token keyword">any</span>&gt; | undefined<span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n/**\n * Create a new instance of <a href="/api/common/platform/services/PlatformRouter.html"><span class="token">PlatformRouter</span></a>\n * @param routerOptions\n */\n<span class="token function">createRouter</span><span class="token punctuation">(</span>routerOptions?<span class="token punctuation">:</span> <span class="token keyword">any</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <a href="/api/common/platform/services/PlatformRouter.html"><span class="token">PlatformRouter</span></a><span class="token punctuation">;</span>\n<span class="token function">addRoutes</span><span class="token punctuation">(</span>routes<span class="token punctuation">:</span> <a href="/api/common/platform/interfaces/IRoute.html"><span class="token">IRoute</span></a><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>\n<span class="token function">addRoute</span><span class="token punctuation">(</span>endpoint<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">,</span> token<span class="token punctuation">:</span> <a href="/api/di/interfaces/TokenProvider.html"><span class="token">TokenProvider</span></a><span class="token punctuation">)</span><span class="token punctuation">:</span> this<span class="token punctuation">;</span>\n/**\n * <a href="/api/common/mvc/decorators/method/Get.html"><span class="token">Get</span></a> all routes built by TsExpressDecorators and mounted on Express application.\n * @returns <span class="token punctuation">{</span><a href="/api/common/platform/interfaces/IRouteDetails.html"><span class="token">IRouteDetails</span></a><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span>\n */\n<span class="token function">getRoutes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <a href="/api/common/platform/interfaces/IRouteDetails.html"><span class="token">IRouteDetails</span></a><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n/**\n *\n * @param ctrl\n * @param endpointUrl\n */\n')])])]),s("p",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")])])])])]),s("p"),a._v(" "),s("h2",{attrs:{id:"description"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[a._v("#")]),a._v(" Description")]),a._v(" "),s("div",{pre:!0},[s("p",[s("code",[a._v("Platform")]),a._v(" is used to provide all routes collected by annotation "),s("code",[a._v("@Controller")]),a._v(".")])])])}),[],!1,null,null,null);n.default=o.exports}}]);