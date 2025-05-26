<script setup lang="ts">
import { computed } from "vue";
import DefaultLayout from "./layouts/DefaultLayout.vue";
import EmptyLayout from "./layouts/EmptyLayout.vue";
import { useRoute } from "vue-router";

const route = useRoute();

const isLayoutPage = computed(() => {
  switch (route.meta.layout) {
    case "empty":
      return EmptyLayout;
    default:
      return DefaultLayout;
  }
});
</script>

<template>
  <component :is="isLayoutPage" />
</template>
