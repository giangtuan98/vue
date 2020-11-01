<template>
  <div>
    <h1>hello world</h1>
    <contact-component></contact-component>
    <User></User>
  </div>
</template>

<script>
import User from "./components/User.vue";
export default {
  components: {
    User,
  },
  name: "app",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
    };
  },
  methods: {
    name() {},
  },
};
</script>

<style lang="scss">
</style>
