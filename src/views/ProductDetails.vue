<template>
  <NavBar />
  <div class="px-[20px] py-[20px] flex justify-center items-center font-serif">
    <div class="card rounded-2xl flex md:flex-row flex-col gap-20 w-fit h-secreen m-4">
      <div>
        <img :src="this.img" alt="" class="w-fit h-[300px] rounded-2xl" />
      </div>
      <div class="mt-[30px]">
        <p class="text-4xl font-bold capitalize"> {{ title }}</p>
        <p class="text-lg capitalize"> {{ brand }}</p>
        <h4
          class="mt-[20px] text-xl text-black capitalize rounded-lg"
        >
          {{ description }}
        </h4>
        <h5
          class="bg-red w-fit mt-[10px] capitalize text-white py-[7px] px-[20px] rounded-[6px]"
        >
          Category: {{ category }}
        </h5>
        
        <div class="mt-[10px] flex space-x-[8px]">
          <p
            class="bg-[black] w-fit mt-[10px] text-[#fff] py-[7px] px-[20px] rounded-[6px]"
          >
            {{ price }}
          </p>
          <p
            class="bg-[green] w-fit mt-[10px] text-[#fff] py-[7px] px-[20px] rounded-[6px]"
          >
            {{ rating }}
          </p>
        </div>
        
        <div
          @click="goBack"
          class="flex mt-[10px] cursor-pointer w-fit border rounded-[6px] text-center px-[20px] py-[6px] items-center space-x-[8px]"
        >
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-4 h-4"
            >
              <path
                fill-rule="evenodd"
                d="M9.53 2.47a.75.75 0 010 1.06L4.81 8.25H15a6.75 6.75 0 010 13.5h-3a.75.75 0 010-1.5h3a5.25 5.25 0 100-10.5H4.81l4.72 4.72a.75.75 0 11-1.06 1.06l-6-6a.75.75 0 010-1.06l6-6a.75.75 0 011.06 0z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <div>Go Back</div>
        </div>
      </div>
    </div>
  </div>
  <FooterComponent />
</template>

<script>
import FooterComponent from "@/components/FooterComponent.vue";
import NavBar from "@/components/NavBar.vue";
import axios from "axios";
export default {
  name: "ProductDetails",
  components: {
    NavBar,
    FooterComponent
},
  created() {
    this.getProducts();
  },
  data() {
    return {
      products: [],
      img: "",
      brand: "",
      category: "",
      title: "",
      price: "",
      rating: "",
      description: "",
    };
  },
  methods: {
    async getProducts() {
      try {
        const parameter = this.$route.params.id;
        const res = await axios.get(
          `http://dummyjson.com/products/${parameter}`
        );
        console.log(res.data);
        this.products = res.data;
        this.img = res.data.images[0];
        this.brand = res.data.brand;
        this.category = res.data.category;
        this.title = res.data.title;
        this.price = `$ ${res.data.price}`;
        this.rating = `Rating: ${res.data.rating}`;
        this.description = res.data.description;
      } catch (err) {
        console.log(err);
      }
    },
    goBack() {
      this.$router.push("/productpage");
    },
  },
};
</script>
