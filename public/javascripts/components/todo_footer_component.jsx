import React from 'react';

var footer = React.createClass({
  render: function(){
    return (
      <div>
        <a onClick={()=>this.props.setFilter("SHOW_ALL")}>ALl</a>
        <a onClick={()=>this.props.setFilter("SHOW_ACTIVE")}>Active</a>
        <a onClick={()=>this.props.setFilter("SHOW_COMPLETE")}> Completed</a>
      </div>
    );
  }
});

export default footer;