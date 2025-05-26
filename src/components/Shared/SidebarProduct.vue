<template>
  <div class="flex-grow p-6 bg-light rounded-[20px] gap-7 flex flex-col">
    <div class="link_review flex items-center gap-2 cursor-pointer">
      <Icons icon="ei:star" :size="24" class="-mb-[2px]" />
      <p class="text-20 text-dark opacity-60">Оставить отзыв</p>
    </div>
    <h3 class="text-26 text-dark font-semibold">New Balance</h3>
    <div class="flex items-center gap-4">
      <p class="text-dark text-28 font-semibold">6 800 р.</p>
      <div class="bg-[#DEDEDE] p-[10px] rounded-md flex items-center gap-[10px]">
        <div class="icon"><img src="/assets/img/s.png" /></div>
        <p class="text-14 text-dark">+500 за покупку</p>
      </div>
    </div>
    <Tabs :tabs="['EU', 'RU', 'US', 'UK', 'MM']" class="mb-[30px]">
      <template #default="{ activeIndex }">
        <div v-if="activeIndex === 0">
          <ButtonSizeList @update:size="onSizeSelected" />
        </div>
        <div v-if="activeIndex === 1">1</div>
        <div v-if="activeIndex === 2">2</div>
        <div v-if="activeIndex === 3">3</div>
        <div v-if="activeIndex === 4">4</div>
      </template>
    </Tabs>
    <div class="text-20 opacity-60">Как выбрать размер?</div>
    <div class="divider bg-[#E8E8E8] h-[1px]"></div>
    <div class="text-26 font-semibold">Доставка</div>
    <DeliveryCard
      :delivery="{
        datetime: '25–30 дней',
        price: '6 800',
        txt: 'Доставим до Москвы за 25–30 дней, по России — чуть дольше',
      }"
      :selected="false"
    />

    <DeliveryCard
      :delivery="{
        datetime: '~13–15 дней',
        price: '9 800',
        txt: 'Экспресс-доставка в Москву ~13–15 дней, по России — чуть дольше',
      }"
      :selected="true"
    />
  </div>
</template>

<script setup lang="ts">
import Tabs from "./Tabs.vue";
import ButtonSizeList from "./ButtonSizeList.vue";
import DeliveryCard from "../Cards/DeliveryCard.vue";

function onSizeSelected(size: string) {
  console.log("Выбран размер:", size);
}
</script>

<style scoped lang="scss"></style>
