import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import { routes } from './routes.js'; //curly as it is a named export
//if i had of said export default i could have just done import store from './store/store'
//export const use {} to import
import { store } from './store/store.js';

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
