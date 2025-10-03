<template>
    <section class="event_section float-left w-full block px-[15px] mb-[40px] md:mb-[60px] lg:mb-[94px]">
        <div class="custom_container">
            <div class="event_sec_inner relative bg-[#FFECEC] rounded-2xl">
                <img class="absolute max-w-[55px] sm:max-w-[75px] :md:max-w-[112px] left-0 top-0" src="/src/assets/HomeEventSecImages/candy.png"
                    alt="candy image">
                <img class="absolute max-w-[105px] md:max-w-[115px] right-[0] sm:left-[50%] -ml-[57px] top-0"
                    src="/src/assets/HomeEventSecImages/ballon-top.png" alt="ballon image">
                <img class="absolute animation animate-spin duration-300  max-w-[60px] sm:max-w-[88px] right-[35%]  top-0" src="/src/assets/HomeEventSecImages/star-top.png"
                    alt="start image">
                <div
                    class="grid sm:grid-cols-[1fr_1fr] md:grid-cols-[1.3fr_1fr] lg:grid-cols-[1.6fr_1fr] sm:gap-[40px] lg:gap-[93px]">
                    <div class="content_box py-[40px] px-[15px] sm:pl-[30px] md:pl-[70px] lg:pl-[153px] self-center">
                        <small
                            class="font-sans text-primary font-bold text-[16px] lg:text-[18px] inline-block mb-[8px]">Events</small>
                        <h3 class="font-caprasimo text-[48px] mb-[10px] lg:mb-[16px]">Make Every <br> Moment Sweeter
                            <br> with
                            Goodiset! 🎉</h3>
                        <p
                            class="font-sans text-[#6E6E6E] font-normal text-[16px] lg:text-[18px] leading-[22px] lg:leading-[26px] max-w-[446px] mb-[24px] lg:mb-[32px]">
                            From
                            Christmas to birthdays and beyond, we’ve got the perfect treats for every celebration.
                        </p>
                        <AppButton to="/shop">Explore Our Collections</AppButton>
                    </div>
                    <figure>
                        <img src="/src/assets/HomeEventSecImages/products.png"
                            class="w-full h-full rounded-r-2xl object-cover object-left" alt="products image">
                    </figure>
                </div>
                <img class="absolute max-w-[40px] md:max-w-[73px] left-[15px] md:left-[23px]  bottom-0"
                    src="/src/assets/HomeEventSecImages/star-bottom.png" alt="star image">
                <img class="absolute max-w-[140px]  lg:max-w-[193px] left-[50%]  bottom-0"
                    src="/src/assets/HomeEventSecImages/ballonbottom.png" alt="ballon image">
            </div>
        </div>
    </section>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import AppButton from './AppButton.vue';

export default defineComponent({
    name: "EventSection",
    components: { AppButton }
});
</script>

<style scoped>
h3 {
    font-size: 48px !important;
}

@media(max-width:1150px) {
    h3 {
        font-size: 40px !important;
        line-height: 44px;
    }
}

@media (max-width: 1024px) {
    h3 {
        font-size: 34px !important;
        line-height: 40px;
    }
}

@media (max-width: 768px) {
    h3 {
        font-size: 28px !important;
        line-height: 34px;
    }
}
@media (max-width: 576px) {
    h3 {
        font-size: 24px !important;
        line-height: 28px;
    }
}
</style>
