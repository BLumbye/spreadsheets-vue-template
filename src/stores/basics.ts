import { defineStore } from 'pinia';

export const useBasicsStore = defineStore('basics', () => {
  // State
  const value = ref(0);

  // Getters
  const doubleValue = computed(() => value.value * 2);

  return { value, doubleValue };
});
