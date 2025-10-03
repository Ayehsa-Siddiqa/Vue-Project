<template>
    <section class="relative w-full float-left block ">
        <figure>
            <img class="w-full h-full  min-h-[340px] object-cover" src="/src/assets/home-banner/Slider.png" alt="banner-img" fetchpriority="high">
        </figure>
        <!-- Content -->
        <div class="banner_text_box absolute w-full h-full top-0 left-0">
            <div class="custom_container h-full ">
                <div class="text_inner_box h-full flex flex-col justify-center items-start">
                    <h2 class="text-white font-normal leading-tight font-caprasimo">
                        Get Your Favorite <br />
                        Candies Delivered to <br />
                        Your Door
                    </h2>
                    <p class="text-white font-sans font-normal">
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

<style scoped>
.text_inner_box {
    padding: 40px 15px;
}

.text_inner_box h2 {
    margin-bottom: 16px;
}

.text_inner_box p {
    font-size: 18px;
    line-height: 26px;
    letter-spacing: 0;
    margin-bottom: 25px;
    max-width: 651px;
}

@media(max-width:768px) {
    .text_inner_box p {
        font-size: 16px;
        line-height: 22px;
        margin-bottom: 20px;
    }
}

</style>
