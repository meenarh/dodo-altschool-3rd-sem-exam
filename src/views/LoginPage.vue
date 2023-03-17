<template>
  <NavBar />
  <div class="flex flex-row justify-between font-serif">
    <div class="md:p-16 p-8 gap-20">
      <div class="flex flex-col md:gap-20 gap-10">
        <div>
          <h2 class="md:text-6xl text-3xl text-black">Welcome Back</h2>
          <p class="text-black text-xl">Log into your account to continue</p>
        </div>

        <form @submit.prevent="login" class="flex flex-col">
          <input
            type="email"
            placeholder="Enter your email address"
            class="rounded-3xl w-[300px] md:w-[500px] md:m-5 m-2 p-4 placeholder-gray-300"
            id="email"
            v-model="email"
          />
          <input
            type="password"
            v-model="password"
            class="rounded-3xl w-[300px] md:w-[500px] md:m-5 m-2 p-4 placeholder-gray-300"
            id="password"
            placeholder="**********"
          />
          <button
            type="submit"
            class="bg-black text-white w-[300px] md:w-[500px] p-4 rounded-3xl md:m-5 m-2"
            @click="login"
          >
            Login
          </button>
          <p>
            Don't have an account?
            <router-link to="/signup" class="text-xl">Sign Up</router-link>
          </p>
        </form>
      </div>
    </div>

    <div>
      <img
        src="../assets/image3.png"
        alt="image"
        class="w-full h-screen hidden md:block"
      />
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import createStore from "../store/store";
export default {
  name: "LoginPage",
  components: {
    NavBar,
  },
  data() {
    return {
      email: createStore.state.email,
      password: createStore.state.password,
    };
  },
  methods: {
    login() {
      createStore.commit("loginUser", {
        email: this.email,
        password: this.password,
      });
      console.log(`${this.email} ${this.password}`);
      localStorage.setItem("isAuthenticated", true);
      const authenticated = localStorage.getItem("isAuthenticated");
      if (authenticated == "true") {
        this.$router.push("/");
      } else {
        this.$router.push("/login");
      }
      location.href = "/";
    },
  },
};
</script>

<style scoped></style>
