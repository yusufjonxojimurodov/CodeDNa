<script setup>
</script>

<template>
  <section>
    <div id="about" class="container mx-auto px-4">
      <div class="flex justify-center items-center flex-col gap-10 mt-28 md:mt-[200px]">
        <span
            data-aos="fade-right"
            class="about-text text-3xl pb-[0px] sm:text-4xl sm:pb-[15px] md:text-[58px] font-bold text-white text-center">
          {{ $t('about.about') }}
        </span>

        <p data-aos="fade-left"
           class="text-white text-base sm:text-[16px]
             md:text-[18px] text-center max-w-full sm:max-w-2xl">
             {{ $t('about.aboutMe') }}
          <a href="#skills" class="text-green-400 underline hover:text-green-500 transition">{{ $t('about.more') }}</a>
        </p>
      </div>
    </div>
  </section>
</template>
