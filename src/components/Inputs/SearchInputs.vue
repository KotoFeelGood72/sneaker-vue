<template>
  <div class="search-inputs flex items-center bg-light relative flex-grow">
    <div class="search-inputs absolute top-[50%] translate-y-[-50%] left-3">
      <Icons icon="iconamoon:search-thin" :size="20" />
    </div>
    <input
      type="search"
      v-model="localValue"
      placeholder="Введите бренд или название модели"
      class="bg-transparent pl-10 pr-4 pt-2 pb-2 rounded-md w-full"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  modelValue: any;
}>();

const emit = defineEmits(["update:modelValue"]);

const localValue = computed({
  get: () => props.modelValue,
  set: (newValue) => emit("update:modelValue", newValue),
});
</script>

<style scoped lang="scss"></style>
