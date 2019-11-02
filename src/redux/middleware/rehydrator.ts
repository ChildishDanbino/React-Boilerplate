import { Action } from 'redux';
import { ReduxStore } from 'types/store';
// import { types as typesApp } from 'redux/modules/app';
// import {
//     initialState as authInitialState,
//     types as typesAuth
// } from 'redux/modules/auth';

/**
 * Takes in current Redux state and action dispatched and returns a new redux store
 * depending on the action dispatched
 */
const rehydrator = (state: ReduxStore, action: Action) => {
  switch (action.type) {
    case 'LOGOUT':
      return undefined;
    default:
      return state;
  }
};

export default rehydrator;
