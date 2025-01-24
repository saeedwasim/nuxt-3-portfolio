<template>
    <div class="flex flex-col md:flex-row bg-[#131313] px-10 py-16 justify-between">
        <!-- Left Section -->
        <div class="w-full md:w-[70%] mt-20" data-aos="fade-up" data-aos-duration="1000">
            <p class="text-[22px] md:text-[28px] lg:text-[32px] font-sans font-semibold text-center md:text-start">
                Hi, I'm <span class="text-[#e68017]">Oliver</span> Stone
            </p>
            <p class="text-[35px] md:text-[50px] lg:text-[100px] text-center md:text-start
           font-semibold md:font-bold font-bebas tracking-tight leading-none mt-8">
                TURNING IDEAS INTO IMPACT.
            </p>
            <div class="mt-16 flex justify-center md:justify-start">
                <button
                    class="w-44 h-12 relative rounded-lg group overflow-hidden font-medium bg-[#D87004] text-black hover:border-white text-xl inline-block"
                    data-aos="fade-up" data-aos-duration="1000">
                    <span
                        class="absolute bottom-0 left-0 flex w-full h-0 mt-0 transition-all duration-200 ease-out transform translate-y-0 bg-white group-hover:h-full"></span>
                    <span class="relative">Get Started</span>
                </button>
            </div>
        </div>

        <!-- Right Section -->
        <div class="w-full md:w-[30%] mt-10 md:mt-0" data-aos="fade-up" data-aos-duration="1000">
            <div class="flex justify-center md:justify-end">
                <img src="@/assets/images/hero.webp" alt=""
                    class="w-[70%]  md:w-[100%] h-[300px] md:h-[350px] lg:h-[510px] " />
            </div>
            <div class="flex justify-center md:justify-end ">
                <p class="text-base md:text-lg font-sans w-[70%] md:w-[100%] font-medium mt-14 
                text-center md:text-end">
                    Crafting innovative solutions that simplify and elevate the user experience
                </p>
            </div>
            <div class="flex justify-center md:justify-end mt-5 cursor-pointer">
                <div class="flex">
                    <div class="mr-3">
                        <linkedIn class="cursor-pointer" />
                    </div>
                    <div class="mr-3">
                        <dribble class="cursor-pointer" />
                    </div>
                    <div>
                        <whatsapp class="cursor-pointer" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import dribble from "@/components/icons/dribble.vue";
import whatsapp from "@/components/icons/whatsapp.vue";
import linkedIn from "@/components/icons/linkedIn.vue";
</script>