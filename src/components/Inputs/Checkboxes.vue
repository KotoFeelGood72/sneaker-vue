<template>
  <div class="max-h-[470px] overflow-y-auto pr-2 flex flex-col gap-4 user-select-none">
    <div v-for="[letter, items] in groups" :key="letter" class="flex flex-col gap-4">
      <div class="text-16 font-semibold text-dark">
        {{ letter }}
      </div>
      <div class="space-y-2">
        <div
          v-for="item in items"
          :key="item.name"
          class="flex items-center justify-between"
        >
          <Checkbox
            :id="getId(item.name)"
            :title="item.name"
            :value="item.name"
            :modelValue="selected.includes(item.name) ? item.name : ''"
            @update:modelValue="(val) => onCheckboxChange(item.name, val)"
            :class="item.count != 0 ? '' : 'opacity-50 pointer-events-none'"
          >
            <span class="text-dark opacity-50" v-if="item.count > 0"
              >({{ item.count }})</span
            >
          </Checkbox>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import Checkbox from "./Checkbox.vue";

const props = defineProps<{
  brands: { name: string; count: number }[];
  modelValue: string[];
}>();

const emit = defineEmits<{
  (e: "update:modelValue", v: string[]): void;
}>();

// реактивный v-model
const selected = computed<string[]>({
  get: () => props.modelValue,
  set: (v) => emit("update:modelValue", v),
});

// при клике на чекбокс — обновляем массив
function onCheckboxChange(name: string, newVal: string) {
  const arr = [...selected.value];
  if (newVal) {
    if (!arr.includes(name)) arr.push(name);
  } else {
    const i = arr.indexOf(name);
    if (i !== -1) arr.splice(i, 1);
  }
  selected.value = arr;
}

// группируем бренды по первой букве
const groups = computed<[string, typeof props.brands][]>(() => {
  const map: Record<string, typeof props.brands> = {};
  for (const b of props.brands) {
    const L = b.name.charAt(0).toUpperCase();
    (map[L] ||= []).push(b);
  }
  Object.values(map).forEach((arr) => arr.sort((a, b) => a.name.localeCompare(b.name)));
  return Object.entries(map).sort(([a], [b]) => a.localeCompare(b));
});

// из любого имени делаем валидный id
function getId(name: string) {
  return (
    "brand-" +
    name
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9\-]/g, "")
  );
}
</script>
