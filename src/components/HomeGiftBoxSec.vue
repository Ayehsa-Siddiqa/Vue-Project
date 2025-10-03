<template>
    <div class="featue_sec w-full float-left  mb-[40px] md:mb-[60px] lg:mb-[80px] block px-[15px]">
        <div class="custom_container">
            <h3 class="font-caprasimo font-normal text-left mb-[30px] text-primary">Gift Boxes</h3>
            <ProductList :products="giftProducts" />
        </div>
    </div>
</template>
<script lang="ts" setup>
// import ProductCard from './ProductCard.vue'; 
import { useProductStore } from '../store/productStore';
import ProductList from './ProductList.vue';
const useProdStore = useProductStore();
const giftProducts = useProdStore.getProductByCat("Gift Box")
console.log(giftProducts)

</script>