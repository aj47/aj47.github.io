import React, { Component } from "react";
import Style from '../style.css';
import FlatButtonBlue from '../FlatButtonBlue/FlatButtonBlue'
import RightArrow from '../arrow-right.png';

const imgStyle = {
  height: '155px',
  width: '100%',
  backgroundColor: 'lightblue'
}

const stepNumber = {
  marginLeft: '27px',
  marginTop: '12px',
  fontSize: '46px',
  color: '#fff'
}

const stepCircle = {
  'position': 'absolute',
  marginTop: '-40px',
  marginLeft: 'calc(50% - 39px)'
}

const title = {
  color: '#4F4F4F',
  fontSize: '22px',
  color: '#1F6193',
  fontWeight: 'bold',
  textAlign: 'left'
}

const text = {
  color: '#4F4F4F',
  fontSize: '18px'
}

const buttonMargins = {
  display: 'flex',
  justifyContent: 'center'
}
class StepBox extends Component {
  render() {
    return (
      <div className="card-box">
        <img src={this.props.imgSrc1} className="default-img"/>
        {
          this.props.stepNumber && <div className="circle-icon" style={stepCircle}>
            <div style={stepNumber}> {this.props.stepNumber} </div>
          </div>
        }
        <div className="card-box-content">
          <div style={title}> {this.props.title}</div>
        </div>
        <hr></hr>
        <div className="learn-more">
          Learn more
          <img src={RightArrow} className="right-arrow"/>
        </div>

      </div>
    )
  }
}

export default StepBox;
