<template>
  <RouterLink :to="order.slug" class="lg:space-y-2 space-y-1">
    <div class="bg-light rounded-md overflow-hidden lg:h-[125px] h-[112px] p-2">
      <img :src="order.img" class="w-full h-full object-contain" />
    </div>
    <div>
      <h3 class="lg:text-18 font-semibold text-14">{{ order.title }}</h3>
      <p class="text-10 opacity-40">{{ order.text }}</p>
    </div>
  </RouterLink>
</template>

<script setup lang="ts">
defineProps<{
  order: any;
}>();
</script>

<style scoped></style>
