<template>
  <div class="flex flex-col gap-16 relative">
    <div
      v-for="(step, index) in steps"
      :key="index"
      class="flex items-center gap-10 relative"
    >
      <div class="relative">
        <div class="relative z-10">
          <img
            :src="`/assets/icon/ui/stage-${index}-${
              index <= currentStage ? 'dark' : 'white'
            }.svg`"
            class="lg:w-[78px] lg:h-[78px]"
          />
        </div>
        <div
          v-if="index !== steps.length - 1"
          class="absolute left-1/2 -translate-x-1/2 top-full h-full w-1"
          :class="index < currentStage ? 'bg-black' : 'bg-light'"
        ></div>
      </div>
      <div>
        <p
          :class="[
            'font-semibold text-28',
            index === currentStage ? 'text-black' : 'opacity-40',
          ]"
        >
          {{ step }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  currentStage: number; // от 0 и выше
  steps: string[]; // массив шагов (4 или 5 или даже больше)
}>();
</script>
