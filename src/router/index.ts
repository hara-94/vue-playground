import Vue from "vue";
import VueRouter from "vue-router";
import Router, { RouteConfig } from "vue-router";

import Index from "../pages/index.vue";
import Csv from "../pages/csv/index.vue";
import CalcVh from "../pages/calc-vh/index.vue";
import LifeCycle from "../pages/life-cycle/index.vue";
import Agora from "../pages/agora/index.vue";

Vue.use(Router);

const routes: RouteConfig[] = [
  {
    path: "/",
    name: "index",
    component: Index
  },
  {
    path: "/csv",
    name: "csv",
    component: Csv
  },
  {
    path: "/calc-vh",
    name: "calc-vh",
    component: CalcVh
  },
  {
    path: "/life-cycle",
    name: "life-cycle",
    component: LifeCycle
  },
  {
    path: "/agora",
    name: "agora",
    component: Agora
  }
]

const router = new VueRouter({
  mode: "history",
  routes
})

export default router;