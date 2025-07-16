<template>
  <div class="flex flex-col lg:gap-[60px] gap-[20px]">
    <div class="container">
      <h1 class="lg:text-40 font-semibold text-22 max-lg:text-center">
        {{ isProfileTitle }}
      </h1>
    </div>
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const isProfileTitle = computed(() => {
  return route.meta.title;
});

console.log(route);
</script>

<style scoped lang="scss"></style>
