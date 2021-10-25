import { useReducer } from 'react';

const INITIAL_STATE = { todos: [] };

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case 'REMOVE':
      return {
        ...state,
        todos: [...state.todos.filter((_, index) => index !== action.payload.index)],
      };
    case 'CLEAR':
      return INITIAL_STATE;
    default:
      return state;
  }
};

export const useTodoList = (initialState = INITIAL_STATE) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return {
    todos: state.todos,
    add: (name) => dispatch({ type: 'ADD', payload: { name } }),
    remove: (index) => dispatch({ type: 'REMOVE', payload: { index } }),
  };
};
