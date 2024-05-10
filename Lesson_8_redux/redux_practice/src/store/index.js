import { createStore, combineReducers, applyMiddleware } from 'redux'
import { placesReducer } from './reducers/placesReducer';
import { usersReducer } from './reducers/usersReducer';
import { thunk } from 'redux-thunk'
import { todosReducer } from './reducers/todosReducer';
import { singleUserReducer } from './reducers/singleUserReducer';

const rootReducer = combineReducers({
  places: placesReducer,
  users: usersReducer,
  todos: todosReducer,
  singleUser: singleUserReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
