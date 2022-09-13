import sampleData from '../sample-data.json';
import axios, { AxiosResponse } from 'axios';
import { RestaurantProps } from '../interfaces/Restaurant';

const ENVIRONMENT: string = process.env.NODE_ENV;
const WOLT_API: string = 'https://restaurant-api.wolt.com/v3/venues/slug';
const BASE_URL: string =
  ENVIRONMENT === 'development'
    ? 'http://localhost:3000'
    : 'https://itzik-wolt-favorites-itzikgabay.vercel.app';

const API_URL: string = `${BASE_URL}/api/restaurants`;

export const fetchRestaurants = async (ids?: string[]) => {
  if (ENVIRONMENT === 'production' || process.env.NEXT_PUBLIC_DEBUG === '1' ) {
    if (Array.isArray(ids)) {
      const response: AxiosResponse = await axios.post(
        API_URL,
        { ids },
      );
      return response.data.data;
    }

    const response: AxiosResponse = await axios.get(API_URL);
    return response.data.data;
  }

  return sampleData;
};

export const getRestaurant = async (name: string) => {
  const response: AxiosResponse = await axios.get(`${WOLT_API}/${name}`);
  const restaurant = response.data.results[0];

  const restaurantMapped: RestaurantProps = {
    name: restaurant.name,
    address: restaurant.address,
    completion_estimates: restaurant.completion_estimates.delivery_rush,
    online: restaurant.online,
    key: restaurant.key,
    slug: restaurant.slug,
    listimage: restaurant.listimage,
  }

  return restaurantMapped;
};


export const getRestaurants = async (ids: string[]) => {
  const items: object[] = [];

  for (let idx in ids) {
    const name: string = ids[idx];
    const item: RestaurantProps = await getRestaurant(name);
    items.push(item);
  }

  // TODO: Add type to item
  items.sort((a: any, b: any): number => {
    return b.online - a.online;
  });

  return items;
};
