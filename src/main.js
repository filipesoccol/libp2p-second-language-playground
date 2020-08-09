import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueLibp2p from './plugins/vue-libp2p';
// Routes
import Greetings from "./components/Greetings.vue";
import Room from "./components/Room.vue";

const router = new VueRouter({
  mode: 'history',
  routes: [
    // dynamic segments start with a colon
    { path: '/', component: Greetings },
    { path: '/:room', component: Room },
  ]
})
// Load our IPFS plugin.
Vue.use(VueRouter);
Vue.use(VueLibp2p);
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
