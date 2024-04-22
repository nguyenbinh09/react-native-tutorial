import {createStore, combineReducers} from 'redux';
import todoReducer from './reducer';

const allReducers = combineReducers({
  todoReducer,
  // add more reducers here
});
let store = createStore(todoReducer);

export default store;
