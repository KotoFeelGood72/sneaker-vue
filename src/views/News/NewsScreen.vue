<template>
  <div class="container">
    <h1
      class="lg:text-40 font-semibold text-dark lg:mb-[60px] text-22 lg:text-left text-center mb-10"
    >
      Блог
    </h1>
    <ul class="grid lg:grid-cols-3 lg:gap-[60px] gap-[10px] grid-cols-2">
      <li v-for="item in posts">
        <NewsCard :post="item" />
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import NewsCard from "@/components/Cards/NewsCard.vue";
import { posts } from "@/data/Posts";
</script>

<style scoped lang="scss"></style>
