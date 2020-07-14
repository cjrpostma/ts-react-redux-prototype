import { todosReducer } from './todos';
import { combineReducers } from 'redux';

export const reducers = combineReducers({
  todos: todosReducer,
});
