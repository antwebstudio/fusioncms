(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{SdmW:function(e,t,n){"use strict";n.r(t);var l={name:"number-fieldtype",props:{field:{type:Object,required:!0},value:{type:[String,Number],required:!1,default:null}},methods:{pad:function(e){for(var t="1";t.length<e;)t="0"+t;return Number("0."+t.substr(-e,e))}}},i=n("KHd+"),s=Object(i.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("p-number",{attrs:{name:e.field.handle,label:e.field.name,help:e.field.help,placeholder:e.field.settings.placeholder,value:e.value,steps:e.field.settings.steps,decimals:e.field.settings.decimals,min:Number(e.field.settings.min),max:Number(e.field.settings.max)},on:{input:function(t){return e.$emit("input",t)}}},[n("template",{slot:"decrease"},[n("fa-icon",{attrs:{icon:"minus"}})],1),e._v(" "),n("template",{slot:"increase"},[n("fa-icon",{attrs:{icon:"plus"}})],1)],2)],1)}),[],!1,null,null,null);t.default=s.exports}}]);