<template>
  <div :class="['flex items-center  gap-4 w-full', `text-${card.color}`]">
    <div
      :class="[
        'icon lg:w-[72px] lg:h-[72px] flex items-center justify-center rounded-lg',
        card?.color === 'dark' ? 'bg-[#E0E0E0]' : 'bg-white',
      ]"
    >
      <Icons icon="icon-park-outline:telegram" :size="36" />
    </div>
    <div>
      <p class="lg:text-22 font-semibold">@{{ card.name }}</p>
      <p>{{ card.type }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  card: any;
}>();
</script>

<style scoped lang="scss"></style>
