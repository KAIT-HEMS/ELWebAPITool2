<template>
  <div class="setting">
    <div>
      <!-- input data -->
      <div class="card">
        <!-- input data header -->
        <div class="card-header">
          <div class="row">
            <div class="col-auto h5 mt-2">
              ECHONET Lite WebAPI Server の設定
            </div>
            <div class="col"></div>
            <div class="col-auto mt-2">{{ serverUrl }}</div>
            <div class="col-auto"></div>
          </div>
        </div>

        <!-- input data body -->
        <div class="card-body pt-2 pb-2">
          <form>
            <div class="input-group">
              <span class="input-group-text">Select a server</span>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  id="server1"
                  value="server1"
                  v-model="serverSelection"
                  v-on:change="rbServerOnChange($event)"
                />
                <label class="form-check-label" for="server1"
                  >実験サーバー</label
                >
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  id="server2"
                  value="server2"
                  v-model="serverSelection"
                  v-on:change="rbServerOnChange($event)"
                />
                <label class="form-check-label" for="server2"
                  >実証システム</label
                >
              </div>
              <br />
            </div>
            <div class="input-group">
              <span class="input-group-text">API key for 実験サーバー</span>
              <input
                type="text"
                class="form-control"
                id="inputApiKey1"
                v-model="apiKey1"
                v-on:change="apiKeyOnChange1"
              />
            </div>
            <div class="input-group">
              <span class="input-group-text">API key for 実証システム</span>
              <input
                type="text"
                class="form-control"
                id="inputApiKey2"
                v-model="apiKey2"
                v-on:change="apiKeyOnChange2"
              />
            </div>
          </form>
        </div>
      </div>

      <!-- Devices on the server -->
      <template v-if="serverSelection === 'server1'">
        <div class="card">
          <!-- header-->
          <div class="card-header">
            <form>
              <div class="row">
                <div class="col-auto h5 mt-2">
                  デバイスエミュレーションの設定
                </div>
                <div class="col"></div>
                <div class="col-auto">
                  <select
                    id="selectAddDevice"
                    class="form-control"
                    v-model="addDevice"
                  >
                    <option
                      v-for="device in addDeviceList"
                      v-bind:key="device.id"
                    >
                      {{ device }}
                    </option>
                  </select>
                </div>
                <!-- デバイス追加ボタン -->
                <div class="col-auto mt-1 pl-0">
                  <button
                    type="button"
                    class="btn btn-secondary btn-sm"
                    v-on:click="addDeviceButtonIsClicked"
                  >
                    デバイス追加
                  </button>
                </div>
                <!-- UPDATEボタン -->
                <div class="col-auto mt-1 pl-0">
                  <button
                    type="button"
                    class="btn btn-secondary btn-sm"
                    v-on:click="updateButtonIsClicked"
                  >
                    UPDATE
                  </button>
                </div>
              </div>
            </form>
          </div>

          <!-- body -->
          <div class="card-body" id="setting-devices-body">
            <div id="setting-devices-list-wrapper">
              <ul class="list-group" id="setting-devices-list">
                <li
                  class="list-group-item d-flex align-items-start"
                  id="devices-header"
                  tabindex="0"
                >
                  <span class="col1">Device Type</span>
                  <span class="col2">Device Id</span>
                  <span class="col3">削除</span>
                </li>
                <li
                  v-for="(idInfo, index) in idInfoList"
                  class="list-group-item d-flex align-items-start"
                  v-bind:key="idInfo.id"
                  tabindex="0"
                >
                  <span class="col1">{{ idInfo.deviceType }}</span>
                  <span class="col2">{{ idInfo.id }}</span>
                  <span class="col3">
                    <button
                      class="btn btn-secondary btn-sm"
                      type="button"
                      v-on:click="deleteDeviceButtonIsClicked(index)"
                    >
                      <font-awesome-icon icon="trash" style="color: #eeeeee" />
                      <!-- <i class="far fa-trash-alt"></i> -->
                    </button>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { config } from "../config";
// import HeaderComp from "@/components/HeaderComp.vue"; // @ is an alias to /src
// import BodyComp from "@/components/BodyComp.vue"; // @ is an alias to /src

console.log("SettingView init");

type IdInfo = {
  deviceType: string;
  id: string;
};
// type IdInfoList = IdInfo[];
const idInfoList: IdInfo[] = []; // プロパティの初期化用データ

