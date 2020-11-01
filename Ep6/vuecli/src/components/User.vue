<template>
  <div>
    <h1>Hello, my name is {{ name }}!</h1>
    <button @click="changeName">Change name</button>

    <UserDetail :username="name" @nameWasReset="resetName"
    :resetNameFn="resetName"
    ></UserDetail>
    <hr>
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
    resetName(name) {
      this.name = name;
    }
  },
};
</script>

<style>
</style>
