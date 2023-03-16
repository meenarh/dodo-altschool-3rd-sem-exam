import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "./views/LoginPage.vue";
import HomePage from "./views/HomePage.vue";
import ProductPage from "./views/ProductPage.vue";
import SignupPage from "./views/SignupPage.vue";
import ErrorPage from "./views/ErrorPage.vue";
import "./assets/css/tailwind.css";
import store from "./store/store.js";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/login",
      name: "Login",
      component: LoginPage,
    },
    {
      path: "/",
      name: "Home",
      component: HomePage,
    },
    {
      path: "/products",
      name: "ProductPage",
      component: ProductPage,
      // meta: {
      //   requiresAuth: true,
      // },
    },
    {
      path: "/signup",
      name: "Signup",
      component: SignupPage,
    },
    {
      path: "/:catchAll(.*)",
      name: "ErrorPage",
      component: ErrorPage,
    },
  ],
});

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token');
  if (to.meta.requiresAuth && !token) {
    next('/login');
  } else {
    next();
  }
});

createApp(App).use(router, store).mount("#app");
