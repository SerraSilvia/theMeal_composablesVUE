<script setup>
import { ref } from 'vue';

const searchTerm = ref('');
const emit = defineEmits(['search']);

const triggerSearch = () => {
  if (searchTerm.value.trim()) {
    emit('search', searchTerm.value);
  }
};
</script>

<template>
  <div class="search-bar">
    <input 
      v-model="searchTerm" 
      type="text" 
      placeholder="Cerca una recepta (ex: Chicken)..." 
      @keyup.enter="triggerSearch"
    />
    <button @click="triggerSearch">Cercar</button>
  </div>
</template>

<style scoped>
.search-bar {
  margin: 20px 0;
  display: flex;
  gap: 10px;
  justify-content: center;
}
input {
  padding: 8px;
  width: 250px;
}
button {
  padding: 8px 16px;
  cursor: pointer;
}
</style>