import React, { Component } from "react";


const buttonStyle = {
  cursor: 'pointer',
  margin: '10px 10px 10px 0',
  padding: '15px',
  fontSize: '16px',
  border: '1px solid',
  borderRadius: '5px'

};

class FlatButtonBlue extends Component {
  render() {
      return (
      <button
        className="btn btn-default"
        style={buttonStyle}
        onClick={this.props.handleClick}>{this.props.children}</button>
    );
  }
}

export default FlatButtonBlue;
