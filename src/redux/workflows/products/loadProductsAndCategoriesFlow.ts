// fork is non-blocking vs call is blocking
import { fork } from 'redux-saga/effects';

import loadProductsFlow from 'redux/workflows/products/loadProductsFlow';
import loadCategoriesFlow from 'redux/workflows/categories/loadCategoriesFlow';

export default function*() {
  try {
    yield fork(loadProductsFlow);
    yield fork(loadCategoriesFlow);
  } catch (e) {
    console.error(e.message); // eslint-disable-line no-console
    // todo handle and log errors as required.
  }
}
