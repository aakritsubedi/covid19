import Vue from "vue";
import Router from "vue-router";

import CovidQue from '@/views/Covid19';
import Dashboard from '@/views/Dashboard';

Vue.use(Router);

const routes = [
  {
    path: "/covid19",
    name: "Covid19",
    component: CovidQue,
  },
  {
    path: "/",
    name: "Dashboard",
    component: Dashboard,
  },
  // {
  //   path: "*",
  //   name: "NotFound",
  //   component: NotFound
  // }
];

const router = new Router({
  mode: "history",
  base: __dirname,
  routes
});

export default router;