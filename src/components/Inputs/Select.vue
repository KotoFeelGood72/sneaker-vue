<template>
  <div class="relative inline-flex bg-light rounded-md items-center justify-center">
    <button
      class="w-full lg:py-5 lg:px-10 py-4 px-5 flex items-center justify-center lg:gap-7 gap-4"
      @click="toggle"
    >
      <span class="lg:text-18 text-12 font-semibold">{{ selected.label }}</span>
      <div class="rotate-90 max-lg:w-4 max-lg:h-4">
        <Icons icon="fluent:chevron-right-48-regular" class="w-full h-full" />
      </div>
    </button>

    <ul
      v-if="open"
      class="absolute z-10 border-black/10 border bg-white w-full top-[107%] rounded px-[10px]"
    >
      <li
        v-for="(option, index) in options"
        :key="index"
        class="flex justify-between items-center py-2 hover:bg-gray-100 cursor-pointer max-lg:text-12"
        :class="{ 'border-b border-black/10': index !== options.length - 1 }"
        @click="select(option)"
      >
        <span>{{ option.label }}</span>
        <input type="radio" :checked="option.value === selected.value" />
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, defineProps, defineEmits, onMounted } from "vue";

const props = defineProps<{
  options: { label: string; value: any }[];
  modelValue?: any;
}>();

const emit = defineEmits(["update:modelValue"]);

const open = ref(false);
const selected = ref<{ label: string; value: any }>({ label: "", value: "" });

function toggle() {
  open.value = !open.value;
}

function select(option: { label: string; value: any }) {
  selected.value = option;
  emit("update:modelValue", option.value);
  open.value = false;
}

onMounted(() => {
  const defaultOption = props.options[0];
  selected.value = defaultOption;
  emit("update:modelValue", defaultOption.value);
});

watch(
  () => props.modelValue,
  (newVal) => {
    const match = props.options.find((opt) => opt.value === newVal);
    if (match) selected.value = match;
  }
);
</script>
