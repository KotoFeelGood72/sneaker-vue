<template>
  <div class="min-w-[666px] border border-[#0000001A] rounded-[20px] p-5">
    <div class="text-26 font-semibold mb-6">Сумма заказа</div>
    <div class="flex flex-col gap-[18px]">
      <div class="flex items-center justify-between gap-3 text-20">
        <div>3 товара на сумму</div>
        <div>44 467 р.</div>
      </div>
      <div class="flex items-center justify-between text-20">
        <div>Sneaker Coins</div>
        <div class="flex items-center gap-[10px]">
          <img src="@/assets/icons/sneacker.svg" />
          <span>+890</span>
        </div>
      </div>
      <div class="divider border-b border-[#0000001A] w-full"></div>
      <div class="flex items-center justify-between text-26 mb-6">
        <div>Итого</div>
        <div class="font-semibold">44 467 р.</div>
      </div>
    </div>
    <Buttons class="w-full" size="large">Оформить заказ</Buttons>
  </div>
</template>

<script setup lang="ts">
import Buttons from "../Buttons/Buttons.vue";
</script>

<style scoped lang="scss"></style>
