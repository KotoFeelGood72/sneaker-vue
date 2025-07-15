<template>
  <div :class="['flex items-center  gap-4 w-full', `text-${card.color}`]">
    <div
      :class="[
        'icon lg:w-[72px] lg:h-[72px] w-11 h-11 flex items-center justify-center rounded-lg',
        card?.color === 'dark' ? 'bg-[#E0E0E0]' : 'bg-white',
      ]"
    >
      <Icons
        icon="icon-park-outline:telegram"
        :size="36"
        class="lg:w-9 lg:h-9 flex items-center justify-center w-5 h-5"
      />
    </div>
    <div>
      <p class="lg:text-22 font-semibold text-18">@{{ card.name }}</p>
      <p class="max-lg:text-12">{{ card.type }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  card: any;
}>();
</script>

<style scoped lang="scss"></style>
