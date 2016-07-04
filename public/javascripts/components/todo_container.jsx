import React from 'react';
import TodoTop from '../components/todo_top_component.jsx';
import TodoList from '../components/todo_list_component.jsx';
import TodoFooter from '../components/todo_footer_component.jsx';
import createTodoComponent from './mixins/todo_wrapper.jsx';

var TodoContainer = React.createClass({
  render: function(){
    return (
      <div>
        <TodoTop addTodo={this.props.addTodo} />
        <TodoList todos={this.props.todos} completeTodo={this.props.completeTodo} />
        <TodoFooter filter={this.props.filter} setFilter={this.props.setFilter} />
      </div>
    );
  }
});

export   default createTodoComponent(TodoContainer);