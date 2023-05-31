<template>
    <h1>Library showcase</h1>
    <h2>User inputs</h2>
    <div class="user-input">
        <label for="value">Value:</label>
        <input type="text" v-model="basicsStore.value" />
    </div>
    <h2>List</h2>
    <SpreadsheetList :editable="true" :sortable="true" :removable="true" :addable="true" :list="advancedStore.list"
        :type="'string'" />
    <h2>Formulas/derived values</h2>
    <div class="derived-value">
        <span>Double value: {{ basicsStore.doubleValue }}</span>
    </div>

    <h3>Excel formula library</h3>
    <div class="square-root-value">
        <span>Square root: {{ formula.SQRT(basicsStore.value) }}</span>
    </div>
    <div class="unqiue-value">
        <span>Hyperbolic cosecant of an angle: {{ formula.CSCH(basicsStore.value) }}</span>
    </div>
    <h3>Validation</h3>
    <div class="validation">
        <span>Wholenumber {{ isWholeNumber()(basicsStore.value.toString()) }}</span>
    </div>
    <h3>List to CSV</h3>
    <div class="to-csv">
        <span>{{ listToCsv(advancedStore.list, { direction: 'horizontal' }) }}</span>
    </div>
</template>

<script setup lang="ts">
import { formula, isWholeNumber, listToCsv } from 'spreadsheets-vue';

const basicsStore = useBasicsStore();
const advancedStore = useAdvancedStore();
</script>

<style scoped lang="postcss">
.user-input {
    display: flex;
    gap: 1rem;
}
</style>
