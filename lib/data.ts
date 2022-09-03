import sampleData from '../sample-data.json';
import axios, { AxiosResponse } from 'axios';

export const fetchRestaurants = async () => {
  const env: string = process.env.NODE_ENV;

  if (env === 'development') {
    return sampleData;
  } else if (env === 'production') {
    const response: AxiosResponse = await axios.get(
      'https://itzik-wolt-favorites-itzikgabay.vercel.app/api/restaurants',
    );
    return response.data.data;
  }
};

export const getRestaurant = async (name: string) => {
  const baseURL: string = 'https://restaurant-api.wolt.com/v3/venues/slug';
  const response: AxiosResponse = await axios.get(`${baseURL}/${name}`);
  return response.data;
};

export const getRestaurants = async (ids: string[]) => {
  const items: object[] = [];

  for (let idx in ids) {
    const name: string = ids[idx];
    const item: object = await getRestaurant(name);
    items.push(item);
  }

  return items;
};
