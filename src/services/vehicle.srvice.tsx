import axios from 'axios';
import { Vehicle } from '../pages/Dashboard/dashboard.interface';

const VEHICLE_API_URL = "http://localhost:5000/vehicles";

export const getVehicles = async() => {
    return await axios.get(VEHICLE_API_URL);
}

export const addVehicle = async(vehicle: any) =>{
    return await axios.post(VEHICLE_API_URL,vehicle);
}

export const updateVehicle = async (id: any, vehicle: any) => {
    return await axios.put(`${VEHICLE_API_URL}/${id}`,vehicle);
}

export const deleteVehicle = async (id: any) => {
    return await axios.delete(`${VEHICLE_API_URL}/${id}`);
}