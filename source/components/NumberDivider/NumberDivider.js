import React, { Component } from "react";
import '../style.css'

const stepNumber = {
  marginLeft: '27px',
  marginTop: '12px',
  fontSize: '46px',
  color: '#fff'
}

const dividerLine = {
  width: '44%',
  borderTop: '1px solid #D4D4D4'
}

const row = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginLeft: '-10px',
  marginTop: '40px'

}

class NumberDivider extends Component {
  render() {
    return (
      <div style={row}>
        <div style={dividerLine}> </div>
        <div className="circle-icon">
          <div style={stepNumber}>
            {this.props.children} 
          </div>
        </div>
        <div style={dividerLine}> </div>
      </div>
    )
  }
}

export default NumberDivider;
