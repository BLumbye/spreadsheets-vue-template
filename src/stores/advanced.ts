import { defineStore } from 'pinia';

export const useAdvancedStore = defineStore('advanced', () => {
  // State
  const list = ref(["bob", "er", "ged", 52, true]);

  const table = ref([{ name: "bob", age: 52, alive: true }, { name: "er", age: 55, alive: true }, { name: "ged", age: 12, alive: false }]);
  const headers = { name: "Name", age: "Age", alive: "Alive" };
  const types = { name: "string", age: "number", alive: "boolean" };

  return { list, table, headers, types };
});
