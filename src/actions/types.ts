import { DeleteTodoAction, FetchTodosAction } from './index';

export enum ActionTypes {
  fetchTodos,
  deleteTodo,
}

export type Action = DeleteTodoAction | FetchTodosAction;
