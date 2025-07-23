<template>
  <button
    type="button"
    class="flex items-center justify-between lg:gap-6 lg:py-5 lg:px-10 py-4 px-6 gap-4 rounded-md max-lg:order-2 max-lg:w-full"
    :class="[
      colorSheme === 'light'
        ? 'bg-lightXs text-dark hover:bg-gray-100'
        : 'bg-dark text-white hover:bg-black',
    ]"
  >
    <p class="lg:text-18 text-12 font-semibold flex-grow">{{ text }}</p>

    <div class="flex items-center justify-center max-lg:w-4" v-if="icon">
      <img :src="`/assets/icon/ui/auth-${icon}.svg`" />
    </div>
  </button>
</template>

<script setup lang="ts">
const props = defineProps<{
  text: string;
  icon?: string;
  colorSheme: "light" | "dark";
}>();
</script>

<style scoped></style>
