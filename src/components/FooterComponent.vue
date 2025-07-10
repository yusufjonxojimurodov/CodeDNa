<script setup>
import GithubIconComponent from "@/components/Icons/GithubIconComponent.vue";
import TelegramIconComponent from "@/components/Icons/TelegramIconComponent.vue";
import InstagramIconComponent from "@/components/Icons/InstagramIconComponent.vue";
</script>

<template>
  <footer class="mt-[150px]">
    <div class="container">
      <nav class="flex justify-between items-center ">
        <span class="animated-gradient text-[40px] font-bold">CodeDna</span>

        <div class="flex justify-center items-center gap-[10px]">
          <a target="_blank" href="https://github.com/Xojimurodov-Yusuf">
            <github-icon-component class="w-[30px] h-[30px]"/>
          </a>
          <a target="_blank" href="https://t.me/y_bahodirovich">
            <telegram-icon-component class="w-[30px] h-[30px]"/>
          </a>
          <a target="_blank" href="https://www.instagram.com/just_user.01/">
            <instagram-icon-component class="w-[30px] h-[30px]"/>
          </a>
        </div>
      </nav>
    </div>
  </footer>
</template>