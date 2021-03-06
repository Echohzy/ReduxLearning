import React from 'react';
import TodoTop from '../components/todo_top_component.jsx';
import TodoList from '../components/todo_list_component.jsx';
import TodoFooter from '../components/todo_footer_component.jsx';
import { Filters, addTodo, completeTodo, setFilter } from '../actions/todo_action.jsx';
import { connect } from 'react-redux';
import TodoContainer from '../components/todo_container.jsx';

function todos(todos, filter){
  switch(filter){
    case Filters.SHOW_ALL:
      return todos;
    case Filters.SHOW_ACTIVE:
      return todos.filter(todo => !todo.completed);
    case Filters.SHOW_COMPLETE:
      return todos.filter(todo => todo.completed);
  }
}


function mapStateToProps(state, ownProp){
  return {
    filter: state.filter,
    todos: todos(state.todos, state.filter)
  };
}

function mapDispatchToProps(dispatch){
  return {
    addTodo: function(text){
      dispatch(addTodo(text));
    },
    completeTodo: function(index){
      dispatch(completeTodo(index));
    },
    setFilter: function(filter){
      dispatch(setFilter(filter));
    }
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer);