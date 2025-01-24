<template>
    <div class="bg-[#131313] py-3 px-10">
        <div class="flex flex-col md:flex-row  justify-between py-5">
            <div class="flex flex-col md:flex-row  ">
                <p class="text-xl font-semibold mr-10"><a href="">Styleguide</a></p>
                <p class="text-xl font-semibold mr-10"><a href="">Changelog</a></p>
                <p class="text-xl font-semibold mr-10"><a href="">Licenses </a></p>
                <p class="text-xl font-semibold mr-10"><a href="">Instructions</a></p>
            </div>
            <div class="flex mt-3">
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
        <div class="border-b border-gray-200"></div>
        <div class="flex justify-between py-5">
            <div class="flex">
                <p class="text-xl font-normal mr-10">© 2024 Blackfolio. All rights reserved</p>
            </div>


        </div>
    </div>
</template>

<script setup>
import dribble from "@/components/icons/dribble.vue"
import whatsapp from "@/components/icons/whatsapp.vue"
import linkedIn from "@/components/icons/linkedIn.vue"

</script>
