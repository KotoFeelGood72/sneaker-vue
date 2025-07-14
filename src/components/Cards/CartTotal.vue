<template>
  <div class="lg:min-w-[666px] border border-[#0000001A] rounded-[20px] lg:p-5 p-4">
    <div class="lg:text-26 font-semibold mb-6 lg:text-left text-center text-18">
      Сумма заказа
    </div>
    <div class="flex flex-col lg:gap-[18px] gap-4">
      <div class="flex items-center justify-between gap-3 lg:text-20 text-14">
        <div>3 товара на сумму</div>
        <div>44 467 р.</div>
      </div>
      <div class="flex items-center justify-between lg:text-20 text-14">
        <div>Sneaker Coins</div>
        <div class="flex items-center gap-[10px]">
          <img
            src="@/assets/icons/sneacker.svg"
            class="lg:w-6 lg:h-6 w-4 h-4 flex items-center justify-center"
          />
          <span>+890</span>
        </div>
      </div>
      <div class="divider border-b border-[#0000001A] w-full"></div>
      <div class="flex items-center justify-between lg:text-26 mb-6 text-18">
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
