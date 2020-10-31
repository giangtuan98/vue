<template>
  <div>
    <button @click="changeName">changName</button>
  </div>
</template>

<script>
export default {
  props: {
    changeName: {
      type: Function,
    },
  },
};
</script>

<style>
</style>
