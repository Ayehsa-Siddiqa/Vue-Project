<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-pink-100 via-white to-purple-100 text-center py-10 px-6">
    <!-- Big 404 -->
    <h1 class="text-9xl font-extrabold text-primary drop-shadow-lg">404</h1>
    
    <!-- Message -->
    <h2 class="mt-4 text-3xl font-sans font-bold text-gray-800">Oops! Page not found</h2>
    <p class="mt-2 text-lg font-sans text-dark-grey max-w-md">
      The page you're looking for doesn't exist or has been moved.  
      Let’s get you back on track!
    </p>

    <!-- Button -->
    <router-link 
      to="/" 
      class="mt-6 font-sans uppercase inline-block bg-primary hover:bg-primary-600 text-white px-6 py-3 rounded-xl text-sm font-medium shadow-md transition-all"
    >
      Back to Home
    </router-link>

    <!-- Decorative SVG -->
    <div class="mt-10">
      <svg class="w-50 h-50 text-primary-200" fill="currentColor" viewBox="0 0 24 24">
        <path 
          d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"
        />
      </svg>
    </div>
  </div>
</template>

<script setup lang="ts">
// No logic needed here, simple static 404 page
</script>
