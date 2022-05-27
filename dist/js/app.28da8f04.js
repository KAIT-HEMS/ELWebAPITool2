(function(){"use strict";var e={601:function(e,t,r){r.d(t,{v:function(){return o}});var o={version:"V 2.0.0",releaseDate:"2022.05.27",copyright:"Copyright 2022 Kanagawa Institute of Technology",serverUrl1:"https://webapiechonet.com/elapi/v1",serverUrl2:"https://www.smarthouse-center.org/elapi/v1",fileName4Log:"log_elapi.txt",addDeviceList:["temperatureSensor","electricEnergySensor","currentSensor","homeAirConditioner","airConditionerVentilationFan","instantaneousWaterHeater","coldOrHotWaterHeatSourceEquipment","fuelCell","storageBattery","evChargerDischarger","lvSmartElectricEnergyMeter","hvSmartElectricEnergyMeter","generalLighting","evCharger","enhancedLightingSystem","controller","ventilationFan","airCleaner","commercialAirConditionerIndoorUnit","commercialAirConditionerOutdoorUnit","electricRainDoor","electricWaterHeater","electricLock","bathroomHeaterDryer","pvPowerGeneration","wattHourMeter","floorHeater","powerDistributionBoardMetering","monoFunctionalLighting","refrigerator","cookingHeater","riceCooker","commercialShowcase","commercialShowcaseOutdoorUnit","switch","hybridWaterHeater","washerDryer","tv"]}},916:function(e,t,r){var o=r(963),n=r(252),i={class:"container"},s={role:"main",class:"container px-0"};function c(e,t,r,o,c,a){var l=(0,n.up)("NavHeader"),d=(0,n.up)("router-view");return(0,n.wg)(),(0,n.iD)("div",i,[(0,n._)("header",null,[(0,n.Wm)(l)]),(0,n._)("main",s,[(0,n.Wm)(d)])])}const a={class:"navbar navbar-expand-lg navbar-secondary bg-secondary"},l={class:"container-fluid"},d=(0,n._)("div",null,[(0,n._)("a",{class:"navbar-brand",href:"#",style:{color:"#ffffff"}},"ECHONET Lite WebAPI Tool")],-1),u={class:"d-flex"},p={class:"btn",title:"Back to the home"},v={class:"btn",title:"Setting"},f={class:"btn",title:"About"};function h(e,t){const r=(0,n.up)("font-awesome-icon"),o=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)("nav",a,[(0,n._)("div",l,[d,(0,n._)("div",u,[(0,n.Wm)(o,{to:"/"},{default:(0,n.w5)((()=>[(0,n._)("a",p,[(0,n.Wm)(r,{icon:"home",style:{color:"#eeeeee"}})])])),_:1}),(0,n.Wm)(o,{to:"/setting"},{default:(0,n.w5)((()=>[(0,n._)("a",v,[(0,n.Wm)(r,{icon:"cog",style:{color:"#eeeeee"}})])])),_:1}),(0,n.Wm)(o,{to:"/about"},{default:(0,n.w5)((()=>[(0,n._)("a",f,[(0,n.Wm)(r,{icon:"question-circle",style:{color:"#eeeeee"}})])])),_:1})])])])}var m=r(744);const y={},g=(0,m.Z)(y,[["render",h]]);var b=g,S=r(601),_=S.v.version,w=S.v.releaseDate;console.log("App.vue: init",{version:_},{releaseData:w});var T={components:{NavHeader:b}};const C=(0,m.Z)(T,[["render",c]]);var L=C,k=r(119),U=r(577),I=function(e){return(0,n.dD)("data-v-19a2c45c"),e=e(),(0,n.Cn)(),e},O={class:"home"},E={class:"card"},N={class:"card-header"},D={class:"row"},R=I((function(){return(0,n._)("div",{class:"col-auto h5 mt-2"},"Send Request",-1)})),K=I((function(){return(0,n._)("div",{class:"col"},null,-1)})),A={class:"col-auto mt-2"},j=I((function(){return(0,n._)("div",{class:"col-auto"},null,-1)})),H={class:"col-auto mt-1 pl-0"},z={class:"card-body pt-2 pb-2"},B={class:"row g-1"},q={class:"col-md-1"},x=I((function(){return(0,n._)("label",{for:"inputMethod"},"Method",-1)})),M={class:"col-md-2"},W=I((function(){return(0,n._)("label",{for:"inputService"},"Service",-1)})),P={class:"col-md-2"},$=I((function(){return(0,n._)("label",{for:"inputId"},"Id",-1)})),G=["title"],V={class:"col-md-2"},F=I((function(){return(0,n._)("label",{for:"inputResourceType"},"Resource Type",-1)})),Z={class:"col-md-3"},Q=I((function(){return(0,n._)("label",{for:"inputResourceName"},"Resource Name",-1)})),Y={class:"col-md-2"},J=I((function(){return(0,n._)("label",{for:"inputQuery"},"URL Parameters",-1)})),X={class:"row",id:"second-line"},ee=I((function(){return(0,n._)("div",{class:"col-md-3"},null,-1)})),te={class:"col-md-2"},re={class:"row"},oe={class:"col-md-9"},ne={class:"input-group mb-2 mx-1"},ie=I((function(){return(0,n._)("span",{class:"input-group-text"},"Body data",-1)})),se=I((function(){return(0,n._)("div",{class:"col-auto"},null,-1)})),ce={class:"col-auto mt-1 pl-0"},ae={class:"card"},le=I((function(){return(0,n._)("div",{class:"card-header"},[(0,n._)("div",{class:"row"},[(0,n._)("div",{class:"col-auto h5 mt-2"},"Request & Response")])],-1)})),de={class:"card-body",id:"request-response-body"},ue={id:"request-response-wrapper"},pe={class:"list-group",id:"request-response-list"},ve={class:"list-group-item"},fe={class:"list-group-item"},he={class:"list-group-item"},me={class:"card"},ye={class:"card-header"},ge={class:"row"},be=I((function(){return(0,n._)("div",{class:"col-auto h5 mt-2"},"LOG",-1)})),Se=I((function(){return(0,n._)("div",{class:"col"},null,-1)})),_e={class:"col-auto pl-0"},we={class:"input-group border ml-2"},Te=I((function(){return(0,n._)("span",{class:"input-group-text"},"Order",-1)})),Ce={class:"form-check form-check-inline pl-2"},Le=I((function(){return(0,n._)("label",{for:"normalOrder",class:"form-check-label"},"Normal",-1)})),ke={class:"form-check form-check-inline pl-0 mr-0"},Ue=I((function(){return(0,n._)("label",{for:"reverseOrder",class:"form-check-label"},"Reverse",-1)})),Ie={class:"col-auto mt-1 pl-0"},Oe={class:"card-body",id:"message-monitor-body"},Ee={id:"message-list-wrapper"},Ne=I((function(){return(0,n._)("li",{class:"list-group-item d-flex align-items-start",id:"message-monitor-header",tabindex:"0"},[(0,n._)("span",{class:"col1"},"HH MM SS"),(0,n._)("span",{class:"col2"},"DIR"),(0,n._)("span",{class:"col3"},"DATA")],-1)})),De={class:"col1"},Re={class:"col2"},Ke={key:0,class:"col3"},Ae={key:1,class:"col3"};function je(e,t,r,i,s,c){return(0,n.wg)(),(0,n.iD)("div",O,[(0,n._)("div",E,[(0,n._)("div",N,[(0,n._)("div",D,[R,K,(0,n._)("div",A,(0,U.zw)(e.serverUrl)+(0,U.zw)(e.url),1),j,(0,n._)("div",H,[(0,n._)("button",{type:"button",class:"btn btn-secondary btn-sm fw-bold",title:"Send request",onClick:t[0]||(t[0]=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return e.sendButtonIsClicked&&e.sendButtonIsClicked.apply(e,t)})}," Send ")])])]),(0,n._)("div",z,[(0,n._)("form",null,[(0,n._)("div",B,[(0,n._)("div",q,[x,(0,n.wy)((0,n._)("select",{id:"inputMethod",class:"form-control","onUpdate:modelValue":t[1]||(t[1]=function(t){return e.methodSelected=t}),onChange:t[2]||(t[2]=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return e.methodIsUpdated&&e.methodIsUpdated.apply(e,t)}),style:(0,U.j5)(e.methodStyle)},[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.methodList,(function(e){return(0,n.wg)(),(0,n.iD)("option",{key:e.id},(0,U.zw)(e),1)})),128))],36),[[o.bM,e.methodSelected]])]),(0,n._)("div",M,[W,(0,n.wy)((0,n._)("select",{id:"inputService",class:"form-control","onUpdate:modelValue":t[3]||(t[3]=function(t){return e.serviceSelected=t}),onChange:t[4]||(t[4]=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return e.serviceIsUpdated&&e.serviceIsUpdated.apply(e,t)}),style:(0,U.j5)(e.serviceStyle)},[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.serviceList,(function(e){return(0,n.wg)(),(0,n.iD)("option",{key:e.id},(0,U.zw)(e),1)})),128))],36),[[o.bM,e.serviceSelected]])]),(0,n._)("div",P,[$,(0,n.wy)((0,n._)("select",{id:"inputId",class:"form-control",title:"Id","onUpdate:modelValue":t[5]||(t[5]=function(t){return e.idSelected=t}),onChange:t[6]||(t[6]=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return e.idIsUpdated&&e.idIsUpdated.apply(e,t)})},[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.idInfoList,(function(e){return(0,n.wg)(),(0,n.iD)("option",{title:e.deviceType,key:e.id},(0,U.zw)(e.id),9,G)})),128))],544),[[o.bM,e.idSelected]])]),(0,n._)("div",V,[F,(0,n.wy)((0,n._)("select",{id:"inputResourceType",class:"form-control","onUpdate:modelValue":t[7]||(t[7]=function(t){return e.resourceTypeSelected=t}),onChange:t[8]||(t[8]=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return e.resourceTypeIsUpdated&&e.resourceTypeIsUpdated.apply(e,t)}),style:(0,U.j5)(e.resourceTypeStyle)},[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.resourceTypeList,(function(e){return(0,n.wg)(),(0,n.iD)("option",{key:e.id},(0,U.zw)(e),1)})),128))],36),[[o.bM,e.resourceTypeSelected]])]),(0,n._)("div",Z,[Q,(0,n.wy)((0,n._)("select",{id:"inputResourceName",class:"form-control","onUpdate:modelValue":t[9]||(t[9]=function(t){return e.resourceNameSelected=t}),onChange:t[10]||(t[10]=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return e.resourceNameIsUpdated&&e.resourceNameIsUpdated.apply(e,t)}),style:(0,U.j5)(e.resourceNameStyle)},[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.resourceNameList,(function(e){return(0,n.wg)(),(0,n.iD)("option",{key:e.id},(0,U.zw)(e),1)})),128))],36),[[o.bM,e.resourceNameSelected]])]),(0,n._)("div",Y,[J,(0,n.wy)((0,n._)("input",{type:"text",class:"form-control",id:"inputQuery","onUpdate:modelValue":t[11]||(t[11]=function(t){return e.query=t}),style:(0,U.j5)(e.queryStyle)},null,4),[[o.nr,e.query]])])]),(0,n._)("div",X,[ee,(0,n._)("div",te,[(0,n._)("label",null,(0,U.zw)(e.deviceType),1)])]),(0,n._)("div",re,[(0,n._)("div",oe,[(0,n._)("div",ne,[ie,(0,n.wy)((0,n._)("input",{type:"text",class:"form-control",id:"inputBody","onUpdate:modelValue":t[12]||(t[12]=function(t){return e.body=t}),style:(0,U.j5)(e.bodyStyle)},null,4),[[o.nr,e.body]])])]),se,(0,n._)("div",ce,[(0,n._)("button",{type:"button",class:"btn btn-secondary btn-sm fw-bold",title:"Copy from Response",onClick:t[13]||(t[13]=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return e.copyFromResponseButtonIsClicked&&e.copyFromResponseButtonIsClicked.apply(e,t)})}," Copy from Response ")])])])])]),(0,n._)("div",ae,[le,(0,n._)("div",de,[(0,n._)("div",ue,[(0,n._)("ul",pe,[(0,n._)("li",ve,(0,U.zw)(e.request),1),(0,n._)("li",fe,(0,U.zw)(e.statusCode),1),(0,n._)("li",he,[(0,n._)("pre",null,(0,U.zw)(e.response),1)])])])])]),(0,n._)("div",me,[(0,n._)("div",ye,[(0,n._)("div",ge,[be,Se,(0,n._)("div",_e,[(0,n._)("div",we,[Te,(0,n._)("div",Ce,[(0,n.wy)((0,n._)("input",{type:"radio",class:"form-check-input",id:"normalOrder","onUpdate:modelValue":t[14]||(t[14]=function(t){return e.rbOrder=t}),value:"normalOrder",onChange:t[15]||(t[15]=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return e.rbOrderIsChanged&&e.rbOrderIsChanged.apply(e,t)})},null,544),[[o.G2,e.rbOrder]]),Le]),(0,n._)("div",ke,[(0,n.wy)((0,n._)("input",{type:"radio",class:"form-check-input",id:"reverseOrder","onUpdate:modelValue":t[16]||(t[16]=function(t){return e.rbOrder=t}),value:"reverseOrder",onChange:t[17]||(t[17]=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return e.rbOrderIsChanged&&e.rbOrderIsChanged.apply(e,t)})},null,544),[[o.G2,e.rbOrder]]),Ue])])]),(0,n._)("div",Ie,[(0,n._)("button",{type:"button",class:"btn btn-secondary btn-sm fw-bold",onClick:t[18]||(t[18]=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return e.clearButtonisClicked&&e.clearButtonisClicked.apply(e,t)})}," Clear "),(0,n._)("button",{type:"button",class:"btn btn-secondary btn-sm ms-1 fw-bold",onClick:t[19]||(t[19]=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return e.downloadButtonisClicked&&e.downloadButtonisClicked.apply(e,t)})}," Download ")])])]),(0,n._)("div",Oe,[(0,n._)("div",Ee,[(0,n._)("ul",{class:"list-group",id:"message-list",onKeyup:t[20]||(t[20]=(0,o.iM)((function(){}),["stop"])),onKeydown:t[21]||(t[21]=(0,o.iM)((function(){}),["stop"]))},[Ne,((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.message_list,(function(e){return(0,n.wg)(),(0,n.iD)("li",{class:"list-group-item d-flex align-items-start",key:e.id,tabindex:"0"},[(0,n._)("span",De,(0,U.zw)(e.timeStamp),1),(0,n._)("span",Re,(0,U.zw)(e.direction),1),"REQ"===e.direction?((0,n.wg)(),(0,n.iD)("span",Ke,(0,U.zw)(e.data)+" "+(0,U.zw)(e.body),1)):((0,n.wg)(),(0,n.iD)("span",Ae,[(0,n.Uk)("status code: "+(0,U.zw)(e.statusCode)+" ",1),(0,n._)("pre",null,(0,U.zw)(e.data),1)]))])})),128))],32)])])])])}console.log("HomeView init");var He=[],ze=[],Be=!1,qe={},xe=[],Me=[],We="",Pe=S.v.fileName4Log,$e=(0,n.aZ)({data:function(){return{methodList:["GET","PUT","POST","DELETE"],methodSelected:"GET",serviceList:[""],serviceSelected:"",idInfoList:He,idSelected:"",idToolTip:"tool tip",deviceType:"",resourceTypeList:ze,resourceTypeSelected:"",resourceNameList:[""],resourceNameSelected:"",query:"",body:"",request:"Request:",statusCode:"Response: status code",response:"Response: data",rbOrder:"normalOrder",message_list:Me}},computed:{serverSelection:{get:function(){return this.$store.getters.serverSelection},set:function(e){this.$store.dispatch("setServerSelection",e)}},serverUrl:{get:function(){return this.$store.getters.serverUrl},set:function(e){this.$store.dispatch("setServerUrl",e)}},apiKey:{get:function(){return this.$store.getters.apiKey},set:function(e){this.$store.dispatch("setApiKey",e)}}},methods:{sendButtonIsClicked:function(){var e=this;console.log("SENDボタンがクリックされました。"),Be=!0;var t="";""!==this.serviceSelected&&(t+=this.serviceSelected,""!==this.idSelected&&(t+=this.idSelected,""!==this.resourceTypeSelected&&(t+=this.resourceTypeSelected,""!==this.resourceNameSelected&&(t+=this.resourceNameSelected,""!==this.query&&(t+="?"+this.query)))));var r=this.serverUrl+t;console.log("url",r);var o=new Headers({"Content-Type":"application/json"});"server1"==this.serverSelection?o.append("X-Elapi-key",this.apiKey):o.append("Authorization","Bearer "+this.apiKey);var n={method:this.methodSelected,headers:o};"GET"!==this.methodSelected&&(n.body=this.body),this.request="REQ: "+this.methodSelected+" "+r+"\n"+this.body,xe.push({timeStamp:Qe(),direction:"REQ",statusCode:We,data:this.methodSelected+" "+r,body:this.body}),this.message_list=Fe(this.rbOrder),fetch(r,n).then((function(t){var r=t.status+" "+t.statusText;return e.statusCode="RES: "+r,We=r,t.json()})).then((function(t){if(console.log("Success:",t),e.response=t,xe.push({timeStamp:Qe(),direction:"RES",statusCode:We,data:t,body:""}),e.message_list=Fe(e.rbOrder),"GET"==e.methodSelected){var o=/\/v1$/;if(o.test(r)){var n=[""];if(console.log("data.v1",t.v1),void 0!==t.v1)for(var i=0,s=t.v1;i<s.length;i++){var c=s[i];console.log("service",c),n.push("/"+c.name)}console.log("GET /elapi/v1 serviceListの更新:",n),e.serviceList=n,e.serviceSelected=n[1]?n[1]:""}var a="";if(o=/\/devices$/,o.test(r)&&(a="devices"),o=/\/groups$/,o.test(r)&&(a="groups"),o=/\/bulks$/,o.test(r)&&(a="bulks"),o=/\/histories$/,o.test(r)&&(a="histories"),""!==a){if(e.idInfoList=[{deviceType:"",id:""}],void 0!==t[a])for(var l=0,d=t[a];l<d.length;l++){var u=d[l],p=void 0!==u.deviceType?u.deviceType:"",v={id:"/"+u.id,deviceType:p};e.idInfoList.push(v)}e.idInfoList.sort((function(e,t){var r=e.deviceType.toUpperCase(),o=t.deviceType.toUpperCase();return r<o?-1:r>o?1:0})),console.log("GET /elapi/v1/devices idInfoListの更新:",He),Be&&(e.idSelected=e.idInfoList[1]?e.idInfoList[1].id:"",console.log("535 call updateDeviceType"),e.deviceType=Ge(e.idSelected.slice(1)))}if(a="",o=/\/devices\/([0-9]|[a-z]|[A-Z]|-|-)+$/,o.test(r)&&(a="devices"),o=/\/groups\/([0-9]|[a-z]|[A-Z]|-)+$/,o.test(r)&&(a="groups"),o=/\/bulks\/([0-9]|[a-z]|[A-Z]|-)+$/,o.test(r)&&(a="bulks"),o=/\/histories\/([0-9]|[a-z]|[A-Z]|-)+$/,o.test(r)&&(a="histories"),console.log("526 GET /elapi/v1/devices/<id> service:",a),""!==a){var f=r.split("/"),h=f[f.length-1],m=t,y=(p=void 0!==m.deviceType?m.deviceType:"",{deviceType:p,propertyList:[""],propertyListWritable:[""],actionList:[""]});if(void 0!==m.properties)for(var g=0,b=Object.keys(m.properties);g<b.length;g++){var S=b[g];y.propertyList.push("/"+S),!0===m.properties[S].writable&&y.propertyListWritable.push("/"+S)}if(void 0!==m.actions)for(var _=0,w=Object.keys(m.actions);_<w.length;_++){S=w[_];y.actionList.push("/"+S)}y.propertyList.sort(),y.propertyListWritable.sort(),y.actionList.sort(),console.log("533 thingId",h),console.log("534 thingInfo",y),console.log("535 g_thingInfo",qe),qe[h]=y,console.log("g_thingInfo",qe);var T=[""];void 0!==t.properties&&T.push("/properties"),void 0!==t.actions&&T.push("/actions"),void 0!==t.events&&T.push("/events"),console.log("resourceTypeListの更新:",T),e.resourceTypeList=T;var C=Ve("GET",h,"/properties");e.resourceNameSelected=C[0],e.resourceNameList=C[1],e.resourceTypeSelected=T[1]?T[1]:"",e.deviceType=t.deviceType}console.log("604"),Be=!1}})).catch((function(e){console.error("Error:",e)})),Be=!0},copyFromResponseButtonIsClicked:function(){console.log("server",this.serverSelection,"serverUrl",this.serverUrl,"apiKey",this.apiKey),this.body=JSON.stringify(this.response)},methodIsUpdated:function(){if(""!==this.serviceSelected&&""!==this.idSelected){console.log("methodIsUpdated:idSelected",this.idSelected);var e=this.idSelected.slice(1),t=[""];if(void 0!==qe[e]){switch(this.methodSelected){case"GET":this.body="",t=qe[e].propertyList,this.resourceTypeSelected="/properties";break;case"PUT":t=qe[e].propertyListWritable,this.resourceTypeSelected="/properties";break;case"POST":t=qe[e].actionList,this.resourceTypeSelected="/actions";break;case"DELETE":break}""!==this.resourceTypeSelected&&(this.resourceNameList=t)}}},serviceIsUpdated:function(){this.resourceTypeList=[""],this.resourceNameList=[""],this.idSelected="",this.resourceTypeSelected="",this.resourceNameSelected="",this.deviceType="",this.body=""},idIsUpdated:function(){console.log("idIsUpdated");var e=this.idSelected.slice(1);this.resourceTypeList=[""],this.resourceNameList=[""],this.deviceType="",this.resourceTypeSelected="",this.resourceNameSelected="",console.log("731 call updateDeviceType"),this.deviceType=Ge(e);var t=qe[e];if(void 0!==t){var r=[""];void 0!==t.propertyList&&r.push("/properties"),void 0!==t.actionList&&r.push("/actions"),this.resourceTypeList=r,this.resourceTypeSelected=r[1]?r[1]:"",Ve(this.methodSelected,e,this.resourceTypeSelected),this.resourceNameSelected=this.resourceNameList[1]?this.resourceNameList[1]:""}},resourceTypeIsUpdated:function(){Ve(this.methodSelected,this.idSelected.slice(1),this.resourceTypeSelected)},resourceNameIsUpdated:function(){this.resourceNameSelected},rbOrderIsChanged:function(){this.message_list=Fe(this.rbOrder)},clearButtonisClicked:function(){console.log("clearButtonisClicked"),xe.length=0,this.message_list=[]},downloadButtonisClicked:function(){Ze()}},created:function(){console.log("Home page is created"),console.log("serverSelection:",this.serverSelection,"serverUrl:",this.serverUrl,"apiKey:",this.apiKey)}});function Ge(e){for(var t=0,r=He;t<r.length;t++){var o=r[t];if(o.id=="/"+e)return o.deviceType}return""}function Ve(e,t,r){console.log("updateResourceName",e,t,r);var o=[],n="";if(""!==r){var i=qe[t];void 0!==i&&("/properties"==r&&"GET"==e&&(o=i.propertyList),"/properties"==r&&"PUT"==e&&(o=i.propertyListWritable),"/actions"==r&&"POST"==e&&(o=i.actionList),n=o[1]?o[1]:"",console.log("resourceNameSelected:",n,"resourceNameList:",o))}return[n,o]}function Fe(e){for(var t=[],r=0,o=Object.entries(xe);r<o.length;r++){var n=o[r],i=n[0],s=n[1],c={id:i,timeStamp:s.timeStamp,direction:s.direction,statusCode:"",data:"",body:""};"REQ"==s.direction||(c.statusCode=s.statusCode),c.data=s.data,t.push(c)}return"reverseOrder"==e&&t.reverse(),t}function Ze(){for(var e="",t=0,r=xe;t<r.length;t++){var o=r[t];e+=o.timeStamp+","+o.direction+",","REQ"==o.direction?(e+=o.data,""==o.body?e+="\n":e+=",body:"+o.body+"\n"):e+=JSON.stringify(o.data)+"\n"}var n=new Blob([e],{type:"text/plain"}),i=URL.createObjectURL(n),s=document.createElement("a");document.body.appendChild(s),s.download=Pe,s.href=i,s.click(),s.remove(),URL.revokeObjectURL(i)}function Qe(){var e=new Date,t=e.getHours().toString(),r=e.getMinutes().toString(),o=e.getSeconds().toString();return t=1==t.length?"0"+t:t,r=1==r.length?"0"+r:r,o=1==o.length?"0"+o:o,t+":"+r+":"+o}const Ye=(0,m.Z)($e,[["render",je],["__scopeId","data-v-19a2c45c"]]);var Je,Xe,et,tt=Ye,rt=[{path:"/",name:"home",component:tt},{path:"/about",name:"about",component:function(){return r.e(443).then(r.bind(r,213))}},{path:"/setting",name:"setting",component:function(){return r.e(443).then(r.bind(r,480))}}],ot=(0,k.p7)({history:(0,k.r5)(),routes:rt}),nt=ot,it=r(907),st=null!==(Je=localStorage.getItem("serverSelection"))&&void 0!==Je?Je:"server1";st="server2"==st?"server2":"server1";var ct="server1"==st?S.v.serverUrl1:S.v.serverUrl2,at=null!==(Xe=localStorage.getItem("apiKey1"))&&void 0!==Xe?Xe:"",lt=null!==(et=localStorage.getItem("apiKey2"))&&void 0!==et?et:"",dt="server1"==st?at:lt;console.log("store init: serverSelection",st,"serverUrl",ct,"apiKey",dt);var ut=(0,it.MT)({state:{serverSelection:st,serverUrl:ct,apiKey:dt},getters:{serverSelection:function(e){return e.serverSelection},serverUrl:function(e){return e.serverUrl},apiKey:function(e){return e.apiKey}},mutations:{setServerSelection:function(e,t){e.serverSelection=t},setServerUrl:function(e,t){e.serverUrl=t},setApiKey:function(e,t){e.apiKey=t}},actions:{setServerSelection:function(e,t){var r=e.commit;r("setServerSelection",t)},setServerUrl:function(e,t){var r=e.commit;r("setServerUrl",t)},setApiKey:function(e,t){var r=e.commit;r("setApiKey",t)}},modules:{}}),pt=r(947),vt=r(436),ft=r(810);pt.vI.add(vt.J9Y),pt.vI.add(vt.b7W),pt.vI.add(vt.Fuz),pt.vI.add(vt.$aW),(0,o.ri)(L).component("font-awesome-icon",ft.GN).use(ut).use(nt).mount("#app")}},t={};function r(o){var n=t[o];if(void 0!==n)return n.exports;var i=t[o]={exports:{}};return e[o](i,i.exports,r),i.exports}r.m=e,function(){var e=[];r.O=function(t,o,n,i){if(!o){var s=1/0;for(d=0;d<e.length;d++){o=e[d][0],n=e[d][1],i=e[d][2];for(var c=!0,a=0;a<o.length;a++)(!1&i||s>=i)&&Object.keys(r.O).every((function(e){return r.O[e](o[a])}))?o.splice(a--,1):(c=!1,i<s&&(s=i));if(c){e.splice(d--,1);var l=n();void 0!==l&&(t=l)}}return t}i=i||0;for(var d=e.length;d>0&&e[d-1][2]>i;d--)e[d]=e[d-1];e[d]=[o,n,i]}}(),function(){r.d=function(e,t){for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){r.f={},r.e=function(e){return Promise.all(Object.keys(r.f).reduce((function(t,o){return r.f[o](e,t),t}),[]))}}(),function(){r.u=function(e){return"js/about.2fe1df5e.js"}}(),function(){r.miniCssF=function(e){return"css/about.3c45db38.css"}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="elwebapitool2:";r.l=function(o,n,i,s){if(e[o])e[o].push(n);else{var c,a;if(void 0!==i)for(var l=document.getElementsByTagName("script"),d=0;d<l.length;d++){var u=l[d];if(u.getAttribute("src")==o||u.getAttribute("data-webpack")==t+i){c=u;break}}c||(a=!0,c=document.createElement("script"),c.charset="utf-8",c.timeout=120,r.nc&&c.setAttribute("nonce",r.nc),c.setAttribute("data-webpack",t+i),c.src=o),e[o]=[n];var p=function(t,r){c.onerror=c.onload=null,clearTimeout(v);var n=e[o];if(delete e[o],c.parentNode&&c.parentNode.removeChild(c),n&&n.forEach((function(e){return e(r)})),t)return t(r)},v=setTimeout(p.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=p.bind(null,c.onerror),c.onload=p.bind(null,c.onload),a&&document.head.appendChild(c)}}}(),function(){r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){r.p="/"}(),function(){var e=function(e,t,r,o){var n=document.createElement("link");n.rel="stylesheet",n.type="text/css";var i=function(i){if(n.onerror=n.onload=null,"load"===i.type)r();else{var s=i&&("load"===i.type?"missing":i.type),c=i&&i.target&&i.target.href||t,a=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");a.code="CSS_CHUNK_LOAD_FAILED",a.type=s,a.request=c,n.parentNode.removeChild(n),o(a)}};return n.onerror=n.onload=i,n.href=t,document.head.appendChild(n),n},t=function(e,t){for(var r=document.getElementsByTagName("link"),o=0;o<r.length;o++){var n=r[o],i=n.getAttribute("data-href")||n.getAttribute("href");if("stylesheet"===n.rel&&(i===e||i===t))return n}var s=document.getElementsByTagName("style");for(o=0;o<s.length;o++){n=s[o],i=n.getAttribute("data-href");if(i===e||i===t)return n}},o=function(o){return new Promise((function(n,i){var s=r.miniCssF(o),c=r.p+s;if(t(s,c))return n();e(o,c,n,i)}))},n={143:0};r.f.miniCss=function(e,t){var r={443:1};n[e]?t.push(n[e]):0!==n[e]&&r[e]&&t.push(n[e]=o(e).then((function(){n[e]=0}),(function(t){throw delete n[e],t})))}}(),function(){var e={143:0};r.f.j=function(t,o){var n=r.o(e,t)?e[t]:void 0;if(0!==n)if(n)o.push(n[2]);else{var i=new Promise((function(r,o){n=e[t]=[r,o]}));o.push(n[2]=i);var s=r.p+r.u(t),c=new Error,a=function(o){if(r.o(e,t)&&(n=e[t],0!==n&&(e[t]=void 0),n)){var i=o&&("load"===o.type?"missing":o.type),s=o&&o.target&&o.target.src;c.message="Loading chunk "+t+" failed.\n("+i+": "+s+")",c.name="ChunkLoadError",c.type=i,c.request=s,n[1](c)}};r.l(s,a,"chunk-"+t,t)}},r.O.j=function(t){return 0===e[t]};var t=function(t,o){var n,i,s=o[0],c=o[1],a=o[2],l=0;if(s.some((function(t){return 0!==e[t]}))){for(n in c)r.o(c,n)&&(r.m[n]=c[n]);if(a)var d=a(r)}for(t&&t(o);l<s.length;l++)i=s[l],r.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return r.O(d)},o=self["webpackChunkelwebapitool2"]=self["webpackChunkelwebapitool2"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=r.O(void 0,[998],(function(){return r(916)}));o=r.O(o)})();
//# sourceMappingURL=app.28da8f04.js.map