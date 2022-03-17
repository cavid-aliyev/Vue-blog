import { Main, About, Post, PostDetails } from "../pages";

import { createWebHistory, createRouter } from "vue-router";

const routes = [
  { path: "/", component: Main },
  { path: "/posts", component: Post },
  { path: "/about", component: About },
  { path: "/posts/:id", component: PostDetails },
];

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
});

export default router;
