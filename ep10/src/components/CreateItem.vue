<template>
  <form>
    <div class="row">
      <div class="col-sm-8 col-sm-offset-2 col-md-6 offset-md-3 form-group">
        <textarea
          v-model="item"
          name=""
          id=""
          cols="30"
          rows="10"
          class="form-control"
        ></textarea>
      </div>
      <div class="col-sm-8 col-sm-offset-2 col-md-6 offset-md-3 form-group">
        <button class="btn btn-success" @click.prevent="createNew">
          Add
        </button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      item: "",
    };
  },
  methods: {
    createNew() {
      if (this.item != "") {
        this.$emit("createItem", this.item);
        this.item = "";
      }
    },
  },
};
</script>

<style></style>
