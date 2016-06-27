import React from 'react';
var TodoListComponent = React.createClass({
  render: function(){
    return (
      <div>
        {
          this.props.todos.map(function(value, index){
            return (
              <li key={index} onClick={()=>this.props.completeTodo(index)}>
                {value.text}
              </li>
            )
          },this)
        }
      </div>
    );
  }
});

export default TodoListComponent;