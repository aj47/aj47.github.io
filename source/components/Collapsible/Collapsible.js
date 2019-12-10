import React, { Component } from "react";
/*
import ChevronDown from './chevron-arrow-down.svg';
import ChevronUp from './chevron-arrow-up.svg';
import ChevronDown2 from '../Services/chevron-arrow-down.svg';
import ChevronUp2 from '../Services/chevron-arrow-up.svg';
*/
import ChevronDown from './Arrow-down-white.svg';
import ChevronUp from './Arrow-up-white.svg';
import ChevronDown2 from './Arrow-default.svg';
import ChevronUp2 from './Arrow-up-blue.svg';

import CheckActive from '../Services/check-active.png'
import CheckDefault from '../Services/check-default.png'

const chevronStyle = {
  position: 'absolute',
  width: '20px',
  right: '10px',
  marginTop: '30px'
}

let buttonRow1 = {
  cursor: 'pointer',
  width: '100%',
  backgroundColor: '#154569',
  color: 'white',
  fontSize: '20px',
  paddingLeft: '17px',
  textAlign: 'left',
  paddingTop: '20px',
  paddingBottom: '20px',
  borderBottom: '1px solid #FFF'
}

let buttonRow2 = {
  cursor: 'pointer',
  border: 'none',
  width: '100%',
  backgroundColor: '#1F6193',
  color: 'white',
  fontSize: '20px',
  paddingTop: '20px',
  paddingBottom: '20px',
  paddingLeft: '17px',
  textAlign: 'left'
}

let buttonRow3 = {
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
  width: '100%',
  backgroundColor: '#F2F2F2',
  fontSize: '18px',
  paddingLeft: '17px',
  textAlign: 'left',
  border: 'none',
  color: 'grey',
  paddingTop: '20px',
  paddingBottom: '20px',
  borderBottom: '1px solid #D4D4D4'
}

let grey = {
  color: 'grey'
}

let relative = {
  position: 'relative',
  cursor: 'pointer'
}

let widthLimiter = {
  width: '75%'
}

class Collapsible extends Component {
  clicked(key) {
    if (this.props.filters) {
      this.props.filters[key] = !this.props.filters[key];
      this.props.filterMethod(key, this.props.filters[key]);
    }
    this.setState({isShowing: !this.state.isShowing});
  }

  show = () => {
    this.setState({isShowing: !this.state.isShowing});
  }

  constructor(props) {
    super(props);
    let letItShow = false;
    if (this.props.filters && this.props.filters[this.props.title]) {
      letItShow = true;
    } else if(this.props.openHeaders) {
      if(this.props.openHeaders.indexOf(this.props.title) != -1)
        letItShow = true;
    }
    
    this.state = {
      isShowing: letItShow
    };
  }
  render() {
    return (
      <div>
        { !this.props.isntGroup && 
          <div style={relative} onClick={(e) => this.clicked(this.props.title)}>
            { (!this.state.isShowing && this.props.style != "white") && <img src={ChevronDown} style={chevronStyle} /> }
            { (this.state.isShowing && this.props.style != "white") && <img src={ChevronUp} style={chevronStyle} /> }
            { (!this.state.isShowing && this.props.style == "white") && <img src={ChevronDown2} style={chevronStyle} /> }
            { (this.state.isShowing && this.props.style == "white") && <img src={ChevronUp2} style={chevronStyle} /> }
          </div>
        }
        {this.props.style != "white" && <button style={this.state.isShowing ? buttonRow2 : buttonRow1} onClick={(e) => this.clicked(this.props.title)}>
          { (this.props.filters && this.props.filters[this.props.title]) && <img className="big-radio2" src={CheckActive} /> }
          { (this.props.filters && !this.props.filters[this.props.title]) && <img className="big-radio2" src={CheckDefault} /> }
          <div style={widthLimiter}> {this.props.title} </div>
        </button>}

        {this.props.style == "white" && <button style={this.state.isShowing ? buttonRow3 : buttonRow3} onClick={(e) => this.clicked(this.props.title)} >
          { (this.props.filters && this.props.filters[this.props.title]) && <img className="big-radio2" src={CheckActive} /> }
          { (this.props.filters && !this.props.filters[this.props.title]) && <img className="big-radio2" src={CheckDefault} /> }
          <div style={widthLimiter}> {this.props.title} </div>
        </button>}

        {
          (this.state.isShowing || (this.props.filters && this.props.filters[this.props.title])) && <div style={grey}>{this.props.children}</div>
        }
      </div>
    )
  }
}

export default Collapsible;
