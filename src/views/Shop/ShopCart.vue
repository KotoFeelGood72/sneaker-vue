<template>
  <div class="shop-cart">
    <div class="container flex gap-[60px]">
      <!-- <CartEmpty /> -->
      <div class="flex flex-col gap-10 flex-grow">
        <h1 class="text-40 text-dark font-semibold">Корзина</h1>
        <div class="border border-[#0000001A] rounded-[20px] p-5 flex flex-col gap-7">
          <div v-for="(cartItem, i) in cartItems" :key="'cart-item-' + i">
            <CartItem :cartItem="cartItem" class="pb-7" />
            <div
              class="divider border-b border-[#0000001A] w-full"
              v-if="i < cartItems.length - 1"
            ></div>
          </div>
        </div>
      </div>
      <div>
        <div><CartTotal /></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import CartEmpty from "@/components/Shared/CartEmpty.vue";
import CartTotal from "@/components/Cards/CartTotal.vue";
import CartItem from "@/components/Cards/CartItem.vue";

const cartItems = [
  {
    img: "/assets/img/cart-item.png",
    title: "New Balance",
    description: "4205 Sandal 'Black'",
    size: "EU 41.5",
    delivery: "Стандартная доставка 20-25 дней",
    price: "14 500",
  },
  {
    img: "/assets/img/cart-item.png",
    title: "New Balance",
    description: "4205 Sandal 'Black'",
    size: "EU 41.5",
    delivery: "Стандартная доставка 20-25 дней",
    price: "14 500",
  },
  {
    img: "/assets/img/cart-item.png",
    title: "New Balance",
    description: "4205 Sandal 'Black'",
    size: "EU 41.5",
    delivery: "Стандартная доставка 20-25 дней",
    price: "14 500",
  },
];
</script>

<style scoped lang="scss"></style>
