<template>
  <div
    class="flex items-center justify-between bg-lightXs p-[10px] rounded-md w-auto gap-3 cursor-pointer"
    @click="openModal('poizon')"
  >
    <div class="flex items-center justify-start gap-5 flex-grow">
      <div class="lg:w-[66px] h:w-[66px]">
        <img src="/assets/img/poizon.png" alt="" />
      </div>
      <p class="text-20 font-semibold text-dark">Рассчитать стоимость товара из Poizon</p>
    </div>
    <div class="flex items-center justify-center">
      <Icons icon="meteor-icons:chevron-right" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useModalStore } from "@/stores/useModalStore";

const { openModal } = useModalStore();
</script>

<style scoped lang="scss"></style>
