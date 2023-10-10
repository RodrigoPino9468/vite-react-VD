import axios from "axios";

export async function fetchDataFromApi() {
  try {
    const response = await axios.get(`${import.meta.env.VITE_API_RICK_Y_MORTY}`);
    return response.data;
  } catch (error) {
    console.error("Error al obtener datos de la API:", error);
    throw error;
  }
}
