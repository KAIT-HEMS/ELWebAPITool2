<template>
  <div class="container">
    <header>
      <NavHeader />
    </header>
    <main role="main" class="container px-0">
      <router-view />
    </main>
  </div>
</template>

<script lang="ts">
import NavHeader from "@/components/NavHeader.vue";
import { config } from "./config";
const version = config.version;
const releaseData = config.releaseDate;
console.log("App.vue: init", { version }, { releaseData });

export default {
  components: {
    NavHeader,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.card {
  margin-bottom: 0.5rem;
}
.card-header {
  padding: 0.25rem 1rem;
}
</style>
