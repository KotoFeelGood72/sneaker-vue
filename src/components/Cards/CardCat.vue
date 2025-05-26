<template>
  <RouterLink :to="link" class="relative rounded-[8px] overflow-hidden">
    <div class="absolute top-0 left-0 w-full h-full z-[-1]">
      <img src="@/assets/img/cat-bg.svg" class="w-full object-cover h-full" />
    </div>
    <div class="flex items-center justify-center">
      <h2 class="text-30 font-semibold text-dark max-w-72 absolute top-5 left-5">
        {{ title }}
      </h2>
      <img :src="img" class="w-auto h-full" />
    </div>
  </RouterLink>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  link: string;
  img: any;
}>();
</script>
