import { takeLatest } from 'redux-saga/effects';

import loadProductsFlow from 'redux/workflows/products/loadProductsFlow'
import { types as typesProducts } from 'redux/modules/products';

export default () => [
    takeLatest(typesProducts.GET_PRODUCTS, loadProductsFlow),
];
