<template>


    <button class="burger lg:hidden"
            :class="{ 'active': isMenuOpen }"
            @click="toggleMenu"
    >
        <span></span>
    </button>

    <!-- Выпадающее меню -->

    <div class="lg:hidden bg-white fixed left-0 right-0 z-40 h-screen px-4 py-2 top-16 overflow-hidden transition-all duration-300"
         :class="isMenuOpen ? 'max-h-full py-2' : 'max-h-0 py-0'">
      <div class="container mx-auto px-11 flex flex-col space-y-3 text-20 gap-2">
        <RouterLink
            v-for="(item, i) in MenuNavList"
            :to="item.link"
            :key="'menu-nav-item-' + i"
            @click="closeMenu"
        >{{ item.title }}
        </RouterLink>

        <div class="bg-gray h-px w-full !mt-4"></div>
        <div class="gap-6 flex flex-col">
          <div class="flex gap-3 items-center">
            <a href="#">Избранное</a>
            <img src="@/assets/img/like.svg"/>
          </div>
          <PoizonButton/>
        </div>
      </div>
    </div>


</template>

<script setup lang="ts">
import PoizonButton from "@/components/Buttons/PoizonButton.vue";

const MenuNavList = [
  {title: "Обувь", link: "/shop/shoes"},
  {title: "Одежда", link: "/shop/clothes"},
  {title: "Аксессуары", link: "/shop/accessories"},
  {title: "Отзывы", link: "/reviews"},
  {title: "Доставка и оплата", link: "/payments"},
  {title: "Блог", link: "/news"},
  {title: "Контакты", link: "/contacts"},
];


import {ref} from 'vue';

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
  document.body.style.overflow = isMenuOpen.value ? 'hidden' : '';
};

// Закрытие меню
const closeMenu = () => {
  isMenuOpen.value = false;
  document.body.style.overflow = '';
};

</script>

<style scoped>
.burger {
  width: 32px;
  height: 24px;
  cursor: pointer;
  right: 2rem;
  top: 2rem;
  z-index: 20;
}

.burger span {
  width: 100%;
  height: 2px;
  background-color: black;
  border-radius: 100px;
  display: block;
  transition: background-color 0.5s ease-in-out;
}

.burger span::before,
.burger span::after {
  content: "";
  width: 100%;
  background-color: black;
  display: block;
  transition: all 0.5s ease-in-out;
  border-radius: 100px;
  height: 2px;
}

.burger span::before {
  transform: translateY(-10px);

}

.burger span::after {
  transform: translateY(10px);
  margin-top: -2px;
}


.burger.active span {
  background-color: transparent;
}

.burger.active span::before {
  transform: rotateZ(45deg) translateY(0);
}

.burger.active span::after {
  transform: rotateZ(-45deg) translateY(0);
}
</style>
