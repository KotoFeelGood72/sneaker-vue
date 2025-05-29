<template>
  <div class="flex items-center gap-1 cursor-pointer" @click="openModal('qarantee')">
    <img src="/assets/img/original.png" />
    <p class="flex-grow text-26 font-semibold text-dark">Оригинальный товар</p>
    <div class="flex items-center justify-center -mb-1">
      <Icons icon="mdi-light:chevron-right" :size="30" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useModalStore } from "@/stores/useModalStore";

const { openModal } = useModalStore();
</script>
