import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import {Category, Product} from 'models';
import CategoryDetails from './mock/CategoryDetails.json';
import ProductList from './mock/ProductList.json';

// This sets the mock adapter on the default instance
const mock = new MockAdapter(axios);

export const getCategoryDetails = async (catId: String): Promise<Category> => {
  mock.onGet('/category', {params: {catId: catId}}).reply(200, {
    categoryDetails: CategoryDetails.filter(item => item.id === catId),
  });
  const {data} = await axios.get('/category', {params: {catId: catId}});
  return data.categoryDetails[0];
};

export const getSubCategoryDetails = async (
  subCatId: String,
): Promise<Product[]> => {
  mock.onGet('/product', {params: {subCatId: subCatId}}).reply(200, {
    productList:
      subCatId !== 'all'
        ? ProductList.filter(item => item.subCategoryId === subCatId)
        : ProductList,
  });
  const {data} = await axios.get('/product', {params: {subCatId: subCatId}});
  return data.productList;
};
