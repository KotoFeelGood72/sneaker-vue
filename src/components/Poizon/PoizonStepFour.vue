<template>
  <div class="bg-white rounded-xl shadow-md p-4 w-full max-w-md mx-auto">
    <!-- Фото -->
    <div class="relative">
      <img
        src="https://via.placeholder.com/400x300"
        alt="Товар"
        class="rounded-lg w-full object-contain"
      />
      <div
        class="absolute top-2 left-2 bg-black bg-opacity-60 text-white text-12 px-2 py-1 rounded flex items-center gap-1"
      >
        <Icons icon="mdi:camera" class="w-4 h-4" />
        <span>6 фото</span>
      </div>
    </div>

    <!-- Описание -->
    <div class="mt-4">
      <h3 class="text-lg font-semibold leading-snug">
        New Balance 574 Legacy 'Natural Indigo Anagora'
      </h3>
      <p class="text-sm text-gray-500 mt-1">Размер 40.5</p>
      <h3 class="text-2xl font-bold mt-2">16 756 ₽</h3>
    </div>

    <!-- Доставка -->
    <div class="mt-6">
      <p class="text-base font-medium mb-2">Доставка</p>
      <div class="flex gap-3 flex-col sm:flex-row">
        <div
          v-for="(option, index) in deliveryOptions"
          :key="index"
          @click="selectedDelivery = option"
          class="flex-1 border rounded-lg p-4 cursor-pointer transition-all"
          :class="[
            selectedDelivery.label === option.label
              ? 'bg-black text-white border-black'
              : 'bg-white text-black border border-gray-300 hover:border-gray-400',
          ]"
        >
          <p class="text-sm font-semibold mb-1">
            {{ option.label }}
          </p>
          <div class="flex justify-between items-start gap-2">
            <span
              class="text-sm"
              :class="
                selectedDelivery.label === option.label ? 'text-white' : 'text-gray-500'
              "
            >
              {{ option.description }}
            </span>
            <span
              class="text-sm font-bold whitespace-nowrap px-2 py-1 rounded bg-white text-black"
              :class="
                selectedDelivery.label === option.label
                  ? 'bg-white text-black'
                  : 'bg-black text-white'
              "
            >
              {{ option.price.toLocaleString("ru-RU") }} р.
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- Кнопка -->
    <Buttons class="mt-6 w-full" @onClick="nextPoizonStep">
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
