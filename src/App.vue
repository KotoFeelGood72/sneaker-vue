<script setup lang="ts">
import { computed, onMounted } from "vue";
import DefaultLayout from "./layouts/DefaultLayout.vue";
import EmptyLayout from "./layouts/EmptyLayout.vue";
import { useRoute } from "vue-router";
import { useAuthStore } from "./stores/useAuthStore";

const { getProfile } = useAuthStore();
const route = useRoute();

const isLayoutPage = computed(() => {
  switch (route.meta.layout) {
    case "empty":
      return EmptyLayout;
    default:
      return DefaultLayout;
  }
});

onMounted(() => {
  getProfile();
});
</script>

<template>
  <component :is="isLayoutPage" />
</template>
