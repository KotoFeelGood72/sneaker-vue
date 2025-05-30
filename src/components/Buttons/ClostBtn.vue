<template>
  <div
    class="close_modal absolute lg:w-[100px] lg:h-[100px] flex items-center justify-center cursor-pointer left-[100%] top-0 z-10"
    @click="closeAllModals()"
  >
    <img src="@/assets/icons/close.svg" />
  </div>
</template>

<script setup lang="ts">
import { useModalStore } from "@/stores/useModalStore";

const { closeAllModals } = useModalStore();
</script>

<style scoped lang="scss"></style>
