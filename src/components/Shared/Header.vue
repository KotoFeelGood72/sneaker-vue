<template>
  <header class="header">
    <div class="container mx-auto flex justify-between items-center gap-8 py-4">
      <Logo />
      <MenuNav />
      <SearchInputs v-model="search" />
      <div class="actions flex items-center">
        <RouterLink to="/favorites">
          <img src="@/assets/img/like.svg" />
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

const search = ref<any>("");

const nextAuth = () => {};

const { openModal } = useModalStore();
</script>
