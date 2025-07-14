<template>
  <ul class="grid xl:grid-cols-6 xl:gap-6 grid-cols-3 gap-2">
    <li
      v-for="(item, i) in products"
      :key="'products-item-' + i"
      :class="[cutToThree && i > 2 ? 'block lg:block hidden' : 'block']"
    >
      <CardProducts :product="item" />
    </li>
  </ul>
</template>

<script setup lang="ts">
import CardProducts from "../Cards/CardProducts.vue";
const props = defineProps<{
  products: any[];
  cutToThree?: boolean;
}>();
const { products, cutToThree = false } = props;
</script>