export default defineComponent({
  data() {
    return {
      apiKey1: localStorage.getItem("apiKey1") ?? "",
      apiKey2: localStorage.getItem("apiKey2") ?? "",
      addDevice: config.addDeviceList[3], // デバイス追加で選択されたデバイス名
      addDeviceList: config.addDeviceList,
      idInfoList: idInfoList, // [{deviceType:"/aircon", id:"0123"},... ] GET /devices, groups, bulk, histories のレスポンスを利用
      response: "Response: data",
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
    rbServerOnChange: function (event: Event) {
      if (event!.target instanceof HTMLInputElement) {
        console.log("rbServerOnChange", event!.target.value);
        this.serverSelection = event!.target.value;
        localStorage.setItem("serverSelection", this.serverSelection);
      }
      this.serverUrl =
        this.serverSelection == "server1"
          ? config.serverUrl1
          : config.serverUrl2;
      this.apiKey =
        this.serverSelection == "server1" ? this.apiKey1 : this.apiKey2;
    },
    apiKeyOnChange1: function () {
      console.log("apiKeyOnChange1:", this.apiKey1);
      localStorage.setItem("apiKey1", this.apiKey1);
      this.updateButtonIsClicked();
    },
    apiKeyOnChange2: function () {
      console.log("apiKeyOnChange2:", this.apiKey2);
      localStorage.setItem("apiKey2", this.apiKey2);
    },

    // デバイス削除ボタン(Trash can)がクリックされたときの処理
    deleteDeviceButtonIsClicked: function (value: number) {
      const deviceId = this.idInfoList[value].id;
      console.log("deleteDeviceButtonIsClicked is clicked, value=", deviceId);

      const url = this.serverUrl + "/config/device" + deviceId;
      console.log("Delete device, url", url);

      const headers = new Headers({
        "Content-Type": "application/json",
        "X-Elapi-key": this.apiKey,
      });

      const option = {
        method: "DELETE",
        headers: headers,
      };

      console.log("259 just before fetch");
      fetch(url, option)
        .then((response) => {
          console.log("262 fetch response", response);
          // const responseTmp = response.json();
          // console.log("264 response.json()", responseTmp);
          return;
          // return response.json();
        })
        .then((data) => {
          console.log("Delete Success:", data);
          this.updateButtonIsClicked();
          // Request & Response の data 内容設定
          // this.response = data;
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    },

    // デバイス追加ボタンがクリックされたときの処理
    addDeviceButtonIsClicked: function () {
      console.log("addDeviceButtonIsClicked is clicked", this.addDevice);

      const url = this.serverUrl + "/config/device/";
      console.log("Add device, url", url, this.addDevice);
      const bodyData = '{"deviceType":"' + this.addDevice + '"}';

      const headers = new Headers({
        "Content-Type": "application/json",
        "Content-Length": bodyData.length.toString(),
      });
      if (this.serverSelection == "server1") {
        headers.append("X-Elapi-key", this.apiKey);
      } else {
        // "server2"
        headers.append("Authorization", "Bearer " + this.apiKey);
      }

      let option = {
        method: "POST",
        headers: headers,
        body: bodyData,
      };

      fetch(url, option)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log("Add Success:", data);
          this.updateButtonIsClicked();
          // Request & Response の data 内容設定
          // this.response = data;
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    },
    // UPDATEボタンがクリックされたときの処理
    updateButtonIsClicked: function () {
      console.log("updateButtonIsClicked is clicked");
      const url = this.serverUrl + "/devices";
      console.log("Update devices, url", url);

      const headers = new Headers({
        "Content-Type": "application/json",
      });
      if (this.serverSelection == "server1") {
        headers.append("X-Elapi-key", this.apiKey);
      } else {
        // "server2"
        headers.append("Authorization", "Bearer " + this.apiKey);
      }

      let option = {
        method: "GET",
        headers: headers,
      };

      fetch(url, option)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log("345 Success:", data);
          // vm.idInfoListを新規に作成する
          let service = "devices";
          this.idInfoList = [];
          if (data[service] !== undefined) {
            for (let thing of data[service]) {
              const deviceType =
                thing.deviceType !== undefined ? thing.deviceType : "";
              const idInfo = { id: "/" + thing.id, deviceType: deviceType };
              this.idInfoList.push(idInfo);
            }
          }

          idInfoList.sort(function (a, b) {
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

          console.log("370 idInfoList", idInfoList);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    },
  },
  created: function () {
    console.log("Setting page is created");
    console.log(
      "serverSelection:",
      this.serverSelection,
      "apiKey1:",
      this.apiKey1,
      "apiKey2:",
      this.apiKey2
    );

    this.updateButtonIsClicked();

    // accessElServer(this.scheme, this.elApiServer, this.apiKey,
    //   "GET", this.prefix, "/devices", "", "", "", "", "");
  },
  // components: {
  //   HeaderComp,
  //   BodyComp,
  // },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* .card-deck {
  margin-bottom: 20px;
} */
/* .card-header {
  padding: 0.1em 1em;
} */
/* .card-header {
  padding: 10em 10em;
} */
.input-group {
  margin-top: 0.25rem;
  margin-bottom: 0.25rem;
  margin-left: 0.25rem;
  margin-right: 0.25rem;
}
.form-check {
  padding-top: 0.5rem;
  padding-left: 2rem;
}
#setting-devices-body {
  margin: 0;
  padding: 0;
}
#setting-devices-list-wrapper {
  height: 30em;
  overflow-y: scroll;
}
#setting-devices-list li {
  font-family: Consolas, "Courier New", Courier, Monaco, monospace;
  font-size: 90%;
  padding: 0.2em 1em;
  cursor: pointer;
}
#setting-devices-list li span {
  display: inline-block;
}
#setting-devices-list li span.col1 {
  width: 20em;
}
#setting-devices-list li span.col2 {
  width: 30em;
}
#setting-devices-list li span.col3 {
  width: 4em;
}
</style>
