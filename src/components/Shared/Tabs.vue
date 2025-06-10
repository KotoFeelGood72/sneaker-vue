<template>
  <div>
    <div
      class="flex gap-[9px] before:content-[''] before:absolute before:w-full before:h-[1px] before:bg-[#D0D0D0] before:bottom-0 before:left-0 relative before:z-[-1]"
    >
      <button
        v-for="(tab, i) in tabs"
        :key="i"
        @click="active = i"
        class="text-16 text-uppercase pb-1"
        :class="active === i ? 'border-b-2 border-dark' : 'border-b-2 border-transparent'"
      >
        {{ tab }}
      </button>
    </div>
    <div class="mt-4">
      <slot :activeIndex="active" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps } from "vue";

defineProps<{ tabs: string[] }>();
const active = ref(0);
</script>
