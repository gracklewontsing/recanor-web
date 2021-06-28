import Vue from "vue";
import App from "./App.vue";
import router from "./router";
<<<<<<< HEAD
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";


=======
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
>>>>>>> 9d8572627e0efd4bcd6a671167eacc58eb421207

Vue.config.productionTip = false;
// Make BootstrapVue available throughout your project && install icons
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.use(Vuetify);
export default new Vuetify({});

new Vue({
  router,
  vuetify : new Vuetify(),
  render: (h) => h(App),
}).$mount("#app");
