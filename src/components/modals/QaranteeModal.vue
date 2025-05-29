<template>
  <div
    class="qarantee-modal fixed top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] z-[11] bg-white rounded-[20px] p-[50px] flex flex-col gap-10"
  >
    <div
      class="close_modal absolute lg:w-[100px] lg:h-[100px] flex items-center justify-center cursor-pointer left-[100%] top-0"
      @click="closeModal('qarantee')"
    >
      <img src="@/assets/icons/close.svg" />
    </div>

    <div>
      <h3 class="text-26 text-dark text-center font-semibold">
        Гарантия на оригинальность
      </h3>
    </div>
    <div class="flex flex-col gap-10">
      <p>
        Мы гарантируем оригинальность товаров, заказанных через наш сервис, и сейчас
        расскажем, почему вы можете быть уверены в этом.
      </p>
      <ul class="list-disc pl-5">
        <li>
          <span class="font-semibold">Проверенный поставщик.</span> Для начала стоит
          сказать, что мы делаем выкуп товаров исключительно через проверенный временем
          маркетплейс Poizon, который зарекомендовал себя как надежный поставщик
          оригинальных товаров.
        </li>
        <li>
          <span class="font-semibold">Контроль на каждом этапе.</span> Мы не доверяем
          выкуп товаров посредникам, так как считаем этот процесс одним из самых
          ответственных. Поэтому процесс выкупа мы осуществляем самостоятельно, чтобы
          гарантировать подлинность каждой покупки.
        </li>
        <li>
          <span class="font-semibold">Индивидуальный подход.</span> К каждому выкупленному
          товару мы прикладываем отчёт, который подтверждает, что товар был приобретён
          именно под ваш индивидуальный запрос.
        </li>
      </ul>
      <div class="border border-[#00000066] rounded-lg p-5 flex gap-6 items-start">
        <div class="info_icon flex items-center justify-center min-w-[50px]">
          <img src="@/assets/icons/info.svg" />
        </div>
        <div>
          Если товар не проходит любой из этапов проверки — он не попадает в наш
          ассортимент. Мы гарантируем, покупая у нас, ты получишь 100% оригинальную вещь.
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useModalStore } from "@/stores/useModalStore";

const { closeModal } = useModalStore();
</script>

<style scoped lang="scss"></style>
