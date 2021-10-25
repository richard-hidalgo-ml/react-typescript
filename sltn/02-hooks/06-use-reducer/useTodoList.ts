import { useReducer } from 'react';

interface TodoListItem {
  name: string;
}

interface TodoListState {
  todos: TodoListItem[];
}

type TodoListAction =
  | { type: 'ADD'; payload: { item: TodoListItem } }
  | { type: 'REMOVE'; payload: { index: number } }
  | { type: 'CLEAR' };

const INITIAL_STATE: TodoListState = { todos: [] };

const reducer = (
  state: TodoListState,
  action: TodoListAction,
): TodoListState => {
  switch (action.type) {
    case 'ADD':
      return {
        ...state,
        todos: [...state.todos, action.payload.item],
      };
    case 'REMOVE':
      return {
        ...state,
        todos: [
          ...state.todos.filter((_, index) => index !== action.payload.index),
        ],
      };
    case 'CLEAR':
      return INITIAL_STATE;
    default:
      return state;
  }
};

interface UseTodoList {
  todos: TodoListItem[];
  add: (item: TodoListItem) => void;
  remove: (index: number) => void;
  clear: () => void;
}

export const useTodoList = (initialState = INITIAL_STATE): UseTodoList => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return {
    todos: state.todos,
    add: (item: TodoListItem) => dispatch({ type: 'ADD', payload: { item } }),
    remove: (index: number) => dispatch({ type: 'REMOVE', payload: { index } }),
    clear: () => dispatch({ type: 'CLEAR' }),
  };
};
