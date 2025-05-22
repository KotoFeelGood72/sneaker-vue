<template>
  <nav
    class="breadcrumbs flex items-center text-sm text-gray-600"
    aria-label="Breadcrumb"
  >
    <ol class="flex items-center space-x-2">
      <li v-for="(item, index) in items" :key="index" class="flex items-center">
        <template v-if="item.to && index < items.length - 1">
          <RouterLink :to="item.to" class="hover:underline">
            {{ item.label }}
          </RouterLink>
        </template>
        <template v-else>
          <span class="font-semibold">
            {{ item.label }}
          </span>
        </template>
        <span v-if="index < items.length - 1" class="mx-2"> / </span>
      </li>
    </ol>
  </nav>
</template>

<script setup lang="ts">
import { useRoute, RouterLink } from "vue-router";
import { computed } from "vue";

type Crumb = { label: string; to?: string };

const route = useRoute();

const items = computed<Crumb[]>(() => {
  const crumbs: Crumb[] = [];
  // всегда первая ссылка — Главная
  crumbs.push({ label: "Главная", to: "/" });

  // по всем совпавшим записям маршрута берём meta.title
  route.matched.forEach((record) => {
    const title = record.meta.title as string | undefined;
    if (title) {
      // не добавляем дубликат корня
      if (record.path !== "/") {
        crumbs.push({ label: title, to: record.path });
      }
    }
  });

  // последний элемент не будет ссылкой, но to остаётся для шаблона
  return crumbs;
});
</script>
