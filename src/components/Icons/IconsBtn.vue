<template>
  <div class="icons-btn">
    <button type="button" @click="emit('onClick')">
      <Icons :icon="icon" />
    </button>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  icon: any;
}>();

const emit = defineEmits(["onClick"]);
</script>

<style scoped lang="scss"></style>
