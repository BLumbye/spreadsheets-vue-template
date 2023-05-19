import { defineStore } from 'pinia';

export const useChartStore = defineStore('chart', () => {
  // State
  const chartData = ref([{ id: "A", value: 28 }, { id: "B", value: 55 }, { id: "C", value: 43 }, { id: "D", value: 91 }, { id: "E", value: 81 }, { id: "F", value: 53 }, { id: "G", value: 19 }, { id: "H", value: 87 }]);
  const headers = { id: "ID", value: "Value" };
  const types = { id: "string", value: "number" };

  return { chartData, headers, types };
});
