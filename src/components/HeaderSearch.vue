<template>
  <div
    class="search_products absolute z-10 min-w-[250px] -top-4 right-[30px] w-full bg-white p-2 shadow-md flex justify-center transition-all duration-300"
  >
    <!-- Close button -->
    <i class="on_web_hide fa-solid text-primary font-bold fa-xmark cursor-pointer fixed top-[25px] right-[32px] text-xl bg-white" @click="closeSearch"></i>

    <!-- Input -->
    <input
      type="search"
      placeholder="Search products..."
      v-model="query"
      @input="onSearch"
      class="w-full max-w-md px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "HeaderSearch",
  emits: ["close", "search"],  
  setup(_, { emit }) {
    const query = ref("");
    const closeSearch = () => {
      emit("close"); // notify parent to toggle visibility
    };

    const onSearch = () => {
      emit("search", query.value); // send input value to parent
    };

    return { query, closeSearch, onSearch };
  },
});
</script>
<style scoped>
.on_web_hide{
  display: none;
}
@media(max-width:400px) {
.search_products {
    position: fixed;
    top:0;  
    left: 0;
    width: 100%;
   padding: 13px; 

}
.on_web_hide{
  display: block !important;
}

}
</style>
