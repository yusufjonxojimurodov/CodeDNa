<script setup>
import ContactButtonComponent from "@/components/HelperComponents/ContactButtonComponent.vue";
</script>

<template>
  <section class="home-section mt-[100px] sm:mt-[120px] md:mt-[150px] px-4 sm:px-6 md:px-0">
    <div class="container">
      <div data-aos="fade-right" class="flex justify-between items-center">
        <div class="flex justify-center items-start flex-col gap-[14px] sm:gap-[18px] max-w-full">
          <h1 class="text-[32px] sm:text-[48px] md:text-[68px] text-white font-bold w-full sm:w-[400px] md:w-[500px] leading-tight">
            Xojimurodov Yusuf
          </h1>
          <p class="text-white text-[15px] sm:text-[16px] md:text-[18px] max-w-full sm:max-w-[500px]">
            Zamonaviy web texnologiyalar va innovatsion yechimlar bilan
            sizning g'oyalaringizni hayotga tatbiq etuvchi CodeDNA
          </p>
          <contact-button-component>
            <a href="#about">Men Haqimda</a>
          </contact-button-component>
        </div>
      </div>
    </div>
  </section>
</template>

