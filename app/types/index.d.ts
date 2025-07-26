export interface Products {
    name: string;
    price: number
}

export interface MenuCategory {
    item: string;
    products:Products[];
}
