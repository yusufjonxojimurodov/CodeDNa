<script setup>
import CloseIconComponent from "@/components/Icons/CloseIconComponent.vue";
import {defineProps, defineEmits} from "vue";

defineProps({
  isOpen: Boolean,
})
const emit = defineEmits(["close"])
</script>

<template>
  <transition name="burger-slide">
    <div v-if="isOpen" class="burger-overlay" @click.self="emit('close')">
      <div class="burgerDiv">
        <span class="animated-gradient absolute top-3 left-2 text-[28px] font-bold">Code Dna</span>

        <ul class="flex justify-center items-start flex-col gap-[20px]">
          <li><a class="header-a" href="#header" @click="emit('close')">Uy</a></li>
          <li><a class="header-a" href="#portfolio" @click="emit('close')">Portfolio</a></li>
          <li><a class="header-a" href="#about" @click="emit('close')">Men Haqimda</a></li>
          <li><a class="header-a" href="#skills" @click="emit('close')">Tajriba</a></li>
        </ul>

        <close-icon-component @click="emit('close')" class="w-[40px] h-[40px] absolute top-3 right-2"/>
      </div>
    </div>
  </transition>
</template>


<style>
.burger-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3); /* fonni sekin qoraytiradi */
  z-index: 9998;
}

.burgerDiv {
  max-width: 100%;
  width: 70%;
  height: 100%;
  background: radial-gradient(circle at 20% 80%, rgba(0, 212, 255, 0.1) 0%, transparent 50%),
  radial-gradient(circle at 80% 20%, rgba(255, 0, 128, 0.1) 0%, transparent 50%),
  linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 9999;
  transition: all 0.4s ease;
}


.burger-slide-enter-from {
  transform: translateX(-100%);
  opacity: 0;
}

.burger-slide-enter-active {
  transition: all 0.4s ease;
}

.burger-slide-enter-to {
  transform: translateX(0%);
  opacity: 1;
}

.burger-slide-leave-from {
  transform: translateX(0%);
  opacity: 1;
}

.burger-slide-leave-active {
  transition: all 0.3s ease;
}

.burger-slide-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}
</style>