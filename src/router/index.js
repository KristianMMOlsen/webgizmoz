import { createWebHistory, createRouter } from "vue-router";
import LandingPage from "@/views/LandingPage.vue";
import Tjenester from "@/views/Tjenester.vue";
import Kontakt from "@/views/Kontakt.vue";
import OmOss from "@/views/OmOss.vue";


const routes = [
  {
    path: "/",
    name: "LandingPage",
    component: LandingPage,
  },
  {
    path: "/tjenester",
    name: "Tjenester",
    component: Tjenester,
  },
  {
    path: "/kontakt",
    name: "Kontakt",
    component: Kontakt,
  },
  {
    path: "/om",
    name: "OmOss",
    component: OmOss,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;