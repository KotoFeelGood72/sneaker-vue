<template>
  <RouterLink :to="`/news/${post.id}`" class="flex-col lg:gap-[10px] flex gap-1">
    <div class="flex items-center justify-center max-h-[510px]">
      <img :src="post.img" class="w-full h-full block" />
    </div>
    <div class="flex flex-col lg:gap-[10px] gap-2">
      <div class="flex items-center justify-between opacity-40">
        <div class="lg:text-16 text-10">{{ post.date }}</div>
        <div class="flex items-center lg:gap-0 gap-1">
          <div class="icon">
            <Icons
              icon="carbon:view-filled"
              :size="16"
              class="lg:w-4 lg:h-4 w-[10px] h-[10px] flex items-center justify-center"
            />
          </div>
          <p class="lg:text-16 text-10">{{ post.view }}</p>
        </div>
      </div>
      <h3 class="lg:text-26 font-semibold text-dark text-[13px]">{{ post.title }}</h3>
      <div class="lg:text-16 text-10">{{ post.description }}</div>
    </div>
  </RouterLink>
</template>

<script setup lang="ts">
defineProps<{
  post: any;
}>();
</script>

<style scoped lang="scss"></style>
