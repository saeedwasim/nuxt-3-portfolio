<template>
  <div
    class="flex flex-col-reverse md:flex-row px-5 md:px-10 py-24 bg-[#131313]"
  >
    <div class="w-full md:w-[40%] mt-10">
      <div
        v-for="(item, index) in progressItems"
        :key="index"
        class="w-[99%] pb-7"
      >
        <div class="flex justify-between">
          <div>
            <p class="text-xl font-semibold text-white">{{ item.name }}</p>
          </div>
          <div>
            <p class="text-xl text-white">{{ item.value }} %</p>
          </div>
        </div>
        <div class="mt-3">
          <div class="h-2 md:h-3 lg:h-5 w-full overflow-hidden bg-gray-100">
            <div
              class="h-5 bg-[#eb8317] transition-all duration-1000 ease-out"
              :style="{ width: item.progress + '%' }"
              data-aos="fade-right"
              :data-aos-delay="index * 200"
            ></div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="w-full md:w-[60%] mt-10 md:pl-20 lg:pl-28"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <p class="text-2xl font-sans text-[#D87004] font-semibold mt-3">SKILLS</p>
      <p
        class="text-[34px] md:text-[40px] lg:text-[70px] font-bold tracking-tight leading-none mt-5 text-white"
      >
        MASTERING MY CRAFT
      </p>
      <p
        class="text-lg md:text-xl lg:text-2xl font-normal mt-10 w-[100%] text-gray-300"
      >
        I bring a versatile skill set to every project. Whether it’s design or
        development, I’m all about delivering top-notch results that exceed
        expectations.
      </p>
    </div>
  </div>
</template>
<script setup>
const progressItems = [
  { name: "Html & Css", value: 98, progress: 98 },
  { name: "Tailwind Css", value: 95, progress: 95 },
  { name: "Vue Js", value: 90, progress: 90 },
  { name: "Nuxt Js", value: 90, progress: 90 },
  { name: "Api Integration", value: 90, progress: 90 },
];
</script>
