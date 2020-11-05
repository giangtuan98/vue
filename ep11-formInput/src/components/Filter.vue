<template>
  <!-- TODO
filters
 -->
  <div>
    <h1>Filter & Mixins</h1>
    <h1>{{ text | toLowerCase | toUppercase }}</h1>
    <div class="row">
      <md-card>
        <md-card-header>
          <h1>
            Filter Product
          </h1>
        </md-card-header>
        <md-card-content>
          <md-field>
            <label for="">Filter products</label>
            <md-input v-model="filterProduct"></md-input>
          </md-field>
          <ul>
            <li v-for="(product, index) in filterProducts" :key="index">
              {{ product }}
            </li>
          </ul>
        </md-card-content>
      </md-card>
      <div class="col-md-6"></div>
    </div>
  </div>
</template>

<script>
import { productMixin } from "../Mixins/ProductMixin.js";

export default {
  mixins: [productMixin],
  filters: {
    toLowerCase(text) {
      return text.toLowerCase();
    },
  },
};
</script>

<style></style>
