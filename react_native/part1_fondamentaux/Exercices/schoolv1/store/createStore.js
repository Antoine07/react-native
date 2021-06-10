import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';

import rootReducer from '../reducers';
import { load_students_data_firebase, connect_firebase } from '../actions/actions-types';

const configureStore = (preloadedState = {}) => {
    const middlewares = [thunkMiddleware];
    const middlewareEnhancer = applyMiddleware(...middlewares);

    const store = createStore(rootReducer, preloadedState, middlewareEnhancer);

    store.dispatch(load_students_data_firebase());

    store.dispatch(connect_firebase());

    return store;
}

export default configureStore;