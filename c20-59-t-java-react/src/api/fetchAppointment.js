import axios from "axios"

const BACKEND_ENDPOINT = import.meta.env.VITE_BACKEND_URL;


export const fetchAppointments = async (idPaciente) => {
    try{
        const response = await axios.get(`${BACKEND_ENDPOINT}/consultas/${idPaciente}`);
        return response.data.content;
    }catch (error){
        console.error('Error al obtener la consulta médica:', error);
        throw error;
    }
}