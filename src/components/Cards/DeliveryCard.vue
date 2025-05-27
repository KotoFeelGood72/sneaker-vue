<template>
  <div
    class="p-5 rounded-[10px] border transition-colors cursor-pointer flex flex-col gap-4"
    :class="{
      'bg-dark text-white border-dark': selected,
      'bg-white text-dark border-gray-300': !selected,
    }"
  >
    <div class="flex justify-between items-start">
      <div
        class="font-semibold text-22 text-dark"
        :class="{
          'text-white': selected,
          'text-dark': !selected,
        }"
      >
        {{ delivery.datetime }}
      </div>
      <div
        class="py-2 px-3 rounded-[4px] text-18 leading-4 font-semibold"
        :class="{
          'bg-white text-dark': selected,
          'bg-dark text-white': !selected,
        }"
      >
        {{ delivery.price }} р.
      </div>
    </div>
    <div
      class="text-16 text-dark font-normal"
      :class="{
        'text-white': selected,
        'text-dark opacity-40': !selected,
      }"
    >
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
