import { Action, Store } from 'redux';
import { IProduct } from 'types/product';
import { ICategory } from 'types/categories';

export interface IKeyType<T = any> {
  [key: string]: T;
}

interface IProductsReducer {
  loading: boolean;
  loaded: boolean;
  error: string | null;
  products: IProduct[];
}

interface ICategoriesReducer {
  loading: false;
  loaded: false;
  error: null;
  categories: ICategory[];
  activeCategory: string | null;
}

interface IAuthReducer {
  loading: boolean;
  loaded: boolean;
  error: string | null;
  signedIn: boolean;
}

export interface ReduxStore extends Store {
  products: IProductsReducer;
  categories: ICategoriesReducer;
  auth: IAuthReducer;
}

export interface IAction extends Action {
  payload: IKeyType;
  error?: string;
}
