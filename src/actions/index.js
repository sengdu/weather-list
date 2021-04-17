import axios from 'axios';

const API_KEYS = 'e6ef5d4abfe2c923bf6aaa96616f2a5f';
// const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEYS} `;
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEYS}`;
const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city){
	const url = `${ROOT_URL}&q=${city},ISO 3166`;
	const request = axios.get(url);

	return{
		type: FETCH_WEATHER,
		payload: request
	}
}