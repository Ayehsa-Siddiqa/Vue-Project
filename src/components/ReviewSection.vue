<template>
    <section class="w-full float-left  mb-[40px] md:mb-[60px] lg:mb-[80px] block px-[15px] overflow-hidden">
        <div class="custom_container">
            <h3 class="text-center font-caprasimo mb-[30px] md:mb-[40px] lg:mb-[54px]">
                Smiles All Around! See Our Happy Customers 😊
            </h3>
            <!-- Slick Slider -->
            <div class="main_slider relative">
                <div
                    class="review_slider_arrow_box flex justify-between items-center pb-5 h-100 absolute left-0 top-0 w-full z-10">
                </div>
                <div class="review-slider relative -mx-[7px]">
                    <div v-for="review in reviews" :key="review.id" class="px-[7px]">
                        <div
                            class="w-full flex flex-col items-center text-center transition transform hover:-translate-y-1">
                            <figure class="relative m-0 w-full">
                                <!-- Initials (generated dynamically) -->
                                <img :src="review.image" alt="review" class=" mb-4 w-full object-cover" />
                                <div
                                    class="bg-[#FFDDDD] text-[#383F42] font-semibold rounded-full w-[42px] h-[42px] flex items-center justify-center border-1 border-white uppercase text-[14px] font-san absolute left-[50%] bottom-[0] -ml-[21px] -mb-[5px]">
                                    {{ getInitials(review.name) }}
                                </div>
                            </figure>
                            <h5 class="font-bold font-sans text-dark-grey my-[4px]">{{ review.name }}</h5>
                            <p class="text-[#383F42] font-sans text-[10px] leading-[14px] tracking-0 mb-[16px]">{{
                                review.date }}</p>
                            <p class="text-dark-grey text-[12px] leading-[16px] font-sans line-clamp-4 px-3">{{
                                review.review
                            }}</p>

                            <!-- Rating -->
                            <div class="flex justify-center space-x-1">
                                <span v-for="i in 5" :key="i" class="text-sm  "
                                    :class="i <= review.rating ? 'text-primary' : 'text-gray-300'"><i
                                        class="fa-solid fa-star"></i></span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
</template>


<script lang="ts">
import { defineComponent, onMounted } from "vue";
import $ from "jquery";
import "slick-carousel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import type { Review } from "../types/review";

export default defineComponent({
    name: "ReviewSlider",
    setup() {
        const reviews: Review[] = [
            {
                id: 1,
                name: "Amina B.",
                date: "November 24, 2021",
                review:
                    "My daughter absolutely adores the costume; she proudly refers to herself as 'the true princess.' Thank you so much! We look forward to purchasing more.",
                rating: 5,
                image: "/src/assets/ReviewSecImages/1.png",
            },
            {
                id: 2,
                name: "Fatima R.",
                date: "November 24, 2021",
                review:
                    "The quality is outstanding, and the costume looks incredibly realistic. The sizes run a bit small compared to the chart, especially the skirt, but overall still great.",
                rating: 4,
                image: "/src/assets/ReviewSecImages/5.png",
            },
            {
                id: 3,
                name: "Layla T.",
                date: "November 24, 2021",
                review:
                    "Thank you, Party Corner, for the amazing Isabella and Mirabel costumes! My girls had a blast being these characters. The fabric quality and stitching are top-notch.",
                rating: 5,
                image: "/src/assets/ReviewSecImages/2.png",
            },
            {
                id: 4,
                name: "Clara M.",
                date: "November 24, 2021",
                review:
                    "Great value for the price! The dresses were super fast. I just wish it came with additional items instead of just cupcake toppers; it felt a bit lacking.",
                rating: 4,
                image: "/src/assets/ReviewSecImages/3.png",
            },
            {
                id: 5,
                name: "Fatima R.",
                date: "November 24, 2021",
                review:
                    "The quality is outstanding, and the costume looks incredibly realistic. The sizes run a bit small compared to the chart, especially the skirt, but overall still great.",
                rating: 4,
                image: "/src/assets/ReviewSecImages/4.png",
            },
            {
                id: 6,
                name: "Fatima R.",
                date: "November 24, 2021",
                review:
                    "The quality is outstanding, and the costume looks incredibly realistic. The sizes run a bit small compared to the chart, especially the skirt, but overall still great.",
                rating: 4,
                image: "/src/assets/ReviewSecImages/5.png",
            },
        ];

        // Generate initials from name (first letter of first + last word)
        const getInitials = (name: string): string => {
            const parts = name.trim().split(" ");
            if (parts.length === 1) {
                return parts[0].charAt(0).toUpperCase();
            }
            return (
                parts[0].charAt(0).toUpperCase() +
                parts[parts.length - 1].charAt(0).toUpperCase()
            );
        };

        onMounted(() => {

            ($(".review-slider") as any).slick({
                slidesToShow: 5,
                slidesToScroll: 1,
                arrows: true,
                dots: false,
                infinite: true,
                autoplay: true,
                autoplaySpeed: 3000,
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: { slidesToShow: 3 },
                    },
                    {
                        breakpoint: 640,
                        settings: { slidesToShow: 2 },
                    },
                    {
                        breakpoint: 450,
                        settings: {
                            slidesToShow: 1,
                            arrows: false,
                            centerMode: true,
                            centerPadding: '40px'


                        },
                    },
                ],
                appendArrows: $(".review_slider_arrow_box"),
                prevArrow:
                    '<button type="button" class="slick-prev bg-red-500 text-white rounded-full w-10 h-10"><i class="fa-solid fa-chevron-left"></i></button>',
                nextArrow:
                    '<button type="button" class="slick-next bg-red-500 text-white rounded-full w-10 h-10"><i class="fa-solid fa-chevron-right"></i></button>',
            });
        });

        return { reviews, getInitials };
    },
});
</script>

<style>
/* style to prevent default style from the nxt nd prev arrows and responsive fixes  */
.slick-prev,
.slick-next {
    position: static !important;
    left: unset !important;
    font-size: 14px !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    width: 48px;
    height: 48px;
    border: 2px solid #E92827 !important;
    -webkit-transform: unset !important;
    -ms-transform: unset !important;
    transform: unset !important;
    color: red !important;
    background: white !important;
}

.slick-prev {
    margin-left: -70px !important;
}

.slick-next {
    margin-right: -70px !important;
}

.slick-prev:before,
.slick-next:before {
    display: none !important;
}

@media(max-width:1500px) {
    .slick-prev {
        margin-left: 0px !important;
    }

    .slick-next {
        margin-right: 0px !important;
    }

    .review-slider {
        margin: 0 !important;
        padding: 0 12px;
    }

    .slick-prev,
    .slick-next {
        font-size: 13px !important;
        width: 38px;
        height: 38px;
    }
}

@media(max-width:576px) {
    .review-slider {
        margin: 0 -7px !important;
        padding: 0px 0 !important;
    }

}
</style>
