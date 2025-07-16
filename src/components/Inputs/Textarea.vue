<template>
  <div class="inputs bg-light rounded-md overflow-hidden relative">
    <div
      class="icon absolute top-[16px] left-5 flex items-center justify-center max-lg:w-4 max-lg:h-4"
      v-if="icon"
    >
      <img :src="`/assets/icon/ui/${icon}.svg`" />
    </div>
    <textarea
      v-model="localValue"
      :placeholder="placeholder"
      class="bg-transparent w-full h-full resize-none lg:py-5 lg:px-10 lg:pl-16 text-dark placeholder:text-dark placeholder:opacity-50 focus:outline-none focus:ring-0 lg:text-22 text-12 px-3 pl-[38px] py-[10px] min-h-[120px]"
    ></textarea>
  </div>
</template>

<script setup lang="ts">
import { computed, defineEmits } from "vue";

const props = defineProps<{
  icon?: string;
  placeholder?: string;
  modelValue: string;
}>();

const emit = defineEmits(["update:modelValue"]);

const localValue = computed({
  get: () => props.modelValue,
  set: (newValue) => emit("update:modelValue", newValue),
});
</script>
