<template>
  <!-- TODO
  directive: co cac hook giong life cycle
  - co the khai bao local hoac global
 -->
  <div id="app">
    <md-tabs md-sync-route>
      <md-tab id="tab-transition" md-label="Transition" to="/pages/transition">
      </md-tab>
      <md-tab id="tab-user" md-label="User" to="/pages/user"> </md-tab>
      <md-tab id="tab-filter" md-label="FilterComponent" to="/pages/filter">
      </md-tab>
      <md-tab id="tab-directive" md-label="Directive" to="/pages/directive">
      </md-tab>
    </md-tabs>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
