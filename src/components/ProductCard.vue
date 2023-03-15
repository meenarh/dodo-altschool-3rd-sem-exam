<template>
   <div class="card">
      <div class="card-image">
         <img :src="imgUrl" alt="image" />
      </div>

      <div class="card-details">
         <h3>Product name</h3>
         <p>Product details</p>
         <p>Price</p>
      </div>
   </div>
</template>

<script>
   export default {
      name: 'ProductCard',
      props: {
         imgUrl: String,
      },
   }
</script>