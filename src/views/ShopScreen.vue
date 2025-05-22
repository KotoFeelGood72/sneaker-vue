<template>
  <div class="container flex gap-6">
    <SidebarFilter />
    <div class="list flex-grow">
      <ul class="grid grid-cols-4 gap-6">
        <li v-for="(item, i) in products" :key="'products-item-' + i">
          <CardProducts :product="item" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import SidebarFilter from "@/components/Shared/SidebarFilter.vue";
import CardProducts from "@/components/Cards/CardProducts.vue";

const products = [
  {
    title: "New Balance",
    img: "/assets/img/products/1.png",
    size: "41.5",
    art: "4205 Sandal 'Black'",
    price: "14 500 р.",
    split: "7 250 р. х 2",
    sales: ["Быстро разбирают", "Новинки"],
  },
  {
    title: "New Balance",
    img: "/assets/img/products/2.png",
    size: "41.5",
    art: "4205 Sandal 'Black'",
    price: "14 500 р.",
  },
  {
    title: "New Balance",
    img: "/assets/img/products/3.png",
    size: "41.5",
    art: "4205 Sandal 'Black'",
    price: "14 500 р.",
  },
  {
    title: "New Balance",
    img: "/assets/img/products/4.png",
    size: "41.5",
    art: "4205 Sandal 'Black'",
    price: "14 500 р.",
  },
  {
    title: "New Balance",
    img: "/assets/img/products/5.png",
    size: "41.5",
    art: "4205 Sandal 'Black'",
    price: "14 500 р.",
  },
  {
    title: "New Balance",
    img: "/assets/img/products/6.png",
    size: "41.5",
    art: "4205 Sandal 'Black'",
    price: "14 500 р.",
  },
];
</script>

<style scoped lang="scss"></style>
