(window.webpackJsonp=window.webpackJsonp||[]).push([[404],{692:function(s,a,n){"use strict";n.r(a);var t=n(29),e=Object(t.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"globalproviderregistry"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#globalproviderregistry"}},[s._v("#")]),s._v(" GlobalProviderRegistry "),n("Badge",{attrs:{text:"Class",type:"class"}})],1),s._v(" "),n("section",{staticClass:"symbol-info"},[n("table",{staticClass:"is-full-width"},[n("tbody",[n("tr",[n("th",[s._v("Module")]),n("td",[n("div",{staticClass:"lang-typescript"},[n("span",{staticClass:"token keyword"},[s._v("import")]),s._v(" { GlobalProviderRegistry } "),n("span",{staticClass:"token keyword"},[s._v("from")]),s._v(" "),n("span",{staticClass:"token string"},[s._v('"@tsed/di"')])])])]),n("tr",[n("th",[s._v("Source")]),n("td",[n("a",{attrs:{href:"https://github.com/TypedProject/tsed/blob/v5.48.0/packages/di/src/registries/GlobalProviders.ts#L0-L0"}},[s._v("/packages/di/src/registries/GlobalProviders.ts")])])])])])]),s._v(" "),n("h2",{attrs:{id:"overview"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[s._v("#")]),s._v(" Overview")]),s._v(" "),n("div",{staticClass:"language-typescript"},[n("pre",{pre:!0,attrs:{class:"language-typescript"}},[n("code",{pre:!0,attrs:{class:"typescript-lang "}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" GlobalProviderRegistry "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("extends")]),s._v(" "),n("a",{pre:!0,attrs:{href:"/api/core/class/Registry.html"}},[n("span",{pre:!0,attrs:{class:"token"}},[s._v("Registry")])]),s._v("<"),n("a",{pre:!0,attrs:{href:"/api/di/class/Provider.html"}},[n("span",{pre:!0,attrs:{class:"token"}},[s._v("Provider")])]),s._v("<"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("any")]),s._v(">"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("a",{pre:!0,attrs:{href:"/api/di/interfaces/IProvider.html"}},[n("span",{pre:!0,attrs:{class:"token"}},[s._v("IProvider")])]),s._v("<"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("any")]),s._v(">> "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    /**\n     * Internal Map\n     * @type "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("Array"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n     */\n"),n("div",{pre:!0,attrs:{class:"language- extra-class"}},[n("pre",[n("code",[s._v('<span class="token keyword">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n/**\n *\n * @param <span class="token punctuation">{</span><span class="token keyword">string</span><span class="token punctuation">}</span> type\n * @param <span class="token punctuation">{</span><a href="/api/core/interfaces/Type.html"><span class="token">Type</span></a>&lt;<a href="/api/di/class/Provider.html"><span class="token">Provider</span></a>&lt;<span class="token keyword">any</span>&gt;&gt;<span class="token punctuation">}</span> model\n * @param options\n * @returns <span class="token punctuation">{</span><a href="/api/core/class/Registry.html"><span class="token">Registry</span></a>&lt;<a href="/api/di/class/Provider.html"><span class="token">Provider</span></a>&lt;<span class="token keyword">any</span>&gt;<span class="token punctuation">,</span> <a href="/api/di/interfaces/IProvider.html"><span class="token">IProvider</span></a>&lt;<span class="token keyword">any</span>&gt;&gt;<span class="token punctuation">}</span>\n */\n<span class="token function">createRegistry</span><span class="token punctuation">(</span>type<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">,</span> model<span class="token punctuation">:</span> <a href="/api/core/interfaces/Type.html"><span class="token">Type</span></a>&lt;<a href="/api/di/class/Provider.html"><span class="token">Provider</span></a>&lt;<span class="token keyword">any</span>&gt;&gt;<span class="token punctuation">,</span> options?<span class="token punctuation">:</span> Partial&lt;<a href="/api/di/interfaces/RegistrySettings.html"><span class="token">RegistrySettings</span></a>&gt;<span class="token punctuation">)</span><span class="token punctuation">:</span> <a href="/api/di/interfaces/TypedProvidersRegistry.html"><span class="token">TypedProvidersRegistry</span></a><span class="token punctuation">;</span>\n/**\n *\n * @param <span class="token punctuation">{</span><span class="token keyword">string</span> | <a href="/api/di/interfaces/TokenProvider.html"><span class="token">TokenProvider</span></a><span class="token punctuation">}</span> target\n * @returns <span class="token punctuation">{</span><a href="/api/di/interfaces/RegistrySettings.html"><span class="token">RegistrySettings</span></a> | undefined<span class="token punctuation">}</span>\n */\n<span class="token function">getRegistrySettings</span><span class="token punctuation">(</span>target<span class="token punctuation">:</span> <span class="token keyword">string</span> | <a href="/api/di/interfaces/TokenProvider.html"><span class="token">TokenProvider</span></a><span class="token punctuation">)</span><span class="token punctuation">:</span> <a href="/api/di/interfaces/RegistrySettings.html"><span class="token">RegistrySettings</span></a><span class="token punctuation">;</span>\n/**\n *\n * @returns <span class="token punctuation">{</span><span class="token punctuation">(</span>provider<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token keyword">any</span> | <a href="/api/di/interfaces/IProvider.html"><span class="token">IProvider</span></a>&lt;<span class="token keyword">any</span>&gt;<span class="token punctuation">)</span><span class="token punctuation">,</span> instance?<span class="token punctuation">:</span> <span class="token keyword">any</span><span class="token punctuation">)</span> =&gt; <span class="token keyword">void</span><span class="token punctuation">}</span>\n */\n<span class="token function">createRegisterFn</span><span class="token punctuation">(</span>type<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>provider<span class="token punctuation">:</span> <span class="token keyword">any</span><span class="token punctuation">,</span> instance?<span class="token punctuation">:</span> <span class="token keyword">any</span><span class="token punctuation">)</span> =&gt; <span class="token keyword">void</span><span class="token punctuation">;</span>\n/**\n *\n * @param <span class="token punctuation">{</span><span class="token keyword">string</span> | <a href="/api/di/interfaces/TokenProvider.html"><span class="token">TokenProvider</span></a><span class="token punctuation">}</span> target\n * @returns <span class="token punctuation">{</span><a href="/api/core/class/Registry.html"><span class="token">Registry</span></a>&lt;<a href="/api/di/class/Provider.html"><span class="token">Provider</span></a>&lt;<span class="token keyword">any</span>&gt;<span class="token punctuation">,</span> <a href="/api/di/interfaces/IProvider.html"><span class="token">IProvider</span></a>&lt;<span class="token keyword">any</span>&gt;&gt;<span class="token punctuation">}</span>\n */\n<span class="token function">getRegistry</span><span class="token punctuation">(</span>target<span class="token punctuation">:</span> <span class="token keyword">string</span> | <a href="/api/di/interfaces/TokenProvider.html"><span class="token">TokenProvider</span></a><span class="token punctuation">)</span><span class="token punctuation">:</span> <a href="/api/di/interfaces/TypedProvidersRegistry.html"><span class="token">TypedProvidersRegistry</span></a><span class="token punctuation">;</span>\n')])])]),n("p",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n/**\n*")]),s._v(" "),n("ul",[n("li",[s._v("@type "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),n("a",{pre:!0,attrs:{href:"/api/di/registries/GlobalProviders.html"}},[n("span",{pre:!0,attrs:{class:"token"}},[s._v("GlobalProviders")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n*/")])])])])])])}),[],!1,null,null,null);a.default=e.exports}}]);