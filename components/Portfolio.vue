<template>
    <div class="bg-[#131313] pt-24 px-5 md:px-10 border-t border-[#181818]">
        <div class="justify-between flex flex-col md:flex-row" data-aos="fade-up" data-aos-duration="1000">
            <div class="w-full md:w-[70%]">
                <p class="text-2xl font-sans text-[#D87004] font-semibold mt-3">PORTFOLIO</p>
                <p class="text-[34px] md:text-[40px] lg:text-[70px]  font-bold tracking-tight leading-none mt-5">
                    RESYLTS THAT MATTER</p>
                <p class="text-lg md:text-xl lg:text-2xl font-normal mt-10 w-full md:w-[70%] lg:w-[80%]">
                    Here’s a glimpse of the work I’ve done for
                    clients and
                    projects
                    that I’m proud
                    of. Each
                    piece tells a story of creativity, strategy, and execution coming together to achieve success.</p>
            </div>
            <div class="w-full mt-5 md:w-[30%]">
                <div class="flex justify-start md:justify-end md:mt-52 animate-fadeInUp delay-1000">
                    <button
                        class="w-60 h-14 relative rounded-lg group overflow-hidden font-medium border-[3px] border-[#e68017] hover:border-white text-xl text-white inline-block">
                        <span
                            class="absolute bottom-0 left-0 flex w-full h-0 mt-0 transition-all duration-200 ease-out transform translate-y-0 bg-white group-hover:h-full "></span>
                        <span class="relative group-hover:text-black">More On Dribble</span>
                    </button>
                </div>
            </div>
        </div>
        <div class="mt-20" data-aos="fade-up" data-aos-duration="1000">
            <p class="text-xl text-gray-500 font-bold">2024</p>
            <p class="text-2xl lg:text-3xl text-white font-semibold mt-5">HomeNest: Furniture Marketplace
                Platform</p>
            <div class="flex flex-col md:flex-row mt-10">
                <div class="flex h-40 md:h-40 lg:h-52 w-full md:w-[55%] mt-5">
                    <img src="@/assets/images/m1.webp" alt="" class="w-[45%] md:w-[40%] rounded-xl ">
                    <img src="@/assets/images/m2.webp" alt="" class="w-[45%] md:w-[40%] rounded-xl ml-3 md:ml-10">
                </div>
                <div class="w-full mt-5 md:w-[45%] ">
                    <p class="text-[20px] md:text-[22px] font-normal">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae ligula euismod, sodales
                        libero sed, varius orci. Aliquam erat volutpat.
                    </p>
                    <p class="text-[#e68017] text-xl font-semibold mt-5">Live Preview</p>
                </div>
            </div>
        </div>
        <div class="mt-20 border-t border-b border-[#181818] py-10" data-aos="fade-up" data-aos-duration="1000">
            <p class="text-xl text-gray-500 font-bold">2024</p>
            <p class="text-2xl lg:text-3xl text-white font-semibold mt-5">HomeNest: Furniture Marketplace
                Platform</p>
            <div class="flex flex-col md:flex-row mt-10">
                <div class="flex h-40 md:h-40 lg:h-52 w-full md:w-[55%] mt-5">
                    <img src="@/assets/images/m1.webp" alt="" class="w-[45%] md:w-[40%] rounded-xl ">
                    <img src="@/assets/images/m2.webp" alt="" class="w-[45%] md:w-[40%] rounded-xl ml-3 md:ml-10">
                </div>
                <div class="w-full mt-5 md:w-[45%] ">
                    <p class="text-[20px] md:text-[22px] font-normal">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae ligula euismod, sodales
                        libero sed, varius orci. Aliquam erat volutpat.
                    </p>
                    <p class="text-[#e68017] text-xl font-semibold mt-5">Live Preview</p>
                </div>
            </div>
        </div>


    </div>
</template>

<script setup>

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