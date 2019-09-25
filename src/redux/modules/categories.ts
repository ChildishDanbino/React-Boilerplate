import { Action } from 'redux'
import { IKeyType } from 'types/store'

export const types = {
    LOAD: 'gooee/categories/LOAD',
    LOAD_SUCCESS:  'gooee/categories/LOAD_SUCCESS',
    LOAD_FAIL:  'gooee/categories/LOAD_FAIL',

    GET_CATEGORIES: 'gooee/categories/GET_PRODUCTS',
    SET_SELECTED_CATEGORY: 'gooee/categories/SET_SELECTED_CATEGORY'
};

interface IAction extends Action {
    payload?: IKeyType
    error?: string
}

export const initialState = {
    loading: false,
    loaded: false,
    error: null,
    categories: [],
    activeCategory: null
};

export default function reducer(state = initialState, action: IAction) {
    switch (action.type) {
        case types.LOAD:
            return {
                ...state,
                loading: true,
                loaded: false
            };
        case types.LOAD_SUCCESS:
            return {
                ...state,
                loading: false,
                loaded: true,
                categories: action.payload && action.payload.categories
            };
        case types.LOAD_FAIL:
            return {
                ...state,
                loading: false,
                loaded: false,
                error: action.error
            };

        case types.SET_SELECTED_CATEGORY:
            return {
                ...state,
                activeCategory: action.payload && action.payload.activeCategory
            };
        default:
            return state;
    }
}

export function getCategories() {
    return {
        type: types.GET_CATEGORIES,
    };
}


export function setSelectedCategory(activeCategory: string) {
    return {
        type: types.SET_SELECTED_CATEGORY,
        payload: { activeCategory }
    };
}
