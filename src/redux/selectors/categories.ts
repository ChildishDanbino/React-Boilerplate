import { createSelector } from 'reselect';
import { ReduxStore } from 'types/store'
import { ICategory } from 'types/categories'

const getCategoriesState = (state: ReduxStore) => state.categories;

export const getCategoriesSelector = createSelector(
    getCategoriesState,
    categories => categories.categories || []
);

export const getActiveCategory = createSelector(
    getCategoriesState,
    categories => categories.activeCategory || null
);

export const getCategoryNames = createSelector(
    getCategoriesSelector,
    categories => categories.map((category: ICategory) => category.name)
);

