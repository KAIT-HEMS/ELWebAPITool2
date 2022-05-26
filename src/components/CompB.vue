<template>
  <div>
    <div>gStore1: {{ gStore1 }}</div>
    <div>gStore2: {{ gStore2 }}</div>
  </div>
</template>

<script>
export default {
  name: "CompB",
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
