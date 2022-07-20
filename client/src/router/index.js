import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import TutorialPage from "../views/TutorialPage.vue";
import DetailTutorialPage from "../views/DetailTutorialPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/tutorial",
      name: "tutorial",
      component: HomePage,
    },
    {
      path: "/tutorial/:category",
      name: "tutorialCategory",
      component: TutorialPage,
    },
    {
      path: "/tutorial/:category/:id",
      name: "tutorialDetail",
      component: DetailTutorialPage,
    },
  ],
});

export default router;
