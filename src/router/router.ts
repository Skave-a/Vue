import { createRouter, createWebHistory } from "vue-router";
import vueHome from "@/views/vueHome.vue";
import userPage from "@/views/userPage.vue";
import vueAbout from "@/views/vueAbout.vue";
import postPage from "@/views/postPage.vue";

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
  {
    path: "/posts/:id",
    name: "post",
    component: postPage,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: vueHome,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
