<template>
  <div class="container">
    <h1 class="mb-6 lg:text-40 font-semibold text-dark">Контакты</h1>
    <div
      class="bg-[#F0F0F0] rounded-[20px] border border-[#0000001A] p-5 flex flex-col gap-[30px]"
    >
      <div
        class="p-5 rounded-[20px] flex items-center bg-dark max-w-[744px] w-full grid-cols-2 lg:grid-cols-3 gap-5"
      >
        <ContactsTgCard
          v-for="(item, i) in topContacts"
          :key="'top-contacts-item-' + i"
          :card="item"
        />
      </div>
      <div
        class="p-5 rounded-[20px] flex items-center w-full grid-cols-2 lg:grid-cols-3 gap-5"
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
