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
