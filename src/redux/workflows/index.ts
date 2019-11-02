import { all } from 'redux-saga/effects';

import authWorkflow from 'redux/workflows/auth';
import categoriesWorkFlow from 'redux/workflows/categories';
import productsWorkFlow from 'redux/workflows/products';

export default function*() {
  return yield all([
    ...authWorkflow(),
    ...categoriesWorkFlow(),
    ...productsWorkFlow()
  ]);
}
