<template>
  <div class="container">
    <h1 class="mb-6 lg:text-40 font-semibold text-dark max-lg:text-22 max-lg:text-center">
      Контакты
    </h1>
    <div
      class="bg-[#F0F0F0] rounded-[20px] border border-[#0000001A] lg:p-5 p-4 flex flex-col lg:gap-[30px] gap-[10px]"
    >
      <div
        class="lg:p-5 p-3 lg:rounded-[20px] rounded-[10px] flex items-center bg-dark max-w-[744px] w-full max-lg:grid lg:grid-cols-3 grid-cols-1 gap-5"
      >
        <ContactsTgCard
          v-for="(item, i) in topContacts"
          :key="'top-contacts-item-' + i"
          :card="item"
        />
      </div>
      <div
        class="lg:p-5 p-3 rounded-[20px] flex items-center w-full max-lg:grid gap-5 grid-cols-1"
      >
        <ContactsTgCard
          v-for="(item, i) in bottomContacts"
          :key="'bottom-contacts-item-' + i"
          :card="item"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ContactsTgCard from "@/components/Cards/ContactsTgCard.vue";

const topContacts = [
  { name: "123", type: "Telegram", color: "white" },
  { name: "123", type: "Telegram", color: "white" },
];
const bottomContacts = [
  { name: "123", type: "Telegram-бот", color: "dark" },
  { name: "123", type: "Telegram (Отзывы)", color: "dark" },
  { name: "123", type: "Telegram (фото-отчеты)", color: "dark" },
  { name: "123", type: "Telegram (фото-отчеты)", color: "dark" },
];
</script>

<style scoped lang="scss"></style>
