<template>
  <div class="section-head flex items-center justify-between gap-9">
    <h2 class="text-22 md:text-28 lg:text-40 text-dark font-semibold ">{{ title }}</h2>
    <div class="section-head__button">
      <RouterLink
        v-if="buttonLink"
        :to="buttonLink"
        class="flex items-center gap-1 bg-light rounded-3xl px-4 lg:px-5 py-[6px]"
      >
        <p class="text-12 md:text-14 lg:text-16">{{ buttonTitle }}</p>
        <div class="flex items-center justify-center -mb-1">
          <Icons icon="meteor-icons:chevron-right" :size="12" />
        </div>
      </RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string;
  buttonTitle?: string;
  buttonLink?: string;
}>();
</script>

<style scoped lang="scss"></style>
