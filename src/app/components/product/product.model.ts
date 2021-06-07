import { Category } from "../category/category.model";
import { Provider } from "../provider/provider.model";

export interface Product {
    product_id?: string
    name: string
    price: number
    category_id: string
    provider_id: string
}