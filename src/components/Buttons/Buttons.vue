<template>
  <div class="buttons">
    <p><slot /></p>
    <div class="load-icon" v-if="isLoading">
      <Icons icon="svg-spinners:180-ring" />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  isLoading?: boolean;
}>();

const emit = defineEmits(["onClick"]);
</script>

<style scoped lang="scss"></style>
