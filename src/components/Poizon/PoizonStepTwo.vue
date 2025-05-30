<template>
  <div class="flex flex-col gap-5">
    <div class="flex items-start gap-4">
      <p class="opacity-40 min-w-20">Размер:</p>
      <input
        type="text"
        placeholder="40.5"
        class="px-3 py-5 outline-none border border-[#00000066] rounded inline-flex items-center justify-center max-w-16 text-20 font-medium"
      />
    </div>
    <div class="flex items-center justify-center">
      <img src="@/assets/img/poizon-2.png" />
    </div>
    <div class="px-16 flex items-center gap-2">
      <Buttons
        class=""
        color="bg-light"
        textColor="!text-dark"
        size="large"
        @click="prevPoizonStep"
        >Назад</Buttons
      >
      <Buttons class="flex-grow" size="large" @click="nextPoizonStep()">Далее</Buttons>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Buttons from "../Buttons/Buttons.vue";
import { usePoizonStore } from "@/stores/usePoizonStore";

const poizonSize = ref<any>();
const { nextPoizonStep, prevPoizonStep } = usePoizonStore();
</script>

<style scoped lang="scss"></style>
