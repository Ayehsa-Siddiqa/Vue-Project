<template>
    <section class="relative w-full float-left block ">
        <figure>
            <img class="w-full h-full  min-h-[340px] object-cover" src="/src/assets/home-banner/Slider.png" alt="banner-img" fetchpriority="high">
        </figure>
        <!-- Content -->
        <div class="banner_text_box absolute w-full h-full top-0 left-0">
            <div class="custom_container h-full ">
                <div class="text_inner_box  py-[40px] px-[15px] h-full flex flex-col justify-center items-start ">
                    <h2 class="mb-[16px] text-white font-normal leading-tight font-caprasimo">
                        Get Your Favorite <br />
                        Candies Delivered to <br />
                        Your Door
                    </h2>
                    <p class="tracking-normal text-white font-sans font-normal mb-[20px] md:mb-[26px] text-[16px] md:text-[18px] leading-[22px] md:leading-[26px] max-w-[651px]">
                        The taste of sweetness remains in your mouth when you have
                        overcome all the difficulties and mistakes in your life,
                        and revealed your truth.
                    </p>
                    <AppButton to="/shop"> Taste the Sweetness</AppButton>
                </div>
            </div>

        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppButton from "./AppButton.vue";

export default defineComponent({
    name: "HeroBanner",
    components: { AppButton },
});
</script>

 
