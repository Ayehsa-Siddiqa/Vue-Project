<template>
  <div class="flex flex-wrap justify-center gap-y-[30px] -mx-[6px] -lg:mx-[15px]">
    <ProductCard v-for="p in products" :key="p.id" :product="p" />
  </div>
</template>

<script lang="ts" setup>
import ProductCard from "./ProductCard.vue";
import type { Product } from "../types/products";

defineProps<{ products: Product[] }>();
</script>
