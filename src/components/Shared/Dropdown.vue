<template>
  <div ref="dropdownRef" class="relative w-full">
    <div
      @click="toggle"
      class="flex items-center justify-start bg-gray-100 rounded cursor-pointer select-none gap-2"
    >
      <div class="icon">
        <Icons :icon="isOpen ? 'iconoir:minus' : 'iconoir:plus'" />
      </div>
      <span class="text-16 font-semibold text-dark">{{ title }}</span>
    </div>
    <div v-if="isOpen" class="w-full pt-4" @click.stop>
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";

const props = defineProps<{ title: string }>();
const isOpen = ref(false);
const dropdownRef = ref<HTMLElement | null>(null);

function toggle() {
  isOpen.value = !isOpen.value;
}

function onClickOutside(e: MouseEvent) {
  const path = e.composedPath();
  if (!dropdownRef.value || !path.includes(dropdownRef.value)) {
    isOpen.value = false;
  }
}

onMounted(() => {
  document.addEventListener("click", onClickOutside);
});
onBeforeUnmount(() => {
  document.removeEventListener("click", onClickOutside);
});
</script>
