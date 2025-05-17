<template>
  <div class="search-inputs">
    <div class="search-inputs">
      <Icons icon="iconamoon:search-thin" :size="20" />
    </div>
    <input
      type="search"
      v-model="localValue"
      placeholder="Введите бренд или название модели"
    />
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";

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
