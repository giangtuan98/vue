import Vue from "vue";
import App from "./App.vue";
import Contact from "./components/Contact.vue";
// TODO global component
Vue.component({
	"contact-component": Contact
});

// TODO eventBus
export const eventBus = new Vue();
new Vue({
	el: "#app",
	render: h => h(App)
});
