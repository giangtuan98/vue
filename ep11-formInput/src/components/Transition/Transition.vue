<template>
  <div>
    <h1>Animations</h1>
    <hr />
    <md-button @click="show = !show">
      Show notification
    </md-button>
    <div class="alert alert-success">
      This is a notification
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    };
  },
};
</script>

<style></style>
