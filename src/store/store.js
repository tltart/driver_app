import { applyMiddleware, combineReducers, createStore } from 'redux';
import DriverReducer from './driverReducer';
import UserReducer from './userReducer';

import ThunkMiddleware from 'redux-thunk';

let reducers = combineReducers({
    users: UserReducer,
    drivers: DriverReducer,

});

let store = createStore(reducers, applyMiddleware(ThunkMiddleware));

window.store = store;

export default store;