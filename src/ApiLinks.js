//ENDPOINTS PARA MASCOTAS
export const GET_ALL_MASCOTAS = 'https://localhost:5001/api/mascotas';
export const GET_MASCOTA_BY_ID = 'https://localhost:5001/api/mascotas/3';
export const GET_MASCOTA_BY_AVAILABILITY = 'https://localhost:5001/api/mascotas/byAvailability/1';
export const UPDATE_MASCOTA_ADOPTION = (idPet, idPerson) => `https://localhost:5001/api/mascotas/${idPet}/persona/${idPerson}`

//ENDPOINTS PARA REFUGIOS (GET y POST)
export const GET_ALL_REFUGIOS = 'https://localhost:5001/api/refugios'; 

//ENDPOINTS PARA PERSONAS
export const ADD_PERSONA = 'https://localhost:5001/api/personas';