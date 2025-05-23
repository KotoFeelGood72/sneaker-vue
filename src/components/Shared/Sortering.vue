<template>
  <div class="relative inline-block text-left">
    <button
      class="bg-light text-dark text-16 px-3 py-[7px] rounded-[4px] flex items-center justify-between gap-2"
      @click="isOpen = !isOpen"
    >
      Сортировка
      <div :class="[isOpen ? 'rotate-180' : '', 'flex items-center justify-center']">
        <Icons icon="fluent:chevron-down-20-regular" :size="18" />
      </div>
    </button>

    <div
      v-if="isOpen"
      class="absolute z-10 mt-2 w-56 bg-white rounded-[4px] border border-borderGray px-3 py-2"
    >
      <ul class="flex flex-col">
        <li
          v-for="option in options"
          :key="option.value"
          @click="selectOption(option.value)"
          class="flex items-center hover:bg-gray-100 cursor-pointer border-b border-borderGray py-2 last:border-b-0"
        >
          <input
            type="radio"
            :value="option.value"
            v-model="selected"
            :id="option.value"
            class="mr-2 peer hidden"
          />
          <label
            :for="option.value"
            class="flex items-center justify-between w-full cursor-pointer"
          >
            <p>{{ option.label }}</p>
            <div
              class="icon w-4 h-4 rounded-full border border-dark relative flex items-center justify-center"
            >
              <div
                :class="[
                  'circle w-[10px] h-[10px] rounded-full bg-dark opacity-0',
                  selected === option.value ? 'opacity-100' : '',
                ]"
              ></div>
            </div>
          </label>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";

const isOpen = ref(false);

const selected = ref("default");

const options = [
  { label: "По умолчанию", value: "default" },
  { label: "Сначала новые", value: "newest" },
  { label: "По возрастанию цены", value: "price-asc" },
  { label: "По убыванию цены", value: "price-desc" },
];

function selectOption(value: string) {
  selected.value = value;
  isOpen.value = false;
}

// Для родительского компонента (emit, если нужно)
watch(selected, (newValue) => {
  console.log("Сортировка изменена на:", newValue);
  // emit('sort-changed', newValue)
});
</script>

<style scoped>
/* Необязательно: иконка стрелки может быть сделана и через ::after */
</style>
