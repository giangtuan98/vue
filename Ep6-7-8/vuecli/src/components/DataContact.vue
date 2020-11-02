<template>
  <div>
    <h1>DataContact: {{ address }}</h1>
    <button @click="changeAddress"></button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      address: "my address, 68 cau giay district",
    };
  },
  methods: {
    changeAddress() {
      this.address = "hello";
    },
  },
};
</script>

<style>
</style>
