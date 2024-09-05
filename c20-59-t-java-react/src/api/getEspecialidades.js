import axios from "axios";

// const BACKEND_ENDPOINT = import.meta.env.VITE_BACKEND_URL
const BACKEND_ENDPOINT = '/api';

export const getEspecialidades = async () => {
    try {
        const response = await axios.get(`${BACKEND_ENDPOINT}/medicos/especialidad`);
        return response.data;
    } catch (error) {
        console.error('Error al obtener las especialidades:', error);
        throw error;
    }
};