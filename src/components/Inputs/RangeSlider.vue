<template>
  <div class="range-slider w-full select-none flex items-center relative gap-3">
    <span
      class="flex w-[107px] bg-light rounded-full px-4 py-1 text-12 text-dark items-center justify-center"
      >От {{ internalValue[0] }} р.</span
    >
    <div
      ref="slider"
      class="slider-wrapper relative h-3 bg-gray rounded-full w-[170px] px-2.5"
      @click.self="onTrackClick($event)"
    >
      <div
        class="range absolute h-3 bg-dark rounded-full"
        :style="{
          left: leftPercent + '%',
          width: activeWidth + '%',
        }"
      ></div>

      <div
        class="thumb absolute top-[50%] -translate-y-[50%] w-5 h-5 rounded-full bg-dark cursor-pointer transform -translate-x-1/2 focus:outline-none focus:ring-2 focus:ring-light active:ring-2 active:ring-light before:content-[''] before:-translate-x-[50%] before:-translate-y-[50%] before:absolute before:top-[50%] before:left-[50%] before:w-6 before:h-6 before:bg-stone-900 before:rounded-full before:z-[-1] before:opacity-40"
        :style="{ left: leftPercent + '%' }"
        @mousedown.prevent="startDrag('min')"
      />
      <div
        class="thumb absolute top-[50%] -translate-y-[50%] w-5 h-5 rounded-full bg-dark cursor-pointer transform -translate-x-1/2 focus:outline-none focus:ring-2 focus:ring-light active:ring-2 active:ring-light before:content-[''] before:-translate-x-[50%] before:-translate-y-[50%] before:absolute before:top-[50%] before:left-[50%] before:w-6 before:h-6 before:bg-stone-900 before:rounded-full before:z-[-1] before:opacity-40"
        :style="{ left: rightPercent + '%' }"
        @mousedown.prevent="startDrag('max')"
      ></div>
    </div>
    <span
      class="flex w-[107px] bg-light rounded-full px-4 py-1 text-12 text-dark items-center justify-center"
      >От {{ internalValue[1] }} р.</span
    >
  </div>
</template>

<script setup lang="ts">
import { ref, watch, computed, onMounted, onBeforeUnmount } from "vue";

type Props = {
  min: number;
  max: number;
  step?: number;
  modelValue: [number, number];
};
const props = defineProps<Props>();
const emit = defineEmits<{
  (e: "update:modelValue", value: [number, number]): void;
}>();

const slider = ref<HTMLElement | null>(null);
const internalValue = ref<[number, number]>([...props.modelValue]);
const dragging = ref<"min" | "max" | null>(null);

watch(
  () => props.modelValue,
  (val) => (internalValue.value = [...val])
);

function updateValueFromPosition(pageX: number) {
  if (!slider.value || !dragging.value) return;
  const { left, width } = slider.value.getBoundingClientRect();
  let percent = ((pageX - left) / width) * 100;
  percent = Math.min(Math.max(percent, 0), 100);
  const rawValue = props.min + ((props.max - props.min) * percent) / 100;
  const step = props.step ?? 1;
  let stepped: number;

  if (dragging.value === "min") {
    stepped = Math.floor((rawValue - props.min) / step) * step + props.min;
    const maxAllowed = internalValue.value[1] - step;
    const newMin = Math.min(Math.max(stepped, props.min), maxAllowed);
    if (newMin !== internalValue.value[0]) {
      internalValue.value[0] = newMin;
      emit("update:modelValue", [newMin, internalValue.value[1]]);
    }
  } else {
    stepped = Math.ceil((rawValue - props.min) / step) * step + props.min;
    const minAllowed = internalValue.value[0] + step;
    const newMax = Math.max(Math.min(stepped, props.max), minAllowed);
    if (newMax !== internalValue.value[1]) {
      internalValue.value[1] = newMax;
      emit("update:modelValue", [internalValue.value[0], newMax]);
    }
  }
}

function onMouseMove(event: MouseEvent) {
  if (dragging.value) updateValueFromPosition(event.pageX);
}

function onMouseUp() {
  dragging.value = null;
}

function startDrag(type: "min" | "max") {
  dragging.value = type;
}

function onTrackClick(event: MouseEvent) {
  if (!slider.value) return;
  const { left, width } = slider.value.getBoundingClientRect();
  let clickPercent = ((event.pageX - left) / width) * 100;
  clickPercent = Math.min(Math.max(clickPercent, 0), 100);
  const distMin = Math.abs(clickPercent - leftPercent);
  const distMax = Math.abs(clickPercent - rightPercent);
  dragging.value = distMin < distMax ? "min" : "max";
  updateValueFromPosition(event.pageX);
  dragging.value = null;
}

const leftPercent: any = computed(() => {
  const p = ((internalValue.value[0] - props.min) / (props.max - props.min)) * 100;
  return Math.min(Math.max(p, 0), 100);
});

const rightPercent: any = computed(() => {
  const p = ((internalValue.value[1] - props.min) / (props.max - props.min)) * 100;
  return Math.min(Math.max(p, 0), 100);
});

const activeWidth = computed(() => rightPercent.value - leftPercent.value);

onMounted(() => {
  window.addEventListener("mousemove", onMouseMove);
  window.addEventListener("mouseup", onMouseUp);
});

onBeforeUnmount(() => {
  window.removeEventListener("mousemove", onMouseMove);
  window.removeEventListener("mouseup", onMouseUp);
});
</script>
