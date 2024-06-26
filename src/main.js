import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import * as VueGoogleMaps from 'vue2-google-maps'
import{ init } from 'emailjs-com';

init("user_wTvdMgOWbeUGQhdiJqB8u");
Vue.config.silent = true
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCm5Y3IjwtKGQH0DGXxunkc9NJ8MkkZBCc',
    libraries: 'places', // This is required if you use the Autocomplete plugin
    // OR: libraries: 'places,drawing'
    // OR: libraries: 'places,drawing,visualization'
    // (as you require)

    //// If you want to set the version, you can do so:
    // v: '3.26',
  },

  //// If you intend to programmatically custom event listener code
  //// (e.g. `this.$refs.gmap.$on('zoom_changed', someFunc)`)
  //// instead of going through Vue templates (e.g. `<GmapMap @zoom_changed="someFunc">`)
  //// you might need to turn this on.
  // autobindAllEvents: false,

  //// If you want to manually install components, e.g.
  //// import {GmapMarker} from 'vue2-google-maps/src/components/marker'
  //// Vue.component('GmapMarker', GmapMarker)
  //// then set installComponents to 'false'.
  //// If you want to automatically install all the components this property must be set to 'true':
  installComponents: true
});

Vue.config.productionTip = false;


Vue.use(Vuetify);
export default new Vuetify({});

new Vue({
  router,  
  vuetify : new Vuetify(),
  render: (h) => h(App),
}).$mount("#app");
