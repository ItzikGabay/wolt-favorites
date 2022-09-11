import sampleData from '../sample-data.json';
import axios, { AxiosResponse } from 'axios';

interface Restaurant {
  results: Array;
}

const env: string = process.env.NODE_ENV;
const WOLT_API: string = 'https://restaurant-api.wolt.com/v3/venues/slug';
const BASE_URL: string =
  env === 'development'
    ? 'http://localhost:3000'
    : 'https://itzik-wolt-favorites-itzikgabay.vercel.app';

const API_URL: string = `${BASE_URL}/api/restaurants`;

export const fetchRestaurants = async (ids?: string[]) => {
  if (env === 'development') {
    if (Array.isArray(ids)) {
      const response: AxiosResponse = await axios.post(API_URL, JSON.stringify({ ids }));
      return response.data.data;
    }

    const response: AxiosResponse = await axios.get(API_URL);
    return response.data.data;
  }
};

export const getRestaurant = async (name: string) => {
  const response: AxiosResponse = await axios.get(`${WOLT_API}/${name}`);
  return response.data;
};

export const getRestaurants = async (ids: string[]) => {
  const items: object[] = [];

  for (let idx in ids) {
    const name: string = ids[idx];
    const item: object = await getRestaurant(name);
    items.push(item);
  }

  // TODO: Add type to item
  items.sort((a: any, b: any): number => {
    return b.results[0].online - a.results[0].online;
  });

  return items;
};
