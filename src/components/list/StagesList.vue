<template>
  <div class="flex flex-col lg:gap-16 gap-[73px] relative">
    <div
      v-for="(step, index) in steps"
      :key="index"
      class="flex items-center lg:gap-10 gap-3 relative"
    >
      <div class="relative">
        <div class="relative z-10">
          <img
            :src="`/assets/icon/ui/stage-${index}-${
              index <= currentStage ? 'dark' : 'white'
            }.svg`"
            class="lg:w-[78px] lg:h-[78px] h-10 w-10"
          />
        </div>
        <div
          v-if="index !== steps.length - 1"
          class="absolute left-1/2 -translate-x-1/2 top-full h-full lg:w-1 w-[2px] max-lg:min-h-[100px]"
          :class="index < currentStage ? 'bg-black' : 'bg-light'"
        ></div>
      </div>
      <div>
        <p
          :class="[
            'font-semibold lg:text-28 text-12',
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
