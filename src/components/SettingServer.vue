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
            <!-- ラジオボタン: 実験サーバー -->
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
              <label class="form-check-label" for="server2">実証システム</label>
            </div>
            <br />
          </div>
          <!-- Input: API key for 実験サーバー -->
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

type IdInfo = {
  deviceType: string;
  id: string;
};

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

    // API key for 実験サーバー の入力時の処理
    apiKeyOnChange1: function () {
      console.log("apiKeyOnChange1:", this.apiKey1);
      localStorage.setItem("apiKey1", this.apiKey1);
    },

    // API key for 実証システム の入力時の処理
    apiKeyOnChange2: function () {
      console.log("apiKeyOnChange2:", this.apiKey2);
      localStorage.setItem("apiKey2", this.apiKey2);
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
