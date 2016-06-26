export const ADD_TODO = "ADD_TODO"
export const COMPLETE_TODO = "COMPLETE_TODO";
export const SET_FILTER = "SET_FILTER";

export const Filters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETE: 'SHOW_COMPLETE',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
};

export function addTodo(text){
  return {
    type: ADD_TODO,
    text
  };
}

export function completeTodo(index){
  return {
    type: COMPLETE_TODO,
    index
  };
}

export function setFilter(filter){
  return {
    type: SET_FILTER,
    filter
  };
}

