<template>
  <div class="bg-[#131313] pt-24 px-5 md:px-10 border-t border-[#181818]">
    <div
      class="justify-between flex flex-col md:flex-row"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div class="w-full md:w-[70%]">
        <p class="text-2xl font-sans text-[#D87004] font-semibold mt-3">
          PORTFOLIO
        </p>
        <p
          class="text-lg md:text-xl lg:text-2xl font-normal mt-10 w-full md:w-[70%] lg:w-[80%]"
        >
          Here’s a glimpse of the work I’ve done for clients and projects that
          I’m proud of. Each piece tells a story of creativity, strategy, and
          execution coming together to achieve success.
        </p>
      </div>
    </div>
    <div class="mt-20" data-aos="fade-up" data-aos-duration="1000">
      <p class="text-xl text-gray-500 font-bold">2024</p>
      <p class="text-2xl lg:text-3xl text-white font-semibold mt-5">
        Static Laptop Website
      </p>
      <div class="flex flex-col md:flex-row mt-10">
        <div class="flex h-40 md:h-40 lg:h-52 w-full md:w-[55%] mt-5">
          <img
            src="@/assets/images/m1.webp"
            alt=""
            class="w-[45%] md:w-[40%] rounded-xl"
          />
          <img
            src="@/assets/images/m2.webp"
            alt=""
            class="w-[45%] md:w-[40%] rounded-xl ml-3 md:ml-10"
          />
        </div>
        <div class="w-full mt-5 md:w-[45%]">
          <p class="text-[20px] md:text-[22px] font-normal">
            A sleek and modern static laptop website showcasing the latest
            models, features, and specifications. Designed with a responsive
            layout for an optimal viewing experience across all devices.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

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
