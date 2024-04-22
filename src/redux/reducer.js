import {ADD_TODO, REMOVE_TODO} from './action';

// Import the necessary action types

// Define the initial state
const initialState = {
  todoList: [],
};

// Define the reducer function
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todoList: [...state.todoList, action.payload],
      };
    case REMOVE_TODO:
      return {
        ...state,
        todoList: state.todoList.filter(todo => {
          todo.id !== action.payload;
        }),
      };
    default:
      return state;
  }
};

export default todoReducer;
