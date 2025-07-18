<template>
  <div class="container flex lg:gap-[100px] flex-wrap gap-5">
    <div class="lg:space-y-10 space-y-5 max-w-[754px]">
      <div class="max-lg:space-y-3">
        <h3 class="lg:text-26 font-semibold text-18">Доход</h3>
        <p class="lg:text-54 font-semibold text-32">0 р.</p>
      </div>
      <div class="lg:space-y-6 space-y-3">
        <div class="lg:text-26 text-18 font-semibold">Статистика</div>
        <div class="grid grid-cols-4 lg:gap-4 gap-[6px]">
          <div
            v-for="(item, i) in stats"
            :key="'stats-item-' + i"
            class="border border-black/10 rounded-lg lg:space-y-2 lg:p-6 p-2"
          >
            <div class="lg:text-54 font-semibold text-28">{{ item.num }}</div>
            <div class="lg:text-20 opacity-40 text-10">{{ item.label }}</div>
          </div>
        </div>
      </div>
      <div class="lg:space-y-6 space-y-3">
        <p class="lg:text-26 font-semibold text-18">
          Получай доход по реферальная ссылке
        </p>
        <div class="lg:text-20 text-10">
          Создавай и публикуй партнерскую ссылку. Ты получишь 5% от каждой покупки
          клиента. Доход за покупку начисляется через 14 дней после вручения товара.
        </div>
        <div
          class="btn lg:px-5 lg:py-3 py-2 px-4 rounded-md border border-dark inline-flex lg:text-18 font-semibold cursor-pointer transition-all hover:bg-dark hover:text-white"
          @click="openModal('createLink')"
        >
          Создать новую ссылку +
        </div>
      </div>
      <div>
        <table class="hidden lg:table w-full border border-black/10 table-auto">
          <thead>
            <tr>
              <th
                v-for="(item, i) in tableHeaders"
                :key="'thead-' + i"
                class="bg-black/5"
              >
                <div
                  class="flex items-center gap-2 lg:py-2 lg:px-[10px] text-14 font-normal"
                >
                  <img v-if="item.icon" :src="`/assets/icon/ui/${item.icon}.svg`" />
                  <span>{{ item.label }}</span>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td
                v-for="(item, i) in tableData"
                :key="'row-' + i"
                class="lg:text-18 font-medium"
              >
                <div
                  class="flex items-center gap-2 p-2 text-left cursor-pointer"
                  v-if="item.icon"
                >
                  <img :src="`/assets/icon/ui/${item.icon}.svg`" />
                  <div>{{ item.value }}</div>
                </div>
                <div v-else class="text-left p-2">{{ item.value }}</div>
              </td>
            </tr>
          </tbody>
        </table>

        <!-- Вертикальная таблица (для мобильных) -->
        <table class="table lg:hidden w-full border border-black/10 table-fixed">
          <tbody>
            <tr
              v-for="(item, i) in tableData"
              :key="'mobile-row-' + i"
              class="border-b border-black/10"
            >
              <th class="text-left p-2 bg-black/5 font-normal text-12">
                <div class="p-[10px]">
                  <div class="flex items-center gap-2">
                    <img
                      v-if="item.iconLabel"
                      :src="`/assets/icon/ui/${item.iconLabel}.svg`"
                    />
                    <span>{{ item.label }}</span>
                  </div>
                </div>
              </th>
              <td>
                <div class="p-2 text-left text-18 font-medium">
                  <div class="flex items-center gap-2" v-if="item.icon">
                    <img :src="`/assets/icon/ui/${item.icon}.svg`" />
                    <span>{{ item.value }}</span>
                  </div>
                  <span v-else>{{ item.value }}</span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <ProfileListMenu />
  </div>
</template>

<script setup lang="ts">
import ProfileListMenu from "@/components/list/ProfileListMenu.vue";
import { useModalStore } from "@/stores/useModalStore";

const { openModal } = useModalStore();

const stats = [
  { num: "0", label: "Переходов" },
  { num: "0", label: "Клиентов" },
  { num: "0", label: "Заказов" },
  { num: "0 %", label: "CR (средний)" },
];

const tableHeaders = [
  { label: "Название ссылки" },
  { label: "Ссылка" },
  { label: "Переходов" },
  { label: "Клиентов" },
  { label: "Заказов" },
  { label: "CR", icon: "answer" },
  { label: "Доход" },
];

const tableData = [
  { label: "Название ссылки", value: "ссылочка" },
  { label: "Ссылка", value: "1Y25Tc", icon: "copy" },
  { label: "Переходов", value: "0" },
  { label: "Клиентов", value: "0" },
  { label: "Заказов", value: "0" },
  { label: "CR", value: "0 %", iconLabel: "answer" },
  { label: "Доход", value: "0 р." },
];
</script>

<style scoped>
table,
thead {
  border-spacing: 1;
}

th,
thead,
td {
  border: 1px solid rgba(0, 0, 0, 0.1);
  margin: 0;
  text-align: center;
  vertical-align: middle;
  padding: 0;
}
</style>
