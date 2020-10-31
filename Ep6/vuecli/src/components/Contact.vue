<template>
  <div>
    <h1>{{ title }}</h1>
    <datacontact-component></datacontact-component>
  </div>
</template>

<script>
// TODO local component
import DataContact from "./DataContact.vue";
export default {
  components: {
    "datacontact-component": DataContact,
  },
  data() {
    return {
      title: "This is title component",
    };
  },
};
</script>

<style>
</style>
