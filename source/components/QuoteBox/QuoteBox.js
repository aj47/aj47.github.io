import React, { Component } from "react";
import FlatButtonBlue from '../FlatButtonBlue/FlatButtonBlue'

const box = {
  boxShadow: '1px 2px 4px rgba(0, 0, 0, 0.3)',
  backgroundColor: '#FFF',
  display: 'inline-block',
  marginRight: '16px',
  marginBottom: '16px',
  position: 'relative',
  'flex': '1'
}

const boxTitle = {
  marginTop: '12px',
  fontSize: '26px',
  color: '#1F6193',
  width: '85%'
}

const quoteText = {
  overflow: 'hidden',
  display: '-webkit-box',
  WebkitLineClamp: '3',
  WebkitBoxOrient: 'vertical',
  paddingBottom: '5px',
  marginTop: '-25px'
}

const boxContent = {
  padding: '20px'
}

const flexRow = {
  display: 'flex',
  marginTop: '47px'
}

const greyCircle = {
  backgroundColor: '#D4D4D4',
  minWidth: '70px',
  height: '70px',
  borderRadius: '70px',
  marginRight: '30px'
}


const blueButton = {
  marginBottom: '15px',
  marginTop: '10px',
  marginLeft: '15px'
}

class QuoteBox extends Component {
  render() {
    return (
      <div style={box}>
       <div style={boxContent}>
         <div style={boxTitle}> {this.props.title} </div>
         <div style={flexRow}>
           <div style={greyCircle}>

           </div>
           <div style={quoteText}><p><i> {this.props.children} </i></p></div>
         </div>
       </div>
       <hr></hr>
       <div style={blueButton}>
         <FlatButtonBlue> Click here to read the full story </FlatButtonBlue>
       </div>
      </div>
    )

  }
}

export default QuoteBox;
