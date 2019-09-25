import { Action } from 'redux'
import { IKeyType } from 'types/store'

export const types = {
    LOAD: 'gooee/products/LOAD',
    LOAD_SUCCESS:  'gooee/products/LOAD_SUCCESS',
    LOAD_FAIL:  'gooee/products/LOAD_FAIL',

    GET_PRODUCTS: 'gooee/products/GET_PRODUCTS',
};

interface IAction extends Action {
    payload: IKeyType
    error?: string
}

export const initialState = {
    loading: false,
    loaded: false,
    error: null,
    products: []
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
                products: action.payload.products
            };
        case types.LOAD_FAIL:
            return {
                ...state,
                loading: false,
                loaded: false,
                error: action.error
            };
        default:
            return state;
    }
}

export function getProducts() {
    return {
        type: types.GET_PRODUCTS,
    };
}
