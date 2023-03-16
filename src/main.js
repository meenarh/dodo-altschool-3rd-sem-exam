import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "./views/LoginPage.vue";
import HomePage from "./views/HomePage.vue";
import ProductPage from "./views/ProductPage.vue";
import SignupPage from "./views/SignupPage.vue";
import ErrorPage from "./views/ErrorPage.vue";
import "./assets/css/tailwind.css";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

//toastify
const options = {
  // You can set your default options here
};

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
    //   meta: {
    //     requiresAuth: true,
    //   },
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

createApp(App).use(router, options, Toast).mount("#app");
