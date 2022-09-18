import sampleData from '../sample-data.json';
import axios, { AxiosResponse } from 'axios';
import { RestaurantProps } from '../interfaces/Restaurant';
import config from './config';

export const fetchRestaurants = async (ids?: string[]) => {
  if (
    config.ENVIRONMENT === 'production' ||
    process.env.NEXT_PUBLIC_DEBUG === '1'
  ) {
    if (Array.isArray(ids)) {
      const response: AxiosResponse = await axios.post(config.API_URL, { ids });
      return response.data.data;
    }

    const response: AxiosResponse = await axios.get(config.API_URL);
    return response.data.data;
  }

  return sampleData;
};

export const getRestaurant = async (name: string) => {
  const response: AxiosResponse = await axios.get(`${config.WOLT_API}/${name}`);
  const restaurant = response.data.results[0];

  const restaurantMapped: RestaurantProps = {
    name: restaurant.name,
    address: restaurant.address,
    completion_estimates: restaurant.completion_estimates.delivery_rush,
    online: restaurant.online,
    key: restaurant.key,
    slug: restaurant.slug,
    listimage: restaurant.listimage,
    categories: restaurant.categories,
  };

  return restaurantMapped;
};

export const getRestaurants = async (ids: string[]) => {
  const restaurants: object[] = [];
  const categories: object[] = [];

  for (let idx in ids) {
    const name: string = ids[idx];
    const item: RestaurantProps = await getRestaurant(name);

    // TODO: Add interface for category
    item.categories.forEach((category: any) => {
      if (
        !categories.includes(category.name) &&
        !config.unusedCategories.includes(category.name)
      ) {
        categories.push(category.name);
      }
    });

    restaurants.push(item);
  }

  // TODO-> Add type to item
  restaurants.sort((a: any, b: any): number => {
    return b.online - a.online;
  });

  return { restaurants, categories };
};
