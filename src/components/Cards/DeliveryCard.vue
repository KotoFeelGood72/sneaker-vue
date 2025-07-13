<template>
  <div
    class="lg:p-5 p-4 rounded-[10px] border transition-colors cursor-pointer flex flex-col lg:gap-4 gap-[6px]"
    :class="{
      'bg-dark text-white border-dark': selected,
      'bg-white text-dark border-gray-300': !selected,
    }"
  >
    <div class="flex justify-between lg:items-start items-center">
      <div
        class="font-semibold lg:text-22 text-14 text-dark"
        :class="{
          'text-white': selected,
          'text-dark': !selected,
        }"
      >
        {{ delivery.datetime }}
      </div>
      <div
        class="py-2 px-3 rounded-[4px] lg:text-18 leading-4 font-semibold text-14"
        :class="{
          'bg-white text-dark': selected,
          'bg-dark text-white': !selected,
        }"
      >
        {{ delivery.price }} р.
      </div>
    </div>
    <div
      class="lg:text-16 text-dark font-normal text-12"
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
