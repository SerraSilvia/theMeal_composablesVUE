<script setup>
import { RouterLink } from 'vue-router';

const props = defineProps({
  meal: {
    type: Object,
    required: true
  }
});
</script>

<template>
  <div class="card">
    <!-- Contenedor para controlar el tamaño de la imagen -->
    <div class="card-image">
      <img :src="meal.strMealThumb" :alt="meal.strMeal" />
      <span class="category-tag">{{ meal.strCategory }}</span>
    </div>

    <div class="card-content">
      <h3>{{ meal.strMeal }}</h3>
      
      <!-- Mostramos un previo de los pasos (instrucciones) -->
      <div class="instructions-preview">
        <h4>Preparación:</h4>
        <p>{{ meal.strInstructions }}</p>
      </div>

      <!-- Enllaç al detall -->
      <div class="card-actions">
        <RouterLink 
          :to="{ name: 'meal-detail', params: { id: meal.idMeal } }" 
          class="btn-detail"
        >
          Ver receta completa
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  background: white;
  border-radius: 12px;
  width: 280px; /* Ancho fijo para la tarjeta */
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  overflow: hidden; /* Para que la imagen respete los bordes redondeados */
  transition: transform 0.2s, box-shadow 0.2s;
  display: flex;
  flex-direction: column;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 12px rgba(0,0,0,0.15);
}

/* IMAGEN MÁS PEQUEÑA Y CONTROLADA */
.card-image {
  position: relative;
  height: 160px; /* Altura fija para hacerla "más pequeña" */
  width: 100%;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Recorta la imagen para llenar el hueco sin estirarse */
}

.category-tag {
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.8rem;
  text-transform: uppercase;
}

.card-content {
  padding: 16px;
  display: flex;
  flex-direction: column;
  flex-grow: 1; /* Ocupa el espacio restante */
}

h3 {
  margin: 0 0 10px 0;
  font-size: 1.1rem;
  color: #333;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis; /* Puntos suspensivos si el título es muy largo */
}

/* ESTILOS PARA LOS PASOS (INSTRUCCIONES) */
.instructions-preview h4 {
  margin: 0 0 5px 0;
  font-size: 0.9rem;
  color: #666;
}

.instructions-preview p {
  font-size: 0.85rem;
  color: #777;
  margin: 0;
  line-height: 1.4;
  
  /* Truco CSS para cortar el texto a las 3 líneas */
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.card-actions {
  margin-top: 15px;
  text-align: right;
}

.btn-detail {
  display: inline-block;
  font-size: 0.9rem;
  padding: 8px 16px;
  background-color: #42b883;
  color: white;
  text-decoration: none;
  border-radius: 20px;
  font-weight: 500;
  transition: background-color 0.2s;
}

.btn-detail:hover {
  background-color: #3aa876;
}
</style>