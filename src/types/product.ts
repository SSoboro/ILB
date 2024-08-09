import { SellerData } from './user';

export interface Product {
    _id: number;
    step: number;
    name: string;
    image: string;
    active: boolean;
    show: boolean;
    quantity: number;
    buyQuantity: number;
    seller: SellerData;
    replies: number;
    bookmarks: number;
    options: number;
}
