<template>
  <nav class="nav flex gap-5">
    <RouterLink
      v-for="(item, i) in MenuNavList"
      :to="item.link"
      :key="'menu-nav-item-' + i"
      >{{ item.title }}</RouterLink
    >
  </nav>
</template>

<script setup lang="ts">
const MenuNavList = [
  { title: "Обувь", link: "/shop/shoes" },
  { title: "Одежда", link: "/shop/clothes" },
  { title: "Аксессуары", link: "/shop/accessories" },
  { title: "Отзывы", link: "/reviews" },
  { title: "Доставка и оплата", link: "/payments" },
  { title: "Блог", link: "/news" },
  { title: "Контакты", link: "/contacts" },
];
</script>

<style scoped lang="scss"></style>
