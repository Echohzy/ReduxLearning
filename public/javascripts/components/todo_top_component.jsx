import React from 'react';

var AddTodo = React.createClass({
  handleClick: function(e){
    var text = this.refs.input.value.trim();
    this.props.addTodo(text);
  },
  render: function(){
    return (
      <div>
        <input type="text" ref="input" />
        <button onClick={(e) => this.handleClick(e)}>AddTodo</button>
      </div>
    );
  }
});

export default AddTodo;