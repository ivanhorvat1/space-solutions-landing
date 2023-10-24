import Vue from "vue";
import App from "./App.vue";
import "./index.css";
import VueAnimateOnScroll from "vue-animate-onscroll";

Vue.use(VueAnimateOnScroll);
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
