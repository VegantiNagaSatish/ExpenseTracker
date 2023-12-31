import { createRouter, createWebHistory } from "vue-router";
import DashboardView from "../views/DashboardView.vue";
import AllExpensesView from "../views/AllExpensesView.vue";

const routes = [
  {
    path: "/",
    name: "DashboardView",
    component: DashboardView,
  },
  {
    path: "/allExpenses",
    name: "AllExpenses",
    component: AllExpensesView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
