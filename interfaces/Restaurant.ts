export interface RestaurantProps {
    name: any;
    address: string;
    completion_estimates: { delivery_rush: string };
    online: string;
    key: object | string | undefined;
    slug: string;
    listimage: string;
}