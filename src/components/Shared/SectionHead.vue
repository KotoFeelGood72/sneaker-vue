<template>
  <div class="section-head flex items-center justify-between gap-9">
    <h2 class="lg:text-40 text-22 text-dark font-semibold">{{ title }}</h2>
    <div class="section-head__button">
      <RouterLink
        v-if="buttonLink"
        :to="buttonLink"
        class="flex items-center gap-1 bg-light rounded-3xl px-5 py-[6px]"
      >
        <p class="lg:text-16 text-12">{{ buttonTitle }}</p>
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
