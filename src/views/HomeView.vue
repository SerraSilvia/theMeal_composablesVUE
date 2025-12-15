<script setup>
import { ref, onMounted, computed } from 'vue';
import { useFetch } from '../composables/useFetch'; // Importamos tu nuevo composable
import SearchBar from '../components/SearchBar.vue';
import MealCard from '../components/MealCard.vue';

// 1. Crear una ref para la URL
const query = ref('Chicken');
// La URL depende de la query. Usamos computed para que se actualice sola si cambiamos la query manualmente
const url = computed(() => `https://www.themealdb.com/api/json/v1/1/search.php?s=${query.value}`);

// 2. Usar el useFetch pasando la URL reactiva
const { data, loading, error, fetchData } = useFetch(url);

// Carga inicial
onMounted(() => {
    fetchData();
});

// Cuando el usuario busca
const handleSearch = (term) => {
    query.value = term; // Actualizamos el término
    // Vue detecta el cambio en 'url' (porque es computed), pero necesitamos relanzar el fetch
    // IMPORTANTE: Esperamos un tick o llamamos directamente sabiendo que la computed se recalcula
    setTimeout(() => fetchData(), 0); 
};
</script>

<template>
  <div class="home">
    <SearchBar @search="handleSearch" />
    
    <div v-if="loading">Carregant...</div>
    <div v-if="error" class="error">{{ error }}</div>

    <!-- OJO AQUÍ: La API devuelve { "meals": [...] }, así que accedemos a data.meals -->
    <div v-if="data && data.meals" class="meals-grid">
      <MealCard 
        v-for="meal in data.meals" 
        :key="meal.idMeal" 
        :meal="meal" 
      />
    </div>
  </div>
</template>

<style scoped>
.home {
  padding: 20px;
  text-align: center;
}
.meals-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}
.loading { font-size: 1.2em; color: gray; }
.error { color: red; }
</style>