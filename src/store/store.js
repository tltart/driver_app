
import { applyMiddleware, combineReducers, createStore } from 'redux';
import UserReducer from './driverReducer';
import ThunkMiddleware from 'redux-thunk';

let reducers = combineReducers({
    user: UserReducer,

});

let store = createStore(reducers, applyMiddleware(ThunkMiddleware));

window.store = store;

export default store;