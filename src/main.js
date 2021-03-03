import Vue from 'vue'
import App from './App.vue'
import Axios from 'axios';
import routes from './router/index';
import VueRouter from 'vue-router';
import vuetify from './plugins/vuetify';



Vue.config.productionTip = false

const axiosInstance = Axios.create({
  baseURL: "http://localhost:8081"
})
// Para acceder a axios desde this.$http
Vue.prototype.$http = axiosInstance;

Vue.use(vuetify);
Vue.use(VueRouter);



const router = new VueRouter({
  routes: routes,
  mode: "history",
  base: "public"
})

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
