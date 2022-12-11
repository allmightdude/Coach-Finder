import { createRouter, createWebHistory } from "vue-router";

import CoachesList from "../views/coaches/CoachesList.vue";
import CoachDetail from "../views/coaches/CoachDetail.vue";
import CoachRegisteration from "../views/coaches/CoachRegisteration.vue";
import ContactCoach from "../views/requests/ContactCoach.vue";
import RequestsReceived from "../views/requests/RequestsReceived.vue";
import NotFound from "../views/NotFound.vue";
import UserAuth from "../views/auth/UserAuth.vue";
import store from "@/store";

const routes = [
  { path: "/", redirect: "/coaches" },
  { path: "/coaches", component: CoachesList },
  { path: "/coaches/:id", component: CoachDetail, props: true },
  { path: "/coaches/:id/contact", component: ContactCoach },
  {
    path: "/register",
    component: CoachRegisteration,
    name: "register",
    meta: { requiredAuth: true },
  },
  {
    path: "/requests",
    component: RequestsReceived,
    meta: { requiredAuth: true },
  },
  { path: "/auth", component: UserAuth, meta: { hideForAuth: true } },
  { path: "/:notFound(.*)", component: NotFound },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach(function (to, _, next) {
  if (to.meta.requiredAuth && !store.getters.isAuthenticated) {
    next({ path: "/auth" });
  } else if(to.meta.hideForAuth && store.getters.isAuthenticated){
    next({ path : '/coaches'});
  }
  else if(to.path === "/register" && store.getters.isCoach){
    next('/coaches');
  }
  else{
    next();
  }
});

export default router;
