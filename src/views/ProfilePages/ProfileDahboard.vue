<template>
  <div class="container flex lg:gap-12 justify-between flex-wrap gap-5">
    <ProfileCard :user="userInfo" />
    <ProfileListMenu />
  </div>
</template>

<script setup lang="ts">
import ProfileCard from "@/components/Cards/ProfileCard.vue";
import ProfileListMenu from "@/components/list/ProfileListMenu.vue";

const userInfo = {
  firstname: "Дмитрий",
  lastname: "Соловьёв",
  tg: "d_solv2105",
  phone: "+7 (917) 459-5673",
  email: "d.solovyev@mail.ru",
};
</script>

<style scoped lang="scss"></style>
