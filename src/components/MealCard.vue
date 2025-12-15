<script setup>
import { RouterLink } from 'vue-router';

// Definim les props
const props = defineProps({
  meal: {
    type: Object,
    required: true
  }
});
</script>

<template>
  <div class="card">
    <img :src="meal.strMealThumb" :alt="meal.strMeal" />
    <h3>{{ meal.strMeal }}</h3>
    <p class="category">{{ meal.strCategory }}</p>
    
    <!-- Enllaç al detall passant l'ID -->
    <RouterLink :to="{ name: 'meal-detail', params: { id: meal.idMeal } }" class="btn-detail">
      Veure Recepta
    </RouterLink>
  </div>
</template>

<style scoped>
.card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  text-align: center;
  width: 250px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}
img {
  width: 100%;
  border-radius: 4px;
}
.btn-detail {
  display: inline-block;
  margin-top: 10px;
  padding: 8px 12px;
  background-color: #42b883;
  color: white;
  text-decoration: none;
  border-radius: 4px;
}
</style>