<!-- src/views/ProductDetails.vue -->
<template>
  <section v-if="product" class="w-full float-left block px-[15px] my-[30px] md:my-[40px]">
    <div class="custom_container">
      <div class="product_inner_detail grid md:grid-cols-[1fr_1.5fr] gap-[40px] lg:gap-[60px]">
        <img :src="product.image" :alt="product.title" class="w-full object-cover rounded-lg" />
        <div class="detail_page_text">
          <h3 class="text-3xl font-caprasimo font-bold mt-4 mb-3 text-primary">{{ product.title }}</h3>
          <p class="flex gap-1 my-[20px]">
            <span v-for="i in 5" :key="i" class="text-sm"
              :class="i <= product.rating ? 'text-primary' : 'text-white'">
              <i class="fa-solid fa-star"></i>
            </span>
            <span
              class="text-[#6E6E6E] text-[14px] lg:text-[16px] leading-[20px] lg:leading-[24px] tracking-normal ps-2">({{
                product.reviews }})</span>
          </p>
          <p class="text-gray-600 mt-2 font-sans max-w-[500px]  mb-3">{{ product.description }}</p>


          <div class="product_price_box flex items-center gap-2 mb-[30px] flex-wrap">
            <span
              class="text-[#6E6E6E] font-semibold font-sans text-[12px] sm:text-[14px] lg:text-[16px] leading-[20px] lg:leading-[24px] tracking-normal">{{
                product.price.toFixed(2) }} AED</span>
            <span v-if="product.oldPrice"
              class="line-through text-[#6E6E6E] font-semibold font-sans text-[12px] sm:text-[14px] lg:text-[16px] leading-[20px] lg:leading-[24px] tracking-normal">{{
                product.oldPrice.toFixed(2) }} AED</span>
            <span v-if="product.discount"
              class=" text-primary font-semibold font-sans text-[12px] sm:text-[14px] leading-[24px] tracking-normal">({{
                product.discount
              }}% Off)</span>
          </div>

          <button
            class="w-50 bg-[#FEF2F2] font-semibold font-sans  text-[14px] lg:text-[16px] leading-[20px] lg:leading-[24px] tracking-normal text-primary h-[42px] flex justify-center items-center rounded-[6px] hover:bg-red-200">
            Add to Bag
          </button>
        </div>
      </div>
    </div>
  </section>
  <p v-else class="text-center my-[40px]">Product not found!</p>
</template>

<script lang="ts" setup>
import { onMounted, computed } from "vue";
import { useRoute } from "vue-router";
import { useProductStore } from "../store/productStore";

const route = useRoute();
const productStore = useProductStore();

// fetch selected product data
const product = computed(() => productStore.selectedProduct);

onMounted(() => {
  if (!product.value) {
    const slug = route.params.slug as string;
    productStore.selectProductBySlug(slug);
  }
});
</script>

<style scoped>
i{
  -webkit-text-stroke: 2px #E92827;
  font-weight: 600;
  font-size: 10px;
}
</style>

