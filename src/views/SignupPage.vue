<!-- eslint-disable vue/valid-template-root -->
<template>
  <NavBar />
  <div class="flex flex-row justify-between font-serif">
    <div class="md:p-16 p-8 gap-20">
      <div class="flex flex-col md:gap-20 gap-10">
        <div>
          <h2 class="text-6xl text-black">Welcome</h2>
          <p class="text-black text-xl">Sign Up to continue</p>
        </div>

        <form class="flex flex-col">
          <div class="flex md:flex-row flex-col">
            <input
              type="text"
              placeholder="Enter your first name"
              class="rounded-3xl w-[300px] md:w-[230px] md:m-5 m-2 p-4 placeholder-gray-300"
              id="fname"
            />
            <input
              type="text"
              placeholder="Enter your last name"
              class="rounded-3xl w-[300px] md:w-[230px] md:m-5 m-2 p-4 placeholder-gray-300"
              id="lname"
            />
          </div>

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
          <button class="bg-black w-[300px] md:w-[500px] text-white p-4 rounded-3xl md:m-5 m-2">Sign Up</button>
          <p>
            Already have an account?
            <router-link to="/login" class="text-xl">Log In</router-link>
          </p>
        </form>
      </div>
    </div>

    <div>
      <img src="../assets/image3.png" alt="image" class="w-full h-screen hidden md:block" />
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
export default {
  name: "SignupPage",
  components: {
    NavBar,
  },
};
</script>

<style scoped></style>
