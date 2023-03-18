<template>
  <div class="text-center text-black">
    <NavBar />
    <div class="md:p-16 p-5">
      <div id="animation">
        <Vue3Lottie :animationData="TRex" auto-play="true" :height="300" :width="300" />
      </div>
      <h2 class="text-2xl m-2 text-red">Page not found</h2>
      <p class="texl-lg m-2">Sorry, the page you are looking for does not exist.</p>
      <button class="bg-red text-white w-[150px] h-[50px] rounded-lg m-2">
        <router-link to="/">Go back home</router-link>
      </button>
    </div>
    <FooterComponent />
  </div>
</template>

<script>
import FooterComponent from "@/components/FooterComponent.vue";
import NavBar from "@/components/NavBar.vue";
import { Vue3Lottie } from 'vue3-lottie'
import 'vue3-lottie/dist/style.css'
import TRex from '../assets/T-rex.json'

export default {
  name: "ErrorPage",
  components: { NavBar, Vue3Lottie, FooterComponent },
  data() {
    return {
      TRex
    };
  },
};
</script>
