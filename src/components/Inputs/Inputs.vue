<template>
  <div class="inputs bg-light rounded-md overflow-hidden relative">
    <div
      class="icon absolute top-[50%] -translate-y-[50%] left-5 flex items-center justify-center"
      v-if="icon"
    >
      <Icons :icon="icon" :size="iconSize" color="inherit" />
    </div>
    <input
      type="text"
      v-model="localValue"
      :placeholder="placeholder"
      class="bg-transparent w-full h-full py-5 px-10 pl-16 text-dark placeholder:text-dark placeholder:opacity-50 focus:outline-none focus:ring-0 text-22"
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
