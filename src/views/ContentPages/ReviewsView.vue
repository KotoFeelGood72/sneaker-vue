<template>
  <div class="container">
    <h1 class="lg:text-40 font-semibold lg:mb-3 text-22 max-lg:text-center mb-0">
      Отзывы от покупателей sneakerteam.ru
    </h1>
    <div
      class="flex items-center lg:justify-between justify-center max-lg:text-center lg:gap-10 gap-4 custom-container lg:mb-[60px] mb-5 flex-wrap"
    >
      <p class="lg:text-24 font-semibold text-18">
        Почитать все отзывы и оставить свой можно в отдельном Telegram канале по ссылке:
      </p>
      <div
        class="btn lg:py-5 lg:px-10 py-4 px-5 max-lg:w-full justify-center bg-dark text-white lg:text-18 flex items-center lg:gap-6 gap-4 font-semibold rounded-md cursor-pointer text-12"
      >
        <p class="">Читать отзывы</p>
        <img
          src="/assets/icon/ui/tg-btn.svg"
          class="flex items-center justify-center max-lg:w-4 max-lg:h-4"
        />
      </div>
    </div>
    <div class="relative">
      <swiper
        class="custom-container max-lg:w-[87%]"
        :modules="[Navigation]"
        :navigation="{ nextEl: '.next', prevEl: '.prev-gallery' }"
        :loop="true"
        :breakpoints="{
          0: { slidesPerView: 2, spaceBetween: 17 },
          640: { slidesPerView: 2, spaceBetween: 17 },
          1024: { slidesPerView: 4, spaceBetween: 44 },
        }"
        @slideChange="onSlideChange"
        ref="swiperRef"
      >
        <swiper-slide
          v-for="(item, i) in 6"
          :key="'reviews-item-' + i"
          class="reviews_slide"
          :class="{
            'swiper-slide-active': i === activeIndex,
            'swiper-slide-next': i === (activeIndex + 1) % totalSlides,
            'is-after-next': i === (activeIndex + 2) % totalSlides,
          }"
        >
          <div>
            <img :src="`/assets/img/reviews/rev${i}.png`" />
          </div>
        </swiper-slide>
      </swiper>
      <div
        class="next lg:w-[62px] lg:h-[62px] w-[30px] h-[30px] top-[45%] translate-y-1/2 absolute lg:right-10 bg-light flex items-center justify-center rounded-full cursor-pointer right-0"
      >
        <Icons
          icon="meteor-icons:chevron-right"
          class="lg:w-[34px] lg:h-[34px] w-4 h-4"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper/modules";
import "swiper/css";
import { ref } from "vue";
import type { Swiper as SwiperType } from "swiper";
const swiperRef = ref();
const activeIndex = ref(0);
const totalSlides = 6;

function onSlideChange(swiper: any) {
  if (swiper) {
    activeIndex.value = swiper.realIndex;
  }
}
</script>

<style scoped>
.reviews_slide {
  width: 298px;
  transition: transform 0.3s ease;
}

.is-after-next,
.swiper-slide-next {
  transform: scale(1.07) translateY(-20px);
  z-index: 2;
}

.custom-container {
  padding-top: 48px;
  max-width: 1367px;
  margin-left: 0;
}

@media (max-width: 767px) {
  .is-after-next,
  .swiper-slide-next {
    transform: scale(1.07) translateY(-10px);
    z-index: 2;
  }
}
</style>
