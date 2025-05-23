<template>
  <div class="container">
    <h1 class="lg:text-40 font-semibold text-dark lg:mb-[60px]">Блог</h1>
    <ul class="grid grid-cols-3 lg:gap-[60px]">
      <li v-for="item in posts">
        <NewsCard :post="item" />
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import NewsCard from "@/components/Cards/NewsCard.vue";
const posts = [
  {
    img: "/assets/img/post.png",
    title: "ТОП 10 КРОССОВОК НЬЮ БАЛАНС ЗА ВСЮ ИСТОРИЮ",
    date: "17.04.2025",
    description:
      "Вы точно слышали о кроссовках «made in USA». Надпись «сделано в США»...",
    view: "122",
    id: "212",
  },
  {
    img: "/assets/img/post.png",
    title: "ТОП 10 КРОССОВОК НЬЮ БАЛАНС ЗА ВСЮ ИСТОРИЮ",
    date: "17.04.2025",
    description:
      "Вы точно слышали о кроссовках «made in USA». Надпись «сделано в США»...",
    view: "122",
    id: "212",
  },
  {
    img: "/assets/img/post.png",
    title: "ТОП 10 КРОССОВОК НЬЮ БАЛАНС ЗА ВСЮ ИСТОРИЮ",
    date: "17.04.2025",
    description:
      "Вы точно слышали о кроссовках «made in USA». Надпись «сделано в США»...",
    view: "122",
    id: "212",
  },
  {
    img: "/assets/img/post.png",
    title: "ТОП 10 КРОССОВОК НЬЮ БАЛАНС ЗА ВСЮ ИСТОРИЮ",
    date: "17.04.2025",
    description:
      "Вы точно слышали о кроссовках «made in USA». Надпись «сделано в США»...",
    view: "122",
    id: "212",
  },
  {
    img: "/assets/img/post.png",
    title: "ТОП 10 КРОССОВОК НЬЮ БАЛАНС ЗА ВСЮ ИСТОРИЮ",
    date: "17.04.2025",
    description:
      "Вы точно слышали о кроссовках «made in USA». Надпись «сделано в США»...",
    view: "122",
    id: "212",
  },
];
</script>

<style scoped lang="scss"></style>
