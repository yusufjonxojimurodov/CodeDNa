<script setup>
import ContactButtonComponent from "@/components/HelperComponents/ContactButtonComponent.vue";
import BurgerIconComponent from "@/components/Icons/BurgerIconComponent.vue";
import BurgerComponent from "@/components/BurgerComponent.vue";
import {ref} from "vue";

const isBurgerOpen = ref(false)
</script>

<template>
  <header class="p-[30px]" id="header">
    <div class="container">
      <nav class="flex justify-between items-center">
        <span class="animated-gradient text-[40px] font-bold">
          CodeDna</span>

        <ul class="flex justify-center items-center gap-[40px]">
          <li><a class="header-a" href="#header">Uy</a></li>
          <li><a class="header-a" href="#portfolio">Portfolio</a></li>
          <li><a class="header-a" href="#about">Men Haqimda</a></li>
          <li><a class="header-a" href="#skills">Tajriba</a></li>
        </ul>

        <burger-component :is-open="isBurgerOpen" @close="isBurgerOpen = false"/>
        <burger-icon-component @click="isBurgerOpen = true"/>
        <contact-button-component class="contactbtn"><a
            href="#contact">Bog'lanish</a></contact-button-component>
      </nav>
    </div>
  </header>
</template>

<style scoped>
@media (max-width: 768px) {
  .container {
    width: 98%;
  }

  ul {
    display: none;
  }

  .contactbtn {
    display: none;
  }
}
</style>