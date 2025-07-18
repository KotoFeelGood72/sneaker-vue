<template>
  <div class="inputs bg-light rounded-md overflow-hidden relative">
    <div
      class="icon absolute top-[50%] -translate-y-[50%] left-3 flex items-center justify-center max-lg:w-4 max-lg:h-4"
      v-if="icon"
    >
      <img :src="`/assets/icon/ui/${icon}.svg`" />
    </div>
    <input
      type="text"
      v-model="localValue"
      :placeholder="placeholder"
      class="bg-transparent w-full h-full lg:py-5 lg:px-10 lg:pl-16 text-dark placeholder:text-dark placeholder:opacity-50 focus:outline-none focus:ring-0 lg:text-22 text-12 px-3 pl-[38px] py-[10px]"
    />
  </div>
</template>

<script setup lang="ts">
import { computed, defineEmits } from "vue";
import Icons from "../Icons/Icons.vue";
const props = defineProps<{
  icon?: string;
  iconSize?: number;
  placeholder?: string;
  modelValue: any;
}>();

const emit = defineEmits(["update:modelValue"]);

const localValue = computed({
  get: () => props.modelValue,
  set: (newValue) => emit("update:modelValue", newValue),
});
</script>

<style scoped lang="scss"></style>
