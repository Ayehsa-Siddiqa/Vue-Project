<template>
  <div class="home-page">
    <!-- Hero Banner -->
    <component :is="HomeBanner" class="animate-fadeInUp" />

    <!-- Categories Section -->
    <component :is="Categories" class="animate-fadeInUp delay-100" />

    <!-- Featured Products Section -->
    <component :is="HomeFeaturePro" class="animate-fadeInUp delay-200" />

    <!-- Events Section -->
    <component :is="HomeEventSec" class="animate-fadeInUp delay-300" />

    <!-- Gift Box Section -->
    <component :is="HomeGiftBoxSec" class="animate-fadeInUp delay-400" />

    <!-- Review Section -->
    <component :is="ReviewSection" class="animate-fadeInUp delay-500" />

    
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from "vue"; 
const HomeBanner = defineAsyncComponent(() => import('../components/HomeBanner.vue'));
const Categories = defineAsyncComponent(() => import('../components/Categories.vue'));
const HomeFeaturePro = defineAsyncComponent(() => import('../components/HomeFeaturePro.vue'));
const HomeEventSec = defineAsyncComponent(() => import('../components/HomeEventSec.vue'));
const HomeGiftBoxSec = defineAsyncComponent(() => import('../components/HomeGiftBoxSec.vue'));
const ReviewSection = defineAsyncComponent(() => import('../components/ReviewSection.vue'));
</script>

<style scoped>
/* Animate on load */
@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fadeInUp {
  animation: fadeInUp 0.8s ease-out forwards;
}

/* Delay utility */
.delay-100 {
  animation-delay: 0.1s;
}

.delay-200 {
  animation-delay: 0.2s;
}

.delay-300 {
  animation-delay: 0.3s;
}

.delay-400 {
  animation-delay: 0.4s;
}

.delay-500 {
  animation-delay: 0.5s;
}
</style>
