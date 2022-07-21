import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import TutorialPage from "../views/TutorialPage.vue";
import DetailTutorialPage from "../views/DetailTutorialPage.vue";
import DonationPage from "../views/DonationPage.vue";
import NotFoundPage from "../views/NotFoundPage.vue";
import LivechatPage from "../views/LivechatPage.vue";

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
      path: "/donation",
      name: "donation",
      component: DonationPage,
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
    {
      path: "/livechat",
      name: "livechat",
      component: LivechatPage,
    },
    { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFoundPage },
  ],
});

export default router;
