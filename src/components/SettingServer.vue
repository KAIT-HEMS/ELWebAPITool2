<template>
  <div class="settingServer">
    <!-- input data -->
    <div class="card">
      <!-- input data header -->
      <div class="card-header">
        <div class="row">
          <div class="col-auto h5 mt-2">ECHONET Lite WebAPI Server の設定</div>
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
              <label class="form-check-label" for="server1">実験サーバー</label>
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
              <label class="form-check-label" for="server2">実証システム</label>
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
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { config } from "../config";
console.log("SettingServer init");

type IdInfo = {
  deviceType: string;
  id: string;
};
const idInfoList: IdInfo[] = []; // プロパティの初期化用データ

export default defineComponent({
  name: "SettingServer",
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
    // Select a server のラジオボタンの処理
    rbServerOnChange: function (event: Event) {
      if (event!.target instanceof HTMLInputElement) {
        const serverSelection = event!.target.value;
        console.log("rbServerOnChange", serverSelection);
        localStorage.setItem("serverSelection", serverSelection);
        this.serverSelection = serverSelection;
        this.serverUrl =
          serverSelection == "server1" ? config.serverUrl1 : config.serverUrl2;
        this.apiKey =
          serverSelection == "server1" ? this.apiKey1 : this.apiKey2;
        if (serverSelection == "server1") {
          this.updateButtonIsClicked();
        }
      }
    },

    // API key for 実験サーバー の入力時の処理
    apiKeyOnChange1: function () {
      console.log("apiKeyOnChange1:", this.apiKey1);
      localStorage.setItem("apiKey1", this.apiKey1);
      this.updateButtonIsClicked();
    },

    // API key for 実証システム の入力時の処理
    apiKeyOnChange2: function () {
      console.log("apiKeyOnChange2:", this.apiKey2);
      localStorage.setItem("apiKey2", this.apiKey2);
    },

    // デバイス削除ボタン(Trash can)がクリックされたときの処理
    // deleteDeviceButtonIsClicked: function (value: number) {
    //   const deviceId = this.idInfoList[value].id;
    //   const url = this.serverUrl + "/config/device" + deviceId;
    //   console.log("Delete device, ", { url });

    //   const headers = new Headers({
    //     "X-Elapi-key": this.apiKey,
    //   });

    //   const option = {
    //     method: "DELETE",
    //     headers: headers,
    //   };

    //   fetch(url, option)
    //     .then((response) => {
    //       console.log("Delete", response.status);
    //       this.updateButtonIsClicked();
    //     })
    //     .catch((error) => {
    //       console.error("Delete Error:", error);
    //     });
    // },

    // デバイス追加ボタンがクリックされたときの処理
    // addDeviceButtonIsClicked: function () {
    //   const url = this.serverUrl + "/config/device/";
    //   console.log("Add device, ", { url }, this.addDevice);
    //   const bodyData = '{"deviceType":"' + this.addDevice + '"}';

    //   const headers = new Headers({
    //     "X-Elapi-key": this.apiKey,
    //     "Content-Type": "application/json",
    //     "Content-Length": bodyData.length.toString(),
    //   });

    //   let option = {
    //     method: "POST",
    //     headers: headers,
    //     body: bodyData,
    //   };

    //   fetch(url, option)
    //     .then((response) => response.json())
    //     .then((data) => {
    //       console.log("Add Success:", data);
    //       this.updateButtonIsClicked();
    //     })
    //     .catch((error) => {
    //       console.error("Add Error:", error);
    //     });
    // },
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
    console.log("Setting page: Server is created");
    console.log(
      "serverSelection:",
      this.serverSelection,
      "apiKey1:",
      this.apiKey1,
      "apiKey2:",
      this.apiKey2
    );
    // if (this.serverSelection == "server1") {
    //   this.updateButtonIsClicked();
    // }
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
</style>
