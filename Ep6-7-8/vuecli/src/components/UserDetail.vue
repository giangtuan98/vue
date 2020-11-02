<template>
  <div>
    <h1>{{ username }}</h1>
    <button @click="reverseName">reverse name</button>
    <button @click="resetName">reset name</button>
    <button @click="resetNameFn('giang 1231')">reset name bu callback</button>
  </div>
</template>
<!-- 
  có 2 cách để thay đổi dữ liệu của component cha từ component con:<template>
    C1: truyen callback thông qua biến
    C2: sử dụng emit, khai báo sự kiện lắng nghe và component con sẽ emit sự kiện đó
  </template>
  
  <script>
  export default {
  
  }
  </script>
  
  <style>
  
  </style>
-->
<script>
import { eventBus } from "../main.js";

export default {
  props: {
    username: {
      type: String,
    },
    resetNameFn: {
      type: Function,
    },
  },
  methods: {
    reverseName() {
      return this.username.split("").reverse().join("");
    },
    resetName() {
      this.username = "reset name";
      this.$emit("nameWasReset", this.username);
    },
  },
  created() {
    eventBus.$on("testEventBus", (name) => (this.username = name));
  },
};
</script>

<style>
</style>
