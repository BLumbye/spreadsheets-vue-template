<template>
  <h1>Basics</h1>
  <h2>User input</h2>
  <div class="user-input">
    <label for="value">Value:</label>
    <input type="text"
           v-model="basicsStore.value" />
  </div>
  <h2>Formulas/derived values</h2>
  <div class="derived-value">
    <span>Double value: {{ basicsStore.doubleValue }}</span>
  </div>
</template>

<script setup lang="ts">
const basicsStore = useBasicsStore();
</script>

<style scoped lang="postcss">
.user-input {
  display: flex;
  gap: 1rem;
}
</style>
