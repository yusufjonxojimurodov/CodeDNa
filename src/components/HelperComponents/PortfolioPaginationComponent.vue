<script setup>
import {ref, computed } from "vue";
import { useI18n } from 'vue-i18n'
import ContactButtonComponent from "./ContactButtonComponent.vue";
import { LoadingOutlined } from '@ant-design/icons-vue';
import { h } from 'vue';

const { t } = useI18n()

const indicator = h(LoadingOutlined, {
  style: {
    fontSize: '60px',
  },
  spin: true,
});

const portfolioInformation = computed( () => [
  {
    id: 1,
    ProjectImg: {
      img: "/PortfolioImages/STARBOI.webp",
    },
    ProjectName: t('portfolio.starboi.name'),
    Description: t('portfolio.starboi.description'),
    linkProject: "https://starboi-editor.netlify.app/"
  },

  {
    id: 2,
    ProjectImg: {
      img: "/PortfolioImages/maximus.webp",
    },
    ProjectName: t('portfolio.maximus.name'),
    Description: t('portfolio.maximus.description'),
    linkProject: "https://xojimurodov-yusuf.github.io/horse-company/"
  },

  {
    id: 3,
    ProjectImg: {
      img: "/PortfolioImages/weather.webp",
    },
    ProjectName: t('portfolio.weather.name'),
    Description: t('portfolio.weather.description'),
    linkProject: "https://yusufjonxojimurodov.github.io/weatherApp/"
  },

  {
    id: 4,
    ProjectImg: {
      img: "/PortfolioImages/postroy.webp",
    },
    ProjectName: t('portfolio.postroy.name'),
    Description: t('portfolio.postroy.description'),
    linkProject: "https://xojimurodov-yusuf.github.io/pastroyy/"
  },
])


const loaded = ref(false)
const currentPage = ref(1)
const pageSize = 1

const currentProject = computed(() => {
  const start = (currentPage.value - 1) * pageSize
  const end = start + pageSize
  return portfolioInformation.value.slice(start, end)
})

const handleChange = (page) => {
  currentPage.value = page
}

function openProject(link) {
  window.open(link, "_blank")
}
</script>

<template>
  <div data-aos="fade-left" v-for="project in currentProject" :key="project.id" class="gradient-border-box
         flex flex-col md:flex-row
         justify-center items-center
         gap-6 md:gap-12
         rounded-xl
         p-5
         w-full
         h-800px
         m-auto
         shadow-lg transition-all duration-300
         mb-10 md:h-[400px] sm:h-auto">

    <div class="relative">
      <img loading="lazy" @load="loaded = true" :class="{ 'opacity-0': !loaded }"
        class="rounded-xl w-[360px] h-[220px] p-[5px] md:w-[380px] md:h-[250px]" :src="project.ProjectImg.img"
        alt="project image" />
      <a-spin v-if="!loaded" class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        :indicator="indicator"></a-spin>
    </div>
    <div class="flex flex-col justify-center items-center text-center gap-[10px] sm:gap-[20px]">
      <p class="about-text text-2xl sm:text-3xl md:text-[40px] font-semibold text-white mb-2 pb-[6px]">
        {{ project.ProjectName }}
      </p>
      <p class="text-white text-sm sm:text-base md:text-[16px] max-w-full sm:max-w-md">
        {{ project.Description }}
      </p>
    </div>

    <contact-button-component @click="() => openProject(project.linkProject)"
      class="relative bottom-4 md:top-[40%] md:right-[30.5%]">{{ t('portfolio.seeProject') }}</contact-button-component>
  </div>

  <div class="flex justify-center">
    <a-pagination :current="currentPage" :page-size="pageSize" :total="portfolioInformation.length"
      @change="handleChange" class="pb-[20px]" />
  </div>
</template>


<style scoped>
::v-deep(.ant-pagination) {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 30px;
  font-family: 'Segoe UI', sans-serif;
}

::v-deep(.ant-pagination-item) {
  border-radius: 10px;
  background: rgba(0, 255, 255, 0.07);
  border: 1px solid rgba(0, 255, 255, 0.2);
  backdrop-filter: blur(6px);
  width: 40px;
  height: 40px;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

::v-deep(.ant-pagination-item > a) {
  color: #aefeff !important;
  font-weight: 500;
  font-size: 15px;
  transition: color 0.3s ease;
}

::v-deep(.ant-pagination-item:hover) {
  background: rgba(0, 212, 255, 0.2);
  border-color: #00d4ff;
  box-shadow: 0 0 10px rgba(0, 212, 255, 0.4);
  transform: scale(1.05);
}

::v-deep(.ant-pagination-item:hover > a) {
  color: #ffffff !important;
}

::v-deep(.ant-pagination-item-active) {
  background: #00d4ff;
  border-color: #00d4ff;
  box-shadow: 0 0 15px #00d4ff;
  transform: scale(1.1);
}

::v-deep(.ant-pagination-item-active > a) {
  color: #000000 !important;
  font-weight: 600;
}

::v-deep(.ant-pagination-prev),
::v-deep(.ant-pagination-next) {
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(6px);
  width: 40px;
  height: 40px;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

::v-deep(.ant-pagination-prev svg),
::v-deep(.ant-pagination-next svg),
::v-deep(.ant-pagination-prev .anticon),
::v-deep(.ant-pagination-next .anticon) {
  color: #ffffff !important;
  fill: #ffffff !important;
  stroke: #ffffff !important;
  opacity: 1 !important;
  font-size: 18px;
  transition: color 0.3s ease;
}

::v-deep(.ant-pagination-prev:hover svg),
::v-deep(.ant-pagination-next:hover svg),
::v-deep(.ant-pagination-prev:hover .anticon),
::v-deep(.ant-pagination-next:hover .anticon) {
  color: #00d4ff !important;
  fill: #00d4ff !important;
  stroke: #00d4ff !important;
}

::v-deep(.ant-pagination-prev:hover),
::v-deep(.ant-pagination-next:hover) {
  background: rgba(0, 255, 255, 0.2);
  border-color: #00d4ff;
  box-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
  transform: scale(1.05);
}
</style>