import type { NextApiRequest, NextApiResponse } from 'next';
import { getRestaurant, getRestaurants } from '../../../lib/data';
import { sendErrorResponse, sendSuccessResponse } from '../../../lib/response';

const defaultRestaurants: string[] = [
  'vitrina',
  'vitrina-ibn-gvirol',
  'gdb',
  'prozdor-burger',
  'super-pizza-tlv',
  'roll-n-roll-sushi-sarona',
  'philadelphia',
  'tal-bagels',
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
    return sendSuccessResponse(res, null, 200, response);
  }
  const response = await getRestaurants(defaultRestaurants);
  sendSuccessResponse(res, null, 200, response);
}
