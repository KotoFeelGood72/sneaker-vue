<template>
  <div
    class="container flex items-center lg:gap-[60px] lg:flex-row flex-col lg:text-left text-center"
  >
    <div class="max-w-[518px] flex-col flex lg:gap-10 gap-5">
      <h1 class="lg:text-40 text-dark font-semibold text-22">Приложение</h1>
      <p class="lg:text-16 text-14">
        Официальное приложение магазина на русском языке. Не нужно скачивать – работает
        прямо внутри Telegram
      </p>
      <a
        class="inline-flex items-center justify-center lg:gap-6 gap-4 lg:py-5 lg:px-10 px-8 py-3 bg-dark rounded-md lg:max-w-[216px] max-w-max cursor-pointer max-lg:mx-auto max-lg:mb-10"
      >
        <p class="lg:text-18 font-semibold text-white text-12">Перейти</p>
        <div
          class="flex items-center justify-center text-white lg:w-[34px] lg:h-[34px] w-4 h-4"
        >
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
