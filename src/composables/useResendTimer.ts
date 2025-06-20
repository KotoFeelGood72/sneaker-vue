import { ref, onMounted, onUnmounted, computed } from "vue";

interface Options {
  /** сколько секунд ждать между отправками */
  delay?: number;
  /** ключ в localStorage */
  storageKey?: string;
}

export function useResendTimer({
  delay = 30,
  storageKey = "resend_code_timer",
}: Options = {}) {
  const countdown = ref(0);
  let timerId: number | null = null;

  const clearTimer = () => {
    if (timerId) {
      clearInterval(timerId);
      timerId = null;
    }
  };

  const calcRemaining = (expires: number) =>
    Math.max(0, Math.ceil((expires - Date.now()) / 1000));

  const updateCountdown = (expires: number) => {
    countdown.value = calcRemaining(expires);
    if (countdown.value === 0) {
      clearTimer();
      localStorage.removeItem(storageKey);
    }
  };

  const launchTicker = (expires: number) => {
    clearTimer();
    updateCountdown(expires);
    timerId = window.setInterval(() => updateCountdown(expires), 1000);
  };

  /** Запустить таймер заново */
  const start = () => {
    const expires = Date.now() + delay * 1000;
    localStorage.setItem(storageKey, String(expires));
    launchTicker(expires);
  };

  /** true, когда таймер идёт */
  const isActive = computed(() => countdown.value > 0);

  // восстановление после перезагрузки
  onMounted(() => {
    const expires = Number(localStorage.getItem(storageKey));
    if (expires && Date.now() < expires) launchTicker(expires);
  });

  onUnmounted(clearTimer);

  return { countdown, isActive, start };
}
