import { takeLatest } from 'redux-saga/effects';

import loadCategoriesFlow from 'redux/workflows/categories/loadCategoriesFlow';
import { types as typesCategories } from 'redux/modules/categories';

export default () => [
  takeLatest(typesCategories.GET_CATEGORIES, loadCategoriesFlow)
];
