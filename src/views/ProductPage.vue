<!-- eslint-disable vue/valid-template-root -->
<template>
  <div>
    <NavBar />
    <div>
      <img src="../assets/" />
      <h2>Products</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
        illum ad odio dicta, voluptates asperiores! Quidem architecto debitis
        minima corporis dicta reprehenderit ab molestiae! Consequuntur libero
        sapiente temporibus eaque corrupti.
      </p>
      <ProductCard />
    </div>
  </div>
</template>

<script>
import ProductCard from "@/components/ProductCard.vue";
import NavBar from "@/components/NavBar.vue";

export default {
  name: "ProductPage",
  components: {
    ProductCard,
    NavBar,
  },
};
</script>

<style scoped></style>
