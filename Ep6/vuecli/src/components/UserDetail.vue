<template>
  <div>
    <h1>{{ username }}</h1>
  </div>
</template>

<script>
export default {
  props: {
    username: {
      type: String,
    },
  },
};
</script>

<style>
</style>
