<template>
  <div class="accordion select-none">
    <div
      class="accordion-header flex items-center justify-between cursor-pointer mb-3"
      @click="toggle(index)"
    >
      <h3 class="lg:text-26 text-dark font-semibold text-18">{{ title }}</h3>
      <div class="flex items-center justify-center">
        <Icons
          :icon="openIndex === index ? 'ic:baseline-minus' : 'ic:baseline-plus'"
          :size="24"
        />
      </div>
    </div>

    <transition @before-enter="beforeEnter" @enter="enter" @leave="leave">
      <div v-show="openIndex === index" class="accordion-content overflow-hidden">
        <slot />
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { useAccordion } from "@/composables/useAccordion";
import { defineProps } from "vue";

const props = defineProps<{
  index: number;
  title?: string;
}>();

const { openIndex, toggle, beforeEnter, enter, leave } = useAccordion();
</script>

<style scoped>
.accordion-content {
  transition: all 0.3s ease;
}
</style>
