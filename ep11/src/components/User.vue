<template>
  <div>
    <form action="">
      <input type="text" v-model.lazy="user.email" />
      <textarea
        name=""
        v-model.lazy="user.description"
        id=""
        cols="30"
        rows="10"
      ></textarea>
      <input type="checkbox" value="vu" v-model="user.name" />
      <input type="checkbox" value="tuan" v-model="user.name" />
      <input type="checkbox" value="giang" v-model="user.name" />

      <input type="radio" value="male" v-model="user.gender" /> male
      <input type="radio" value="female" v-model="user.gender" /> female

      <select name="" id="" v-model="user.city">
        <option value="Thai binh">Thai binh</option>
        <option value="Ha noi">Ha noi</option>
        <option value="Nam dinh">Nam dinh</option>
      </select>
      <SwitchCustom v-model="user.switch"></SwitchCustom>
    </form>

    <div class="card">
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
    </div>
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
    };
  },
};
</script>

<style></style>
