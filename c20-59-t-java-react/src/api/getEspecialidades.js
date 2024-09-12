import axios from "axios";
import {useAuth0} from '@auth0/auth0-react';

const BACKEND_ENDPOINT = import.meta.env.VITE_BACKEND_URL

export const getEspecialidades = async () => {
    const {getAccessTokenSilently} = useAuth0();
    try {
        const token = await getAccessTokenSilently();
        const response = await axios.get(`${BACKEND_ENDPOINT}/medicos/especialidad`,{
            header: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error al obtener las especialidades:', error);
        throw error;
    }
};