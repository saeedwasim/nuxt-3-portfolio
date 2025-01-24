<template>
    <div class="bg-[#131313] py-16 px-5 md:px-10">
        <div data-aos="fade-up" data-aos-duration="1000">
            <div class="w-full">
                <p class="text-2xl font-sans text-[#D87004] font-semibold">TESTOMINALS</p>
                <p class="text-[34px] md:text-[40px] lg:text-[70px] font-bold tracking-tight leading-none mt-5">
                    Voices of Trust</p>
                <p class="text-lg md:text-xl lg:text-2xl font-normal mt-10 w-full md:w-[55%]"> Here’s a glimpse of the
                    work I’ve
                    done for
                    clients and
                    projects
                    that I’m proud
                    of. Each
                    piece tells a story of creativity, strategy, and execution coming together to achieve success.</p>
            </div>
        </div>
        <div class="flex flex-col md:flex-row mt-20 gap-5" data-aos="fade-up" data-aos-duration="1000">
            <div class="bg-[#181818] py-5 w-full rounded-2xl px-5 md:px-10 md:flex-1">
                <p class="text-white text-2xl font-semibold">Chris Daniels</p>
                <p class="text-gray-500 text-lg">Owner of Artisan Bakery Co.</p>
                <div class="border-l-[5px] border-[#e68017] mt-8">
                    <p class="ml-5 text-white text-base md:text-xl font-semibold">This agency is a one-stop shop
                        for all our branding and
                        marketing needs. Their cohesive strategy gave us a fresh identity and improved our online
                        visibility dramatically. Within weeks, we were ranking higher on search engines and seeing more
                        engagement on social media.</p>
                </div>
            </div>
            <div class="bg-[#181818] py-5 w-full rounded-2xl px-5 md:px-10 md:flex-1">
                <p class="text-white text-2xl font-semibold">Laura Simmons</p>
                <p class="text-gray-500 text-lg">COO of EcoTrend</p>
                <div class="border-l-[5px] border-[#e68017] mt-8">
                    <p class="ml-5 text-white text-base md:text-xl font-semibold">The development team exceeded our
                        expectations!
                        They delivered a fully customized, lightning-fast website ahead of schedule. The seamless user
                        experience has not only delighted our customers but also boosted our conversion rates. Fantastic
                        work!</p>
                </div>
            </div>
        </div>

        <div>
            <p class="text-center mt-32 text-2xl md:text-3xl font-bold">Proud to Work With</p>
            <div class="flex mx-auto mt-10 overflow-hidden w-[90%] md:w-[50%]">
                <div class="flex animate-marquee">
                    <img src="@/assets/svg/html.svg" alt="" class="w-20 h-20 ml-20">
                    <img src="@/assets/svg/css.svg" alt="" class="w-20 h-20 ml-20">
                    <img src="@/assets/svg/vue.svg" alt="" class="w-20 h-20 ml-20">
                    <img src="@/assets/svg/nuxt.svg" alt="" class="w-20 h-20 ml-20">
                    <img src="@/assets/svg/html.svg" alt="" class="w-20 h-20 ml-20">
                    <img src="@/assets/svg/css.svg" alt="" class="w-20 h-20 ml-20">
                    <img src="@/assets/svg/vue.svg" alt="" class="w-20 h-20 ml-20">
                    <img src="@/assets/svg/nuxt.svg" alt="" class="w-20 h-20 ml-20">
                </div>
            </div>

        </div>
        <div class="bg-[#181818] mt-20 px-5 md:px-10 py-10 rounded-xl " data-aos="fade-up" data-aos-duration="1000">
            <p class="text-[34px] md:text-[40px] lg:text-[70px]  font-bold tracking-tighter leading-none">
                TAKE THE NEXT STEP</p>
            <p class="text-lg lg:text-xl  font-semibold w-full lg:w-[70%] mt-10">Here’s a glimpse of the
                work I’ve done for
                clients and
                projects
                that I’m proud
                of. Each
                piece tells a story of creativity, strategy, and execution coming together to achieve success.</p>
            <div class="mt-14 animate-fadeInUp delay-1000">
                <button
                    class="px-10 py-2.5 relative rounded-lg group overflow-hidden font-medium bg-[#D87004] text-black hover:border-white text-xl inline-block">
                    <span
                        class="absolute bottom-0 left-0 flex w-full h-0 mt-0 transition-all duration-200 ease-out transform translate-y-0 bg-white group-hover:h-full "></span>
                    <span class="relative ">Get in Touch</span>
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
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

@keyframes marquee {
    0% {
        transform: translateX(100%);
    }

    100% {
        transform: translateX(-100%);
    }
}

.animate-marquee {
    animation: marquee 10s linear infinite;
}

.animate-fadeInUp {
    animation: fadeInUp 1s ease-out;
}
</style>