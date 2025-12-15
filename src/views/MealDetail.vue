<script setup>
import { onMounted, watch, ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import { useFetch } from '../composables/useFetch';

const route = useRoute();
const currentId = ref(route.params.id);

// Construimos la URL dinámica
const url = computed(() => `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${currentId.value}`);

// Iniciamos el composable
const { data, loading, error, fetchData } = useFetch(url);

// Helper para acceder al plat (la api devuelve un array de 1 elemento dentro de meals)
const meal = computed(() => data.value?.meals ? data.value.meals[0] : null);

onMounted(() => {
    fetchData();
});

// Watch para recargar si cambia la URL (requisito del ejercicio)
watch(() => route.params.id, (newId) => {
    currentId.value = newId;
    fetchData();
});
</script>

<template>
    <!-- Aquí usas 'meal' (el computed) para mostrar los datos -->
    <div v-if="loading">Cargando...</div>
    <div v-else-if="meal">
        <h1>{{ meal.strMeal }}</h1>
        <img :src="meal.strMealThumb" width="300" />
        <p>{{ meal.strInstructions }}</p>
    </div>
</template>

<style scoped>
.detail-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}
.header-info {
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
}
img {
  width: 50%;
  border-radius: 8px;
  object-fit: cover;
}
.ingredients-box {
  flex: 1;
  background: #f9f9f9;
  padding: 15px;
  border-radius: 8px;
}
.instructions {
  text-align: justify;
  line-height: 1.6;
}
button {
  margin-bottom: 10px;
  padding: 5px 10px;
  cursor: pointer;
}
@media (max-width: 600px) {
  .header-info {
    flex-direction: column;
  }
  img {
    width: 100%;
  }
}
</style>