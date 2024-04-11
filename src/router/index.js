import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import( /*webpackChunkName: "about"*/  "../views/About.vue"),

  },
  {
    path: "/renovado",
    name: "Renovado",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import( /*webpackChunkName: "about"*/  "../views/ServicioR.vue"),
  },
  {
    path: "/otr",
    name: "OTR",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import( /*webpackChunkName: "about"*/  "../views/OTR.vue"),
  },
  {
    path: "/venta",
    name: "Venta",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import( /*webpackChunkName: "about"*/  "../views/Venta.vue"),
  },
  {
    path:"/contacto",
    name: "Contacto",
    component: () => import("../views/Contact.vue"),

  },

];

const router = new VueRouter({
  routes,
  mode:'history'
});

export default router;
