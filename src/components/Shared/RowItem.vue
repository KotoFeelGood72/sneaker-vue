<template>
  <div class="flex items-center justify-between">
    <div class="lg:text-20 font-semibold text-dark pb-6 border-b border-[#E8E8E8]">
      {{ countriesName }}
    </div>
    <div
      class="lg:text-20 font-semibold text-dark pb-6 border-b border-[#E8E8E8] flex-grow justify-end flex"
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
