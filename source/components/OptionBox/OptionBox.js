import React, { Component } from "react";
import Style from '../style.css';
import FlatButtonBlue from '../FlatButtonBlue/FlatButtonBlue'

const boxTitle = {
  marginTop: '12px',
  fontSize: '22px',
  color: '#1F6193'
}

const checkStyle = {
  zoom: '3'
}

const topRow = {
  display: 'flex',
}


const buttonMargins = {
  display: 'flex',
  justifyContent: 'center'
}

function BoxHeader(props) {
  const type = props.type;
  if (type === 'red-box') {
    return (
      <div>
        <div className='red-box1'></div>
        <div className='red-box2'></div>   
      </div>
   );
  } else {
    return (<div className={type}></div>);
  }
}

function CheckBox(props) {
  if (props.other === "check") {
    return (
      <div>
        <input style={checkStyle} type="checkbox"/>
      </div>
    ) 
  } else {
    return '';
  }
}

class OptionBox extends Component {
  render() {
    return (
      <div className="option-box card-box">
       <BoxHeader type={this.props.type}/> 
       <div className="card-box-content">
         <div style={topRow}>
           <CheckBox other={this.props.other}/>
           <div style={boxTitle}> {this.props.title} </div>
         </div>
         <p> {this.props.children} </p>
       </div>
       <hr></hr>
       <div style={buttonMargins}>
         <FlatButtonBlue> Click to learn more</FlatButtonBlue>
       </div>
      </div>
    )
  }
}

export default OptionBox;
