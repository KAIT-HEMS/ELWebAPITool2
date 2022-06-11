<!-- views/SettingView.vue -->
<!-- Setting page を作成する -->
<!-- SettingServerAndDevice component を利用する -->

<template>
  <div class="setting">
    <div>
      <!-- <SettingServer />
      <SettingDevice /> -->
      <SettingServerAndDevice />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// import SettingServer from "../components/SettingServer.vue"; // @ is an alias to /src
// import SettingDevice from "../components/SettingDevice.vue"; // @ is an alias to /src
import SettingServerAndDevice from "../components/SettingServerAndDevice.vue";
console.log("SettingView init");

export default defineComponent({
  name: "SettingView",
  components: {
    // SettingServer,
    // SettingDevice,
    SettingServerAndDevice,
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
