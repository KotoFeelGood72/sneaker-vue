<template>
  <div class="">
    <ul>
      <li v-for="item in profileListMenu">
        <RouterLink :to="`/profile/${item.link}`">
          <p>{{ item.name }}</p>
          <Icons icon="ci:chevron-right" />
        </RouterLink>
      </li>
    </ul>
    <div>
      <div>Баланс: 0 Sneaker Coins</div>
      <div>1 Sneaker Coins = 1 ₽</div>
    </div>
  </div>
</template>

<script setup lang="ts">
const profileListMenu = [
  { name: "Управление профилем", link: "" },
  { name: "Заказы", link: "" },
  { name: "Реферальная ссылка", link: "" },
  { name: "Программа лояльности", link: "" },
];
</script>

<style scoped lang="scss"></style>
