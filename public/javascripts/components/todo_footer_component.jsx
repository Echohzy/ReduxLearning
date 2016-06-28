import React from 'react';

var footer = React.createClass({
  render: function(){
    return (
      <div>
        <a className={this.props.filter==='SHOW_ALL' ? "active":""} onClick={()=>this.props.setFilter("SHOW_ALL")}>ALl</a>
        <a className={this.props.filter==='SHOW_ACTIVE' ? "active" : ""}onClick={()=>this.props.setFilter("SHOW_ACTIVE")}>Active</a>
        <a className={this.props.filter==='SHOW_COMPLETE' ? "active" : ""}onClick={()=>this.props.setFilter("SHOW_COMPLETE")}> Completed</a>
      </div>
    );
  }
});

export default footer;