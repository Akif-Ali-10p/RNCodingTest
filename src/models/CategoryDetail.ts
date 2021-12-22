export type Category = {
  id?: String;
  name?: String;
  imageUri: String;
  subCategories: Array<SubCategory>;
};

export type SubCategory = {
  id?: String;
  name?: String;
  productIds: Array<Number>;
};
