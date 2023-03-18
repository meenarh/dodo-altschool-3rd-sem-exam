<template>
  <div class="grid md:grid-cols-3 gap-3 mb:p-10">
    <div
      class="card rounded-2xl flex flex-col gap-2 md:w-[400px] w-[350px] h-[550px] m-4 hover:"
      v-for="product in products"
      :key="product.id"
    >
      <img
        :src="product.images[0]"
        class="w-fit h-[300px] rounded-lg"
        alt="product image"
      />
      <div class="card-details m-3">
        <h3 class="text-3xl capitalize mb-3 font-semibold">
          {{ product.title }}
        </h3>
        <div class="flex flex-row gap-10 justify-between mb-5">
          <p class="text-sm bg-red text-white w-fit p-3 rounded-xl">
            {{ product.brand }}
          </p>
          <p class="text-lg text-red">$ {{ product.price }}</p>
        </div>

        <div class="flex justify-center">
          <button class="bg-black text-white text-center rounded-lg p-3">
            <router-link
              :to="{ name: 'ProductDetails', params: { id: product.id } }"
            >
              View Product
            </router-link>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ProductCard",
  data() {
    return {
      products: [],
    };
  },
  async created() {
    try {
      const response = await axios.get("https://dummyjson.com/products");
      this.products = response.data.products.slice(0, 12);
      console.log(this.products);
    } catch (error) {
      console.log(error);
    }
  },
};
</script>
