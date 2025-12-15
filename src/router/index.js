import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import MealDetail from '../views/MealDetail.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/meal/:id', 
      name: 'meal-detail',
      component: MealDetail,
      props: true // Permet rebre l'id com a prop si volguéssim, encara que farem servir useRoute
    }
  ]
});

export default router;