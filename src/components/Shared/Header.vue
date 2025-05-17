<template>
  <header class="header">
    <div class="container mx-auto bg-black">
      <Logo />
      <MenuNav />
      <SearchInputs v-model="search" />
      <div class="actions">
        <RouterLink to="/">
          <img src="@/assets/img/like.svg" />
        </RouterLink>
        <RouterLink to="/">
          <img src="@/assets/img/bag.svg" />
        </RouterLink>
        <Buttons @click="nextAuth()">Войти</Buttons>
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

const search = ref<any>("");

const nextAuth = () => {};
</script>
