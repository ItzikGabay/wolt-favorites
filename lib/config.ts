const ENVIRONMENT = process.env.NODE_ENV;
const base: string =
  ENVIRONMENT === 'development'
    ? 'http://localhost:3000'
    : 'https://itzik-wolt-favorites-itzikgabay.vercel.app';

export default {
  WOLT_API: 'https://restaurant-api.wolt.com/v3/venues/slug',
  unusedCategories: ['Ice cream', 'Kids meals', 'Kids', 'Mediterranean'],
  API_URL: `${base}/api/restaurants`,
  ENVIRONMENT,
};
