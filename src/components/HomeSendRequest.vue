<!-- components/HomeSendRequest.vue -->
<!-- Home page の Send Request component を作成する -->
<!-- Send ボタンの処理では、送信だけでなく受信処理も含む -->
<!-- Web socket の処理も含む -->

<template>
  <div class="homeSendRequest">
    <div class="card">
      <div class="card-header">
        <div class="row">
          <div class="col-auto h5 mt-2">Send Request</div>
          <div class="col-auto"></div>
          <!-- Display server URL -->
          <div class="col-auto mt-2">{{ serverUrl }}{{ url }}</div>
          <!-- Connect web socket ボタン for 実証システム-->
          <template v-if="serverSelection === 'server2'">
            <div class="col-auto mt-1 pl-0">
              <button
                type="button"
                class="btn btn-secondary btn-sm fw-bold mr-1"
                title="Connect web socket"
                v-on:click="connectButtonIsClicked"
              >
                Connect web socket
              </button>
              <a class="btn" title="Web Socket Is Connected">
                <font-awesome-icon
                  v-if="webSocketIsConnected"
                  icon="link"
                  style="color: #000000"
                />
              </a>
            </div>
          </template>
          <div class="col"></div>
          <!-- SENDボタン -->
          <div class="col-auto mt-1 pl-0">
            <button
              type="button"
              class="btn btn-secondary btn-sm fw-bold"
              title="Send request"
              v-on:click="sendButtonIsClicked"
            >
              Send
            </button>
          </div>
        </div>
      </div>

      <div class="card-body pt-2 pb-2">
        <form>
          <div class="row g-1">
            <!-- Method selection -->
            <div class="col-md-1">
              <label for="inputMethod">Method</label>
              <select
                id="inputMethod"
                class="form-control"
                v-model="methodSelected"
                v-on:change="methodIsUpdated"
                v-bind:style="methodStyle"
              >
                <option v-for="method in methodList" :key="method.id">
                  {{ method }}
                </option>
              </select>
            </div>
            <!-- Service selection -->
            <div class="col-md-2">
              <label for="inputService">Service</label>
              <select
                id="inputService"
                class="form-control"
                v-model="serviceSelected"
                v-on:change="serviceIsUpdated"
                v-bind:style="serviceStyle"
              >
                <option v-for="service in serviceList" :key="service.id">
                  {{ service }}
                </option>
              </select>
            </div>
            <!-- Id selection -->
            <div class="col-md-2">
              <label for="inputId">Id</label>
              <select
                id="inputId"
                class="form-control"
                title="Id"
                v-model="idSelected"
                v-on:change="idIsUpdated"
              >
                <option
                  v-for="idInfo in idInfoList"
                  v-bind:title="idInfo.deviceType"
                  :key="idInfo.id"
                >
                  {{ idInfo.id }}
                </option>
              </select>
            </div>
            <!-- Resource type selection -->
            <div class="col-md-2">
              <label for="inputResourceType">Resource Type</label>
              <select
                id="inputResourceType"
                class="form-control"
                v-model="resourceTypeSelected"
                v-on:change="resourceTypeIsUpdated"
                v-bind:style="resourceTypeStyle"
              >
                <option
                  v-for="resourceType in resourceTypeList"
                  :key="resourceType.id"
                >
                  {{ resourceType }}
                </option>
              </select>
            </div>
            <!-- Resource name selection -->
            <div class="col-md-3">
              <label for="inputResourceName">Resource Name</label>
              <select
                id="inputResourceName"
                class="form-control"
                v-model="resourceNameSelected"
                v-on:change="resourceNameIsUpdated"
                v-bind:style="resourceNameStyle"
              >
                <option
                  v-for="resourceName in resourceNameList"
                  :key="resourceName.id"
                >
                  {{ resourceName }}
                </option>
              </select>
            </div>
            <!-- URL parameters input -->
            <div class="col-md-2">
              <label for="inputQuery">URL Parameters</label>
              <input
                type="text"
                class="form-control"
                id="inputQuery"
                v-model="query"
                v-bind:style="queryStyle"
              />
            </div>
          </div>

          <!-- Display device type -->
          <div class="row" id="second-line">
            <div class="col-md-3"></div>
            <div class="col-md-2">
              <label>{{ deviceType }}</label>
            </div>
          </div>

          <div class="row">
            <!-- Body data input -->
            <div class="col-md-9">
              <div class="input-group mb-2 mx-1">
                <span class="input-group-text">Body data</span>
                <input
                  type="text"
                  class="form-control"
                  id="inputBody"
                  v-model="body"
                  v-bind:style="bodyStyle"
                />
              </div>
            </div>

            <!-- Copy from Response button -->
            <div class="col-auto"></div>
            <div class="col-auto mt-1 pl-0">
              <button
                type="button"
                class="btn btn-secondary btn-sm fw-bold"
                title="Copy from Response"
                v-on:click="copyFromResponseButtonIsClicked"
              >
                Copy from Response
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { config } from "../config";
import { Log, NotificationData, IdInfo } from "../global.d";

