(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{t3BN:function(e,t,n){"use strict";n.r(t);var i={name:"select-fieldtype",props:{field:{type:Object,required:!0},value:{required:!1,default:""}},computed:{options:function(){return this.field.settings.options}},created:function(){var e=_.findIndex(this.options,function(e){return 1==e.checked});-1===e||this.value||this.$emit("input",this.options[e].value)}},l=n("KHd+"),u=Object(l.a)(i,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("p-select",{attrs:{name:e.field.handle,label:e.field.name,help:e.field.help,value:e.value,options:e.options},on:{input:function(t){return e.$emit("input",t)}}})],1)},[],!1,null,null,null);t.default=u.exports}}]);