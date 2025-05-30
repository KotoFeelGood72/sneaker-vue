<template>
  <div class="flex flex-col gap-10">
    <div class="">
      <Inputs
        placeholder="Введите ссылку на товар в Poizon"
        v-model="poizonLink"
        icon="si:search-line"
        :icon-size="24"
        class="text-[#00000066]"
      />
    </div>
    <div class="flex items-center justify-center">
      <img src="@/assets/img/pozion.png" class="w-full" />
    </div>
    <Buttons class="max-w-[390px] mx-auto w-full" size="large" @click="nextPoizonStep"
      >Далее</Buttons
    >
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Buttons from "../Buttons/Buttons.vue";
import Inputs from "../Inputs/Inputs.vue";
import { usePoizonStore } from "@/stores/usePoizonStore";

const { nextPoizonStep } = usePoizonStore();
const poizonLink = ref<any>();
</script>

<style scoped lang="scss"></style>
