export type Category = {
  id: string;
  name: string;
  imageUri: string;
  subCategories: Array<SubCategory>;
};

export type SubCategory = {
  id: string;
  name: string;
  productIds: Array<Number>;
};
