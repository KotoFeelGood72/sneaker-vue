<template>
  <RouterLink :to="`/news/${post.id}`" class="flex-col gap-[10px] flex">
    <div class="flex items-center justify-center max-h-[510px]">
      <img :src="post.img" class="w-full h-full block" />
    </div>
    <div class="flex flex-col gap-[10px]">
      <div class="flex items-center justify-between opacity-40">
        <div>{{ post.date }}</div>
        <div class="flex items-center">
          <div class="icon">
            <Icons icon="carbon:view-filled" :size="16" />
          </div>
          <p>{{ post.view }}</p>
        </div>
      </div>
      <h3 class="lg:text-26 font-semibold text-dark">{{ post.title }}</h3>
      <div>{{ post.description }}</div>
    </div>
  </RouterLink>
</template>

<script setup lang="ts">
defineProps<{
  post: any;
}>();
</script>

<style scoped lang="scss"></style>
