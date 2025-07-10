<script setup>
import PortfolioPaginationComponent from "@/components/HelperComponents/PortfolioPaginationComponent.vue";
</script>

<template>
  <section id="portfolio" class="mt-[250px]">
    <div class="container">
      <div class="portfolio">
        <p data-aos="fade-right" class="about-text w-[300px] m-auto mb-[50px] text-[68px] text-center">Portfolio</p>
        <portfolio-pagination-component/>
      </div>
    </div>
  </section>
</template>