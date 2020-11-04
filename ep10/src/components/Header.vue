<template>
  <div class="progress">
    <div
      class="progress-bar"
      role="progressbar"
      :aria-valuenow="countItems"
      :style="progressWidth"
      aria-valuemin="0"
      aria-valuemax="10"
    ></div>
  </div>
</template>

<script>
export default {
  props: {
    maxItem: {
      type: Number,
      default: 10,
    },
    countItems: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    progressWidth() {
      let width = (this.countItems / this.maxItem) * 100 + "%";
      return {
        width: width,
      };
    },
  },
};
</script>

<style></style>
