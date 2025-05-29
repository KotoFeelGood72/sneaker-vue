<template>
  <div class="flex items-center justify-center flex-col gap-5">
    <img src="@/assets/icons/ic-notfound.svg" />
    <div class="text-center text-dark flex items-center flex-col gap-2">
      <h3 class="text-26 font-semibold">В корзине нет товаров</h3>
      <p class="text-14">Добавьте товар, нажав кнопку «В корзину» в карточке товара</p>
    </div>
    <Buttons>На главную</Buttons>
  </div>
</template>

<script setup lang="ts">
import Buttons from "../Buttons/Buttons.vue";
</script>

<style scoped lang="scss"></style>
