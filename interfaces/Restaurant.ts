import {CategoryProps} from "./Category";

export interface RestaurantProps {
    name: any;
    address: string;
    completion_estimates: string;
    online: string;
    key: object | string | undefined;
    slug: string;
    listimage: string;
    categories: CategoryProps[];
}