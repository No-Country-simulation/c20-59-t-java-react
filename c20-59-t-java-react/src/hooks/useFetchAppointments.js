import { useState, useEffect } from 'react';
import { fetchAppointments } from '../api/fetchAppointment';

const useFetchAppointments = (idPaciente) => {
    const [appointments, setAppointments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try{
                const data = await fetchAppointments(1);
                setAppointments(data);
                console.log(data)
            } catch(error){
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

       fetchData();
    }, []);

    return { appointments, loading, error}

};

export default useFetchAppointments;
