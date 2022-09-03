import type { NextApiRequest, NextApiResponse } from 'next';
import axios, { AxiosResponse } from 'axios';

const defaultRestaurants: string[] = ['vitrina', 'super-pizza-tlv'];

const getRestaurant = async (name: string) => {
  const baseURL: string = 'https://restaurant-api.wolt.com/v3/venues/slug';
  const response: AxiosResponse = await axios.get(`${baseURL}/${name}`);
  return response.data;
};

const getRestaurants = async (ids: string[]) => {
  const items: object[] = [];
  for (let idx in ids) {
    const name: string = ids[idx];
    const item: object = await getRestaurant(name);
    items.push(item);
  }
  return items;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.body.ids && req.method === 'POST') {
    const ids: string[] = req.body.ids;

    if (!Array.isArray(ids) || !ids.length) {
      return res.status(200).json({
        status: 'error',
        message: "'ids' value is not type of array or not having any items.",
      });
    }
    const response = await getRestaurants(ids);
    return res.status(200).json({ data: response, message: 'success ids' });
  }
  const response = await getRestaurants(defaultRestaurants);
  return res.status(200).json({ data: response, message: 'success' });
}
