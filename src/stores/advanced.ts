import { defineStore } from 'pinia';

export const useAdvancedStore = defineStore('advanced', () => {
  // State
  const list = ref(["John", "Jane", "Jamie", 52, true]);

  const table = ref([{ name: "John", age: 52, available: true }, { name: "Jane", age: 55, available: true }, { name: "Jamie", age: 12, available: false }]);
  const headers = { name: "Name", age: "Age", available: "Available" };
  const types = { name: "string", age: "number", available: "boolean" };

  return { list, table, headers, types };
});
