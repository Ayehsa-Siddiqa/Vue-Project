<template>
    <section class="category_section w-full block float-left overflow-hidden  py-[40px] md:py-[60px] lg:py-[92px] px-[15px]">
        <div class="custom_container">
            <h3 class="text-center font-caprasimo mb-[30px] md:mb-[40px] text-dark-grey">
                Can't Resist? See What's Trending Now! 🍭🔥
            </h3>

            <!-- Category Grid -->

            <div class="category_main  gap-y-[40px] lg:gap-[80px] -mx-4 -sm-mx-5 -lg:mx-3 flex flex-wrap justify-center lg:justify-between">
                <div v-for="category in categories" :key="category.id"
                    class="category_box px-4 sm:px-5 lg:px-3 flex rounded-lg  group transition">
                    <RouterLink :to="category.link" class="flex flex-col items-center w-full h-full">
                        <!-- Image -->
                        <figure class="w-full lg:w-[180px]">
                            <img :src="category.image" :alt="category.name"
                                class="w-full h-full object-cover group-hover:scale-105 transition duration-300" />
                        </figure>

                        <!-- Title -->
                        <div class="pt-4 text-center">
                            <h5 class="text-dark-grey text-center tracking-[0] leading-[100%] text-[18px] md:text-[20px] lg:text-[24px] font-sans font-semibold text-lg">
                                {{ category.name }}
                            </h5>
                        </div>
                    </RouterLink>
                </div>
            </div>


        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { RouterLink } from "vue-router";

interface Category {
    id: number;
    name: string;
    image: string;
    link: string;
}

export default defineComponent({
    name: "CategorySection",
    components: { RouterLink },
    data() {
        return {
            categories: [
                {
                    id: 1,
                    name: "Cloetta",
                    image: "/src/assets/categories-images/image1.png",
                    link: "/shop/cloetta",
                },
                {
                    id: 2,
                    name: "Franssons",
                    image: "/src/assets/categories-images/image2.png",
                    link: "/shop/franssons",
                },
                {
                    id: 3,
                    name: "candinavia",
                    image: "/src/assets/categories-images/image3.png",
                    link: "/shop/candinavia",
                },
                {
                    id: 4,
                    name: "Grahns",
                    image: "/src/assets/categories-images/image4.png",
                    link: "/shop/grahns",
                },
                {
                    id: 5,
                    name: "Maku Laku",
                    image: "/src/assets/categories-images/image5.png",
                    link: "/shop/maku-laku",
                },
                {
                    id: 6,
                    name: "Baskets",
                    image: "/src/assets/categories-images/image6.png",
                    link: "/category/baskets",
                },
                {
                    id: 7,
                    name: "Not Creme",
                    image: "/src/assets/categories-images/image7.png",
                    link: "/shop/not-creme",
                },
                {
                    id: 8,
                    name: "Candie",
                    image: "/src/assets/categories-images/image8.png",
                    link: "/shop/candie",
                },
            ] as Category[],
        };
    },
});
</script>
<style scoped> 
@media(max-width:1024px) {
    .category_box {
        flex: 0 0 25%;
    }
}
@media(max-width:768px) {
    .category_box {
        flex: 0 0 33.33%;
    } 
}
@media(max-width:400px) {
    .category_box {
        flex: 0 0 50%;
    }
}
</style>
