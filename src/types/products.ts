export interface Product {
  id: number;
  title: string;
  description?: string;
  price: number;
  oldPrice?: number;
  discount?: number;
  image: string;
  rating: number;
  reviews: number;
  isSale?: boolean;
  isGlutenFree?: boolean;
  attribute:string,
  category:string,
  slug: string
}
