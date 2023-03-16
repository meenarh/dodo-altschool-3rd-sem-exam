<template>
  <div>
    <NavBar />
    <div class="flex flex-col justify-center items-center h-screen main">
      <img
        src="../assets/header.png"
        alt="product one"
        class="relative w-full h-full"
      />
      <h1
        class="md:text-7xl text-4xl text-white font-sans md:w-[750px] md:m-16 m-8 absolute z-10"
      >
        DISCOVER UNIQUE & AUTHENTIC WEARS
      </h1>
      <button
        v-if="isLoggedIn"
        class="font-serif w-[170px] h-[60px] bg-red text-grey absolute z-10 rounded-md md:mt-[300px] mt-[250px]"
      >
        <router-link to="/products"> Discover Now </router-link>
      </button>
    </div>
  </div>
</template>
<script>
import NavBar from "@/components/NavBar.vue";

export default {
  name: "HomePage",
  components: {
    NavBar,
  },
  computed: {
    isLoggedIn() {
      // replace this with your actual authentication state check
      return false;
    },
  },
};
</script>
