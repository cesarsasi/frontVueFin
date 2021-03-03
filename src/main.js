import Vue from 'vue'
import App from './App.vue'
import VueAxios from 'vue-axios';
import Axios from 'axios';
import routes from './router/index';
import VueRouter from 'vue-router';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false
Vue.use(vuetify);
Vue.use(VueAxios, Axios);
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
