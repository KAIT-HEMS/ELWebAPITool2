<!-- components/SettingServer.vue -->
<!-- Setting page の Server 設定 component を作成する -->

<template>
  <div class="settingServer">
    <div class="card">
      <div class="card-header">
        <div class="row">
          <div class="col-auto h5 mt-2">ECHONET Lite WebAPI Server の設定</div>
          <div class="col"></div>
          <div class="col-auto mt-2">{{ serverUrl }}</div>
          <div class="col-auto"></div>
        </div>
      </div>

      <div class="card-body pt-2 pb-2">
        <form>
          <div class="input-group">
            <span class="input-group-text">Select a server</span>
            <!-- ラジオボタン: 実験クラウド -->
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                id="server1"
                value="server1"
                v-model="serverSelection"
                v-on:change="rbServerOnChange($event)"
              />
              <label
                class="form-check-label"
                for="server1"
                data-bs-toggle="tooltip"
                data-bs-html="true"
                title="ECHONET Lite WebAPI のリファレンスサーバー。制御対象機器はサーバー内で静的にエミュレーションします。"
              >
                実験クラウド</label
              >
            </div>
            <!-- ラジオボタン: 実証システム -->
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                id="server2"
                value="server2"
                v-model="serverSelection"
                v-on:change="rbServerOnChange($event)"
              />
              <label
                c
                lass="form-check-label"
                for="server2"
                data-bs-toggle="tooltip"
                title="ECHONET Lite WebAPI を利用して LAN 内の ECHONET Lite 機器を制御します。"
                >実証システム</label
              >
            </div>
            <br />
          </div>
          <!-- Input: API key for 実験クラウド -->
          <div class="row">
            <div class="col-11">
              <div class="input-group">
                <span class="input-group-text">API key for 実験クラウド</span>
                <input
                  type="text"
                  class="form-control"
                  id="inputApiKey1"
                  v-model="apiKey1"
                  v-on:change="apiKeyOnChange1"
                />
              </div>
            </div>
            <div class="col-auto mt-2 pl-0">
              <button
                type="button"
                class="btn btn-secondary btn-sm"
                v-on:click="verifyApiKey1ButtonIsClicked"
              >
                確認
              </button>
            </div>
          </div>
          <!-- Input: API key for 実証システム -->
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

export default defineComponent({
  name: "SettingServer",
  data() {
    return {
      apiKey1: localStorage.getItem("apiKey1") ?? "",
      apiKey2: localStorage.getItem("apiKey2") ?? "",
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
      }
    },

    // API key for 実験クラウド の入力時の処理
    apiKeyOnChange1: function () {
      localStorage.setItem("apiKey1", this.apiKey1);
      this.apiKey =
        this.serverSelection == "server1" ? this.apiKey1 : this.apiKey2;
      console.log("apiKeyOnChange1:", this.apiKey1);
    },

    // API key for 実証システム の入力時の処理
    apiKeyOnChange2: function () {
      localStorage.setItem("apiKey2", this.apiKey2);
      this.apiKey =
        this.serverSelection == "server1" ? this.apiKey1 : this.apiKey2;
      console.log("apiKeyOnChange2:", this.apiKey2);
    },
    verifyApiKey1ButtonIsClicked: function () {
      
    }
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
  },
});
</script>

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
