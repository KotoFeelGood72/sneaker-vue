<template>
  <div class="flex items-center justify-between">
    <div
      class="lg:text-20 font-semibold text-dark lg:pb-6 border-b border-[#E8E8E8] pb-4 text-14"
    >
      {{ countriesName }}
    </div>
    <div
      class="lg:text-20 font-semibold text-dark lg:pb-6 border-b border-[#E8E8E8] flex-grow justify-end flex pb-4 text-14"
    >
      {{ selectedSize }}
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  selectedSize: any;
  countriesName: string;
}>();
</script>

<style scoped lang="scss"></style>
