// store/index.ts
// VueX を利用して global に値の受け渡しを実現する

import { createStore } from "vuex";
import { config } from "../config";

let serverSelection = localStorage.getItem("serverSelection") ?? "server1";
serverSelection = serverSelection == "server1" ? "server1" : "server2";
const serverUrl =
  serverSelection == "server1" ? config.serverUrl1 : config.serverUrl2;
const apiKey1 = localStorage.getItem("apiKey1") ?? "";
const apiKey2 = localStorage.getItem("apiKey2") ?? "";
const apiKey = serverSelection == "server1" ? apiKey1 : apiKey2;
console.log("store init:", { serverSelection }, { serverUrl }, { apiKey });
type Log = {
  id: string;
  timeStamp: string;
  direction: string;
  statusCode: string;
  data: string;
  body: string;
};
const logArray: Log[] = []; // logを格納するarray
type Message = {
  id: string;
  timeStamp: string;
  direction: string;
  statusCode: string;
  data: string;
  body: string;
};
const message_list: Message[] = [];
type DataLog = {
  timeStamp: string;
  direction: string;
  statusCode: string;
  data: string;
  body: string;
};
const g_dataLogArray: DataLog[] = []; // logを格納するarray

export default createStore({
  state: {
    serverSelection: serverSelection, // 1:実験サーバー, 2:実証システム
    serverUrl: serverUrl,
    apiKey: apiKey,
    request: "Request:",
    statusCode: "Response: status code",
    response: "Response: data",
    message_list: message_list,
    g_dataLogArray: g_dataLogArray,
    logId: 0,
    logArray: logArray,
  },
  getters: {
    serverSelection: (state) => state.serverSelection,
    serverUrl: (state) => state.serverUrl,
    apiKey: (state) => state.apiKey,
    request: (state) => state.request,
    statusCode: (state) => state.statusCode,
    response: (state) => state.response,
    // message_list: (state) => state.message_list,
    // g_dataLogArray: (state) => state.g_dataLogArray,
    logId: (state) => state.logId,
    logArray: (state) => state.logArray,
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
    setRequest: function (state, value) {
      state.request = value;
    },
    setStatusCode: function (state, value) {
      state.statusCode = value;
    },
    setResponse: function (state, value) {
      state.response = value;
    },
    // setMessage_list: function (state, value) {
    //   state.message_list = value;
    // },
    // setG_dataLogArray: function (state, value) {
    //   state.g_dataLogArray = value;
    // },
    setLogId: function (state, value) {
      state.logId = value;
    },
    setLogArray: function (state, value) {
      state.logArray = value;
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
    setRequest: function ({ commit }, value) {
      commit("setRequest", value);
    },
    setStatusCode: function ({ commit }, value) {
      commit("setStatusCode", value);
    },
    setResponse: function ({ commit }, value) {
      commit("setResponse", value);
    },
    // setMessage_list: function ({ commit }, value) {
    //   commit("setMessage_list", value);
    // },
    // setG_dataLogArray: function ({ commit }, value) {
    //   commit("setG_dataLogArray", value);
    // },
    setLogId: function ({ commit }, value) {
      commit("setLogId", value);
    },
    setLogArray: function ({ commit }, value) {
      commit("setLogArray", value);
    },
  },
  modules: {},
});