console.log("HomeSendRequest init");
const fileName4Log = config.fileName4Log; // log download のファイル名
let g_statusCode = ""; // fetch API の statusCode を保持するため
const idInfoList: IdInfo[] = []; // プロパティの初期化用データ
const resourceTypeList: string[] = []; // プロパティの初期化用データ
type ThingInfo = {
  deviceType: string;
  propertyList: string[];
  propertyListWritable: string[];
  actionList: string[];
};
let g_thingInfo: { [key: string]: ThingInfo } = {};
type Option = {
  method: string;
  headers: Headers;
  body?: string;
};

export default defineComponent({
  name: "HomeSendRequest",
  data() {
    return {
      methodList: ["GET", "PUT", "POST", "DELETE"],
      methodSelected: "GET",
      serviceList: [""], // [/devices, /groups]
      serviceSelected: "",
      idInfoList: idInfoList, // [{deviceType:"/aircon", id:"0123"},... ] GET /devices, groups, bulk, histories のレスポンスを利用
      idSelected: "",
      idToolTip: "tool tip",
      deviceType: "",
      resourceTypeList: resourceTypeList, // [/properties, /actions]
      resourceTypeSelected: "",
      resourceNameList: [""], // [/airFlowLevel, /roomTemperature,...]
      resourceNameSelected: "",
      query: "",
      body: "",
    };
  },
  computed: {
    serverSelection: {
      get() {
        return this.$store.getters.serverSelection;
      },
      set(value) {
        this.$store.dispatch("setServerSelection", value);
      },
    },
    serverUrl: {
      get() {
        return this.$store.getters.serverUrl;
      },
      set(value) {
        this.$store.dispatch("setServerUrl", value);
      },
    },
    apiKey: {
      get() {
        return this.$store.getters.apiKey;
      },
      set(value) {
        this.$store.dispatch("setApiKey", value);
      },
    },
    request: {
      get() {
        return this.$store.getters.request;
      },
      set(value) {
        this.$store.dispatch("setRequest", value);
      },
    },
    statusCode: {
      get() {
        return this.$store.getters.statusCode;
      },
      set(value) {
        this.$store.dispatch("setStatusCode", value);
      },
    },
    response: {
      get() {
        return this.$store.getters.response;
      },
      set(value) {
        this.$store.dispatch("setResponse", value);
      },
    },
    logId: {
      get() {
        return this.$store.getters.logId;
      },
      set(value) {
        this.$store.dispatch("setLogId", value);
      },
    },
    logArray: {
      get() {
        return this.$store.getters.logArray;
      },
      set(value) {
        this.$store.dispatch("setLogArray", value);
      },
    },
    notificationData: {
      get() {
        return this.$store.getters.notificationData;
      },
      set(value) {
        this.$store.dispatch("setNotificationData", value);
      },
    },
    webSocketIsConnected: {
      get() {
        return this.$store.getters.webSocketIsConnected;
      },
      set(value) {
        this.$store.dispatch("setWebSocketIsConnected", value);
      },
    },
  },
  methods: {
    // SENDボタンがクリックされたときの処理
    sendButtonIsClicked: function () {
      // UI から path, url の作成
      let path = "";
      if (this.serviceSelected !== "") {
        path += this.serviceSelected;
        if (this.idSelected !== "") {
          path += this.idSelected;
          if (this.resourceTypeSelected !== "") {
            path += this.resourceTypeSelected;
            if (this.resourceNameSelected !== "") {
              path += this.resourceNameSelected;
              if (this.query !== "") {
                path += "?" + this.query;
              }
            }
          }
        }
      }
      const url = this.serverUrl + path;
      console.log("method: sendButtonIsClicked", { url });
      const headers = new Headers({
        "Content-Type": "application/json",
      });
      if (this.serverSelection == "server1") {
        headers.append("X-Elapi-key", this.apiKey);
      } else if (this.serverSelection == "server2") {
        headers.append("Authorization", "Bearer " + this.apiKey);
      }
      let option: Option = {
        method: this.methodSelected,
        headers: headers,
      };
      if (this.methodSelected !== "GET") {
        option.body = this.body;
      }

      // Request & Response の 表示内容設定
      this.request =
        "REQ: " + this.methodSelected + " " + url + "\n" + this.body;
      // Request を LOGに追加
      let log: Log = {
        id: String(this.logId++),
        timeStamp: timeStamp(),
        direction: "REQ",
        statusCode: "",
        data: this.methodSelected + " " + url,
        body: this.body,
      };
      this.logArray.push(log);

      // ECHONET Lite WebAPI Server へのアクセス
      fetch(url, option)
        .then((response) => {
          // Response 内容設定
          const statusCode = response.status + " " + response.statusText;
          this.statusCode = "RES: " + statusCode;
          g_statusCode = statusCode;
          if (this.methodSelected == "DELETE") {
            this.response = "";
            return;
          } else {
            return response.json();
          }
        })
        .then((data) => {
          console.log("Success:", { data });
          // Response の data 内容設定
          this.response = data;
          // RESPONSE を LOG に追加
          let log: Log = {
            id: String(this.logId++),
            timeStamp: timeStamp(),
            direction: "RES",
            statusCode: g_statusCode,
            data: data,
            body: "",
          };
          this.logArray.push(log);

          // ECHONET Lite WebApi Serverからの response 処理
          if (this.methodSelected == "GET") {
            // GET /elapi/v1 の場合
            // serviceListを新規に作成する
            let regex = /\/v1$/; // 正規表現：行末が'/v1'
            if (regex.test(url)) {
              let serviceList = [""];
              if (data.v1 !== undefined) {
                for (let service of data.v1) {
                  serviceList.push("/" + service.name);
                }
              }
              console.log("GET /elapi/v1 serviceListの更新:", serviceList);
              this.serviceList = serviceList;
              // 入力フィールドserviceの表示項目の更新
              this.serviceSelected = serviceList[1] ? serviceList[1] : "";
            }

            // GET /elapi/v1/devices, groups, bulks, histories の場合
            // idInfoListを新規に作成する
            let service = "";
            regex = /\/devices$/; // 正規表現：行末が'/devices'
            if (regex.test(url)) {
              service = "devices";
            }
            regex = /\/groups$/; // 正規表現：行末が'/groups'
            if (regex.test(url)) {
              service = "groups";
            }
            regex = /\/bulks$/; // 正規表現：行末が'/bulks'
            if (regex.test(url)) {
              service = "bulks";
            }
            regex = /\/histories$/; // 正規表現：行末が'/histories'
            if (regex.test(url)) {
              service = "histories";
            }

            if (service !== "") {
              this.idInfoList = [{ deviceType: "", id: "" }];
              if (data[service] !== undefined) {
                for (let thing of data[service]) {
                  const deviceType =
                    thing.deviceType !== undefined ? thing.deviceType : "";
                  const idInfo = { id: "/" + thing.id, deviceType: deviceType };
                  this.idInfoList.push(idInfo);
                }
              }

              this.idInfoList.sort(function (a, b) {
                var nameA = a.deviceType.toUpperCase(); // 大文字と小文字を無視する
                var nameB = b.deviceType.toUpperCase(); // 大文字と小文字を無視する
                if (nameA < nameB) {
                  return -1;
                }
                if (nameA > nameB) {
                  return 1;
                }
                return 0;
              });
              console.log(
                "GET /elapi/v1/devices idInfoListの更新:",
                idInfoList
              );

              // 入力フィールドidの表示項目の更新
              this.idSelected = this.idInfoList[1] ? this.idInfoList[1].id : "";
              // Device Typeの表示項目の更新
              this.deviceType = updateDeviceType(this.idSelected.slice(1));
              console.log("call updateDeviceType()", this.idSelected.slice(1));
            }

            // GET /elapi/v1/devices, groups, bulks, histories/<id> の場合
            // responseはthing (device/group/bulk/history) description -> g_thingInfoに情報を追加
            // this.resourceTypeListにresource typeをpushする
            // this.resourceNameListにresource nameをpushする
            service = "";
            regex = /\/devices\/([0-9]|[a-z]|[A-Z]|-|-)+$/; // 正規表現'/devices/'の後、行末まで英数字
            if (regex.test(url)) {
              service = "devices";
            }
            regex = /\/groups\/([0-9]|[a-z]|[A-Z]|-)+$/; // 正規表現'/groups/'の後、行末まで英数字
            if (regex.test(url)) {
              service = "groups";
            }
            regex = /\/bulks\/([0-9]|[a-z]|[A-Z]|-)+$/; // 正規表現'/bulks/'の後、行末まで英数字
            if (regex.test(url)) {
              service = "bulks";
            }
            regex = /\/histories\/([0-9]|[a-z]|[A-Z]|-)+$/; // 正規表現'/histories/'の後、行末まで英数字
            if (regex.test(url)) {
              service = "histories";
            }
            console.log("GET /elapi/v1/<service>/<id>", { service });

            if (service !== "") {
              const pathElements = url.split("/"); // pathを'/'で分割して要素を配列にする
              const thingId = pathElements[pathElements.length - 1]; // 配列の最後の要素が <id>

              // Thing Desvription をもとに g_thingInfo を更新する
              const thingDescription = data;
              const deviceType =
                thingDescription.deviceType !== undefined
                  ? thingDescription.deviceType
                  : "";
              let thingInfo = {
                deviceType: deviceType,
                propertyList: [""],
                propertyListWritable: [""],
                actionList: [""],
              };

              // propertyList,propertyListWritableの作成
              if (thingDescription.properties !== undefined) {
                for (let resourceName of Object.keys(
                  thingDescription.properties
                )) {
                  thingInfo.propertyList.push("/" + resourceName);
                  if (
                    thingDescription.properties[resourceName].writable === true
                  ) {
                    thingInfo.propertyListWritable.push("/" + resourceName);
                  }
                }
              }

              // actionListの作成
              if (thingDescription.actions !== undefined) {
                for (let resourceName of Object.keys(
                  thingDescription.actions
                )) {
                  thingInfo.actionList.push("/" + resourceName);
                }
              }

              thingInfo.propertyList.sort();
              thingInfo.propertyListWritable.sort();
              thingInfo.actionList.sort();
              g_thingInfo[thingId] = thingInfo;
              console.log({ thingId }, { thingInfo }, { g_thingInfo });

              // resourceTypeListを新規に作成する
              let resourceTypeList = [""];
              if (data.properties !== undefined) {
                resourceTypeList.push("/properties");
              }
              if (data.actions !== undefined) {
                resourceTypeList.push("/actions");
              }
              if (data.events !== undefined) {
                resourceTypeList.push("/events");
              }
              this.resourceTypeList = resourceTypeList;
              console.log("resourceTypeListの更新:", { resourceTypeList });

              // 入力フィールドResouce TypeとResource Nameの表示項目の更新
              const urn = updateResourceName("GET", thingId, "/properties");
              this.resourceNameSelected = urn[0];
              this.resourceNameList = urn[1];
              this.resourceTypeSelected = resourceTypeList[1]
                ? resourceTypeList[1]
                : "";

              // 入力フィールドidの下のdeviceTypeの更新
              this.deviceType = data.deviceType;
            }
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    },

    // Connect ボタンがクリックされたときの処理: web socket の処理
    connectButtonIsClicked: function () {
      console.log("Connect Web Socket button is clicked");
      const url = "wss://www.smarthouse-center.org/ws/elapi";
      const ws = new WebSocket(url, ["echonetlite-protocol", this.apiKey]);

      ws.addEventListener("open", () => {
        console.log("WebSocket が接続されました。");
        this.webSocketIsConnected = true;
      });
      ws.addEventListener("close", () => {
        console.log("WebSocket が切断されました。");
        this.webSocketIsConnected = false;
        setTimeout(() => {
          this.connectButtonIsClicked();
        }, 1000);
      });
      ws.addEventListener("error", () => {
        console.log("WebSocket 接続に失敗しました。");
      });
      ws.addEventListener("message", (event) => {
        console.log("Web socket メッセージを受信しました。");
        const notificationData: NotificationData = JSON.parse(event.data);
        this.notificationData = notificationData;
        console.log("Web socket", { notificationData });
      });
    },

    // Copy from responseボタンがクリックされたときの処理
    copyFromResponseButtonIsClicked: function () {
      console.log(
        "server",
        this.serverSelection,
        "serverUrl",
        this.serverUrl,
        "apiKey",
        this.apiKey
      );
      this.body = JSON.stringify(this.response);
    },

    // 入力フィールド Method の値が変更された場合の処理
    // resourceTypeListとresourceNameListをupdate
    methodIsUpdated: function () {
      // serviceとdevice idがblankでなく、device descriptionが存在する場合
      if (this.serviceSelected !== "" && this.idSelected !== "") {
        console.log("methodIsUpdated:idSelected", this.idSelected);
        const thingId = this.idSelected.slice(1); // remove "/" from idSelected
        let resourceNameList = [""];
        if (g_thingInfo[thingId] !== undefined) {
          switch (this.methodSelected) {
            case "GET":
              this.body = "";
              resourceNameList = g_thingInfo[thingId].propertyList;
              this.resourceTypeSelected = "/properties";
              break;
            case "PUT":
              resourceNameList = g_thingInfo[thingId].propertyListWritable;
              this.resourceTypeSelected = "/properties";
              break;
            case "POST":
              resourceNameList = g_thingInfo[thingId].actionList;
              this.resourceTypeSelected = "/actions";
              break;
            case "DELETE":
              break;
          }
          if (this.resourceTypeSelected !== "") {
            this.resourceNameList = resourceNameList;
          }
        }
      }
    },

    // 入力フィールド service の値が変更された場合の処理
    serviceIsUpdated: function () {
      // this.idInfoList = [{}];
      this.resourceTypeList = [""];
      this.resourceNameList = [""];
      this.idSelected = "";
      this.resourceTypeSelected = "";
      this.resourceNameSelected = "";
      this.deviceType = "";
      this.body = "";
    },

    // 入力フィールド id の値が変更された場合の処理
    // this.deviceTypeをthis.idInfoListを利用してupdateする
    // 選択されたidのdevice descriptionが存在する場合は、resourceTypeとresourceNameを更新する
    idIsUpdated: function () {
      console.log("method: idIsUpdated");
      const thingId = this.idSelected.slice(1); // remove "/"
      this.resourceTypeList = [""];
      this.resourceNameList = [""];
      this.deviceType = "";
      this.resourceTypeSelected = "";
      this.resourceNameSelected = "";
      this.deviceType = updateDeviceType(thingId);
      const deviceInfo = g_thingInfo[thingId];
      if (deviceInfo !== undefined) {
        let resourceTypeList = [""];
        if (deviceInfo.propertyList !== undefined) {
          resourceTypeList.push("/properties");
        }
        if (deviceInfo.actionList !== undefined) {
          resourceTypeList.push("/actions");
        }
        this.resourceTypeList = resourceTypeList;
        this.resourceTypeSelected = resourceTypeList[1]
          ? resourceTypeList[1]
          : "";
        updateResourceName(
          this.methodSelected,
          thingId,
          this.resourceTypeSelected
        );
        this.resourceNameSelected = this.resourceNameList[1]
          ? this.resourceNameList[1]
          : "";
      }
    },

    // 入力フィールド resourceType の値が変更された場合の処理
    //  resourceNameListをupdateする
    resourceTypeIsUpdated: function () {
      const urn = updateResourceName(
        this.methodSelected,
        this.idSelected.slice(1),
        this.resourceTypeSelected
      );
      this.resourceNameSelected = urn[0];
      this.resourceNameList = urn[1];
    },

    // 入力フィールド resourceName の値が変更された場合の処理
    resourceNameIsUpdated: function () {
      const resourceNameSelected = this.resourceNameSelected;
    },
  },
  created: function () {
    console.log("HomeSendRequest is created");
    console.log(
      "serverSelection:",
      this.serverSelection,
      "serverUrl:",
      this.serverUrl,
      "apiKey:",
      this.apiKey
    );
  },
});

function updateDeviceType(deviceId: string): string {
  for (const idInfo of idInfoList) {
    if (idInfo.id == "/" + deviceId) {
      return idInfo.deviceType;
    }
  }
  return "";
}

// return value: resourceNameList
function updateResourceName(
  methodSelected: string,
  idSelected: string,
  resourceTypeSelected: string
): [string, string[]] {
  let resourceNameList: string[] = [];
  let resourceNameSelected = "";
  if (resourceTypeSelected !== "") {
    const thingInfo = g_thingInfo[idSelected];
    if (thingInfo !== undefined) {
      if (resourceTypeSelected == "/properties" && methodSelected == "GET") {
        resourceNameList = thingInfo.propertyList;
      }
      if (resourceTypeSelected == "/properties" && methodSelected == "PUT") {
        resourceNameList = thingInfo.propertyListWritable;
      }
      if (resourceTypeSelected == "/actions" && methodSelected == "POST") {
        resourceNameList = thingInfo.actionList;
      }
      resourceNameSelected = resourceNameList[1] ? resourceNameList[1] : "";
      console.log({ resourceNameSelected }, { resourceNameList });
    }
  }
  console.log(
    "function updateResourceName(",
    { methodSelected },
    { idSelected },
    { resourceTypeSelected },
    ")",
    { resourceNameSelected },
    { resourceNameList }
  );
  return [resourceNameSelected, resourceNameList];
}

// 現在時刻を取得する
function timeStamp(): string {
  const date = new Date();
  let hour = date.getHours().toString();
  let minute = date.getMinutes().toString();
  let second = date.getSeconds().toString();
  hour = hour.length == 1 ? "0" + hour : hour;
  minute = minute.length == 1 ? "0" + minute : minute;
  second = second.length == 1 ? "0" + second : second;
  return hour + ":" + minute + ":" + second;
}
</script>

<style scoped></style>
