<template>
  <div
    class="qarantee-modal fixed top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] z-[11] bg-white rounded-[20px] p-[50px] flex flex-col gap-10"
  >
    <div
      class="close_modal absolute lg:w-[100px] lg:h-[100px] flex items-center justify-center cursor-pointer left-[100%] top-0"
      @click="closeModal('qarantee')"
    >
      <img src="@/assets/icons/close.svg" />
    </div>
    <PoizonHead />
    <component :is="stepComponent" />
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
</script>

<style scoped lang="scss"></style>
