<template>
  <header class="header">
    <div
      class="container mx-auto flex lg:justify-between items-center lg:gap-8 gap-5 py-4"
    >
      <div class="burger lg:hidden w-6 h-4 min-w-6 relative">
        <span class="w-full h-[2px] bg-dark absolute top-0 left-0 rounded-lg"></span>
        <span
          class="w-full h-[2px] bg-dark absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 rounded-lg"
        ></span>
        <span class="w-full h-[2px] bg-dark absolute bottom-0 left-0 rounded-lg"></span>
      </div>
      <Logo />
      <MenuNav class="lg:flex hidden" />
      <SearchInputs v-model="search" class="lg:flex hidden" />
      <div
        class="actions flex items-center w-full lg:w-auto flex-grow lg:flex-grow-0 justify-end"
      >
        <div class="flex items-center justify-center lg:hidden w-10 h-10">
          <Icons icon="iconamoon:search-thin" :size="22" />
        </div>
        <RouterLink to="/favorites" class="hidden lg:flex">
          <img src="@/assets/img/like.svg" />
        </RouterLink>
        <RouterLink to="/shop/cart">
          <img src="@/assets/img/bag.svg" />
        </RouterLink>
        <Buttons variant="outline" size="small" @click="handleAuthClick">{{
          isUserLoggedIn ? "Выйти" : "Войти"
        }}</Buttons>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import Logo from "./Logo.vue";
import MenuNav from "./MenuNav.vue";
import SearchInputs from "../Inputs/SearchInputs.vue";
import { computed, ref } from "vue";
import Buttons from "../Buttons/Buttons.vue";
import { useModalStore } from "@/stores/useModalStore";
import { useAuthStore, useAuthStoreRefs } from "@/stores/useAuthStore";
import { useRouter } from "vue-router";

const search = ref<any>("");
const { user } = useAuthStoreRefs();
const router = useRouter();
const { openModal } = useModalStore();

const isUserLoggedIn = computed(() => {
  return !!user.value;
});

const handleAuthClick = () => {
  if (isUserLoggedIn.value) {
    router.push("/profile/dashboard");
  } else {
    openModal("auth");
  }
};
</script>
