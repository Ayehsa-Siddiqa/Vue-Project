<template>
  <!-- Use router-link instead of <a> -->
  <RouterLink
    :to="to"
    class="inline-block bg-primary text-white font-bold hover:text-primary hover:bg-white transition duration-150 ease-in-out"
  >
    <slot />
  </RouterLink>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { RouterLink } from "vue-router";

export default defineComponent({
  name: "AppButton",
  components: { RouterLink },
  props: {
    to: {
      type: String,
      required: true,
    },
  },
});
</script>

<style scoped>
 
a {
  padding: 13px 36px;
  border-radius: 4px;
}
@media(max-width:1024px){
  a {
  padding: 10px 25px; 
}
}
</style>
