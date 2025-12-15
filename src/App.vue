<script setup>
import { RouterView } from 'vue-router';
import NavigationBar from './components/NavigationBar.vue';
</script>

<template>
  <header>
    <NavigationBar />
  </header>

  <main>
    <RouterView />
  </main>
</template>

<style scoped>
main {
  max-width: 1200px;
  margin: 2rem auto; /* Marge superior i inferior */
  padding: 0 1rem;
  min-height: 80vh;
}

:global(body) {
  margin: 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f4f4f4; /* Un fons gris molt suau queda millor */
}
</style>