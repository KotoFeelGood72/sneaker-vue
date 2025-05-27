<template>
  <button
    :class="[
      baseClasses,
      variantClasses,
      sizeClasses,
      {
        'opacity-50 cursor-not-allowed': isDisabled,
        relative: isLoading,
      },
    ]"
    :disabled="isDisabled || isLoading"
    @click="handleClick($event)"
  >
    <!-- Спиннер поверх текста -->
    <div
      v-if="isLoading"
      class="absolute inset-0 flex items-center justify-center bg-white bg-opacity-50 rounded-md"
    >
      <Icons icon="svg-spinners:180-ring" class="w-5 h-5 animate-spin text-gray-700" />
    </div>

    <!-- Текст кнопки -->
    <span :class="[{ invisible: isLoading }, 'text-inherit']">
      <slot />
    </span>
  </button>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  isLoading?: boolean;
  isDisabled?: boolean;
  isActive?: boolean;
  variant?: "primary" | "secondary" | "outline";
  size?: "small" | "medium" | "large";
}>();

const emit = defineEmits<{
  (e: "onClick", payload: MouseEvent): void;
}>();

function handleClick(e: MouseEvent) {
  emit("onClick", e);
}

// Общие классы для всех кнопок
const baseClasses = "inline-flex items-center justify-center  transition-colors";

// Разные варианты оформления
const variantClasses = computed(() => {
  switch (props.variant) {
    case "secondary":
      return props.isActive
        ? "bg-gray-800 text-white hover:bg-gray-900 focus:ring-gray-900"
        : "bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-300";
    case "outline":
      return props.isActive
        ? "border border-dark text-dark hover:bg-dark hover:text-white rounded-md"
        : "border border-dark text-dark hover:bg-dark hover:text-white rounded-md";
    default:
      return props.isActive
        ? "bg-dark text-white font-semibold rounded-md transition-colors transition-all duration-300 ease-in-out hover:bg-gray-800 focus:ring-gray-900"
        : "bg-dark text-white font-semibold rounded-md transition-colors transition-all duration-300 ease-in-out hover:bg-gray-800 focus:ring-gray-900";
  }
});

// Размеры
const sizeClasses = computed(() => {
  switch (props.size) {
    case "small":
      return "px-3 py-1 text-14";
    case "large":
      return "py-5 px-10 text-20 font-semibold";
    default:
      // medium
      return "px-10 py-4 text-18";
  }
});
</script>
