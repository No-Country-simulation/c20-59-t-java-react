import axios from "axios";
import {useAuth0} from '@auth0/auth0-react';

const BACKEND_ENDPOINT = import.meta.env.VITE_BACKEND_URL

export const createAppointment = async (cita) => {
    const {getAccessTokenSilently} = useAuth0();
    try{
        const token = await getAccessTokenSilently();
        const response = await axios.post(`${BACKEND_ENDPOINT}/consultas`, cita,{
            headers: {
                Authorization: `Bearer ${token}`
            },
        });
        return response.data;
    }catch (error){
        console.error('Error al obtener la consulta médica:', error);
        throw error;
    }
}