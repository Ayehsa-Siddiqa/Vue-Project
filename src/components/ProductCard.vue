<template>
  <div class="product_card  w-[50%] md:w-[33.33%] lg:w-[25%] px-[6px] lg:px-[15px] group transition ">
    
    <figure class="m-0 cursor-pointer" @click="goToDetails(product)">
      <img :src="product.image" :alt="product.title" class="w-full object-cover group-hover:scale-105 transition duration-300" />
    </figure>
    
    <h5
      class="product_name max-w-[200px] lg:max-w-[240px] text-dark-grey font-bold font-sans mb-[8px] mt-[16px] text-[14px] lg:text-[16px] leading-[20px] lg:leading-[24px] tracking-normal">
      {{ product.title }}</h5>
    <p class="flex gap-1 my-[8px]">
      <span v-for="i in 5" :key="i" class="text-sm" :class="i <= product.rating ? 'text-primary' : 'text-yellow-50'">
        <i class="fa-solid fa-star"></i>
      </span>
       <span class="text-[#6E6E6E] text-[14px] lg:text-[16px] leading-[20px] lg:leading-[24px] tracking-normal ps-2">({{ product.reviews }})</span>    
    </p>

    <div class="product_price_box flex items-center gap-2 mb-[16px] flex-wrap">
      <span class="text-[#6E6E6E] font-semibold font-sans text-[12px] sm:text-[14px] lg:text-[16px] leading-[20px] lg:leading-[24px] tracking-normal">{{
        product.price.toFixed(2) }} AED</span>
      <span v-if="product.oldPrice"
        class="line-through text-[#6E6E6E] font-semibold font-sans text-[12px] sm:text-[14px] lg:text-[16px] leading-[20px] lg:leading-[24px] tracking-normal">{{
          product.oldPrice.toFixed(2) }} AED</span>
      <span v-if="product.discount"
        class=" text-primary font-semibold font-sans text-[12px] sm:text-[14px] leading-[24px] tracking-normal">({{ product.discount
        }}% Off)</span>
    </div>

    <button class="w-full bg-[#FEF2F2] font-semibold font-sans  text-[14px] lg:text-[16px] leading-[20px] lg:leading-[24px] tracking-normal text-primary h-[42px] flex justify-center items-center rounded-[6px] hover:bg-red-200">
      Add to Bag
    </button>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";
import { useProductStore } from "../store/productStore";
import type { Product } from "../types/products";

//props to recieve data 
 defineProps<{ product: Product }>();
const router = useRouter();
const productStore = useProductStore();

// function to move the detail page
function goToDetails(product: Product) {
  productStore.selectProductBySlug(product.slug); // set selected product
  router.push({ name: "ProductDetails", params: { slug:product.slug } }); // navigate
}
</script>

<style scoped>
i{
  -webkit-text-stroke: 2px #E92827;
  font-weight: 600;
  font-size: 10px;
}
</style>
