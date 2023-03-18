<template>
  <div
    class="flex flex-row gap-20 justify-between bg-black font-serif text-white p-8 text-center"
  >
    <p class="copy">All rights reserved. © 2023 Dodo.</p>

    <ul class="flex flex-row justify-between gap-10 text-center">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/productpage">Shop</router-link></li>
      <li><router-link to="#">About</router-link></li>
    </ul>

    <div class="flex flex-row gap-2">
      <img src="../assets/shopping-bag.png" class="w-full h-full" alt="logo" />
      <p class="text-2xl">DODO</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterComponent",
};
</script>
