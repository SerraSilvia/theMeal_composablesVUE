<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <!-- Enllaç fix a la pàgina d'inici -->
        <RouterLink to="/" class="logo">🍳 Vue Receptes</RouterLink>
      </nav>
    </div>
  </header>

  <main>
    <!-- Aquest component renderitza la vista corresponent a la ruta actual -->
    <RouterView />
  </main>
</template>

<style scoped>
/* Estils globals per a l'estructura de l'App */
header {
  line-height: 1.5;
  background-color: #42b883; /* Color típic de Vue */
  padding: 1rem 2rem;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  margin-bottom: 2rem;
}

.logo {
  color: white;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: bold;
}

.logo:hover {
  opacity: 0.9;
}

main {
  min-height: 100vh;
  padding: 0 1rem;
  max-width: 1200px;
  margin: 0 auto;
}

/* Reset bàsic per assegurar que no hi hagi marges estranys al body (opcional) */
:global(body) {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
</style>