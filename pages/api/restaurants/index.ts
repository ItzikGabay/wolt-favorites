import type { NextApiRequest, NextApiResponse } from 'next';
import { getRestaurant, getRestaurants } from '../../../lib/data';

const defaultRestaurants: string[] = ['vitrina', 'super-pizza-tlv'];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.body.ids && req.method === 'POST') {
    const ids: string[] = req.body.ids;

    if (!Array.isArray(ids) || !ids.length) {
      return res.status(500).json({
        status: 'error',
        message: "'ids' value is not type of array or not having any items.",
      });
    }
    const response = await getRestaurants(ids);
    return res.status(200).json({ data: response, status: 'success' });
  }
  const response = await getRestaurants(defaultRestaurants);
  return res.status(200).json({ data: response, status: 'success' });
}
