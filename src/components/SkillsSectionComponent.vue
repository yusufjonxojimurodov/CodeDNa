<script setup>
import { reactive, markRaw } from "vue";
import IconWebComponent from "@/components/Icons/IconWebComponent.vue";
import IconMobileComponent from "@/components/Icons/IconMobileComponent.vue";
import IconLibraryComponent from "@/components/Icons/IconLibraryComponent.vue";

const skillsInformation = reactive([
  {
    id: 1,
    skillIcon: markRaw(IconWebComponent),
    skillName: "Web Developer",
    description:
      "HTML, CSS, JAVASCRIPT, VUE JS va boshqa zamonaviy web texnologiyalaridan foydalanib web saytlar yaratish tajribasiga egaman",
    iconFramework: {
      imgFramework: [
        "/TechnologyIcons/Vue.png",
        "/TechnologyIcons/javascript.png",
        "/TechnologyIcons/html.svg",
      ],
      width: "40px",
      height: "40px",
    },
  },
  {
    id: 2,
    skillIcon: markRaw(IconMobileComponent),
    skillName: "Mobile Developer",
    description:
      "VUE JS, SASS, Capacitor yordamida smartfonlar uchun ilovalar yaratish tajribasiga egaman",
    iconFramework: {
      imgFramework: [
        "/TechnologyIcons/Vue.png",
        "/TechnologyIcons/sass.webp",
        "/TechnologyIcons/quasar.png",
      ],
      width: "40px",
      height: "40px",
    },
  },
  {
    id: 3,
    skillIcon: markRaw(IconLibraryComponent),
    skillName: "Library",
    description:
      "VUE JSdagi asosiy kutubxonalardan biri 'PINIA' global ma'lumotlarni barcha componentlar yordamida boshqara olaman",
    iconFramework: {
      imgFramework: [
        "/TechnologyIcons/Vue.png",
        "/TechnologyIcons/pinia.svg",
        "/TechnologyIcons/axios.png",
      ],
      width: "40px",
      height: "40px",
    },
  },
]);
</script>

<template>
  <section id="skills" class="mt-[250px] px-4">
    <div class="container mx-auto">
      <div class="text-center mb-12">
        <p data-aos="fade-right"
          class="about-text pb-[22px] text-3xl sm: w-full md:text-[58px] lg:w-[50%] font-bold leading-tight">
          Mening Tajribalarim
        </p>
      </div>

      <div class="flex flex-wrap justify-center gap-8" data-aos="fade-up" data-aos-delay="100">
        <div v-for="skill in skillsInformation" :key="skill.id"
          class="w-full sm:w-[320px] md:w-[350px] bg-black/30 backdrop-blur-md rounded-xl p-6 text-center hover:scale-[1.05] transition-all duration-500 cursor-pointer">
          <component :is="skill.skillIcon" class="mx-auto mb-4 w-[48px] h-[48px]" />
          <p class="text-white text-xl font-semibold mb-2">
            {{ skill.skillName }}
          </p>
          <p class="text-white text-sm mb-4">
            {{ skill.description }}
          </p>
          <div class="flex justify-center items-center gap-3 flex-wrap">
            <img v-for="(icon, index) in skill.iconFramework.imgFramework" :key="index" :style="{
              width: skill.iconFramework.width,
              height: skill.iconFramework.height,
            }" loading="lazy" :src="icon" alt="iconTechnology" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
