import React from 'react';
var TodoListComponent = React.createClass({
  render: function(){
    return (
      <div>
        {
          this.props.todos.map(function(value, index){
            return (
              <li>
                {value.text}
              </li>
            )
          })
        }
      </div>
    );
  }
});

export default TodoListComponent;