<template>
  <div class="flex flex-col gap-4">
    <h3 class="lg:text-26 font-semibold text-dark text-18" v-if="title">{{ title }}</h3>
    <div v-if="img" class="flex items-center justify-center">
      <img :src="img" />
    </div>
    <div class="lg:text-16 text-10" style="white-space: pre-line">{{ text }}</div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title?: string;
  text: string;
  img?: string;
}>();
</script>

<style scoped lang="scss"></style>
