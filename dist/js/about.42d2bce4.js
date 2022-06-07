"use strict";(self["webpackChunkelwebapitool2"]=self["webpackChunkelwebapitool2"]||[]).push([[443],{625:function(e,t,n){n.r(t),n.d(t,{default:function(){return u}});var i=n(252);const r={class:"about"},s=(0,i.uE)('<div><h4>ECHONET Lite WebAPI Toolについて</h4><div> この Tool は、エコーネットコンソーシアムが策定した <a href="https://echonet.jp/web_api/#guideline" target="_blank" rel="noreferrer"> ECHONET Lite WebAPI </a> の仕様を理解するためのツールです。<br> エコーネットコンソーシアムが会員向けに運用している実験サーバーへのアクセスを想定しています。<br> 実験サーバーについては <a href="https://echonet.jp/m_only/web_api_cloud/" target="_blank" rel="noreferrer"> こちらの会員限定ページ </a> を参照ください。 </div><h4>apiKeyについて</h4><div> このツールを使って実験サーバーにアクセスするには、あらかじめユーザー登録を行い、apiKeyの取得が必要です。<br> ユーザー登録は、上記の会員限定ページから行うことができます。<br> この Tool の設定画面でapiKeyを入力したのち、設定保存ボタンをクリックしてください。 </div></div>',1),o=[s];function a(e,t){return(0,i.wg)(),(0,i.iD)("div",r,o)}var c=n(744);const l={},d=(0,c.Z)(l,[["render",a]]);var u=d},394:function(e,t,n){n.r(t),n.d(t,{default:function(){return oe}});var i=n(252),r={class:"setting"};function s(e,t,n,s,o,a){var c=(0,i.up)("SettingServer"),l=(0,i.up)("SettingDevice");return(0,i.wg)(),(0,i.iD)("div",r,[(0,i._)("div",null,[(0,i.Wm)(c),(0,i.Wm)(l)])])}var o=n(577),a=n(963),c=function(e){return(0,i.dD)("data-v-4c1095ea"),e=e(),(0,i.Cn)(),e},l={class:"settingServer"},d={class:"card"},u={class:"card-header"},v={class:"row"},p=c((function(){return(0,i._)("div",{class:"col-auto h5 mt-2"},"ECHONET Lite WebAPI Server の設定",-1)})),h=c((function(){return(0,i._)("div",{class:"col"},null,-1)})),f={class:"col-auto mt-2"},g=c((function(){return(0,i._)("div",{class:"col-auto"},null,-1)})),y={class:"card-body pt-2 pb-2"},_={class:"input-group"},S=c((function(){return(0,i._)("span",{class:"input-group-text"},"Select a server",-1)})),K={class:"form-check"},m=c((function(){return(0,i._)("label",{class:"form-check-label",for:"server1"},"実験サーバー",-1)})),b={class:"form-check"},C=c((function(){return(0,i._)("label",{class:"form-check-label",for:"server2"},"実証システム",-1)})),D=c((function(){return(0,i._)("br",null,null,-1)})),k={class:"input-group"},I=c((function(){return(0,i._)("span",{class:"input-group-text"},"API key for 実験サーバー",-1)})),w={class:"input-group"},U=c((function(){return(0,i._)("span",{class:"input-group-text"},"API key for 実証システム",-1)}));function T(e,t,n,r,s,c){return(0,i.wg)(),(0,i.iD)("div",l,[(0,i._)("div",d,[(0,i._)("div",u,[(0,i._)("div",v,[p,h,(0,i._)("div",f,(0,o.zw)(e.serverUrl),1),g])]),(0,i._)("div",y,[(0,i._)("form",null,[(0,i._)("div",_,[S,(0,i._)("div",K,[(0,i.wy)((0,i._)("input",{class:"form-check-input",type:"radio",id:"server1",value:"server1","onUpdate:modelValue":t[0]||(t[0]=function(t){return e.serverSelection=t}),onChange:t[1]||(t[1]=function(t){return e.rbServerOnChange(t)})},null,544),[[a.G2,e.serverSelection]]),m]),(0,i._)("div",b,[(0,i.wy)((0,i._)("input",{class:"form-check-input",type:"radio",id:"server2",value:"server2","onUpdate:modelValue":t[2]||(t[2]=function(t){return e.serverSelection=t}),onChange:t[3]||(t[3]=function(t){return e.rbServerOnChange(t)})},null,544),[[a.G2,e.serverSelection]]),C]),D]),(0,i._)("div",k,[I,(0,i.wy)((0,i._)("input",{type:"text",class:"form-control",id:"inputApiKey1","onUpdate:modelValue":t[4]||(t[4]=function(t){return e.apiKey1=t}),onChange:t[5]||(t[5]=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return e.apiKeyOnChange1&&e.apiKeyOnChange1.apply(e,t)})},null,544),[[a.nr,e.apiKey1]])]),(0,i._)("div",w,[U,(0,i.wy)((0,i._)("input",{type:"text",class:"form-control",id:"inputApiKey2","onUpdate:modelValue":t[6]||(t[6]=function(t){return e.apiKey2=t}),onChange:t[7]||(t[7]=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return e.apiKeyOnChange2&&e.apiKeyOnChange2.apply(e,t)})},null,544),[[a.nr,e.apiKey2]])])])])])])}var E=n(601);console.log("SettingServer init");var L=(0,i.aZ)({name:"SettingServer",data:function(){var e,t;return{apiKey1:null!==(e=localStorage.getItem("apiKey1"))&&void 0!==e?e:"",apiKey2:null!==(t=localStorage.getItem("apiKey2"))&&void 0!==t?t:""}},computed:{serverSelection:{get:function(){return this.$store.getters.serverSelection},set:function(e){this.$store.dispatch("setServerSelection",e)}},serverUrl:{get:function(){return this.$store.getters.serverUrl},set:function(e){this.$store.dispatch("setServerUrl",e)}},apiKey:{get:function(){return this.$store.getters.apiKey},set:function(e){this.$store.dispatch("setApiKey",e)}}},methods:{rbServerOnChange:function(e){if(e.target instanceof HTMLInputElement){var t=e.target.value;console.log("rbServerOnChange",t),localStorage.setItem("serverSelection",t),this.serverSelection=t,this.serverUrl="server1"==t?E.v.serverUrl1:E.v.serverUrl2,this.apiKey="server1"==t?this.apiKey1:this.apiKey2}},apiKeyOnChange1:function(){localStorage.setItem("apiKey1",this.apiKey1),this.apiKey="server1"==this.serverSelection?this.apiKey1:this.apiKey2,console.log("apiKeyOnChange1:",this.apiKey1)},apiKeyOnChange2:function(){localStorage.setItem("apiKey2",this.apiKey2),this.apiKey="server1"==this.serverSelection?this.apiKey1:this.apiKey2,console.log("apiKeyOnChange2:",this.apiKey2)}},created:function(){console.log("Setting page: Server is created"),console.log("serverSelection:",this.serverSelection,"apiKey1:",this.apiKey1,"apiKey2:",this.apiKey2)}}),O=n(744);const A=(0,O.Z)(L,[["render",T],["__scopeId","data-v-4c1095ea"]]);var $=A,B=function(e){return(0,i.dD)("data-v-f7d4c418"),e=e(),(0,i.Cn)(),e},x={class:"settingDevice"},H={key:0,class:"card"},P={class:"card-header"},V={class:"row"},Z=B((function(){return(0,i._)("div",{class:"col-auto h5 mt-2"},"デバイスエミュレーションの設定",-1)})),W=B((function(){return(0,i._)("div",{class:"col"},null,-1)})),j={class:"col-auto"},z={class:"col-auto mt-1 pl-0"},G={class:"col-auto mt-1 pl-0"},N={class:"card-body",id:"setting-devices-body"},X={id:"setting-devices-list-wrapper"},M={class:"list-group",id:"setting-devices-list"},Y=B((function(){return(0,i._)("li",{class:"list-group-item d-flex align-items-start",id:"devices-header",tabindex:"0"},[(0,i._)("span",{class:"col1"},"Device Type"),(0,i._)("span",{class:"col2"},"Device Id"),(0,i._)("span",{class:"col3"},"削除")],-1)})),q={class:"col1"},F={class:"col2"},J={class:"col3"},Q=["onClick"];function R(e,t,n,r,s,c){var l=(0,i.up)("font-awesome-icon");return(0,i.wg)(),(0,i.iD)("div",x,["server1"===e.serverSelection?((0,i.wg)(),(0,i.iD)("div",H,[(0,i._)("div",P,[(0,i._)("form",null,[(0,i._)("div",V,[Z,W,(0,i._)("div",j,[(0,i.wy)((0,i._)("select",{id:"selectAddDevice",class:"form-control","onUpdate:modelValue":t[0]||(t[0]=function(t){return e.addDevice=t})},[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e.addDeviceList,(function(e){return(0,i.wg)(),(0,i.iD)("option",{key:e.id},(0,o.zw)(e),1)})),128))],512),[[a.bM,e.addDevice]])]),(0,i._)("div",z,[(0,i._)("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:t[1]||(t[1]=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return e.addDeviceButtonIsClicked&&e.addDeviceButtonIsClicked.apply(e,t)})}," デバイス追加 ")]),(0,i._)("div",G,[(0,i._)("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:t[2]||(t[2]=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return e.updateButtonIsClicked&&e.updateButtonIsClicked.apply(e,t)})}," UPDATE ")])])])]),(0,i._)("div",N,[(0,i._)("div",X,[(0,i._)("ul",M,[Y,((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e.idInfoList,(function(t,n){return(0,i.wg)(),(0,i.iD)("li",{class:"list-group-item d-flex align-items-start",key:t.id,tabindex:"0"},[(0,i._)("span",q,(0,o.zw)(t.deviceType),1),(0,i._)("span",F,(0,o.zw)(t.id),1),(0,i._)("span",J,[(0,i._)("button",{class:"btn btn-secondary btn-sm",type:"button",onClick:function(t){return e.deleteDeviceButtonIsClicked(n)}},[(0,i.Wm)(l,{icon:"trash",style:{color:"#eeeeee"}})],8,Q)])])})),128))])])])])):(0,i.kq)("",!0)])}console.log("SettingDevice init");var ee=[],te=(0,i.aZ)({name:"SettingDevice",data:function(){var e,t;return{apiKey1:null!==(e=localStorage.getItem("apiKey1"))&&void 0!==e?e:"",apiKey2:null!==(t=localStorage.getItem("apiKey2"))&&void 0!==t?t:"",addDevice:E.v.addDeviceList[3],addDeviceList:E.v.addDeviceList,idInfoList:ee}},computed:{serverSelection:{get:function(){return this.$store.getters.serverSelection},set:function(e){this.$store.dispatch("setServerSelection",e)}},serverUrl:{get:function(){return this.$store.getters.serverUrl},set:function(e){this.$store.dispatch("setServerUrl",e)}},apiKey:{get:function(){return this.$store.getters.apiKey},set:function(e){this.$store.dispatch("setApiKey",e)}}},methods:{deleteDeviceButtonIsClicked:function(e){var t=this,n=this.idInfoList[e].id,i=this.serverUrl+"/config/device"+n;console.log("Delete device, ",{url:i});var r=new Headers({"X-Elapi-key":this.apiKey}),s={method:"DELETE",headers:r};fetch(i,s).then((function(e){console.log("Delete",e.status),t.updateButtonIsClicked()})).catch((function(e){console.error("Delete Error:",e)}))},addDeviceButtonIsClicked:function(){var e=this,t=this.serverUrl+"/config/device/";console.log("Add device, ",{url:t},this.addDevice);var n='{"deviceType":"'+this.addDevice+'"}',i=new Headers({"X-Elapi-key":this.apiKey,"Content-Type":"application/json","Content-Length":n.length.toString()}),r={method:"POST",headers:i,body:n};fetch(t,r).then((function(e){return e.json()})).then((function(t){console.log("Add Success:",t),e.updateButtonIsClicked()})).catch((function(e){console.error("Add Error:",e)}))},updateButtonIsClicked:function(){var e=this,t=this.serverUrl+"/devices";console.log("Update devices, ",{url:t});var n=new Headers({"X-Elapi-key":this.apiKey}),i={method:"GET",headers:n};fetch(t,i).then((function(e){return e.json()})).then((function(t){console.log("Update devices",t);var n="devices";if(e.idInfoList=[],void 0!==t[n])for(var i=0,r=t[n];i<r.length;i++){var s=r[i],o=void 0!==s.deviceType?s.deviceType:"",a={id:"/"+s.id,deviceType:o};e.idInfoList.push(a)}e.idInfoList.sort((function(e,t){var n=e.deviceType.toUpperCase(),i=t.deviceType.toUpperCase();return n<i?-1:n>i?1:0}))})).catch((function(e){console.error("Update Error:",e)}))}},created:function(){console.log("Setting page: Device is created"),"server1"==this.serverSelection&&this.updateButtonIsClicked()}});const ne=(0,O.Z)(te,[["render",R],["__scopeId","data-v-f7d4c418"]]);var ie=ne;console.log("SettingView init");var re=(0,i.aZ)({name:"SettingView",components:{SettingServer:$,SettingDevice:ie}});const se=(0,O.Z)(re,[["render",s],["__scopeId","data-v-ab2a3e8c"]]);var oe=se}}]);
//# sourceMappingURL=about.42d2bce4.js.map