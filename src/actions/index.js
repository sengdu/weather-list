import axios from 'axios';

const API_KEY = 'e6ef5d4abfe2c923bf6aaa96616f2a5f';
// const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEYS} `;
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export  const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
	const url = `${ROOT_URL}&q=${city},ISO 3166`;
	const request = axios.get(url);
	// console.log('Request',request);

	return{
		type: FETCH_WEATHER,
		payload: request
	}
}