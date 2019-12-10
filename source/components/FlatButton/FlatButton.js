import React, { Component } from "react";
import Remove from './remove.svg';

const buttonStyle = {
  cursor: 'pointer',
  margin: '10px 10px 10px 0',
  padding: '15px',
  paddingBottom: '10px',
  color: '#4F4F4F',
  fontSize: '16px',
  backgroundColor: '#FFF',
  borderColor: '#D4D4D4',
  borderRadius: '5px'
};

class FlatButton extends Component {
  render() {
      return (
      <button
        className="btn btn-default"
        style={buttonStyle}
        onClick={this.props.handleClick}>
          <div className="circle-icon small-size remove">
            <img src={Remove} className="remove-icon"/> 
          </div>
          {this.props.children}
      </button>
    );
  }
}

export default FlatButton;
