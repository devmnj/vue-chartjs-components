import Vue from "vue";
import VueRouter from "vue-router";
import LineChart from "../views/Line.vue";
import Doughnut from "../views/Doughnut.vue";
import BarChart from "../views/Bar.vue";
import PieChart from "../views/Pie.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Line",
    component: LineChart,
     }, 
  {
    path: "/pie",
    name: "Pie",
    component: PieChart,
  },
  {
    path: "/bar",
    name: "Bar",
    component: BarChart,

  },
  {
    //redirect with aliad
    path: "/doughnut",
    name: "Doughnut",
    component: Doughnut,
    alias: ['/donut', '/dot']

  },
  {
    // The redirect can also be targeting a named route:
    path: "/help",
    redirect: { name: 'About' }
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }

];

const router = new VueRouter({
  routes
});

export default router;
