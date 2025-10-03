<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script setup lang="ts">
import DefaultLayout from "./layouts/DefaultLayout.vue";
import AdminLayout from "./layouts/AdminLayout.vue";
import { computed } from "vue";
import { useRoute } from "vue-router";


const route = useRoute();

const layout = computed(() => {
  switch (route.meta.layout) {
    case "admin":
      return AdminLayout;
    default:
      return DefaultLayout;
  }
});
</script>
