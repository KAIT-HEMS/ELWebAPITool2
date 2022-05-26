import { createStore } from "vuex";
import { config } from "../config";

let serverSelection = localStorage.getItem("serverSelection") ?? "server1";
serverSelection = serverSelection == "server2" ? "server2" : "server1"; // "server1" or "server2"
const serverUrl =
  serverSelection == "server1" ? config.serverUrl1 : config.serverUrl2;
const apiKey1 = localStorage.getItem("apiKey1") ?? "";
const apiKey2 = localStorage.getItem("apiKey2") ?? "";
const apiKey = serverSelection == "server1" ? apiKey1 : apiKey2;
console.log(
  "store init: serverSelection",
  serverSelection,
  "serverUrl",
  serverUrl,
  "apiKey",
  apiKey
);

export default createStore({
  state: {
    serverSelection: serverSelection, // 1:実験サーバー, 2:実証システム
    serverUrl: serverUrl,
    apiKey: apiKey,
  },
  getters: {
    serverSelection: (state) => state.serverSelection,
    serverUrl: (state) => state.serverUrl,
    apiKey: (state) => state.apiKey,
  },
  mutations: {
    setServerSelection: function (state, value) {
      state.serverSelection = value;
    },
    setServerUrl: function (state, value) {
      state.serverUrl = value;
    },
    setApiKey: function (state, value) {
      state.apiKey = value;
    },
  },
  actions: {
    setServerSelection: function ({ commit }, value) {
      commit("setServerSelection", value);
    },
    setServerUrl: function ({ commit }, value) {
      commit("setServerUrl", value);
    },
    setApiKey: function ({ commit }, value) {
      commit("setApiKey", value);
    },
  },
  modules: {},
});
