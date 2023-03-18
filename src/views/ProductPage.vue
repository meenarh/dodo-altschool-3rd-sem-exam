<!-- eslint-disable vue/valid-template-root -->
<template>
  <div>
    <NavBar />
    <div class="flex font-serif">
         <img src="../assets/product.png" class="w-screen h-screen relative opacity-80 hidden md:block"/>
         <h3 class="md:text-8xl text-6xl text-red font-bold md:absolute md:ml-[32%] md:mt-[20%] m-14 text-center">Products</h3>
      </div>
    <div class="font-serif">
     <ProductCard />
    </div>
<FooterComponent />
  </div>
</template>

<script>
import ProductCard from "@/components/ProductCard.vue";
import NavBar from "@/components/NavBar.vue";
import FooterComponent from "@/components/FooterComponent.vue";

export default {
  name: "ProductPage",
  components: {
    ProductCard,
    NavBar,
    FooterComponent
},
};
</script>

<style scoped></style>
