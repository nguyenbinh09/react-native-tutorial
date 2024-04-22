import React from 'react'; // Add missing import
// action.js

// Action Types
export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';

// Action Creators
export const addTodo = todo => {
  return {
    type: ADD_TODO,
    payload: todo,
  };
};

export const removeTodo = id => {
  return {
    type: REMOVE_TODO,
    payload: id,
  };
};
