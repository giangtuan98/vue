<template>
  <div>
    <button @click="changeName">changName</button>
    <button @click='testEventBus'>Event bus</button>
  </div>
</template>

<script>
import { eventBus } from '../main.js';

export default {
  props: {
    changeName: {
      type: Function,
    },
  },
  methods: {
    testEventBus() {
      eventBus.$emit('testEventBus', 'eventBus');
    }
  },
};
</script>

<style>
</style>
