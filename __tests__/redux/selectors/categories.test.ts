import {
    getCategoriesSelector,
    getActiveCategory
} from '../../../src/redux/selectors/categories';

const state = {
    categories: {
        loading: false,
        loaded: false,
        error: null,
        categories: [
            {
                "id": 1,
                "name": "Shirts"
            },
            {
                "id": 2,
                "name": "Shoes"
            },
            {
                "id": 3,
                "name": "Accessory"
            },
            {
                "id": 4,
                "name": "Pants"
            },
            {
                "id": 5,
                "name": "Hats"
            }
        ],
        activeCategory: 'Shirts'
    }
};


describe('redux: selectors: categories', () => {
    it('should return the list state', () => {
        //@ts-ignore
        const selectorResult = getCategoriesSelector(state);
        expect(selectorResult).toEqual(state.categories.categories);
    });

    it('should return the getActiveListProduct', () => {
        //@ts-ignore
        const selectorResult = getActiveCategory(state);
        expect(selectorResult).toEqual(state.categories.activeCategory);
    });
});
