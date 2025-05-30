<template>
  <div class="flex flex-col gap-10">
    <!-- Фото -->
    <div class="relative h-[333px]">
      <img
        src="@/assets/img/poizon-img.png"
        alt="Товар"
        class="rounded-lg w-full object-contain"
      />
      <div
        class="absolute bottom-0 left-0 bg-dark p-[10px] rounded-[10px] flex items-center justify-center text-white text-22 gap-2"
      >
        <div class="icon"><img src="@/assets/icons/photo.svg" /></div>
        <span>6 фото</span>
      </div>
    </div>

    <!-- Описание -->
    <div class="flex flex-col gap-2">
      <h3 class="text-36 text-dark font-bold">
        New Balance 574 Legacy 'Natural Indigo Anagora'
      </h3>
      <p class="text-30">Размер 40.5</p>
      <h3 class="text-36 font-bold">16 756 ₽</h3>
    </div>

    <!-- Доставка -->
    <div class="flex flex-col gap-6">
      <p class="text-26 font-semibold text-dark">Доставка</p>
      <div class="flex gap-3 flex-col sm:flex-row">
        <div
          v-for="(option, index) in deliveryOptions"
          :key="index"
          @click="selectedDelivery = option"
          class="flex flex-col gap-4 p-5 rounded-[10px] cursor-pointer"
          :class="[
            selectedDelivery.label === option.label
              ? 'bg-dark text-white border-dark'
              : 'bg-white text-dark border border-dark',
          ]"
        >
          <div class="flex items-center justify-between gap-4">
            <p class="text-22 font-semibold mb-1">
              {{ option.label }}
            </p>

            <span
              class="text-18 flex items-center justify-center py-1 px-[10px] rounded-[4px] font-semibold"
              :class="
                selectedDelivery.label === option.label
                  ? 'bg-white text-dark'
                  : 'bg-dark text-white'
              "
            >
              {{ option.price.toLocaleString("ru-RU") }} р.
            </span>
          </div>
          <div class="flex justify-between items-start gap-2">
            <span
              class="text-16"
              :class="
                selectedDelivery.label === option.label
                  ? 'text-white'
                  : 'text-dark opacity-40'
              "
            >
              {{ option.description }}
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- Кнопка -->
    <Buttons class="mt-6 w-full max-w-[390px] mx-auto" @onClick="nextPoizonStep">
      Заказать за {{ selectedDelivery.price }} ₽
    </Buttons>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Buttons from "../Buttons/Buttons.vue";
import { usePoizonStore } from "@/stores/usePoizonStore";
import Icons from "../Icons/Icons.vue";

const { nextPoizonStep } = usePoizonStore();

const deliveryOptions = [
  {
    label: "25–30 дней",
    description: "Доставим до Москвы за 25–30 дней, по России – чуть дольше",
    price: 6800,
  },
  {
    label: "~20–25 дней",
    description: "Экспресс-доставка в Москву ~13–15 дней, по России – чуть дольше",
    price: 9800,
  },
];

const selectedDelivery = ref(deliveryOptions[0]);
</script>
