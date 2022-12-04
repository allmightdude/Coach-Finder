import { createRouter, createWebHistory } from "vue-router";

import CoachesList from "../views/coaches/CoachesList.vue";
import CoachDetail from "../views/coaches/CoachDetail.vue";
import CoachRegisteration from "../views/coaches/CoachRegisteration.vue";
import ContactCoach from "../views/requests/ContactCoach.vue";
import RequestsReceived from "../views/requests/RequestsReceived.vue";
import NotFound from "../views/NotFound.vue";

const routes = [
  { path: "/", redirect: '/coaches' },
  { path: "/coaches", component: CoachesList },
  { path: "/coaches/:id", component: CoachDetail , props : true},
  {path : '/coaches/:id/contact' , component : ContactCoach},
  { path: "/register", component: CoachRegisteration },
  {path : "/requests" ,  component : RequestsReceived},
  {path : "/:notFound(.*)" ,  component : NotFound}
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
