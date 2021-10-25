import { useReducer } from 'react';

interface TodoListState<Item> {
  todos: Item[];
}

type TodoListAction<Item> =
  | { type: 'ADD'; payload: { item: Item } }
  | { type: 'REMOVE'; payload: { index: number } }
  | { type: 'CLEAR' };

const INITIAL_STATE = { todos: [] };

const reducer = <Item>(
  state: TodoListState<Item>,
  action: TodoListAction<Item>,
): TodoListState<Item> => {
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

export const useTodoList = () => {
  const [state, dispatch] = useReducer(reducer, { todos: [1, 2, 3] });
};
