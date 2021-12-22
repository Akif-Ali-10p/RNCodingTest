/**
 * @format
 */

import 'react-native';

// Note: test renderer must be required after react-native.

import ProductList from '../src/services/mock/ProductList.json';
import {getSubCategoryDetails} from 'services/api';
// import React from 'react';
// import renderer from 'react-test-renderer';
// import App from 'App';

it('get all products', () => {
  expect(getSubCategoryDetails('all')).toBe(ProductList);
});

// it('renders correctly', () => {
//   renderer.create(<App />);
// });
