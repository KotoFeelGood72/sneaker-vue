<template>
  <div class="container flex items-center lg:gap-[60px]">
    <div class="max-w-[518px] flex-col flex lg:gap-10">
      <h1 class="lg:text-40 text-dark font-semibold">Приложение</h1>
      <p>
        Официальное приложение магазина на русском языке. Не нужно скачивать – работает
        прямо внутри Telegram
      </p>
      <a
        class="inline-flex items-center justify-center gap-6 py-5 px-10 bg-dark rounded-md max-w-[216px] cursor-pointer"
      >
        <p class="text-18 font-semibold text-white">Перейти</p>
        <div class="flex items-center justify-center text-white">
          <Icons icon="icon-park-outline:telegram" color="white" />
        </div>
      </a>
    </div>
    <div>
      <img src="/assets/img/application.png" />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss"></style>
