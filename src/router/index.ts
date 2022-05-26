import Vue from "vue";
import VueRouter from "vue-router";
import Router, { RouteConfig } from "vue-router";

import Index from "../pages/index.vue";
import Csv from "../pages/csv/index.vue";

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
  }
]

const router = new VueRouter({
  mode: "history",
  routes
})

export default router;