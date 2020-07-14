import React from 'react';
import { connect } from 'react-redux';
import { Todo, deleteTodo, fetchTodos } from '../actions';
import { StoreState } from '../reducers';

interface AppProps {
  todos: Todo[];
  deleteTodo: Function;
  fetchTodos: Function;
}

function _App(props: AppProps) {
  const handleFetchClick = (): void => {
    props.fetchTodos();
  };

  const handleDeleteClick = (id: number): void => {
    props.deleteTodo(id);
  };

  const renderList = (): JSX.Element[] => {
    return props.todos.map((todo) => {
      return (
        <div key={todo.id} onClick={() => handleDeleteClick(todo.id)}>
          <p>{todo.title}</p>
        </div>
      );
    });
  };

  return (
    <div>
      <button onClick={handleFetchClick}>Fetch</button>
      {renderList()}
    </div>
  );
}

const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => ({
  todos,
});

export const App = connect(mapStateToProps, { deleteTodo, fetchTodos })(_App);
