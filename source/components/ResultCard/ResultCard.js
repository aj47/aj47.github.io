import React from "react";
import CheckActive from '../Services/check-active.png'
import CheckDefault from '../Services/check-default.png'
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

const info = {
  fontSize: '12px',
  marginTop: '5px',
  fontStyle: 'italic',
  color: '#4F4F4F'
}

const description = {
  marginTop: '30px',
  color: 'grey',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  lineHeight: '16px',
  maxHeight: '32px',
  WebkitLineClamp: '2',
  WebkitBoxOrient: 'vertical'
}


const content = {
  display: 'inline-block',
  width: '60%'
}

const card = {
  height: '240px',
  position: 'relative',
  border: 'solid 1px #D4D4D4',
  boxShadow: '0 3px 6px rgba(0, 0, 0, 0.16)',
  marginBottom: '25px'
}

const blueButton = {
  cursor: 'pointer',
  backgroundColor: '#1F6193',
  borderRadius: '6px',
  color: '#FFF',
  height: '50px',
  width: '160px',
  marginRight: '30px',
  fontSize: '18px'
}

const ServicesTitle = {
  fontWeight: 'bold',
  color: '#4F4F4F'
}
const serviceText = {
  color: '#4F4F4F'
}

const flex = {
  display: 'flex',
  justifyContent: 'space-between'
}

const ResultCard = (props) => {
  let service_list = "";
  if (props.subService) {
    let temp = props.subService.split(",");
    temp.push(props.services);
    let list = temp.map(function(item) { return '<li>' + item + '</li>' });
    service_list = "<ul>" + list.join("") + "</ul>";
  }
  let comparingThis = false;

  const viewProfile = () => {
    props.profileMethod(props); 
  }

  const addCompare = () => {
    props.compareMethod(props.wholeObject); 
  }

  props.compare.forEach((element) => {
    if (element.Outlet_Name == props.title) {
      comparingThis = true;
    } 
  });

  return (
    <div className="result-card">
      
      { props.imgsrc ? 
        <div>

          <div className="header-bar">
            <div className="my-row" style={{marginLeft: '15px'}}>
            </div>
            <div className="my-row">
              <div className="pink-bub">
                Home Support
              </div>
              <div className="blue-bub">
                Government Subsidised
              </div>
            </div>
          </div>
          <div className="card-content">
            <div className="flex-row" style={{alignItems: 'flex-start', flexWrap: 'nowrap'}}>
              <img src={props.imgsrc} className="result-image"/>
              <div>
                <div className="result-card-heading" onClick={viewProfile}> {props.title} </div>
                <div className="result-card-info"> {props.business} </div>
                <div className="result-card-phone"> Ph. {props.phone} </div>
                {props.services && <div>
                  <div className="result-card-service-title">
                    Services
                  </div>
                  <div className="result-card-service-text">
                    {props.subService && <div>{ ReactHtmlParser(service_list) } </div>}
                    {!props.subService && <div> {props.services} </div>}
                  </div>
                </div>}
              </div>
            </div>
            <hr></hr>
            <div className="card-compare-row">
              <div className="my-row" style={{marginLeft: '15px'}}>
                { comparingThis && <img onClick={addCompare} className="big-radio2" src={CheckActive} /> }
                { !comparingThis && <img onClick={addCompare} className="big-radio2" src={CheckDefault} /> }
                Compare
              </div>
              <div>
                <button className="card-button2" onClick={viewProfile}> View Website </button>
                <button className="card-button" onClick={viewProfile}> View Profile </button>
              </div>
            </div>
          </div>

        </div>
        : 
        <div>
          <div className="header-bar">
            <div className="my-row" style={{marginLeft: '15px'}}>
            </div>
            <div className="my-row">
              <div className="pink-bub">
                Home Support
              </div>
              <div className="blue-bub">
                Government Subsidised
              </div>
            </div>
          </div>
          <div className="card-content">
            <div className="result-card-heading" onClick={viewProfile}> {props.title} </div>
            <div className="result-card-info"> {props.business} </div>
            <div className="result-card-phone"> Ph. {props.phone} </div>
            {props.services && <div>
              <div className="result-card-service-title">
                Services
              </div>
              <div className="result-card-service-text">
                {props.subService && <div>{ ReactHtmlParser(service_list) } </div>}
                {!props.subService && <div> {props.services} </div>}
              </div>
            </div>}
            <hr></hr>
            <div className="card-compare-row">
              <div className="my-row" style={{marginLeft: '15px'}}>
                { comparingThis && <img onClick={addCompare} className="big-radio2" src={CheckActive} /> }
                { !comparingThis && <img onClick={addCompare} className="big-radio2" src={CheckDefault} /> }
                Compare
              </div>
              <div>
                <button className="card-button2" onClick={viewProfile}> View Website </button>
                <button className="card-button" onClick={viewProfile}> View Profile </button>
              </div>
            </div>
          </div>
        </div>

      }

    </div> 
  )
};

export default ResultCard;
