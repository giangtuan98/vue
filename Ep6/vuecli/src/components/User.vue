<template>
  <div>
    <h1>Hello, my name is {{ name }}!</h1>
    <button @click="changeName">Change name</button>

    <UserDetail :username="name"></UserDetail>
    <UserEdit :changeName="changeName"></UserEdit>
  </div>
</template>

<script>
import UserDetail from "./UserDetail.vue";
import UserEdit from "./UserEdit.vue";
export default {
  components: {
    UserDetail,
    UserEdit,
  },
  data() {
    return {
      name: "giang",
    };
  },
  methods: {
    changeName() {
      this.name = "Vũ Tuấn Giang";
    },
  },
};
</script>

<style>
</style>
