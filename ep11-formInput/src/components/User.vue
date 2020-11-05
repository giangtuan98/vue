<template>
  <!-- TODO -->
  <div>
    <form action="" @submit.prevent="submitForm">
      <md-card class="md-layout-item md-size-50 md-small-size-100">
        <md-card-header>
          <div class="md-title">Users</div>
        </md-card-header>
      </md-card>
      <md-card-content>
        <div class="md-layout md-gutter">
          <div class="md-layout-item md-small-size-100">
            <md-field>
              <label for="first-name">Email</label>
              <md-input
                name="first-name"
                id="first-name"
                autocomplete="given-name"
                v-model.lazy="user.email"
              />
            </md-field>
            <md-field>
              <label for="first-name">Description</label>
              <md-textarea
                name="first-name"
                id="first-name"
                autocomplete="given-name"
                v-model.lazy="user.description"
              ></md-textarea>
            </md-field>
            <md-field>
              <label for="first-name">City</label>
              <md-select v-model="user.city">
                <md-option value="Thai binh">Thai binh</md-option>
                <md-option value="Ha noi">Ha noi</md-option>
                <md-option value="Nam dinh">Nam dinh</md-option>
              </md-select>
            </md-field>

            <md-checkbox v-model="user.name" value="vu">Vu</md-checkbox>
            <md-checkbox v-model="user.name" value="tuan">Tuan</md-checkbox>
            <md-checkbox v-model="user.name" value="giang">Giang</md-checkbox>
            <div>
              <md-radio v-model="user.gender" value="Male">Male</md-radio>
              <md-radio v-model="user.gender" value="Female" class="md-primary"
                >Female</md-radio
              >
            </div>
          </div>
        </div>
      </md-card-content>
      <md-switch v-model="user.switch">Active</md-switch>
      <SwitchCustom v-model="user.switch"></SwitchCustom>
      <md-button class="md-raised md-primary" type="submit">Submit</md-button>
    </form>

    <md-card v-if="cardShow">
      <md-card-header>
        <div class="md-title">User submit info</div>
      </md-card-header>
      <md-card-content>
        <p>email: {{ user.email }}</p>
        <p style="white-space: pre">description: {{ user.description }}</p>
        <ul>
          <li v-for="(item, index) in user.name" :key="index">
            {{ item }}
          </li>
        </ul>
        <p>gender: {{ user.gender }}</p>
        <p>city: {{ user.city }}</p>
        <p>switch: {{ user.switch }}</p>
      </md-card-content>
    </md-card>
  </div>
</template>

<script>
import SwitchCustom from "./SwitchCustom.vue";

export default {
  components: {
    SwitchCustom,
  },
  data() {
    return {
      user: {
        email: "",
        description: "",
        name: [],
        gender: "",
        city: "",
        switch: false,
      },
      cardShow: false,
    };
  },
  methods: {
    submitForm() {
      this.cardShow = true;
    },
  },
};
</script>

<style></style>
