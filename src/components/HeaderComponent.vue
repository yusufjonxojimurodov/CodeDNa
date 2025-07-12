<script setup>
import { useI18n } from "vue-i18n";
import { ref, defineAsyncComponent } from "vue";
import LanguageSelectComponent from "./HelperComponents/LanguageSelectComponent.vue";

const { t } = useI18n()
const ContactButtonComponent = defineAsyncComponent(() =>
  import('@/components/HelperComponents/ContactButtonComponent.vue')
)
const BurgerIconComponent = defineAsyncComponent(() =>
  import('@/components/Icons/BurgerIconComponent.vue')
)
const BurgerComponent = defineAsyncComponent(() =>
  import('@/components/BurgerComponent.vue')
)
const isBurgerOpen = ref(false)
</script>

<template>
  <header class="p-[30px]" id="header">
    <div class="container">
      <nav class="flex justify-between items-center">
        <span class="animated-gradient text-[40px] font-bold">
          CodeDna</span>

        <div class="ul flex justify-center items-center gap-[40px]">
          <li><a class="header-a" href="#header">{{ t('navigation.home') }}</a></li>
          <li><a class="header-a" href="#portfolio">{{ t('navigation.portfolio') }}</a></li>
          <li><a class="header-a" href="#about">{{ t('navigation.about') }}</a></li>
          <li><a class="header-a" href="#skills">{{ t('navigation.skill') }}</a></li>
          <li><a class="header-a" href="#contact">{{ t('navigation.contact') }}</a></li>
        </div>

        <burger-component :is-open="isBurgerOpen" @close="isBurgerOpen = false" />
        <burger-icon-component @click="isBurgerOpen = true" />
        <language-select-component class="lang-select" />
      </nav>
    </div>
  </header>
</template>

<style scoped>
.lang-select {
  position: relative;
  right: 0;
}

@media (max-width: 768px) {
  .container {
    width: 98%;
  }

  .ul {
    display: none;
  }

  .contactbtn {
    display: none;
  }

  .lang-select {
    display: none;
  }
}
</style>