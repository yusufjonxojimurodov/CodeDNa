<script setup>
import HeaderComponent from "@/components/HeaderComponent.vue";
import HomeSectionComponent from "@/components/HomeSectionComponent.vue";
import AboutSectionComponent from "@/components/AboutSectionComponent.vue";
import SkillsSectionComponent from "@/components/SkillsSectionComponent.vue";
import PortfolioSectionComponent from "@/components/PortfolioSectionComponent.vue";
import ContactSectionComponent from "@/components/ContactSectionComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
</script>

<template>
  <header-component/>
  <main>
    <home-section-component/>
    <about-section-component/>
    <skills-section-component/>
    <portfolio-section-component/>
    <contact-section-component/>
    <footer-component/>
  </main>
</template>