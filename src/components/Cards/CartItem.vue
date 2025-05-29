<template>
  <div class="cartItem text-dark">
    <div class="flex gap-6">
      <div class="bg-light rounded-lg p-2 flex items-center justify-center">
        <img :src="cartItem.img" />
      </div>
      <div class="flex-grow">
        <h3 class="text-26 font-semibold">{{ cartItem.title }}</h3>
        <div class="text-14 text-black opacity-40 mb-4">{{ cartItem.description }}</div>
        <div class="font-medium mb-4">Размер: {{ cartItem.size }}</div>
        <div class="mb-4">{{ cartItem.delivery }}</div>
        <div class="text-28 font-semibold">{{ cartItem.price }} р.</div>
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
