import { combineReducers } from 'redux';

import reducers from './modules';

const createAppReducer = () => {
    //@ts-ignore
    return combineReducers({
        ...reducers
    });
};

export default createAppReducer;
