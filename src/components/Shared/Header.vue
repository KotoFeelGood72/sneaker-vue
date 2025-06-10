<template>
  <header class="header">
    <div class="container mx-auto flex justify-between items-center gap-5 lg:gap-8 py-4">
      <div class="flex items-center gap-5">
        <MenuBurger />
        <Logo />
      </div>
      <MenuNav />
      <SearchInputs v-model="search" class="hidden lg:block"/>
      <div class="actions flex items-center gap-5 lg:gap-0">
        <RouterLink to="/favorites" class="hidden lg:block">
          <img src="@/assets/img/like.svg" />
        </RouterLink>
        <RouterLink to="/" class="block lg:hidden">
          <Icons icon="iconamoon:search-thin" :size="20" />
        </RouterLink>
        <RouterLink to="/">
          <img src="@/assets/img/bag.svg" />
        </RouterLink>
        <Buttons variant="outline" size="small" @click="openModal('auth')">Войти</Buttons>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import Logo from "./Logo.vue";
import MenuNav from "./MenuNav.vue";
import SearchInputs from "../Inputs/SearchInputs.vue";
import { ref } from "vue";
import Buttons from "../Buttons/Buttons.vue";
import { useModalStore } from "@/stores/useModalStore";
import MenuBurger from "@/components/Shared/MenuBurger.vue";

const search = ref<any>("");

const nextAuth = () => {};

const { openModal } = useModalStore();
</script>
