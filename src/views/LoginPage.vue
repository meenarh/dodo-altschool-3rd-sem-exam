<!-- eslint-disable vue/valid-template-root -->
<template>
  <NavBar />
  <div class="flex flex-row justify-between font-serif">
    <div class="md:p-16 p-8 gap-20">
      <div class="flex flex-col md:gap-20 gap-10">
        <div>
          <h2 class="md:text-6xl text-3xl text-black">Welcome Back, Minah</h2>
          <p class="text-black text-xl">Log into your account to continue</p>
        </div>

        <form class="flex flex-col">
          <input
            type="email"
            placeholder="Enter your email address"
            class="rounded-3xl w-[300px] md:w-[500px] md:m-5 m-2 p-4 placeholder-gray-300"
            id="email"
          />
          <input
            type="password"
            class="rounded-3xl w-[300px] md:w-[500px] md:m-5 m-2 p-4 placeholder-gray-300"
            id="password"
            placeholder="**********"
          />
          <button
            class="bg-black text-white w-[300px] md:w-[500px] p-4 rounded-3xl md:m-5 m-2"
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
import { useToast } from "vue-toastification";

export default {
  name: "LoginPage",
  components: {
    NavBar,
  },
  setup() {
    const toast = useToast();
    toast.success("Login Successful!🥳", {
      timeout: 1000,
    });
    toast.error("Login Failed!😭", {
      timeout: 1000,
    });
    return { toast };
  },
};
</script>

<style scoped></style>
