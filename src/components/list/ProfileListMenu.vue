<template>
  <div class="space-y-6 w-full max-w-[666px]">
    <ul
      class="lg:bg-black/10 lg:px-6 lg:py-10 rounded-[10px] lg:border lg:border-black/10"
    >
      <li v-for="(item, index) in profileListMenu" :key="index">
        <RouterLink
          :to="`/profile/${item.link}`"
          :class="[
            'flex items-center justify-between',
            index < profileListMenu.length - 1 ? 'lg:py-10 py-7' : 'lg:pt-10 pt-7',
          ]"
        >
          <p class="lg:text-26 font-semibold text-18">{{ item.name }}</p>
          <Icons
            icon="ci:chevron-right"
            class="lg:w-6 lg:h-6 flex items-center justify-center"
          />
        </RouterLink>
        <div v-if="index < profileListMenu.length - 1" class="border-b border-gray"></div>
      </li>
    </ul>
    <div
      class="flex flex-col lg:gap-6 lg:bg-black/10 lg:px-6 lg:py-9 rounded-[10px] lg:border"
    >
      <div class="lg:text-26 font-semibold text-18">Баланс: 0 Sneaker Coins</div>
      <div class="lg:text-20 opacity-60 text-14">1 Sneaker Coins = 1 ₽</div>
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
