<template>
  <label :for="id" class="relative flex items-center cursor-pointer select-none">
    <input
      type="checkbox"
      :id="id"
      class="peer absolute h-0 w-0 opacity-0"
      v-model="localValue"
      :true-value="value"
      :false-value="''"
    />
    <span
      class="bg-[#E4E4E4] flex-shrink-0 h-4 w-4 bg-gray-200 peer-checked:bg-dark transition-colors flex items-center justify-center rounded-[2px]"
    ></span>
    <span
      class="absolute top-[50%] -translate-y-[50%] left-0 h-4 w-4 opacity-0 peer-checked:opacity-100 transition-opacity flex items-center justify-center"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="10"
        height="11"
        viewBox="0 0 10 11"
        fill="none"
      >
        <path
          d="M3.01455 8.86845C2.74961 8.86856 2.49553 8.76326 2.30835 8.57577L0.173278 6.44148C-0.0564572 6.21168 -0.0564572 5.83915 0.173278 5.60935C0.403087 5.37961 0.775606 5.37961 1.00542 5.60935L3.01455 7.61848L8.32987 2.30316C8.55968 2.07343 8.9322 2.07343 9.16201 2.30316C9.39174 2.53297 9.39174 2.90549 9.16201 3.1353L3.72075 8.57577C3.53357 8.76326 3.27948 8.86856 3.01455 8.86845Z"
          fill="white"
        />
      </svg>
    </span>

    <span class="ml-3 text-dark">{{ title }} <slot /></span>
  </label>
</template>

<script setup lang="ts">
import { computed, defineEmits } from "vue";

const props = defineProps<{
  id: string;
  title: string;
  value: string;
  modelValue: string;
}>();
const emit = defineEmits<{
  (e: "update:modelValue", v: string): void;
}>();

const localValue = computed<string>({
  get: () => props.modelValue,
  set: (v) => emit("update:modelValue", v),
});
</script>
