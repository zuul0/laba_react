import axios from 'axios';

const $host = axios.create({
    baseURL: import.meta.env.VITE_API_URL, 
});

export const getAll = async () => {
    try {
        const { data } = await $host.get('/api/Hom/getPatients');
        return data; // Предполагаем, что `data` должен быть массивом
    } catch (error) {
        console.error("Ошибка при получении данных:", error);
        return []; // Возвращаем пустой массив при ошибке
    }
};

export { $host };
