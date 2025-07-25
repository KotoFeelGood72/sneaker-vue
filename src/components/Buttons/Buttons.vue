<template>
  <button
    :class="[
      baseClasses,
      variantClasses,
      sizeClasses,
      color,
      textColor,
      {
        'opacity-50 cursor-not-allowed': isDisabled,
        relative: isLoading,
      },
      { '!rounded-full': rounded },
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
    <span :class="[{ invisible: isLoading }, 'text-inherit', textColor]">
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
  size?: "small" | "medium" | "large" | "large-x";
  color?: string;
  textColor?: string;
  rounded?: boolean;
}>();

const emit = defineEmits<{
  (e: "onClick", payload: MouseEvent): void;
}>();

function handleClick(e: MouseEvent) {
  emit("onClick", e);
}

// Общие классы для всех кнопок
const baseClasses = "inline-flex items-center justify-center transition-all duration-200";

// Разные варианты оформления
const variantClasses = computed(() => {
  switch (props.variant) {
    case "secondary":
      return props.isActive
        ? "bg-lightXs text-white hover:bg-gray-900 hover:-translate-y-[2px] focus:ring-gray-900"
        : "bg-lightXs text-gray-800 hover:bg-gray-300 hover:-translate-y-[2px] focus:ring-gray-300";
    case "outline":
      return props.isActive
        ? "border border-dark text-dark hover:bg-dark hover:text-white hover:-translate-y-[2px] rounded-md"
        : "border border-dark text-dark hover:bg-dark hover:text-white hover:-translate-y-[2px] rounded-md";
    default:
      return props.isActive
        ? "bg-dark text-white font-semibold rounded-md transition-all duration-200 hover:bg-gray-800 hover:-translate-y-[2px] focus:ring-gray-900"
        : "bg-dark text-white font-semibold rounded-md transition-all duration-200 hover:bg-gray-800 hover:-translate-y-[2px] focus:ring-gray-900";
  }
});

// Размеры
const sizeClasses = computed(() => {
  switch (props.size) {
    case "small":
      return "px-3 py-1 text-14";
    case "large":
      return "lg:py-5 lg:px-10 lg:text-20 text-12 py-4 px-6 font-semibold";
    case "large-x":
      return "lg:py-3 lg:px-10 lg:text-20 text-14 py-4 px-6 font-semibold";
    default:
      // medium
      return "px-10 lg:py-4 lg:text-18 font-medium py-[14px] w-full lg:w-auto text-14";
  }
});
</script>
