import { createRouter, createWebHistory } from "vue-router";
import vueHome from "@/views/vueHome.vue";
import userPage from "@/views/userPage.vue";
import vueAbout from "@/views/vueAbout.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: vueHome,
  },
  {
    path: "/posts",
    name: "posts",
    component: userPage,
  },
  {
    path: "/about",
    name: "about",
    component: vueAbout,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
