<template>
  <div class="shop-cart">
    <div
      class="container flex lg:gap-[60px] gap-[10px] flex-wrap"
      v-if="cartItems.length > 1"
    >
      <div class="flex flex-col xl:gap-10 flex-grow gap-[10px]">
        <h1 class="lg:text-40 text-22 text-dark font-semibold xl:text-left text-center">
          Корзина
        </h1>
        <div
          class="border border-[#0000001A] rounded-[20px] lg:p-5 flex flex-col gap-7 p-4"
        >
          <div v-for="(cartItem, i) in cartItems" :key="'cart-item-' + i">
            <CartItem
              :cartItem="cartItem"
              :class="['lg:pb-7', i < cartItems.length - 1 ? 'pb-5' : 'pb-0']"
            />

            <div
              class="divider border-b border-[#0000001A] w-full"
              v-if="i < cartItems.length - 1"
            ></div>
          </div>
        </div>
      </div>
      <div class="lg:w-auto w-full">
        <div><CartTotal /></div>
      </div>
    </div>
    <div class="container" v-else>
      <CartEmpty />
    </div>
  </div>
</template>

<script setup lang="ts">
import CartEmpty from "@/components/Shared/CartEmpty.vue";
import CartTotal from "@/components/Cards/CartTotal.vue";
import CartItem from "@/components/Cards/CartItem.vue";
import { cartItems } from "@/data/ProductsList";
</script>

<style scoped lang="scss"></style>
