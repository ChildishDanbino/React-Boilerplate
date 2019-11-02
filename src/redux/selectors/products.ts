import { createSelector } from 'reselect';
import { ReduxStore } from 'types/store';
import { ICategory } from 'types/categories';
import { IProduct } from 'types/product';

import {
  getCategoriesSelector,
  getActiveCategory,
  getCategoryNames
} from 'redux/selectors/categories';

const getProductState = (state: ReduxStore) => state.products;

export const getProductsSelector = createSelector(
  // eslint-disable-line
  getProductState,
  products => products.products || []
);

export const getProductData = createSelector(
  getProductsSelector,
  getCategoriesSelector,
  (products, categories) => {
    return categories.reduce(
      (obj: any, category: ICategory) => ({
        ...obj,
        ...{
          [category.name]: products.filter(
            (product: IProduct) => product.category === category.id
          )
        }
      }),
      {}
    );
  }
);

export const getCategoryCounts = createSelector(
  getProductData,
  getCategoryNames,
  (products, categoryNames) =>
    categoryNames.map((category: string) => {
      return {
        name: category,
        length: products[category].length
      };
    })
);

export const getTableData = createSelector(
  getProductData,
  getActiveCategory,
  (productData, activeCategory) =>
    activeCategory ? productData[activeCategory] : []
);
