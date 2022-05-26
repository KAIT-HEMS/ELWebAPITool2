<template>
  <div>
    <span>Input gStore1: </span>
    <input type="text" v-model="gStore1" />
    <div>Typed data is {{ gStore1 }}</div>
    <span>Input gStore2: </span>
    <input type="text" v-model="gStore2" />
    <div>Typed data is {{ gStore2 }}</div>
  </div>
</template>

<script>
export default {
  name: "CompA",
  computed: {
    gStore1: {
      get() {
        return this.$store.getters.gStore1;
      },
      set(value) {
        this.$store.dispatch("setgStore1", value);
      },
    },
    gStore2: {
      get() {
        return this.$store.getters.gStore2;
      },
      set(value) {
        this.$store.dispatch("setgStore2", value);
      },
    },
  },
};
</script>
