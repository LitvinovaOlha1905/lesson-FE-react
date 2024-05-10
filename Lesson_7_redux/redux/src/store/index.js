import { createStore, combineReducers } from 'redux'
import { usersReducer } from './reducers/usersReducer';
import { productsReducer } from './reducers/productsReducer';

const rootReducer = combineReducers({
  users: usersReducer,
  products: productsReducer
});

export const store = createStore(rootReducer);
