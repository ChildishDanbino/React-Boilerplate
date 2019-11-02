import { takeLatest } from 'redux-saga/effects';

import loadProductsFlow from 'redux/workflows/products/loadProductsFlow';
import loadProductsAndCategoriesFlow from 'redux/workflows/products/loadProductsAndCategoriesFlow';
import { types as typesProducts } from 'redux/modules/products';

export default () => [
  takeLatest(typesProducts.GET_PRODUCTS, loadProductsFlow),
  takeLatest(
    typesProducts.GET_PRODUCTS_AND_CATEGORIES,
    loadProductsAndCategoriesFlow
  )
];
