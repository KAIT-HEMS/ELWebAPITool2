<template>
  <div class="home">
    <!-- input data -->
    <!-- <div class="card mb-3"> -->
    <div class="card">
      <!-- input data header -->
      <div class="card-header">
        <div class="row">
          <div class="col-auto h5 mt-2">Send Request</div>
          <div class="col"></div>
          <div class="col-auto mt-2">{{ serverUrl }}{{ url }}</div>
          <div class="col-auto"></div>
          <div class="col-auto mt-1 pl-0">
            <!-- SENDボタン -->
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

      <!-- input data body -->
      <div class="card-body pt-2 pb-2">
        <form>
          <!-- 1st row -->
          <div class="row g-1">
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

          <!-- 2nd row -->
          <div class="row" id="second-line">
            <div class="col-md-3"></div>
            <div class="col-md-2">
              <label>{{ deviceType }}</label>
            </div>
          </div>

          <!-- 3rd row -->
          <div class="row">
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

    <!-- Request & Response -->
    <div class="card">
      <!-- R&R header-->
      <div class="card-header">
        <div class="row">
          <div class="col-auto h5 mt-2">Request & Response</div>
        </div>
      </div>

      <!-- R&R body -->
      <div class="card-body" id="request-response-body">
        <div id="request-response-wrapper">
          <ul class="list-group" id="request-response-list">
            <li class="list-group-item">{{ request }}</li>
            <li class="list-group-item">{{ statusCode }}</li>
            <li class="list-group-item">
              <pre>{{ response }}</pre>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- LOG -->
    <div class="card">
      <!-- LOG header-->
      <div class="card-header">
        <div class="row">
          <div class="col-auto h5 mt-2">LOG</div>
          <div class="col"></div>

          <!-- Order block -->
          <div class="col-auto pl-0">
            <div class="input-group border ml-2">
              <span class="input-group-text">Order</span>
              <!-- ラジオボタン:Normal -->
              <div class="form-check form-check-inline pl-2">
                <input
                  type="radio"
                  class="form-check-input"
                  id="normalOrder"
                  v-model="rbOrder"
                  value="normalOrder"
                  v-on:change="rbOrderIsChanged"
                />
                <label for="normalOrder" class="form-check-label">Normal</label>
              </div>
              <!-- ラジオボタン:Reverse -->
              <div class="form-check form-check-inline pl-0 mr-0">
                <input
                  type="radio"
                  class="form-check-input"
                  id="reverseOrder"
                  v-model="rbOrder"
                  value="reverseOrder"
                  v-on:change="rbOrderIsChanged"
                />
                <label for="reverseOrder" class="form-check-label"
                  >Reverse</label
                >
              </div>
            </div>
          </div>

          <div class="col-auto mt-1 pl-0">
            <!-- CLEARボタン -->
            <button
              type="button"
              class="btn btn-secondary btn-sm fw-bold"
              v-on:click="clearButtonisClicked"
            >
              Clear
            </button>
            <!-- Downloadボタン -->
            <button
              type="button"
              class="btn btn-secondary btn-sm ms-1 fw-bold"
              v-on:click="downloadButtonisClicked"
            >
              Download
            </button>
          </div>
        </div>
      </div>

      <!-- LOG body -->
      <div class="card-body" id="message-monitor-body">
        <div id="message-list-wrapper">
          <ul
            class="list-group"
            id="message-list"
            v-on:keyup.stop
            v-on:keydown.stop
          >
            <li
              class="list-group-item d-flex align-items-start"
              id="message-monitor-header"
              tabindex="0"
            >
              <span class="col1">HH MM SS</span>
              <span class="col2">DIR</span>
              <span class="col3">DATA</span>
            </li>
            <li
              v-for="message in message_list"
              class="list-group-item d-flex align-items-start"
              v-bind:key="message.id"
              tabindex="0"
            >
              <span class="col1">{{ message.timeStamp }}</span>
              <span class="col2">{{ message.direction }}</span>
              <span v-if="message.direction === 'REQ'" class="col3">
                {{ message.data }} {{ message.body }}
              </span>
              <span v-else class="col3"
                >status code: {{ message.statusCode }}
                <pre>{{ message.data }}</pre>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { config } from "../config";

console.log("HomeView init");

type IdInfo = {
  deviceType: string;
  id: string;
};
const idInfoList: IdInfo[] = []; // プロパティの初期化用データ
const resourceTypeList: string[] = []; // プロパティの初期化用データ
let g_flagSendButtonIsClicked = false; // Request & ResponseとLOGに不要なデータを表示しないためのflag
// let resourceNameSelected = "";
type ThingInfo = {
  deviceType: string;
  propertyList: string[];
  propertyListWritable: string[];
  actionList: string[];
};
let g_thingInfo: { [key: string]: ThingInfo } = {};
type DataLog = {
  timeStamp: string;
  direction: string;
  statusCode: string;
  data: string;
  body: string;
};
let g_dataLogArray: DataLog[] = []; // logを格納するarray
type Message = {
  id: string;
  timeStamp: string;
  direction: string;
  statusCode: string;
  data: string;
  body: string;
};
const message_list: Message[] = []; // プロパティの初期化用データ
let g_statusCode = ""; // fetch API の statusCode を保持するため
const fileName4Log = config.fileName4Log; // log download のファイル名

