<template>
  <nav class="nav">
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
  { title: "Обувь", link: "/" },
  { title: "Одежда", link: "/" },
  { title: "Аксессуары", link: "/" },
  { title: "Отзывы", link: "/" },
  { title: "Доставка и оплата", link: "/" },
  { title: "Блог", link: "/" },
  { title: "Контакты", link: "/" },
];
</script>

<style scoped lang="scss"></style>
