<template>
  <div class="cartItem text-dark">
    <div class="flex gap-6">
      <div class="bg-light rounded-lg p-2 flex items-center justify-center">
        <img :src="cartItem.img" />
      </div>
      <div class="flex-grow">
        <h3 class="lg:text-26 font-semibold text-16">{{ cartItem.title }}</h3>
        <div class="lg:text-14 text-10 text-black opacity-40 lg:mb-4 mb-[10px]">
          {{ cartItem.description }}
        </div>
        <div class="font-medium lg:mb-4 mb-[10px] lg:text-16 text-12">
          Размер: {{ cartItem.size }}
        </div>
        <div class="lg:mb-4 mb-[10px] lg:text-16 text-10">{{ cartItem.delivery }}</div>
        <div class="lg:text-28 text-16 font-semibold">{{ cartItem.price }} р.</div>
      </div>
      <div class="cartItem__delete flex items-center justify-center cursor-pointer">
        <img src="@/assets/icons/delete.svg" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  cartItem: any;
}>();
</script>
