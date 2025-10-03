<template>
    <div class="featue_sec w-full float-left  mb-[40px] md:mb-[60px] lg:mb-[80px] block px-[15px]">
        <div class="custom_container">
            <h3 class="font-caprasimo font-normal text-center mb-[30px] md:mb-[40px] text-dark-grey">Fresh Picks! Just
                Unwrapped </h3>
            <ProductList :products="saleProducts" />
        </div>
    </div>
</template>
<script lang="ts" setup>
// import ProductCard from './ProductCard.vue'; 
import { useProductStore } from '../store/productStore';
import ProductList from './ProductList.vue';
const useProdStore = useProductStore();
const saleProducts = useProdStore.getProductByCat("Candie")
console.log(saleProducts)

</script>