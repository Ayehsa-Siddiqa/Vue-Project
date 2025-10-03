<template>
  <section class="px-[15px] pt-6  mb-[40px] md:mb-[60px] lg:mb-[80px]">
    <h3 class="font-caprasimo font-normal text-center mb-5 text-dark-grey">Shop All Products</h3>
    <ProductList :products="productStore.products" />
  </section>
</template>

<script lang="ts" setup>
import ProductList from "../components/ProductList.vue";
import { useProductStore } from "../store/productStore";
const productStore = useProductStore();
</script>
