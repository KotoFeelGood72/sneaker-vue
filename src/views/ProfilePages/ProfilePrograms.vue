<template>
  <div class="container flex flex-wrap lg:gap-[100px] gap-5">
    <div class="max-w-[754px] w-full">
      <p class="lg:text-20 lg:mb-10 mb-5">Твой проводник в мир бонусов и привилегий</p>
      <div class="grid lg:grid-cols-4 lg:gap-4 gap-[10px] grid-cols-2">
        <div
          v-for="(item, i) in list"
          :key="'list-item-' + i"
          class="relative lg:min-h-[252px] min-h-[230px] bg-light border border-black/10 rounded-[10px] py-4 px-[10px] overflow-hidden"
        >
          <div class="text-center space-y-2">
            <h3 class="text-26 font-semibold" v-if="!item.custom">{{ item.title }}</h3>
            <div
              v-else
              class="flex items-center gap-1 text-26 font-semibold justify-center"
            >
              <p>1</p>
              <img src="/assets/img/s-img.png" />
              <p>= 1 ₽</p>
            </div>
            <p class="lg:text-[13px] opacity-40 text-10">{{ item.txt }}</p>
          </div>
          <img :src="item.img" class="absolute bottom-0 right-0 max-h-[132px]" />
        </div>
      </div>
    </div>
    <ProfileListMenu />
  </div>
</template>

<script setup lang="ts">
import ProfileListMenu from "@/components/list/ProfileListMenu.vue";

const list = [
  {
    title: "3%",
    txt: "За каждую покупку ты получишь от заказа в Sneaker Coins",
    img: "/assets/img/p1.png",
  },
  {
    title: "500",
    txt: "Оставил отзыв? Получи еще 500 бонусных Sneaker Coins",
    img: "/assets/img/p2.png",
  },
  {
    title: "5%",
    txt: "От стоимости покупки каждого приглашеннго друга по твоей ссылке",
    img: "/assets/img/p3.png",
  },
  {
    custom: true,
    txt: "Используй монеты для оплаты следующего заказа полностью или частично",
    img: "/assets/img/p4.png",
  },
];
</script>

<style scoped lang="scss"></style>
