<template>
  <div
    class="createlink-modal fixed top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] z-[11] bg-white rounded-[20px] lg:p-[50px] p-6 flex flex-col gap-10 lg:max-w-[905px] max-w-[303px] w-full"
  >
    <div
      class="close_modal absolute lg:w-[100px] lg:h-[100px] flex items-center justify-center cursor-pointer lg:left-[100%] top-0 h-4 w-4 left-[102%]"
      @click="closeModal('createLink')"
    >
      <img src="@/assets/icons/close.svg" />
    </div>

    <div class="lg:space-y-6 space-y-4">
      <h3 class="lg:text-26 text-22 text-dark font-semibold">Создать новую ссылку</h3>
      <div class="lg:space-y-6 space-y-4">
        <div class="relative">
          <Inputs icon="link" v-model="nameLink" placeholder="Введите название ссылки" />
          <div
            class="flex items-center justify-center absolute top-1/2 -translate-y-1/2 cursor-pointer lg:right-5 right-3 max-lg:w-4 max-lg:h-4"
          >
            <img src="/assets/icon/ui/wand.svg" />
          </div>
        </div>
        <div class="relative">
          <Inputs icon="link" v-model="urlLink" placeholder="Введите ссылку" />
          <div
            class="flex items-center justify-center absolute top-1/2 -translate-y-1/2 cursor-pointer lg:right-5 right-3 max-lg:w-4 max-lg:h-4"
          >
            <img src="/assets/icon/ui/wand.svg" />
          </div>
        </div>
        <div class="max-w-[390px] mx-auto">
          <Buttons size="large" class="w-full">Создать</Buttons>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useModalStore } from "@/stores/useModalStore";
import Inputs from "../Inputs/Inputs.vue";
import Buttons from "../Buttons/Buttons.vue";
import { ref } from "vue";

const { closeModal } = useModalStore();

const nameLink = ref<any>();
const urlLink = ref<any>();
</script>

<style scoped lang="scss"></style>
