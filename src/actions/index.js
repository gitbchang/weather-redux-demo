import axios from 'axios';

const API_KEY = 'a5f5dc406224efaea644e9e0c81c0b50';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
// we use the variable here so we don't fuck up our code by copy pasting the string fetch weather everytime
export const FETCH_WEATHER = 'FETCH_WEATHER';
// action creators always has to return an action
// the action will always have a type
export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},US`;
  const request = axios.get(url);
  console.log('Request:', request);
  return {
    type: FETCH_WEATHER,
    payload: request
  }
}