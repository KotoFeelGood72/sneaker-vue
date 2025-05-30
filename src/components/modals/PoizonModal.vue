<template>
  <div
    class="pozion-modal fixed top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] z-[11]"
  >
    <ClostBtn />
    <div
      class="max-w-[666px] overflow-y-auto flex flex-col gap-10 bg-white rounded-[20px] p-[50px]"
      style="max-height: calc(100dvh - 40px)"
    >
      <PoizonHead :description="isDescriptionStep" v-if="poizonStep != 4" />

      <component :is="stepComponent" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useModalStore } from "@/stores/useModalStore";
import PoizonHead from "../Poizon/PoizonHead.vue";
import PoizonStepOne from "../Poizon/PoizonStepOne.vue";
import PoizonStepTwo from "../Poizon/PoizonStepTwo.vue";
import PoizonStepFree from "../Poizon/PoizonStepFree.vue";
import PoizonStepFour from "../Poizon/PoizonStepFour.vue";
import { usePoizonStoreRefs } from "@/stores/usePoizonStore";
import { computed } from "vue";
import ClostBtn from "../Buttons/ClostBtn.vue";

const { closeModal } = useModalStore();
const { poizonStep } = usePoizonStoreRefs();

const stepComponent = computed(() => {
  switch (poizonStep.value) {
    case 1:
      return PoizonStepOne;
    case 2:
      return PoizonStepTwo;
    case 3:
      return PoizonStepFree;
    case 4:
      return PoizonStepFour;
    default:
      return null;
  }
});

const isDescriptionStep = computed(() => {
  switch (poizonStep.value) {
    case 1:
      return "Нажмите на товаре Poizon кнопку “поделиться”. Скопируйте ссылку и вставьте сюда:";
    case 2:
      return "Выберите размер. Чтобы подобрать правильный, загляните в размерную сетку. Как подобрать размер?";
    case 3:
      return "Выберите размер и укажите цену в юанях с бирюзовой кнопкой.";
    default:
      return "Нажмите на товаре Poizon кнопку “поделиться”. Скопируйте ссылку и вставьте сюда:";
  }
});
</script>

<style scoped lang="scss"></style>
