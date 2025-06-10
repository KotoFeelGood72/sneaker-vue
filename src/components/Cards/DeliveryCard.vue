<template>
  <div
    class="p-4 rounded-lg border transition-colors cursor-pointer"
    :class="{
      'bg-black text-white border-black': selected,
      'bg-white text-black border-gray-300': !selected,
    }"
  >
    <div class="flex justify-between items-start mb-2">
      <div class="font-semibold text-lg">{{ delivery.datetime }}</div>
      <div
        class="px-3 py-1 rounded text-sm font-semibold"
        :class="{
          'bg-white text-black': selected,
          'bg-black text-white': !selected,
        }"
      >
        {{ delivery.price }} р.
      </div>
    </div>
    <div class="text-sm text-gray-500" :class="{ 'text-white/80': selected }">
      {{ delivery.txt }}
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  delivery: {
    datetime: string;
    price: string | number;
    txt: string;
  };
  selected?: boolean;
}>();
</script>
