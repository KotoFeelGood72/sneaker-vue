import { defineStore, storeToRefs } from "pinia";

export const usePoizonStore = defineStore("poizon", {
  state: () => ({
    poizonStep: 1 as number,
    minStep: 1,
    maxStep: 4,
  }),
  actions: {
    nextPoizonStep() {
      if (this.poizonStep < this.maxStep) {
        this.poizonStep++;
      }
    },
    prevPoizonStep() {
      if (this.poizonStep > this.minStep) {
        this.poizonStep--;
      }
    },
    goToPoizonStep(step: number) {
      if (step >= this.minStep && step <= this.maxStep) {
        this.poizonStep = step;
      }
    },
  },
});

export const usePoizonStoreRefs = () => storeToRefs(usePoizonStore());
