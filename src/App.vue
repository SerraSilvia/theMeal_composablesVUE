<script setup>
import { RouterView } from 'vue-router';
// 1. Importem el nou component
import NavigationBar from './components/NavigationBar.vue';
</script>

<template>
  <!-- 2. Fem servir el component al top de l'aplicació -->
  <header>
    <NavigationBar />
  </header>

  <main>
    <!-- Aquí es carreguen les vistes (Home o Detail) -->
    <RouterView />
  </main>
</template>

<style scoped>
/* Ajustem els estils globals perquè el main tingui espai */
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