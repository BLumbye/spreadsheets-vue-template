<template>
  <header>
    <span class="title">Spreadsheets Vue Template</span>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/basics">Basics</router-link>
      <router-link to="/advanced">Advanced</router-link>
      <router-link to="/charts">Charts</router-link>
    </nav>
  </header>
</template>

<script setup lang="ts">

</script>

<style scoped lang="postcss">
header {
  display: flex;
  width: 100%;
  gap: 4rem;
  align-items: center;
  padding: 0.5rem 1rem;
  background-color: #3b3b3b;

  @media (prefers-color-scheme: light) {
    background-color: #f1f1f1;
  }
}

nav {
  display: flex;
  gap: 0.75rem;
}

a {
  color: rgba(255 255 255 / 75%);
  padding: 0.25rem 0.75rem;
  border-radius: 0.25rem;
  transition: background-color 0.15s;

  @media (prefers-color-scheme: light) {
    color: black;
  }

  &:hover {
    background-color: #4f4f4f;

    @media (prefers-color-scheme: light) {
      background-color: #ffffff;
    }
  }

  &.router-link-active {
    background-color: #4d4d4d;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);

    @media (prefers-color-scheme: light) {
      background-color: #ffffff;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.12);
    }
  }
}
</style>
