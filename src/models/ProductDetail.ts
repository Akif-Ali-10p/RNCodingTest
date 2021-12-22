export type Product = {
  id: number;
  name: string;
  brand: Brand;
  price: number;
};

export type Brand = {
  id: string;
  name: string;
};
