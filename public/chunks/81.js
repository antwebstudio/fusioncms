(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{d0oL:function(t,e,s){"use strict";s.r(e);var a={data:function(){return{data:{},entries:[],entriesPage:1,entriesPerPage:100,newEntriesTimeout:null,newEntriesTimer:2500,ready:!1}},props:{title:{type:String,default:"Logs"},entryId:{type:Number|Boolean,required:!0}},computed:{endpoint:function(){return"/api/imports/logs/".concat(this.entryId,"?page=").concat(this.entriesPage,"&limit=").concat(this.entriesPerPage)}},watch:{entryId:function(t){clearTimeout(this.newEntriesTimeout),!1!==t&&(this.entries=[],this.entriesPage=1,this.ready=!1,this.loadEntries())}},methods:{loadEntries:function(){var t=this;this.newEntriesTimeout=setTimeout((function(){axios.get(t.endpoint).then((function(e){if(t.ready=!0,t.data=e.data.data,t.entriesPage<=e.data.data.logs.pages){var s=_.map(e.data.data.logs.data,(function(t){return t.context=_.size(t.context)>0?_(t.context).value():null,t}));t.entries=s.concat(t.entries),t.entriesPage=t.entriesPage+1}})),t.loadEntries()}),this.newEntriesTimer)}},destroyed:function(){clearTimeout(this.newEntriesTimeout)}},n=s("KHd+"),i={head:{title:function(){return{inner:"View Import"}}},data:function(){return{data:{},entries:[],newEntriesTimeout:null,newEntriesTimer:5e3,entryId:!1}},components:{"log-modal":Object(n.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p-modal",{staticClass:"h-screen",attrs:{name:"log-modal",title:t.title,"no-footer":"","extra-large":""},model:{value:t.$parent.show,callback:function(e){t.$set(t.$parent,"show",e)},expression:"$parent.show"}},[t.ready?s("table",[s("thead",[s("th",{staticClass:"w-2/12"},[t._v("Scheduled")]),t._v(" "),s("th",{staticClass:"w-8/12"},[t._v("Progress")]),t._v(" "),s("th",{staticClass:"w-2/12"},[t._v("Status")])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v(t._s(t.data.happened))]),t._v(" "),s("td",["setup"==t.data.status?s("div",{staticClass:"shadow w-full bg-warning-100"},[s("div",{staticClass:"bg-primary-500 text-xs leading-none py-1 text-center text-white",style:"width: "+t.data.progress+"%"},[t._v(t._s(t.data.progress)+"%")])]):t._e(),t._v(" "),"complete"==t.data.status?s("div",{staticClass:"shadow w-full bg-warning-100"},[s("div",{staticClass:"bg-success-500 text-xs leading-none py-1 text-center text-white",style:"width: "+t.data.progress+"%"},[t._v(t._s(t.data.progress)+"%")])]):t._e(),t._v(" "),"failed"==t.data.status?s("div",{staticClass:"shadow w-full bg-warning-100"},[s("div",{staticClass:"bg-warning-500 text-xs leading-none py-1 text-center text-white",style:"width: "+t.data.progress+"%"},[t._v(t._s(t.data.progress)+"%")])]):t._e(),t._v(" "),"running"==t.data.status?s("div",{staticClass:"shadow w-full bg-warning-100"},[s("div",{staticClass:"bg-warning-500 text-xs leading-none py-1 text-center text-white",style:"width: "+t.data.progress+"%"},[t._v(t._s(t.data.progress)+"%")])]):t._e()]),t._v(" "),s("td",["setup"==t.data.status?s("span",{staticClass:"badge badge--primary"},[t._v("Complete")]):t._e(),t._v(" "),"complete"==t.data.status?s("span",{staticClass:"badge badge--success"},[t._v("Complete")]):t._e(),t._v(" "),"failed"==t.data.status?s("span",{staticClass:"badge badge--danger"},[t._v("Failed")]):t._e(),t._v(" "),"running"==t.data.status?s("span",{staticClass:"badge badge--warning"},[t._v("In Progress...")]):t._e()])])])]):t._e(),t._v(" "),t.ready?s("table",[s("thead",[s("th",{staticClass:"w-8/12"},[t._v("Message")]),t._v(" "),s("th",{staticClass:"w-2/12"},[t._v("Level")]),t._v(" "),s("th",{staticClass:"w-2/12"},[t._v("Happened")])])]):t._e(),t._v(" "),s("div",{staticClass:"overflow-y-auto",staticStyle:{height:"30rem"}},[s("table",[s("tbody",t._l(t.entries,(function(e,a){return s("tr",{key:a,staticClass:"w-full"},[s("td",{staticClass:"w-8/12"},[t._v("\n\t\t\t\t\t\t"+t._s(e.message)+"\n\t\t\t\t\t\t"),e.context?s("div",{staticClass:"text-sm text-gray-600",domProps:{textContent:t._s(e.context)}},[t._v("Read more")]):t._e()]),t._v(" "),s("td",{staticClass:"w-2/12"},[200==e.level?s("span",{staticClass:"badge badge--info"},[t._v(t._s(e.level_name))]):t._e(),t._v(" "),250==e.level?s("span",{staticClass:"badge badge--success"},[t._v(t._s(e.level_name))]):t._e(),t._v(" "),300==e.level?s("span",{staticClass:"badge badge--warning"},[t._v(t._s(e.level_name))]):t._e(),t._v(" "),400==e.level?s("span",{staticClass:"badge badge--danger"},[t._v(t._s(e.level_name))]):t._e()]),t._v(" "),s("td",{staticClass:"w-2/12"},[t._v("\n\t\t\t\t\t\t"+t._s(e.happened)+"\n\t\t\t\t\t")])])})),0)])]),t._v(" "),t.ready?t._e():s("div",{staticClass:"w-full text-center p-5"},[s("fa-icon",{staticClass:"fa-spin mr-3",attrs:{icon:["fas","circle-notch"]}}),t._v(" Loading logs...\n\t")],1)])}),[],!1,null,null,null).exports},computed:{show:{get:function(){return!1!==this.entryId},set:function(t){this.entryId=t}}},watch:{entryId:function(t){clearTimeout(this.newEntriesTimeout),!1===t&&this.loadEntries()}},methods:{loadEntries:function(){var t=this;axios.get("/api/imports/".concat(this.$router.currentRoute.params.importer)).then((function(e){t.data=e.data.data,t.entries=e.data.data.logs})),this.newEntriesTimeout=setTimeout((function(){t.loadEntries()}),this.newEntriesTimer)},queue:function(t){axios.post("/api/imports/queue/".concat(t)).then((function(t){toast("Import has been added to the queue.","success")})).catch((function(t){toast(t.message,"failed")}))}},beforeRouteEnter:function(t,e,s){s((function(t){t.loadEntries()}))},beforeRouteLeave:function(t,e,s){clearTimeout(this.newEntriesTimeout),s()}},r=Object(n.a)(i,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("portal",{attrs:{to:"title"}},[s("app-title",{attrs:{icon:"ship"}},[t._v("Importer")])],1),t._v(" "),s("portal",{attrs:{to:"actions"}},[s("router-link",{staticClass:"button mr-3",attrs:{to:{name:"importer"}}},[t._v("Go Back")]),t._v(" "),s("button",{staticClass:"button button--primary",attrs:{type:"button"},on:{click:function(e){return t.queue(t.$route.params.importer)}}},[t._v("Run Import")])],1),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"content-container"},[s("table",[t._m(0),t._v(" "),s("tbody",t._l(t.entries,(function(e,a){return s("tr",{key:a,staticClass:"w-full"},[s("td",[t._v(t._s(e.happened))]),t._v(" "),s("td",["setup"==e.status?s("div",{staticClass:"shadow w-full bg-warning-100"},[s("div",{staticClass:"bg-primary-500 text-xs leading-none py-1 text-center text-white",style:"width: "+e.progress+"%"},[t._v(t._s(e.progress)+"%")])]):t._e(),t._v(" "),"complete"==e.status?s("div",{staticClass:"shadow w-full bg-warning-100"},[s("div",{staticClass:"bg-success-500 text-xs leading-none py-1 text-center text-white",style:"width: "+e.progress+"%"},[t._v(t._s(e.progress)+"%")])]):t._e(),t._v(" "),"failed"==e.status?s("div",{staticClass:"shadow w-full bg-warning-100"},[s("div",{staticClass:"bg-danger-500 text-xs leading-none py-1 text-center text-white",style:"width: "+e.progress+"%"},[t._v(t._s(e.progress)+"%")])]):t._e(),t._v(" "),"running"==e.status?s("div",{staticClass:"shadow w-full bg-warning-100"},[s("div",{staticClass:"bg-warning-500 text-xs leading-none py-1 text-center text-white",style:"width: "+e.progress+"%"},[t._v(t._s(e.progress)+"%")])]):t._e()]),t._v(" "),s("td",["setup"==e.status?s("span",{staticClass:"badge badge--primary"},[t._v("Setup")]):t._e(),t._v(" "),"complete"==e.status?s("span",{staticClass:"badge badge--success"},[t._v("Complete")]):t._e(),t._v(" "),"failed"==e.status?s("span",{staticClass:"badge badge--danger"},[t._v("Failed")]):t._e(),t._v(" "),"running"==e.status?s("span",{staticClass:"badge badge--warning"},[t._v("In Progress...")]):t._e()]),t._v(" "),s("td",[s("p-button",{on:{click:function(s){t.entryId=e.id}}},[t._v("View log")])],1)])})),0)])])]),t._v(" "),s("log-modal",{attrs:{entryId:t.entryId,title:"Import Logs - "+t.data.name}})],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("th",{staticClass:"w-2/12"},[this._v("Scheduled")]),this._v(" "),e("th",{staticClass:"w-5/12"},[this._v("Progress")]),this._v(" "),e("th",{staticClass:"w-3/12"},[this._v("Status")]),this._v(" "),e("th",{staticClass:"w-2/12"})])}],!1,null,null,null);e.default=r.exports}}]);