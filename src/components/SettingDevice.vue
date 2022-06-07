<!-- components/SettingDevice.vue -->
<!-- Setting page の Device 設定 component を作成する -->

<template>
  <div class="settingDevice">
    <!-- 実験サーバーの場合のみ表示 -->
    <template v-if="serverSelection === 'server1'">
      <div class="card">
        <div class="card-header">
          <form>
            <div class="row">
              <div class="col-auto h5 mt-2">デバイスエミュレーションの設定</div>
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
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { config } from "../config";
import { IdInfo } from "../global.d";

console.log("SettingDevice init");
const idInfoList: IdInfo[] = []; // プロパティの初期化用データ

export default defineComponent({
  name: "SettingDevice",
  data() {
    return {
      apiKey1: localStorage.getItem("apiKey1") ?? "",
      apiKey2: localStorage.getItem("apiKey2") ?? "",
      addDevice: config.addDeviceList[3], // デバイス追加で選択されたデバイス名。初期値はエアコン
      addDeviceList: config.addDeviceList,
      idInfoList: idInfoList, // [{deviceType:"/aircon", id:"0123"},... ] GET /devices, groups, bulk, histories のレスポンスを利用
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
    // デバイス削除ボタン(Trash can)がクリックされたときの処理
    deleteDeviceButtonIsClicked: function (value: number) {
      const deviceId = this.idInfoList[value].id;
      const url = this.serverUrl + "/config/device" + deviceId;
      console.log("Delete device, ", { url });

      const headers = new Headers({
        "X-Elapi-key": this.apiKey,
      });

      const option = {
        method: "DELETE",
        headers: headers,
      };

      fetch(url, option)
        .then((response) => {
          console.log("Delete", response.status);
          this.updateButtonIsClicked();
        })
        .catch((error) => {
          console.error("Delete Error:", error);
        });
    },

    // デバイス追加ボタンがクリックされたときの処理
    addDeviceButtonIsClicked: function () {
      const url = this.serverUrl + "/config/device/";
      console.log("Add device, ", { url }, this.addDevice);
      const bodyData = '{"deviceType":"' + this.addDevice + '"}';

      const headers = new Headers({
        "X-Elapi-key": this.apiKey,
        "Content-Type": "application/json",
        "Content-Length": bodyData.length.toString(),
      });

      let option = {
        method: "POST",
        headers: headers,
        body: bodyData,
      };

      fetch(url, option)
        .then((response) => response.json())
        .then((data) => {
          console.log("Add Success:", data);
          this.updateButtonIsClicked();
        })
        .catch((error) => {
          console.error("Add Error:", error);
        });
    },
    // UPDATEボタンがクリックされたときの処理
    updateButtonIsClicked: function () {
      const url = this.serverUrl + "/devices";
      console.log("Update devices, ", { url });

      const headers = new Headers({
        "X-Elapi-key": this.apiKey,
      });

      let option = {
        method: "GET",
        headers: headers,
      };

      fetch(url, option)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log("Update devices", data);
          // idInfoListを作成する
          const service = "devices";
          this.idInfoList = [];
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
        })
        .catch((error) => {
          console.error("Update Error:", error);
        });
    },
  },
  created: function () {
    console.log("Setting page: Device is created");
    if (this.serverSelection == "server1") {
      this.updateButtonIsClicked();
    }
  },
});
</script>

<style scoped>
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
