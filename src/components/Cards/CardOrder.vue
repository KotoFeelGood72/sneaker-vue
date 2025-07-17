<template>
  <RouterLink :to="order.slug">
    <div>
      <img :src="order.img" />
    </div>
    <div>
      <h3>{{ order.title }}</h3>
      <p>{{ order.txt }}</p>
    </div>
  </RouterLink>
</template>

<script setup lang="ts">
defineProps<{
  order: any;
}>();
</script>

<style scoped></style>
