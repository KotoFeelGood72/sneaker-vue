<template>
  <RouterLink :to="link" class="relative rounded-[8px] overflow-hidden w-full">
    <div class="absolute top-0 left-0 w-full h-full z-[-1]">
      <img src="@/assets/img/cat-bg.svg" class="w-full object-cover h-full" />
    </div>
    <div class="flex items-center justify-center h-full lg:h-auto flex-grow">
      <h2
        class="lg:text-30 font-semibold text-dark max-w-72 absolute lg:top-5 lg:left-5 text-16 top-[6px] left-[6px]"
      >
        {{ title }}
      </h2>
      <picture class="h-full flex-grow lg:w-auto flex justify-end">
        <source :srcset="img" media="(min-width: 1024px)" />
        <img :src="mobile" alt="" class="h-full w-full object-contain lg:w-auto" />
      </picture>
    </div>
  </RouterLink>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  link: string;
  img: any;
  mobile: any;
}>();
</script>
