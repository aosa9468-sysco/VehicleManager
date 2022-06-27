import axios from "axios";

const PORT = "5000";
const EQUIPMENTS_API_URL = `http://localhost:${PORT}/equipments`;

export const getEquipments = async () => {
  return await axios.get(EQUIPMENTS_API_URL);
};
