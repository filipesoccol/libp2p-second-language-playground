import { createWebHistory, createRouter } from "vue-router";
// Routes
import Greetings from "../components/Greetings.vue";
import Room from "../components/Room.vue";

const routes = [
    { path: '/', name:'Home', component: Greetings },
    { path: '/:room', name:'Room', component: Room },
]


const router = createRouter({
  base: process.env.NODE_ENV == 'development' ? '/' : '/libp2p-second-language-playground/',
  history: createWebHistory(),
  routes,
});

export default router;