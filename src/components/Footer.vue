<script lang="ts" setup>
import { ref } from "vue";
import NewsLetter from "./NewsLetter.vue";
import { RouterLink } from "vue-router";


interface FooterSection {
    title: string;
    links: { name: string; url: string }[];
}

const sections: FooterSection[] = [
    {
        title: "Company",
        links: [
            { name: "About Us", url: "#" },
            { name: "Become a partner", url: "#" },
            { name: "Contact Us", url: "#" },
        ],
    },
    {
        title: "Distribution",
        links: [
            { name: "Retailers", url: "#" },
            { name: "Franchise", url: "#" },
            { name: "Event organiser", url: "#" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "Terms & Conditions", url: "#" },
            { name: "FAQs", url: "#" },
            { name: "Privacy Policy", url: "#" },

        ],
    },
];

// To check each time which section is open (for mobile accordion)
const openSection = ref<number | null>(null);
const toggleSection = (index: number) => {
    openSection.value = openSection.value === index ? null : index;
};
</script>

<template>
    <footer class="bg-dark-grey float-left w-full block pt-[40px] lg:pt-[68px]  px-[15px]">
        <div class="custom_container">
            <div class="footer_head mb-[40px] lg:mb-[64px]">
                <div
                    class="w-full max-w-[1112px]  mx-auto flex gap-4 flex-col sm:flex-row items-center justify-between bg-[#4E4E4E] text-white px-[20px] lg:px-[32px] pt-[15px] lg:pt-[30px] pb-[15px] lg:pb-[26px] rounded-[16px]">
                    <p
                        class="font-caprasimo text-center text-sm-left text-[20px] lg:text-[24px] leading-[25px] lg:leading-[36px] font-normal">
                        Ready to Join the Sweet Side? Become a Franchise Partner! 🍭
                    </p>
                    <a href="#"
                        class="bg-primary text-white font-bold rounded-[12px] px-[25px] lg:px-[37px] py-[8px] text-[14px] lg:text-[16px] leading-[24px] shrink-0">
                        Get Info
                    </a>
                </div>
            </div>
            <div class="footer_main pb-[40px] lg:pb-[48px]">
                <div
                    class="grid grid-cols-1 gap-[15px] sm:gap-[40px] xl:gap-[55px] sm:grid-cols-[1fr_1fr] md:grid-cols-[1.5fr_1fr_1fr] lg:grid-cols-[1.5fr_1fr_1fr_1fr_2fr] gap-6">
                    <div class="footer_logo_box">
                        <figure><img
                                class="object-contain mx-auto sm:mx-0 block mb-[18px] max-w-[140px] md:max-w-[160px]"
                                src="/src/assets/logo/header-logo.png" alt="footer logo"></figure>
                        <p
                            class="text-center sm:text-left mb-3 sm:mb-0 font-sans text-white uppercase text-[12px] leading-[19px]">
                            we bring joy,
                            sweetness and candy into everyone's world. Goodiset is as Swedish as it gets and nothing
                            beats Swedish goodies.</p>
                    </div>
                    <div v-for="(section, index) in sections" :key="section.title">

                        <button class="w-full flex justify-between items-center sm:block sm:mb-[20px] text-left"
                            @click="toggleSection(index)">
                            <span
                                class="font-caprasimo text-[15px] tracking-widest uppercase leading-[18px] text-white">{{
                                    section.title }}</span>
                            <!-- Show toggle only in mobile -->
                            <span class="sm:hidden text-xl">
                                <span class="text-2xl text-white" v-if="openSection === index">-</span>
                                <span class="text-2xl text-white" v-else>+</span>
                            </span>
                        </button>

                        <!-- Links -->
                        <ul class="pt-3 sm:pt-0 transition-all duration-300 sm:block" :class="{
                            'hidden sm:block': openSection !== index,
                            'block': openSection === index
                        }">
                            <li class="mb-[18px] last:mb-0" v-for="link in section.links" :key="link.name">
                                <RouterLink :to="link.url"
                                    class="text-[13px] leading-[18px] uppercase  text-white hover:text-white hover:underline transition-colors">
                                    {{ link.name }}
                                </RouterLink>
                            </li>
                        </ul>
                    </div>
                    <div class="footer_news_letter">
                        <button class="w-full flex justify-between items-center md:block sm:mb-[20px] text-left"
                            @click="toggleSection(4)">
                            <span
                                class="font-caprasimo text-[15px] tracking-widest uppercase leading-[18px] text-white">
                                Newsletter</span>
                            <!-- Show toggle only in mobile -->
                            <span class="sm:hidden text-xl">
                                <span class="text-2xl text-white" v-if="openSection === 4">-</span>
                                <span class="text-2xl text-white" v-else>+</span>
                            </span>
                        </button>
                        <div class="pt-3 sm:pt-0  transition-all duration-300 sm:block" :class="{
                            'hidden sm:block': openSection !== 4,
                            'block': openSection === 4
                        }">
                            <NewsLetter />
                            <div class="footer_social flex space-x-2 mt-[20px]">
                                <!-- Facebook -->
                                <a href="https://facebook.com" target="_blank"
                                    class="text-white flex items-center justify-center w-[32px] h-[32px] border border-white rounded-full">
                                    <i class="fab fa-facebook-f text-sm"></i>
                                </a>

                                <!-- Twitter -->
                                <a href="https://twitter.com" target="_blank"
                                    class="text-white flex items-center justify-center w-[32px] h-[32px] border border-white rounded-full">
                                    <i class="fab fa-twitter text-sm"></i>
                                </a>

                                <!-- Instagram -->
                                <a href="https://instagram.com" target="_blank"
                                    class="text-white flex items-center justify-center w-[32px] h-[32px] border border-white rounded-full">
                                    <i class="fab fa-instagram text-sm"></i>
                                </a>

                                <!-- LinkedIn -->
                                <a href="https://linkedin.com" target="_blank"
                                    class="text-white flex items-center justify-center w-[32px] h-[32px] border border-white rounded-full">
                                    <i class="fab fa-linkedin-in text-sm"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </footer>
    <!-- copy write -->
    <div
        class="bg-dark-grey float-left w-full block text-center text-sm text-white border-t border-[#565656] py-[18px] lg:py-[24px]">
        © Copyright 2025, All Rights Reserved by Goodiset
    </div>
</template>

<style scoped></style>
