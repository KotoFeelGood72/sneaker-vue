<template>
  <div class="container">
    <h1 class="lg:text-40 font-semibold text-dark lg:mb-[60px]">
      Как правильно подобрать размер?
    </h1>
    <div class="flex flex-col gap-6 mb-6">
      <div>
        <h3 class="lg:text-26 font-semibold text-dark lg:mb-6">Что понадобится?</h3>
        <ul>
          <li>1. Линейка/рулетка/метр</li>
          <li>2. Родная стелька от самых удобных ваших кроссовок/обуви</li>
        </ul>
      </div>
      <div>
        <h3 class="lg:text-26 font-semibold text-dark lg:mb-6">Что делать?</h3>
        <ul>
          <li>1. Высуньте из ваших кроссовок стельку</li>
          <li>
            2. Измерьте линейкой стельку таким образом, как показано на изображении:
          </li>
        </ul>
      </div>
    </div>
    <div class="flex items-center justify-center max-h-[853px] mb-6">
      <img src="/assets/img/size/1.png" />
    </div>
    <div class="flex items-center justify-center max-h-[853px] mb-6">
      <img src="/assets/img/size/2.png" />
    </div>
    <div class="lg:text-20 lg:mb-[60px] text-dark">
      Все! Теперь вы знаете нужную Вам длину, а значит, с наибольшей точностью можете
      подобрать себе размер обуви! В каждой карточке товара есть размерная сетка EU, RU,
      UK, US, MM. Обозначение MM – это как раз длина стельки конкретной модели,
      ориентируйтесь по этому показателю.
    </div>
    <SizeSelector />
  </div>
</template>

<script setup lang="ts">
import SizeSelector from "@/components/Shared/SizeSelector.vue";
</script>

<style scoped lang="scss"></style>
