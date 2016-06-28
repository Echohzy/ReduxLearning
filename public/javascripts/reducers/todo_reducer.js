
import { combineReducers } from 'redux';
import { ADD_TODO, COMPLETE_TODO, SET_FILTER, Filters} from '../actions/todo_action.jsx';

var filter = function(state = Filters.SHOW_ALL, action){
  switch(action.type){
    case SET_FILTER:
      return action.filter;
    default:
      return state;
  };
};

var todos = function(state = [], action){
  switch(action.type){
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ];
    case COMPLETE_TODO:
      return [
        ...state.slice(0, action.index),
        Object.assign({},state[action.index],{completed: true}),
        ...state.slice(action.index+1)
      ];
    default:
      return state || [];
  };

};

export default combineReducers({
  filter: filter,
  todos: todos
});