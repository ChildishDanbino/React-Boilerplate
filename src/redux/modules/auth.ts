import { Action } from 'redux';
import LocalStorageService, { ACCESS_TOKEN } from 'services/local-storage';
import { IFormValues } from 'types/formValues';

export const types = {
  AUTHORIZE: 'gooee/auth/AUTHORIZE',

  SIGN_IN: 'gooee/auth/SIGN_IN',
  SIGN_IN_SUCCESS: 'gooee/auth/SIGN_IN_SUCCESS',
  SIGN_IN_FAIL: 'gooee/auth/SIGN_IN_FAIL'
};

interface IAction extends Action {
  data?: string;
  error?: string;
}

export const initialState = {
  loading: false,
  loaded: false,
  error: null,
  signedIn: LocalStorageService.hasItem(ACCESS_TOKEN)
};

export default function reducer(state = initialState, action: IAction) {
  switch (action.type) {
    case types.SIGN_IN:
      return {
        ...state,
        loading: true,
        loaded: false
      };
    case types.SIGN_IN_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        signedIn: true
      };
    case types.SIGN_IN_FAIL:
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

export function authorize(values: IFormValues) {
  return {
    type: types.AUTHORIZE,
    payload: {
      username: values.username,
      password: values.password
    }
  };
}
