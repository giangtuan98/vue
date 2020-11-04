<template>
  <div id="app">
    <Header :maxValue="10" :countItems="items.length"></Header>
    <CreateItem @createItem="addItem"></CreateItem>
    <ItemLayout :items="items" @removeItem="removeItem"></ItemLayout>
    <div class="row">
      <div class="col-md-12 text-center">
        <div class="alert alert-info">
          Info: click on a item to delete it!
        </div>
      </div>
    </div>
    <div class="row" v-if="showError">
      <div class="col-md-12 text-center">
        <div class="alert alert-danger">
          {{ errorMessage }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ItemLayout from "./components/ItemLayout.vue";
import CreateItem from "./components/CreateItem.vue";
import Header from "./components/Header.vue";
export default {
  name: "App",
  components: {
    ItemLayout,
    CreateItem,
    Header,
  },
  data() {
    return {
      items: ["I love u"],
      maxItems: 10,
      errorMessage: "",
      showError: false,
    };
  },
  methods: {
    addItem(newItem) {
      if (this.items.includes(newItem)) {
        this.showError = true;
        this.errorMessage = "this item is already in use";
        return;
      }
      if (this.items.length >= 10) {
        this.showError = true;
        this.errorMessage = "please remove an item";
        return;
      }
      this.items.push(newItem);
      this.showError = false;
    },
    removeItem(index) {
      this.items.splice(index, 1);
    },
  },
};
</script>

<style></style>
