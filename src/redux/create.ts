import { applyMiddleware, compose, createStore, Action } from 'redux';
import createSagaMiddleware from 'redux-saga'

import workflows from 'redux/workflows';
import rehydrator from 'redux/middleware/rehydrator';
import createAppReducer from 'redux/createAppReducer';

function create() {
    const appReducer = createAppReducer();
    const sagaMiddleware = createSagaMiddleware();

    const rootReducer = (state: any, action: Action) => {
        const newState = rehydrator(state, action);
        return appReducer(newState, action);
    };

    const composeEnhancers =
        //@ts-ignore
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const enhancer = composeEnhancers(
        applyMiddleware(sagaMiddleware)
    );

    const store = createStore(rootReducer, enhancer);
    sagaMiddleware.run(workflows);

    return store;
}

export default create;
