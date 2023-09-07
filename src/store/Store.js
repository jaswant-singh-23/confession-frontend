import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import postReducer from './reducers/posts';

export const store = createStore(postReducer, applyMiddleware(thunk));
