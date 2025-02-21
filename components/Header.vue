<template>
  <div class="h-20 bg-black flex justify-between items-center px-10 relative">
    <!-- Logo Section -->
    <div>
      <img
        src="@/assets/svg/logo.svg"
        alt="Logo"
        class="cursor-pointer"
        @click="scrollTo('home')"
      />
    </div>

    <!-- Navigation Section -->
    <div class="flex items-center">
      <!-- Desktop Navigation -->
      <div class="gap-10 hidden lg:flex items-center">
        <p
          @click="scrollTo('about')"
          class="hover:text-[#e68017] text-xl font-semibold font-sans cursor-pointer"
        >
          About
        </p>
        <p
          @click="scrollTo('services')"
          class="hover:text-[#e68017] text-xl font-semibold font-sans cursor-pointer"
        >
          Services
        </p>
        <p
          @click="scrollTo('portfolio')"
          class="hover:text-[#e68017] text-xl font-semibold font-sans cursor-pointer"
        >
          Portfolio
        </p>
      </div>

      <!-- Separator Line for Desktop -->
      <div class="w-[1px] h-[28px] bg-white mx-10 hidden lg:block"></div>

      <!-- Resume and Contact Button (Desktop Only) -->
      <div class="gap-10 hidden lg:flex items-center">
        <p
          class="hover:text-[#e68017] text-xl font-semibold font-sans cursor-pointer"
          @click="downloadResume"
        >
          Download Resume
        </p>
      </div>

      <!-- Mobile Menu Icon -->
      <img
        src="@/assets/svg/menu.svg"
        alt="Menu"
        class="cursor-pointer block lg:hidden"
        @click="toggleMenu"
      />
    </div>

    <!-- Mobile Dropdown Menu -->
    <transition name="menu-slide">
      <div
        v-if="isMenuOpen"
        class="absolute rounded-b-3xl top-20 left-0 w-full bg-[#272626] flex flex-col space-y-5 py-3 items-center h-[250px] md:flex lg:hidden"
      >
        <p
          @click="scrollTo('about')"
          class="hover:text-[#e68017] text-xl font-semibold font-sans cursor-pointer"
        >
          About
        </p>
        <p
          @click="scrollTo('services')"
          class="hover:text-[#e68017] text-xl font-semibold font-sans cursor-pointer"
        >
          Services
        </p>
        <p
          @click="scrollTo('portfolio')"
          class="hover:text-[#e68017] text-xl font-semibold font-sans cursor-pointer"
        >
          Portfolio
        </p>
        <span class="w-52 h-[1px] bg-white"></span>
        <p
          class="hover:text-[#e68017] text-xl font-semibold font-sans cursor-pointer"
          @click="downloadResume"
        >
          Download Resume
        </p>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref } from "vue";

// Reactive state for toggling the menu
const isMenuOpen = ref(false);

// Toggle menu function
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

// Scroll to specific section and close menu
const scrollTo = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
  if (isMenuOpen.value) {
    isMenuOpen.value = false; // Close the menu after scrolling
  }
};
const downloadResume = () => {
  const link = document.createElement("a");
  link.href = "/saeedCv.pdf"; // Ensure this file is in the 'public' folder
  link.download = "Saeed_Wasim_Resume.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  isMenuOpen.value = false; // Close the menu after scrolling
};
</script>

<style scoped>
/* Animation for dropdown menu */
.menu-slide-enter-active {
  transition: all 0.3s ease-in-out;
  transform: translateY(-10px);
  opacity: 0;
}

.menu-slide-enter-to {
  transform: translateY(0);
  opacity: 1;
}

.menu-slide-leave-active {
  transition: all 0.3s ease-in-out;
  transform: translateY(0);
  opacity: 1;
}

.menu-slide-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}
</style>
