import Vue from "vue";
import App from "./App.vue";
import Router from "vue-router";
import VueMaterial from "vue-material";
import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default.css";
import Ep14 from "./pages/Ep14.vue";
import User from "./components/User.vue";
import FilterComponent from "./components/Filter.vue";
import Directive from "./components/Directive.vue";

Vue.use(VueMaterial);
Vue.use(Router);
Vue.config.productionTip = false;

// TODO directive
Vue.directive("bgColor", {
  bind(el, binding) {
    el.style.backgroundColor = binding.value;
  },
});

Vue.directive("custom", {
  bind(el, binding) {
    var delay = 0;
    if (binding.modifiers["delayed"]) {
      delay = 3000;
    }

    setTimeout(() => {
      if (binding.arg == "background") {
        el.style.backgroundColor = binding.value;
      } else {
        el.style.color = binding.value;
      }
    }, delay);
  },
});

// TOTO filter

Vue.filter("toUppercase", function(value) {
  return value.toUpperCase();
});

// Global Mixins

Vue.mixin({
  created() {
    // console.log("global mixin -created hook");
  },
});

const router = new Router({
  routes: [
    {
      path: "/pages/ep14",
      component: Ep14,
    },
    {
      path: "/pages/user",
      component: User,
    },
    {
      path: "/pages/filter",
      component: FilterComponent,
    },
    {
      path: "/pages/directive",
      component: Directive,
    },
  ],
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
