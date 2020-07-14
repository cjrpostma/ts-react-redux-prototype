import { Todo } from './../actions';
import { todosReducer } from './todos';
import { combineReducers } from 'redux';

export interface StoreState {
  todos: Todo[];
}

export const reducers = combineReducers<StoreState>({
  todos: todosReducer,
});
