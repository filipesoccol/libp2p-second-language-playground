import { createApp } from 'vue'
import App from './App.vue'
import VueLibp2p from './plugins/vue-libp2p';
import router from './router'

const educationApp = createApp(App)

educationApp.use(router);
// Load our IPFS plugin.
educationApp.use(VueLibp2p);

educationApp.mount('#app');
