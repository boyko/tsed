(window.webpackJsonp=window.webpackJsonp||[]).push([[285],{572:function(t,s,n){"use strict";n.r(s);var a=n(29),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"entitydescription"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#entitydescription"}},[t._v("#")]),t._v(" EntityDescription "),n("Badge",{attrs:{text:"Class",type:"class"}})],1),t._v(" "),n("section",{staticClass:"symbol-info"},[n("table",{staticClass:"is-full-width"},[n("tbody",[n("tr",[n("th",[t._v("Module")]),n("td",[n("div",{staticClass:"lang-typescript"},[n("span",{staticClass:"token keyword"},[t._v("import")]),t._v(" { EntityDescription } "),n("span",{staticClass:"token keyword"},[t._v("from")]),t._v(" "),n("span",{staticClass:"token string"},[t._v('"@tsed/core"')])])])]),n("tr",[n("th",[t._v("Source")]),n("td",[n("a",{attrs:{href:"https://github.com/TypedProject/tsed/blob/v5.48.0/packages/core/src/class/EntityDescription.ts#L0-L0"}},[t._v("/packages/core/src/class/EntityDescription.ts")])])])])])]),t._v(" "),n("h2",{attrs:{id:"overview"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[t._v("#")]),t._v(" Overview")]),t._v(" "),n("div",{staticClass:"language-typescript"},[n("pre",{pre:!0,attrs:{class:"language-typescript"}},[n("code",{pre:!0,attrs:{class:"typescript-lang "}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("abstract")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" EntityDescription "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" _target"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("a",{pre:!0,attrs:{href:"/api/core/interfaces/Type.html"}},[n("span",{pre:!0,attrs:{class:"token"}},[t._v("Type")])]),t._v("<"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("any")]),t._v(">"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    /**\n     * Custom name.\n     */\n    name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    /**\n     * Index of the entity. Only used when the entity describe a parameters.\n     */\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("readonly")]),t._v(" index"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("number")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    /**\n     *\n     */\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("readonly")]),t._v(" propertyKey"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),t._v(" | symbol"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    /**\n     * "),n("a",{pre:!0,attrs:{href:"/api/core/interfaces/Type.html"}},[n("span",{pre:!0,attrs:{class:"token"}},[t._v("Type")])]),t._v(" of the collection "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Array"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Map"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Set"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" etc..."),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n     */\n    collectionType"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("a",{pre:!0,attrs:{href:"/api/core/interfaces/Type.html"}},[n("span",{pre:!0,attrs:{class:"token"}},[t._v("Type")])]),t._v("<"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("any")]),t._v(">"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    /**\n     * "),n("a",{pre:!0,attrs:{href:"/api/common/mvc/decorators/Required.html"}},[n("span",{pre:!0,attrs:{class:"token"}},[t._v("Required")])]),t._v(" entity.\n     */\n    required"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    /**\n     * Allowed value when the entity is required.\n     * @type "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("Array"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n     */\n    allowedRequiredValues"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("any")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    /**\n     * "),n("a",{pre:!0,attrs:{href:"/api/core/interfaces/Type.html"}},[n("span",{pre:!0,attrs:{class:"token"}},[t._v("Type")])]),t._v(" of the entity.\n     */\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" _type"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("a",{pre:!0,attrs:{href:"/api/core/interfaces/Type.html"}},[n("span",{pre:!0,attrs:{class:"token"}},[t._v("Type")])]),t._v("<"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("any")]),t._v(">"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("constructor")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("_target"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("a",{pre:!0,attrs:{href:"/api/core/interfaces/Type.html"}},[n("span",{pre:!0,attrs:{class:"token"}},[t._v("Type")])]),t._v("<"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("any")]),t._v(">"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" propertyKey"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),t._v(" | symbol"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" index?"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("number")]),t._v(" | PropertyDescriptor"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    /**\n     * Class of the entity.\n     * @returns "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("a",{pre:!0,attrs:{href:"/api/core/interfaces/Type.html"}},[n("span",{pre:!0,attrs:{class:"token"}},[t._v("Type")])]),t._v("<"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("any")]),t._v(">"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n     */\n    get "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("target")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("a",{pre:!0,attrs:{href:"/api/core/interfaces/Type.html"}},[n("span",{pre:!0,attrs:{class:"token"}},[t._v("Type")])]),t._v("<"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("any")]),t._v(">"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    /**\n     *\n     * @param "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("a",{pre:!0,attrs:{href:"/api/core/interfaces/Type.html"}},[n("span",{pre:!0,attrs:{class:"token"}},[t._v("Type")])]),t._v("<"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("any")]),t._v(">"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" target\n     */\n    set "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("target")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("target"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("a",{pre:!0,attrs:{href:"/api/core/interfaces/Type.html"}},[n("span",{pre:!0,attrs:{class:"token"}},[t._v("Type")])]),t._v("<"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("any")]),t._v(">"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    /**\n     * Return the "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" name of the entity.\n     * @returns "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n     */\n    get "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("targetName")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    /**\n     *\n     * @returns "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("a",{pre:!0,attrs:{href:"/api/core/interfaces/Type.html"}},[n("span",{pre:!0,attrs:{class:"token"}},[t._v("Type")])]),t._v("<"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("any")]),t._v(">"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n     */\n    get "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("type")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("a",{pre:!0,attrs:{href:"/api/core/interfaces/Type.html"}},[n("span",{pre:!0,attrs:{class:"token"}},[t._v("Type")])]),t._v("<"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("any")]),t._v(">"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    /**\n     *\n     * @param value\n     */\n    set "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("type")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("a",{pre:!0,attrs:{href:"/api/core/interfaces/Type.html"}},[n("span",{pre:!0,attrs:{class:"token"}},[t._v("Type")])]),t._v("<"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("any")]),t._v(">"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    /**\n     *\n     * @returns "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n     */\n    get "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("typeName")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    /**\n     *\n     * @returns "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n     */\n    get "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("collectionName")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    /**\n     *\n     * @returns "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n     */\n    get "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("isCollection")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    /**\n     *\n     * @returns "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n     */\n    get "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("isArray")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    /**\n     *\n     * @returns "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n     */\n    get "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("isPrimitive")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    /**\n     *\n     * @returns "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n     */\n    get "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("isDate")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    /**\n     *\n     * @returns "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n     */\n    get "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("isObject")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    /**\n     *\n     * @returns "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n     */\n    get "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("isClass")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    /**\n     * Check precondition between value"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" required and allowedRequiredValues to know if the entity is required.\n     * @param value\n     * @returns "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n     */\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("isRequired")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("any")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),t._v(" "),n("h2",{attrs:{id:"description"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" Description")]),t._v(" "),n("div",{pre:!0},[n("p",[t._v("EntityDescription store all information collected by a decorator (class, property key and in option the index of the parameters).")])])])}),[],!1,null,null,null);s.default=e.exports}}]);