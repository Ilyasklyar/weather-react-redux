import { createStore, combineReducers, applyMiddleware } from 'redux';
import locationReducer from './location-reducer';
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';


let reducers = combineReducers({
    locationReducer,
    form: formReducer
});

let store = createStore(reducers, applyMiddleware(thunk));

window.store = store;

export default store;