<template>
  <div
    class="answer max-w-[1000px] mx-auto bg bg-cover lg:py-5 lg:px-10 py-5 px-5 lg:rounded-[20px] rounded-[10px] flex gap-4 items-center justify-between flex-wrap max-lg:text-center"
    style="background-image: url('/assets/img/answer-bg.jpg')"
  >
    <div class="space-y-[6px] max-w-[691px]">
      <h5 class="lg:text-26 font-semibold text-18">Остались вопросы?</h5>
      <p class="max-w-[500px] max-lg:text-14">
        Напишите нам! Мы на связи каждый день с 9:00 до 21:00. Обычно отвечаем в течении 5
        минут.
      </p>
    </div>
    <div class="max-lg:mx-auto">
      <Buttons color="bg-orange">Задать вопрос</Buttons>
    </div>
  </div>
</template>

<script setup lang="ts">
import Buttons from "../Buttons/Buttons.vue";
</script>

<style scoped lang="scss"></style>
