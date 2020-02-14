(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{IvLr:function(t,e,s){"use strict";s.r(e);var a={head:{title:function(){return{inner:"Logs"}}},data:function(){return{endpoint:"/datatable/matrices",currentFile:"",files:[],logs:[],currentError:{},loaded:!1}},computed:{file:function(){return(this.$route.query?this.$route.query:"").file}},beforeRouteEnter:function(t,e,s){s((function(e){e.getFile(t.query.file)}))},beforeRouteUpdate:function(t,e,s){this.getFile(t.query.file),s()},methods:{getFile:function(t){var e=this;e.loaded=!1;var s=t?"?l="+t:"";axios.get("/api/logs"+s).then((function(t){e.currentFile=t.data.currentFile,e.files=t.data.files,e.logs=t.data.logs,e.loaded=!0}))},changeCurrentError:function(t){this.currentError=t}}},i=s("KHd+"),r=Object(i.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("portal",{attrs:{to:"title"}},[s("app-title",{attrs:{icon:"bug"}},[t._v("Logs")])],1),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"logs__sidebar side-container"},[s("div",{staticClass:"card"},[t._m(0),t._v(" "),s("hr"),t._v(" "),s("div",{staticClass:"card-body"},[t._l(t.files,(function(e,a){return s("router-link",{key:a,staticClass:"block px-3 py-2 text-gray-900",attrs:{to:{path:"logs?",query:{file:e}}}},[t._v("\n                        "+t._s(e)+"\n                    ")])})),t._v(" "),t.loaded||0!=t.files.length?t._e():s("div",{staticClass:"block px-3 py-2"},[t._v("\n                        Loading log files "),s("fa-icon",{staticClass:"fa-spin ml-2",attrs:{icon:"cog"}})],1),t._v(" "),t.loaded&&0==t.files.length?s("div",{staticClass:"block px-3 py-2"},[t._v("\n                        No logs found\n                    ")]):t._e()],2)])]),t._v(" "),s("div",{staticClass:"logs__main content-container"},[s("div",{staticClass:"card"},[t._m(1),t._v(" "),s("div",{staticClass:"container"},[t.loaded?s("div",t._l(t.logs,(function(e){return s("div",{directives:[{name:"modal",rawName:"v-modal:error-view",arg:"error-view"}],key:e,staticClass:"logs__row flex flex-no-wrap py-2",on:{click:function(s){return t.changeCurrentError(e)}}},[s("div",{staticClass:"px-2 py-1 flex-shrink-0 flex items-center"},[s("div",{class:"d-flex whitespace-no-wrap text-"+e.level.status+"-600",attrs:{title:e.level.name}},[s("fa-icon",{staticClass:"fa-inverse! fa-fw",attrs:{icon:["fas",e.level.icon]}}),t._v(" "),s("span",{staticClass:"sr-only"},[t._v("\n                                        "+t._s(e.level.name)+"\n                                    ")])],1)]),t._v(" "),s("div",{staticClass:"px-3 py-1 flex-shrink-0 flex items-center text-xs whitespace-no-wrap"},[t._v(t._s(e.date))]),t._v(" "),s("div",{staticClass:"col px-3 py-1 leading-tight overflow-hidden"},[s("div",{staticClass:"text-md",domProps:{innerHTML:t._s(e.text)}}),t._v(" "),e.inFile?s("div",{staticClass:"truncate pt-2 text-xs text-gray-600"},[t._v("\n                                    "+t._s(e.inFile)+"\n                                ")]):t._e()])])})),0):t._e(),t._v(" "),t.loaded?t._e():s("div",{staticClass:"block px-3 py-4"},[t._v("\n                        Loading file "),t.file?s("code",[t._v(t._s(t.file))]):t._e(),t._v(" "),s("fa-icon",{staticClass:"fa-spin ml-3",attrs:{icon:"cog"}})],1),t._v(" "),t.loaded&&0==t.logs.length?s("div",{staticClass:"block px-3 py-4"},[t._v("\n                        Log file empty\n                    ")]):t._e()])])])]),t._v(" "),s("p-modal",{attrs:{name:"error-view",title:"Error Details","extra-large":""}},[t.currentError.date?s("div",[s("div",{staticClass:"leading-tight mb-3"},[s("div",{staticClass:"flex p-2"},[s("div",{staticClass:"pr-2 whitespace-no-wrap"},[s("strong",[t._v("Timestamp:")])]),t._v(" "),s("div",{staticClass:"whitespace-no-wrap"},[t._v("\n                        "+t._s(t.currentError.date)+"\n                    ")])]),t._v(" "),s("div",{staticClass:"flex p-2"},[s("div",{staticClass:"pr-2 whitespace-no-wrap"},[s("strong",[t._v("Error Text:")])]),t._v(" "),s("div",{staticClass:"logs__full-text"},[s("div",{staticClass:"text-warning-800"},[t._v("\n                            "+t._s(t.currentError.textFull)+"\n                        ")])])])]),t._v(" "),s("div",{staticClass:"px-2"},[s("h3",{staticClass:"text-sm"},[t._v("Stack Trace:")]),t._v(" "),s("div",{staticClass:"logs__stack-trace overflow-auto"},t._l(t.currentError.stackTrace,(function(e){return e.length?s("div",{key:e,staticClass:"logs__stack-row"},[t._v("\n                        "+t._s(e)+"\n                    ")]):t._e()})),0)])]):t._e()])],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card-header px-3 pt-2"},[e("h4",{staticClass:"mb-0"},[this._v("Available Logs")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card-header px-4 py-2"},[e("h2",{staticClass:"mb-0"},[this._v("Log Entries")]),this._v(" "),e("h3",{staticClass:"text-xs"},[this._v("Click an entry to view full error and stack trace")])])}],!1,null,null,null);e.default=r.exports}}]);