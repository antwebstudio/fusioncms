(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{MxYC:function(e,t,a){"use strict";a.r(t);var s=a("dhqo"),i=a.n(s),n=a("ke3Z"),r={data:function(){return{collection:{},entry:{},form:{}}},computed:{sections:function(){var e=[],t=[];return this.collection.fieldset&&(e=_.filter(this.collection.fieldset.sections,(function(e){return"body"==e.placement})),t=_.filter(this.collection.fieldset.sections,(function(e){return"sidebar"==e.placement}))),{body:e,sidebar:t}},singular:function(){return this.collection.name?i.a.singular(this.collection.name):""}},methods:{submit:function(){this.form.patch("/api/collections/"+this.collection.slug+"/"+this.entry.id).then((function(e){toast("Entry saved successfully","success")})).catch((function(e){toast(e.response.data.message,"failed")}))},getEntry:function(e,t,a){var s=this;axios.get("/api/collections/"+e.params.collection+"/"+e.params.id).then((function(e){s.collection=e.data.data.matrix,s.entry=e.data.data.entry;var t={name:s.entry.name,slug:s.entry.slug,status:s.entry.status};_.forEach(s.collection.fields,(function(e,a){s.entry[a+"_raw"]?Vue.set(t,a,s.entry[a+"_raw"]):Vue.set(t,a,s.entry[a])})),console.log(t),s.form=new n.a(t)}))}},beforeRouteEnter:function(e,t,a){a((function(s){s.getEntry(e,t,a)}))},beforeRouteUpdate:function(e,t,a){this.getEntry(e,t,a),a()}},o=a("KHd+"),l=Object(o.a)(r,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("portal",{attrs:{to:"title"}},[a("app-title",{attrs:{icon:e.collection.icon||"pencil"}},[e._v("Edit "+e._s(e.singular))])],1),e._v(" "),a("portal",{attrs:{to:"subtitle"}},[e._v(e._s(e.collection.description))]),e._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"content-container"},[a("form",{on:{submit:function(t){return t.preventDefault(),e.submit(t)}}},[a("p-card",[a("div",{staticClass:"row"},[a("div",{staticClass:"col form-sidebar"},[a("div",{staticClass:"xxl:mr-10"})]),e._v(" "),a("div",{staticClass:"col mb-6 form-content"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col w-1/2"},[a("p-input",{attrs:{name:"name",label:"Name"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),a("div",{staticClass:"col w-1/2"},[a("p-slug",{attrs:{name:"slug",label:"Slug",monospaced:"",watch:e.form.name},model:{value:e.form.slug,callback:function(t){e.$set(e.form,"slug",t)},expression:"form.slug"}})],1)])])]),e._v(" "),e.sections.body.length>0?a("div",{key:e.collection.slug},e._l(e.sections.body,(function(t,s){return a("div",{key:t.handle},[a("div",{staticClass:"row"},[a("div",{staticClass:"col form-sidebar"},[a("div",{staticClass:"xxl:mr-10"},[a("h3",[e._v(e._s(t.name))]),e._v(" "),a("p",{staticClass:"text-sm"},[e._v(e._s(t.description))])])]),e._v(" "),a("div",{staticClass:"col form-content"},e._l(t.fields,(function(t){return a("div",{key:t.handle,staticClass:"form__group"},[a(t.type.id+"-fieldtype",{tag:"component",attrs:{field:t},model:{value:e.form[t.handle],callback:function(a){e.$set(e.form,t.handle,a)},expression:"form[field.handle]"}})],1)})),0)]),e._v(" "),s!==e.sections.body.length-1?a("hr"):e._e()])})),0):a("div",{staticClass:"text-center"},[a("p",[e._v("You should configure your Matrix Collection with some sections and fields first "),a("fa-icon",{staticClass:"text-emoji",attrs:{icon:["fas","hand-peace"]}})],1),e._v(" "),a("router-link",{staticClass:"button items-center",attrs:{to:"/matrices/manage/"+e.collection.id}},[a("fa-icon",{staticClass:"mr-2 text-sm",attrs:{icon:["fas","atom-alt"]}}),e._v(" Manage your collection")],1)],1)])],1)]),e._v(" "),a("div",{staticClass:"side-container"},[a("form",{on:{submit:function(t){return t.preventDefault(),e.submit(t)}}},[a("p-card",[a("div",{staticClass:"row"},[a("div",{staticClass:"col w-full"},[a("p-select",{attrs:{name:"status",label:"Status",options:[{label:"Enabled",value:1},{label:"Disabled",value:0}]},model:{value:e.form.status,callback:function(t){e.$set(e.form,"status",t)},expression:"form.status"}})],1)]),e._v(" "),a("portal",{attrs:{to:"actions"}},[e.collection.slug?a("router-link",{staticClass:"button mr-3",attrs:{to:{name:"entries.index",params:{collection:e.collection.slug}}}},[e._v("Go Back")]):e._e(),e._v(" "),a("button",{staticClass:"button button--primary",attrs:{type:"submit"},on:{click:function(t){return t.preventDefault(),e.submit(t)}}},[e._v("Save")])],1)],1),e._v(" "),e._l(e.sections.sidebar,(function(t){return a("p-card",{key:t.handle,staticClass:"mt-6"},[a("h3",[e._v(e._s(t.name))]),e._v(" "),a("p",{staticClass:"text-sm"},[e._v(e._s(t.description))]),e._v(" "),a("div",{staticClass:"w-full"},e._l(t.fields,(function(t){return a("div",{key:t.handle,staticClass:"form__group"},[a(t.type.id+"-fieldtype",{tag:"component",attrs:{field:t},model:{value:e.form[t.handle],callback:function(a){e.$set(e.form,t.handle,a)},expression:"form[field.handle]"}})],1)})),0)])}))],2)])])],1)}),[],!1,null,null,null);t.default=l.exports},dhqo:function(e,t,a){e.exports=function(){var e=[],t=[],a={},s={},i={};function n(e){return"string"==typeof e?new RegExp("^"+e+"$","i"):e}function r(e,t){return e===t?t:e===e.toLowerCase()?t.toLowerCase():e===e.toUpperCase()?t.toUpperCase():e[0]===e[0].toUpperCase()?t.charAt(0).toUpperCase()+t.substr(1).toLowerCase():t.toLowerCase()}function o(e,t){return e.replace(/\$(\d{1,2})/g,(function(e,a){return t[a]||""}))}function l(e,t){return e.replace(t[0],(function(a,s){var i=o(t[1],arguments);return r(""===a?e[s-1]:a,i)}))}function u(e,t,s){if(!e.length||a.hasOwnProperty(e))return t;for(var i=s.length;i--;){var n=s[i];if(n[0].test(t))return l(t,n)}return t}function c(e,t,a){return function(s){var i=s.toLowerCase();return t.hasOwnProperty(i)?r(s,i):e.hasOwnProperty(i)?r(s,e[i]):u(i,s,a)}}function f(e,t,a,s){return function(s){var i=s.toLowerCase();return!!t.hasOwnProperty(i)||!e.hasOwnProperty(i)&&u(i,i,a)===i}}function d(e,t,a){return(a?t+" ":"")+(1===t?d.singular(e):d.plural(e))}return d.plural=c(i,s,e),d.isPlural=f(i,s,e),d.singular=c(s,i,t),d.isSingular=f(s,i,t),d.addPluralRule=function(t,a){e.push([n(t),a])},d.addSingularRule=function(e,a){t.push([n(e),a])},d.addUncountableRule=function(e){"string"!=typeof e?(d.addPluralRule(e,"$0"),d.addSingularRule(e,"$0")):a[e.toLowerCase()]=!0},d.addIrregularRule=function(e,t){t=t.toLowerCase(),e=e.toLowerCase(),i[e]=t,s[t]=e},[["I","we"],["me","us"],["he","they"],["she","they"],["them","them"],["myself","ourselves"],["yourself","yourselves"],["itself","themselves"],["herself","themselves"],["himself","themselves"],["themself","themselves"],["is","are"],["was","were"],["has","have"],["this","these"],["that","those"],["echo","echoes"],["dingo","dingoes"],["volcano","volcanoes"],["tornado","tornadoes"],["torpedo","torpedoes"],["genus","genera"],["viscus","viscera"],["stigma","stigmata"],["stoma","stomata"],["dogma","dogmata"],["lemma","lemmata"],["schema","schemata"],["anathema","anathemata"],["ox","oxen"],["axe","axes"],["die","dice"],["yes","yeses"],["foot","feet"],["eave","eaves"],["goose","geese"],["tooth","teeth"],["quiz","quizzes"],["human","humans"],["proof","proofs"],["carve","carves"],["valve","valves"],["looey","looies"],["thief","thieves"],["groove","grooves"],["pickaxe","pickaxes"],["passerby","passersby"]].forEach((function(e){return d.addIrregularRule(e[0],e[1])})),[[/s?$/i,"s"],[/[^\u0000-\u007F]$/i,"$0"],[/([^aeiou]ese)$/i,"$1"],[/(ax|test)is$/i,"$1es"],[/(alias|[^aou]us|t[lm]as|gas|ris)$/i,"$1es"],[/(e[mn]u)s?$/i,"$1s"],[/([^l]ias|[aeiou]las|[ejzr]as|[iu]am)$/i,"$1"],[/(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i,"$1i"],[/(alumn|alg|vertebr)(?:a|ae)$/i,"$1ae"],[/(seraph|cherub)(?:im)?$/i,"$1im"],[/(her|at|gr)o$/i,"$1oes"],[/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|automat|quor)(?:a|um)$/i,"$1a"],[/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)(?:a|on)$/i,"$1a"],[/sis$/i,"ses"],[/(?:(kni|wi|li)fe|(ar|l|ea|eo|oa|hoo)f)$/i,"$1$2ves"],[/([^aeiouy]|qu)y$/i,"$1ies"],[/([^ch][ieo][ln])ey$/i,"$1ies"],[/(x|ch|ss|sh|zz)$/i,"$1es"],[/(matr|cod|mur|sil|vert|ind|append)(?:ix|ex)$/i,"$1ices"],[/\b((?:tit)?m|l)(?:ice|ouse)$/i,"$1ice"],[/(pe)(?:rson|ople)$/i,"$1ople"],[/(child)(?:ren)?$/i,"$1ren"],[/eaux$/i,"$0"],[/m[ae]n$/i,"men"],["thou","you"]].forEach((function(e){return d.addPluralRule(e[0],e[1])})),[[/s$/i,""],[/(ss)$/i,"$1"],[/(wi|kni|(?:after|half|high|low|mid|non|night|[^\w]|^)li)ves$/i,"$1fe"],[/(ar|(?:wo|[ae])l|[eo][ao])ves$/i,"$1f"],[/ies$/i,"y"],[/\b([pl]|zomb|(?:neck|cross)?t|coll|faer|food|gen|goon|group|lass|talk|goal|cut)ies$/i,"$1ie"],[/\b(mon|smil)ies$/i,"$1ey"],[/\b((?:tit)?m|l)ice$/i,"$1ouse"],[/(seraph|cherub)im$/i,"$1"],[/(x|ch|ss|sh|zz|tto|go|cho|alias|[^aou]us|t[lm]as|gas|(?:her|at|gr)o|[aeiou]ris)(?:es)?$/i,"$1"],[/(analy|diagno|parenthe|progno|synop|the|empha|cri|ne)(?:sis|ses)$/i,"$1sis"],[/(movie|twelve|abuse|e[mn]u)s$/i,"$1"],[/(test)(?:is|es)$/i,"$1is"],[/(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i,"$1us"],[/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|quor)a$/i,"$1um"],[/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)a$/i,"$1on"],[/(alumn|alg|vertebr)ae$/i,"$1a"],[/(cod|mur|sil|vert|ind)ices$/i,"$1ex"],[/(matr|append)ices$/i,"$1ix"],[/(pe)(rson|ople)$/i,"$1rson"],[/(child)ren$/i,"$1"],[/(eau)x?$/i,"$1"],[/men$/i,"man"]].forEach((function(e){return d.addSingularRule(e[0],e[1])})),["adulthood","advice","agenda","aid","aircraft","alcohol","ammo","analytics","anime","athletics","audio","bison","blood","bream","buffalo","butter","carp","cash","chassis","chess","clothing","cod","commerce","cooperation","corps","debris","diabetes","digestion","elk","energy","equipment","excretion","expertise","firmware","flounder","fun","gallows","garbage","graffiti","hardware","headquarters","health","herpes","highjinks","homework","housework","information","jeans","justice","kudos","labour","literature","machinery","mackerel","mail","media","mews","moose","music","mud","manga","news","only","personnel","pike","plankton","pliers","police","pollution","premises","rain","research","rice","salmon","scissors","series","sewage","shambles","shrimp","software","species","staff","swine","tennis","traffic","transportation","trout","tuna","wealth","welfare","whiting","wildebeest","wildlife","you",/pok[eé]mon$/i,/[^aeiou]ese$/i,/deer$/i,/fish$/i,/measles$/i,/o[iu]s$/i,/pox$/i,/sheep$/i].forEach(d.addUncountableRule),d}()},ke3Z:function(e,t,a){"use strict";function s(e,t){for(var a=0;a<t.length;a++){var s=t[a];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}var i=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.errors={}}var t,a,i;return t=e,(a=[{key:"has",value:function(e){return this.errors.hasOwnProperty(e)}},{key:"any",value:function(){return Object.keys(this.errors).length>0}},{key:"get",value:function(e){if(this.errors[e])return this.errors[e][0]}},{key:"record",value:function(e){this.errors=e.errors}},{key:"clear",value:function(e){e?delete this.errors[e]:this.errors={}}}])&&s(t.prototype,a),i&&s(t,i),e}();function n(e,t){for(var a=0;a<t.length;a++){var s=t[a];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}a.d(t,"a",(function(){return r}));var r=function(){function e(t){for(var a in function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.errors=new i,this.originalData=t,t)this[a]=t[a]}var t,a,s;return t=e,(a=[{key:"set",value:function(e,t){this.data[e]=t}},{key:"get",value:function(e){return this.data[e]}},{key:"reset",value:function(){for(var e in this.originalData)this[e]=this.originalData[e];this.errors.clear()}},{key:"data",value:function(){var e={};for(var t in this.originalData)e[t]=this[t];return e}},{key:"post",value:function(e){return this.submit("post",e)}},{key:"patch",value:function(e){return this.submit("patch",e)}},{key:"put",value:function(e){return this.submit("put",e)}},{key:"delete",value:function(e){return this.submit("delete",e)}},{key:"submit",value:function(e,t){var a=this;return new Promise((function(s,i){axios[e](t,a.data()).then((function(e){a.onSuccess(e.data),s(e.data)})).catch((function(e){a.onFailure(e.response.data),i(e.response.data)}))}))}},{key:"onSuccess",value:function(e){}},{key:"onFailure",value:function(e){this.errors.record(e)}}])&&n(t.prototype,a),s&&n(t,s),e}()}}]);