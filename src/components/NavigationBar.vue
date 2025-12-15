<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <nav class="navbar">
    <div class="nav-container">
      <!-- LOGO: Clicar aquí et porta a la Home -->
      <RouterLink to="/" class="brand-logo">
        🍳 Vue Receptes
      </RouterLink>

      <!-- ENLLAÇOS DE NAVEGACIÓ -->
      <div class="nav-links">
        <RouterLink to="/" class="nav-item" active-class="active">
          Inici
        </RouterLink>
        <!-- Pots afegir més enllaços aquí si el router creix -->
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  background-color: #42b883; /* Color Vue */
  color: white;
  padding: 1rem 0;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  position: sticky; /* Opcional: fa que es quedi fixa a dalt */
  top: 0;
  z-index: 1000;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.brand-logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 10px;
}

.nav-links {
  display: flex;
  gap: 20px;
}

.nav-item {
  color: rgba(255, 255, 255, 0.85);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s, transform 0.2s;
}

.nav-item:hover {
  color: white;
  transform: translateY(-2px);
}

/* Estil automàtic de Vue Router quan la ruta coincideix */
.active {
  color: white;
  font-weight: bold;
  border-bottom: 2px solid white;
}
</style>