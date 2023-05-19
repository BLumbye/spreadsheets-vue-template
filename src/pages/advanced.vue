<template>
  <h1>Advanced</h1>
  <h2>List</h2>
  <SpreadsheetList :editable="true"
                   :sortable="true"
                   :removable="true"
                   :addable="true"
                   :list="advancedStore.list"
                   :type="'string'" />
  <h2>Table</h2>
  <SpreadsheetTable :editable="true"
                    :sortable="true"
                    :removable="true"
                    :addable="true"
                    :table="advancedStore.table"
                    :headers="advancedStore.headers"
                    :types="advancedStore.types" />
</template>

<script setup lang="ts">
const advancedStore = useAdvancedStore();
</script>

<style scoped lang="postcss"></style>
