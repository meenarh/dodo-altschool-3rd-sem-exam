import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
// import { Store } from "vuex";
import LoginPage from "./views/LoginPage.vue";
import HomePage from "./views/HomePage.vue";
import ProductPage from "./views/ProductPage.vue";
import SignupPage from "./views/SignupPage.vue";
import ErrorPage from "./views/ErrorPage.vue";
import './assets/css/tailwind.css'


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/login",
      name: "Login",
      component: LoginPage
    },
    {
      path: "/",
      name: "Home",
      component: HomePage
    },
    {
      path: '/products',
      name: 'ProductPage',
      component: ProductPage,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/signup',
      name: 'Signup',
      component: SignupPage
    },
    {
      path: '/:catchAll(.*)',
      name: 'ErrorPage',
      component: ErrorPage
    }
  ],
});

// router.beforeEach((to, from, next) => {
//   if (to.matched.some(record => record.meta.requiresAuth)) {
//     if (!Store.getters.isLoggedIn) { // checks if user is not authenticated
//       next({ name: 'login' }) // redirects to login page
//     } else {
//       next() // proceeds to the protected route
//     }
//   } else {
//     next() // proceeds to non-protected route
//   }
// })

createApp(App).use(router).mount("#app");
