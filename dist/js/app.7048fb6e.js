(function(){"use strict";var e={601:function(e,t,o){o.d(t,{v:function(){return r}});var r={version:"V 2.0.0",releaseDate:"2022.06.06",copyright:"Copyright 2021-2022 Kanagawa Institute of Technology",serverUrl1:"https://webapiechonet.com/elapi/v1",serverUrl2:"https://www.smarthouse-center.org/elapi/v1",fileName4Log:"log_elapi.txt",addDeviceList:["temperatureSensor","electricEnergySensor","currentSensor","homeAirConditioner","airConditionerVentilationFan","instantaneousWaterHeater","coldOrHotWaterHeatSourceEquipment","fuelCell","storageBattery","evChargerDischarger","lvSmartElectricEnergyMeter","hvSmartElectricEnergyMeter","generalLighting","evCharger","enhancedLightingSystem","controller","ventilationFan","airCleaner","commercialAirConditionerIndoorUnit","commercialAirConditionerOutdoorUnit","electricRainDoor","electricWaterHeater","electricLock","bathroomHeaterDryer","pvPowerGeneration","wattHourMeter","floorHeater","powerDistributionBoardMetering","monoFunctionalLighting","refrigerator","cookingHeater","riceCooker","commercialShowcase","commercialShowcaseOutdoorUnit","switch","hybridWaterHeater","washerDryer","tv"]}},377:function(e,t,o){var r=o(963),n=o(252),s={class:"container"},i={role:"main",class:"container px-0"};function c(e,t,o,r,c,a){var l=(0,n.up)("NavHeader"),u=(0,n.up)("router-view");return(0,n.wg)(),(0,n.iD)("div",s,[(0,n._)("header",null,[(0,n.Wm)(l)]),(0,n._)("main",i,[(0,n.Wm)(u)])])}const a={class:"navbar navbar-expand-lg navbar-secondary bg-secondary"},l={class:"container-fluid"},u=(0,n._)("div",null,[(0,n._)("a",{class:"navbar-brand",href:"#",style:{color:"#ffffff"}},"ECHONET Lite WebAPI Tool")],-1),d={class:"d-flex"},p={class:"btn",title:"Home"},f={class:"btn",title:"Setting"},v={class:"btn",title:"About"};function h(e,t){const o=(0,n.up)("font-awesome-icon"),r=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)("nav",a,[(0,n._)("div",l,[u,(0,n._)("div",d,[(0,n.Wm)(r,{to:"/"},{default:(0,n.w5)((()=>[(0,n._)("a",p,[(0,n.Wm)(o,{icon:"home",style:{color:"#eeeeee"}})])])),_:1}),(0,n.Wm)(r,{to:"/setting"},{default:(0,n.w5)((()=>[(0,n._)("a",f,[(0,n.Wm)(o,{icon:"cog",style:{color:"#eeeeee"}})])])),_:1}),(0,n.Wm)(r,{to:"/about"},{default:(0,n.w5)((()=>[(0,n._)("a",v,[(0,n.Wm)(o,{icon:"question-circle",style:{color:"#eeeeee"}})])])),_:1})])])])}var m=o(744);const g={},y=(0,m.Z)(g,[["render",h]]);var b=y,S=o(601),w=S.v.version,_=S.v.releaseDate;console.log("App.vue: init",{version:w},{releaseData:_});var C={components:{NavHeader:b}};const k=(0,m.Z)(C,[["render",c]]);var I=k,L=o(119),T={class:"home"};function D(e,t,o,r,s,i){var c=(0,n.up)("HomeSendRequest"),a=(0,n.up)("HomeRequestResponse"),l=(0,n.up)("HomeNotification"),u=(0,n.up)("HomeLog");return(0,n.wg)(),(0,n.iD)("div",T,[(0,n._)("div",null,[(0,n.Wm)(c),(0,n.Wm)(a),(0,n.Wm)(l),(0,n.Wm)(u)])])}var R=o(577),U=function(e){return(0,n.dD)("data-v-7bffc69a"),e=e(),(0,n.Cn)(),e},N={class:"homeSendRequest"},O={class:"card"},q={class:"card-header"},E={class:"row"},H=U((function(){return(0,n._)("div",{class:"col-auto h5 mt-2"},"Send Request",-1)})),A=U((function(){return(0,n._)("div",{class:"col-auto"},null,-1)})),$={class:"col-auto mt-2"},B={key:0,class:"col-auto mt-1 pl-0"},W={class:"btn",title:"Web Socket Is Connected"},K=U((function(){return(0,n._)("div",{class:"col"},null,-1)})),j={class:"col-auto mt-1 pl-0"},z={class:"card-body pt-2 pb-2"},x={class:"row g-1"},M={class:"col-md-1"},P=U((function(){return(0,n._)("label",{for:"inputMethod"},"Method",-1)})),Z={class:"col-md-2"},G=U((function(){return(0,n._)("label",{for:"inputService"},"Service",-1)})),V={class:"col-md-2"},F=U((function(){return(0,n._)("label",{for:"inputId"},"Id",-1)})),Y=["title"],Q={class:"col-md-2"},J=U((function(){return(0,n._)("label",{for:"inputResourceType"},"Resource Type",-1)})),X={class:"col-md-3"},ee=U((function(){return(0,n._)("label",{for:"inputResourceName"},"Resource Name",-1)})),te={class:"col-md-2"},oe=U((function(){return(0,n._)("label",{for:"inputQuery"},"URL Parameters",-1)})),re={class:"row",id:"second-line"},ne=U((function(){return(0,n._)("div",{class:"col-md-3"},null,-1)})),se={class:"col-md-2"},ie={class:"row"},ce={class:"col-md-9"},ae={class:"input-group mb-2 mx-1"},le=U((function(){return(0,n._)("span",{class:"input-group-text"},"Body data",-1)})),ue=U((function(){return(0,n._)("div",{class:"col-auto"},null,-1)})),de={class:"col-auto mt-1 pl-0"};function pe(e,t,o,s,i,c){var a=(0,n.up)("font-awesome-icon");return(0,n.wg)(),(0,n.iD)("div",N,[(0,n._)("div",O,[(0,n._)("div",q,[(0,n._)("div",E,[H,A,(0,n._)("div",$,(0,R.zw)(e.serverUrl)+(0,R.zw)(e.url),1),"server2"===e.serverSelection?((0,n.wg)(),(0,n.iD)("div",B,[(0,n._)("button",{type:"button",class:"btn btn-secondary btn-sm fw-bold mr-1",title:"Connect web socket",onClick:t[0]||(t[0]=function(){for(var t=[],o=0;o<arguments.length;o++)t[o]=arguments[o];return e.connectButtonIsClicked&&e.connectButtonIsClicked.apply(e,t)})}," Connect web socket "),(0,n._)("a",W,[e.webSocketIsConnected?((0,n.wg)(),(0,n.j4)(a,{key:0,icon:"link",style:{color:"#000000"}})):(0,n.kq)("",!0)])])):(0,n.kq)("",!0),K,(0,n._)("div",j,[(0,n._)("button",{type:"button",class:"btn btn-secondary btn-sm fw-bold",title:"Send request",onClick:t[1]||(t[1]=function(){for(var t=[],o=0;o<arguments.length;o++)t[o]=arguments[o];return e.sendButtonIsClicked&&e.sendButtonIsClicked.apply(e,t)})}," Send ")])])]),(0,n._)("div",z,[(0,n._)("form",null,[(0,n._)("div",x,[(0,n._)("div",M,[P,(0,n.wy)((0,n._)("select",{id:"inputMethod",class:"form-control","onUpdate:modelValue":t[2]||(t[2]=function(t){return e.methodSelected=t}),onChange:t[3]||(t[3]=function(){for(var t=[],o=0;o<arguments.length;o++)t[o]=arguments[o];return e.methodIsUpdated&&e.methodIsUpdated.apply(e,t)}),style:(0,R.j5)(e.methodStyle)},[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.methodList,(function(e){return(0,n.wg)(),(0,n.iD)("option",{key:e.id},(0,R.zw)(e),1)})),128))],36),[[r.bM,e.methodSelected]])]),(0,n._)("div",Z,[G,(0,n.wy)((0,n._)("select",{id:"inputService",class:"form-control","onUpdate:modelValue":t[4]||(t[4]=function(t){return e.serviceSelected=t}),onChange:t[5]||(t[5]=function(){for(var t=[],o=0;o<arguments.length;o++)t[o]=arguments[o];return e.serviceIsUpdated&&e.serviceIsUpdated.apply(e,t)}),style:(0,R.j5)(e.serviceStyle)},[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.serviceList,(function(e){return(0,n.wg)(),(0,n.iD)("option",{key:e.id},(0,R.zw)(e),1)})),128))],36),[[r.bM,e.serviceSelected]])]),(0,n._)("div",V,[F,(0,n.wy)((0,n._)("select",{id:"inputId",class:"form-control",title:"Id","onUpdate:modelValue":t[6]||(t[6]=function(t){return e.idSelected=t}),onChange:t[7]||(t[7]=function(){for(var t=[],o=0;o<arguments.length;o++)t[o]=arguments[o];return e.idIsUpdated&&e.idIsUpdated.apply(e,t)})},[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.idInfoList,(function(e){return(0,n.wg)(),(0,n.iD)("option",{title:e.deviceType,key:e.id},(0,R.zw)(e.id),9,Y)})),128))],544),[[r.bM,e.idSelected]])]),(0,n._)("div",Q,[J,(0,n.wy)((0,n._)("select",{id:"inputResourceType",class:"form-control","onUpdate:modelValue":t[8]||(t[8]=function(t){return e.resourceTypeSelected=t}),onChange:t[9]||(t[9]=function(){for(var t=[],o=0;o<arguments.length;o++)t[o]=arguments[o];return e.resourceTypeIsUpdated&&e.resourceTypeIsUpdated.apply(e,t)}),style:(0,R.j5)(e.resourceTypeStyle)},[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.resourceTypeList,(function(e){return(0,n.wg)(),(0,n.iD)("option",{key:e.id},(0,R.zw)(e),1)})),128))],36),[[r.bM,e.resourceTypeSelected]])]),(0,n._)("div",X,[ee,(0,n.wy)((0,n._)("select",{id:"inputResourceName",class:"form-control","onUpdate:modelValue":t[10]||(t[10]=function(t){return e.resourceNameSelected=t}),onChange:t[11]||(t[11]=function(){for(var t=[],o=0;o<arguments.length;o++)t[o]=arguments[o];return e.resourceNameIsUpdated&&e.resourceNameIsUpdated.apply(e,t)}),style:(0,R.j5)(e.resourceNameStyle)},[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.resourceNameList,(function(e){return(0,n.wg)(),(0,n.iD)("option",{key:e.id},(0,R.zw)(e),1)})),128))],36),[[r.bM,e.resourceNameSelected]])]),(0,n._)("div",te,[oe,(0,n.wy)((0,n._)("input",{type:"text",class:"form-control",id:"inputQuery","onUpdate:modelValue":t[12]||(t[12]=function(t){return e.query=t}),style:(0,R.j5)(e.queryStyle)},null,4),[[r.nr,e.query]])])]),(0,n._)("div",re,[ne,(0,n._)("div",se,[(0,n._)("label",null,(0,R.zw)(e.deviceType),1)])]),(0,n._)("div",ie,[(0,n._)("div",ce,[(0,n._)("div",ae,[le,(0,n.wy)((0,n._)("input",{type:"text",class:"form-control",id:"inputBody","onUpdate:modelValue":t[13]||(t[13]=function(t){return e.body=t}),style:(0,R.j5)(e.bodyStyle)},null,4),[[r.nr,e.body]])])]),ue,(0,n._)("div",de,[(0,n._)("button",{type:"button",class:"btn btn-secondary btn-sm fw-bold",title:"Copy from Response",onClick:t[14]||(t[14]=function(){for(var t=[],o=0;o<arguments.length;o++)t[o]=arguments[o];return e.copyFromResponseButtonIsClicked&&e.copyFromResponseButtonIsClicked.apply(e,t)})}," Copy from Response ")])])])])])])}console.log("HomeSendRequest init");S.v.fileName4Log;var fe="",ve=[],he=[],me={},ge=(0,n.aZ)({name:"HomeSendRequest",data:function(){return{methodList:["GET","PUT","POST","DELETE"],methodSelected:"GET",serviceList:[""],serviceSelected:"",idInfoList:ve,idSelected:"",idToolTip:"tool tip",deviceType:"",resourceTypeList:he,resourceTypeSelected:"",resourceNameList:[""],resourceNameSelected:"",query:"",body:""}},computed:{serverSelection:{get:function(){return this.$store.getters.serverSelection},set:function(e){this.$store.dispatch("setServerSelection",e)}},serverUrl:{get:function(){return this.$store.getters.serverUrl},set:function(e){this.$store.dispatch("setServerUrl",e)}},apiKey:{get:function(){return this.$store.getters.apiKey},set:function(e){this.$store.dispatch("setApiKey",e)}},request:{get:function(){return this.$store.getters.request},set:function(e){this.$store.dispatch("setRequest",e)}},statusCode:{get:function(){return this.$store.getters.statusCode},set:function(e){this.$store.dispatch("setStatusCode",e)}},response:{get:function(){return this.$store.getters.response},set:function(e){this.$store.dispatch("setResponse",e)}},logId:{get:function(){return this.$store.getters.logId},set:function(e){this.$store.dispatch("setLogId",e)}},logArray:{get:function(){return this.$store.getters.logArray},set:function(e){this.$store.dispatch("setLogArray",e)}},notificationData:{get:function(){return this.$store.getters.notificationData},set:function(e){this.$store.dispatch("setNotificationData",e)}},webSocketIsConnected:{get:function(){return this.$store.getters.webSocketIsConnected},set:function(e){this.$store.dispatch("setWebSocketIsConnected",e)}}},methods:{sendButtonIsClicked:function(){var e=this,t="";""!==this.serviceSelected&&(t+=this.serviceSelected,""!==this.idSelected&&(t+=this.idSelected,""!==this.resourceTypeSelected&&(t+=this.resourceTypeSelected,""!==this.resourceNameSelected&&(t+=this.resourceNameSelected,""!==this.query&&(t+="?"+this.query)))));var o=this.serverUrl+t;console.log("sendButtonIsClicked",{url:o});var r=new Headers({"Content-Type":"application/json"});"server1"==this.serverSelection?r.append("X-Elapi-key",this.apiKey):"server2"==this.serverSelection&&r.append("Authorization","Bearer "+this.apiKey);var n={method:this.methodSelected,headers:r};"GET"!==this.methodSelected&&(n.body=this.body),this.request="REQ: "+this.methodSelected+" "+o+"\n"+this.body;var s={id:String(this.logId++),timeStamp:Se(),direction:"REQ",statusCode:"",data:this.methodSelected+" "+o,body:this.body};this.logArray.push(s),fetch(o,n).then((function(t){var o=t.status+" "+t.statusText;return e.statusCode="RES: "+o,fe=o,t.json()})).then((function(t){console.log("Success:",t),e.response=t;var r={id:String(e.logId++),timeStamp:Se(),direction:"RES",statusCode:fe,data:t,body:""};if(e.logArray.push(r),"GET"==e.methodSelected){var n=/\/v1$/;if(n.test(o)){var s=[""];if(console.log("data.v1",t.v1),void 0!==t.v1)for(var i=0,c=t.v1;i<c.length;i++){var a=c[i];console.log("service",a),s.push("/"+a.name)}console.log("GET /elapi/v1 serviceListの更新:",s),e.serviceList=s,e.serviceSelected=s[1]?s[1]:""}var l="";if(n=/\/devices$/,n.test(o)&&(l="devices"),n=/\/groups$/,n.test(o)&&(l="groups"),n=/\/bulks$/,n.test(o)&&(l="bulks"),n=/\/histories$/,n.test(o)&&(l="histories"),""!==l){if(e.idInfoList=[{deviceType:"",id:""}],void 0!==t[l])for(var u=0,d=t[l];u<d.length;u++){var p=d[u],f=void 0!==p.deviceType?p.deviceType:"",v={id:"/"+p.id,deviceType:f};e.idInfoList.push(v)}e.idInfoList.sort((function(e,t){var o=e.deviceType.toUpperCase(),r=t.deviceType.toUpperCase();return o<r?-1:o>r?1:0})),console.log("GET /elapi/v1/devices idInfoListの更新:",ve),e.idSelected=e.idInfoList[1]?e.idInfoList[1].id:"",console.log("535 call updateDeviceType"),e.deviceType=ye(e.idSelected.slice(1))}if(l="",n=/\/devices\/([0-9]|[a-z]|[A-Z]|-|-)+$/,n.test(o)&&(l="devices"),n=/\/groups\/([0-9]|[a-z]|[A-Z]|-)+$/,n.test(o)&&(l="groups"),n=/\/bulks\/([0-9]|[a-z]|[A-Z]|-)+$/,n.test(o)&&(l="bulks"),n=/\/histories\/([0-9]|[a-z]|[A-Z]|-)+$/,n.test(o)&&(l="histories"),console.log("GET /elapi/v1/devices/<id> service:",l),""!==l){var h=o.split("/"),m=h[h.length-1],g=t,y=(f=void 0!==g.deviceType?g.deviceType:"",{deviceType:f,propertyList:[""],propertyListWritable:[""],actionList:[""]});if(void 0!==g.properties)for(var b=0,S=Object.keys(g.properties);b<S.length;b++){var w=S[b];y.propertyList.push("/"+w),!0===g.properties[w].writable&&y.propertyListWritable.push("/"+w)}if(void 0!==g.actions)for(var _=0,C=Object.keys(g.actions);_<C.length;_++){w=C[_];y.actionList.push("/"+w)}y.propertyList.sort(),y.propertyListWritable.sort(),y.actionList.sort(),console.log("533 thingId",m),console.log("534 thingInfo",y),console.log("535 g_thingInfo",me),me[m]=y,console.log("g_thingInfo",me);var k=[""];void 0!==t.properties&&k.push("/properties"),void 0!==t.actions&&k.push("/actions"),void 0!==t.events&&k.push("/events"),console.log("resourceTypeListの更新:",k),e.resourceTypeList=k;var I=be("GET",m,"/properties");e.resourceNameSelected=I[0],e.resourceNameList=I[1],e.resourceTypeSelected=k[1]?k[1]:"",e.deviceType=t.deviceType}}})).catch((function(e){console.error("Error:",e)}))},connectButtonIsClicked:function(){var e=this;console.log("Connect Web Socket button is clicked");var t="wss://www.smarthouse-center.org/ws/elapi",o=new WebSocket(t,["echonetlite-protocol",this.apiKey]);o.addEventListener("open",(function(){console.log("WebSocket が接続されました。"),e.webSocketIsConnected=!0})),o.addEventListener("close",(function(){console.log("WebSocket が切断されました。"),e.webSocketIsConnected=!1,setTimeout((function(){e.connectButtonIsClicked()}),1e3)})),o.addEventListener("error",(function(){console.log("WebSocket 接続に失敗しました。")})),o.addEventListener("message",(function(t){console.log("Web socket メッセージを受信しました。");var o=JSON.parse(t.data);e.notificationData=o,console.log("Web socket",{notificationData:o})}))},copyFromResponseButtonIsClicked:function(){console.log("server",this.serverSelection,"serverUrl",this.serverUrl,"apiKey",this.apiKey),this.body=JSON.stringify(this.response)},methodIsUpdated:function(){if(""!==this.serviceSelected&&""!==this.idSelected){console.log("methodIsUpdated:idSelected",this.idSelected);var e=this.idSelected.slice(1),t=[""];if(void 0!==me[e]){switch(this.methodSelected){case"GET":this.body="",t=me[e].propertyList,this.resourceTypeSelected="/properties";break;case"PUT":t=me[e].propertyListWritable,this.resourceTypeSelected="/properties";break;case"POST":t=me[e].actionList,this.resourceTypeSelected="/actions";break;case"DELETE":break}""!==this.resourceTypeSelected&&(this.resourceNameList=t)}}},serviceIsUpdated:function(){this.resourceTypeList=[""],this.resourceNameList=[""],this.idSelected="",this.resourceTypeSelected="",this.resourceNameSelected="",this.deviceType="",this.body=""},idIsUpdated:function(){console.log("idIsUpdated");var e=this.idSelected.slice(1);this.resourceTypeList=[""],this.resourceNameList=[""],this.deviceType="",this.resourceTypeSelected="",this.resourceNameSelected="",console.log("731 call updateDeviceType"),this.deviceType=ye(e);var t=me[e];if(void 0!==t){var o=[""];void 0!==t.propertyList&&o.push("/properties"),void 0!==t.actionList&&o.push("/actions"),this.resourceTypeList=o,this.resourceTypeSelected=o[1]?o[1]:"",be(this.methodSelected,e,this.resourceTypeSelected),this.resourceNameSelected=this.resourceNameList[1]?this.resourceNameList[1]:""}},resourceTypeIsUpdated:function(){be(this.methodSelected,this.idSelected.slice(1),this.resourceTypeSelected)},resourceNameIsUpdated:function(){this.resourceNameSelected}},created:function(){console.log("HomeSendRequest is created"),console.log("serverSelection:",this.serverSelection,"serverUrl:",this.serverUrl,"apiKey:",this.apiKey)}});function ye(e){for(var t=0,o=ve;t<o.length;t++){var r=o[t];if(r.id=="/"+e)return r.deviceType}return""}function be(e,t,o){console.log("updateResourceName",e,t,o);var r=[],n="";if(""!==o){var s=me[t];void 0!==s&&("/properties"==o&&"GET"==e&&(r=s.propertyList),"/properties"==o&&"PUT"==e&&(r=s.propertyListWritable),"/actions"==o&&"POST"==e&&(r=s.actionList),n=r[1]?r[1]:"",console.log("resourceNameSelected:",n,"resourceNameList:",r))}return[n,r]}function Se(){var e=new Date,t=e.getHours().toString(),o=e.getMinutes().toString(),r=e.getSeconds().toString();return t=1==t.length?"0"+t:t,o=1==o.length?"0"+o:o,r=1==r.length?"0"+r:r,t+":"+o+":"+r}const we=(0,m.Z)(ge,[["render",pe],["__scopeId","data-v-7bffc69a"]]);var _e=we,Ce=function(e){return(0,n.dD)("data-v-298aec46"),e=e(),(0,n.Cn)(),e},ke={class:"homeRequestResponse"},Ie={class:"card"},Le={class:"card-header"},Te={class:"row"},De=Ce((function(){return(0,n._)("div",{class:"col-auto h5 mt-2"},"Request & Response",-1)})),Re=Ce((function(){return(0,n._)("div",{class:"col"},null,-1)})),Ue={class:"col-auto mt-1 pl-0"},Ne={class:"card-body",id:"request-response-body"},Oe={id:"request-response-wrapper"},qe={class:"list-group",id:"request-response-list"},Ee={class:"list-group-item"},He={class:"list-group-item"},Ae={class:"list-group-item"};function $e(e,t,o,r,s,i){return(0,n.wg)(),(0,n.iD)("div",ke,[(0,n._)("div",Ie,[(0,n._)("div",Le,[(0,n._)("div",Te,[De,Re,(0,n._)("div",Ue,[(0,n._)("button",{type:"button",class:"btn btn-secondary btn-sm fw-bold",onClick:t[0]||(t[0]=function(){for(var t=[],o=0;o<arguments.length;o++)t[o]=arguments[o];return e.clearButtonisClicked&&e.clearButtonisClicked.apply(e,t)})}," Clear ")])])]),(0,n._)("div",Ne,[(0,n._)("div",Oe,[(0,n._)("ul",qe,[(0,n._)("li",Ee,(0,R.zw)(e.request),1),(0,n._)("li",He,(0,R.zw)(e.statusCode),1),(0,n._)("li",Ae,[(0,n._)("pre",null,(0,R.zw)(e.response),1)])])])])])])}console.log("HomeRequestResponse init");var Be=(0,n.aZ)({name:"HomeRequestResponse",computed:{request:{get:function(){return this.$store.getters.request},set:function(e){this.$store.dispatch("setRequest",e)}},statusCode:{get:function(){return this.$store.getters.statusCode},set:function(e){this.$store.dispatch("setStatusCode",e)}},response:{get:function(){return this.$store.getters.response},set:function(e){this.$store.dispatch("setResponse",e)}}},methods:{clearButtonisClicked:function(){console.log("clearButtonisClicked"),this.request="Request:",this.statusCode="Response: status code",this.response="Response: data"}},created:function(){console.log("HomeRequestResponse is created")}});const We=(0,m.Z)(Be,[["render",$e],["__scopeId","data-v-298aec46"]]);var Ke=We,je=function(e){return(0,n.dD)("data-v-18239eb4"),e=e(),(0,n.Cn)(),e},ze={class:"homeNotification"},xe={key:0,class:"card"},Me={class:"card-header"},Pe={class:"row"},Ze=je((function(){return(0,n._)("div",{class:"col-auto h5 mt-2"},"Notification",-1)})),Ge=je((function(){return(0,n._)("div",{class:"col"},null,-1)})),Ve={class:"col-auto mt-1 pl-0"},Fe={class:"card-body",id:"notification-body"},Ye={id:"notification-wrapper"},Qe={class:"list-group",id:"notification-list"},Je={class:"list-group-item"},Xe={class:"list-group-item"};function et(e,t,o,r,s,i){return(0,n.wg)(),(0,n.iD)("div",ze,["server2"===e.serverSelection?((0,n.wg)(),(0,n.iD)("div",xe,[(0,n._)("div",Me,[(0,n._)("div",Pe,[Ze,Ge,(0,n._)("div",Ve,[(0,n._)("button",{type:"button",class:"btn btn-secondary btn-sm fw-bold",onClick:t[0]||(t[0]=function(){for(var t=[],o=0;o<arguments.length;o++)t[o]=arguments[o];return e.clearButtonisClicked&&e.clearButtonisClicked.apply(e,t)})}," Clear ")])])]),(0,n._)("div",Fe,[(0,n._)("div",Ye,[(0,n._)("ul",Qe,[(0,n._)("li",Je,"Path: "+(0,R.zw)(e.notificationData.path),1),(0,n._)("li",Xe,[(0,n._)("pre",null,(0,R.zw)(e.notificationData.body),1)])])])])])):(0,n.kq)("",!0)])}console.log("HomeNotification init");var tt=(0,n.aZ)({name:"HomeNotification",computed:{serverSelection:{get:function(){return this.$store.getters.serverSelection},set:function(e){this.$store.dispatch("setServerSelection",e)}},notificationData:{get:function(){return this.$store.getters.notificationData},set:function(e){this.$store.dispatch("setNotificationData",e)}}},methods:{clearButtonisClicked:function(){console.log("clearButtonisClicked");var e={path:"Path: ",body:"Body: "};this.notificationData=e}},created:function(){console.log("HomeNotification is created")}});const ot=(0,m.Z)(tt,[["render",et],["__scopeId","data-v-18239eb4"]]);var rt=ot,nt=function(e){return(0,n.dD)("data-v-4c9647ed"),e=e(),(0,n.Cn)(),e},st={class:"homeLog"},it={class:"card"},ct={class:"card-header"},at={class:"row"},lt=nt((function(){return(0,n._)("div",{class:"col-auto h5 mt-2"},"LOG",-1)})),ut=nt((function(){return(0,n._)("div",{class:"col"},null,-1)})),dt={class:"col-auto pl-0"},pt={class:"input-group border ml-2"},ft=nt((function(){return(0,n._)("span",{class:"input-group-text"},"Order",-1)})),vt={class:"form-check form-check-inline pl-2"},ht=nt((function(){return(0,n._)("label",{for:"normalOrder",class:"form-check-label"},"Normal",-1)})),mt={class:"form-check form-check-inline pl-0 mr-0"},gt=nt((function(){return(0,n._)("label",{for:"reverseOrder",class:"form-check-label"},"Reverse",-1)})),yt={class:"col-auto mt-1 pl-0"},bt={class:"card-body",id:"message-monitor-body"},St={id:"message-list-wrapper"},wt=nt((function(){return(0,n._)("li",{class:"list-group-item d-flex align-items-start",id:"message-monitor-header",tabindex:"0"},[(0,n._)("span",{class:"col1"},"HH MM SS"),(0,n._)("span",{class:"col2"},"DIR"),(0,n._)("span",{class:"col3"},"DATA")],-1)})),_t={class:"col1"},Ct={class:"col2"},kt={key:0,class:"col3"},It={key:1,class:"col3"};function Lt(e,t,o,s,i,c){return(0,n.wg)(),(0,n.iD)("div",st,[(0,n._)("div",it,[(0,n._)("div",ct,[(0,n._)("div",at,[lt,ut,(0,n._)("div",dt,[(0,n._)("div",pt,[ft,(0,n._)("div",vt,[(0,n.wy)((0,n._)("input",{type:"radio",class:"form-check-input",id:"normalOrder","onUpdate:modelValue":t[0]||(t[0]=function(t){return e.rbOrder=t}),value:"normalOrder",onChange:t[1]||(t[1]=function(){for(var t=[],o=0;o<arguments.length;o++)t[o]=arguments[o];return e.rbOrderIsChanged&&e.rbOrderIsChanged.apply(e,t)})},null,544),[[r.G2,e.rbOrder]]),ht]),(0,n._)("div",mt,[(0,n.wy)((0,n._)("input",{type:"radio",class:"form-check-input",id:"reverseOrder","onUpdate:modelValue":t[2]||(t[2]=function(t){return e.rbOrder=t}),value:"reverseOrder",onChange:t[3]||(t[3]=function(){for(var t=[],o=0;o<arguments.length;o++)t[o]=arguments[o];return e.rbOrderIsChanged&&e.rbOrderIsChanged.apply(e,t)})},null,544),[[r.G2,e.rbOrder]]),gt])])]),(0,n._)("div",yt,[(0,n._)("button",{type:"button",class:"btn btn-secondary btn-sm fw-bold",onClick:t[4]||(t[4]=function(){for(var t=[],o=0;o<arguments.length;o++)t[o]=arguments[o];return e.clearButtonisClicked&&e.clearButtonisClicked.apply(e,t)})}," Clear "),(0,n._)("button",{type:"button",class:"btn btn-secondary btn-sm ms-1 fw-bold",onClick:t[5]||(t[5]=function(){for(var t=[],o=0;o<arguments.length;o++)t[o]=arguments[o];return e.downloadButtonisClicked&&e.downloadButtonisClicked.apply(e,t)})}," Download ")])])]),(0,n._)("div",bt,[(0,n._)("div",St,[(0,n._)("ul",{class:"list-group",id:"message-list",onKeyup:t[6]||(t[6]=(0,r.iM)((function(){}),["stop"])),onKeydown:t[7]||(t[7]=(0,r.iM)((function(){}),["stop"]))},[wt,((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.logArray,(function(e){return(0,n.wg)(),(0,n.iD)("li",{class:"list-group-item d-flex align-items-start",key:e.id,tabindex:"0"},[(0,n._)("span",_t,(0,R.zw)(e.timeStamp),1),(0,n._)("span",Ct,(0,R.zw)(e.direction),1),"REQ"===e.direction?((0,n.wg)(),(0,n.iD)("span",kt,(0,R.zw)(e.data)+" "+(0,R.zw)(e.body),1)):((0,n.wg)(),(0,n.iD)("span",It,[(0,n.Uk)("status code: "+(0,R.zw)(e.statusCode)+" ",1),(0,n._)("pre",null,(0,R.zw)(e.data),1)]))])})),128))],32)])])])])}console.log("HomeLog init");var Tt=S.v.fileName4Log,Dt=(0,n.aZ)({name:"HomeLog",data:function(){return{rbOrder:"normalOrder"}},computed:{logId:{get:function(){return this.$store.getters.logId},set:function(e){this.$store.dispatch("setLogId",e)}},logArray:{get:function(){return this.$store.getters.logArray},set:function(e){this.$store.dispatch("setLogArray",e)}}},methods:{rbOrderIsChanged:function(){console.log("rbOrderIsChanged",this.rbOrder),this.logArray.reverse()},clearButtonisClicked:function(){console.log("clearButtonisClicked"),this.logArray.length=0,this.rbOrder="normalOrder"},downloadButtonisClicked:function(){for(var e="",t=0,o=this.logArray;t<o.length;t++){var r=o[t];e+=r.timeStamp+","+r.direction+",","REQ"==r.direction?(e+=r.data,""==r.body?e+="\n":e+=",body:"+r.body+"\n"):e+=JSON.stringify(r.data)+"\n"}var n=new Blob([e],{type:"text/plain"}),s=URL.createObjectURL(n),i=document.createElement("a");document.body.appendChild(i),i.download=Tt,i.href=s,i.click(),i.remove(),URL.revokeObjectURL(s)}},created:function(){console.log("HomeLog is created")}});const Rt=(0,m.Z)(Dt,[["render",Lt],["__scopeId","data-v-4c9647ed"]]);var Ut=Rt;console.log("HomeView init");var Nt=(0,n.aZ)({name:"HomeView",components:{HomeSendRequest:_e,HomeRequestResponse:Ke,HomeNotification:rt,HomeLog:Ut}});const Ot=(0,m.Z)(Nt,[["render",D],["__scopeId","data-v-cd0e1ed4"]]);var qt,Et,Ht,At=Ot,$t=[{path:"/",name:"home",component:At},{path:"/about",name:"about",component:function(){return o.e(443).then(o.bind(o,625))}},{path:"/setting",name:"setting",component:function(){return o.e(443).then(o.bind(o,394))}}],Bt=(0,L.p7)({history:(0,L.r5)(),routes:$t}),Wt=Bt,Kt=o(907),jt=null!==(qt=localStorage.getItem("serverSelection"))&&void 0!==qt?qt:"server1",zt="server1"==jt?"server1":"server2",xt="server1"==zt?S.v.serverUrl1:S.v.serverUrl2,Mt=null!==(Et=localStorage.getItem("apiKey1"))&&void 0!==Et?Et:"",Pt=null!==(Ht=localStorage.getItem("apiKey2"))&&void 0!==Ht?Ht:"",Zt="server1"==zt?Mt:Pt;console.log("store init:",{serverSelection:zt},{serverUrl:xt},{apiKey:Zt});var Gt=[],Vt={path:"",body:"Body: "},Ft=(0,Kt.MT)({state:{serverSelection:zt,serverUrl:xt,apiKey:Zt,request:"Request:",statusCode:"Response: status code",response:"Response: data",logId:0,logArray:Gt,notificationData:Vt,webSocketIsConnected:!1},getters:{serverSelection:function(e){return e.serverSelection},serverUrl:function(e){return e.serverUrl},apiKey:function(e){return e.apiKey},request:function(e){return e.request},statusCode:function(e){return e.statusCode},response:function(e){return e.response},logId:function(e){return e.logId},logArray:function(e){return e.logArray},notificationData:function(e){return e.notificationData},webSocketIsConnected:function(e){return e.webSocketIsConnected}},mutations:{setServerSelection:function(e,t){e.serverSelection=t},setServerUrl:function(e,t){e.serverUrl=t},setApiKey:function(e,t){e.apiKey=t},setRequest:function(e,t){e.request=t},setStatusCode:function(e,t){e.statusCode=t},setResponse:function(e,t){e.response=t},setLogId:function(e,t){e.logId=t},setLogArray:function(e,t){e.logArray=t},setNotificationData:function(e,t){e.notificationData=t},setWebSocketIsConnected:function(e,t){e.webSocketIsConnected=t}},actions:{setServerSelection:function(e,t){var o=e.commit;o("setServerSelection",t)},setServerUrl:function(e,t){var o=e.commit;o("setServerUrl",t)},setApiKey:function(e,t){var o=e.commit;o("setApiKey",t)},setRequest:function(e,t){var o=e.commit;o("setRequest",t)},setStatusCode:function(e,t){var o=e.commit;o("setStatusCode",t)},setResponse:function(e,t){var o=e.commit;o("setResponse",t)},setLogId:function(e,t){var o=e.commit;o("setLogId",t)},setLogArray:function(e,t){var o=e.commit;o("setLogArray",t)},setNotificationData:function(e,t){var o=e.commit;o("setNotificationData",t)},setWebSocketIsConnected:function(e,t){var o=e.commit;o("setWebSocketIsConnected",t)}},modules:{}}),Yt=o(947),Qt=o(436),Jt=o(810);Yt.vI.add(Qt.J9Y),Yt.vI.add(Qt.b7W),Yt.vI.add(Qt.Fuz),Yt.vI.add(Qt.$aW),Yt.vI.add(Qt.nNP),(0,r.ri)(I).component("font-awesome-icon",Jt.GN).use(Ft).use(Wt).mount("#app")}},t={};function o(r){var n=t[r];if(void 0!==n)return n.exports;var s=t[r]={exports:{}};return e[r](s,s.exports,o),s.exports}o.m=e,function(){var e=[];o.O=function(t,r,n,s){if(!r){var i=1/0;for(u=0;u<e.length;u++){r=e[u][0],n=e[u][1],s=e[u][2];for(var c=!0,a=0;a<r.length;a++)(!1&s||i>=s)&&Object.keys(o.O).every((function(e){return o.O[e](r[a])}))?r.splice(a--,1):(c=!1,s<i&&(i=s));if(c){e.splice(u--,1);var l=n();void 0!==l&&(t=l)}}return t}s=s||0;for(var u=e.length;u>0&&e[u-1][2]>s;u--)e[u]=e[u-1];e[u]=[r,n,s]}}(),function(){o.d=function(e,t){for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){o.f={},o.e=function(e){return Promise.all(Object.keys(o.f).reduce((function(t,r){return o.f[r](e,t),t}),[]))}}(),function(){o.u=function(e){return"js/about.42d2bce4.js"}}(),function(){o.miniCssF=function(e){return"css/about.24c1af6e.css"}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="elwebapitool2:";o.l=function(r,n,s,i){if(e[r])e[r].push(n);else{var c,a;if(void 0!==s)for(var l=document.getElementsByTagName("script"),u=0;u<l.length;u++){var d=l[u];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+s){c=d;break}}c||(a=!0,c=document.createElement("script"),c.charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.setAttribute("data-webpack",t+s),c.src=r),e[r]=[n];var p=function(t,o){c.onerror=c.onload=null,clearTimeout(f);var n=e[r];if(delete e[r],c.parentNode&&c.parentNode.removeChild(c),n&&n.forEach((function(e){return e(o)})),t)return t(o)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=p.bind(null,c.onerror),c.onload=p.bind(null,c.onload),a&&document.head.appendChild(c)}}}(),function(){o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){o.p="/"}(),function(){var e=function(e,t,o,r){var n=document.createElement("link");n.rel="stylesheet",n.type="text/css";var s=function(s){if(n.onerror=n.onload=null,"load"===s.type)o();else{var i=s&&("load"===s.type?"missing":s.type),c=s&&s.target&&s.target.href||t,a=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");a.code="CSS_CHUNK_LOAD_FAILED",a.type=i,a.request=c,n.parentNode.removeChild(n),r(a)}};return n.onerror=n.onload=s,n.href=t,document.head.appendChild(n),n},t=function(e,t){for(var o=document.getElementsByTagName("link"),r=0;r<o.length;r++){var n=o[r],s=n.getAttribute("data-href")||n.getAttribute("href");if("stylesheet"===n.rel&&(s===e||s===t))return n}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){n=i[r],s=n.getAttribute("data-href");if(s===e||s===t)return n}},r=function(r){return new Promise((function(n,s){var i=o.miniCssF(r),c=o.p+i;if(t(i,c))return n();e(r,c,n,s)}))},n={143:0};o.f.miniCss=function(e,t){var o={443:1};n[e]?t.push(n[e]):0!==n[e]&&o[e]&&t.push(n[e]=r(e).then((function(){n[e]=0}),(function(t){throw delete n[e],t})))}}(),function(){var e={143:0};o.f.j=function(t,r){var n=o.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else{var s=new Promise((function(o,r){n=e[t]=[o,r]}));r.push(n[2]=s);var i=o.p+o.u(t),c=new Error,a=function(r){if(o.o(e,t)&&(n=e[t],0!==n&&(e[t]=void 0),n)){var s=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;c.message="Loading chunk "+t+" failed.\n("+s+": "+i+")",c.name="ChunkLoadError",c.type=s,c.request=i,n[1](c)}};o.l(i,a,"chunk-"+t,t)}},o.O.j=function(t){return 0===e[t]};var t=function(t,r){var n,s,i=r[0],c=r[1],a=r[2],l=0;if(i.some((function(t){return 0!==e[t]}))){for(n in c)o.o(c,n)&&(o.m[n]=c[n]);if(a)var u=a(o)}for(t&&t(r);l<i.length;l++)s=i[l],o.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return o.O(u)},r=self["webpackChunkelwebapitool2"]=self["webpackChunkelwebapitool2"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=o.O(void 0,[998],(function(){return o(377)}));r=o.O(r)})();
//# sourceMappingURL=app.7048fb6e.js.map