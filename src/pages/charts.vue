<template>
  <h1>Charts</h1>
  <h2>Chart Data</h2>
  <SpreadsheetTable :editable="true"
                    :sortable="true"
                    :removable="true"
                    :addable="true"
                    :table="chartStore.chartData"
                    :headers="chartStore.headers"
                    :types="chartStore.types" />
  <h2>Bar Chart</h2>
  <div id="chart-container"
       ref="chartContainer"></div>
</template>

<script setup lang="ts">
import * as Plot from '@observablehq/plot';

const chartStore = useChartStore();
const chartContainer = ref<HTMLElement>();

const createBarPlot = () => {
  return Plot.plot({
    y: {
      grid: true,
    },
    x: {
      domain: chartStore.chartData.map(d => d.id),
    },
    marks: [
      Plot.ruleY([0]),
      Plot.barY(chartStore.chartData, { x: "id", y: "value" })
    ],
    style: {
      background: 'transparent'
    }
  })
};

onMounted(() => {
  chartContainer.value?.appendChild(createBarPlot());
});

watch(() => chartStore.chartData, () => {
  if (!chartContainer.value) return;
  chartContainer.value.innerHTML = '';
  chartContainer.value.appendChild(createBarPlot());
}, { deep: true });
</script>

<style scoped lang="postcss"></style>
