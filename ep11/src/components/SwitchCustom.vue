<template>
  <div>
    <div @click="switched(true)" :class="{ active: isOn }">On</div>
    <div @click="switched(false)" :class="{ active: isOn }">Off</div>
  </div>
</template>

<script>
export default {
  props: {
    isOn: {
      type: Boolean,
    },
  },
  methods: {
    switched(isOn) {
      this.$emit("input", isOn);
    },
  },
};
</script>

<style>
.active {
  background-color: greenyellow;
}
</style>
