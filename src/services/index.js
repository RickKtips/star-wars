import axios from "axios";
export const getPlanets = async (pagePlanet) => {
  try {
    const response = await axios.get(`api/planets/?page=${pagePlanet}`);
    return response.data;
  } catch (error) {
    return error;
  }  
}
export const getPeople = async (page) => {  
  try {
    const response = await axios.get( `api/people/?page=${page}`);
    return response.data;
  } catch (error) {
    return error;
  }
}