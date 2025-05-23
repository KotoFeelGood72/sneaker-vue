<template>
  <div class="max-w-[1200px] mx-auto">
    <div class="grid grid-cols-8 gap-3">
      <button
        v-for="(size, index) in sizes"
        :key="index"
        @click="selectSize(size)"
        :class="[
          'border rounded-md py-5 px-4 lg:text-26',
          selectedSize?.eu === size.eu ? 'bg-dark text-white' : 'border-dark ',
        ]"
      >
        {{ size.eu }} EU
      </button>
    </div>
    <div v-if="selectedSize" class="lg:mt-[60px]">
      <h2 class="lg:text-26 font-semibold text-dark lg:mb-[60px] text-center">
        Таблица соответствия выбранного размера
      </h2>
      <div class="grid grid-cols-2 lg:gap-x-[100px] max-w-[847px] mx-auto gap-6">
        <RowItem countriesName="Европа (EU)" :selected-size="selectedSize.eu" />
        <RowItem countriesName="США (US)" :selected-size="selectedSize.us" />
        <RowItem countriesName="Длина (мм) (EU)" :selected-size="selectedSize.mm" />
        <RowItem countriesName="Великобритания (UK)" :selected-size="selectedSize.uk" />
        <RowItem countriesName="Россия (RU)" :selected-size="selectedSize.ru" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import RowItem from "./RowItem.vue";

interface Size {
  eu: string;
  us: string;
  uk: string;
  ru: string;
  mm: number;
}

const sizes: Size[] = [
  { eu: "35 ⅓", us: "M3/W4", uk: "2.5", ru: "34", mm: 215 },
  { eu: "35 ⅔", us: "M3/W4", uk: "2.5", ru: "34", mm: 215 },
  { eu: "36", us: "M4/W5", uk: "3.5", ru: "35", mm: 220 },
  { eu: "36 ⅔", us: "M4.5/W5.5", uk: "4", ru: "35.5", mm: 225 },
  { eu: "37 ⅓", us: "M5/W6", uk: "4.5", ru: "36", mm: 230 },
  { eu: "38", us: "M5.5/W6.5", uk: "5", ru: "36.5", mm: 235 },
  { eu: "38 ⅔", us: "M6/W7", uk: "5.5", ru: "37", mm: 240 },
  { eu: "39 ⅓", us: "M6.5/W7.5", uk: "6", ru: "37.5", mm: 245 },
  { eu: "40", us: "M7/W8", uk: "6.5", ru: "38", mm: 250 },
  { eu: "40 ⅔", us: "M7.5/W8.5", uk: "7", ru: "38.5", mm: 255 },
  { eu: "41 ⅓", us: "M8/W9", uk: "7.5", ru: "39", mm: 260 },
  { eu: "42", us: "M8.5/W9.5", uk: "8", ru: "40", mm: 265 },
  { eu: "43 ⅔", us: "M9.5/W10.5", uk: "9", ru: "41", mm: 275 },
  { eu: "43 ⅓", us: "M9.5/W10.5", uk: "9", ru: "41", mm: 275 },
  { eu: "44 ", us: "M10.5/W11.5", uk: "10", ru: "42", mm: 285 },
  { eu: "44 ⅔", us: "M10.5/W11.5", uk: "10", ru: "42", mm: 285 },
  { eu: "45 ⅔", us: "M10.5/W11.5", uk: "10", ru: "42", mm: 285 },
  { eu: "46", us: "M11.5/W12.5", uk: "11", ru: "43", mm: 290 },
  { eu: "46 ⅔", us: "M11.5/W12.5", uk: "11", ru: "43", mm: 290 },
  { eu: "47 ⅓", us: "M12.5/W13.5", uk: "12", ru: "44", mm: 300 },
  { eu: "48 ", us: "M13.5/W14.5", uk: "13", ru: "45", mm: 310 },
  { eu: "48 ⅔", us: "M13.5/W14.5", uk: "13", ru: "45", mm: 310 },
  { eu: "49 ⅓", us: "M13.5/W14.5", uk: "13", ru: "45", mm: 310 },
  { eu: "50", us: "M14.5/W15.5", uk: "14", ru: "46", mm: 320 },
];

const selectedSize = ref<Size | null>(sizes[1]);

const selectSize = (size: Size) => {
  selectedSize.value = size;
};
</script>
