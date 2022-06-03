<!-- components/HomeRequestResponse.vue -->
<!-- Home page の Request & Response component を作成する -->

<template>
  <div class="homeRequestResponse">
    <div class="card">
      <div class="card-header">
        <div class="row">
          <div class="col-auto h5 mt-2">Request & Response</div>
          <div class="col"></div>
          <div class="col-auto mt-1 pl-0">
            <!-- CLEARボタン -->
            <button
              type="button"
              class="btn btn-secondary btn-sm fw-bold"
              v-on:click="clearButtonisClicked"
            >
              Clear
            </button>
          </div>
        </div>
      </div>

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
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
console.log("HomeRequestResponse init");

export default defineComponent({
  name: "HomeRequestResponse",
  computed: {
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
  },
  methods: {
    // CLEARボタンがクリックされたときの処理（ログ画面のクリア）
    clearButtonisClicked: function () {
      console.log("clearButtonisClicked");
      this.request = "Request:";
      this.statusCode = "Response: status code";
      this.response = "Response: data";
    },
  },

  created: function () {
    console.log("HomeRequestResponse is created");
  },
});
</script>

<style scoped>
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
</style>
