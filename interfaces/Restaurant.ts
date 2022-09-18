import { CategoryProps } from './Category';

export interface RestaurantProps {
  key: object | string | undefined;
  completion_estimates: string;
  categories: CategoryProps[];
  listimage: string;
  address: string;
  online: string;
  slug: string;
  name: any;
}
