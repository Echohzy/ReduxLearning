import React from 'react';

function todoWrapper(Component){
  return React.createClass({
    addTodo: function(text){
      console.log('addTodo');
      this.props.addTodo(text);
    },
    render: function(){
      return(
        <Component addTodo={this.addTodo} todos={this.props.todos} completeTodo={this.props.completeTodo} filter={this.props.filter} setFilter={this.props.setFilter}/>
      );
    }
  });
}

export default todoWrapper;