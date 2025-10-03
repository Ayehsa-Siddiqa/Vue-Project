<template>
    <section class="w-full">
        <form @submit.prevent="handleSubmit" class="relative flex flex-col gap-1">
            <div class="input_box flex">
                <input v-model="email" type="email" placeholder="Enter your email"
                    class="min-w-[160px] w-full px-3 border-white focus:outline-none border rounded-s-[9px] font-sans text-[13px] leading-[18px] tracking-wider text-white" />
                <button type="submit"
                    class="h-[42px] lg:h-[55px] border border-white shrink-0 rounded-e-[9px] inline-block w-[118px] bg-white text-primary font-caprasimo uppercase tracking-widest text-[13px] font-normal transition">
                    Subscribe
                </button>
            </div>
            <!-- Error Message -->
            <p v-if="errorMessage" class="absolute left-0 -bottom-5 m-0 text-red-500 text-[12px]">{{ errorMessage }}</p>
            <!-- Success Message -->
            <p v-if="successMessage" class=" absolute left-0 -bottom-5 m-0 text-green-600 text-[12px]">{{ successMessage }}</p>
        </form>
    </section>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const email = ref("");
const errorMessage = ref("");
const successMessage = ref("");

//  Function for Validate Email
const validateEmail = (email: string): boolean => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
};

// Functionfor Handling Form Submit
const handleSubmit = () => {
    errorMessage.value = "";
    successMessage.value = "";
    if (!email.value) {
        errorMessage.value = "Email is required!";
        return;
    }
    if (!validateEmail(email.value)) {
        errorMessage.value = "Please enter a valid email address.";
        return;
    }
    console.log("Submitted Email:", email.value);
    successMessage.value = "Thank you for subscribing!";
    email.value = "";
};
</script>
