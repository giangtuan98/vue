<template>
  <div class="item-layout">
    <div class="row">
      <Item
        v-for="(item, index) in items"
        :key="index"
        @click.native="removeItem(index)"
      >
        <template slot:default>
          {{ item }}
        </template>
      </Item>
    </div>
  </div>
</template>

<script>
import Item from "./Item.vue";
export default {
  props: {
    items: {
      type: Array,
    },
  },
  components: {
    Item,
  },
  methods: {
    removeItem(index) {
      this.$emit("removeItem", index);
    },
  },
};
</script>

<style></style>
