<template>
    <div class="bg-[#131313] border-t border-[#181818] px-5 md:px-10 py-20">
        <div class="flex flex-col md:flex-row justify-between" data-aos="fade-up" data-aos-duration="1000">
            <div class="mt-5">
                <p class="text-2xl font-sans text-[#D87004] font-semibold">SERVICES</p>
                <p class="text-[34px] md:text-[40px] lg:text-[70px] font-bold tracking-tight leading-none mt-5">
                    SOLUTIONS THAT DRIVE SUCCESS
                </p>
            </div>
            <div class="flex justify-start md:justify-end items-start md:items-end animate-fadeInUp mt-10 md:mt-0">
                <p class="text-lg md:text-xl lg:text-2xl font-normal w-full md:w-[80%]">
                    From web design to brand development, I offer a range of solutions tailored to your needs. I’m here
                    to help you make it happen.
                </p>
            </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-20" data-aos="fade-up"
            data-aos-duration="1000">
            <div v-for="(item, index) in data" :key="index"
                class="px-5 py-10 bg-[#181818] rounded-t text-center border-b-4 border-[#EB8317]">
                <div class="flex items-center justify-center">
                    <img :src="item.icon" alt="icon" class="w-16 h-16" />
                </div>
                <div>
                    <h3 class="text-2xl mt-10 font-semibold">{{ item.title }}</h3>
                    <p class="text-lg mt-8 font-normal font-sans">{{ item.description }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import pen from "@/assets/svg/pen.svg";
import dollar from "@/assets/svg/dollar.svg";
import sharp from "@/assets/svg/sharp.svg";
import brand from "@/assets/svg/brand.svg";
const data = [
    {
        title: "Web Design",
        icon: pen,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt sagittis eros",
    },
    {
        title: "Web Development",
        icon: sharp,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt sagittis eros",
    },
    {
        title: "Digital Marketing",
        icon: dollar,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt sagittis eros",
    },
    {
        title: "Brand Identity",
        icon: brand,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt sagittis eros",
    },
];
</script>

<style>
@keyframes fadeInUp {
    0% {
        opacity: 0;
        transform: translateY(50px);
    }

    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

.animate-fadeInUp {
    animation: fadeInUp 1s ease-out;
}
</style>
