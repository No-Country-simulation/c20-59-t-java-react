import axios from "axios";

// const BACKEND_ENDPOINT = import.meta.env.VITE_BACKEND_URL
const BACKEND_ENDPOINT = '/api';

export const getMedicos = async () => {
    try {
        const response = await axios.get(`${BACKEND_ENDPOINT}/medicos/medicos`);
        return response.data;
    } catch (error) {
        console.error('Error al obtener los médicos:', error);
        throw error;
    }
};
