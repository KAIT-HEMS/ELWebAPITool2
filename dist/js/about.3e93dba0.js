"use strict";(self["webpackChunkelwebapitool2"]=self["webpackChunkelwebapitool2"]||[]).push([[443],{510:function(e,t,i){i.r(t),i.d(t,{default:function(){return u}});var n=i(252);const r={class:"about"},o=(0,n.uE)('<div class="card"><div class="card-header"><div class="row"><div class="col-auto h5 mt-2">ELWebAPITool について</div><div class="col"></div></div></div><div class="card-body" id="about-this-tool"><div><p> ELWebAPITool はエコーネットコンソーシアムが策定した <a href="https://echonet.jp/web_api/#guideline" target="_blank" rel="noreferrer"> ECHONET Lite WebAPI </a> を利用してサーバーにアクセスするクライアント側のアプリケーションプログラムです。 Windows または MacOS 上で動作します。 </p><p> エコーネットコンソーシアムがサービスを提供している ECHONET Lite WebAPI 実験クラウドと、神奈川工科大学スマートハウス研究センターがサービスを提供している ECHONET Lite WebAPI 実証システムにアクセスすることを想定しています。 </p></div></div></div><div class="card"><div class="card-header"><div class="row"><div class="col-auto h5 mt-2">実験クラウドについて</div><div class="col"></div></div></div><div class="card-body" id="about-jikkenn-server"><div><p> ECHONET Lite WebAPI 実験クラウド（以下、実験クラウドと省略します）は ECHONET Lite WebAPI のリファレンスサーバーです。 ECHONET Lite WebAPI で定義された全ての API を実装しています。 制御対象機器はサーバー内で静的にエミュレーションしています。 ELWebAPITool は実験クラウドがエミュレーションするデバイスの追加／削除機能も備えています。 </p><p> 実験クラウドでは、プロパティ値はサーバー上で静的に設定されています。 Device Description の &quot;writable&quot; が true のプロパティでは、PUT でプロパティ値を設定することが可能です。&quot;writable&quot; が false のプロパティの場合、PUT でプロパティ値を設定しようとすると、403 Forbidden がレスポンスされます。 &quot;writable&quot; が false のプロパティにおいて、動作確認のためにプロパティ値を変更したい場合は、実験クラウド専用のキーワード &quot;forced&quot;:true を body data に追加して PUT してください。 </p><p>例）{&quot;roomTemperature&quot;:22, &quot;forced&quot;:true}</p><p> 実験クラウドはエコーネットコンソーシアムの会員企業の方が利用できます。 エコーネットコンソーシアムの <a href="https://echonet.jp/m_only/web_api_cloud/" target="_blank" rel="noreferrer"> 会員限定ページ </a> から実験クラウドのアカウントを作成し、あらかじめ API キーを取得してください。 </p></div></div></div><div class="card"><div class="card-header"><div class="row"><div class="col-auto h5 mt-2">実証システムについて</div><div class="col"></div></div></div><div class="card-body" id="about-jisshou-system"><div><p> ECHONET Lite WebAPI 実証システム（以下、実証システムと省略します）は ECHONET Lite WebAPI を利用して ECHONET Lite 機器を制御するシステムです。ECHONET Lite の実機が接続された LAN 内に実証システム対応の Gateway 装置を設置することで、ECHONET Lite WebAPI を利用して インターネット経由でECHONET Lite の実機を制御することができます。なお、現時点で拡張機能 bulks, groups, histories は対応していません。 </p><p> 実証システムに関しては <a href="http://sh-center.org/contactus.html" target="_blank" rel="noreferrer"> 神奈川工科大学スマートハウス研究センター </a> に問い合わせください。 </p></div></div></div>',3),s=[o];function a(e,t){return(0,n.wg)(),(0,n.iD)("div",r,s)}var c=i(744);const l={},d=(0,c.Z)(l,[["render",a]]);var u=d},767:function(e,t,i){i.r(t),i.d(t,{default:function(){return ie}});var n=i(252),r={class:"setting"};function o(e,t,i,o,s,a){var c=(0,n.up)("SettingServerAndDevice");return(0,n.wg)(),(0,n.iD)("div",r,[(0,n._)("div",null,[(0,n.Wm)(c)])])}var s=i(577),a=i(963),c=function(e){return(0,n.dD)("data-v-013c79f7"),e=e(),(0,n.Cn)(),e},l={class:"settingServerAndDevice"},d={class:"card"},u={class:"card-header"},v={class:"row"},p=c((function(){return(0,n._)("div",{class:"col-auto h5 mt-2"},"ECHONET Lite WebAPI Server の設定",-1)})),f=c((function(){return(0,n._)("div",{class:"col"},null,-1)})),h={class:"col-auto mt-2"},y=c((function(){return(0,n._)("div",{class:"col-auto"},null,-1)})),g={class:"card-body pt-2 pb-2"},b={class:"input-group"},C=c((function(){return(0,n._)("span",{class:"input-group-text"},"Select a server",-1)})),_={class:"form-check"},K=c((function(){return(0,n._)("label",{class:"form-check-label",for:"server1","data-bs-toggle":"tooltip","data-bs-html":"true",title:"ECHONET Lite WebAPI のリファレンスサーバーです。制御対象機器はサーバー内で静的にエミュレーションします。"}," 実験クラウド",-1)})),m={class:"form-check"},E=c((function(){return(0,n._)("label",{c:"",lass:"form-check-label",for:"server2","data-bs-toggle":"tooltip",title:"ECHONET Lite WebAPI を利用して LAN 内の ECHONET Lite 機器を制御します。"},"実証システム",-1)})),k=c((function(){return(0,n._)("br",null,null,-1)})),A={class:"input-group"},I=c((function(){return(0,n._)("span",{class:"input-group-text"},"API key for 実験クラウド",-1)})),S={class:"input-group-text"},w={class:"input-group"},D=c((function(){return(0,n._)("span",{class:"input-group-text"},"API key for 実証システム",-1)})),T={class:"input-group-text"},L={key:0,class:"card"},O={class:"card-header"},U={class:"row"},P=c((function(){return(0,n._)("div",{class:"col-auto h5 mt-2"},"デバイスエミュレーションの設定",-1)})),H=c((function(){return(0,n._)("div",{class:"col"},null,-1)})),N={class:"col-auto"},B={class:"col-auto mt-1 pl-0"},W={class:"col-auto mt-1 pl-0"},q={class:"card-body",id:"setting-devices-body"},x={id:"setting-devices-list-wrapper"},G={class:"list-group",id:"setting-devices-list"},j=c((function(){return(0,n._)("li",{class:"list-group-item d-flex align-items-start",id:"devices-header",tabindex:"0"},[(0,n._)("span",{class:"col1"},"Device Type"),(0,n._)("span",{class:"col2"},"Device Id"),(0,n._)("span",{class:"col3"},"削除")],-1)})),V={class:"col1"},z={class:"col2"},$={class:"col3"},Z=["onClick"];function M(e,t,i,r,o,c){var M=(0,n.up)("font-awesome-icon");return(0,n.wg)(),(0,n.iD)("div",l,[(0,n._)("div",d,[(0,n._)("div",u,[(0,n._)("div",v,[p,f,(0,n._)("div",h,(0,s.zw)(e.serverUrl),1),y])]),(0,n._)("div",g,[(0,n._)("form",null,[(0,n._)("div",b,[C,(0,n._)("div",_,[(0,n.wy)((0,n._)("input",{class:"form-check-input",type:"radio",id:"server1",value:"server1","onUpdate:modelValue":t[0]||(t[0]=function(t){return e.serverSelection=t}),onChange:t[1]||(t[1]=function(t){return e.rbServerOnChange(t)})},null,544),[[a.G2,e.serverSelection]]),K]),(0,n._)("div",m,[(0,n.wy)((0,n._)("input",{class:"form-check-input",type:"radio",id:"server2",value:"server2","onUpdate:modelValue":t[2]||(t[2]=function(t){return e.serverSelection=t}),onChange:t[3]||(t[3]=function(t){return e.rbServerOnChange(t)})},null,544),[[a.G2,e.serverSelection]]),E]),k]),(0,n._)("div",A,[I,(0,n.wy)((0,n._)("input",{type:"text",class:"form-control",id:"inputApiKey1","onUpdate:modelValue":t[4]||(t[4]=function(t){return e.apiKey1=t}),onChange:t[5]||(t[5]=function(){for(var t=[],i=0;i<arguments.length;i++)t[i]=arguments[i];return e.apiKeyOnChange1&&e.apiKeyOnChange1.apply(e,t)})},null,544),[[a.nr,e.apiKey1]]),(0,n._)("button",{type:"button",class:"btn btn-outline-secondary btn-sm",onClick:t[6]||(t[6]=function(){for(var t=[],i=0;i<arguments.length;i++)t[i]=arguments[i];return e.updateButtonIsClicked&&e.updateButtonIsClicked.apply(e,t)})}," 確認 "),(0,n._)("span",S,(0,s.zw)(e.verifyApiKey1),1)]),(0,n._)("div",w,[D,(0,n.wy)((0,n._)("input",{type:"text",class:"form-control",id:"inputApiKey2","onUpdate:modelValue":t[7]||(t[7]=function(t){return e.apiKey2=t}),onChange:t[8]||(t[8]=function(){for(var t=[],i=0;i<arguments.length;i++)t[i]=arguments[i];return e.apiKeyOnChange2&&e.apiKeyOnChange2.apply(e,t)})},null,544),[[a.nr,e.apiKey2]]),(0,n._)("button",{type:"button",class:"btn btn-outline-secondary btn-sm",onClick:t[9]||(t[9]=function(){for(var t=[],i=0;i<arguments.length;i++)t[i]=arguments[i];return e.verifyApiKey2ButtonisCliked&&e.verifyApiKey2ButtonisCliked.apply(e,t)})}," 確認 "),(0,n._)("span",T,(0,s.zw)(e.verifyApiKey2),1)])])])]),"server1"===e.serverSelection?((0,n.wg)(),(0,n.iD)("div",L,[(0,n._)("div",O,[(0,n._)("form",null,[(0,n._)("div",U,[P,H,(0,n._)("div",N,[(0,n.wy)((0,n._)("select",{id:"selectAddDevice",class:"form-control","onUpdate:modelValue":t[10]||(t[10]=function(t){return e.addDevice=t})},[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.addDeviceList,(function(e){return(0,n.wg)(),(0,n.iD)("option",{key:e.id},(0,s.zw)(e),1)})),128))],512),[[a.bM,e.addDevice]])]),(0,n._)("div",B,[(0,n._)("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:t[11]||(t[11]=function(){for(var t=[],i=0;i<arguments.length;i++)t[i]=arguments[i];return e.addDeviceButtonIsClicked&&e.addDeviceButtonIsClicked.apply(e,t)})}," デバイス追加 ")]),(0,n._)("div",W,[(0,n._)("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:t[12]||(t[12]=function(){for(var t=[],i=0;i<arguments.length;i++)t[i]=arguments[i];return e.updateButtonIsClicked&&e.updateButtonIsClicked.apply(e,t)})}," UPDATE ")])])])]),(0,n._)("div",q,[(0,n._)("div",x,[(0,n._)("ul",G,[j,((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.idInfoList,(function(t,i){return(0,n.wg)(),(0,n.iD)("li",{class:"list-group-item d-flex align-items-start",key:t.id,tabindex:"0"},[(0,n._)("span",V,(0,s.zw)(t.deviceType),1),(0,n._)("span",z,(0,s.zw)(t.id),1),(0,n._)("span",$,[(0,n._)("button",{class:"btn btn-secondary btn-sm",type:"button",onClick:function(t){return e.deleteDeviceButtonIsClicked(i)}},[(0,n.Wm)(M,{icon:"trash",style:{color:"#eeeeee"}})],8,Z)])])})),128))])])])])):(0,n.kq)("",!0)])}var X=i(601);console.log("SettingServerAndDevice init");var Y=[],F=(0,n.aZ)({name:"SettingServerAndDevice",data:function(){var e,t;return{apiKey1:null!==(e=localStorage.getItem("apiKey1"))&&void 0!==e?e:"",apiKey2:null!==(t=localStorage.getItem("apiKey2"))&&void 0!==t?t:"",verifyApiKey1:"NG",verifyApiKey2:"NG",addDevice:X.v.addDeviceList[25],addDeviceList:X.v.addDeviceList,idInfoList:Y}},computed:{serverSelection:{get:function(){return this.$store.getters.serverSelection},set:function(e){this.$store.dispatch("setServerSelection",e)}},serverUrl:{get:function(){return this.$store.getters.serverUrl},set:function(e){this.$store.dispatch("setServerUrl",e)}},apiKey:{get:function(){return this.$store.getters.apiKey},set:function(e){this.$store.dispatch("setApiKey",e)}}},methods:{rbServerOnChange:function(e){if(e.target instanceof HTMLInputElement){var t=e.target.value;console.log("rbServerOnChange",t),localStorage.setItem("serverSelection",t),this.serverSelection=t,this.serverUrl="server1"==t?X.v.serverUrl1:X.v.serverUrl2,this.apiKey="server1"==t?this.apiKey1:this.apiKey2}},apiKeyOnChange1:function(){localStorage.setItem("apiKey1",this.apiKey1),this.apiKey="server1"==this.serverSelection?this.apiKey1:this.apiKey2,console.log("apiKeyOnChange1:",this.apiKey1)},apiKeyOnChange2:function(){localStorage.setItem("apiKey2",this.apiKey2),this.apiKey="server1"==this.serverSelection?this.apiKey1:this.apiKey2,console.log("apiKeyOnChange2:",this.apiKey2)},deleteDeviceButtonIsClicked:function(e){var t=this,i=this.idInfoList[e].id,n=X.v.serverUrl1+"/config/device"+i;console.log("Delete device, ",{url:n});var r=new Headers({"X-Elapi-key":this.apiKey}),o={method:"DELETE",headers:r};fetch(n,o).then((function(e){console.log("Delete",e.status),t.updateButtonIsClicked()})).catch((function(e){console.error("Delete Error:",e)}))},addDeviceButtonIsClicked:function(){var e=this,t=X.v.serverUrl1+"/config/device/";console.log("Add device, ",{url:t},this.addDevice);var i='{"deviceType":"'+this.addDevice+'"}',n=new Headers({"X-Elapi-key":this.apiKey,"Content-Type":"application/json","Content-Length":i.length.toString()}),r={method:"POST",headers:n,body:i};fetch(t,r).then((function(e){return e.json()})).then((function(t){console.log("Add Success:",t),e.updateButtonIsClicked()})).catch((function(e){console.error("Add Error:",e)}))},updateButtonIsClicked:function(){var e=this,t=X.v.serverUrl1+"/devices";console.log("Update devices, ",{url:t});var i=new Headers({"X-Elapi-key":this.apiKey1}),n={method:"GET",headers:i};fetch(t,n).then((function(e){return e.json()})).then((function(t){console.log("Update devices",t),"authError"==t.type?e.verifyApiKey1="NG":e.verifyApiKey1="OK";var i="devices";if(e.idInfoList=[],void 0!==t[i])for(var n=0,r=t[i];n<r.length;n++){var o=r[n],s=void 0!==o.deviceType?o.deviceType:"",a={id:"/"+o.id,deviceType:s};e.idInfoList.push(a)}e.idInfoList.sort((function(e,t){var i=e.deviceType.toUpperCase(),n=t.deviceType.toUpperCase();return i<n?-1:i>n?1:0}))})).catch((function(e){console.error("Update Error:",e)}))},verifyApiKey2ButtonisCliked:function(){var e=this,t=X.v.serverUrl2+"/devices";console.log("Verify apikey2, ",{url:t});var i=new Headers({Authorization:"Bearer "+this.apiKey2}),n={method:"GET",headers:i};fetch(t,n).then((function(e){return e.json()})).then((function(t){console.log("Update devices",t),"referenceError"==t.type?e.verifyApiKey2="NG":e.verifyApiKey2="OK"})).catch((function(e){console.error("Update Error:",e)}))}},created:function(){console.log("Setting page: Server and Device is created"),console.log("serverSelection:",this.serverSelection,"apiKey1:",this.apiKey1,"apiKey2:",this.apiKey2),this.updateButtonIsClicked(),this.verifyApiKey2ButtonisCliked()}}),J=i(744);const Q=(0,J.Z)(F,[["render",M],["__scopeId","data-v-013c79f7"]]);var R=Q;console.log("SettingView init");var ee=(0,n.aZ)({name:"SettingView",components:{SettingServerAndDevice:R}});const te=(0,J.Z)(ee,[["render",o],["__scopeId","data-v-19cd842f"]]);var ie=te}}]);
//# sourceMappingURL=about.3e93dba0.js.map