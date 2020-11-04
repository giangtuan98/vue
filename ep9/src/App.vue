<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <button class="btn btn-danger" @click="selectPage = 'Card'">
            Card
          </button>
          <button class="btn btn-danger" @click="selectPage = 'About'">
            About
          </button>
          <button class="btn btn-danger" @click="selectPage = 'Contact'">
            Contact
          </button>
          <!-- <Card cardTitle="Card title" v-if="selectPage == 'Card'">
          <template v-slot:default>
          <p >Black cat </p>
          </template>
          <template v-slot:footer>
          <p>foote</p>
          </template>
        </Card>
        <About v-if="selectPage == 'About'"/>
        <Contact v-if="selectPage == 'Contact'"/> -->
          <keep-alive>
            <component :is="selectPage"></component>
          </keep-alive>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "./components/Card.vue";
import About from "./components/About.vue";
import Contact from "./components/Contact.vue";

export default {
  name: "App",
  components: {
    Card,
    About,
    Contact,
  },
  data() {
    return {
      selectPage: "Card",
    };
  },
};
</script>

<style></style>
