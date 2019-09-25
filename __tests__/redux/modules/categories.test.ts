import reducer, {
    initialState,
    getCategories,
    types as typesCategories
} from '../../../src/redux/modules/categories';

describe('reducers', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, { type: null })).toEqual(
            {
                ...initialState
            }
        );
    });

    it('should handle LOAD', () => {
        expect(reducer(undefined, {
            type: typesCategories.LOAD
        })).toEqual({
            ...initialState,
            loading: true,
            loaded: false
        });
    });

    it('should handle LOAD_SUCCESS', () => {
        expect(reducer(undefined, {
            type: typesCategories.LOAD_SUCCESS,
            payload: { categories: {} }
        })).toEqual({
            ...initialState,
            loading: false,
            loaded: true,
            categories: {}
        });
    });

    it('should handle SIGN_IN_FAIL', () => {
        expect(reducer(undefined, {
            type: typesCategories.LOAD_FAIL,
            error: 'Load Failed'
        })).toEqual({
            ...initialState,
            loading: false,
            loaded: false,
            error: 'Load Failed'
        });
    });
});

describe('actions', () => {
    it('should fire the getCategories dispatch', () => {
        const expectedAction = {
            type: typesCategories.GET_CATEGORIES,
        };
        expect(getCategories()).toEqual(expectedAction);
    });
});
