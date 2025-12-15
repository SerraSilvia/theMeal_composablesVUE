import { ref, unref } from "vue";

export function useFetch(url) {
    const data = ref(null);
    const error = ref(null);
    const loading = ref(false);

    const fetchData = async () => {
        loading.value = true;
        error.value = null;
        
        // unref obtiene el valor tanto si 'url' es un ref como si es un string normal
        const urlValue = unref(url); 

        try {
            const res = await fetch(urlValue);
            if (!res.ok) {
                // CORREGIDO: Uso de comillas invertidas ` `
                throw new Error(`Error en fer la petició: ${res.status}`);
            }
            data.value = await res.json();

        } catch (err) {
            error.value = err.message;
        } finally {
            loading.value = false;
        }
    };

    // IMPRESCINDIBLE: Retornar las variables y la función
    return { data, error, loading, fetchData };
}