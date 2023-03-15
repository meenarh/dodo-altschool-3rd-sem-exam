<template>
  <nav class="flex md:flex-auto justify-between font-serif bg-red p-8">
    <div class="flex flex-row gap-2">
      <img src="../assets/shopping-bag.png" class="w-8 h-8" alt="logo" />
      <h3 class="text-2xl uppercase text-white">dodo</h3>
    </div>

    <!-- Hamburger Menu Button -->
<button
  class="block md:hidden text-white hover:text-black focus:text-black focus:outline-none"
  @click="showMenu = !showMenu"
>
  <svg
    class="h-6 w-6 fill-current"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      v-if="showMenu"
      d="M4 6h16M4 12h16M4 18h16"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      v-else
      d="M4 6h16M4 12h16M4 18h16"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</button>

<!-- Menu Items -->
<ul
  :class="[
    'flex',
    'md:flex',
    'md:flex-row',
    'flex-col',
    'gap-5',
    'justify-between',
    { hidden: !showMenu },
  ]"
>
  <li class="text-white text-xl hover:text-black">
    <router-link to="/">Home</router-link>
  </li>
  <li class="text-white text-xl hover:text-black">
    <router-link to="/products">Products</router-link>
  </li>
  <li v-if="!isLoggedIn" class="text-white text-xl hover:text-black">
    <router-link to="/login">Login</router-link>
  </li>
  <li v-if="!isLoggedIn" class="text-white text-xl hover:text-black">
    <router-link to="/signup">Sign Up</router-link>
  </li>
  <li class="text-white text-xl hover:text-black">
    <router-link to="#">Log Out</router-link>
  </li>
</ul>
</nav>
</template>
<script>
export default {
  name: "NavBar",
  data() {
    return {
      showMenu: false,
    }
  },
  computed: {
    isLoggedIn() {
      return false;
    },
  },
};
</script>
<style scoped></style>