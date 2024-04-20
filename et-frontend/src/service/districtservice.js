import axios from 'axios';

const API_URL = 'http://localhost:8080/api/district';
const API_URL_HOTEL = 'http://localhost:8080/api/hotels';

export const listdistrict = () => axios.get(API_URL); 
export const listhotel = () => axios.get(API_URL_HOTEL); 
export const addhotel = (hotel) => axios.post(API_URL_HOTEL, hotel);
export const gethotel = (hotel_id) => axios.get(API_URL_HOTEL + '/' + hotel_id);
export const updatehotel = (hotel_id, hotel) => axios.put(API_URL_HOTEL + '/' + hotel_id, hotel);
export const deletehotel = (hotel_id) => axios.delete(API_URL_HOTEL + '/' + hotel_id);