// src/stores/useProductStore.ts
import { defineStore, storeToRefs } from "pinia";
import { api } from "@/api/api";

export const useProductStore = defineStore("products", {
  state: () => ({
    products: [] as any[],
    loading: false,
    page: 1,
    pageSize: 100,
    count: 0,
    next: null as string | null,
    previous: null as string | null,
    lastFilters: {} as Record<string, any>,
  }),

  getters: {
    hasNext: (s) => Boolean(s.next),
    hasPrev: (s) => Boolean(s.previous),
    totalPages: (s) => Math.ceil(s.count / s.pageSize),
  },

  actions: {
    async fetchProducts(
      filters: Record<string, any> = {},
      page = 1,
      append = false
    ) {
      this.loading = true;
      try {
        const params = {
          ...filters,
          page,
        };

        const { data } = await api.get<any>("/products/", { params });

        this.count = data.count;
        this.next = data.next;
        this.previous = data.previous;
        this.page = page;
        this.lastFilters = { ...filters };

        this.products = append
          ? [...this.products, ...data.results]
          : data.results;
      } finally {
        this.loading = false;
      }
    },

    goTo(page: number) {
      return this.fetchProducts(this.lastFilters, page, false);
    },

    async loadNext() {
      if (!this.hasNext) return;
      await this.fetchProducts(this.lastFilters, this.page + 1, true);
    },

    async loadPrev() {
      if (!this.hasPrev || this.page === 1) return;
      await this.fetchProducts(this.lastFilters, this.page - 1, false);
    },

    refresh() {
      return this.fetchProducts(this.lastFilters, this.page, false);
    },
  },
});

export const useProductStoreRefs = () => storeToRefs(useProductStore());
