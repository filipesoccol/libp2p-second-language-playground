import { createWebHistory, createRouter } from "vue-router";
// Routes
import Greetings from "../components/Greetings.vue";
import Room from "../components/Room.vue";

const routes = [
    { path: '/', name:'Home', component: Greetings },
    { path: '/:room', name:'Room', component: Room },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;