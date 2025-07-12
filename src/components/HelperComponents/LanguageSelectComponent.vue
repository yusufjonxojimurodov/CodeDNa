<script setup>
import { useI18n } from 'vue-i18n'
import { computed, h } from "vue";
import UzbekistanIconComponent from '../Icons/UzbekistanIconComponent.vue';
import RussianIconComponent from './RussianIconComponent.vue';
import USAIconComponent from './USAIconComponent.vue';
const { locale } = useI18n()

const props = defineProps({
    insideBurger: {
        type: Boolean,
        default: false,
    },
})

const popupContainer = computed(() => {
    return props.insideBurger ? (trigger => trigger.parentNode) : undefined
})

const options = [
  {
    value: 'uz',
    label: h('div', { class: 'flex items-center gap-2' }, [
      h(UzbekistanIconComponent, { style: 'width: 20px; height: 20px' }),
      h('span', {}, 'UZ')
    ])
  },
  {
    value: 'ru',
    label: h('div', { class: 'flex items-center gap-2' }, [
      h(RussianIconComponent, { style: 'width: 20px; height: 20px' }),
      h('span', {}, 'RU')
    ])
  },
  {
    value: 'en',
    label: h('div', { class: 'flex items-center gap-2' }, [
      h(USAIconComponent, { style: 'width: 20px; height: 20px' }),
      h('span', {}, 'EN')
    ])
  }
]

function changeLanguage(lang) {
    locale.value = lang
    localStorage.setItem('lang', lang)
}
</script>

<template>
   <a-select
    v-model:value="locale"
    :options="options"
    @change="changeLanguage"
    :getPopupContainer="popupContainer"
    class="w-[100px]"
  />
</template>

<style scoped>
::v-deep(.ant-select-selector) {
  height: 40px !important;
  display: flex;
  align-items: center;
  background: none !important;
  border: none !important;
  color: white !important;
  font-weight: 700;
  outline: none !important;
}
</style>