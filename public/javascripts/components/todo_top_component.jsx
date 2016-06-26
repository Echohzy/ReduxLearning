import React from 'react';

var AddTodo = React.createClass({
  render: function(){
    return (
      <div>
        <input type="text" />
        <button>AddTodo</button>
      </div>
    );
  }
});

export default AddTodo;