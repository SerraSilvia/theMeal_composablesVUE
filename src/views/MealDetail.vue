<script setup>
import { onMounted, watch, ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import { useFetch } from '../composables/useFetch';

const route = useRoute();
const currentId = ref(route.params.id);

// Construïm la URL dinàmica
const url = computed(() => `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${currentId.value}`);

// Iniciem el composable
const { data, loading, error, fetchData } = useFetch(url);

// Helper per accedir al plat (la api retorna un array de 1 element dins de meals)
const meal = computed(() => data.value?.meals ? data.value.meals[0] : null);

// Helper per parsejar els ingredients (afegit per mostrar el detall complet com es demanava)
const ingredients = computed(() => {
  if (!meal.value) return [];
  const result = [];
  
  for (let i = 1; i <= 20; i++) {
    const ingredient = meal.value[`strIngredient${i}`];
    const measure = meal.value[`strMeasure${i}`];
    
    if (ingredient && ingredient.trim() !== '') {
      result.push({
        ingredient: ingredient,
        measure: measure || '',
      });
    }
  }
  return result;
});

onMounted(() => {
    fetchData();
});

// Watch per recarregar si canvia la URL (requisit de l'exercici)
watch(() => route.params.id, (newId) => {
    currentId.value = newId;
    fetchData();
});
</script>

<template>
    <div class="detail-container">
        <div v-if="loading" class="loading">Cargando...</div>
        <div v-else-if="error" class="error">{{ error }}</div>
        
        <div v-else-if="meal" class="meal-card">
            <router-link to="/" class="back-link">&larr; Tornar al llistat</router-link>
            
            <div class="layout">
                <!-- Columna Esquerra: Imatge -->
                <div class="image-column">
                    <img :src="meal.strMealThumb" :alt="meal.strMeal" />
                    <div class="tags">
                        <span class="tag category">{{ meal.strCategory }}</span>
                        <span class="tag area">{{ meal.strArea }}</span>
                    </div>
                </div>

                <!-- Columna Derecha: Datos -->
                <div class="info-column">
                    <h1>{{ meal.strMeal }}</h1>
                    
                    <div class="ingredients-box">
                        <h3>Ingredients</h3>
                        <ul>
                            <li v-for="(item, index) in ingredients" :key="index">
                                <strong>{{ item.ingredient }}</strong>: {{ item.measure }}
                            </li>
                        </ul>
                    </div>

                    <div class="instructions">
                        <h3>Instruccions</h3>
                        <p>{{ meal.strInstructions }}</p>
                    </div>
                    
                    <a v-if="meal.strYoutube" :href="meal.strYoutube" target="_blank" class="youtube-btn">
                        Ver en YouTube
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.detail-container {
    max-width: 1000px;
    margin: 40px auto;
    padding: 0 20px;
    font-family: 'Segoe UI', sans-serif;
}

.loading, .error {
    text-align: center;
    font-size: 1.5rem;
    margin-top: 50px;
    color: #666;
}

.back-link {
    display: inline-block;
    margin-bottom: 20px;
    color: #e65100;
    text-decoration: none;
    font-weight: 600;
    transition: color 0.2s;
}

.back-link:hover {
    color: #bf360c;
}

.meal-card {
    background: white;
    border-radius: 16px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.05);
    padding: 30px;
    border: 1px solid #f0f0f0;
}

/* Layout Flexbox principal */
.layout {
    display: flex;
    gap: 40px;
    align-items: flex-start;
}

/* Columna Izquierda */
.image-column {
    flex: 0 0 40%;
    position: sticky;
    top: 20px;
}

.image-column img {
    width: 100%;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    object-fit: cover;
}

.tags {
    display: flex;
    gap: 10px;
    margin-top: 15px;
    justify-content: center;
    flex-wrap: wrap;
}

.tag {
    padding: 6px 14px;
    border-radius: 20px;
    font-size: 0.85rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.tag.category {
    background-color: #fff3e0;
    color: #e65100;
}

.tag.area {
    background-color: #e3f2fd;
    color: #1565c0;
}

/* Columna Derecha */
.info-column {
    flex: 1;
}

h1 {
    margin-top: 0;
    font-size: 2.5rem;
    color: #2c3e50;
    line-height: 1.2;
    margin-bottom: 20px;
}

h3 {
    color: #e65100;
    font-size: 1.3rem;
    margin-bottom: 15px;
    border-bottom: 2px solid #ffe0b2;
    padding-bottom: 5px;
    display: inline-block;
}

.ingredients-box {
    background-color: #fafafa;
    padding: 20px;
    border-radius: 10px;
    margin-bottom: 30px;
}

.ingredients-box ul {
    list-style: none;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 10px;
}

.ingredients-box li {
    font-size: 0.95rem;
    color: #555;
    background: white;
    padding: 8px;
    border-radius: 6px;
    border: 1px solid #eee;
}

.instructions p {
    line-height: 1.8;
    color: #444;
    text-align: justify;
    white-space: pre-line;
    margin-bottom: 30px;
}

.youtube-btn {
    display: inline-block;
    background-color: #d32f2f;
    color: white;
    text-decoration: none;
    padding: 10px 20px;
    border-radius: 8px;
    font-weight: bold;
    transition: background 0.3s;
}

.youtube-btn:hover {
    background-color: #b71c1c;
}

/* Responsive */
@media (max-width: 768px) {
    .layout {
        flex-direction: column;
    }

    .image-column {
        flex: auto;
        width: 100%;
        margin-bottom: 30px;
        position: static;
    }

    h1 {
        font-size: 2rem;
    }
}
</style>