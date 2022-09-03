import type { NextApiRequest, NextApiResponse } from 'next';
import { getRestaurant, getRestaurants } from '../../../lib/data';
import { sendErrorResponse, sendSuccessResponse } from '../../../lib/response';

const defaultRestaurants: string[] = [
  'vitrina',
  'super-pizza-tlv',
  'under-the-tree',
  'hamosad',
  'night-cookie',
  'knaffex-ibn-gvirol',
];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.body.ids && req.method === 'POST') {
    const ids: string[] = req.body.ids;

    if (!Array.isArray(ids) || !ids.length) {
      return sendErrorResponse(
        res,
        "'ids' value is not type of array or not having any items.",
      );
    }
    const response = await getRestaurants(ids);
    sendSuccessResponse(res, null, 200, response);
  }
  const response = await getRestaurants(defaultRestaurants);
  sendSuccessResponse(res, null, 200, response);
}
