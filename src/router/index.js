import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
import About from "../components/About.vue";
import BridgePage from "../components/BridgePage.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/about", name: "About", component: About },
  { path: "/member/kakao", name: "BridgePage", component: BridgePage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
