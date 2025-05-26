import { ref } from "vue";

export function useAccordion() {
  const openIndex = ref<number | null>(0);

  const toggle = (index: number) => {
    openIndex.value = openIndex.value === index ? null : index;
  };

  const beforeEnter = (el: Element) => {
    const elHTML = el as HTMLElement;
    elHTML.style.height = "0";
  };

  const enter = (el: Element) => {
    const elHTML = el as HTMLElement;
    elHTML.style.transition = "height 0.3s ease";
    elHTML.style.height = elHTML.scrollHeight + "px";
  };

  const leave = (el: Element) => {
    const elHTML = el as HTMLElement;
    elHTML.style.height = elHTML.scrollHeight + "px";
    requestAnimationFrame(() => {
      elHTML.style.transition = "height 0.3s ease";
      elHTML.style.height = "0";
    });
  };

  return {
    openIndex,
    toggle,
    beforeEnter,
    enter,
    leave,
  };
}
