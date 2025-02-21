<template>
  <div class="flex flex-col md:flex-row bg-[#181818] px-5 md:px-10 py-24">
    <!-- Left Section -->
    <div class="w-full md:w-[65%]" data-aos="fade-up" data-aos-duration="1000">
      <p class="text-2xl font-sans text-[#D87004] font-semibold mt-3">ABOUT</p>
      <p
        class="text-[34px] md:text-[40px] lg:text-[70px] font-semibold md:font-bold tracking-tight leading-none mt-5"
      >
        GET TO KNOW ME
      </p>
      <p
        class="text-lg md:text-xl lg:text-2xl font-normal md:font-medium mt-10 w-full md:w-[70%]"
      >
        Hi, I’m Saeed, Passionate Front-End Developer crafting responsive and
        dynamic web experiences with Vue.js, Nuxt 3, Vue 3, and Tailwind CSS.
      </p>
    </div>

    <!-- Right Section -->
    <div class="w-[100%] md:w-[40%] mt-10 flex justify-end flex-wrap gap-x-5">
      <div
        v-for="item in data"
        :key="item.sign"
        class="items-center space-x-2 w-[45%]"
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-duration="1000"
      >
        <div class="flex">
          <p class="text-[50px] md:text-[65px] lg:text-[80px] font-semibold">
            {{ item.number }}
          </p>
          <p
            class="text-[30px] md:text-[45px] lg:text-[60px] font-semibold ml-1 mt-3 text-[#D87004]"
          >
            {{ item.sign }}
          </p>
        </div>
        <p
          class="text-[#6D6D6D] text-base md:text-lg truncate lg:text-2xl font-semibold"
        >
          {{ item.title }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
const data = [
  { title: "Years of Exp", number: 2, sign: "+" },
  { title: "Satisfied Clients", number: 10, sign: "+" },
  { title: "Projects Done", number: 10, sign: "+" },
  { title: "Positive Reviews", number: 100, sign: "%" },
];
</script>
