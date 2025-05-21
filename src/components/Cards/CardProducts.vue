<template>
  <RouterLink :to="product.link">
    <div class="cardProducts flex flex-col gap-2">
      <div class="bg-light rounded-[8px] lg:py-16 px-4 relative">
        <div>
          <img :src="product.img" />
        </div>
        <div class="attr absolute bottom-4 left-6 flex items-center gap-4 opacity-40">
          <span>EU:</span>
          <span>{{ product.size }}</span>
        </div>
      </div>
      <div class="content flex flex-col gap-2">
        <h3 class="text-26 font-semibold text-dark">{{ product.title }}</h3>
        <p class="text-14 opacity-40">{{ product.art }}</p>
        <span class="text-18 text-dark font-medium">{{ product.price }}</span>
      </div>
    </div>
  </RouterLink>
</template>

<script setup lang="ts">
defineProps<{
  product: any;
}>();
</script>

<style scoped lang="scss"></style>
