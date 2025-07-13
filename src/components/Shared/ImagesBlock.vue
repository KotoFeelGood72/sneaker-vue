<template>
  <div class="">
    <h3>{{ block.title }}</h3>
    <div v-html="block.txt" />
    <img :src="block.img" />
    <Buttons class="w-full" size="large">{{ block.btn }}</Buttons>
  </div>
</template>

<script setup lang="ts">
import Buttons from "../Buttons/Buttons.vue";

defineProps<{
  block: any;
}>();
</script>

<style scoped lang="scss"></style>