export default defineComponent({
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

      // Home page, Request & Response, LOG
      request: "Request:",
      statusCode: "Response: status code",
      response: "Response: data",
      rbOrder: "normalOrder", // "normalOrder" or "reverseOrder"
      message_list: message_list,
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
  },
  methods: {
    // SENDボタンがクリックされたときの処理
    sendButtonIsClicked: function () {
      console.log("SENDボタンがクリックされました。");
      g_flagSendButtonIsClicked = true;

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
      console.log("url", url);

      interface Option {
        method: string;
        headers: Headers;
        body?: string;
      }

      const headers = new Headers({
        "Content-Type": "application/json",
      });
      if (this.serverSelection == "server1") {
        headers.append("X-Elapi-key", this.apiKey);
      } else {
        // "server2"
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

      // REQUESTをLOGに追加
      g_dataLogArray.push({
        timeStamp: timeStamp(),
        direction: "REQ",
        statusCode: g_statusCode,
        data: this.methodSelected + " " + url,
        body: this.body,
      });

      // ログを表示
      this.message_list = displayLog(this.rbOrder);

      // ECHONET Lite WebAPI Server へのアクセス
      fetch(url, option)
        .then((response) => {
          // Request & Response の response 内容設定
          const statusCode = response.status + " " + response.statusText;
          this.statusCode = "RES: " + statusCode;
          g_statusCode = statusCode;
          return response.json();
        })
        .then((data) => {
          console.log("Success:", data);
          // Request & Response の data 内容設定
          this.response = data;

          // RESPONSE を LOG に追加
          g_dataLogArray.push({
            timeStamp: timeStamp(),
            direction: "RES",
            statusCode: g_statusCode,
            data: data,
            body: "",
          });

          // ログを表示
          this.message_list = displayLog(this.rbOrder);

          // ECHONET Lite WebApi Serverからのresponse処理
          // console.log("this.methodSelected", this.methodSelected);
          if (this.methodSelected == "GET") {
            // console.log("url", url);
            // GET /elapi/v1
            // serviceListを新規に作成する
            let regex = /\/v1$/; // 正規表現：行末が'/v1'
            if (regex.test(url)) {
              let serviceList = [""];
              console.log("data.v1", data.v1);
              if (data.v1 !== undefined) {
                for (let service of data.v1) {
                  console.log("service", service);
                  serviceList.push("/" + service.name);
                }
              }
              console.log("GET /elapi/v1 serviceListの更新:", serviceList);
              this.serviceList = serviceList;
              // 入力フィールドserviceの表示項目の更新
              this.serviceSelected = serviceList[1] ? serviceList[1] : "";
            }

            // GET /elapi/v1/devices, groups, bulks, histories
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

              if (g_flagSendButtonIsClicked) {
                // 入力フィールドidの表示項目の更新
                this.idSelected = this.idInfoList[1]
                  ? this.idInfoList[1].id
                  : "";
                // Device Typeの表示項目の更新
                console.log("535 call updateDeviceType");
                this.deviceType = updateDeviceType(this.idSelected.slice(1));

                // updateDeviceType(this.idSelected.slice(1));
              }
            }

            // GET /elapi/v1/devices, groups, bulks, histories/<id>
            // responseはdevice,group,bulk,history description -> g_thingInfoに情報を追加
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

            console.log("526 GET /elapi/v1/devices/<id> service:", service);

            // regex = /\/devices\/([0-9]|[a-z]|[A-Z]|-)+$/; // 正規表現'/devices/'の後、行末まで英数字
            // if (regex.test(url)) {
            if (service !== "") {
              const pathElements = url.split("/"); // pathを'/'で分割して要素を配列にする
              const thingId = pathElements[pathElements.length - 1]; // 配列の最後の要素が deviceId

              // Device Desvriptionをもとにg_thingInfoを更新する
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
              console.log("533 thingId", thingId);
              console.log("534 thingInfo", thingInfo);
              console.log("535 g_thingInfo", g_thingInfo);
              g_thingInfo[thingId] = thingInfo;
              console.log("g_thingInfo", g_thingInfo);

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
              console.log("resourceTypeListの更新:", resourceTypeList);
              this.resourceTypeList = resourceTypeList;

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
            console.log("604");
            g_flagSendButtonIsClicked = false;
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });

      g_flagSendButtonIsClicked = true;
      // ECHONET Lite WebApi serverにアクセスする
      // const message =
      //   "REQ " + this.methodSelected + " " + url + " " + this.body;

      // REQUEST表示エリアのデータ設定
      // this.request = message;

      // REQUESTをLOGに追加
      // g_dataLogArray.push({
      //   timeStamp: timeStamp(),
      //   direction: "REQ",
      //   data: message,
      // });

      // ログを表示
      // console.log("628 function displayLog is called");
      // this.message_list = displayLog(this.rbOrder);
      // console.log("630 message_list", this.message_list);
      // console.log("631 g_dataLogArray", g_dataLogArray);
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
      console.log("idIsUpdated");
      const thingId = this.idSelected.slice(1); // remove "/"
      this.resourceTypeList = [""];
      this.resourceNameList = [""];
      this.deviceType = "";
      this.resourceTypeSelected = "";
      this.resourceNameSelected = "";
      console.log("731 call updateDeviceType");
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
      updateResourceName(
        this.methodSelected,
        this.idSelected.slice(1),
        this.resourceTypeSelected
      );
    },

    // 入力フィールド resourceName の値が変更された場合の処理
    resourceNameIsUpdated: function () {
      const resourceNameSelected = this.resourceNameSelected;
    },

    // ログのorderのラジオボタンが選択された時の処理
    rbOrderIsChanged: function () {
      this.message_list = displayLog(this.rbOrder);
    },

    // CLEARボタンがクリックされたときの処理（ログ画面のクリア）
    clearButtonisClicked: function () {
      console.log("clearButtonisClicked");
      g_dataLogArray.length = 0;
      this.message_list = [];
    },

    // SAVEボタンがクリックされたときの処理（ログの保存）
    downloadButtonisClicked: function () {
      downloadLog();
    },
    // },
  },
  created: function () {
    console.log("Home page is created");
    console.log(
      "serverSelection:",
      this.serverSelection,
      "serverUrl:",
      this.serverUrl,
      "apiKey:",
      this.apiKey
    );
    // accessElServer(this.scheme, this.elApiServer, this.apiKey,
    //   "GET", this.prefix, "/devices", "", "", "", "", "");
  },
  // components: {
  //   HeaderComp,
  //   BodyComp,
  // },
});

function updateDeviceType(deviceId: string): string {
  for (const idInfo of idInfoList) {
    if (idInfo.id == "/" + deviceId) {
      // deviceType = idInfo.deviceType;
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
  console.log(
    "updateResourceName",
    methodSelected,
    idSelected,
    resourceTypeSelected
  );
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
      // resourceNameList = resourceNameList;
      resourceNameSelected = resourceNameList[1] ? resourceNameList[1] : "";
      console.log(
        "resourceNameSelected:",
        resourceNameSelected,
        "resourceNameList:",
        resourceNameList
      );
    }
  }
  return [resourceNameSelected, resourceNameList];
}

// g_dataLogArray を元データとし、画面表示用の message_list データを作成する
function displayLog(rbOrder: string): Message[] {
  let log = [];
  for (let [index, dataLog] of Object.entries(g_dataLogArray)) {
    let message: Message = {
      id: index,
      timeStamp: dataLog.timeStamp,
      direction: dataLog.direction,
      statusCode: "",
      data: "",
      body: "",
    };
    if (dataLog.direction == "REQ") {
      // REQUEST
      message.data = dataLog.data;
    } else {
      // RESPONSE
      message.statusCode = dataLog.statusCode;
      message.data = dataLog.data;
    }
    log.push(message);
  }
  if (rbOrder == "reverseOrder") {
    log.reverse();
  }
  return log;
}

// ログをダウンロードする
function downloadLog() {
  // g_dataLogArrayから保存用のstringの作成
  let log = "";
  for (let dataLog of g_dataLogArray) {
    log += dataLog.timeStamp + "," + dataLog.direction + ",";
    if (dataLog.direction == "REQ") {
      // REQUESTの場合
      log += dataLog.data;
      if (dataLog.body == "") {
        log += "\n";
      } else {
        log += ",body:" + dataLog.body + "\n";
      }
    } else {
      // RESPONSEの場合
      log += JSON.stringify(dataLog.data) + "\n";
    }
  }

  const blob = new Blob([log], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  document.body.appendChild(a);
  a.download = fileName4Log;
  a.href = url;
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

// ログ用に現在の時刻を取得する
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

<style scoped>
.form-check {
  padding-top: 0.5rem;
  padding-left: 2rem;
}
#request-response-body {
  margin: 0;
  padding: 0;
}
#request-response-wrapper {
  height: 20em;
  overflow-y: scroll;
}
#request-response-list li {
  font-family: Consolas, "Courier New", Courier, Monaco, monospace;
  font-size: 90%;
  padding: 0.2em 1em;
}
#message-monitor-body {
  margin: 0;
  padding: 0;
}
#message-list-wrapper {
  height: 30em;
  overflow-y: scroll;
}
#message-list li {
  font-family: Consolas, "Courier New", Courier, Monaco, monospace;
  font-size: 90%;
  padding: 0.2em 1em;
  cursor: pointer;
}
#message-list li span {
  display: inline-block;
}
#message-list li span.col1 {
  width: 5em;
}
#message-list li span.col2 {
  width: 3em;
}
</style>
