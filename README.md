# MealDB Recipe Finder

Una aplicación de página única (SPA) responsiva construida con **Vue 3** para buscar recetas y ver instrucciones detalladas de cocina utilizando la API de TheMealDB.

## Características

- **Buscador de Recetas**: Busca platos por nombre (búsqueda por defecto: "Chicken").
- **Detalle de Receta**: Vista completa con imagen, etiquetas, lista dinámica de ingredientes con sus medidas, instrucciones paso a paso y enlace a YouTube.
- **Diseño Responsivo**: Interfaz adaptable a móviles y escritorio (Grid/Flexbox y Tailwind CSS).
- **Patrón Composable**: Implementación de lógica reutilizable (`useFetch`) para el consumo de APIs.
- **Enrutamiento Dinámico**: Uso de Vue Router para la navegación y paso de parámetros (ID del plato).

## Stack Tecnológico

- **Framework**: Vue 3 (Composition API, `<script setup>`)
- **Routing**: Vue Router 4
- **Estilos**: Tailwind CSS (vía CDN) & CSS Scoped personalizado
- **API**: [TheMealDB](https://www.themealdb.com/api.php)
- **Sistema de Módulos**: ES Modules nativos con `importmap` (Sin necesidad de bundlers como Webpack o Vite para ejecución básica).

## Estructura del Proyecto

- `index.html`: Punto de entrada y gestión de dependencias vía `importmap`.
- `index.js`: Inicialización de la app Vue y configuración del Router.
- `App.vue`: Componente raíz.
- `composables/useFetch.js`: Lógica reutilizable para peticiones HTTP y gestión de estado (loading, error, data).
- `components/`: Componentes de UI reutilizables (`SearchBar`, `MealCard`).
- `pages/`: Vistas principales (`Home`, `MealDetail`).

## Cómo ejecutar

Dado que el proyecto utiliza ES Modules nativos y `importmap`, requiere un servidor HTTP local para evitar problemas de CORS o restricciones del protocolo `file://`.

1. **Descarga** los archivos del proyecto.
2. **Inicia un servidor local** en la carpeta raíz:
   - Con Python: `python3 -m http.server`
   - Con Node.js: `npx http-server .`
   - Con VS Code: Extensión "Live Server".
3. **Abre** `http://localhost:8000` (o el puerto que indique tu servidor) en tu navegador.

## Uso de la API

Esta aplicación utiliza los endpoints públicos de prueba de TheMealDB:
- Búsqueda: `https://www.themealdb.com/api/json/v1/1/search.php?s={termino}`
- Detalle: `https://www.themealdb.com/api/json/v1/1/lookup.php?i={id}`
