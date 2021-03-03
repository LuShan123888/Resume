import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//Style
import "./styles/index.scss"

//Plugins
import vuetify from './plugins/vuetify';
// import './plugins/element.js'
// import 'bootstrap'

//FontAwesome
import fontawesome from "@fortawesome/fontawesome";
import solid from "@fortawesome/fontawesome-free-solid";
import regular from "@fortawesome/fontawesome-free-regular";
import brands from "@fortawesome/fontawesome-free-brands";
fontawesome.library.add(solid);
fontawesome.library.add(regular);
fontawesome.library.add(brands);

//Axios
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)


import global_ from './components/Global'
Vue.prototype.GLOBAL = global_
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
